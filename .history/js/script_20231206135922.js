// Preloader js    
$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

(function ($) {
	'use strict';

	// navbarDropdown
	if ($(window).width() < 992) {
		$('.navigation .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
	}

	// product Slider
	$('.product-image-slider').slick({
		autoplay: false,
		infinite: true,
		arrows: false,
		dots: true,
		customPaging: function (slider, i) {
			var image = $(slider.$slides[i]).data('image');
			return '<img class="img-fluid" src="' + image + '" alt="product-image">';
		}
	});

	// Product slider
	$('.product-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: false,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

})(jQuery);

AOS.init();

const navbarCloseBtn = document.querySelector('.navbar-collapse .close-btn');
const navbarCollapse = document.querySelector('.navbar-collapse');

const navbarToggler = document.querySelector('.navbar-toggler-icon');

navbarToggler.addEventListener('click', () => {
	navbarToggler.classList.toggle('changeImage');

	let imageURL = 'images/icons/'; // Replace with the path to your image

            // Update the background image property
            element.style.backgroundImage = 'url(' + imageURL + ')';
}

)

navbarCloseBtn.addEventListener('click', () => {
		navbarCollapse.classList.toggle('show');
	})