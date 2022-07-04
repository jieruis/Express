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