# 关于cloud-music
cloud-music是基于自己搭建的 React-scaffloding 脚手架的一个模仿网易云音乐移动端项目，用到的技术栈有react  
react-router,sass
#### 安装
`npm install --D`  
`npm run dev`
#### 开发环境
`npm run dev`
#### 生产环境
`npm run build`
# 关于服务端
前端所需的数据，由后端的nodejs应用发送https请求直接从网易云音乐服务器获取  
nodejs应用代码位于server/目录下
(nodejs应用默认监听5050端口，可按需修改index.js最后一行代码)
#### 如何运行？
* 进入server/目录
* `npm install --D`
* `node index.js`
# 相关配置
* 后台服务器的设置
    * 修改src/config/config.js里的`Apihost`
    ```javascript
    var config={
   Apihost:"http://localhost:5050"}
   ```
