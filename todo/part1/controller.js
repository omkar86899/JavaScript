(function () {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    taskInput.addEventListener("keyup",function(event){
        if(event.key=="Enter"){
            var task = taskInput.value;
            task!="" ? renderer(task):0;
        }
    });

    function renderer(task){
        var li = document.createElement("li");
        li.textContent = task;
        taskList.prepend(li);
    }


})();