const path = require('path');
module.exports = {
  // Arquivo de entrada
  entry: path.resolve(__dirname,'src','index.js'),
  output:{
    // Arquivo que vamos adicionar o javascript transpilado
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
  },  
  // Definindo onde webpack server vai buscar
  devServer: {
    contentBase: path.resolve(__dirname,'public')
  },
  module: {
    rules:[
      // Regras para definir quais arquivos vãos ser inseridos no bundle
      {
        test: /\.js$/,
        exclude: /node_modules/, // Arquivo do node_moules ja esta tranpilado
        use: {
          loader: 'babel-loader'
        }
      },{
        test: /\.css$/,
        use:[
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use:{
          loader: 'file-loader'
        }
      }
    ]
  }
  
}