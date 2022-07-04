var express = require('express');
var router = express.Router();
const db = require("../db/db.fun");
const config=require('../util/config');

/* GET home page. */
router.get('/', async function(req, res, next) {
  let goods= await db.getAll("goods",{
    order:{gid:"ASC"},
    limit:{len:4}
  });
  let goods1= await db.getAll("goods",{
    order:{gid:"ASC"},
    limit:{start:1,len:7}
  });
  console.log(goods);
  console.log(goods1);
  res.render('shop.html',{baseurl:`${config.baseurl}:${config.port}/`,goods,goods1});
});

router.post("/",(req,res,next)=>{
  console.log("post请求");
  res.send("Hello");
})
module.exports = router;
