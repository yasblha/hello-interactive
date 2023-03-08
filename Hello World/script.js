// script.js

const form = document.querySelector('form');
const input = document.querySelector('#name');
const greeting = document.querySelector('#greeting');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = input.value.trim();
  if (name !== '') {
    greeting.textContent = `Hello, ${name}!`;
    input.value = '';
  }
});
