
const loadHome = (() => {
//default page setup

const contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content');
document.body.appendChild(contentDiv);

contentDiv.innerHTML = `
    <div id='header'>
        <div id='title'>
            <p>Get To It!</p>
        </div>
    </div>

    <div id='sidebar'>
        <div id='all'>
            <p>All</p>
        </div>
        <div id='today'>
            <p>Today</p>
        </div>
        <div id='important'>
            <p>Important</p>
        </div>
        <div id='projects'>
            <p>Projects</p>
        </div>
    </div>

    <div id='main'>
        <div class='task-list'></div>
    </div>
    
    <footer id='footer'>Dummy footer content</footer>

    <div class='task-form'>
        <form id='form' name='form' method='get'>
        <!-- Task Title -->
            <div class='title-area'>
                <label for='task-title'>Title</label>
                <input id='task-title' name='task-title' required type='text' autocomplete='off'></>
            </div>

        <!-- Task Description -->
            <div class='description-area'>
                <label for='task-description'>Description</label>
                <textarea id='task-description' name='task-description' required rows='5' cols='25' autocomplete='off'></textarea>
            </div>

        <!-- Due Date -->
            <div class='date-area'>
                <label for='task-due'>Due Date</label>
                <input id='task-due' id='task-due' name='task-due' required type='date'>
            </div>
        </form>

        <!-- Form Buttons -->
        <button type='submit' class='add-task' form='form'>Add Task</button>
        <button type='button' class='cancel'form='form'>Cancel</button>
    </div>
`

})();

export default loadHome;