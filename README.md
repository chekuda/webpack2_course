# Webpack
## Install Webpack and webpack server
  - Install it locally
    npm i webpack --save-dev
    npm i webpack-dev-server --save-dev

## Run commands
  - Run webpack in terminal
    `webpack`
  - Run webpack and keep watching changes
    `webpack --watch`

## Webpack configuration
  - All the configuration will be in the file webpack.config.js and extended by files within build-uitls folder
  - I can trate this module as an object or as a function which return a object with all the config.
  - The function syntax give me the ability to pass an `env` variable though the command to manage different enviroments. ie: webpack --env.foo=1 --env.bar=2

  ### Different config files
    I can use diffent config js file for different purposes
    1 - webpack.config.js
      Will manage all the environments by the commands
    2 - build-utils/webpack.common.js
    3 - build-utils/webpack.pro.js
      Pro Environment
    4 - build-utils/webpack.dev.js
      Dev Environment
    3 - build-utils/webpack.paths.js (recommended)
      In order to get all the paths gather in a place, this fil will contain all the paths information

  ### Merge config files
    For merging multiple files (as webpack.common.js with webpack.dev) we can use `webpac-merge` package and merge them before we return the last object
