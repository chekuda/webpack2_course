const webpack = require('webpack')
const commonPaths = require('./webpack.common-paths')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

//Common configuration
const config = {
  entry: './src/', //this will take all files in the folder but as a entry point index.js by default
  //output file
  output: {
    //Outpuf file name
    filename: 'bundle.js',//create new bundle everytime
    //Path where the output file will be saved
    path: commonPaths.outputPath
  },
  module: {
    rules: [
      {
        test: /\.png/, //extension of files to be affected by this rule
        use: [
          {
            loader:'url-loader', //will conver any assets requested by js or css into B64 string and inject themn in the bundle
            options:{
              limit: 30000 //limit of the image
            }
          }
        ]
      },{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: `${commonPaths.srcPath}/index.html`,
      filename: 'index.html',
      inject: 'body'
    }),
     //This will serve all the assets inside public folder
    //into virtual assets folder within output /dist (dev environment)
    new CopyWebpackPlugin([
      { from: './public/', to:'assets' }
    ])
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'], //Add this in order to dont indicate the extension when import it
  }
}

module.exports = config