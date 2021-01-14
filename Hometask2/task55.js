const myForEach = (array, callback, currentArray) => {
	if (Array.isArray(array)) {
		for (let i = 0; i < array.length; i++) {
			array[i] = callback(array[i], i, currentArray)

		}
	}
	return array;
}
console.log(myForEach([0, 1, 2], item => item));

const myMap = (array, callback, currentArray) => {
	let newArr = [];
	if (Array.isArray(array)) {
		for (let i = 0; i < array.length; i++) {
			newArr[i] = callback(array[i], i, currentArray)

		}
	}
	return newArr;
}

console.log(myMap([0, 1, 2], item => item));

const myFilter = (currentFunc, arr) => {
	const filteredArr = [];
	let j = 0;
	for (let i = 0; i < arr.length; i++) {
		if (currentFunc(arr[i])) {
			filteredArr[j] = arr[i];
			j++;
		}
	}
return filteredArr;
};

function check(val) {
	let res = val % 2 === 0;
	return res;
}
console.log(myFilter(check, [2, 3, 4]));


const mySort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let currentValue = arr[i];
		let position = i;
		while (position > 0 && arr[position - 1] > currentValue) {
			arr[position] = arr[position - 1];
			position -= 1;
		}
	arr[position] = currentValue;
	}
return arr;
};

console.log(mySort([54, 26, 93, 17, 77, 31, 44, 55, 20]));

const myFind = (currentFunc, arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (currentFunc(arr[i])) {
			return arr[i];
		}
	}
return element;
};

console.log(myFind(check, [2, 3, 4]));  