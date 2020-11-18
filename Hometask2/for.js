const funcFor = function (index = 0, element) {
	if (index !== element) {
		document.writeln(index);
		index++;
		return funcFor(index, element);
	}
}
funcFor(0, 10);