var caroucel = $('#caroucel');
var next = $('#btn-next');
var prev = $('#btn-prev');


$('#caroucel .caroucel-section:last').insertBefore('#caroucel .caroucel-section:first');
caroucel.css('margin-left', '-'+100+'%');

function moveRight() {
	caroucel.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('#caroucel .caroucel-section:first').insertAfter('#caroucel .caroucel-section:last');
		caroucel.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	caroucel.animate({
		marginLeft:0
	} ,700, function(){
		$('#caroucel .caroucel-section:last').insertBefore('#caroucel .caroucel-section:first');
		caroucel.css('margin-left', '-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function(){
		moveRight();
	}, 5000);
}
next.on('click',function() {
	moveRight();
	clearInterval(interval);
	autoplay();
});

prev.on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});


autoplay();