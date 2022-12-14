import { format } from 'date-fns';
import tasks from './todo.js'
import projects from './projects.js';

// try to consolidate code a bit before working on css


const ui = (() => {
    let tasksList = document.querySelector('.task-list');
    let projectsList = document.querySelector('#projects-list');
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

    // function updateUi(){
    //     // stops loop from making duplicate entries
    //     tasksList.textContent = '';

    //     // save entries to local storage on change
    //     localStorage.setItem('tasks', JSON.stringify(tasks.taskList));

    // for (let i = 0; i < tasks.taskList.length; i++){
    //     let taskDiv = document.createElement('div');
    //     let taskTitleText = document.createElement('p');
    //     let taskDescriptionText = document.createElement('p');
    //     let taskDateText = document.createElement('p'); 
    //     let editButton = document.createElement('div');
    //     let deleteButton = document.createElement('div');
    //     let favIcon = document.createElement('div');

    //     //create visual on page and attach index after task is created

    //     taskTitleText.textContent = tasks.taskList[i].title;
    //     taskDescriptionText.textContent = tasks.taskList[i].description;
    //     taskDateText.textContent = tasks.taskList[i].date;
        
    //     taskDiv.setAttribute('data-index', i);
    //     editButton.setAttribute('data-index', i);
    //     deleteButton.setAttribute('data-index', i);
    //     taskTitleText.setAttribute('data-index', i);
    //     taskDescriptionText.setAttribute('data-index', i);
    //     taskDateText.setAttribute('data-index', i);

    //     taskDiv.setAttribute('data-project-index', tasks.taskList[i].projectIndex);
    //     editButton.setAttribute('data-project-index', tasks.taskList[i].projectIndex);
    //     deleteButton.setAttribute('data-project-index', tasks.taskList[i].projectIndex);
    //     taskTitleText.setAttribute('data-project-index', tasks.taskList[i].projectIndex);
    //     taskDescriptionText.setAttribute('data-project-index', tasks.taskList[i].projectIndex);
    //     taskDateText.setAttribute('data-project-index', tasks.taskList[i].projectIndex);
        
    //     tasks.taskList[i].index = parseInt(taskDiv.dataset.index);
        
        
    //     taskDiv.classList.add('task-div');
    //     editButton.classList.add('edit-task');
    //     editButton.classList.add('edit-icon');
    //     editButton.classList.add('task-icon');
    //     deleteButton.classList.add('delete-task');
    //     deleteButton.classList.add('delete-icon');
    //     deleteButton.classList.add('task-icon');
    //     taskTitleText.classList.add('title-text');
    //     taskDescriptionText.classList.add('description-text');
    //     taskDateText.classList.add('task-due');
    //     favIcon.classList.add('task-icon');
    //     favIcon.classList.add('important-icon');

    //     //add projects list to task div
        
    //     let projectLabel = document.createElement('label');
    //     let projectSelect = document.createElement('select');
    //     let projectArea = document.createElement('div');

    //     projectArea.textContent = '';

    //     projectArea.classList.add('projectArea');
    //     projectArea.classList.add('selectContainer');
    //     projectLabel.setAttribute('for', 'projects-select');
    //     projectLabel.textContent = 'Project';
    //     projectSelect.setAttribute('name', 'projects-select');
    //     projectSelect.setAttribute('id', 'projects-select');
    //     projectSelect.setAttribute('form', 'form');
        
    //     //create select values through project list entries

    //     for (let j = 0; j < projects.projectList.length; j++){
    //         let projectOption = document.createElement('option');
    //         projectOption.value = projects.projectList[j].title;
    //         projectOption.textContent = projects.projectList[j].title;
    //         projectOption.setAttribute('data-project-index', j);
    //         projectSelect.appendChild(projectOption);
    //         projectArea.appendChild(projectLabel);
    //         projectArea.appendChild(projectSelect);    
    //     }
        
    //     //end project section
        
    //     taskDiv.appendChild(projectArea);

    //     taskDiv.appendChild(favIcon);
    //     taskDiv.appendChild(taskTitleText);
    //     taskDiv.appendChild(taskDescriptionText);
    //     taskDiv.appendChild(taskDateText);
    //     taskDiv.appendChild(editButton);
    //     taskDiv.appendChild(deleteButton);
    //     tasksList.appendChild(taskDiv);  
        
    // }  
    // console.log(tasks.taskList);     
    // }

    const testUpdateUi = (taskList) => {

         // stops loop from making duplicate entries
         tasksList.textContent = '';

         // save entries to local storage on change
         localStorage.setItem('tasks', JSON.stringify(tasks.taskList));

            taskList.forEach((task)=> {
                let taskDiv = document.createElement('div');
                let taskTitleText = document.createElement('p');
                let taskDescriptionText = document.createElement('p');
                let taskDateText = document.createElement('p'); 
                let editButton = document.createElement('div');
                let deleteButton = document.createElement('div');
                let favIcon = document.createElement('div');

                //create visual on page and attach index after task is created

        taskTitleText.textContent = task.title;
        taskDescriptionText.textContent = task.description;
        taskDateText.textContent = task.date;

        taskDiv.setAttribute('data-index', `${taskList.indexOf(task)}`);
        editButton.setAttribute('data-index', `${taskList.indexOf(task)}`);
        deleteButton.setAttribute('data-index', `${taskList.indexOf(task)}`);
        taskTitleText.setAttribute('data-index', `${taskList.indexOf(task)}`);
        taskDescriptionText.setAttribute('data-index', `${taskList.indexOf(task)}`);
        taskDateText.setAttribute('data-index', `${taskList.indexOf(task)}`);
        favIcon.setAttribute('data-index',`${taskList.indexOf(task)}`);

        task.index = parseInt(taskDiv.dataset.index);
        
        taskDiv.classList.add('task-div');
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

        // adding projects

        let projectLabel = document.createElement('label');
        let projectSelect = document.createElement('select');
        let projectArea = document.createElement('div');

        projectArea.textContent = '';

        projectArea.classList.add('projectArea');
        projectArea.classList.add('selectContainer');
        projectLabel.setAttribute('for', 'projects-select');
        projectLabel.textContent = 'Project';
        projectSelect.setAttribute('name', 'projects-select');
        projectSelect.setAttribute('id', 'projects-select');
        projectSelect.setAttribute('form', 'form');

          //create select values through project list entries
    
          projects.projectList.forEach((project)=> {

            let projectOption = document.createElement('option');
            projectOption.value = project.title;
            projectOption.textContent = project.title;
            projectOption.setAttribute('data-project-index', `${projects.projectList.indexOf(project)}`);
            projectSelect.appendChild(projectOption);
            projectArea.appendChild(projectLabel);
            projectArea.appendChild(projectSelect);  
        })
         
        //end project section
        
        taskDiv.appendChild(projectArea);

        taskDiv.appendChild(favIcon);
        taskDiv.appendChild(taskTitleText);
        taskDiv.appendChild(taskDescriptionText);
        taskDiv.appendChild(taskDateText);
        taskDiv.appendChild(editButton);
        taskDiv.appendChild(deleteButton);
        tasksList.appendChild(taskDiv); 
            });
    }

    function editTaskUi(index){

        let newTaskTitle = taskTitle.value;
        let newTaskDescription = taskDescription.value;
        let newTaskDate = taskDue.value;

        let taskTargetTitle = document.querySelector([`[data-index="${index}"]`]).querySelector('.title-text');
        let taskTargetDescription = document.querySelector([`[data-index="${index}"]`]).querySelector('.description-text')
        let taskTargetDate = document.querySelector([`[data-index="${index}"]`]).querySelector('.task-due');

        let taskDiv = document.querySelector([`[data-index="${index}"]`]).querySelector('.task-div');
        let editTask = document.querySelector([`[data-index="${index}"]`]).querySelector('.edit-task');
        let deleteTask = document.querySelector([`[data-index="${index}"]`]).querySelector('.delete-task');

        let projectSelect = document.querySelector([`[data-index="${index}"]`]).querySelector('#projects-select');

        //changes the task in the array
        tasks.editTask(newTaskTitle, newTaskDescription, newTaskDate, index);

        //changes project index in array

        tasks.taskList[index].projectIndex = parseInt(projectSelect.options[projectSelect.selectedIndex].dataset.projectIndex);

        //changes the task on the dom
        taskTargetTitle.textContent = newTaskTitle;
        taskTargetDescription.textContent = newTaskDescription;
        taskTargetDate.textContent = newTaskDate;

        //changes project index in dom

        editTask.setAttribute('data-project-index', tasks.taskList[index].projectIndex);
    
    }

    function deleteUi(index){
        // deletes the entry from the array
        tasks.deleteTask(index);
        
    //deletes entry from the dom and updates the index       
        removeContent(tasksList);  
        testUpdateUi(tasks.taskList);
    }

    function editProjectUi(projectIndex){
        let newProjectTitle = taskTitle.value;
        let projectTargetTitle = document.querySelector([`[data-project-index="${projectIndex}"]`]).querySelector('.title-text');

        projects.editProject(newProjectTitle, projectIndex);
        projectTargetTitle.textContent = newProjectTitle;
    }

    function deleteProjectUi(projectIndex){
        // deletes the entry from the array
        projects.deleteProject(projectIndex);

        //deletes entry from the dom and updates the project index 
        removeContent(projectsList);
        // removeContent(projectsSelection);
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
    }

    function testFilter(criteria){

        // filter tasks in the array
        let sidebarFilter = tasks.taskList.filter((tasks) => {
            return tasks.projectIndex === criteria; 
        });
testUpdateUi(sidebarFilter);
    }

    const filterToday = () => {
        let dateFilter = tasks.taskList.filter((tasks) => {
            let todaysDate = format(new Date(), 'yyyy-MM-dd')
            return tasks.date === todaysDate;
        });
testUpdateUi(dateFilter);     
    }

    const filterImportant = () => {
            let importantFilter = tasks.taskList.filter((tasks) => {
                return tasks.important === true;
            })
        testUpdateUi(importantFilter);
        console.log(importantFilter);
    }

    function importantToggle(index){

        // toggle importance in array
        tasks.taskList[index].important = !tasks.taskList[index].important;

        // toggle importance in dom
let favIcon = document.querySelector([`[data-index="${index}"]`]).querySelector('.important-icon');

        favIcon.classList.toggle('fav-important');

        testUpdateUi(tasks.taskList);
    }


    return {
        removeContent,
        testUpdateUi,
        addTaskUi,
        editTaskUi,
        deleteUi,
        addProjectUi,
        editProjectUi,
        updateProjectUi,
        deleteProjectUi,
        testFilter,
        filterToday,
        importantToggle,
        filterImportant,
 
    };        
})();

export default ui;