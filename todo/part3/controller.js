(function () {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var task = {};

    var tasks = JSON.parse(localStorage.tasks);
    for (var index = 0; index < tasks.length; index++) {
        renderer(tasks[index]);
    }

    if (localStorage.tasks == undefined) {
        localStorage.setItem("tasks", JSON.stringify([]));
    }


    taskInput.addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            var taskText = taskInput.value;
            taskText != "" ? addTask(taskText) : 0;
        }
    });

    function addTask(taskText) {
        var tasks = JSON.parse(localStorage.tasks);
        task.id = Date.now();
        task.details = taskText;
        tasks.push(task);
        renderer(task);
        addTaskToLocalStorage(tasks);
    }

    function addTaskToLocalStorage(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
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
        removeTaskFromLocalStorage(id);
    }

    function removeTaskFromLocalStorage(id) {
        var tasks = JSON.parse(localStorage.tasks);
        for (var index = 0; index < tasks.length; index++) {
            console.log(tasks[index].id == id);
            tasks[index].id == id ? tasks.splice(index, 1) : 0;
        }
        console.log(tasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
})();