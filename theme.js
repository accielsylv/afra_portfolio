document.addEventListener('DOMContentLoaded', function() {
    const rootElement = document.documentElement;
    const themeButton = document.getElementById('theme');
    const iconElement = themeButton.querySelector('i');
    const projectImage = document.getElementById('project-image');

    themeButton.addEventListener('click', function() {
        rootElement.classList.toggle('dark-theme');
        const isDarkMode = rootElement.classList.contains('dark-theme');
        iconElement.className = isDarkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
        const imageName = isDarkMode ? 'website-project1(dark).jpg' : 'website-project1(light).jpg';
        projectImage.src = imageName;
    });
});