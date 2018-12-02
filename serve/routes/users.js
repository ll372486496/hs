const express=require('express');
var router=express.Router();
router.post('/reg',function(req,res){
  //接收post请求的数据
  var obj=req.body;
  var $uname=obj.username;
  var $upwd=obj.upwd;
  console.log($uname);
  //判断用户名与密码是否为空，
  if($uname&&$upwd){
    //数据库验证是存在用户名
  }else{
    //用户名或者密码为空就返回
    res.send({code:401,msg:'不能为空'});
  }
  
  
  
});
module.exports = router;