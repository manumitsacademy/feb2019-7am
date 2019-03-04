function add(x, y, z) {
    if (z) {
        return x + y + z;
    }
    else {
        return x + y;
    }
}
console.log(add(10, 20, 30));
console.log(add(12, 23));
