var createError = require('http-errors');  //错误处理模块
var express = require('express');  //导入express框架
var path = require('path');  //node.js的path模块
var cookieParser = require('cookie-parser');  //cookie处理模块
var logger = require('morgan'); //日志模块
let multer = require("multer")({dest:"uploads/"});  //转换multipart/form-data数据模块

var indexRouter = require('./routes/index');  //加载控制器模块--首页
var adminRouter = require('./routes/admin');  //后台管理员模块
var chartRouter = require("./routes/chart");  //后台报表模块
var goodsRouter = require("./routes/goods");  //后台商品模块
var categoryRouter = require("./routes/category"); //后台分类模块

var app = express(); //创建一个Express程序
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));  //设置模板所在的目录
app.set('view engine', 'jade'); //设置模板引擎
app.engine("art",require("express-art-template"));  //注册模板引擎
app.engine("html",require("express-art-template"));

//挂载中间件--所有的请求都会执行下面的方法
app.use(logger('dev'));
app.use(express.json()); //转换application/json的数据
app.use(express.urlencoded({ extended: false }));  //转换application/x-www-form-urlencoded的数据
app.use(cookieParser()); //转换cookie
//以下设置为模板中依旧将public作为了资源路径的一部分
// app.use("/public",express.static(path.join(__dirname, 'public'))); //静态资源托管
//以下设置为模板中没有使用public作为资源路径
app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads",express.static(path.join(__dirname, 'uploads')));
app.use("/views",express.static(path.join(__dirname, 'views')));

//拦截请求以及应答--自定义中间件
app.use(["/chart","/category","/goods"],function(req,res,next){
  //后台登录验证
  if(!req.cookies.uid)
    res.render("msg.html",{msg:"请先登录~",type:"error",url:"/admin/login"});
  else
    next();  //已登录,进入下一步路由   //中间件要往下执行，一定要加next()
})

app.post(["/goods/add","/goods/update"],multer.single("pic")); //过滤上传文件数据

app.use('/', indexRouter);  //应用路由--响应
app.use('/admin', adminRouter);
app.use("/chart",chartRouter);
app.use("/goods",goodsRouter);
app.use("/category",categoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});  //处理404的中间件--路径没有匹配的时候才执行

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
