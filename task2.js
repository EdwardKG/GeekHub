function amountToFillAllPots(arrList, len) {
	let res = 0;

	for (let i = 1; i < len - 1; i++) {
		let left = arrList[i];

		for (let j = 0; j < i; j++) {
			left = Math.max(left, arrList[j]);
		}
		
		let right = arrList[i];
		
		for (let j = i + 1; j < len; j++) {
			right = Math.max(right, arrList[j]);
		}

		res += Math.min(left, right) - arrList[i];
	}

	return res;
}

let arrList1 = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6];
let len = arrList1.length;
document.writeln(amountToFillAllPots(arrList1, len));

let arrList2 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
len = arrList2.length;
document.writeln(amountToFillAllPots(arrList2, len));

let arrList3 = [7, 0, 1, 3, 4, 1, 2, 1];
len = arrList3.length;
document.writeln(amountToFillAllPots(arrList3, len));

let arrList4 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
len = arrList4.length;
document.writeln(amountToFillAllPots(arrList4, len));

let arrList5 = [2, 2, 1, 2, 2, 3, 0, 1, 2];
len = arrList5.length;
document.writeln(amountToFillAllPots(arrList5, len));

let arrList6 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8];
len = arrList6.length;
document.writeln(amountToFillAllPots(arrList6, len));

let arrList7 = [2, 2, 2, 2, 2];
len = arrList7.length;
document.writeln(amountToFillAllPots(arrList7, len));