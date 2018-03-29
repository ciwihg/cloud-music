var path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
  entry:{
    app:'./index.js'
  },
  output:{
    path:path.resolve(__dirname,'../dist'),
    filename:'[name].[hash].js'
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude: /(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          options:{
            presets:["es2015","react"],
            plugins: ["syntax-dynamic-import"]
          }
        }
      } /*,{
        test:/\.css$/,
        use:[
          {loader:'style-loader'},
          {loader:'css-loader',
           options:{minimize: true}}
        ]
      }*/
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:"Ciwi work",
      template:'index.html'
    })
  ]
}
