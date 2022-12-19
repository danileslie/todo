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
         ui.addTask(); 
        tasks.sortByDate(tasks.taskList);
         ui.updateUi(tasks.taskList);         
    }

    // editing task
    if (target.classList.contains('edit-task')){
    // grabbing index here so i can work with it from a different file
    index = parseInt(target.dataset.index, 10);
    ui.editTaskUi(index);
    ui.updateUi(tasks.taskList);   
    }

    // deleting task
    if (target.classList.contains('delete-task')){
        index = parseInt(target.dataset.index, 10);
        ui.deleteUi(index);
        ui.updateUi(tasks.taskList);         
    }

    // adding project
    if(target.classList.contains('add-project')){
        ui.addProject();
        ui.updateProjectUi();
        ui.updateUi(tasks.taskList);
    }

    if (target.classList.contains('important-icon')){
        index = parseInt(target.dataset.index, 10);
        ui.importantToggle(index);
    }

        if (target.classList.contains('check-task')){
            index = parseInt(target.dataset.index, 10);
            ui.completeToggle(index);
        }

    if (target.classList.contains('edit-project')){
        projectIndex = parseInt(target.dataset.projectIndex, 10);
        ui.editProjectUi(projectIndex);
        ui.updateProjectUi();
        ui.updateUi(tasks.taskList);
    }

    if (target.classList.contains('delete-project')){
        projectIndex = parseInt(target.dataset.projectIndex, 10);
        ui.deleteProjectUi(projectIndex);
        ui.updateUi(tasks.taskList);
    }

    if(target.classList.contains('projectDiv')){
        projectIndex = parseInt(target.dataset.projectIndex, 10);
        ui.testFilter(projectIndex);
    }

    if (target.id === 'all'){
        ui.updateUi(tasks.taskList);
    }
    if(target.id === 'today'){
        ui.todayFilter(tasks.taskList);
    }

    if (target.id === 'important') {
        ui.importantFilter(tasks.taskList);
    }
    });
})();

export default itemHandlers;