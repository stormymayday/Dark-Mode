// Selecting the toggle button
const toggleBtn = document.querySelector('.btn');

// Selecting the '.articles' section
const articles = document.querySelector('.articles');

console.log(articles);

// Adding 'click' event listener to the toggle button
toggleBtn.addEventListener('click', () => {

    // Targetting the HTML element and toggling the '.dark-theme' class
    document.documentElement.classList.toggle('dark-theme');

    // Changing toggleBtn's textContent
    if (document.documentElement.classList.contains('dark-theme')) {
        toggleBtn.textContent = 'light';
    } else {
        toggleBtn.textContent = 'dark';
    }

});