const { override, addWebpackPlugin } = require("customize-cra");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = override(
  addWebpackPlugin(
    new ImageminPlugin({
      pngquant: {
        quality: "65-90",
        speed: 4,
      },
      svgo: {
        plugins: [{ removeViewBox: false }],
      },
      gifsicle: {
        optimizationLevel: 2,
      },
      jpegtran: {
        progressive: true,
      },
    })
  )
);
