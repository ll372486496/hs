//封装获取元素
function $(id) {
    var ele;
    ele = document.getElementById(id);
    return ele;
}

//封装创建xhr
function createXhr() {
    var xhr = null;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft XMLHttp');
    }

    return xhr;
}

//注册验证
//1、获取名称、密码、验证密码元素，提示信息元素
var username = document.getElementById('login_name');
var upwd1 = document.getElementById('login_pwd1');
var upwd2 = document.getElementById('login_pwd2');
var userinfo = document.getElementById('userinfo');

//2、名称绑定事件
var emailreg=new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/);
var phonereg=new RegExp(/^[1][3,4,5,7,8][0-9]{9}$/);
//验证
username.onblur = function () {
    var username = this;
    //验证邮箱或手机号
    var txt=username.value;
    //console.log(txt);
    if(emailreg.test(txt)){
        console.log('email');
    }else if(phonereg.test(txt)){
        var hid=document.getElementsByClassName('hid')[0];
        hid.className='dis';
    }
}
//3、密码绑定事件

//4、提交按钮绑定事件
//4.1、获取提交按钮
var sub_btn=document.getElementById('btn-register');
sub_btn.onclick=function(){
   var vali=function(ojb){
       if(ojb.innerHTML==''){}
   } 
    
}


