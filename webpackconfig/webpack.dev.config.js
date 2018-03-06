var merge=require('webpack-merge');
var base=require('./webpack.base.config.js');

module.exports=merge(base,{
  devtool:'#cheap-module-eval-source-map',
  devServer:{
    contentBase:'./dist'
  }
});
