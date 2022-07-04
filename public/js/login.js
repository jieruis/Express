var input=document.querySelector(".phonenumber");
var aera = document.querySelector(".area");
var label = document.querySelector(".number");
var password = document.querySelector(".password");
var passwordtitle = document.querySelector(".passwordtitle");
var eye = document.querySelector(".eye");
var checkbox = document.querySelector(".checkbox");
var i =0;
var j =1;
var btn = document.querySelector(".btn");
//手机号码框
input.onfocus=function(){
  aera.style.color="rgba(0, 0, 0, .6)"
  input.style.color="rgba(0, 0, 0, .6)"
}
input.onblur=function(val){
  aera.style.color="rgba(0, 0, 0, .15)"
  input.style.color="rgba(0, 0, 0, .15)"
  if(input.value==""){
    label.innerText="手机号";
  }
}
input.oninput=function(){
  label.innerText="";
}
// 密码框
password.oninput=function(){
  passwordtitle.innerText="";
  if(password.value!=""&&input.value!=""){
    btn.style.opacity=".8"
    btn.style.cursor="pointer"
  }
}
password.onblur=function(){
  if(password.value==""){
    passwordtitle.innerText="密码";
  }
}
eye.onclick=function(){
  i++;
  if(i%2){
    eye.style.background="url(./images/eye-open.png)"
    password.type="text"
  }else{
    eye.style.background="url(./images/eye-close.png)"
    password.type="password"
  }
}
checkbox.onclick=function(){
  if(j%2){
    checkbox.style.background="url(./images/checkboxoff_082bd2e554.png)"
    checkbox.style.backgroundSize="24px"
  }else{
    checkbox.style.background="url(./images/checkboxon188421c8c6.png)"
    checkbox.style.backgroundSize="24px"
  }
  j++;
  console.log(j)
}