import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let inputValues = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

feedbackFormEl.elements.email.value = inputValues.email || '';
feedbackFormEl.elements.message.value = inputValues.message || '';

function onInputHandler(event) {
  if (event.target.nodeName === 'INPUT') {
    inputValues.email = event.target.value;
  } else if (event.target.nodeName === 'TEXTAREA') {
    inputValues.message = event.target.value;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputValues));
}
function onFormSubmit(event) {
  if (
    !feedbackFormEl.elements.email.value ||
    !feedbackFormEl.elements.message.value
  ) {
    alert('All fields must be filled!');
    return;
  }
  event.preventDefault();
  console.log(inputValues);
  localStorage.removeItem(STORAGE_KEY);
  feedbackFormEl.reset();
  inputValues = {};
}
feedbackFormEl.addEventListener('input', throttle(onInputHandler, 500));
feedbackFormEl.addEventListener('submit', onFormSubmit);
