window.onload = function() {
	const sticky = $('.nav-line');
	const height = sticky.offset().top;
	sticky.attr('data-offset-top', height);
}

window.resize = function() {
	const sticky = $('.nav-line');
	const height = sticky.offset().top;
	sticky.attr('data-offset-top', height);
}