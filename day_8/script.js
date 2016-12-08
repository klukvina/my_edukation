$(document).ready(function(){
	$('.slider-container').click(function() {
		if (animationTimer) {
		clearInterval(animationTimer);
		}
		$(this).toggleClass('active')
		const isChecked = $(this).hasClass('active');
		$(this).children('[type="checkbox"]').prop('checked', isChecked);
	});
	const animationTimer = setInterval(animation, 2000);
});

function animation() {
	$('.slider-container').toggleClass('shadow');
}