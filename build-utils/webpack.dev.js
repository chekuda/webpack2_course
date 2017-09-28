const config = {
  devtool: 'source-map', //webpack.js.org/configuration/devtool
  module:{
    rules: [
      {
        test: /\.css/,
        use: [
          { loader: 'style-loader' },
          { loader:'css-loader' }
        ]
      }
    ]
  }
}
module.exports  = config