import React from 'react';

export default class HelloWorld extends React.Component {
  render() {

    return (
      <div>
        <h2 id="whatisreactstartercode">What is ReactStarterCode?</h2>

        <p>ReactStarterCode is a preconfigured project containing all the necessary build tools, modules, and scripts
        needed to start building React v15.0 projects with ES6 syntax.</p>

        <p>This project is <em>NOT</em> a tutorial, just a quick way of starting development on React-based
        projects.</p>

        <p>This project makes use of:</p>

        <ul>
        <li><code>webpack</code> for building and module bundling</li>

        <li><code>babel-core</code> and <code>babel-loader</code> for transpiling ES6 to ES5</li>

        <li><code>babel-preset-es2015</code> and <code>babel-preset-react</code> for parsing JSX syntax</li>

        <li><code>cross-env</code> for injection of environment variables into webpack</li>

        <li><code>node-sass</code>, <code>css-loader</code>, <code>sass-loader</code>, and <code>style-loader</code> for including stylesheets into components</li>

        <li><code>file-loader</code> for including images and other files into components</li>

        <li><code>json-loader</code> for including json data into components</li>

        <li><code>html-webpack-plugin</code> and <code>html-webpack-template</code> for automatic generation of an index.html file</li>

        <li><code>webpack-dev-server</code> for the development server</li>

        <li><code>webpack-uglify-js-plugin</code> for minification of CSS and JS</li>

        <li><code>react</code> and <code>react-dom</code> for React</li>

        <li><code>classnames</code> for class manipulation</li>
        </ul>

        <h2 id="whatnext">What Happens Next?</h2>
        <p>Just start by modifying <span className="code">HelloWorld.jsx</span>.</p>

        <p>Be sure to read the <a className="code" href="https://github.com/Jon1701/ReactStarterCode-Webpack/blob/master/README.md" target="_blank">README.md</a> for the folder structure, and how to reference files from within components.</p>

        <h2 id="buildproductionenvironmentcommands">Build/Production environment commands.</h2>

        <ul>
        <li><p>Run Development mode (Webpack, development server, hot module replacement).</p>

        <p><code>npm run dev</code></p></li>

        <li><p>Build project for Production (Production mode, build only, uglifies JavaScript).</p>

        <p><code>npm run build</code></p></li>
        </ul>

        <h2 id="contributors">Contributors</h2>

        <p><a href="https://github.com/Jon1701">Jon1701</a>, <a href="https://github.com/stephanie56">stephanie56</a></p>

        <h2 id="license">License</h2>

        <p>Released under <a href="http://www.opensource.org/licenses/MIT">MIT License</a>.</p>
      </div>
    )
  }
}
