let burger = document.querySelector('.menu_burger__open')
let menuBurger = document.querySelector('.menu_burger')
let btmClose = document.querySelector('.menu_burger__close')

burger.addEventListener('click', function(){
  menuBurger.classList.add('menu_burger__open')
  burger.classList.add('buttom_open')
  btmClose.classList.add('buttom_close')
});

btmClose.addEventListener('click', function(){
  menuBurger.classList.remove('menu_burger__open')
  burger.classList.remove('buttom_open')
  btmClose.classList.remove('buttom_close')
});
