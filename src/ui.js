import { format } from 'date-fns';
import tasks from './todo.js'

const ui = (() => {
    
    //update dom task list based on array
    function domTasks() {
        let tasksList = document.querySelector('.task-list');
        let taskTitle = document.querySelector('#task-title');
        let taskDescription = document.querySelector('#task-description');
        let taskDue = document.querySelector('#task-due');

        tasks.newTask(taskTitle.value, taskDescription.value, taskDue.value);
        form.reset();
        // console.log(tasks.taskList);

              for (let i = 0; i < tasks.taskList.length; i++){
               let taskDiv = document.createElement('div');
               let taskTitleText = document.createElement('p');
               let taskDesctiptionText = document.createElement('p');
               let taskDateText = document.createElement('p'); 
                  console.log(tasks.taskList[i]);
               
            }
            //create divs, add index to entry based on [i]
            //ex textdiv.setAttribute('attribute', 'i)
            //append at the end of all of this. do not
            //append before everything is complete to keep it clean
        
    }
    return {
        domTasks,
    };

})();

export default ui;