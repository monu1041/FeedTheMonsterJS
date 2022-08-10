const path = require('path');
var nodeEnv = process.env.NODE_ENV || 'development';
var isDev = (nodeEnv !== 'production');

var config = {
  mode: 'development',
  watch: true,
  entry: {
    dist: './feedTheMonster.js'
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'feedTheMonster.js',
  },
  module: {
    rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: './assets/images/[name].[ext]',
          },
        },
      ],
    },
    {
      test: /\.(WAV|mp3)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: './assets/audios/[name].[ext]',
          },
        },
      ],
    },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json', '.css','.sh','.babelrc','.eslintignore','.gitignore','.d' ],
  },
  plugins: []
};

if(isDev) {
  config.devtool = 'inline-source-map';
}

module.exports = config