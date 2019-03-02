var basicSalary = [12000,14400,15060,31000,40000];

/*var hras = basicSalary.map(function(x){
	var t;
	t = x*0.2;
	return t;
});*/


var hras = basicSalary.map(x=>x*0.2);

console.log(hras);
