import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
const inputDelayRef = document.querySelector('[name="delay"]');
const inputStepRef = document.querySelector('[name="step"]');
const inputAmountRef = document.querySelector('[name="amount"]');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const delay = parseInt(inputDelayRef.value);
  const step = parseInt(inputStepRef.value);
  const amount = parseInt(inputAmountRef.value);
  let currentDelay = delay;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    currentDelay += step;
  }
  e.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}
