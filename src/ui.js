import { format } from 'date-fns';
import tasks from './todo.js'

const ui = (() => {

    let tasksList = document.querySelector('.task-list');
    let taskTitle = document.querySelector('#task-title');
    let taskDescription = document.querySelector('#task-description');
    let taskDue = document.querySelector('#task-due');
    //add entries to dom task list based on array
   
    function addTaskUi(){
    

    let taskDiv = document.createElement('div');
    let taskTitleText = document.createElement('p');
    let taskDescriptionText = document.createElement('p');
    let taskDateText = document.createElement('p'); 
    let editButton = document.createElement('button');

    tasks.newTask(taskTitle.value, taskDescription.value, taskDue.value);
    console.log(tasks.taskList);
                
    // add an index to the entries to lower need to crawl through array constantly
    for (let i = 0; i < tasks.taskList.length; i++){
        taskTitleText.textContent = tasks.taskList[i].title;
        taskDescriptionText.textContent = tasks.taskList[i].description;
        taskDateText.textContent = tasks.taskList[i].date;

        taskDiv.setAttribute('data-index', i);
        editButton.setAttribute('data-index', i);
        taskDiv.classList.add('taskDiv');
        tasks.taskList[i].index = parseInt(taskDiv.dataset.index);
        editButton.textContent='edit';
        editButton.classList.add('edit-task');

        taskDiv.appendChild(taskTitleText);
        taskDiv.appendChild(taskDescriptionText);
        taskDiv.appendChild(taskDateText);
        taskDiv.appendChild(editButton);
        tasksList.appendChild(taskDiv);

    }
    } 

    function editTaskUi(index){
        let task = tasks.taskList[index]
        let newTaskTitle = taskTitle.value;
        let newTaskDescription = taskDescription.value;
        let newTaskDate = taskDue.value;
        tasks.editTask(newTaskTitle, newTaskDescription, newTaskDate, index);
        console.log(tasks.taskList);
        // tasks.editTask();

        // tasks.editTask(newTaskTitle, index);
    }

    return {
        addTaskUi,
        editTaskUi,
    }


        
})();

export default ui;