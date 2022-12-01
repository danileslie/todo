
import { format } from "date-fns";
import tasks from './todo.js';
import ui from './ui.js';

const itemHandlers = (() => {
    // handling button clicks

    let addTaskButton = document.querySelector('.add-task');
    const taskText = document.querySelector('#task-title');

    addTaskButton.addEventListener('click', ui.domTasks);


    // all functions for buttons



})();

export default itemHandlers;