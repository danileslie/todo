/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { format } from 'date-fns';
import tasks from './todo'
import projects from './projects';

// try to consolidate code a bit before working on css


const ui = (() => {
    const tasksList = document.querySelector('.task-list');
    const projectsList = document.querySelector('#projects-list');
    const taskTitle = document.querySelector('#enter-title');
    const taskDescription = document.querySelector('#enter-description');
    const taskDue = document.querySelector('#enter-due');



    // clear the dom to prepare for update
    const removeContent = (content) => {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
    }

    function addTask() {
        tasks.newTask(taskTitle.value, taskDescription.value, taskDue.value);
    }

    function addProject() {
        projects.newProject(taskTitle.value);
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

    const UpdateUi = (taskList) => {

        // stops loop from making duplicate entries
        tasksList.textContent = '';

        // save entries to local storage on change
        localStorage.setItem('tasks', JSON.stringify(tasks.taskList));

        taskList.forEach((task) => {
            const taskDiv = document.createElement('div');
            const taskTitleText = document.createElement('p');
            const taskDescriptionText = document.createElement('p');
            const taskDateText = document.createElement('p');
            const editButton = document.createElement('div');
            const deleteButton = document.createElement('div');
            const favIcon = document.createElement('div');

            // create visual on page and attach index after task is created

            taskTitleText.textContent = task.title;
            taskDescriptionText.textContent = task.description;
            taskDateText.textContent = task.date;

            taskDiv.setAttribute('data-index', `${taskList.indexOf(task)}`);
            editButton.setAttribute('data-index', `${taskList.indexOf(task)}`);
            deleteButton.setAttribute('data-index', `${taskList.indexOf(task)}`);
            taskTitleText.setAttribute('data-index', `${taskList.indexOf(task)}`);
            taskDescriptionText.setAttribute('data-index', `${taskList.indexOf(task)}`);
            taskDateText.setAttribute('data-index', `${taskList.indexOf(task)}`);
            favIcon.setAttribute('data-index', `${taskList.indexOf(task)}`);

            task.index = parseInt(taskDiv.dataset.index, 10);

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

            // adding projects to taskDiv

            const projectLabel = document.createElement('label');
            const projectSelect = document.createElement('select');
            const projectArea = document.createElement('div');

            projectArea.textContent = '';

            projectLabel.textContent = 'Project';

            projectLabel.setAttribute('for', 'projects-select');
            projectSelect.setAttribute('name', 'projects-select');
            projectSelect.setAttribute('id', 'projects-select');
            projectSelect.setAttribute('form', 'form');

            projectArea.classList.add('projectArea');
            projectArea.classList.add('selectContainer');

            // create options values through project list entries

            projects.projectList.forEach((project) => {

                const projectOption = document.createElement('option');
                projectOption.value = project.title;
                projectOption.textContent = project.title;

                projectOption.setAttribute('data-project-index', `${projects.projectList.indexOf(project)}`);

                projectSelect.appendChild(projectOption);
                projectArea.appendChild(projectLabel);
                projectArea.appendChild(projectSelect);
            })

            // append to container

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

    function editTaskUi(index) {

        const newTaskTitle = taskTitle.value;
        const newTaskDescription = taskDescription.value;
        const newTaskDate = taskDue.value;

        // only grabbing the information i need from the selected index

        const taskTargetTitle = document.querySelector([`[data-index='${index}']`]).querySelector('.title-text');
        const taskTargetDescription = document.querySelector([`[data-index='${index}']`]).querySelector('.description-text')
        const taskTargetDate = document.querySelector([`[data-index='${index}']`]).querySelector('.task-due');
        const editTask = document.querySelector([`[data-index='${index}']`]).querySelector('.edit-task');
        const projectSelect = document.querySelector([`[data-index='${index}']`]).querySelector('#projects-select');

        // changes the task in the array
        tasks.editTask(newTaskTitle, newTaskDescription, newTaskDate, index);

        // changes project index in array
        tasks.taskList[index].projectIndex = parseInt(projectSelect.options[projectSelect.selectedIndex].dataset.projectIndex, 10);

        // changes the task on the dom
        taskTargetTitle.textContent = newTaskTitle;
        taskTargetDescription.textContent = newTaskDescription;
        taskTargetDate.textContent = newTaskDate;

        // changes project index in dom
        editTask.setAttribute('data-project-index', tasks.taskList[index].projectIndex);
    }

    function deleteUi(index) {
        // deletes the entry from the array
        tasks.deleteTask(index);

        // deletes entry from the dom and updates the index       
        removeContent(tasksList);
        UpdateUi(tasks.taskList);
    }

    function editProjectUi(projectIndex) {

        // only grabbing the information i need from the selected index

        const projectTargetTitle = document.querySelector([`[data-project-index='${projectIndex}']`]).querySelector('.title-text');

        // changes the project on the dom
        const newProjectTitle = taskTitle.value;
        projectTargetTitle.textContent = newProjectTitle;

        // changes project index in dom
        projects.editProject(newProjectTitle, projectIndex);
    }

    function updateProjectUi() {

        // stops loop from making duplicate entries
        projectsList.textContent = '';

        // save entries to local storage on change
        localStorage.setItem('projects', JSON.stringify(projects.projectList));

        for (let i = 0; i < projects.projectList.length; i++) {
            const projectDiv = document.createElement('div');
            const projectTitleText = document.createElement('p');
            const editButton = document.createElement('div');
            const deleteButton = document.createElement('div');

            // create visual on page and attach index after project is created

            projectTitleText.textContent = projects.projectList[i].title;

            projectDiv.setAttribute('data-project-index', i);
            editButton.setAttribute('data-project-index', i);
            deleteButton.setAttribute('data-project-index', i);
            projectTitleText.setAttribute('data-project-index', i);

            projects.projectList[i].projectIndex = parseInt(projectDiv.dataset.projectIndex, 10);

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

    function deleteProjectUi(projectIndex) {
        // deletes the entry from the array
        projects.deleteProject(projectIndex);

        // deletes entry from the dom and updates the project index 
        removeContent(projectsList);
        updateProjectUi();
    }


    // section for sidebar filters
    
    function testFilter(criteria) {

        // filter tasks in the array
        const sidebarFilter = tasks.taskList.filter((task) => task.projectIndex === criteria);
        UpdateUi(sidebarFilter);
    }

    const filterToday = () => {
        const dateFilter = tasks.taskList.filter((task) => {
            const todaysDate = format(new Date(), 'yyyy-MM-dd')
            return task.date === todaysDate;
        });
        UpdateUi(dateFilter);
    }

    const filterImportant = () => {
        const importantFilter = tasks.taskList.filter((task) => task.important === true)
        UpdateUi(importantFilter);
    }

    function importantToggle(index) {

        // toggle importance in array
        tasks.taskList[index].important = !tasks.taskList[index].important;

        // toggle importance in dom
        const favIcon = document.querySelector([`[data-index='${index}']`]).querySelector('.important-icon');

        favIcon.classList.toggle('fav-important');

        UpdateUi(tasks.taskList);
    }


    return {
        removeContent,
        UpdateUi,
        addTask,
        editTaskUi,
        deleteUi,
        addProject,
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