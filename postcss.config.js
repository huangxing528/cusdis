module.exports = {
  plugins: {
    tailwindcss: {
      purge: ['widget/**/*.svelte', 'widget/theme.css'],
      darkMode: 'class',
      variants: {
        extend: {
          outline: ['dark'],
          borderWidth: ['dark'],
          borderColor: ['dark']
        },
      },
    },
    autoprefixer: {},
  },
}
