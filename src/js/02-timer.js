import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const timerRef = document.querySelector('.timer');
const valueTimerRef = document.querySelectorAll('.value');
const startbtnRef = document.querySelector('[data-start]');
const inputTargetTimeRef = document.querySelector('#datetime-picker');
const dataDaysRef = document.querySelector('[data-days]');
const dataHoursRef = document.querySelector('[data-hours]');
const dataMinutesRef = document.querySelector('[data-minutes]');
const dataSecondsRef = document.querySelector('[data-seconds]');

let targetDate = '';
let timer = '';

// Добавляем стили
startbtnRef.setAttribute('disabled', 'disabled');
timerRef.style.display = 'flex';
timerRef.style.gap = '16px';

valueTimerRef.forEach(element => {
  element.style.display = 'block';
  element.style.textAlign = 'center';
  element.style.fontSize = '36px';
});

// Подключаем библиотеку для выбора даты и времени
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    targetDate = new Date(selectedDates[0]);
    startbtnRef.removeAttribute('disabled');
  },
};

flatpickr(inputTargetTimeRef, options);

// Добавляем слушателя событий
startbtnRef.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  startbtnRef.setAttribute('disabled', 'disabled');

  const TimerID = setInterval(() => {
    const carrentDate = new Date();
    timer = targetDate - carrentDate;

    if (timer <= 100) {
      clearInterval(TimerID);
    }
    if (timer <= 0) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    updateTimerFace(convertMs(timer));
  }, 1000);
}

//Функция для подсчета значений
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

// Фунцкция для вывода значений таймера на экран
function updateTimerFace({ days, hours, minutes, seconds }) {
  dataDaysRef.textContent = `${days}`;
  dataHoursRef.textContent = `${hours}`;
  dataMinutesRef.textContent = `${minutes}`;
  dataSecondsRef.textContent = `${seconds}`;
}

// Функция для форматирования значений таймера
function addLeadingZero(value) {
  if ((value.length = 1)) {
    return String(value).padStart(2, '0');
  }
}
