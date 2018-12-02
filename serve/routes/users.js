const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
router.post('/reg',function(req,res){
  //接收post请求的数据
  var reg=req.body;
  var $uname=reg.username;
  var $upwd=reg.upwd;
  
  //判断用户名与密码是否为空，
  if($uname&&$upwd){
    //数据库验证是存在用户名
    var sql='SELECT COUNT(*) FROM hs_user WHERE username=?';
    pool.query(sql,[$uname],(err,result)=>{
      if(result.length<1){
        //用户名不存在时，向数据库插入数据 


        res.send({code:200,msg:'可以注册'});
      }else{
        //如果用户名已存在，发送错误代码及提示
        res.send({code:402,msg:'用户名已存在'});
      }
    })
   
  }else{
    //用户名或者密码为空就返回
    res.send({code:401,msg:'不能为空'});
  }
  
  
  
});
router.post('/login',function(req,res){
  var login=req.body;
  var $uname=login.username;
  var $upwd=login.upwd;
  if($uname&&$upwd){
   var sql='SELECT id FROM hs_user WHERE username=? AND upwd=?';
   pool.query(sql,[$uname,$upwd],(err,result)=>{
     if(result.length>0){
       //跳转到首页
     }else{
       res.send({code:-2,msg:'账号或密码错误'});
     }
   });
  }else{
    res.send({code:-1,msg:'不能为空'});
  }
})
module.exports = router;