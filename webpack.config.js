const path = require("path");
const pkg = require("./package.json");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  const mode = "development";

  const plugins = [
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
      chunkFilename: "[id].css",
    }),

    new CopyPlugin({
      patterns: [
        {
          from: `./src/_internal/assets/favicon.ico`,
          to: `./assets/favicon.ico`,
        },
      ],
    }),

    new HtmlPlugin({
      template: `./src/_internal/assets/index.html`,
      hash: true,
    }),
  ];

  // Return config object
  return {
    entry: `./src/_internal/index.js`,

    output: {
      publicPath: "/",
      filename: "assets/[name].js",
      path: path.resolve(__dirname, `dist/build`),
    },

    devtool: "eval-cheap-module-source-map",

    resolve: {
      modules: ["node_modules", "src"],
      alias: {
        Internal: path.resolve(__dirname, "src/_internal/"),
      },
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          include: path.resolve(__dirname, "src"),
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
                presets: pkg.babel.presets,
                plugins: pkg.babel.plugins,
              },
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "assets/[name].[ext]",
              },
            },
          ],
        },
      ],
    },

    stats: {
      assets: true,
      children: false,
      chunks: false,
      colors: true,
      errors: true,
      errorDetails: false,
      hash: true,
      modules: false,
      performance: false,
      version: false,
    },

    devServer: {
      clientLogLevel: "debug",
      port: 4000,
      historyApiFallback: {
        disableDotRule: true,
      },
      proxy: {},
      stats: {
        assets: true,
        children: false,
        chunks: false,
        colors: true,
        errors: true,
        errorDetails: false,
        hash: true,
        modules: false,
        performance: false,
        version: false,
      },
    },

    mode,
    plugins,
  };
};
