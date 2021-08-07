//JSON Object
var jSON = '{"firstName":"Omkar", "lastName":"Bhosale"}';
var obj = JSON.parse(jSON);

console.log(obj.firstName+" "+obj.lastName);

//JavaScript Object

var jsObj = {
    firstName: "Omkar",
    lastName: "Bhosale",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(jsObj.getFullName());