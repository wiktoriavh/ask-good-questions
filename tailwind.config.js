/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme("colors.gray.900"),
              fontSize: theme("fontSize.4xl"),
            },
          },
        },
      }),
      boxShadow: {
        outer: "0 0 0 0.5rem var(--tw-shadow-color)",
      },
    },
    plugins: [require("@tailwindcss/typography")],
  },
};
