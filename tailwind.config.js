/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,jsx}',
    './components/**/*.{ts,tsx,jsx}',
    './app/**/*.{ts,tsx,jsx}',
    './src/**/*.{ts,tsx,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "Dark-Purple": "#2f1335",
        "Grimace-Purple": "#620e5d",
        "Purple": "#9d007a",
        "Shade-Pinkl": "#ce3762",
        "Orange": "#f04438",
        "Primary-Dark-Pink": "#ac354b",
        "Primary-Pink-1": "#ff4081",
        "Primary-Pink-2": "#ff79b0",
        "Primary-Pink-3": "#f6c5d4",
        "Primary-Pink-4": "#f3b1af",
        "Primary-Slight Pink": "#e26776",
        "Primary-Yellow-1": "#f8d8ab",
        "Primary-Yellow-2": "#f8d8ab",
        "Secondary-Black-1": "#141414",
        "Secondary-Grey-1": "#4c4f5c",
        "Secondary-Grey-2": "#667085",
        "Secondary-Grey-3": "#cccccc",
        "Secondary-White-1": "#f5f5f5",
        "Secondary-White": "#faf9f6",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      "fontSize": {
        "5xs": "0.4337500035762787rem",
        "4xs": "0.5206249952316284rem",
        "3xs": "0.625rem",
        "2xs": "0.75rem",
        "xs": "0.8999999761581421rem",
        "sm": "0.9375rem",
        "base": "1rem",
        "lg": "1.2962499856948853rem",
        "xl": "1.5549999475479126rem",
        "2xl": "1.8662500381469727rem",
        "3xl": "2.239375114440918rem",
        "4xl": "2.6875rem",
        "5xl": "3.2249999046325684rem"
      },
      "fontFamily": {
        "satoshi": "Satoshi"
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: 0
          },
          to: {
            height: "var(--radix-accordion-content-height)"
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)"
          },
          to: {
            height: 0
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}