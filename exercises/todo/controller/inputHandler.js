var taskInput = document.getElementById("task");
var list = document.getElementById("tasksList");

(function(){
    var tasks = JSON.parse(sessionStorage.tasks);
    var deletedTasks = JSON.parse(sessionStorage.deletedTasks);
    tasks.forEach(element => {
        !deletedTasks.includes(element) ? addLitoOl(element):0
    });
})();

taskInput.addEventListener("keyup", function(event) {
    if(event.key=="Enter"){
        var task = taskInput.value;
        task!=="" ? addToTasks(task):0
    }
});

function addToTasks(task){
    var tasks = JSON.parse(sessionStorage.tasks);
    var deletedTasks = JSON.parse(sessionStorage.deletedTasks);
    if(tasks.includes(task)&&!deletedTasks.includes(task)){
        alert("task already exist");
        return;
    }else if(tasks.includes(task)&&deletedTasks.includes(task)){
        deletedTasks.splice(deletedTasks.indexOf(task),1);
        tasks.splice(tasks.indexOf(task),1);
        sessionStorage.setItem("deletedTasks",JSON.stringify(deletedTasks));
        sessionStorage.setItem("tasks",JSON.stringify(tasks));
    }
    tasks.push(task);
    sessionStorage.setItem("tasks",JSON.stringify(tasks));
    addLitoOl(task);
}

function addLitoOl(task){
    var li = createLiElemet(task);
    list.prepend(li);
    li.appendChild(createButtonElement());
}

function createLiElemet(task){
    var li = document.createElement('li');
    li.textContent = task;
    return li;
}

function createButtonElement(){
    var button = document.createElement("button");
    button.textContent = "X";
    button.addEventListener("click",buttonHandler);
    return button;
}

function buttonHandler(){
    var tasks = JSON.parse(sessionStorage.tasks);
    var deletedTasks = JSON.parse(sessionStorage.deletedTasks);
    var li = event.srcElement.parentElement;
    deletedTasks.push(li.innerText.slice(0,-1));
    sessionStorage.setItem("deletedTasks",JSON.stringify(deletedTasks));
    list.removeChild(li);
}

