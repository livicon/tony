module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.svelte',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      colors: {
        blue: 'var(--blue-color)'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'secondary': 'var(--bg-secondary)',
       })
    },
  },
  variants: {
    extend: {},
  },
}
