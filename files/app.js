$(document).ready(function () {

		$('.calendar_slides').slick({
		dots: false,
		arrows:true,
		infinite: false,
		speed: 300,
		slidesToShow: 9,
		slidesToScroll: 1

	})
});

//Delaem normalno navigation, prilipaet k Top - RK.
var fixmeTop = $('.main_container > .container > nav').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
        $('.main_container > .container > nav').css({
            position: 'fixed',
            top: '32px',
        });
    } else {
        $('.main_container > .container > nav').css({
            position: 'absolute',
						top: '16px',
        });
    }

	});
