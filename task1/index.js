const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let timerInterval = null;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let remaining = seconds;

    drawTimer(remaining);

    timerInterval = setInterval(() => {
      remaining -= 1;
      drawTimer(remaining);

      if (remaining < 0) {
        remaining = 0;
        clearInterval(timerInterval);
      }
    }, 1000);

  };
};

const drawTimer = (remaining) => {
  remaining = remaining > 0 ? remaining : 0;

  const hoursRaw = Math.floor(remaining / 60 / 60 % 60);
  const minutesRaw = Math.floor(remaining / 60 % 60);
  const secondsRaw = Math.floor(remaining % 60);

  const hours = ('0' + hoursRaw).slice(-2);
  const minutes = ('0' + minutesRaw).slice(-2);
  const seconds = ('0' + secondsRaw).slice(-2);

  timerEl.innerHTML = `${hours}:${minutes}:${seconds}`;
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  e.target.value = e.target.value.replace(/\D/, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  clearInterval(timerInterval);
  animateTimer(seconds);

  inputEl.value = '';
});
