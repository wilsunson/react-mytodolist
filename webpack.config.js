module.exports={
    entry: './main.jsx',
    output:{
        filename:'./bundle.js'
    },
    module: {
        loaders: [
          {
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            loader: 'babel-loader' ,
            options:{
              plugins:[
                
              ]
            }       
          }, {
            test:/\.css$/,
            exclude: /node_modules/,
            loader:'css-loader'
          }
        ]
      },
      devtool: 'cheap-source-map',
}