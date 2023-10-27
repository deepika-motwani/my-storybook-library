const path = require("path");
module.exports = {
  "stories": ["../src/**/*.stories.tsx"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-styling", '@storybook/preset-scss',"@storybook/addon-actions","@storybook/addon-knobs/register",
  '@storybook/addon-designs'
  ],
  docs: {
    autodocs: true
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  staticDirs: ["../public"],
  resolve: {
    alias: {
      // Check this alias configuration
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  module: {
    rules: [
      // ... your other rules
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  }