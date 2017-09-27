const commonConfig = require('./build-utils/webpack.common')
const webpackMerge = require('webpack-merge')

//all the configuration will be here can be object or function in order to pass the enviroment
module.exports = (env) => {
  console.log(env)

  const envConfig = require(`./build-utils/webpack.${env.env}.js`)


  //This is were all the file to be introduce in the bundle file
  return webpackMerge(commonConfig, envConfig)
}