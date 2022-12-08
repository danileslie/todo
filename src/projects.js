const projects = (() => {

        let projectList = [];

        const loadedProjects = JSON.parse(localStorage.getItem('projects'));
    projectList = loadedProjects;
        class Project {
            constructor(title, projectIndex){
                this.title = title;
                this.projectIndex = projectIndex;
                this.tasks = [];
            }
        }

        function newProject(title, projectIndex){
            const project = new Project(title, projectIndex);
            projectList.push(project);
        }

        function deleteProject(projectIndex){
            projectList.splice(projectIndex, 1);
    }

    function editProject(title, projectIndex){
        projectList[projectIndex].title = title;   
    }
return {
    projectList,
    newProject,
    editProject,
    deleteProject,
}
})();

export default projects;