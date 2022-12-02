import { format } from 'date-fns';
import tasks from './todo.js'

const ui = (() => {
    let tasksList = document.querySelector('.task-list');
    let taskTitle = document.querySelector('#enter-title');
    let taskDescription = document.querySelector('#enter-description');
    let taskDue = document.querySelector('#enter-due');

  
   
    function addTaskUi(){
    tasks.newTask(taskTitle.value, taskDescription.value, taskDue.value);
    form.reset();
    console.log(tasks.taskList);
    } 

    // add an index to the entries to lower need to crawl through array constantly

    function updateUi(){
        let taskDiv = document.createElement('div');
        let taskTitleText = document.createElement('p');
        let taskDescriptionText = document.createElement('p');
        let taskDateText = document.createElement('p'); 
        let editButton = document.createElement('button');
    for (let i = 0; i < tasks.taskList.length; i++){
        taskTitleText.textContent = tasks.taskList[i].title;
        taskDescriptionText.textContent = tasks.taskList[i].description;
        taskDateText.textContent = tasks.taskList[i].date;

        //create visual on page after task is created
        taskDiv.setAttribute('data-index', i);
        editButton.setAttribute('data-index', i);
        taskTitleText.setAttribute('data-index', i);
        taskDescriptionText.setAttribute('data-index', i);
        taskDateText.setAttribute('data-index', i);
        taskDiv.classList.add('taskDiv');
        tasks.taskList[i].index = parseInt(taskDiv.dataset.index);
        editButton.textContent='edit';
        editButton.classList.add('edit-task');

        taskTitleText.classList.add('title-text');
        taskDescriptionText.classList.add('description-text');
        taskDateText.classList.add('task-due');

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

        let taskTargetTitle = document.querySelector([`[data-index="${index}"]`]).querySelector('.title-text');
        let taskTargetDescription = document.querySelector([`[data-index="${index}"]`]).querySelector('.description-text')
        let taskTargetDate = document.querySelector([`[data-index="${index}"]`]).querySelector('.task-due');

        //changes the task in the array
        tasks.editTask(newTaskTitle, newTaskDescription, newTaskDate, index);
        console.log(tasks.taskList);

        //changes the task in the dom
        taskTargetTitle.textContent = newTaskTitle;
        taskTargetDescription.textContent = newTaskDescription;
        taskTargetDate.textContent = newTaskDate;

    }

    return {
        updateUi,
        addTaskUi,
        editTaskUi,
    }


        
})();

export default ui;