/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./wp-templates/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-dm-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-dm-sans)",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "SF Mono", "monospace"],
      },
      colors: {
        brand: {
          1: "#E2231B",
          2: "#FFFFFF",
          3: "#000000",
          soft: "#F2C4C0",
          4: "#ECB95E",
          5: "#827842",
          6: "#9B6ABF",
          7: "#E5B6C7",
          8: "#ABBEC2",
          9: "#1C92CC",
          accent: "#1D70B8",
        },
        accent: {
          tint: "rgba(226, 35, 27, 0.10)",
          soft: "rgba(226, 35, 27, 0.05)",
        },
        "red-light": "rgba(226, 35, 27, 0.10)",
        "la-red-1": "#E2231B",
        "la-red-dark": "#B91C1C",
        "la-red": {
          light: "rgba(226, 35, 27, 0.10)",
          1: "#E2231B",
          dark: "#B91C1C",
        },
        surface: {
          1: "#FFFFFF",
          2: "#F8FAFC",
          3: "#F1F5F9",
          card: "rgba(255, 255, 255, 0.28)",
          cardSoft: "rgba(255, 255, 255, 0.42)",
          cardHover: "rgba(255, 255, 255, 0.70)",
        },
        ink: {
          DEFAULT: "#0F172A",
          muted: "#475569",
          subtle: "#64748B",
        },
      },
      boxShadow: {
        soft: "0 12px 40px rgba(15, 23, 42, 0.08)",
        card: "0 1px 1px rgba(15, 23, 42, 0.04), 0 16px 32px rgba(15, 23, 42, 0.08)",
        button: "0 8px 20px rgba(226, 35, 27, 0.22)",
        "la-shadow-1":
          "0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10)",
        "la-shadow-2":
          "0 10px 15px -3px rgba(226, 35, 27, 0.20), 0 4px 6px -4px rgba(226, 35, 27, 0.20)",
        "la-shadow-3":
          "0 10px 15px -3px rgba(0, 0, 0, 0.20), 0 4px 6px -4px rgba(0, 0, 0, 0.20)",
        "la-shadow-4":
          "0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)",
      },
      borderWidth: {
        3: "3px",
      },
      width: {
        30: "7.5rem",
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2rem",
      },
      backgroundImage: {
        "brand-gradient-1":
          "linear-gradient(90deg, #000000 0%, #111827 50%, #000000 100%)",
        "brand-gradient-2": "linear-gradient(135deg, #E2231B 0%, #1D70B8 100%)",
        "hero-overlay":
          "radial-gradient(circle at 60% 45%, rgba(255,255,255,0.16), transparent 30%), linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 44%, rgba(0,0,0,0.05) 100%)",
        "hero-panel":
          "linear-gradient(180deg, rgba(17,24,39,0.2), rgba(15,23,42,0.8))",
        "hero-panel-glow":
          "radial-gradient(circle at 30% 35%, rgba(255,255,255,0.18), transparent 25%), radial-gradient(circle at 75% 50%, rgba(226,35,27,0.18), transparent 22%), linear-gradient(135deg, rgba(17,24,39,0.95), rgba(0,0,0,0.4))",
        "hero-accent":
          "linear-gradient(135deg, rgba(226,35,27,0.08), rgba(29,112,184,0.12))",
      },
      letterSpacing: {
        wider2: "0.08em",
        wider3: "0.05em",
        tighter2: "-0.05em",
      },
      fontSize: {
        "15": [
          "0.9375rem",
          { lineHeight: "1.5", letterSpacing: "0.01em" },
        ],
        xxs: [
          "0.625rem",
          { lineHeight: "1.2", letterSpacing: "0.06em" },
        ],
        "display-xl": [
          "3.5rem",
          { lineHeight: "1.05", letterSpacing: "-0.04em" },
        ],
        "display-lg": [
          "2.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.03em" },
        ],
        "heading-xl": [
          "2.25rem",
          { lineHeight: "1.1", letterSpacing: "-0.03em" },
        ],
        "heading-md": [
          "1.5rem",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        "text-xl": ["1.25rem", { lineHeight: "1.5", letterSpacing: "0.04em" }],
        "text-lg": ["1.125rem", { lineHeight: "1.6", letterSpacing: "0.02em" }],
        "text-md": ["1rem", { lineHeight: "1.6", letterSpacing: "0.01em" }],
        "text-sm": ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        "text-xs": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.06em" }],
      },
      lineHeight: {
        hero: "1.05",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
