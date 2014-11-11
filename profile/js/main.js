// Gumby is ready to go
Gumby.ready(function() {
	console.log('Houston we are online...', Gumby.debug());


Gumby.initialize('fittext');

	// placeholder polyfil
	if(Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
		$('input, textarea').placeholder();
	}
});

// Oldie document loaded
Gumby.oldie(function() {
	console.log("This is an oldie browser...");
});

Gumby.touch(function() {
	console.log("This is a touch enabled device...");
});




$(document).ready(function() {


/* sticky header
=========================*/
$("#navbar").sticky({topSpacing:0});


/* parallax background
=========================*/
$.stellar({
horizontalScrolling: false,
verticalOffset: -40		
});


/* easing scroll
=========================*/

if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

var time = 750;
var distance = 250;

function wheel(event) {
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle();
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle() {

    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time);
}


$(document).keydown(function (e) {

    switch (e.which) {
        //up
        case 38:
            $('html, body').stop().animate({
                scrollTop: $(window).scrollTop() - distance
            }, time);
            break;

            //down
        case 40:
            $('html, body').stop().animate({
                scrollTop: $(window).scrollTop() + distance
            }, time);
            break;
    }
});

/* flexslider
=========================*/

$('.flexslider').flexslider({
                        animationLoop: true,
                        pauseOnAction: true,
                        pauseOnHover: true,
                        smoothHeight: false,
                        directionNav: false,
                        controlNav: true,
                        animation: "slide"
                    });



});