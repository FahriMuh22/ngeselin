const guessSubmit = document.getElementById('guessSubmit');
const guessField = document.getElementById('guessField');
const message = document.querySelector('.message');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (userGuess === randomNumber) {
    message.textContent = `Selamat! Anda menebak angka dengan benar setelah ${attempts} percobaan.`;
    message.style.color = 'green';
    guessField.disabled = true;
    guessSubmit.disabled = true;
  } else if (userGuess > randomNumber) {
    message.textContent = 'Angka yang Anda tebak terlalu besar!';
    message.style.color = 'red';
  } else {
    message.textContent = 'Angka yang Anda tebak terlalu kecil!';
    message.style.color = 'red';
  }
  attempts++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);
