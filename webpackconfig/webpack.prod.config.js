var merge=require('webpack-merge');
var base=require('./webpack.base.config.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path=require('path');
module.exports=merge(base,{
  module:{
    rules:[
     {
            test:/\.css$/,
            use:ExtractTextPlugin.extract({
              use:{
                    loader:'css-loader',
                    options:{
                      minimize: true,
                      url:false
                    }
                  },
               fallback:"style-loader"
            })
          }
    ]
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: true
  }),
    new ExtractTextPlugin({filename:"css/[name].[contenthash].css"}),
    new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module, count) {
      return (
        module.resource &&
        /\.js$/.test(module.resource) &&
        module.resource.indexOf(
          path.join(__dirname, '../node_modules')
        ) === 0
      )
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    chunks: ['vendor']
  })
  ]
})
