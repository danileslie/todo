const tasks = (()=>{

    let taskList = [];

    const loadedTasks = JSON.parse(localStorage.getItem('tasks'));
    taskList = loadedTasks;

    class Task {
        constructor(title, description, date, index, projectIndex){
            this.title = title;
            this.description = description;
            this.date = date;
            this.index = index;
            this.projectIndex = projectIndex;
            this.important = false;
            this.completed = false;
        }
    }
    
    function newTask(title, description, date, index, projectIndex){
        const task = new Task(title, description, date, index, projectIndex);
        taskList.push(task);      
    } 
    
    // eslint-disable-next-line no-unused-vars
    function editTask(title, description, date, index, projectIndex){
        taskList[index].title = title;
        taskList[index].description = description;
        taskList[index].date = date;   
    }
    
    function deleteTask(index){
            taskList.splice(index, 1);
    }
    
    // function completeTask(){
    
    // }

    // sorting by date on pageload

    const sortByDate = () => {
         const sortedTasks = taskList.sort((a, b) => {
            if (a.date < b.date){
                return -1;
            }
            if (a.date > b.date){
                return 1;
            }
            return 0;
        });
        return sortedTasks;
    }

    sortByDate(taskList);

    return {
        taskList,
        newTask,
        editTask,
        deleteTask,
        // completeTask,
        sortByDate,
    };
})();

export default tasks;
