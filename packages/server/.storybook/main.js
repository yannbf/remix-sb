module.exports = {
  "staticDirs": ['../public'],
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(json)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/server",
  features: {
    buildStoriesJson: true
  },
  refs: {
    "component-library": {
      title: "Component library",
      url: "http://localhost:6006"
    }
  }
}