## What is ReactStarterCode?

ReactStarterCode is a preconfigured project containing all the necessary build tools, modules, and scripts
needed to start building React v15.0 projects with ES6 syntax.

This project is *NOT* a tutorial, just a quick way of starting development on React-based
projects.

This project makes use of:

* `webpack` for building and module bundling
* `babel-core` and `babel-loader` for transpiling ES6 to ES5
* `babel-preset-es2015` and `babel-preset-react` for parsing JSX syntax
* `cross-env` for injection of environment variables into webpack
* `node-sass`, `css-loader`, `sass-loader`, and `style-loader` for including stylesheets into components
* `file-loader` for including images and other files into components
* `json-loader` for including json data into components
* `html-webpack-plugin` and `html-webpack-template` for automatic generation of an index.html file
* `webpack-dev-server` for the development server
* `webpack-uglify-js-plugin` for minification of CSS and JS
* `react` and `react-dom` for React
* `classnames` for class manipulation

## Folder structure

    .
    ├── node_modules                  # Folder containing Node.js modules
    ├── dist/                         # Build folder (do not modify)
    ├── src/                          # Source folder (modify these files)
    ├    ├─ components/               # Folder containing React Components
    ├    ├     ├─ HelloWorld.jsx      # Code for the <HelloWorld/> Component
    ├    ├
    ├    ├─ media/                    
    ├    ├     ├─ data                # Folder containing .json files
    ├    ├     ├─ images              # Folder containing image files
    ├    ├─ stylesheets/              # Folder containing SASS stylesheets   
    ├    ├
    ├    ├── index.js                 # Entry point for React and ReactDOM
    ├    ├── index.html               # Main .html file (automatically generated)
    ├── webpack.config.js             # Webpack config file
    ├── LICENSE
    ├── README.md

## How Do I access my React Components, Stylesheets, JSON files, Images?
In the `webpack.config.js` file,

    var config = {
      resolve: {
          alias: {
            'components': path.join(PATHS.SRC, 'components/'),
            'stylesheets': path.join(PATHS.SRC, 'stylesheets/'),
            'json': path.join(PATHS.SRC, 'media/data/'),
            'images': path.join(PATHS.SRC, 'media/images/'),
          }
      }
    }

we map relative paths to root paths, this means you don't have to do complicated
folder jumping such as `../../../../file.jpg` to access a file.

Let's say you have a file in `src/media/data/images/github.png`.

If you want to
reference that image in a React component, you just have to use `require('images/github.png')`.

* The folder `src/media/data/images` is automatically mapped to `images/`.
* The folder `src/components` is automatically mapped to `components/`.
* The folder `src/stylesheets` is automatically mapped to `stylesheets/`.
* The folder `src/json` is automatically mapped to `json/`


## Installation Instructions.
With the command line:

1. Clone this repository.

    `git clone https://github.com/Jon1701/ReactStarterCode-Webpack.git`

2. `cd` into its project folder (feel free to rename).

    `cd ReactStarterCode-Webpack`

3. Install all dependencies.

    `npm install`

4. Start Developer Mode (Webpack, development server, hot module replacement).

    `npm run dev`

5. Open the project in your web browser.

    `http://localhost:8080/dist`

## Build/Production environment commands.

* Run Development mode (Webpack, development server, hot module replacement).

    `npm run dev`

* Build project for Production (Production mode, build only, uglifies JavaScript).

    `npm run build`

## Contributors

[Jon1701](https://github.com/Jon1701), [stephanie56](https://github.com/stephanie56)

## License

Released under [MIT License](http://www.opensource.org/licenses/MIT).
