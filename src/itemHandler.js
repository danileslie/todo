
import { format } from "date-fns";
import ui from './ui.js';

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
         ui.updateUi();      
    }

    //editing task
    if (target.classList.contains('edit-task')){
    // grabbing index here so i can work with it from a different file
    index = parseInt(target.dataset.index);
    ui.editTaskUi(index);
    ui.updateUi();   
    }

    // deleting task
    if (target.classList.contains('delete-task')){
        index = parseInt(target.dataset.index);
        ui.deleteUi(index);
        ui.updateUi();         
    }

    // adding project
    if(target.classList.contains('add-project')){
        ui.addProjectUi();
        ui.updateProjectUi();
    }

    if (target.classList.contains('edit-project')){
        projectIndex = parseInt(target.dataset.projectIndex);
        ui.editProjectUi(projectIndex);
        ui.updateProjectUi();
    }

    if (target.classList.contains('delete-project')){
        projectIndex = parseInt(target.dataset.projectIndex);
        ui.deleteProjectUi(projectIndex);
        ui.updateUi();
    }
    });
})();

export default itemHandlers;