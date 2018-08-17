const price = Number(prompt('Enter price ', '0'));
const discount = Number(prompt('Enter discount ', '0'));
let save;
let discount_price;
let result;

function new_price() {
	if (price < 0 || isNaN(price) || discount < 0 || isNaN(discount) || discount > 100){
		result = 'Invalid data';
	} else {
		discount_price = Math.floor(price * discount / 100);
		save = Math.floor(price - discount_price);
		result = ' Price without diacount : ' + price + '\n' + ' Discount : ' + discount + '%' + '\n' +
			' Price with diacount : ' + save + '\n' + ' Saved : ' + discount_price;
	}
}
new_price();
console.log(result);