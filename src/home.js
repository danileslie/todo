
const loadHome = (() => {
    
// default page setup

const contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content');
document.body.appendChild(contentDiv);

contentDiv.innerHTML = `
    <div id='header'>
        <div id='title'>
            <div id='logo'></div>
            <p>Everything Is Due Forever</p>
        </div>
    </div>

    <div id='sidebar'>
        <div id='all'>
        <div class='sidebar-icon' id='all-icon'></div>
            <p>All</p>
        </div>
        <div id='today'>
        <div class='sidebar-icon' id='today-icon'></div>
            <p>Today</p>
        </div>
        <div id='important'>
        <div class='sidebar-icon' id='important-icon'></div>
            <p>Important</p>
        </div>
        <div id='projects'>
        <div class='sidebar-icon' id='projects-icon'></div>
            <p>Projects</p>
        </div>
        <div id='projects-list'>
            </div>

        <button class='open-task-modal' type='button'>Add a Task</button>
    </div>

    <div id='main'>
        <div class='task-list'></div>
    </div>
    
    <footer id='footer'>Dummy footer content</footer>

    <div class='task-form'>
        <form name='form' id='tasks-form' method='get'>
        <!-- Task Title -->
            <div class='title-area'>
                <label for='enter-title'>Title</label>
                <input id='enter-title' name='enter-title' required type='text' autocomplete='off'></>
            </div>

        <!-- Task Description -->
            <div class='description-area'>
                <label for='enter-description'>Description</label>
                <textarea id='enter-description' class='box-border' name='enter-description' required rows='5' autocomplete='off'></textarea>
            </div>

        <!-- Due Date -->
            <div class='date-area'>
                <label for='task-due'>Due Date</label>
                <input id='enter-due' id='enter-due' name='enter-due' required type='date'>
            </div>

        <!-- Form Buttons -->
            <button type='submit' class='add-task' form='form'>Add Task</button>
            <button type='button' class='add-project' form='form'>Add Project</button>
        <button type='button' class='cancel' form='form'>Cancel</button>
        </form>

        
        
        
    </div>
`

})();

export default loadHome;