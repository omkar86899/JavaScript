(function(){
    function Customer(id,name){
        var _id,_name;

        if(id>0){
            _id = id;
        }

        if(name.length>0){
            _name = name;
        }

        this.setName = function(name){
            if(name.length>0){
                _name = name;
            }
        }

        this.getName = function(){
            return _name
        }

        this.getId = function(){
            return _id;
        }
    }

    var c1 = new Customer(11,"omkar");
    console.log(c1);
    console.log({c1});
    c1.setName("sagar");
    console.log(c1.getName());
    console.log(c1.getId());
})();