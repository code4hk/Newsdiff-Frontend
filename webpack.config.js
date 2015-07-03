
// loaders to use for different file type
var loaders = [
  {
    //tell webpack to use jsx-loader and babel for all *.jsx files
    test: /\.jsx$/,
    loaders: [
      'jsx?insertPragma=React.DOM&harmony',
      'babel?stage=1'
    ]
  },
  {
    //tell webpack to use babel for all *.js files
    test: /\.js$/,
    loaders: [
      'babel?stage=1'
    ]
  }
]

// don't bundle these libraries
var externals =  {
  //don't bundle the 'react' npm package with our bundle.js
  //but get it from a global 'React' variable
  'react': 'React'
}

module.exports = [
  {
    name: "browser",
    context: __dirname + "/app",
    entry: "./main.jsx",
    module: {
      loaders: loaders
    },
    externals: externals,
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
  	output: {
    	path: __dirname + "/public/scripts",
    	filename: "bundle.js"
  	}
  }
]
