// Preferințele widgetului de accesibilitate, salvate local cu citire protejată.
export interface A11yPrefs {
  fontSize: number;
  highContrast: boolean;
  largeText: boolean;
}

const KEY = "medstom_a11y_prefs";
export const DEFAULT_A11Y: A11yPrefs = { fontSize: 100, highContrast: false, largeText: false };

export const loadA11y = (): A11yPrefs => {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULT_A11Y };
    const v = JSON.parse(raw) as Partial<A11yPrefs>;
    const fontSize =
      typeof v.fontSize === "number" && v.fontSize >= 80 && v.fontSize <= 150 ? v.fontSize : 100;
    return {
      fontSize,
      highContrast: v.highContrast === true,
      largeText: v.largeText === true,
    };
  } catch {
    return { ...DEFAULT_A11Y };
  }
};

export const applyA11y = (p: A11yPrefs) => {
  const root = document.documentElement;
  root.style.fontSize = `${p.fontSize}%`;
  root.classList.toggle("high-contrast", p.highContrast);
  root.classList.toggle("large-text", p.largeText);
};

export const saveA11y = (p: A11yPrefs) => {
  applyA11y(p);
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    // stocare indisponibilă — preferința ține doar pe sesiune
  }
};
