document.onready=function(){
  var pid= this.location.search.split('=')[1];
  
  var url=`http://localhost:3000/product/list`;
  var data=`categroy=${pid}`;
  /* console.log(data); */
  var list=[];
  ajax({url,data,type:'get',dataType:'json'}).then((res)=>{
   /*  console.log(res); */
    list=res;
    var productBox=document.getElementById("product-box");
    var html='';
    if(list.length>0){
      for(i in list){
        /* console.log(product); */
        
        html+=`<div class="product  mt-3"><a href="/product_detail.html?pid=${list[i].pid}">
        <img src="http://127.0.0.1:3000/${i*1+1}.jpg">
        <h5>${list[i].title.lenght<10?list[i].title:list[i].title.slice(0,10)+'...'}</h5><span>￥${list[i].price}.00</span></a>
        </div>`;
      }
    productBox.innerHTML=html;
  }
   
  });
};
