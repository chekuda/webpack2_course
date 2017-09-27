const commonPaths = require('./webpack.common-paths')

//Common configuration
const config = {
  entry: "./src/",
  //output file
  output: {
    //Outpuf file name
    filename: "bundle.js",
    //Path where the output file will be saved
    path: commonPaths.outputPath
  }
}

module.exports = config