// Modul central de consimțământ cookies.
// O singură sursă pentru preferințe: citire/scriere validată, versiune de politică,
// expirare, evenimente de pornire/oprire a scripturilor externe.

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface ConsentRecord {
  version: string;
  timestamp: number;
  preferences: CookiePreferences;
}

// Crește această versiune la orice modificare a Politicii de Cookies —
// bannerul va reapărea automat pentru toți vizitatorii.
export const COOKIE_POLICY_VERSION = "1.0";

// Preferințele expiră după 12 luni și bannerul reapare.
export const CONSENT_MAX_AGE_MS = 12 * 30.44 * 24 * 60 * 60 * 1000;

const CONSENT_KEY = "medstom_cookie_consent";
export const CONSENT_CHANGED_EVENT = "medstom:consent-changed";
export const CONSENT_OPEN_EVENT = "medstom:consent-open";

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const isValidPreferences = (value: unknown): value is CookiePreferences => {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.necessary === "boolean" &&
    typeof v.analytics === "boolean" &&
    typeof v.marketing === "boolean"
  );
};

const isValidRecord = (value: unknown): value is ConsentRecord => {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.version === "string" &&
    typeof v.timestamp === "number" &&
    isValidPreferences(v.preferences)
  );
};

// Citire sigură: o valoare coruptă din localStorage nu blochează site-ul.
export const getConsent = (): ConsentRecord | null => {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!isValidRecord(parsed)) return null;
    return parsed;
  } catch {
    return null;
  }
};

// Consimțământul e valid doar dacă există, e pe versiunea curentă și nu a expirat.
export const hasValidConsent = (): boolean => {
  const record = getConsent();
  if (!record) return false;
  if (record.version !== COOKIE_POLICY_VERSION) return false;
  if (Date.now() - record.timestamp > CONSENT_MAX_AGE_MS) return false;
  return true;
};

export const getPreferences = (): CookiePreferences => {
  const record = getConsent();
  return record ? record.preferences : { ...DEFAULT_PREFERENCES };
};

export const hasConsent = (category: keyof CookiePreferences): boolean => {
  if (!hasValidConsent()) return category === "necessary";
  return getPreferences()[category];
};

export const saveConsent = (preferences: CookiePreferences): ConsentRecord => {
  const record: ConsentRecord = {
    version: COOKIE_POLICY_VERSION,
    timestamp: Date.now(),
    preferences: { ...preferences, necessary: true },
  };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  } catch {
    // localStorage indisponibil (mod privat etc.) — consimțământul ține doar pe sesiune.
  }
  applyConsent(record.preferences);
  window.dispatchEvent(
    new CustomEvent<CookiePreferences>(CONSENT_CHANGED_EVENT, { detail: record.preferences })
  );
  return record;
};

export const openConsentSettings = () => {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
};

// Registru de scripturi externe controlate de consimțământ.
// Pentru a activa GA4/marketing: registerConsentLoader({ category, start, stop }).
export interface ConsentLoader {
  category: "analytics" | "marketing";
  start: () => void;
  stop: () => void;
}
const loaders: ConsentLoader[] = [];
const active = new Set<ConsentLoader>();

export const registerConsentLoader = (loader: ConsentLoader) => {
  loaders.push(loader);
  if (hasValidConsent() && getPreferences()[loader.category]) {
    loader.start();
    active.add(loader);
  }
  return () => {
    if (active.has(loader)) loader.stop();
    active.delete(loader);
    loaders.splice(loaders.indexOf(loader), 1);
  };
};

// Punct unic de pornire/oprire a scripturilor externe, în funcție de preferințe.
export const applyConsent = (preferences: CookiePreferences) => {
  for (const l of loaders) {
    const allowed = preferences[l.category];
    if (allowed && !active.has(l)) { l.start(); active.add(l); }
    else if (!allowed && active.has(l)) { l.stop(); active.delete(l); }
  }
};

// La încărcarea aplicației: aplică preferințele salvate (dacă sunt valide).
export const initConsent = () => {
  if (hasValidConsent()) {
    applyConsent(getPreferences());
  }
};
