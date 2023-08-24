module.exports = {
  "stories": ["../src/**/*.stories.tsx"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-styling", "@storybook/addon-actions",
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
        },
      },
    },
  ],
  docs: {
    autodocs: true
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  }
};