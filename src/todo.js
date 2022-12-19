import projects from './projects';

const tasks = (()=>{

    // move this later so project list doesnt need to be imported here 
    let taskList = [];

    // load a default set of tasks and projects if there is nothing in localstorage

    
    const loadedTasks = JSON.parse(localStorage.getItem('tasks'));

    if (loadedTasks.length === 0 && projects.loadedProjects.length === 0){
        taskList = [
            {
                title: 'test title',
                description: 'test description',
                date: '2022-12-22',
                important: false,
                completed: false,
                projectIndex: '0',
            }, 
            {
                title: 'test title 2 ',
                description: 'test description 2',
                date: '2022-12-23',
                important: false,
                completed: false, 
                projectIndex: '0', 
            },
        ]

        projects.projectList = [
            {
                title: 'example project',
            },
        ];
    } else {
        
        taskList = loadedTasks;
        projects.projectList = projects.loadedProjects;
    }

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
