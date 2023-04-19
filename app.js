// Selecting the toggle button
const toggleBtn = document.querySelector('.btn');

// Adding 'click' event listener to the toggle button
toggleBtn.addEventListener('click', () => {

    // Targetting the HTML element and toggling the '.dark-theme' class
    document.documentElement.classList.toggle('dark-theme');

});