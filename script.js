document.getElementById('heads').onclick = function () {
  flip('heads');
};

document.getElementById('tails').onclick = function () {
  flip('tails');
};

function flip(choice) {
  let randomNumber = Math.random();

  let result;
  if (randomNumber < 0.5) {
    result = 'heads';
  } else {
    result = 'tails';
  }
  document.getElementById('result').textContent = 'Coin landed on: ' + result;
  let message;
  if (choice === result) {
    message = 'You win!';
    color = 'green';
  } else {
    message = 'You lose!';
    color = 'red';
  }

  const outcomeElement = document.getElementById('outcome');
  outcomeElement.textContent = message;
  outcomeElement.style.color = color;
}
