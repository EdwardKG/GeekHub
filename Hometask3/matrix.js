var matrix = function (R, C, r0, c0) {
	let shift = 1;
	let coloumnLimit = c0 + shift;
	let rowLimit = r0 + shift;
	let i = r0;
	let j = c0;
	let res = [];

	while (res.length < R * C) {
		//if i and j are in the boundaries of matix and res
		if (i >= 0 && j >= 0 && i < R && j < C) {
			res.push([i, j]);
		}
		// if i and j are both equal to their respective limits before going to the next length and direction of the spiral
		if (i == rowLimit && coloumnLimit == j) {
			shift = shift < 0 ? shift - 1 : shift + 1;
			shift *= -1;
			coloumnLimit = coloumnLimit + shift;
			rowLimit = rowLimit + shift;
		}
		// each of the four possible movements in the matrix
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