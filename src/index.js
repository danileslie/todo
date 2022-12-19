import './style.css';
import loadHome from './home';
import itemHandler from './itemHandler';
import ui from './ui';
import tasks from './todo';

ui.updateProjectUi();
ui.updateUi(tasks.taskList);

loadHome;
itemHandler;




