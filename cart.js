var loginInfo = document.getElementById('login-info');
var chbAll, chbs;//获取全选按钮与选择按钮
var load = function () {
  if (sessionStorage.getItem('uname') && sessionStorage.getItem('uid')) {
    loginInfo.innerHTML = `欢迎回来！${sessionStorage.getItem('uname')}`;
    /* console.log('已经登录'); */
    //如果登录，请求数据并展现
    var uid = sessionStorage.getItem('uid');
    var url = `http://localhost:3000/user/cart`;
    var data = `uid=${uid}`;
    ajax({ url, data, type: 'post', dataType: 'json' }).then((res) => {
       /* console.log(res); */
      var cartItemContainer = document.getElementById('cartItemContainer');
      var html = '';
      if (res.length> 0) {
        for (item of res) {
          html += `<tr>
            <td><input type="checkbox" name="" ></td>
            <td><img src="http://127.0.0.1:3000/${item.pid}.jpg"></td>
            <td>${item.title.lenght < 10 ? item.title : item.title.slice(0, 10) + '...'}</td>
            <td>${item.price}</td>
            <td><input type="number" value='${item.count}'></td>
            <td>￥${item.price * item.count}</td>
            <td><input type="button" value="删除"></td>
            </tr>`;

        }
        cartItemContainer.innerHTML = html;
        //获取按钮
        chbAll = document.querySelector(
          "table>thead td:first-child>input"
        );
        /* console.log(chbAll); */
        chbs = document.querySelectorAll(
          "#cartItemContainer>tr>td:first-child>input"
        );
        /*  console.log(chbs); */

        //点击全选时，每项选择
        chbAll.onclick = function () {

          for (var chb of chbs) {
            chb.checked = chbAll.checked
          }
        }
        //单独点击选择时
        for (var chb of chbs) {
          chb.onclick = function () {
            var chb = this;
            //3. 查找要修改的元素——chbAll
            //4. 修改元素
            var unchecked = document.querySelector(
              "#cartItemContainer>tr>td:first-child>input:not(:checked)"
            );
            chbAll.checked = unchecked == null;
          }
        }


        
      }else{
        var table=document.getElementsByTagName('table')[0];
        table.innerHTML=`<a href='/index.html'>还没有商品去购买</a>`
      }
    });
  } else {

    var s = 4;
    var t1 = setInterval(() => {
      loginInfo.innerHTML = `${s}秒后跳转到<a href="/login.html">登录</a>页面`;
      if (s == 0) {
        clearInterval(t1);
        location.href = '/login.html'
      }
      s--;
    }, 1000)



  }
}


