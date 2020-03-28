module.exports = {
  presets: [
    '@babel/preset-env', // CONVERTE ES6
    '@babel/preset-react', // CONVERTE SINTAXE DO REACT PARA QUE O BROWSER ENTENDA
  ],
  plugins:[
    '@babel/plugin-proposal-class-properties'
  ]
  
}