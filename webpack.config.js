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
                ["import", {
                  "libraryName": "antd",
                  "libraryDirectory": "es",
                  "style": "css" // `style: true` 会加载 less 文件
              }]
              ]
            }       
          }, {
            test:/\.css$/,
            loader:'style-loader!css-loader'  
          }
        ]
      },
      devtool: 'cheap-source-map',
}