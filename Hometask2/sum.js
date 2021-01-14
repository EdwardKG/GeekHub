function sum(val) {
	let currentSum = val;
	function func(temp) {
		currentSum += temp;
		return func;
	}

	func.toString = function () {
		return currentSum; 
	};
	return func;
}

alert(sum(1)(2)(3));