window.onscroll=function(){
  var scrollTop=
    document.body.scrollTop
    ||document.documentElement.scrollTop;
  if(scrollTop>=500)
  topnav.style.display="block";
  else
  topnav.style.display="none";
  
}
//取得上、下一张按钮
var preBtns=document.getElementsByClassName('pre-btn'),
    nextBtns=document.getElementsByClassName('next-btn');
    
//要移动的元素
var designers=document.querySelectorAll('.designer-container');
//console.log(preBtns);console.log(nextBtns);console.log(designers);
//给按钮添加监听
  var moved1=0;
  preBtns[0].onclick=function(){
   
    if(moved1<2){
      moved1++;//console.log(moved1);
      designers[0].style.left=`-${moved1*180}px`;//左移一个图标
    }
  }
  nextBtns[0].onclick=function(){
    if(moved1>0){
      moved1--;//console.log(moved1);
      designers[0].style.left=`-${moved1*180}px`;//右移一个图标
    }
   
  }
  var moved2=0;
  preBtns[1].onclick=function(){
   
    if(moved1<2){
      moved1++;//console.log(moved1);
      
      designers[1].style.left=`-${moved1*180}px`;      
    }
  }
  nextBtns[1].onclick=function(){
    if(moved1>0){
      moved1--;//console.log(moved1);
      designers[1].style.left=`-${moved1*180}px`;
    }
   
  }


