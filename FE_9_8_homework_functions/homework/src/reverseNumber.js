function reverseNumber(n) {
	let start = 1;
	let finish = -1;
	let sign = start;
	if (n < 0) {
		sign = finish;
		n = n * sign;
	}
	n = n + '';
	return sign * n.split('').reverse().join('');
}