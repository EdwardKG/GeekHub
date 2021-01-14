const btn = document.querySelectorAll('.btn');
const wrapper = document.querySelector('.wrapper');
const wrapperBtn = document.querySelectorAll('.wrapperforbutton');
const del = document.querySelectorAll('.delete');
const body = document.getElementsByTagName('body')[0];


for(let i = 0; i < wrapperBtn.length; i++){
	let pX = 0;
	let pY = 0;
	pX = ((i + 1) * 100) + 'px';
	pY = ((i + 1) * 100) + 'px';
	wrapperBtn[i].style.left = pX;
	wrapperBtn[i].style.top = pY;
}


for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click', function () {
		 let flag = false;

		del[i].classList.toggle('hide');
	
	  	del[i].addEventListener('click', function () {
			this.parentElement.remove();
		  });

		 btn[i].addEventListener('mouseup', function (e) {
			  flag = false;
		 });
		

		 btn[i].addEventListener('mousedown', function () {
			  flag = true;
		 });


		 del[i].addEventListener('click', function () {
			  this.parentElement.remove();
		 })

		 wrapper.addEventListener('mousemove', function (e) {
			  if (flag && !del[i].classList.contains('hide')) {
				  	if ((e.clientX  - wrapperBtn[i].parentElement.offsetLeft) + 'px' > '325px') {
						del[i].classList.add('pull-left');
					  } else {
						del[i].classList.remove('pull-left');
					  }
					if((e.clientX  - wrapperBtn[i].parentElement.offsetLeft) + 'px' <= '331px' 
					&& (e.clientY - wrapperBtn[i].parentElement.offsetTop) + 'px' <= '478px'){
						 wrapperBtn[i].style.left = (e.clientX - wrapperBtn[i].parentElement.offsetLeft) + 'px';
						 wrapperBtn[i].style.top =(e.clientY - wrapperBtn[i].parentElement.offsetTop) + 'px';
						 console.log(e.clientY - wrapperBtn[i].parentElement.offsetTop);
					}else if ((e.clientY - wrapperBtn[i].parentElement.offsetTop) + 'px' >= '49px' && 
								(e.clientX - wrapperBtn[i].parentElement.offsetLeft) + 'px' <= '331px'){
						  wrapperBtn[i].style.left =(e.clientX - wrapperBtn[i].parentElement.offsetLeft) + 'px';
					}
					else if ((e.clientX - wrapperBtn[i].parentElement.offsetLeft) + 'px' >= '49px' && 
								(e.clientY - wrapperBtn[i].parentElement.offsetTop) + 'px' <= '478px'){
						 wrapperBtn[i].style.top =(e.clientY - wrapperBtn[i].parentElement.offsetTop) + 'px';
					}
			  }
		 })
	})
}

