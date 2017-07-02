## 正泰仪表燃气表管控平台vue版

## 安装依赖
* npm install
* npm install axios -S //vue的ajax插件
* npm install muse-ui -save  //使用muse-ui组件
* npm install cheerio	//npm环境下的类jQuery插件

## 启动项目
* npm run dev

# 项目布局

```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── src                                         // 源码目录
│   ├── components                              // 组件
│   │   ├── Login.vue                           // 登录组件
│   │   ├── Main.vue                            // 主页组件
│   │   ├── footer 								// 公共尾部
│   │   ├── header 								// 公共头部
│   │   ├── pages 								// 各个子页面
│   │   └── plugins 							// 各个组件
│   ├── images                                  // 公共图片(编译时可用)
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── App.vue                                 // 页面入口文件
│   └── main.js                                 // 程序入口文件，加载各种公共组件
├── static                                      // 静态资源，用于index时，非编译环境中
├── favicon.ico                                 // 图标
└──index.html                                  	// 入口html文件
.

 m directories, n files
```