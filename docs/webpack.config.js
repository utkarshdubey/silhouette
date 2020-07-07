const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoPrefixPlugin = require("autoprefixer");

const WebpackModuleNoModulePlugin = require("webpack-module-nomodule-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cfg = require("./.babelrc");
const { basename } = require("path");

const isProd = basename(__filename).includes(".prod");

const mode = isProd ? "production" : "development";

function prodOrDev(a, b) {
  return isProd ? a : b;
}

const jsLoaderOptions = (isLegacy) => ({
  test: /\.m?js$/,
  exclude: /(node_modules\/(?!@hydrophobefireman))|(injectables)/,
  use: {
    loader: "babel-loader",
    options: cfg.env[isLegacy ? "legacy" : "modern"],
  },
});
const cssLoaderOptions = {
  test: /\.css$/,
  use: [
    { loader: MiniCssExtractPlugin.loader },
    {
      loader: "css-loader",
    },
    {
      loader: "postcss-loader",
      options: { ident: "postcss", plugins: [autoPrefixPlugin()] },
    },
  ],
};
const contentLoaderOptions = {
  test: /\.(png|jpg|gif|ico|svg)$/,
  use: [{ loader: "url-loader", options: { fallback: "file-loader" } }],
};
function getCfg(isLegacy) {
  return {
    cache: {
      type: "filesystem",
      buildDependencies: {
        config: [__filename],
      },
    },
    devServer: {
      contentBase: `${__dirname}/docs`,
      compress: !0,
      port: 4200,
      historyApiFallback: true,
    },
    module: {
      rules: [
        jsLoaderOptions(isLegacy),
        cssLoaderOptions,
        contentLoaderOptions,
      ],
    },
    entry: `${__dirname}/src/App.js`,
    output: {
      // ecmaVersion: isLegacy ? 5 : 6,
      path: `${__dirname}/docs/`,
      filename: `${isLegacy ? "legacy" : "es6"}/[name]-[contenthash].js`,
    },
    mode,
    optimization: {
      concatenateModules: false,
      minimizer: prodOrDev([new TerserWebpackPlugin({ parallel: true })], []),
      splitChunks: {
        chunks: "all",
      },
      runtimeChunk: "single",
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: "body",
        template: `${__dirname}/index.html`,
        xhtml: !0,
        favicon: "./favicon.ico",
        minify: prodOrDev(
          {
            collapseBooleanAttributes: !0,
            collapseWhitespace: !0,
            html5: !0,
            minifyCSS: !0,
            removeEmptyAttributes: !0,
            removeRedundantAttributes: !0,
          },
          !1
        ),
      }),

      new MiniCssExtractPlugin({}),
      isProd &&
        new OptimizeCSSAssetsPlugin({ cssProcessor: require("cssnano") }),
      new WebpackModuleNoModulePlugin(isLegacy ? "legacy" : "modern"),
    ].filter(Boolean),
  };
}

module.exports = isProd ? [getCfg(false), getCfg(true)] : getCfg(false);
