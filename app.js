// Selecting the toggle button
const toggleBtn = document.querySelector('.btn');

// Selecting the '.articles' section
const articles = document.querySelector('.articles');

// Iterating over the data array from data.js
const articlesData = data.map(({ title, date, snippet }) => {

    return `<article class="post">
    <h2>${title}</h2>
    <div class="post-info">
    <span>${date}</span>
    <span>5 min read</span>
    </div>
    <p>${snippet}</p>
    </article>`;

}).join('');

console.log(articlesData);

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