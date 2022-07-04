var abc = document.getElementById("tu");
var qiehuan = document.querySelector("#tu1");
var qiehuan2 = document.querySelector("#tu2");
qiehuan.onclick=function(){
abc.src="./images/img5310.webp";
};
qiehuan2.onclick=function(){
    abc.src="./images/img533.webp";
}
// 加减数量
var str =1;
var yuan = 69.00;
var abc2= document.querySelector(".wapper");
var abc1= document.querySelector("#add");
var abc3=document.querySelector("#subtrack")
abc1.onclick=function(){
abc2.innerText = str+=1;
ab.innerText = yuan+=69;
};
abc3.onclick=function(){
    if (abc2.innerText>=2) {
        abc2.innerText=str-=1;
        ab.innerText = yuan-=69;  
    }
};
// 加减价格
var ab =document.querySelector(".yuan");
var cus2= document.querySelector(".cus2");
  //获取滚动条位置
  function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset) {
        scrollPos = window.pageYOffset;
    }
    else if (document.compatMode && document.compatMode != 'BackCompat') {
        scrollPos = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scrollPos = document.body.scrollTop;
    }
    return scrollPos;
}
//滚动条滑下 导航条样式改变
cus2.onclick=function(){
        let scrollPos = getScrollTop();
        document.documentElement.scrollTop = 0;
}

window.onload=function(){
    Lis=document.querySelectorAll(".navbar-words li");
    for(var i=0;i<Lis.length;i++){
      Lis[0].onclick=function(){
        window.location.href="shop.html";
      }
      Lis[1].onclick=function(){
        window.location.href="r2.html";
      }
      Lis[2].onclick=function(){
        window.location.href="smartisan.html";
      }
    }
  }
// var prices = getClasses("price"),

//     cart = document.getElementById("cart");

//     acc = getClasses("acc"),

//     totals = getClasses("total"),

//     detracts = getClasses("desymbol"),

//     adds = getClasses("adsymbol"),

//     NumofGoods = document.getElementById("NumofGoods"),

//     addupto = document.getElementById("addupto"),

//     allSelect = getClasses("allSelect"),

//     select = getClasses("select"),

//     dele = getClasses("dele");

 

// count();

// countAll();

 

// for(var i=0; i<allSelect.length; i++ ){

//     allSelect[i].onclick = function(){

//         for(var j=0; j<select.length; j++){

//             select[j].checked = this.checked;

//         }

//         for(j=0; j<allSelect.length; j++){

//             allSelect[j].checked = this.checked;

//         }

//         //每次点击选框就计算一次总价

//         countAll();

//     }

// }

 

// for(i=0; i<select.length; i++){

//     select[i].onclick = function(){

//         if(ifAllSelected()){

//             for(j=0; j<allSelect.length; j++){

//                 allSelect[j].checked = true;

//             }

//         }

//         if(ifNotAllSelected()){

//             for(j=0; j<allSelect.length; j++){

//                 allSelect[j].checked = false;

//             }

//         }

//         countAll();

//     }

// }

 

// for(i=0; i<adds.length; i++){

 

//     adds[i].onclick = function(){

//         console.log(this.parentNode.childNodes[3].innerHTML);

//         var num = parseInt(this.parentNode.childNodes[3].innerHTML);

//         num += 1;

//         this.parentNode.childNodes[3].innerHTML = num;

//         count();

//         countAll();

//     }

//     detracts[i].onclick = function(){

//         var num = parseInt(this.parentNode.childNodes[3].innerHTML);

//         num -= 1;

//         if(num<1){

//             num=1;

//         }

//         this.parentNode.childNodes[3].innerHTML = num;

//         count();

//         countAll();

//     }

//     //删除时也应该重新计算总价，或者先判断商品是否被选中，有选中则重新计算

//     dele[i].onclick = function(){

//         cart.childNodes[1].removeChild(this.parentNode);

//         countAll();

//     }

// }

 

// //避免兼容性问题，自行封装classname

// function getClasses(className){

//     var arr = [],

//         nodes = document.getElementsByTagName("*");

//     for(var i=0; i<nodes.length; i++){

//         if(nodes[i].className == className){

//             arr.push(nodes[i]);

//         }

//     }

//     return arr;

// }

 

// //进行单价的计算，保留两位小数

// function count(){

//     for(var i=0; i<prices.length; i++){

//         totals[i].innerHTML = (prices[i].innerHTML*acc[i].innerHTML).toFixed(2);

//     }

// }

// //计算总价的函数

// function countAll(){

//     var num1=0;

//     var num2=0;

//     //注意，每次计算总价应该重新取得一次select,acc和totals，因为执行删除操作时，会让这几个值发生变化

//     var select = getClasses("select"),

//         acc = getClasses("acc"),

//         totals = getClasses("total");

//     for(var i=0; i<select.length; i++){

//         if(select[i].checked == true){

//             num1 += parseInt(acc[i].innerHTML);

//             num2 += parseFloat(totals[i].innerHTML);

//         }

//     }

//     NumofGoods.innerHTML = num1;

//     addupto.innerHTML = num2;

// }

 

// //判断是否全部选中或者全部没有选中的函数

// function ifAllSelected(){

//     var allSelected = true;

 

//     for(var i=0; i<select.length; i++){

//         if(select[i].checked == false){

//             allSelected = false;

//         }

//     }

//     return allSelected;

// }

// function ifNotAllSelected(){

//     var notAllSelected = false;

//     for(var i=0; i<select.length; i++){

//         if(select[i].checked == false){

//             notAllSelected = true;

//         }

//     }

//     return notAllSelected;

// }