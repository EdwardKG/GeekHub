let arrList1 = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1];
let arrList2 = [-1, -8, -2];
let arrList3 = [1, 7, 3];
let arrList4 = [1, undefined, 3, 5, -3];
let arrList5 = [1, NaN, 3, 5, -3];

function findMaximum(arrList) {
	let maxValue = arrList[0];
	for (let i = 1; i < arrList.length; i++) {
		if (maxValue < arrList[i]) {
			maxValue = arrList[i];
		}
	}
	return maxValue;
}



function findMinimum(arrList) {
	let minValue = arrList[0];
	for (let i = 1; i < arrList.length; i++) {
		if (minValue > arrList[i]) {
			minValue = arrList[i];
		}
	}
	return minValue;
}

alert(findMaximum(arrList1));
alert(findMinimum(arrList1));

alert(findMaximum(arrList2));
alert(findMinimum(arrList2));

alert(findMaximum(arrList3));
alert(findMinimum(arrList3));

alert(findMaximum(arrList4));
alert(findMinimum(arrList4));

alert(findMaximum(arrList5));
alert(findMinimum(arrList5));