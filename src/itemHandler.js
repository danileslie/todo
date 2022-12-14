
import { format } from "date-fns";
import ui from './ui.js';
import tasks from './todo';

const itemHandlers = (() => {
    let index;
    let projectIndex;
    // handling button clicks through event delegation

    document.addEventListener('click', (e) => {
        const target = e.target;

    // adding task
    if (target.classList.contains('add-task')){
        // projectIndex = (target.dataset.projectIndex);
         ui.addTaskUi(); 
        //  ui.updateProjectIndex();
         ui.testUpdateUi(tasks.taskList);      
    }

    //editing task
    if (target.classList.contains('edit-task')){
    // grabbing index here so i can work with it from a different file
    index = parseInt(target.dataset.index);
    ui.editTaskUi(index);
    ui.testUpdateUi(tasks.taskList);   
    }

    // deleting task
    if (target.classList.contains('delete-task')){
        index = parseInt(target.dataset.index);
        ui.deleteUi(index);
        ui.testUpdateUi(tasks.taskList);         
    }

    // adding project
    if(target.classList.contains('add-project')){
        ui.addProjectUi();
        ui.updateProjectUi();
        ui.testUpdateUi(tasks.taskList);
    }

    if (target.classList.contains('important-icon')){
        index = parseInt(target.dataset.index);
        ui.importantToggle(index);

    }

    if (target.classList.contains('edit-project')){
        projectIndex = parseInt(target.dataset.projectIndex);
        ui.editProjectUi(projectIndex);
        ui.updateProjectUi();
        ui.testUpdateUi(tasks.taskList);
    }

    if (target.classList.contains('delete-project')){
        projectIndex = parseInt(target.dataset.projectIndex);
        ui.deleteProjectUi(projectIndex);
        ui.testUpdateUi(tasks.taskList);
    }

    if(target.classList.contains('projectDiv')){
        projectIndex = parseInt(target.dataset.projectIndex);
        ui.testFilter(projectIndex);
    }

    if (target.id === 'all'){
        ui.testUpdateUi(tasks.taskList);
    }
    if(target.id === 'today'){
        ui.filterToday(tasks.taskList);
    }

    if (target.id === 'important') {
        ui.filterImportant(tasks.taskList);
    }
    });
})();

export default itemHandlers;