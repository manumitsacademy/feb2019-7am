var x;
var carColor, carColor2;
carColor = 'red';
carColor2 = 'black';
var empType;
(function (empType) {
    empType[empType["manager"] = 1223] = "manager";
    empType[empType["techlead"] = 1224] = "techlead";
    empType[empType["sr.developer"] = 1225] = "sr.developer";
    empType[empType["developer"] = 1226] = "developer";
    empType[empType["trainee"] = 1227] = "trainee";
})(empType || (empType = {}));
var newEmp;
newEmp = empType.manager;
console.log(newEmp);
console.log("Hello World");
