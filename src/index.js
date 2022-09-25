import Tooltip from './ninja-ui/tooltip'
import Dropdown from './ninja-ui/dropdown'
import Tabs from './ninja-ui/tabs'
import Snackbar from './ninja-ui/snackbar'

// Creating tooltips 
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// Creating dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => {
    const instance = new Dropdown(dropdown);
    instance.init();
})

// Creating tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// Creating snackbars
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('.snackbar-trigger');
button.addEventListener('click', () => {
    snackbar.show('You clicked me!');
});
