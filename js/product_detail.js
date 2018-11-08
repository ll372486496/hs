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
//标签切换
var as=document.querySelectorAll('#tab>li>[data-toggl=tab]');
for(var a of as){
  a.onclick=function(){
   var a=this;
   var id=a.getAttribute('data-id');
   var div=document.querySelector(`#${id}`);
   var divs=document.querySelectorAll('.contents>div');
   console.log(divs);
   for(var d of divs){
    d.style.display='none';
    
  }
  
  div.style.display='block';
   
  }
}