const slides = document.querySelectorAll('.offer__slide'),
	slider = document.querySelector('.offer__slider'),
	prev = document.querySelector('.offer__slider-prev'),
	next = document.querySelector('.offer__slider-next'),
	total = document.querySelector('#total'),
	current = document.querySelector('#current'),
	slidesWrapper = document.querySelector('.offer__slider-wrapper'),
	slidesField = document.querySelector('.offer__slider-inner'),
	width = window.getComputedStyle(slidesWrapper).width;

let slideIndex = 1;
let offset = 0;
let isDown = false;
let startX;
let scrollLeft;
let transform = 0;
let lastPageX = 0;
let transformValue = 0


if (slides.length < 10) {
	total.textContent = `0${slides.length}`;
	current.textContent = `0${slideIndex}`;
} else {
	total.textContent = slides.length;
	current.textContent = slideIndex;
}


slidesField.style.width = 100 * slides.length + '%';
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';

slidesWrapper.style.overflow = 'hidden';

slides.forEach(slide => {
	slide.style.width = width;
});

slider.style.position = 'relative';

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

for (let i = 0; i < slides.length; i++) {
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


next.addEventListener('click', () => {
	if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
		offset = 0;
	} else {
		offset += +width.slice(0, width.length - 2);
	}

	slidesField.style.transform = `translateX(-${offset}px)`;

	if (slideIndex == slides.length) {
		slideIndex = 1;
	} else {
		slideIndex++;
	}

	if (slides.length < 10) {
		current.textContent = `0${slideIndex}`;
	} else {
		current.textContent = slideIndex;
	}

	dots.forEach(dot => dot.style.opacity = '.5');
	dots[slideIndex - 1].style.opacity = 1;
});



prev.addEventListener('click', () => {
	if (offset == 0) {
		offset = +width.slice(0, width.length - 2) * (slides.length - 1);
	} else {
		offset -= +width.slice(0, width.length - 2);
	}

	slidesField.style.transform = `translateX(-${offset}px)`;

	if (slideIndex == 1) {
		slideIndex = slides.length;
	} else {
		slideIndex--;
	}

	if (slides.length < 10) {
		current.textContent = `0${slideIndex}`;
	} else {
		current.textContent = slideIndex;
	}

	dots.forEach(dot => dot.style.opacity = '.5');
	dots[slideIndex - 1].style.opacity = 1;
});



slidesWrapper.addEventListener('mousedown', (e) => {
	isDown = true;
	slidesWrapper.classList.add('active');
	mouseLastPosition = e.pageX;
	transform = window.getComputedStyle(slidesField)
		.getPropertyValue('transform') != 'none'
		? window.getComputedStyle(slidesField)
			.getPropertyValue('transform').split(',')[4].trim()
		: 0;
	/*startX = e.pageX - slidesWrapper.offsetLeft;
	scrollLeft = slidesWrapper.scrollLeft;*/
});


slidesWrapper.addEventListener('mouseup', () => {
	isDown = false;
	slidesWrapper.classList.remove('active');
});

slidesWrapper.addEventListener('mouseleave', () => {
	isDown = false;
});

slidesWrapper.addEventListener('mousemove', (e) => {
	e.preventDefault();
	if (isDown) {
		const diffX = e.pageX - mouseLastPosition;

		if (e.pageX - lastPageX > 0) {
			if (transformValue > 0) {
				return;
			} else if (Math.abs(transformValue) > slidesWrapper.offsetWidth - 320) {
				return;
			}
		}

		transformValue = parseInt(transform) + diffX;
		slidesField.style.transform = `translateX(${transformValue}px)`;
	}
	lastPageX = e.pageX;

	/*if (!isDown) { return; }
	e.preventDefault();
	const x = e.pageX - slidesWrapper.offsetLeft;
	const walk = x - startX;
	slidesWrapper.scrollLeft = scrollLeft - walk;
	console.log(walk);*/
	/*if (walk <= 500) {
		if (offset == 0) {
			offset = +width.slice(0, width.length - 2) * (slides.length - 1);
		} else {
			offset -= +width.slice(0, width.length - 2);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}

		dots.forEach(dot => dot.style.opacity = '.5');
		dots[slideIndex - 1].style.opacity = 1;
	}
	if (walk > 500) {
		if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += +width.slice(0, width.length - 2);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}

		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}

		dots.forEach(dot => dot.style.opacity = '.5');
		dots[slideIndex - 1].style.opacity = 1;
	}*/
});





dots.forEach(dot => {
	dot.addEventListener('click', (e) => {
		const slideTo = e.target.getAttribute('data-slide-to');

		slideIndex = slideTo;
		offset = +width.slice(0, width.length - 2) * (slideTo - 1);

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}

		dots.forEach(dot => dot.style.opacity = '.5');
		dots[slideIndex - 1].style.opacity = 1;
	});
})



