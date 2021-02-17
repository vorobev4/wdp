//header menu
$('.mobile-nav').hide();
$('.header_menu').on('click', function() {
    $('.mobile-nav').slideToggle(600);
});
$('.mobile-nav a').on('click', function() {
    $('.mobile-nav').slideToggle(600);
})
// team block slider
$(document).ready(function () {
    let btn_first = $('.slider_control #first');
    let btn_second = $('.slider_control #second');
    let btn_third = $('.slider_control #third');

    let number = 0;

    let slider = $('.slider_wrapper');
    // let width = $('.team_slider').css('width');

    $(btn_first).on('click', function () {
        // console.log(width);
        if (number == 1) {
            slider.animate({left: '+=903', }, 1000, function() {});
            number = 0;
        }
        if (number == 2) {
            slider.animate({left: '+=1806', }, 1000, function() {});
            number = 0;
        }
    });
    $(btn_second).on('click', function () {
        // console.log(width);
        if (number == 0) {
            slider.animate({left: '-=903', }, 1000, function() {});
            number = 1;
        }
        if (number == 2) {
            slider.animate({left: '+=903', }, 1000, function() {});
            number = 1;
        }
    });
    $(btn_third).on('click', function () {
        // console.log(width);
        if (number == 0) {
            slider.animate({left: '-=1806', }, 1000, function() {});
            number = 2;
        }
        if (number == 1) {
            slider.animate({left: '-=903', }, 1000, function() {});
            number = 2;
        }
    });
});