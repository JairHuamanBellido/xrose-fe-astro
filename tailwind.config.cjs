/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        'left-shadow': '12px 4px 50px 3px rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [
    {
      cssnano: {},
    },
  ],
};
