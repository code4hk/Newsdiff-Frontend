module.exports = [
  {
    name: "browser",
    context: __dirname + "/app",
    entry: "./main.jsx",
    module: {
      loaders: [
        {
          //tell webpack to use jsx-loader for all *.jsx files
          test: /\.jsx$/,
          loaders: [
            'jsx-loader?insertPragma=React.DOM&harmony'
          ]
        }
      ]
    },
    externals: {
      //don't bundle the 'react' npm package with our bundle.js
      //but get it from a global 'React' variable
      'react': 'React'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
  	output: {
    	path: __dirname + "/public/scripts",
    	filename: "bundle.js"
  	}
  }
]
