const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  // SASS + CSS Modules
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:9]'
  },
  // Custom webpack config
  webpack(config, options) {
    // Absolute imports
    config.resolve.modules.push(path.resolve('./'));

    // Base64 images
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: `_next/static/images/`,
          outputPath: `${options.isServer ? '../' : ''}static/images/`,
          name: '[name].[hash].[ext]'
        }
      }
    });

    return config;
  }
});
