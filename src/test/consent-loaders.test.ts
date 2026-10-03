import { describe, it, expect, vi, beforeEach } from "vitest";
import { registerConsentLoader, saveConsent } from "@/lib/consent";

describe("consent loaders", () => {
  beforeEach(() => localStorage.clear());
  it("starts on accept and stops on revoke, once each", () => {
    const start = vi.fn(), stop = vi.fn();
    const off = registerConsentLoader({ category: "analytics", start, stop });
    expect(start).not.toHaveBeenCalled();
    saveConsent({ necessary: true, analytics: true, marketing: false });
    saveConsent({ necessary: true, analytics: true, marketing: true });
    expect(start).toHaveBeenCalledTimes(1);
    saveConsent({ necessary: true, analytics: false, marketing: true });
    expect(stop).toHaveBeenCalledTimes(1);
    off();
  });
  it("starts immediately when consent already given", () => {
    saveConsent({ necessary: true, analytics: false, marketing: true });
    const start = vi.fn();
    const off = registerConsentLoader({ category: "marketing", start, stop: vi.fn() });
    expect(start).toHaveBeenCalledTimes(1);
    off();
  });
});
