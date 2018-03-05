$(document).ready(function() {
  $('.hamburger, .nav-item').on('click', function() {
    $('.nav-body').toggleClass('show-nav');
  });
  $('.slack-btn, .popup-modal').on('click', function() {
    $('.popup-modal, .slack-app').fadeToggle();
  });
});
