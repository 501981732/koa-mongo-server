A collection of simple demos of [Koa](http://koajs.com/), a web application framework for Node.

![Logo](logo.png)

## How to use

First of all, check your Node version.

```bash
$ node -v
v8.0.0
```
## 运行服务

```
npm install     //安装相应依赖
npm run dev     //supervisor启动项目
npm run jsdoc   //jsdoc生成说明文档
npm run test    // 单元测试
npm run rmpkg   // 删除node_modules
```
## 相关依赖
> dependencies 

```
1. koa-bodyparser
2. koa-compose
3. koa-router
4. koa-static
5. koa-swig
6. mini-logger
7. mongodb
8. mongoose
9. mysql
10. canvas-prebuilt
11. co
...
```
> devDependencies
 
```
1. cross-env
2. gulp
3. jsdoc
4. mocha
5. should
6. supertest
7. supervisor
8. chalk
9. babel-polyfill
10.babel-preset-env

```

## 项目目录结构

```
.
├── bin                                         // 启动文件
├── config                                      // 项目环境配置
│   ├── index                                   // 入口
│   ├── env                                     // 根据运行环境自动加载相应环境的变量
│   │   ├── common                              // 公共配置项
│   │   ├── development.js                      // 开发环境配置项
│   │   ├── production.js                       // 生产环境配置项                                               │   │   └── test.js                             // 测试环境配置项
├── dist                                        // 上线项目文件
├── docs                                        // jsdoc注释自动生成文档
├── src                                         // 源码目录
│   ├── controller                              // controller
│   │   ├── user                                // usercontroller
│   │   │   ├── controller.js                   // 
│   │   │   └── router.js                       // 单元controller
│   │   ├── image                               // imagecontroller
│   │   │   ├── controller.js                   // 
│   │   │   └── router.js                       // msite和shop页面的餐馆列表公共组件
│   │   └── index.js                            // 导出controller server自动注入controller
│   ├── db                                      //
│   │   └── index.js                            // 数据库连接
│   ├── log                                     // 错误日志存放
│   │   └── 2018-xx-xx-err-r.log                //
│   ├── middleware                              //中间件
│   │   ├── logger-async.js                     // log中间件
│   │   └── error.js                            // error中间件
│   ├── models                                  // models
│   │   └── user.js                             // user模型
│   ├── prototype                               // 可以继承的原型
│   │   ├── Base.js                             // 通用类方法
│   │   └── Canvas.js                           // canvas类
│   ├── views                                   // 视图层
│   │   ├── index.html                          // 
│   │   └── user.html                           // 
├── test                                        // 测试文件
│   └── index.spec.js                           
├── .babelrc   
├── Dockerfile                                    
├── .gitignore                                   
├── .gulpfile                                   
├── .index                                     
├── package.json                                    
├── package-lock.json  
└── README.md                                  
```


```
$ git clone git@github.com:ruanyf/koa-demos.git
```

## 项目生成器

> 地址[项目生成器](https://github.com/501981732/generator-easy-koa)

```
npm install yo generator-easy-koa -g 全局安装项目依赖
yo easy-koa   一键生成可配置项目
yo easy-koa:controller controllerName  一键生成controller
```


## Useful links

- [koa workshop](https://github.com/koajs/workshop)
- [kick-off-koa](https://github.com/koajs/kick-off-koa)
- [Koa Examples](https://github.com/koajs/examples)

