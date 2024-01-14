const sidebar = document.querySelector('.sidebar')
const iconMenu = document.querySelector('#open-menu')
const close = document.querySelector('#close-menu')

iconMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

close.addEventListener('click', () => {
    sidebar.classList.remove('active');
})