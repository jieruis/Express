var express = require('express');
var router = express.Router();
const config =require("../util/config")

//后台首页
router.get('/', function(req, res, next) {
   res.render('admin/chart.html',{baseurl:`${config.baseurl}:${config.port}/`})
});

module.exports = router;
