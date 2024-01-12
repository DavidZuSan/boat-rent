const { override, addWebpackPlugin } = require("customize-cra");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = override(
  addWebpackPlugin(
    new ImageMinimizerPlugin({
      minimizer: [
        {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Configuración de compresión aquí
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["mozjpeg", { progressive: true, quality: 65 }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "removeViewBox",
                      params: {
                        active: false,
                      },
                    },
                    {
                      name: "addAttributesToSVGElement",
                      params: {
                        attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      ],
    })
  )
);
