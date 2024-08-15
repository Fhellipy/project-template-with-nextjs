module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 3,
      features: {
        "custom-media-queries": true,
        "nesting-rules": false,
      },
    },
  },
};
