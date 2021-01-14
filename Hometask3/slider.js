const slider = document.querySelector('.carousel-container')

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const width = window.getComputedStyle(carouselSlide).width;

const prevBtn = document.querySelector('.offer__slider-prev');
const nextBtn = document.querySelector('.offer__slider-next');

let counter = 1;
let offset = 0;
let lastPageX = 0;
let transformValue = 0;
let transform = 0;
let isDown = false;
const size = carouselImages[0].clientWidth;

//Dots

const indicators = document.createElement('ol'),
	dots = [];

indicators.classList.add('carousel-indicators');
indicators.style.cssText = `position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 15;
	display: flex;
	justify-content: center;
	margin-right: 15%;
	margin-left: 15%;
	list-style: none;`

slider.append(indicators);

for (let i = 0; i < carouselImages.length; i++) {
	const dot = document.createElement('li');
	dot.setAttribute('data-slide-to', i + 1);
	dot.style.cssText = `box-sizing: content-box;
		flex: 0 1 auto;
		width: 30px;
		height: 6px;
		margin-right: 3px;
		margin-left: 3px;
		cursor: pointer;
		background-color: #fff;
		background-clip: padding-box;
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
		opacity: .5;
		transition: opacity .6s ease;`;

	if (i == 0) {
		dot.style.opacity = 1;
	}
	indicators.append(dot);
	dots.push(dot);
}

// End Dots

//Buttons
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
	if (counter >= carouselImages.length - 1) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	dots.forEach(dot => dot.style.opacity = '.5');
	dots[counter - 1].style.opacity = 1;
});

prevBtn.addEventListener('click', () => {
	if (counter <= 0) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	dots.forEach(dot => dot.style.opacity = '.5');
	dots[counter - 1].style.opacity = 1;
});

carouselSlide.addEventListener('transitionend', () => {
	if (carouselImages[counter].id === 'lastClone') {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - 2;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	if (carouselImages[counter].id === 'firstClone') {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - counter;
		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
});

//End of Buttons

// Drag mouse
carouselSlide.addEventListener('mousedown', (e) => {
	isDown = true;
	carouselSlide.classList.add('active');
	mouseLastPosition = e.pageX;
	transform = window.getComputedStyle(carouselSlide)
		.getPropertyValue('transform') != 'none'
		? window.getComputedStyle(carouselSlide)
			.getPropertyValue('transform').split(',')[4].trim()
		: 0;
});

carouselSlide.addEventListener('mouseup', () => {
	isDown = false;
	carouselSlide.classList.remove('active');
	console.log(counter);
});

carouselSlide.addEventListener('mouseleave', () => {
	isDown = false;
});

carouselSlide.addEventListener('mousemove', (e) => {
	e.preventDefault();
	if (isDown) {
		const diffX = e.pageX - mouseLastPosition;
		if (counter >= carouselImages.length - 1) return;
		if (counter <= 0) return;
		if (e.pageX - lastPageX > 0) {
			if (transformValue > 0) {
				return;
			} else if (Math.abs(transformValue) > carouselImages.offsetWidth) {
				return;
			}
		}

		/*if (diffX > 0) {
			if (counter <= 0) return;
			carouselSlide.style.transition = "transform 0.4s ease-in-out";
			counter++;
			carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

		}
		if (diffX < 0) {
			if (counter >= carouselImages.length - 1) return;
			carouselSlide.style.transition = "transform 0.4s ease-in-out";
			counter--;
			carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
		}*/
		transformValue = parseInt(transform) + diffX;
		carouselSlide.style.transform = 'translateX(' + transformValue + 'px)';
	}

});

// End of dragging

//Swipe



//End fo swiping



//Dots for
dots.forEach(dot => {
	dot.addEventListener('click', (e) => {
		const slideTo = e.target.getAttribute('data-slide-to');

		counter = slideTo;
		carouselSlide.style.transform = +width.slice(0, width.length - 2) * (slideTo - 1);

		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

		dots.forEach(dot => dot.style.opacity = '.5');
		dots[counter - 1].style.opacity = 1;
	});
});

//End of dots for