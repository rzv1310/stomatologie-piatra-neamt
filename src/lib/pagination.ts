// Citește pagina din URL (?pagina=N); orice valoare invalidă sau în afara intervalului revine la 1.
export const parseBlogPage = (raw: string | null, totalPages: number): number => {
  if (!raw || !/^\d+$/.test(raw)) return 1;
  const n = Number(raw);
  return n >= 1 && n <= Math.max(1, totalPages) ? n : 1;
};
