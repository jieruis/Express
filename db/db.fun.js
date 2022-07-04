//数据库模块
const mysql = require("mysql");  //加载mysql模块
const config = require("../util/config");  //加载配置文件

//创建数据库连接
function conn(){
  let connection = mysql.createConnection({
    host:config.database.ip,
    user:config.database.username,
    password:config.database.password,
    database:config.database.dbname
  });
  connection.connect(function(err){
    if(err){
      throw err;
      return;
    }
  });
  return connection;
}

//执行sql
function excute(sql){
  return new Promise((resolve,reject)=>{
    let connection = conn(); //创建连接
    connection.query(sql,(error,results,fileds)=>{
      if(error)
        reject(error);
      else
        resolve(results);
    })
    connection.end();  //断开连接
  });
}

//查询--并列精确查找
function getAll(table,{where=0,order="",limit=0}={}){
  let sql = "SELECT * FROM `"+table+"`";
  if(where){  //where条件
    sql += " WHERE ";
    for(let k in where){
      sql += " `"+k+"`='"+where[k]+"' AND";
    }
    sql = sql.slice(0,sql.length-3);  //去掉最后的"AND"
  }
  if(order){  //order排序
    sql += " ORDER BY ";
    for(let k in order){
      sql += "`"+k+"` "+order[k]+",";
    }
    sql = sql.slice(0,sql.length-1);  //去掉最后的","
  }
  if(limit){ //limit限定条数
    sql += " LIMIT ";
    sql += limit.start ? limit.start+"," : "";
    sql += limit.len ? limit.len : 1;
  }
  return excute(sql);
}

//新增
function insert(table,data){
  console.log(data);
  let cols = "";
  let vals = "";
  for(let k in data){
    cols += "`"+k+"`,";
    vals += '"'+data[k]+'",';
  }
  cols = cols.slice(0,cols.length-1);  //去掉最后的,
  vals = vals.slice(0,vals.length-1);  //去掉最后的,
  let sql = "INSERT INTO `"+table+"`("+cols+") VALUES ("+vals+")";
  return excute(sql);
}


//删除
function del(table,{where=0}={}){
  let sql =  "DELETE FROM `"+table+"`";
  if(where){  //where条件
    sql += " WHERE ";
    for(let k in where){
      sql += " `"+k+"`='"+where[k]+"' AND";
    }
    sql = sql.slice(0,sql.length-3);  //去掉最后的"AND"
  }
  console.log(sql);
  return excute(sql);
}

//修改
function update(table,{val=0,where=0}={}){
  let sql ="UPDATE `"+table+"` SET";
  if(val){  //val条件
    for(let k in val){
      sql += " `"+k+"` = '"+val[k]+"' ,";
    }
    sql = sql.slice(0,sql.length-1);//去掉最后的,
  }

  if(where){  //where条件
    sql += " WHERE ";
    for(let k in where){
      sql += " `"+k+"`='"+where[k]+"' AND";
    }
    sql = sql.slice(0,sql.length-3);  //去掉最后的"AND"
  }
  console.log(sql);
  return excute(sql);
}
module.exports = {getAll,insert,del,update}