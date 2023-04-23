// Named Import
import { data } from './utils/data.js';

// Defaul Import
import getElement from './utils/getElement.js';

// Selecting the toggle button
const toggleBtn = getElement('.btn');

// Selecting the '.articles' section
const articlesContainer = getElement('.articles');

// Iterating over the data array from data.js
const articlesData = data.map(({ title, date, length, snippet }) => {

    // Formatting date using Moment JS
    const momentDate = moment(date).format('MMMM Do, YYYY');

    return `<article class="post">
    <h2>${title}</h2>
    <div class="post-info">
    <span>${momentDate}</span>
    <span>${length} min read</span>
    </div>
    <p>${snippet}</p>
    </article>`;

}).join('');

// Rendering the articlesData inside the articlesContainer
articlesContainer.innerHTML = articlesData;

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