var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, '..', 'public', 'assets');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
  debug: true,
  devtool: 'eval',
  entry: [
  './entry',  hotMiddlewareScript],
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
        loader: 'style!css?module&localIdentName=[local]__[hash:base64:5]' +
        '&sourceMap!autoprefixer-loader!sass?sourceMap&outputStyle=expanded' +
        '&includePaths[]=' + encodeURIComponent(path.resolve(__dirname, '..', 'app', 'scss'))
      },
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.scss'],
      modulesDirectories: [
      'app', 'node_modules',
      ],
    },
    plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    ]
  };
