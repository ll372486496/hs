window.onscroll=function(){
  var scrollTop=
    document.body.scrollTop
    ||document.documentElement.scrollTop;
  if(scrollTop>=500)
  topnav.style.display="block";
  else
  topnav.style.display="none";
  
}