function add(...a){
    var sum=0;
    sum = a.reduce(function(a,b){
        return a+b;
    })
    return sum;
}

console.log(add(11,22,33,44,55,56,77,88,99));
