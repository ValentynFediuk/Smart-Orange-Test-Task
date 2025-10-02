// JS bundling config using Webpack.
// This config handles JS transpilation via Babel and extracts CSS if imported from JS.
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Minimal .env loader (no extra dependencies)
const dotenvPath = path.resolve(__dirname, '.env');
let parsedEnv = {};
if (fs.existsSync(dotenvPath)) {
  const raw = fs.readFileSync(dotenvPath, 'utf8');
  raw.split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const idx = trimmed.indexOf('=');
    if (idx === -1) return;
    const key = trimmed.slice(0, idx).trim();
    let val = trimmed.slice(idx + 1).trim();
    // strip optional surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (key) parsedEnv[key] = val;
  });
}

// Build define map from process.env and .env (with .env taking precedence)
const envSource = { ...process.env, ...parsedEnv };
const defineMap = {};
Object.keys(envSource).forEach(k => {
  if (k === 'NODE_ENV') return; // avoid conflict with Webpack's own NODE_ENV handling
  defineMap[`process.env.${k}`] = JSON.stringify(envSource[k]);
});

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  return {
    mode: isProd ? 'production' : 'development',
    entry: './src/js/main.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist', 'assets', 'js'),
      publicPath: '/assets/js/'
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.s?css$/i,
          use: [
            // In production extract CSS, in dev inject into <style>
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin(defineMap),
      new MiniCssExtractPlugin({
        filename: '../css/styles.css' // place in dist/assets/css/styles.css
      })
    ],
    devtool: isProd ? false : 'source-map'
  };
};
