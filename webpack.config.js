module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: 'dist',
        filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  debug: true,
  devtool: "#inline-source-map",
  module:  {
      loaders: [
          {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: 'babel',
              query: {
                  presets: ['es2015', 'react']
              }
          },
          {
            test: /\.(png|jpg|jpeg)$/,
            loader: 'url-loader?limit=20000'
          },
          {
              test: /\.less$/,
              loader: 'style-loader!css-loader!less-loader'
          }
      ]
  }
};
