let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber'),
  ADD = document.getElementById('add'),
  SUB = document.getElementById('sub');

function increment() {
  if (count === 10) return;

  count++;
  if (count === 0)
    CURRENT_NUMBER.style.color = 'black';

  CURRENT_NUMBER.innerHTML = count;
}
ADD.addEventListener('click', increment);

function decrement() {
  if (count < 0) return;

  count--;
  if (count === -1)
    CURRENT_NUMBER.style.color = 'red';

  CURRENT_NUMBER.innerHTML = count;
}
SUB.addEventListener('click', decrement);