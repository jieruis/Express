window.onload=function(){
  var Lis=document.querySelectorAll(".navbar-words>li");
  Lis[0].onclick=function(){
    window.location.href="shop.html";
  }
  Lis[1].onclick=function(){
    window.location.href="r2.html";
  }
  Lis[2].onclick=function(){
    window.location.href="smartisan.html";
  }

  var colorsBtns=document.querySelectorAll(".colors-btn>li");
  colorsBtns[0].onclick=function(){
  document.querySelector(".bg img:nth-child(1)").src="./images/jisu1-1.jpg"
  }
  colorsBtns[1].onclick=function(){
    document.querySelector(".bg img:nth-child(1)").src="./images/jisu1-2.jpg"
  }
  colorsBtns[2].onclick=function(){
    document.querySelector(".bg img:nth-child(1)").src="./images/jisu1-3.jpg"
  }

  var lis=document.querySelectorAll(".gongneng>li");
    var x=5;
    console.log(lis);
    for(var i=0;i<lis.length;i++){
      lis[i].index=i;
      lis[i].onclick=function(){
      lis[x].className="";
      this.classList.add("active");
      x=this.index;
      }
    }
    lis[0].onclick=function(){
      window.location.href="r2.html"
    }
    lis[5].onclick=function(){
      window.location.href="jisu.html"
    }
     
    window.onresize=function(){
      var rectObject=document.getElementsByClassName("gongneng")[0].getBoundingClientRect();
      document.getElementsByClassName("colors-btn")[0].style.left="rectObject.left";
     
    }
    
}