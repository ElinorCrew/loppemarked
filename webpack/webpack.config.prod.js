var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var assetsPath = path.join(__dirname, '..', 'public', 'assets');

module.exports = {
  entry: ['./entry'],
  output: {
      // The output directory as absolute path
      path: assetsPath,
      // The filename of the entry chunk as relative path inside the output.path directory
      filename: 'bundle.js',
      // The output path from the view of the Javascript
      publicPath: '/assets/'
    },
    context: path.join(__dirname, '..', 'app'),
    module: {
      loaders: [
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.scss$/,
        loader: "style!css!sass"
      }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.scss'],
      modulesDirectories: [
      'app', 'node_modules','bower_components'
      ],
    },
    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    ]
  };
