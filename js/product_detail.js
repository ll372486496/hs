//商品数量加减
var c_btn=document.getElementById('c_btn');
var btns=c_btn.getElementsByTagName('button');

for(var btn of btns){

    btn.onclick=function (){
    var btn=this;
    console.log(btn);
    var span=c_btn.getElementsByTagName('span')[0];
    if(btn.innerHTML==='+'){
      span.innerHTML++;
    }else if(span.innerHTML>0){
      span.innerHTML--;
    }
    
  }
}