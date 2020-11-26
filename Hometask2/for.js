const funcFor = function (element, callback, index = 0) {
	if (element !== 0 && element > 0) {
		index++;
		if (typeof callback === 'function') {
			callback();
			return funcFor(element -= 1, callback, index);
		}
	}
	if (element < 0) {
		index--;
		if (typeof callback === 'function') {
			callback();
			return funcFor(element += 1, callback, index);
		}
	}
}
console.log(funcFor(0, 10));