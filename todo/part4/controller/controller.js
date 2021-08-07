(function () {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var storage = {
        getData: function(key){
            return JSON.parse(localStorage.getItem(key))
        },
        setData: function(key,tasks){
            localStorage.setItem(key, JSON.stringify(tasks));
        }
    }

    if(storage.getData("tasks")==null){
        storage.setData("tasks",[]);
    }

    var tasks = storage.getData("tasks");
    for (var index = 0; index < tasks.length; index++) {
        tasks[index].isDeleted ? 0:renderer(tasks[index]);
    }


    taskInput.addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            var taskText = taskInput.value;
            taskText != "" ? addTask(taskText) : 0;
        }
    });

    function addTask(taskText) {
        var tasks = storage.getData("tasks");
        task.id = Date.now();
        task.details = taskText;
        task.isDeleted = false;
        tasks.push(task);
        renderer(task);
        addTaskToStorage(tasks);
    }

    function renderer(task) {
        var li = document.createElement("li");
        var button = document.createElement("button");
        button.textContent = "x";
        button.id = task.id;
        button.addEventListener("click", removeTask);
        li.textContent = task.details+" ("+moment().from(task.id)+")";
        li.id = task.id;
        li.appendChild(button);
        taskList.prepend(li);
    }

    function removeTask(e) {
        var id = e.target.id;
        taskList.removeChild(e.target.parentElement);
        removeTaskFromStorage(id);
    }

    function removeTaskFromStorage(id) {
        var tasks = storage.getData("tasks");
        for (var index = 0; index < tasks.length; index++) {
            tasks[index].id == id ? tasks[index].isDeleted=true : 0;
        }
        storage.setData("tasks",tasks);
    }

    function addTaskToStorage(tasks) {
        storage.setData("tasks",tasks);
    }
})();