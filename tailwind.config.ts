theme: {
  container: {
    center: true,
    padding: "1rem",
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1200px",
    },
  },
  extend: {
    colors: {
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",

      muted: "hsl(var(--muted))",
      "muted-foreground": "hsl(var(--muted-foreground))",

      border: "hsl(var(--border))",

      primary: "hsl(var(--primary))",
      "primary-foreground": "hsl(var(--primary-foreground))",

      secondary: "hsl(var(--secondary))",
      accent: "hsl(var(--accent))",
    },
    fontFamily: {
      display: ["Inter", "system-ui", "sans-serif"],
    },
  },
},
