const express=require('express');
const pool1=require('../pool.js');
const pool2=require('../pool.js');
var router=express.Router();
router.post('/reg',function(req,res){
  //接收post请求的数据
  var reg=req.body;
  var $uname=reg.username;
  var $upwd=reg.upwd;
  
  //判断用户名与密码是否为空，
  if($uname&&$upwd){
    //数据库验证是存在用户名
    var sql1='SELECT * FROM hs_user WHERE uname=?';
    pool1.query(sql1,[$uname],(err1,result1)=>{
      if(err1) throw err1;
      console.log(result1);
      if(result1.length<1){
        //用户名不存在时，向数据库插入数据 
        console.log('可以注册');
        var sql2="INSERT INTO hs_user VALUES (NULL, ?, ?)";
        pool2.query(sql2,[$uname,$upwd],(err2,result2)=>{
          if(err2) throw err2;
          if(result2.affectedRows>0){
            console.log('注册成功');
            res.send({code:1,msg:'注册成功'});
          }
        })
       
      }else{
        //如果用户名已存在，发送错误代码及提示
        console.log('已存在');
        res.send({code:-2,msg:'用户名已存在'});
      }
    })
   
  }else{
    //用户名或者密码为空就返回
    console.log('为空');
    res.send({code:-1,msg:'不能为空'});
  }
  
  
  
});
router.post('/login',function(req,res){
  
  var login=req.body;
  var $uname=login.username;
  var $upwd=login.upwd;
  if($uname&&$upwd){
   var sql='SELECT uid FROM hs_user WHERE uname=? AND upwd=?';
   pool2.query(sql,[$uname,$upwd],(err,result)=>{
     if(err)throw err;
     if(result.length>0){
       req.session.uname=$uname;
       
       res.send({code:1,msg:'成功'});
     }else{
       res.send({code:-2,msg:'账号或密码错误'});
     }
   });
  }else{
    res.send({code:-1,msg:'不能为空'});
  }
})
module.exports = router;