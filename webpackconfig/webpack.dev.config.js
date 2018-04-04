var merge=require('webpack-merge');
var base=require('./webpack.base.config.js');
module.exports=merge(base,{
  devtool:'#cheap-module-eval-source-map',
  devServer:{
    contentBase:'./dist'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          {loader:'style-loader'},
          {loader:'css-loader',
        options:{
          url:false
        }}
        ]
      },{
        test:/\.scss$/,
        use:[
          {loader:'style-loader'},
          {loader:'css-loader',
        options:{
          url:false
        }},
        {loader:'sass-loader'}
        ]
      }
    ]
  }

});
