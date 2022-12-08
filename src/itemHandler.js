
import { format } from "date-fns";
import ui from './ui.js';

const itemHandlers = (() => {
    let index;
    // handling button clicks through event delegation

    document.addEventListener('click', (e) => {
        const target = e.target;

    // adding task
    if (target.classList.contains('add-task')){
         ui.addTaskUi(); 
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
    });
})();

export default itemHandlers;