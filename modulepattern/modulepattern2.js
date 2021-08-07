var service = function(){
    var obj = {};
    console.log("service called");

    obj.doSomething1 = function(){
        console.log("do Something 1");
    }
    obj.doSomething2 = function(){
        console.log("do Something 2")
    }
    obj.doSomething3 = function(){
        console.log("do Something 3");
    }

    return obj;
}();

service.doSomething1();
service.doSomething2();
service.doSomething3();