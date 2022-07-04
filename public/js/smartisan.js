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

  var lis=document.querySelectorAll(".gongneng>li");
    var x=0;
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
      window.location.href="smartisan.html"
    }
    lis[1].onclick=function(){
      window.location.href="O2.html"
    }
    lis[2].onclick=function(){
      window.location.href="jisu-O2.html"
    }
}