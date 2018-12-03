const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routes/users.js');
const cors=require('cors');
var app=express();
app.listen(3000);
app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(cors({
  origin:'http://127.0.0.1:5050',
}))
app.use('/user',userRouter);