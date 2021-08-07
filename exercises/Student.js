class Student {
    constructor(id, name, location, cgpa) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.cgpa = cgpa;
    }
}

function getCgpaArray(){
    let cgpaArray = [];
    students.forEach(element => {
        cgpaArray.push(element.cgpa);
    });
    return cgpaArray;
}

function sumOfCgpa(){
    let sum = 0;
    getCgpaArray().forEach(element => {
        sum = element+sum;
    });
    return sum;
}

var students = [];
students.push(new Student(11, "omkar", "thane", 8.1));
students.push(new Student(12, "sagar", "mumbai", 7.5));
students.push(new Student(13, "vaibhav", "dadar", 9.1));
students.push(new Student(14, "nikhil", "kalyan", 8.9));
students.push(new Student(15, "sachin", "pune", 6.9));

var max = Math.max(...getCgpaArray());
var min = Math.min(...getCgpaArray());


console.log("maximum cgap= "+max);
console.log("minimum cgpa= "+min);
console.log("sum of the cgpa is: "+sumOfCgpa());
console.log("average of cgpa is: "+sumOfCgpa()/students.length);