const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
let timerId = null;

startBtnRef.addEventListener('click', onButtonStartClick);
stopBtnRef.addEventListener('click', onButtonStopClick);

stopBtnRef.setAttribute('disabled', 'disabled');

function onButtonStartClick() {
  startBtnRef.setAttribute('disabled', 'disabled');
  stopBtnRef.removeAttribute('disabled');
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onButtonStopClick() {
  startBtnRef.removeAttribute('disabled');
  stopBtnRef.setAttribute('disabled', 'disabled');
  clearInterval(timerId);
}

// Генерация случайного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
