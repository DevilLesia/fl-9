function getClosestToZero() {
    let number = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        if (Math.abs(arguments[i]) < Math.abs(number)) {
            number = arguments[i];
        }
    }

    return number;
}