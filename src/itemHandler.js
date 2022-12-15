import ui from './ui';
import tasks from './todo';

const itemHandlers = (() => {
    let index;
    let projectIndex;
    // handling button clicks through event delegation

    document.addEventListener('click', (e) => {
        const {target} = e;

    // adding task
    if (target.classList.contains('add-task')){
        // projectIndex = (target.dataset.projectIndex);
         ui.addTask(); 
        //  ui.updateProjectIndex();
         ui.UpdateUi(tasks.taskList);      
    }

    // editing task
    if (target.classList.contains('edit-task')){
    // grabbing index here so i can work with it from a different file
    index = parseInt(target.dataset.index, 10);
    ui.editTaskUi(index);
    ui.UpdateUi(tasks.taskList);   
    }

    // deleting task
    if (target.classList.contains('delete-task')){
        index = parseInt(target.dataset.index, 10);
        ui.deleteUi(index);
        ui.UpdateUi(tasks.taskList);         
    }

    // adding project
    if(target.classList.contains('add-project')){
        ui.addProject();
        ui.updateProjectUi();
        ui.UpdateUi(tasks.taskList);
    }

    if (target.classList.contains('important-icon')){
        index = parseInt(target.dataset.index, 10);
        ui.importantToggle(index);

    }

    if (target.classList.contains('edit-project')){
        projectIndex = parseInt(target.dataset.projectIndex, 10);
        ui.editProjectUi(projectIndex);
        ui.updateProjectUi();
        ui.UpdateUi(tasks.taskList);
    }

    if (target.classList.contains('delete-project')){
        projectIndex = parseInt(target.dataset.projectIndex, 10);
        ui.deleteProjectUi(projectIndex);
        ui.UpdateUi(tasks.taskList);
    }

    if(target.classList.contains('projectDiv')){
        projectIndex = parseInt(target.dataset.projectIndex, 10);
        ui.testFilter(projectIndex);
    }

    if (target.id === 'all'){
        ui.UpdateUi(tasks.taskList);
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