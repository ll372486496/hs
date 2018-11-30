//判断能否提交注册
function reg() {
  console.log('reg');
  var span1 = $('ck-name-em').innerHTML, span2 = $("ck-pwd-em").innerHTML, span3 = $("ck-pwd-same").innerHTML;
  console.log(span1 != '');
  console.log(span2 != '');
  console.log(span3 != '');
  //判断填写是否有错
  if (span1 != '' || span2 != '' || span3 != '') {
    console.log('填写错误');
  } else {
    var xhr = new createXhr();
    var name = $('login_name').value, pwd = $('login_pwd1').value;
    //todo 用ajax提交到后台处理
    console.log('可以注册');

  }
}
//注册验证
//1、获取名称、密码、验证密码元素，提示信息元素
var username = document.getElementById('login_name');
var upwd1 = document.getElementById('login_pwd1');
var upwd2 = document.getElementById('login_pwd2');
var upwdinfo = upwd2.nextElementSibling;
var span = username.parentElement.children[1];


//2、验证用户名
//获得焦点时提示
username.onfocus = function () {
  /* var hid=username.parentElement.nextElementSibling;
  hid.className='hid'; */
  span.style.display = 'block';
}
//验证用户名是否正确
username.onblur = function () {
  console.log('onblur');
  var username = this;
  var emailreg = new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/);
  var phonereg = new RegExp(/^[1][3,4,5,7,8][0-9]{9}$/);
  /* var hid=document.getElementsByClassName('hid')[0]; */
  //验证邮箱或手机号
  var txt = username.value;

  if (emailreg.test(txt) || phonereg.test(txt)) {
    console.log(emailreg.test(txt) || phonereg.test(txt));
    span.innerHTML = '格式符合要求'
  } else {

    span.innerHTML = '格式不正确'
    span.className = 'ck-info'
  }
}


//3、验证密码
upwd1.onblur=upwd2.onblur=function(){
  if(upwd1.value==''||upwd2.value==''){
    upwdinfo.innerHTML='密码不能为空';
    upwdinfo.style.display='block';
  }else{
    upwdinfo.style.display='none';
  }
}