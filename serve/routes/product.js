const express=require('express');
const pool=require('../pool.js');

var router=express.Router();
router.get('/list',function(req,res){
  var category_id=req.query.categroy;
  /* console.log(typeof(category_id)); */
  
  if(category_id=='undefined'){
    
    /* console.log(000); */
   
    var sql=`SELECT * FROM hs_products`;
    pool.query(sql,category_id,(err,result)=>{
      if(err)throw err;
      if(result.length>0){
        res.send(result);
      }else{
        res.send({code:-2,msg:'无结果'})
      }
    });
  }else{
    var sql=`SELECT * FROM hs_products WHERE category_id=?`
    
    pool.query(sql,[category_id],(err,result)=>{
      if(err)throw err;
      if(result.length>0){
       
        res.send(result);
      }else{
        res.send({code:-2,msg:'无结果'})
      }
    });
  }


 
});
module.exports = router;