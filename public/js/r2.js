var nowPic=1;
  function MouseWheel(e){
    var pic;
    e=e||window.event;
    for(i=1;i<34;i++){
      if(i==nowPic){
          if(e.wheelDelta){//IE
              pic=document.getElementById("pic"+i);
              console.log(pic);
              pic.style.display="block";

            }else if(e.detail){//Firefox
              pic=document.getElementById("pic"+i);
              pic.style.display="block";
            }
        }else{
          pic=document.getElementById("pic"+i);
          pic.style.display="none";
        }
      }
      if(nowPic>=33){
        nowPic=1;
      }else{
        nowPic++;
      }
      
      if(nowPic==1){
        var lis=document.querySelectorAll(".gongneng>li");
        for(var i=0;i<lis.length;i++){
          lis[4].className="";
          lis[0].classList.add("active");
        }
      }else if(nowPic==2){
        var lis=document.querySelectorAll(".gongneng>li");
        for(var i=0;i<lis.length;i++){
          lis[0].className="";
          lis[1].classList.add("active");
        }
      }else if(nowPic==10){
        var lis=document.querySelectorAll(".gongneng>li");
        for(var i=0;i<lis.length;i++){
          lis[1].className="";
          lis[2].classList.add("active");
        }
      }else if(nowPic==17){
        var lis=document.querySelectorAll(".gongneng>li");
        for(var i=0;i<lis.length;i++){
          lis[2].className="";
          lis[3].classList.add("active");
        }
      }else if(nowPic==27){
        var lis=document.querySelectorAll(".gongneng>li");
        for(var i=0;i<lis.length;i++){
          lis[3].className="";
          lis[4].classList.add("active");
        }
      }

      if(nowPic==2 ||nowPic==4 ||nowPic==6 ||nowPic==8 ||nowPic==10
        ||nowPic==13 ||nowPic==15 ||nowPic==17 ||nowPic==19 ||nowPic==21
        ||nowPic==22 ||nowPic==24 ||nowPic==26 ||nowPic==28 ||nowPic==30){
        var divodd= document.querySelectorAll("nav>div>div:nth-child(odd):not(:last-child)");
        for(var i=0;i<divodd.length;i++){
        console.log(8888);
        divodd[i].style.backgroundColor="#ccc";
        }
       }
       if(nowPic==3 ||nowPic==5 ||nowPic==7 ||nowPic==9 ||nowPic==11 
        ||nowPic==12 ||nowPic==14 ||nowPic==16 ||nowPic==18 ||nowPic==20
        
        ||nowPic==23 ||nowPic==25 ||nowPic==27 ||nowPic==29 ||nowPic==31
        ||nowPic==33){
        var divodd= document.querySelectorAll("nav>div>div:nth-child(odd):not(:last-child)");
        for(var i=0;i<divodd.length;i++){
        console.log(8888);
        divodd[i].style.backgroundColor="";
        }
       }
      

    }

  /*Firefox注册事件*/
  if(document.addEventListener){
      document.addEventListener("DOMMouseScroll",MouseWheel,false);
    }
  window.onmousewheel=document.onmousewheel=MouseWheel;//IE/Opera/Chrome
  //第1张图概览 第2-9设计 10-16功能  17-26相机 27-33操作系统

  window.onload=function(){
    var Lis=document.querySelectorAll(".navbar-words>li");
    for(var j=0;j<Lis.length;j++){
      Lis[j].onclick=function(){

      }
    }
    Lis[0].onclick=function(){
      window.location.href="shop.html";
    }
    Lis[1].onclick=function(){
      window.location.href="r2.html";
    }
    Lis[2].onclick=function(){
      window.location.href="smartisan.html";
    }

    var lis=document.querySelectorAll(".gongneng>li");
    var x=0;
    for(var i=0;i<lis.length;i++){
      lis[i].index=i;
      lis[i].onclick=function(){
      lis[x].className="";
      this.classList.add("active");
      x=this.index;
      }
    }
    lis[5].onclick=function(){
      window.location.href="jisu.html"
    }


    
  }