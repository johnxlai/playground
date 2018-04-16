console.log('JS load');

$('.bluebox').click(function() {
	$(this).hide(2000);
});

//slide show
var slideShow = ['coby1.png', 'coby2.png', 'coby3.png', 'coby4.png'];

var focusImg = 1;

$('#slider').click(function() {
	var image = slideShow[focusImg];
	focusImg++;

	if (focusImg > 3) {
		focusImg = 0;
	}

	$('#slider').attr('src', '/dist/img/' + image);
});

//jquery ui menu

// $('#shMenu').menu({
// 	position: {
// 		my: 'center top',
// 		at: 'center bottom'
// 	}
// });
//scroll event

// $('#target').scroll(function() {
// 	$('#log').append(`scrolling`);
// });

$(window).on('scroll', function() {
	$('p.scrollEffect')
		.css('background-color', 'green')
		.fadeIn('slow');

	console.log('scroll');
});

$('#up').cycle({
	fx: 'curtainX',
	sync: false,
	delay: -2000
});

// $(window).scroll(function() {
// 	console.log('yeah man');
// });

// var controller = new ScrollMagic.Controller();

// var scene = new ScrollMagic.Scene({ triggerElement: '#trigger' })
// 	.setVelocity('#animate', { opactiy: 0 }, { duration: 400 })
// 	.addIndicators()
// 	.addTo(controller);
