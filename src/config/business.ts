// Singura sursă pentru identitatea clinicii (nume, adresă, telefon, program, geo, domeniu).
// Date simple, fără React și fără importuri cu alias — folosit de pagini, hartă,
// scheme, index.html și fișiere publice generate la build.

export const BUSINESS = {
  name: "Stomatologie MedStom Piatra Neamț",
  shortName: "MedStom",
  url: "https://stomatologiepiatraneamt.ro",
  email: "hello@stomatologiepiatraneamt.ro",
  phone: {
    display: "0333 630 005",
    e164: "+40333630005",
    href: "tel:+40333630005",
  },
  // Număr separat intenționat (WhatsApp), diferit de telefonul clinicii.
  whatsapp: {
    e164: "+40722808033",
    href: "https://wa.me/40722808033",
  },
  address: {
    street: "Strada Ana Ipătescu 9",
    locality: "Piatra Neamț",
    postalCode: "610120",
    region: "Neamț",
    country: "RO",
    countryName: "România",
    full: "Strada Ana Ipătescu 9, Piatra Neamț 610120",
  },
  geo: { lat: 46.9337515, lng: 26.374023 },
  mapUrl: "https://www.google.com/maps?cid=5933877193378005885",
  facebook: "https://www.facebook.com/profile.php?id=100024207206327",
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "19:00",
    label: "Luni - Vineri: 09:00 - 19:00",
    short: "Luni-Vineri 09:00-19:00",
    closedLabel: "Sâmbătă și Duminică: Închis",
  },
} as const;

// Fragment JSON-LD (NAP + geo + program) injectat în index.html la build.
export const businessSchemaFields = () => ({
  name: BUSINESS.name,
  url: BUSINESS.url,
  telephone: BUSINESS.phone.e164,
  email: BUSINESS.email,
  hasMap: { "@type": "Map", url: BUSINESS.mapUrl },
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.locality,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...BUSINESS.hours.days],
      opens: BUSINESS.hours.opens,
      closes: BUSINESS.hours.closes,
    },
  ],
  sameAs: [BUSINESS.facebook],
});

// Antetul llms.txt cu datele de contact; restul conținutului vine din public/llms.body.md.
export const llmsContactBlock = () =>
  [
    `**Locație:** ${BUSINESS.address.full}, ${BUSINESS.address.region}, ${BUSINESS.address.countryName}`,
    `**Telefon:** ${BUSINESS.phone.display}`,
    `**Email:** ${BUSINESS.email}`,
    `**Website:** ${BUSINESS.url}`,
    `**Program:** ${BUSINESS.hours.label}; ${BUSINESS.hours.closedLabel}`,
  ].join("\n");
