import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        informative: {
          DEFAULT: "var(--informative)",
          foreground: "var(--informative-foreground)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--warning-foreground)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            "h2, h3, h4": {
              scrollMarginTop: "6rem",
            },
            p: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            },
            ".callout-contents > p": {
              margin: 0,
            },

            code: {
              counterReset: "line",
            },

            ":not(pre) > code": {
              fontWeight: "inherit",
              position: "relative",
              bottom: 1,
              margin: "0 3px",
              color: "#eb5757",
              backgroundColor: "rgba(135,131,120,0.15)",
              fontFamily:
                '"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',
              borderRadius: 3,
              padding: "0.2em 0.4em",
              overflowWrap: "break-word",
            },

            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },

            "code[data-line-numbers] > [data-line]::before": {
              counterIncrement: "line",
              content: "counter(line)",
              display: "inline-block",
              width: "1rem",
              marginRight: "1.4rem",
              textAlign: "right",
              color: "lightgrey",
              fontSize: "0.75rem",
            },

            'code[data-line-numbers-max-digits="2"] > [data-line]::before': {
              width: "1rem",
            },

            'code[data-line-numbers-max-digits="3"] > [data-line]::before': {
              width: "2rem",
            },

            pre: {
              paddingRight: 0,
              paddingLeft: 0,
              color: "var(--shiki-light)",
              backgroundColor: "var(--shiki-light-bg)",
              border: "1px solid #e5e7eb",
            },

            ".dark pre": {
              backgroundColor: "var(--shiki-dark-bg)",
              color: "var(--shiki-dark)",
              border: "1px solid #374151",
            },

            "pre > code > span": {
              paddingLeft: "1rem",
              paddingRight: "1rem",
            },

            "pre code span": {
              color: "var(--shiki-light)",
            },
            ".dark pre code span": {
              color: "var(--shiki-dark)",
            },

            "[data-highlighted-line]": {
              backgroundColor: "rgba(253, 224, 71, 0.2)",
            },
            ".dark [data-highlighted-line]": {
              backgroundColor: "rgba(147, 197, 253, 0.15)",
            },

            u: {
              textUnderlineOffset: "4px",
              textDecorationThickness: 1,
              fontWeight: 600,
            },
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
