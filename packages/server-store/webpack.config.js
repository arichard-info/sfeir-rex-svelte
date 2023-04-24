const path = require("path");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = {
  entry: {
    server: ["./src/server.js"],
  },
  target: "node",
  resolve: {
    alias: {
      svelte: path.dirname(require.resolve("svelte/package.json")),
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "module", "main"],
    conditionNames: ["svelte"],
  },
  output: {
    path: path.join(__dirname, "/build"),
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            compilerOptions: {
              generate: "ssr",
              dev: !prod,
            },
          },
        },
      },
      {
        // required to prevent errors from Svelte on Webpack 5+
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new NodemonPlugin({
      script: path.resolve("build/server.js"),
      watch: [path.resolve("build")],
    }),
  ],
  mode,
};
