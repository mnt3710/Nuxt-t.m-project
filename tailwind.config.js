module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'index-bg': "url('../../assets/bg.png')",
      }),
    },
    fontFamily: {
      'qwitcher-grypen': ['Qwitcher Grypen'],
      silkscreen: ['silkscreen'],
      'rubik-iso': ['Rubik Iso'],
      caveat: ['Caveat'],
      'amatic-sc': ['Amatic SC'],
      'homemade-apple': ['Homemade Apple'],
      megrim: ['Megrim'],
      'permanent-marker': ['permanent Marker'],
      'poiret-one': ['Poiret One'],
      'alegreya-sans-cs': ['Alegreya Sans SC'],
      'reenie-baenie': ['Reenie Beanie'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
