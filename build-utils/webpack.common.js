const commonPaths = require('./webpack.common-paths')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

//Common configuration
const config = {
  entry: "./src/", //this will take all files in the folder but as a entry point index.js by default
  //output file
  output: {
    //Outpuf file name
    filename: "bundle.js",//create new bundle everytime
    //Path where the output file will be saved
    path: commonPaths.outputPath
  },
  module: {
    rules: [
      {
        test: /\.png/, //extension of files to be affected by this rule
        use: [
          {
            loader:'url-loader', //will conver any assets requested by js or css into B64 string
            options:{
              limit: 30000 //limit of the image
            }
          }
        ]
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin()
  ]
}

module.exports = config