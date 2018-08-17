 let c, p, S, P, result;
let a = parseFloat(prompt('Enter a ', ''));
let b = parseFloat(prompt('Enter b ', ''));
let alfa = prompt('Enter alfa ', '');
const degree = 180;

function triangle_parameters() {
	if (a < 0 || isNaN(a) || b < 0 || isNaN(b) || isNaN(alfa)) {
		result = 'Invalid data';
	} else {
		alfa = Math.PI / degree * parseFloat(alfa);
		c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(alfa));
		P = a + b + c;
		p = (a + b + c) / 2;
		S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
		S = S.toFixed(2);
		P = P.toFixed(2);
		c = c.toFixed(2);
		result = 'c length: ' + c + '\n' + 'Triangle square: ' + S + '\n' + 'Triangle perimeter: ' + P;
	}
}
triangle_parameters();
console.log(result);