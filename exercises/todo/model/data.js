if(sessionStorage.tasks==undefined){
    sessionStorage.setItem("tasks",JSON.stringify([]));
    sessionStorage.setItem("deletedTasks",JSON.stringify([]));
}