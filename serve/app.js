const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routes/users.js');
var app=express();
app.listen(3000);
app.use(bodyParser.urlencoded({
  extended:false
}));
app.use('/user',userRouter);