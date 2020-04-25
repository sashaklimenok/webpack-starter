const path = require('path');

const isDevelopment =
  process.env.NODE_ENV === "development" ||
  process.env.NODE_ENV === undefined ||
  false;
const applicationPath = isDevelopment ? "/" : "/src";
const PATH = {
  SRC: path.join(__dirname, "/src"),
  DIST: path.join(__dirname, "/dist"),
  FONTS: path.join(__dirname, "/dist/fonts"),
  ASSETS: path.join(__dirname, "/assets"),
};


module.exports = {
  entry: path.join(PATH.SRC, "index.ts"),
  output: {
    filename: 'bundle.js',
    path: PATH.DIST,
    publicPath: applicationPath,
    library: "webpackStarter",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "inline-source-map",
  watchOptions: {
    aggregateTimeout: 100,
    ignored: ["node_modules/**"],
  },
};

