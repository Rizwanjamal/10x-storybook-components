module.exports = {
    stories: ["../src/stories/**/*.stories.(ts|tsx|js|jsx)"],
    addons: [
      '@storybook/preset-create-react-app',
      '@storybook/addon-knobs',
      {
        name: '@storybook/addon-docs',
        options: {
            
          configureJSX: true,
        },
      },
    ],
  };