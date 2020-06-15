module.exports = {
  purge: ["./pages/**/*"],
  theme: {
    extend: {
      backgroundOpacity: ["responsive", "hover", "focus", "group-hover"],
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
