const formLogo = document.querySelector('.formlogo');
const inputVal = document.querySelector('.inputval');
const name = document.querySelector('.name');
const btnBlock = document.querySelector('.btnblock');
const btnWalk = document.querySelector('.btnwalk');
const btnFeed = document.querySelector('.btnfeed');
const btnWater = document.querySelector('.btnwater');
const btnPet = document.querySelector('.btnpet');
const btnSleep = document.querySelector('.btnsleep');
const btnClean = document.querySelector('.btnclean');


const health = document.querySelector('.health');
const happiness = document.querySelector('.happiness');
const tiredness = document.querySelector('.tiredness');
const hungriness = document.querySelector('.hungriness');
const thirst = document.querySelector('.thirst');
const cleanliness = document.querySelector('.cleanliness');
const day = document.querySelector('.day');



const tamagotchi = {
	name: "",
	health: 10,
	happiness: 10,		//walk - goes +3 and tired +2 or pet it - + 5
	thirst: 0,		//water - goes -4 
	hungriness: 0,	//fed - goes -5	
	tiredness: 0,		//sleep - goes down to 0	(if tiredness = 10 - tamagotchi asleep)
	cleanliness: 10,	//clean - goes up to 10		(if cleanliness < 3 - tamagotchi dirty)
	day: 0		//1 day = 15 seconds
}

function feed() {
	tamagotchi.hungriness -= 5;
	if (tamagotchi.hungriness < 0) {
		tamagotchi.hungriness = 0;
		alert("Tamagotchi don't want to eat more...");
	}
}

function water() {
	tamagotchi.thirst -= 4;
	if (tamagotchi.thirst < 0) {
		tamagotchi.thirst = 0;
		alert("Tamagotchi don't want to drink more...");
	}
}

function walk() {
	tamagotchi.happiness += 3;
	tamagotchi.tiredness += 2;
	tamagotchi.thirst += 3;
	tamagotchi.hungriness += 2;
	if (tamagotchi.happiness > 10) {
		tamagotchi.happiness = 10;
		alert("Tamagotchi is very happy");
	}
	if (tamagotchi.tiredness > 10) {
		tamagotchi.tiredness = 10;
		alert("Tamagotchi is so tired...");
	}
}

function clean() {
	tamagotchi.cleanliness += 4;
	if (tamagotchi.cleanliness > 10) {
		tamagotchi.cleanliness = 10;
		alert("Tamagotchi is clean...");
	}
}

function pet() {
	tamagotchi.happiness += 5;
	if (tamagotchi.happiness > 10) {
		alert("Tamagotchi is very happy...");
		tamagotchi.happiness = 10;
	}
}

function sleep() {
	tamagotchi.tiredness -= 3;
	if (tamagotchi.tiredness <= 0) {
		tamagotchi.tiredness = 0;
		alert("Tamagotchi doesn't want to sleep...");
	}
}

function passTime() {
	tamagotchi.happiness++;
	tamagotchi.cleanliness--;
	tamagotchi.hungriness++;
	tamagotchi.thirst++;

	if (tamagotchi.tiredness > 10) {
		//alert("Tamagotchi is very tired...");
		tamagotchi.tiredness = 10;
		tamagotchi.happiness--;
	} else {
		tamagotchi.tiredness++;
	}

	if (tamagotchi.happiness > 10) {
		tamagotchi.happiness = 10;
	}

	if (tamagotchi.hungriness >= 7) {
		tamagotchi.happiness--;
	}

	if (tamagotchi.hungriness > 10) {
		//alert("Tamagotchi is very hungry...");
		tamagotchi.hungriness = 10;
		tamagotchi.health--;
	}

	if (tamagotchi.thirst >= 7) {
		tamagotchi.happiness--;
	}

	if (tamagotchi.thirst > 10) {
		//alert("Tamagotchi is want to drink...");
		tamagotchi.thirst = 10;
		tamagotchi.health--;
	}


	if (tamagotchi.cleanliness < 3) {
		tamagotchi.happiness--;
	}

	if (tamagotchi.cleanliness < 0) {
		//alert("Tamagotchi is very dirty...");
		tamagotchi.cleanliness = 0;
		tamagotchi.happiness--;
	}

	health.innerHTML = tamagotchi.health;
	happiness.innerHTML = tamagotchi.happiness;
	tiredness.innerHTML = tamagotchi.tiredness;
	hungriness.innerHTML = tamagotchi.hungriness;
	thirst.innerHTML = tamagotchi.thirst;
	cleanliness.innerHTML = tamagotchi.cleanliness;
	day.innerHTML = tamagotchi.day;

	if (tamagotchi.health <= 0 || tamagotchi.happiness <= 0) {
		alert(`Tamagotchi left the chat. It lived: ${tamagotchi.day} days. Press F to pay respect...`);
		window.location.reload();
	}
}

new Promise((resolve, reject) => {
	formLogo.onsubmit = function (e) {
		e.preventDefault();
		if (inputVal.value.length > 2 && inputVal.value.length < 15) {
			let newElem = document.createElement('div');
			newElem.innerHTML = inputVal.value;
			name.appendChild(newElem);
			formLogo.remove(inputVal);
			tamagotchi.name = inputVal.value;
			passTime();
			btnBlock.style.display = 'flex';
			resolve();
		} else {
			reject('Name must contains from 3 to 14 symbpls');
		}
	}
})
	.then(() => {
		btnWalk.addEventListener('click', walk);
		btnFeed.addEventListener('click', feed);
		btnWater.addEventListener('click', water);
		btnPet.addEventListener('click', pet);
		btnSleep.addEventListener('click', sleep);
		btnClean.addEventListener('click', clean); 
		setInterval(function () {
			passTime();
		}, 5000);
		setInterval(function () {
			tamagotchi.day++;
		}, 20000);
	}).catch((err) => {
		alert(err);
		window.location.reload();
	});