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
    const form = document.querySelector('form');
    const newTaskModal = document.querySelector('.task-form');



    // clear the dom to prepare for update
    const removeContent = (content) => {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
    }

    function addTask() {
        tasks.newTask(taskTitle.value, taskDescription.value, taskDue.value);
        form.reset();
    }

    function addProject() {
        projects.newProject(taskTitle.value);
        form.reset();
    }

    const updateUi = (taskList) => {

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
            const taskLeft = document.createElement('div');
            const taskRight = document.createElement('div');
            const checkBox = document.createElement('input');

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
            checkBox.setAttribute('type', 'checkbox');
            checkBox.setAttribute('data-index', `${taskList.indexOf(task)}`);
            

            task.index = parseInt(taskDiv.dataset.index, 10);

            // checking status of completed and favourited tasks

            if(task.completed === true) {
                taskDiv.classList.add('complete');
            }

            if(task.important === true) {
                favIcon.classList.add('fav-important');
            }

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
            checkBox.classList.add('check-task');
            taskLeft.classList.add('task-left');
            taskRight.classList.add('task-right');

            // adding projects to taskDiv

            const projectLabel = document.createElement('label');
            const projectSelect = document.createElement('select');
            const projectArea = document.createElement('div');

            projectArea.textContent = '';

            projectLabel.textContent = 'Project';

            projectLabel.setAttribute('for', 'projects-select');
            projectSelect.setAttribute('name', 'projects-select');
            projectSelect.setAttribute('id', `projects-select-${taskList.indexOf(task)}`);
            projectSelect.setAttribute('form', 'form');

            projectArea.classList.add('project-area');
            projectArea.classList.add('selectContainer');

            // create options values through project list entries
            // create only one of these specific options and buttons for each project entry

            const defaultOption = document.createElement('option');
            const projectSelectionEdit = document.createElement('button');

            projects.projectList.forEach((project) => {
                
                const projectOption = document.createElement('option');
                
                projectOption.value = project.title;
                projectOption.textContent = project.title;

                
                defaultOption.value = 'No Project';
                defaultOption.text = 'No Project';
                projectSelectionEdit.textContent = 'edit';

              
                projectOption.setAttribute('data-project-index', `${projects.projectList.indexOf(project)}`);
                projectSelect.setAttribute('data-index', `${taskList.indexOf(task)}`);
                projectSelectionEdit.setAttribute('data-index', `${taskList.indexOf(task)}`);
                projectSelectionEdit.classList.add('edit-project-task');

                projectSelect.appendChild(defaultOption);
                projectSelect.appendChild(projectOption);
                projectArea.appendChild(projectLabel);
                projectArea.appendChild(projectSelect);
                projectArea.appendChild(projectSelectionEdit);
                projectSelect.add(defaultOption, 0);
            })

            // append to container

            taskLeft.appendChild(projectArea)
            taskLeft.appendChild(checkBox);
            taskLeft.appendChild(favIcon);
            taskLeft.appendChild(taskTitleText);
            taskRight.appendChild(taskDescriptionText);
            taskRight.appendChild(taskDateText);
            taskRight.appendChild(editButton);
            taskRight.appendChild(deleteButton);
            taskDiv.appendChild(taskLeft);
            taskDiv.appendChild(taskRight);
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
    }

    function editProjectUi(projectIndex) {

        // only grabbing the information i need from the selected index

        const projectTargetTitle = document.querySelector([`[data-project-index='${projectIndex}']`]).querySelector('.title-text');

        // change project in array
        // projects.projectList[projectIndex].title = taskTitle.value;
        console.log(typeof projects.projectList[projectIndex].projectIndex);

        // changes the project on the dom
        const newProjectTitle = taskTitle.value;
        projectTargetTitle.textContent = newProjectTitle; 
        // projects.editProject(newProjectTitle, projectIndex);
    }

    const updateProjectUi = (projectList) => {

        // stops loop from making duplicate entries
        projectsList.textContent = '';

        // save entries to local storage on change
        localStorage.setItem('projects', JSON.stringify(projects.projectList));

        projectList.forEach((project) =>  {
        
            const projectDiv = document.createElement('div');
            const projectTitleText = document.createElement('p');
            const editButton = document.createElement('div');
            const deleteButton = document.createElement('div');

            // create visual on page and attach index after project is created

            projectTitleText.textContent = project.title;

            projectDiv.setAttribute('data-project-index', `${projectList.indexOf(project)}`);
            editButton.setAttribute('data-project-index', `${projectList.indexOf(project)}`);
            deleteButton.setAttribute('data-project-index', `${projectList.indexOf(project)}`);
            projectTitleText.setAttribute('data-project-index', `${projectList.indexOf(project)}`);

            project.projectIndex = parseInt(projectDiv.dataset.projectIndex, 10);

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

            
        });
          
        }
    

    function deleteProjectUi(projectIndex) {
        // deletes the entry from the array
        projects.deleteProject(projectIndex);
        console.log(projects.projectList);
        // console.log(projects.projectList.splice(projectIndex, 1));

        // deletes entry from the dom and updates the project index 
        // removeContent(projectsList);
        // updateProjectUi(projects.projectList);
    }


    // section for sidebar filters
    
    function projectFilter(projectIndex) {
        // filter tasks in the array
        const sidebarFilter = tasks.taskList.filter((task) => task.projectIndex === projectIndex);
        updateUi(sidebarFilter);
    }

    const todayFilter = () => {
        const dateFilter = tasks.taskList.filter((task) => {
            const todaysDate = format(new Date(), 'yyyy-MM-dd')
            return task.date === todaysDate;
        });
        updateUi(dateFilter);
    }

    const importantFilter = () => {
        const favFilter = tasks.taskList.filter((task) => task.important === true)
        updateUi(favFilter);
    }

    function importantToggle(index) {

        // toggle importance in array
        tasks.taskList[index].important = !tasks.taskList[index].important;
        
        updateUi(tasks.taskList);
    }

    function completeToggle(index) {

        // toggle completion in array
        tasks.taskList[index].completed = !tasks.taskList[index].completed;
        updateUi(tasks.taskList);
    }

    function changeTaskProject(index){
        // grab the project index of the selected project
        const selectedOption = document.getElementById(`projects-select-${index}`)
        
        const optionTest = selectedOption.options[selectedOption.selectedIndex].dataset.projectIndex;

        // grab the necessary div from the dom
        const selectedDiv = document.querySelector(`[data-index='${index}']`);

        // change its project index for the filter

        selectedDiv.setAttribute('data-project-index', `${optionTest}`);
        tasks.taskList[index].projectIndex = parseInt(selectedDiv.dataset.projectIndex, 10);
    }

    // modal actions

    function openTaskModal(){
        form.style.display = 'flex';
        newTaskModal.classList.add('active');
        }

    function closeTasks(){
        form.reset();
    form.style.display = 'none';
    newTaskModal.classList.remove('active');
    }



    return {
        removeContent,
        updateUi,
        addTask,
        editTaskUi,
        deleteUi,
        addProject,
        editProjectUi,
        updateProjectUi,
        deleteProjectUi,
        projectFilter,
        todayFilter,
        importantToggle,
        importantFilter,
        completeToggle,
        changeTaskProject,
        openTaskModal,
        closeTasks,
    };
})();

export default ui;