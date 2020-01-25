$(function(){

$(window).on('load', function(){
   $('.questions__list-item').find('.questions__list-title').next().slideToggle(400);
})
   
$('.questions__list-item').on('click', function(e){
   e.preventDefault();

   if ($(this).find('.questions__list-title').next().hasClass('show')) {
      $(this).find('.questions__list-title').next().removeClass('show');
      $(this).find('.questions__list-title').parent().removeClass('show');
      $(this).find('.questions__list-title').next().slideUp(400);
   }  else {
      $(this).find('.questions__list-title').parent().parent().find('li .questions__inner-text').removeClass('show');
      $(this).find('.questions__list-title').parent().parent().find('li .questions__inner-text').slideUp(350);
      $(this).parent().find('.questions__list-item').removeClass('show');
      $(this).find('.questions__list-title').next().toggleClass('show');
      $(this).find('.questions__list-title').parent().toggleClass('show');
      $(this).find('.questions__list-title').next().slideToggle(400);
  }
})

$('.burger').on('click', function(){
   $(this).toggleClass('active');
   $('.header__menu').toggleClass('active');
   $('.header__menu').toggleClass('hide');
})


})