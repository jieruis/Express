var express = require('express'); //引入express框架
var router = express.Router();//创建路由对象
const crypto=require("crypto"); //密码加密
const config =require("../util/config")
const db=require("../db/db.fun");//引入数据模块

//path:/admin/
router.get('/', function(req, res, next) {
  //跳转到后台首页
  res.redirect("/chart");
});

//加载登录界面
router.get("/login",function(req,res,next){
  // res.render("admin/login.art",{});
  res.render("admin/login.html",{baseurl:`${config.baseurl}:${config.port}/`})
})

//登录验证
router.post("/login",(req,res,next)=>{
   console.log(req.rawHeaders);
  if(req.body.uname != "" && req.body.pwd!=""){
      db.getAll("admin",{
        where:{
            uname:req.body.uname,
            pwd:crypto.createHash("md5").update(req.body.pwd).digest("hex") //未加密req.body.pwd
        }
      }).then(data=>{
        // console.log(data);
        if(data.length>0){
          let options ={path:"/"}
          if(req.body.remember){//记住我
            options.maxAge=60*60*24*7*1000;
          }
            res.cookie("uid",data[0].uid,options);
            res.cookie("uname",data[0].uname,options);
         
          if(req.rawHeaders.includes("XMLHttpRequest")){  //数组，ajax请求 json
            res.json({errCode:0,errMsg:"登录成功",result:data[0]});
          }else{
              res.redirect("/chart");
          }
        }
      })
  }else{
    if(req.rawHeaders.includes("XMLHttpRequest")){//判断是否是ajax请求
      res.json({errCode:1,errMsg:"用户名和密码为空",result:[]});
    }else
      res.render("msg.html",{msg:"用户名和密码不能为为空~",type:"error",url:"/admin/login"});
  }
})

//退出
router.get("/logout",function(req,res,next){
  let options ={
    path:"/",
    httpOnly:false,
    maxAge:-1,
  }
  res.cookie("uid","",options);
  res.cookie("uname","",options);     
  res.render("admin/login.html",{baseurl:`${config.baseurl}:${config.port}/`})
})
module.exports = router;
