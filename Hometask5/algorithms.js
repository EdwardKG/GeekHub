function isPrime(num) {
	let sq = Math.sqrt(num);

	if (num <= 1) {
		return false;
	}
	if (num % 2 == 0 && num > 2) {
		return false;
	}

	for (let i = 3; i <= sq; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

/*console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(17));
console.log(isPrime(10000000000000));*/

const factor = (n) => {
	let res = 1;
	if (n >= 0) {
		for (let i = 1; i <= n; i++) {
			res *= i;
		}
		return res;
	} else {
		return false;
	}
}

/*console.log(factor(0));
console.log(factor(1));
console.log(factor(6));*/


const fibonachiNum = (n) => {
	if (n === 0) {
		return 0;
	}
	if (n === 1) {
		return 1;
	}
	return fibonachiNum(n - 2) + fibonachiNum(n - 1);
}

/*console.log(fibonachiNum(0));
console.log(fibonachiNum(1));                
console.log(fibonachiNum(10));    
console.log(fibonachiNum(20));*/

const isSorted = (arr) => {
	let f = 0;
	let i = 1;
	while (i < arr.length) {
		if (arr[i] < arr[i - 1]) {
			f = 1;
		}
		i++;
	}

	if (!f) {
		return true;
	}
	else {
		return false;
	}
}

/*console.log(isSorted([]));
console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([3, 9, -3, 10]));*/

const myReverse = (str) => {
	let text = '';

	for (let i = str.length - 1; i >= 0; i--) {
		text += str[i];
	}
	return text;
}
/*console.log(myReverse(''));
console.log(myReverse('abcdef'));*/

const indexOf = (arr, n) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === n) {
			return i;
		}
	}
	return -1;
}

/*console.log(indexOf([1, 2, 3], 1) );
console.log(indexOf([1, 2, 3], 4) );*/


//\W matches any non-word character	!!!Took this in the Internet
//\W is equivalent to [^A-Za-z0–9_]
const isPalindrom = (val) => {
	let trash = /[\W_]/g;

	let lowVal = val.toLowerCase().replace(trash, '');

	let reverseVal = lowVal.split('').reverse().join('');

	return reverseVal === lowVal;
}

/*console.log(isPalindrom(''));
console.log(isPalindrom('abcdcba'));
console.log(isPalindrom('abcd'));
console.log(isPalindrom('A man a plan a canal Panama'));*/


const missing = (arr) => {
	let newArr = [];
	let minNum = 1;
	let biggestNum = 0;
	let n = arr.length;
	let missed = [];

	if (arr.length === 0) {
		return undefined;
	}

	arr = arr.sort((a, b) => {
		return a - b;
	});

	biggestNum = arr[n - 1];
	for (let i = minNum; i <= biggestNum; i++) {
		newArr.push(i);
	}

	for (let i = 0; i < n; i++) {
		if (newArr[i] !== arr[i]) {
			missed.push(newArr[i]);
			return missed[0];
		}

	}
}

/*console.log(missing([]));
console.log(missing([2, 3, 4]));
console.log(missing([5, 1, 4, 2]));
console.log(missing([1, 2, 3, 4]));*/

const isBalanced = (str) => {
	let rightCount = 0;
	let leftCount = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === "{") {
			leftCount++;
		}
		if ((str[i] === "}") && (leftCount != 0)) {
			rightCount++;
		}
	}
	if (rightCount === leftCount) {
		return true;
	} else {
		return false;
	}
}


/*console.log(isBalanced('}{'));
console.log(isBalanced('{{}'));
console.log(isBalanced('{}{}'));
console.log(isBalanced('foo { bar } }'));
console.log(isBalanced('foo { bar { baz } boo }'));*/