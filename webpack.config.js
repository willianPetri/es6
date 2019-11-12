module.exports = {
  entry: ['@babel/polyfill', './src/main.js'],
  output: {
    // variavel global que se refere ao diretorio do webpack q é na raiz 
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: __dirname + '/public' 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
};