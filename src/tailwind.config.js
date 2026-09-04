/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    color: {
      lightblack: ["#212121"],
    },
    extend: {
      fontFamily: {
        kaput: ['"Kaput Black"', "sans-serif"],
        sora: ['"Sora"', "sans-sarif"],  
      },
    },
  },
  plugins: [],
};
