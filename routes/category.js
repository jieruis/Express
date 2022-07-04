var express = require('express');
var router = express.Router();
const config =require("../util/config")
const db =require("../db/db.fun");

//商品分类管理页
router.get('/', async function(req, res, next) {
  let category = await db.getAll("category",{
    order:{cid:"ASC"}
  })
  res.render("admin/category.html",{baseurl:`${config.baseurl}:${config.port}/`,category})
});

//商品分类新增
router.get("/add",async (req,res)=>{
  let category = await db.getAll("category",{
    where:{pid:0}
  })
  res.render("admin/category_add.html",{baseurl:`${config.baseurl}:${config.port}/`,category});
})
//添加分类
router.post("/add",(req,res)=>{
  console.log(req.body);
  if(req.body.cname != null){
    db.insert("category",{
      cname:req.body.cname,
      pid:req.body.pid,
      uid:req.body.uid
    }).then(data=>{
      if(data.affectedRows > 0){  //通过判断受影响的函数来确定是否新增成
        res.redirect("/category");
      }
    });
  }
})

//获取分类的所有父级分类(包含自身)
async function getParents(pid,allParents){
   //获取当前分类的同胞
   let bros = await db.getAll("category",{
    where:{pid}
  });
  allParents.unshift(bros);
  if(pid > 0){
    //获取当前分类的父id:cat.pid
    let parent = await db.getAll("category",{
      where:{cid:pid}
    });  //获取直接父级
    //父的父id:parent[0].pid
    await getParents(parent[0].pid,allParents);
  }
}

//商品分类更新
router.get("/update",async (req,res)=>{
  let category = await db.getAll("category",{
    where:{cid:req.query.cid}
  });
  console.log(category);
  let allParents = [];  //二维数组，存储所有的父级
  await getParents(category[0].pid,allParents);
  console.log(allParents);
  res.render("admin/category_update.html",{baseurl:`${config.baseurl}:${config.port}/`,category:category[0],allParents});
})
//分类更新
router.post("/update",(req,res)=>{
  console.log(req.body);
  if(req.body.cname != null){
    db.update("category",{
      val:{
      cname:req.body.cname,
      pid:req.body.pid,
      uid:req.body.uid},
      where:{cid:req.query.cid}
    }).then(data=>{
      if(data.affectedRows > 0){  //通过判断受影响的函数来确定是否新增成
        res.redirect("/category");
      }
    });
  }
})


//商品分类删除
router.get("/del",async (req,res)=>{
  if(req.query.cid){
    db.del("category",{
      where:{cid:req.query.cid}
    })
    res.redirect("/category");
  }
})

//通过pid获取子类接口
router.get('/getChildCates', async function(req, res, next) {
  let cates=await db.getAll("category",{
    where:{pid:req.query.pid}
  })
  res.json({errCode:0,errMsg:"获取子类分类成功",result:cates})
});

module.exports = router;
