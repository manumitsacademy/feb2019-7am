function add() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var sum = 0;
    sum = a.reduce(function (a, b) {
        return a + b;
    });
    return sum;
}
console.log(add(11, 22, 33, 44, 55, 56, 77, 88, 99));
