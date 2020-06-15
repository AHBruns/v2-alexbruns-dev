module.exports = {
  purge: ["./pages/**/*", "./components/**/*"],
  theme: {
    extend: {
      backgroundOpacity: ["responsive", "hover", "focus", "group-hover"],
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
