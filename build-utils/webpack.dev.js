const CopyWebpackPlugin = require('copy-webpack-plugin')
const commonPaths = require('./webpack.common-paths')

const config = {
  devtool: 'source-map', //webpack.js.org/configuration/devtool
  module:{
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          { loader:'css-loader', options: { parser: 'sugars' } },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins:[
    //This will serve all the assets inside public folder
    //into virtual assets folder within output /dist
    new CopyWebpackPlugin([
      { from: './public/', to:'assets' }
    ])
  ]
}
module.exports  = config