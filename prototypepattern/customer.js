function Customer(id,name){
    this.id = id;
    this.name = name;
}

Customer.prototype.getDetails = function(){
    return "name of Cutomer is "+this.name+" id of customer: "+this.id;
}

var c1 = new Customer(11,"omkar");
var c2 = new Customer(12,"sachin");


console.log(c1);
console.log(c2);
console.log(c1.getDetails());
console.log(c2.getDetails());

console.log(c1.__proto__==Customer.prototype);
console.log(c1.__proto__);
console.log(c2.__proto__==Customer.prototype);
console.log(c1.__proto__==c2.__proto__);
console.log(Customer.prototype.__proto__==Object.prototype)
console.log(Object.prototype.__proto__);

var obj = {};
console.log(obj.__proto__);