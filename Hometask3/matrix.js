var matrix = function (R, C, r0, c0) {
	let shift = 1;
	let coloumnLimit = c0 + shift;
	let rowLimit = r0 + shift;
	let i = r0;
	let j = c0;
	let res = [];

	while (res.length < R * C) {
		//если i и j находятся в границах matix и res
		if (i >= 0 && j >= 0 && i < R && j < C) {
			res.push([i, j]);
		}
		// если i и j оба равны их соответствующим пределам до перехода на следующую длину и направление спирали
		if (i == rowLimit && coloumnLimit == j) {
			shift = shift < 0 ? shift - 1 : shift + 1;
			shift *= -1;
			coloumnLimit = coloumnLimit + shift;
			rowLimit = rowLimit + shift;
		}
		// каждое из четырех возможных перемещений по матрице
		if (j < coloumnLimit) {
			j++;
		} else if (i < rowLimit) {
			i++;
		} else if (j > coloumnLimit) {
			j--;
		} else if (i > rowLimit) {
			i--;
		}
	}
	return res;
};

console.log(matrix(1, 4, 0, 0));

console.log(matrix(5, 6, 1, 4));