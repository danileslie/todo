import { format } from "date-fns";
import ui from './ui.js';

const tasks = (()=>{

    let taskList = [];

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
        ui.updateUi(); 
    } 
    
    function editTask(title, description, date, index){
        taskList[index].title = title;
        taskList[index].description = description;
        taskList[index].date = date;
        ui.updateUi();
    }
    
    function deleteTask(index){
            taskList.splice(index, 1);
            ui.updateUi();
            return taskList;
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
