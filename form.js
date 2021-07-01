//form js
$( document ).ready(function() {
    $('.cta-open').on('click', function() {
      $('.toggle-form, .formwrap, .toggle-bg').addClass('active');
      $('.icon-close').addClass('open');
  });
   $('.icon-close').on('click', function() {
      $('.toggle-form, .formwrap, .toggle-bg').removeClass('active');
      $('.icon-close').removeClass('open');
  });
});
//hamburger js
var menuButton = document.querySelector('#menu-button');
var menu = document.querySelector('#menu');

// show or hide
menuButton.addEventListener('click',function(){
  menu.classList.toggle('show-menu');
  menuButton.classList.toggle('close');
});
