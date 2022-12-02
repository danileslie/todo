
import { format } from "date-fns";
import tasks from './todo.js';
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
    }
    });
})();

export default itemHandlers;