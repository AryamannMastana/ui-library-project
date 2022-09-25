import Tooltip from './ui-components/tooltip'
import Dropdown from './ui-components/dropdown'
import Tabs from './ui-components/tabs'
import Snackbar from './ui-components/snackbar'

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
