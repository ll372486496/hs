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
//详情图切换
var img_list=document.getElementById('pd-img-list');
var img_detail=document.getElementById('img-detail');
var imgs_detail=img_detail.querySelectorAll('img');
var imgs=img_list.querySelectorAll('li img');
for(var i=0;i<imgs.length;i++){
  imgs[i].onclick=function(){
    this.style.border='1px solid #000';
    for(var j=0;j<imgs_detail.length;j++){
      imgs_detail[j].className="img-none";
    }
    imgs_detail[i].className='';
  }
}