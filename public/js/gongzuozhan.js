var lis = document.querySelectorAll(".navbar-words>li:nth-child(n+2):nth-child(-n+10)");
var lis2 = document.querySelectorAll(".title-item>li");
var ul = document.querySelector(".navbar-words");
var daohang1 = document.querySelector("nav");
var gzz = document.querySelector(".gzz");
var article = document.querySelector("article");
var main = document.querySelector("main");
var three = document.querySelector(".three");
var video = document.querySelector("video");
var num = 0; 
var i = 0;
// 下方导航栏对齐
var daohang2 = document.querySelector(".main-title");
var logo = document.querySelector(".navbar-words>li.logo");
daohang2.style.paddingLeft = logo.offsetLeft + "px";

window.onload = function(){
  video.style.autoplay = "true";
}
// // 页面滚动时改变下方导航栏样式
window.onscroll = function(event){
  event = event || window.event;
  if(daohang2.getBoundingClientRect().top <= 0){
    gzz.style.display = "block";
  }if(document.documentElement.scrollTop < 100){
    gzz.style.display = "none";
    // 第二页导航栏 
  // }if(num == 1){
  }
};
// 页面大小变化时导航栏对齐
window.onresize = function(){
  daohang2.style.paddingLeft = logo.offsetLeft + "px";
}
// 切换子页面
lis2[0].onclick = function(){
    location.reload();
};
lis2[1].onclick = function(){
    num = 1;
    daohang1.style.backgroundImage = "url(./images/base64-1.png)";
    daohang2.style.backgroundImage = "url(./images/base64-4.png)";
    lis2[0].classList.remove("activedown");
    lis2[2].classList.remove("activedown1");
    lis2[2].classList.remove("activedown3");
    ul.classList.add("normalup");
    daohang2.classList.add("normaldown");
    lis2[1].classList.add("activedown3");
    lis[3].classList.add("activeup3");
    article.style.display ="none";
    three.style.display ="none";
    main.style.display ="block";
    
};
lis2[2].onclick = function(){
    num = 2;
    daohang1.style.backgroundImage = "url(../images/base64-2.png)";
    daohang2.style.backgroundImage = "url(../images/base64-3.png)";
    lis2[0].classList.remove("activedown");
    lis2[1].classList.remove("activedown1");
    lis2[1].classList.remove("activedown3");
    ul.classList.add("normalup");
    daohang2.classList.add("normaldown");
    lis2[2].classList.add("activedown3");
    lis[3].classList.add("activeup3");
    article.style.display ="none";
    main.style.display ="none";
    three.style.display ="block";
};

// 不同页面样式转换
for(var j = 0; j < lis.length; j++){
  lis[j].index = j;
  lis[j].onmouseover = function(){
    over1(this.index);
  }
  lis[j].onmouseleave = function(){
    leav1(this.index);
  }
}
for(var k = 0; k < lis2.length; k++){
  lis2[k].index = k;
  lis2[k].onmouseover = function(){
    ove2(this.index);
  }
  lis2[k].onmouseleave = function(){
    leav2(this.index);
  }
}
function ove2(y){ 
  if(num == 0){
    lis2[y].classList.add("activedown1"); 
  }else{
    lis2[y].classList.add("activedown2"); 
  }
  k = y;
}
function leav2(y){ 
  if(num == 0){
    lis2[y].classList.remove("activedown1");
  }else{
    lis2[y].classList.remove("activedown2");
  }
  k = y;
} 
function over1(x){ 
  if(num == 0){ 
    lis[x].classList.add("activeup1"); 
  }else{
    lis[x].classList.add("activeup2"); 
  }
  i = x;
}
function leav1(x){ 
  if(num == 0){
    lis[x].classList.remove("activeup1");
  }else{
    lis[x].classList.remove("activeup2");
  }
  i = x;
}
