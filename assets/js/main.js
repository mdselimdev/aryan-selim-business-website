

$(document).ready(function () {
	// Owl Carousel Js Write 

	$('.main-slider').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			},
		}
	});

	// Counter JavaScript Style 

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});


	//Testiomonial Javascript Style

	$('.testimonial-main').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		dots: false,
		center: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			},
		}
	});


	// init Isotope
	var $grid = $('.portfolio-items').isotope({
		// options
	});
	// filter items on menu click
	$('.portfolio-menu').on('click', 'li', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({
			filter: filterValue
		});
	});
	// filter items on active li click
	$('.portfolio-menu').on('click', 'li', function () {
		$(this).addClass('active').siblings().removeClass('active')
	});


});

    // Header Sticky Js 

$(window).load(function () {
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 20) {
			$('.main-header').addClass('sticky')
		} else {
			$('.main-header').removeClass('sticky')
		}
	});

	$('.preloader').fadeOut();

})

    // Gallery Magnific popup js 


$(document).ready(function () {
	$('.image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}

	});
});

//   Scroll Top js 


$(document).ready(function () {

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 300) {
			$('#scrollTop').fadeIn()
		} else {
			$('#scrollTop').fadeOut()
		}
	})

	$('#scrollTop').on('click', function () {

		$('html , body').animate({
			scrollTop: 0
		}, 1500)

	})


})

