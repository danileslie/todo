
const tasks = (()=>{
    
    let taskList = [];

    const loadedTasks = JSON.parse(localStorage.getItem('tasks'));
    taskList = loadedTasks;

    class Task {
        constructor(title, description, date, index){
            this.title = title;
            this.description = description;
            this.date = date;
            this.index = index;
            this.important = false;
            this.completed = false;
        }
    }
    
    function newTask(title, description, date, index){
        const task = new Task(title, description, date, index);
        taskList.push(task);      
    } 
    
    function editTask(title, description, date, index){
        taskList[index].title = title;
        taskList[index].description = description;
        taskList[index].date = date;   
    }
    
    function deleteTask(index){
            taskList.splice(index, 1);
    }
    
    // function completeTask(){
    
    // }
    return {
        taskList,
        newTask,
        editTask,
        deleteTask,
        // completeTask,
    };
})();

export default tasks;
