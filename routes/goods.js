var express = require('express');
var router = express.Router();
const config = require("../util/config");
const db = require("../db/db.fun");
const fs = require("fs");
const path = require("path");

//商品管理页
router.get('/', async function(req, res, next) {
  //获取所有商品
  let goods = await db.getAll("goods",{
    order:{gid:"ASC"}
  })
  res.render("admin/goods.html",{baseurl:`${config.baseurl}:${config.port}/`,goods})
});

//商品新增
router.get("/add",async (req,res)=>{
  //获取顶级分类
  let topCates = await db.getAll("category",{
    where:{pid:0}
  })
  res.render("admin/goods_add.html",{baseurl:`${config.baseurl}:${config.port}/`,topCates});
})
router.post("/add",(req,res)=>{
  console.log(req.body);
  if(req.file){
    //保存文件
    // 创建一个可读流
    var readerStream = fs.createReadStream(path.join(__dirname,"../",req.file.path));
    var hz = req.file.originalname.slice(req.file.originalname.lastIndexOf("."));//文件后缀
    /* 获取文件后缀有两种方法 
    1.从originalname获取
    2.从mimetype获取*/
    // 创建一个可写流
    var writerStream = fs.createWriteStream(path.join(__dirname,"../uploads/",req.file.filename+hz));
    // 管道读写操作
    readerStream.pipe(writerStream);
    //删除临时文件  fs.unlink(path,callback)  path-文件路径  callback-回调函数
    fs.unlink(path.join(__dirname,"../uploads",req.file.path),err=>err);
    db.insert("goods",{
      gname:req.body.gname,
      price:req.body.price,
      sprice:req.body.sprice,
      cid:req.body.cid[req.body.cid.length-1],
      description:req.body.description,
      pic:"uploads/"+req.file.filename+hz,
      num:req.body.num
    }).then(data=>{
      if(data.affectedRows > 0){
        res.redirect("/goods");
      }
    })
  }
})

//商品更新
router.get("/update",async (req,res)=>{
  let goods = await db.getAll("goods",{
    where:{gid:req.query.gid}
  })
   //获取顶级分类
   let topCates = await db.getAll("category",{
    where:{pid:0}
  })
  res.render("admin/goods_update.html",{baseurl:`${config.baseurl}:${config.port}/`,goods:goods[0],topCates});
})
router.post("/update",(req,res)=>{
  if(req.file){
    //保存文件
    // 创建一个可读流
    var readerStream = fs.createReadStream(path.join(__dirname,"../",req.file.path));
    var hz = req.file.originalname.slice(req.file.originalname.lastIndexOf("."));//文件后缀
    /* 获取文件后缀有两种方法 
    1.从originalname获取
    2.从mimetype获取*/
    // 创建一个可写流
    var writerStream = fs.createWriteStream(path.join(__dirname,"../uploads/",req.file.filename+hz));
    // 管道读写操作
    readerStream.pipe(writerStream);
    //删除临时文件  fs.unlink(path,callback)  path-文件路径  callback-回调函数
    fs.unlink(path.join(__dirname,"../uploads",req.file.path),err=>err);
    db.update("goods",{
      val:{
      gname:req.body.gname,
      price:req.body.price,
      sprice:req.body.sprice,
      cid:req.body.cid[req.body.cid.length-1],
      description:req.body.description,
      pic:"uploads/"+req.file.filename+hz,
      num:req.body.num},
      where:{gid:req.query.gid}
    }).then(data=>{
      if(data.affectedRows > 0){
        res.redirect("/goods");
      }
    })
  }

})

//商品分类删除
router.get("/del",async (req,res)=>{
  if(req.query.gid){
    db.del("goods",{
      where:{gid:req.query.gid}
    })
    res.redirect("/goods");
  }
})
module.exports = router;