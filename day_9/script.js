window.onload = function() {
	if (!document.querySelector('.parallax-wrapper')) {
		$('.gallery-wrapper').isotope({
		  itemSelector: '.gallary-item',
		  layoutMode: 'fitRows'
		});

		$('.show-wear').click(function(){
			$('.gallery-wrapper').isotope({ filter: '.wear' });
		})

		$('.show-other').click(function(){
			$('.gallery-wrapper').isotope({ filter: '.other' });
		})

		$('.show-all').click(function(){
			$('.gallery-wrapper').isotope({ filter: '*' });
		});
	}

	const scene = document.querySelector('.parallax-wrapper');
	const parallax = new Parallax(scene);
}

