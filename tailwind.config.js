/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.zinc.900"),
            h1: {
              fontSize: theme("fontSize.2xl"),
              fontWeight: theme("fontWeight.bold"),
            },
            h2: {
              fontSize: theme("fontSize.xl"),
              fontWeight: theme("fontWeight.bold"),
              marginTop: theme("spacing.4"),
            },
            a: {
              color: theme("colors.teal[800]"),
              dark: {
                color: theme("colors.teal[400]"),
              },
              "&:hover": {
                color: theme("colors.zinc.100"),
                backgroundColor: theme("colors.teal.800"),
              },
            },
          },
        },
        invert: {
          css: {
            color: theme("colors.zinc.100"),
            a: {
              color: theme("colors.teal.400"),
              "&:hover": {
                color: theme("colors.zinc.900"),
                backgroundColor: theme("colors.teal.400"),
              },
            },
          },
        },
      }),
      boxShadow: {
        outer: "0 0 0 0.5rem var(--tw-shadow-color)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
