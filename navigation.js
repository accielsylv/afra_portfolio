document.addEventListener('DOMContentLoaded', function () {
    const navButton = document.getElementById('navbtn');
    const navbar = document.querySelector('.navigation');
    const title = document.querySelector('.title');
    const themeButton = document.getElementById('theme');

    navButton.addEventListener('click', function () {
        navbar.classList.toggle('show');
        title.classList.toggle('hide');
        themeButton.classList.toggle('hide');
    });
});
