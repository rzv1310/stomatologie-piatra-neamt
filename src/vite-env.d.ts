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

declare module '*?w=80&format=webp' {
  const src: string;
  export default src;
}

declare module '*?w=700&format=webp' {
  const src: string;
  export default src;
}
