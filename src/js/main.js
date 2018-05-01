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
// $('#btn1').click(function(e){
//   console.log(e.currentTarget.id);
// });

// $(document).on('mousemove', function(e){
//   $('#coords').html('Coords:Y: ' +e.clientY + " X " + e.clientX);
// });

// $('select').change(function(){
//   alert('changed');

// });

// $('#form').submit(function(e){
//   e.preventDefault();
//   console.log('submmited');

//   var name = $('input#name').data();
//   console.log(name);

// });

// $('#btn2').data()

// $('#btn2').on('click', function(){
//   $('.goner').show();
// });

//jquery ui menu

//Creating tab

//grab the correct tab

$('.tab-panels .tabs li').on('click', function() {
	$('.tab-panels .tabs li.active').removeClass('active');
	$(this).addClass('active');

	var panelSelected = $(this).attr('rel');

	//hide that tab
	$('.tab-panels .panel.active').slideUp(300, showNextPanel);

	function showNextPanel() {
		$(this).removeClass('active');

		$('#' + panelSelected).slideDown(300, function() {
			$(this).addClass('active');
		});
	}
});
