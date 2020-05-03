const css = require('rollup-plugin-css-only');
const image = require('@rollup/plugin-image');
// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins.push(image());
    config.plugins.push(
      css({ output: null })
    );

    return config;
  },
};