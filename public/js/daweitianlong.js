var anyss = document.querySelectorAll(".ysan");
var xuanze = document.querySelectorAll(".xuanzeniu")
var yanse = document.querySelector(".yanse");
var neicun = document.querySelector(".neicun");
var shouhou = document.querySelectorAll(".xiaohezi");
var dingwei = document.querySelector(".xiadaohang");
var gouwulan = document.querySelectorAll(".gouwulan");
      var anyss0 = anyss[0].innerText;
      var anyss1 = anyss[1].innerText;
      var anyss2 = anyss[2].innerText;
      var xuanze0 = xuanze[0].innerText;
      var xuanze1 = xuanze[1].innerText;
      var xuanze2 = xuanze[2].innerText;
      var xuanze3 = xuanze[3].innerText;
        anyss[0].onclick = function(){
            anyss[1].style.borderColor = "black";
            anyss[2].style.borderColor = "black";
            anyss[0].style.borderColor = "blue";
            yanse.innerText = anyss0;
        }
        anyss[1].onclick = function(){
            anyss[0].style.borderColor = "black";
            anyss[2].style.borderColor = "black";
            anyss[1].style.borderColor = "blue";
            yanse.innerText = anyss1;
        }
        anyss[2].onclick = function(){
            anyss[0].style.borderColor = "black";
            anyss[1].style.borderColor = "black";
            anyss[2].style.borderColor = "blue";
            yanse.innerText = anyss2;
        }
        xuanze[0].onclick = function(){
            xuanze[3].style.borderColor = "black";
            xuanze[1].style.borderColor = "black";
            xuanze[2].style.borderColor = "black";
            xuanze[0].style.borderColor = "blue";
            neicun.innerText = xuanze0;
        }
        xuanze[1].onclick = function(){
          xuanze[3].style.borderColor = "black";
          xuanze[0].style.borderColor = "black";
          xuanze[2].style.borderColor = "black";
          xuanze[1].style.borderColor = "blue";
          neicun.innerText = xuanze1;
        }
        xuanze[2].onclick = function(){
          xuanze[3].style.borderColor = "black";
          xuanze[0].style.borderColor = "black";
          xuanze[1].style.borderColor = "black";
          xuanze[2].style.borderColor = "blue";
          neicun.innerText = xuanze2;
        }
        xuanze[3].onclick = function(){
          xuanze[1].style.borderColor = "black";
          xuanze[0].style.borderColor = "black";
          xuanze[2].style.borderColor = "black";
          xuanze[3].style.borderColor = "blue";
          neicun.innerText = xuanze3;
        }
        shouhou[0].onclick = function(){
          shouhou[0].style.borderColor = "blue";
          gouwulan[1].style.display = "block";
          
        }
        shouhou[1].onclick = function(){
          shouhou[1].style.borderColor = "blue";
          gouwulan[1].style.display = "block";
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

