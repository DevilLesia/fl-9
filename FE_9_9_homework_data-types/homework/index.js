function type(data) {
	return typeof data;
}

function forEach(array, functionAsArguments) {
	for (let i = 0; i < array.length; i++) {
		functionAsArguments(array[i]);
	}
}

function getTransformedArray(array, getTrasfotmedElement) {
	let newArray = [];
	forEach(array, function(el) {
		newArray.push(getTrasfotmedElement(el));
	});
	return newArray;
}

function getFilteredArray(array, predicateFunc) {
	let newFilteredArray = [];
	forEach(array, function (el) {
		if (predicateFunc(el)) {
			newFilteredArray.push(el);
		}
	});
	return newFilteredArray;
}

function getAdultAppleLovers(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].age > 18 && data[i].favoriteFruit === `apple`) {
            arr.push(data[i].name);
        }
    }
    return console.log(arr);
}

function keysObject(keys) {
    let arr = [];
    for (let obj in keys) {
        if (keys.hasOwnProperty(obj)) {
            arr.push(obj);
        }
    }
    return console.log(arr)
}

function valuesObject(values) {
    let arr = []
    for (let obj in values) {
        if (values.hasOwnProperty(obj)) {
            arr.push(values[obj]);
        }
    }
    return console.log(arr);
}

function showFormattedDate(date) {
    date = new Date();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return console.log(`It is ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`);
}