import { format } from 'date-fns';
import tasks from './todo.js'
import projects from './projects.js';


const ui = (() => {
    let tasksList = document.querySelector('.task-list');
    let projectsList = document.querySelector('#projects-list');
    let projectArea = document.querySelector('.project-area');
    let taskTitle = document.querySelector('#enter-title');
    let taskDescription = document.querySelector('#enter-description');
    let taskDue = document.querySelector('#enter-due');

    

    function addTaskUi(){
    tasks.newTask(taskTitle.value, taskDescription.value, taskDue.value);
    form.reset();
    } 

    function addProjectUi(){
    projects.newProject(taskTitle.value);
    form.reset();   
    }

    // clear the dom to prepare for update
    const removeContent = (content) => {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
    }

    // add an index to the entries to lower need to crawl through array constantly

    function updateUi(){
        // stops loop from making duplicate entries
        tasksList.textContent = '';

        // save entries to local storage on change
        localStorage.setItem('tasks', JSON.stringify(tasks.taskList));
        
    for (let i = 0; i < tasks.taskList.length; i++){

        let taskDiv = document.createElement('div');
        let taskTitleText = document.createElement('p');
        let taskDescriptionText = document.createElement('p');
        let taskDateText = document.createElement('p'); 
        let editButton = document.createElement('div');
        let deleteButton = document.createElement('div');
        let favIcon = document.createElement('div');

        //create visual on page and attach index after task is created

        taskTitleText.textContent = tasks.taskList[i].title;
        taskDescriptionText.textContent = tasks.taskList[i].description;
        taskDateText.textContent = tasks.taskList[i].date;
        
        taskDiv.setAttribute('data-index', i);
        editButton.setAttribute('data-index', i);
        deleteButton.setAttribute('data-index', i);
        taskTitleText.setAttribute('data-index', i);
        taskDescriptionText.setAttribute('data-index', i);
        taskDateText.setAttribute('data-index', i);
        
        tasks.taskList[i].index = parseInt(taskDiv.dataset.index);
        
        taskDiv.classList.add('taskDiv');
        editButton.classList.add('edit-task');
        editButton.classList.add('edit-icon');
        editButton.classList.add('task-icon');
        deleteButton.classList.add('delete-task');
        deleteButton.classList.add('delete-icon');
        deleteButton.classList.add('task-icon');
        taskTitleText.classList.add('title-text');
        taskDescriptionText.classList.add('description-text');
        taskDateText.classList.add('task-due');
        favIcon.classList.add('task-icon');
        favIcon.classList.add('important-icon');

        taskDiv.appendChild(favIcon);
        taskDiv.appendChild(taskTitleText);
        taskDiv.appendChild(taskDescriptionText);
        taskDiv.appendChild(taskDateText);
        taskDiv.appendChild(editButton);
        taskDiv.appendChild(deleteButton);
        tasksList.appendChild(taskDiv);
    }
    }

    function editTaskUi(index){
        let newTaskTitle = taskTitle.value;
        let newTaskDescription = taskDescription.value;
        let newTaskDate = taskDue.value;

        let taskTargetTitle = document.querySelector([`[data-index="${index}"]`]).querySelector('.title-text');
        let taskTargetDescription = document.querySelector([`[data-index="${index}"]`]).querySelector('.description-text')
        let taskTargetDate = document.querySelector([`[data-index="${index}"]`]).querySelector('.task-due');

        //changes the task in the array
        tasks.editTask(newTaskTitle, newTaskDescription, newTaskDate, index);

        //changes the task on the dom
        taskTargetTitle.textContent = newTaskTitle;
        taskTargetDescription.textContent = newTaskDescription;
        taskTargetDate.textContent = newTaskDate;
    }

    function deleteUi(index){
        // deletes the entry from the array
        tasks.deleteTask(index);
        
    //deletes entry from the dom and updates the index       
        removeContent(tasksList);  
        updateUi();
    }

    function editProjectUi(projectIndex){
let newProjectTitle = taskTitle.value;
let projectTargetTitle = document.querySelector([`[data-project-index="${projectIndex}"]`]).querySelector('.title-text');

projects.editProject(newProjectTitle, projectIndex);
projectTargetTitle.textContent = newProjectTitle;
    }

    function deleteProjectUi(projectIndex){
        let projectsSelection = document.querySelector('.selectContainer');
        // deletes the entry from the array
        projects.deleteProject(projectIndex);

        //deletes entry from the dom and updates the project index 
        removeContent(projectsList);
        removeContent(projectsSelection);
        updateProjectUi();
    }

    function updateProjectUi(){
        projectsList.textContent = '';

        localStorage.setItem('projects', JSON.stringify(projects.projectList));

        for (let i = 0; i < projects.projectList.length; i++){
            let projectDiv = document.createElement('div');
            let projectTitleText = document.createElement('p');
            let editButton = document.createElement('div');
            let deleteButton = document.createElement('div');

            projectTitleText.textContent = projects.projectList[i].title;

            projectDiv.setAttribute('data-project-index', i);
            editButton.setAttribute('data-project-index', i);
            deleteButton.setAttribute('data-project-index', i);
            projectTitleText.setAttribute('data-project-index', i);

            projects.projectList[i].projectIndex = parseInt(projectDiv.dataset.projectIndex);

        projectDiv.classList.add('projectDiv');
        editButton.classList.add('edit-project');
        editButton.classList.add('edit-icon');
        editButton.classList.add('task-icon');
        deleteButton.classList.add('delete-project');
        deleteButton.classList.add('delete-icon');
        deleteButton.classList.add('task-icon');
        projectTitleText.classList.add('title-text');

        projectDiv.appendChild(projectTitleText);
        
        projectDiv.appendChild(editButton);
        projectDiv.appendChild(deleteButton);
        projectsList.appendChild(projectDiv);
    }

        // test adding select at project creation

        let taskForm = document.querySelector('.task-form');
        
        // let projectTitle = document.createElement('div');
        let projectLabel = document.createElement('label');
        let projectSelect = document.createElement('select');

        projectArea.textContent = '';

        projectArea.classList.add('selectContainer');
        projectLabel.setAttribute('for', 'projects-select');
        projectLabel.textContent = 'Project';
        projectSelect.setAttribute('name', 'projects-select');
        projectSelect.setAttribute('id', 'projects-select');
        projectSelect.setAttribute('form', 'form');
        // projectSelect.setAttribute('data-project-index', `${projectIndex}`);
        

        //create select values through project list entries

        for (let i = 0; i < projects.projectList.length; i++){
            let projectOption = document.createElement('option');
            projectOption.value = projects.projectList[i].title;
            projectOption.textContent = projects.projectList[i].title;
            projectOption.setAttribute('data-project-index', projects.projectList[i].projectIndex );
            projectSelect.appendChild(projectOption);
            projectArea.appendChild(projectLabel);
            projectArea.appendChild(projectSelect);
            taskForm.appendChild(projectArea);     
        }
        
    }
    return {
        removeContent,
        updateUi,
        addTaskUi,
        editTaskUi,
        deleteUi,
        addProjectUi,
        editProjectUi,
        updateProjectUi,
        deleteProjectUi,
        // createProjectSelect,
    };        
})();

export default ui;