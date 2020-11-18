class Calculate {
	constructor(val) {
		this.value = val;
	}
	add(tempVal) {
		this.value += tempVal;
		return this;
	}
	multiply(tempVal) {
		this.value *= tempVal;
		return this;
	}
	result() {
		return this.value;
	}
}
let calculation = new Calculate(2);
alert(calculation
	.add(2)
	.multiply(2)
	.result());
