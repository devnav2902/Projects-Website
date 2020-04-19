document.addEventListener("DOMContentLoaded",function(){
  var menu = document.querySelector('.menutop');
  var status = "true";
  var hamberger_menu = document.querySelector('.hamberger-menu');
  var hidden_menu = document.querySelector('.hidden-menu');
  var overlay = document.querySelector('.overlay');
  var push = document.querySelector('body');
  hamberger_menu.addEventListener("click",function(){
    this.classList.add('transform');
    overlay.classList.add('appear');
    hidden_menu.classList.add('move');
    push.classList.add('pushleft');
  })
  overlay.addEventListener("click",function(){
    this.classList.remove('appear');
    hamberger_menu.classList.remove('transform');
    hidden_menu.classList.remove('move');
    push.classList.remove('pushleft');
  })
  document.addEventListener("scroll",function(){
    if(window.pageYOffset > 150)
    {
      if(status == "true")
      {
        menu.classList.add("fixed");
        status = "false";
      }
    }
    else 
    {
      if(status == "false")
      {
        status = "true";
        menu.classList.remove("fixed");
      }
    }
  })
})