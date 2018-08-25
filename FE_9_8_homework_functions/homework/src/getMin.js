function getMin() {
    let minElement = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < minElement ) {
        minElement = arguments[i];
        }
    }

    return minElement ;
}