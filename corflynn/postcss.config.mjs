// PostCSS in ESM format
const config = {
  plugins: {
    // Order matters: Tailwind first, then Autoprefixer
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
