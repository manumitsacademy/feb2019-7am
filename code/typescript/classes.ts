class Student{
    firstname:string;
    lastname:string;
    age:number;
    gender:boolean;
    constructor(fn,ln){
        console.log("Student Constructor Called");
        this.firstname = fn;
        this.lastname = ln;
    }
    getFullName(){
        return this.firstname+this.lastname;
    }
}

var s1 = new Student('srikanth','gubbala');
console.log(s1.getFullName());

var s2 = new Student("praveen","gubbala");
console.log(s2.getFullName());