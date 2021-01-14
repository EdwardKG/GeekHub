function amountToFillAllPots(arrList) {		//Количество заполненых водой ячеек
	let res = 0;
	let len = arrList.length;
	for (let i = 1; i < len - 1; i++) {				// Поиск Левой и Правой максимальной высоты
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
document.writeln(amountToFillAllPots(arrList1));

let arrList2 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
document.writeln(amountToFillAllPots(arrList2));

let arrList3 = [7, 0, 1, 3, 4, 1, 2, 1];
document.writeln(amountToFillAllPots(arrList3));

let arrList4 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
document.writeln(amountToFillAllPots(arrList4));

let arrList5 = [2, 2, 1, 2, 2, 3, 0, 1, 2];
document.writeln(amountToFillAllPots(arrList5));

let arrList6 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8];
document.writeln(amountToFillAllPots(arrList6));

let arrList7 = [2, 2, 2, 2, 2];
document.writeln(amountToFillAllPots(arrList7));