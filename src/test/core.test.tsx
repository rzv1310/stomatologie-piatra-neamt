import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BUSINESS, businessSchemaFields, llmsContactBlock } from "@/config/business";
import { getConsent, hasValidConsent, hasConsent, saveConsent, COOKIE_POLICY_VERSION } from "@/lib/consent";
import { parseBlogPage } from "@/lib/pagination";
import { loadA11y } from "@/lib/a11y-prefs";
import ErrorBoundary from "@/components/ErrorBoundary";

describe("date clinică", () => {
  it("schema și llms.txt folosesc aceleași valori", () => {
    const s = businessSchemaFields();
    expect(s.telephone).toBe(BUSINESS.phone.e164);
    expect(s.geo.latitude).toBe(BUSINESS.geo.lat);
    expect(s.openingHoursSpecification[0].dayOfWeek).not.toContain("Saturday");
    expect(llmsContactBlock()).toContain(BUSINESS.hours.closedLabel);
  });
  it("WhatsApp e separat de telefon", () => {
    expect(BUSINESS.whatsapp.e164).not.toBe(BUSINESS.phone.e164);
  });
});

describe("consimțământ cookies", () => {
  beforeEach(() => localStorage.clear());
  it("fără alegere: doar necesare", () => {
    expect(hasValidConsent()).toBe(false);
    expect(hasConsent("analytics")).toBe(false);
    expect(hasConsent("necessary")).toBe(true);
  });
  it("acceptare, apoi revocare", () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
    expect(hasConsent("analytics")).toBe(true);
    saveConsent({ necessary: true, analytics: false, marketing: true });
    expect(hasConsent("analytics")).toBe(false);
    expect(getConsent()?.version).toBe(COOKIE_POLICY_VERSION);
  });
  it("refuz salvează doar necesare", () => {
    saveConsent({ necessary: false, analytics: false, marketing: false });
    expect(getConsent()?.preferences.necessary).toBe(true);
    expect(hasConsent("marketing")).toBe(false);
  });
  it("valoare coruptă nu aruncă eroare", () => {
    localStorage.setItem("medstom_cookie_consent", "{nu e json");
    expect(getConsent()).toBeNull();
    expect(hasValidConsent()).toBe(false);
  });
  it("versiune veche invalidează consimțământul", () => {
    localStorage.setItem(
      "medstom_cookie_consent",
      JSON.stringify({ version: "0.1", timestamp: Date.now(), preferences: { necessary: true, analytics: true, marketing: true } }),
    );
    expect(hasValidConsent()).toBe(false);
  });
});

describe("paginare blog", () => {
  it("citește pagina validă", () => expect(parseBlogPage("2", 3)).toBe(2));
  it.each([null, "", "0", "-1", "abc", "2.5", "9"])("valoarea %s revine la 1", (v) =>
    expect(parseBlogPage(v as string | null, 3)).toBe(1),
  );
});

describe("preferințe accesibilitate", () => {
  beforeEach(() => localStorage.clear());
  it("valoare coruptă revine la implicit", () => {
    localStorage.setItem("medstom_a11y_prefs", "x");
    expect(loadA11y().fontSize).toBe(100);
  });
  it("mărime în afara intervalului e ignorată", () => {
    localStorage.setItem("medstom_a11y_prefs", JSON.stringify({ fontSize: 999, highContrast: true }));
    expect(loadA11y()).toEqual({ fontSize: 100, highContrast: true, largeText: false });
  });
});

describe("ErrorBoundary", () => {
  it("afișează mesaj în loc de ecran gol", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    const Boom = () => {
      throw new Error("x");
    };
    render(
      <ErrorBoundary>
        <Boom />
      </ErrorBoundary>,
    );
    expect(screen.getByRole("alert")).toHaveTextContent("A apărut o problemă");
    expect(screen.getByRole("button", { name: "Reîncarcă pagina" })).toBeInTheDocument();
  });
});
