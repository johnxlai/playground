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

$('#shMenu').menu({
	position: {
		my: 'center top',
		at: 'center bottom'
	}
});
