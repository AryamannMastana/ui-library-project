import './styles/tabs.css'

class Tabs {
    constructor(container){
        this.container = container;
        this.tabs = document.querySelectorAll('.trigger');
    }
    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        });
    }
    toggleTabs(e){
        // Remove current active classes
        this.tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        // Add new active class to clicked tab
        e.target.classList.add('active');
    }
    toggleContent(e){
        // Remove current active classes from content
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active');
        })
        // Add new active class to content
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');
    }
}

export { Tabs as default };