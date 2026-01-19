/// <reference types="vite/client" />

// vite-imagetools type declarations
declare module '*?format=webp' {
  const src: string;
  export default src;
}

declare module '*&format=webp' {
  const src: string;
  export default src;
}
