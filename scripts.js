console.log('loaded scripts');

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const WORDS = ['GAB'];
const selectedWord = WORDS[0];

let guessedLetters = [];
let incorrectGuesses = 0;

$(document).ready(() => {
  // create buttons for all letters
  for (letter of LETTERS) {
    $('#letters').append(
      `<button id="letter-${letter}" onclick='guessLetter("${letter}")'>${letter}</button>`
    );
  }

  $('#word').text(generateWord(selectedWord, guessedLetters));
});

function generateWord(word, guesses) {
  let result = word.split('');

  result = result.map((letter) => (guesses.includes(letter) ? letter : ' '));

  return `${result.join(' ')}`;
}

function guessLetter(letter) {
  if (!guessedLetters.includes(letter)) {
    $(`#letter-${letter}`).toggleClass('guessed');
    guessedLetters.push(letter);
    $('#word').text(generateWord(selectedWord, guessedLetters));
    
    // was it an incorrect guess?
    if (!selectedWord.includes(letter)) {
      incorrectGuesses++
      $('#hangman').attr('src', `images/${incorrectGuesses}.jpg`)
    }
  }
}
