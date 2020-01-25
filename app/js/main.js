$(function(){

let checkScroll = 0;

$(window).on('scroll', function(e){
   e.preventDefault();

   var windowScroll = $('html').scrollTop();
   if (50 < windowScroll && windowScroll < checkScroll) {
      $('.header__top').addClass('active');
      $('.header__top').removeClass('hide');
   }
   else {
      $('.header__top').removeClass('active');
      $('.header__top').addClass('hide');
   }

   checkScroll = windowScroll;

})

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



const keyAPI = "796c3ec25a512c89f67d10c3307c30e0";

let date = $('.weather__date');
let city = $('.weather__city');
let type = $('.weather__type');
let speed = $('.weather__speed');
let miles = $('.weather__miles');
let wind = $('.weather__wind');
let icon1 = $('.weather__report-img');
let icon2 = $('.weather__temp-img');
let temp = $('.weather__temp-cels');

if('geolocation' in navigator){
   navigator.geolocation.getCurrentPosition(setPosition, showError);
} 
else {
   city.html("Don't have an access to ur's current geolocation -_-");
}

function setPosition(position){
   let latitude = position.coords.latitude;
   let longitude = position.coords.longitude;

   getWeather(latitude, longitude);
}

function showError(error){
   city.html(error.message);
}

function getWeather(latitude, longitude){
   const api = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${keyAPI}`

   

   fetch(api)
         .then(function(response){
            let data = response.json();
            console.log(api);
            console.log(data)
            return data;
         })
         .then(function(data){
            city.html(`${data.city.name}, ${data.city.country}`);
            let tempC = Math.floor(data.list[0].main.temp - 272);
            temp.html(tempC +  "°");
            type.html(data.list[0].weather[0].main);
            wind.html(Math.floor(data.list[0].wind.speed) + "<span>m/s</span>")
            let milesCalculate = Math.floor(data.list[0].wind.speed * 2.23);
            miles.html(milesCalculate + "<span>mph</span>");
            let speedCalculate = Math.floor(data.list[0].wind.speed * 3.6);
            speed.html(speedCalculate + "<span>km/h</span>");
            icon1.attr("src", 'images/icons/' + data.list[0].weather[0].icon + '.png');
            icon2.attr("src", 'images/icons/' + data.list[0].weather[0].icon + '.png');
            let getDate = new Date();
            let month = '';
            switch(getDate.getMonth()){
               case 0: 
                  month = 'January';
                  break;
               case 1: 
                  month = 'February';
                  break;
               case 1: 
                  month = 'March';
                  break;
               case 1: 
                  month = 'April';
                  break;
               case 1: 
                  month = 'May';
                  break;
               case 1: 
                  month = 'June';
                  break;
               case 1: 
                  month = 'July';
                  break;
               case 1: 
                  month = 'August';
                  break;
               case 1: 
                  month = 'September';
                  break;
               case 1: 
                  month = 'October';
                  break;
               case 1: 
                  month = 'November';
                  break;
               case 1: 
                  month = 'December';
                  break;
            }
            date.html(`${getDate.getDate()} ${month} ${getDate.getFullYear()}`)
         })
}


})