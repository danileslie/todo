import { format } from "date-fns";

const tasks = (()=>{

    let taskList = [];
    class Task {
        constructor(title, description, date){
            this.title = title;
            this.description = description;
            this.date = date;
            this.important = false;
            this.completed = false;
        }
    }
    
    function newTask(title, description, date){
        const task = new Task(title, description, date);
        taskList.push(task);
    } 
    
    // function editTask(title, description, date){
    //     whatever = title;
    //     whatever = description;
    //     whatever = date;
    //     whatever = important;
    // }
    
    // function deleteTask(){
    
    // }
    
    // function completeTask(){
    
    // }
    return {
        newTask,
        taskList,
        // editTask,
        // deleteTask,
        // completeTask,
    };
})();

export default tasks;
