(function(){
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
        var button = document.createElement("button");
        button.textContent = "x";
        button.addEventListener("click",removeTask);
        li.textContent = task;
        li.appendChild(button);
        taskList.prepend(li);
    }

    function removeTask(e){
        taskList.removeChild(e.target.parentElement);
    }
})();