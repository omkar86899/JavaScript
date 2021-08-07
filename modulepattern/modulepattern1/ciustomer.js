function makeCustomer(){
    var customer = {};
    var _id,_name;

    customer.setId = function(id){
        _id = id;
    }
    customer.setName = function(name){
        _name = name;
    }
    customer.getDetails = function(){
        return "customer name is "+_name+" id is "+_id;
    }

    return customer;
}

var c1 = makeCustomer();
c1.setId(10);
c1.setName("omkar");
console.log(c1.getDetails());
console.log(c1);
console.log({c1});