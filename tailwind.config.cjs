const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors:{
        rouge:{
          DEFAULT:'#E01764',
          dark:"#8E0B40"
        }
      }
    },
  },

  plugins: [],
};

module.exports = config;
