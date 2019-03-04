var Student = /** @class */ (function () {
    function Student(fn, ln) {
        console.log("Student Constructor Called");
        this.firstname = fn;
        this.lastname = ln;
    }
    Student.prototype.getFullName = function () {
        return this.firstname + this.lastname;
    };
    return Student;
}());
var s1 = new Student('srikanth', 'gubbala');
console.log(s1.getFullName());
var s2 = new Student("praveen", "gubbala");
console.log(s2.getFullName());
