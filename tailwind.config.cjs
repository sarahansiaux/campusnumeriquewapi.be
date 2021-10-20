const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors:{
        rouge:'#E01764'
      }
    },
  },

  plugins: [],
};

module.exports = config;
