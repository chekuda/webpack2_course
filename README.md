# Webpack

## Install Webpack and webpack server

  - Install it locally
    yarn add webpack --save-dev
    yarn add webpack-dev-server --save-dev

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
      Will manage all the environments by the commands. This will retunr the last config object
    2 - build-utils/webpack.common.js
      All the common configuration for all the environments
    3 - build-utils/webpack.pro.js
      Pro Environment
    4 - build-utils/webpack.dev.js
      Dev Environment
    3 - build-utils/webpack.paths.js (recommended)
      In order to get all the paths gather in a place, this fil will contain all the paths information

  ### Merge config files

    For merging multiple files (ie webpack.common.js with webpack.dev) we can use `webpack-merge` package and merge them before we return the last

  ### Add features (addons)

    This is the way of add features/plugins without affecting the final bundle for different scenarios/environments.
    ie: yarn build:pro -- --env.addons=bundlebuddy

    - WebpackBundleAnalyzer => Check the syze of every file part of the bundle
    - bundle-buddy => Help me to find source code duplication across my JS chunks/splits
    - myFirstPlugin => I can create my own plugin as I can see in `webpack.firstPlugin.js`

  ### Debug node

    I can debug my node modules by using native node debug in terminal
    - node --inspect --debug-brk ./node_modules/webpack/bin/webpack.js

  ### Use webpack server

    Express server provided by webpack `webpack-dev-server`. Automatically emit bundles in memory and fire websockets request for autmatically changes. NOTE: this will create the bundles files virtualy. if I want to see the bundle files phisicaly, I will have to use `webpack` instead of `webpack-dev-server`

  ### Plugins

    Some mandatory plugins:
    1 - DEV: `html-webpack-plugin` will generate a index.html boiler plate and add it to dist folder. This is helpful when the bundle's name use `chunkhash`. ie: `[chunkhash].bundle.js`
    2- PRO: `extract-text-webpack-plugin` which moves all the required *.css modules in entry chunks into a separate CSS file. So your styles are no longer inlined into the JS bundle, but in a separate CSS file (styles.css). If your total stylesheet volume is big, it will be faster because the CSS bundle is loaded in parallel to the JS bundle.
    3 - PRO: `uglifyjs-webpack-plugin` to minify the bundle files
    4 - PRO: `compression-webpack-plugin` to compress the bundle files

  ### Loaders

    1 - `url-loader and file-loader`
      Allow my to convert any assets url required by js or css, into B64 string and inline into my bundle. Also I can put the limit if I want to include it or not
        yarn add url-loader file-loader --dev

    2 - `style-loader and css-loader`
      This does a `hot module replacement` by default. How to inject the css modules requested

    3 - `eslint`
      I can add it to a rules if I load the package `eslint and eslint-loader` and create the config file `.eslintrc.json`
