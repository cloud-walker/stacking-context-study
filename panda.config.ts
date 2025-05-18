import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
  strictPropertyValues: true,
  strictTokens: true,
  jsxFramework: "react",
  jsxStyleProps: "minimal",
  globalCss: {
    ":root": {
      color: "slate.50",
      bg: "slate.950",
    },
    "#containers, #panels": {
      isolation: "isolate",
    },
  },
});
