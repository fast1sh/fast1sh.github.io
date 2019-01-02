let yourScore = 0;
let computerScore = 0;
const youText = 'you'.fontsize(3).sup();
const computerText = 'computer'.fontsize(3).sup();
const yourScore_span = document.getElementById('your-score');
const computerScore_span = document.getElementById('computer-score');
const result_span = document.getElementById('result-text');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const you_div = document.getElementById('you');
const computer_div = document.getElementById('computer');

rock_div.addEventListener('click', () => game('r'));
paper_div.addEventListener('click', () => game('p'));
scissors_div.addEventListener('click', () => game('s'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const choice = ['r', 'p', 's'];
  return choice[randomNumber];
}

const getChoiceAsWord = (choice) => {
  if (choice === 'r') return 'Rock';
  if (choice === 'p') return 'Paper';
  return 'Scissors';
}

const win = (yourChoice, computerChoice) => {
  const yourChoiceWord = getChoiceAsWord(yourChoice);
  const computerChoiceWord = getChoiceAsWord(computerChoice);
  yourScore += 1;
  yourScore_span.innerHTML = yourScore;
  result_span.innerHTML = `${yourChoiceWord}${youText} beats ${computerChoiceWord}${computerText}. You won!`;
  you_div.classList.add('green');
  setTimeout(() => {
    you_div.classList.remove('green')
  }, 300);
}

const lose = (yourChoice, computerChoice) => {
  const yourChoiceWord = getChoiceAsWord(yourChoice);
  const computerChoiceWord = getChoiceAsWord(computerChoice);
  computerScore += 1;
  computerScore_span.innerHTML = computerScore;
  result_span.innerHTML = `${yourChoiceWord}${youText} loses to ${computerChoiceWord}${computerText}. You lost!`;
  computer_div.classList.add('red');
  setTimeout(() => {
    computer_div.classList.remove('red')
  }, 300);
}

const draw = (yourChoice, computerChoice) => {
  const yourChoiceWord = getChoiceAsWord(yourChoice);
  const computerChoiceWord = getChoiceAsWord(computerChoice);
  result_span.innerHTML = `${yourChoiceWord}${youText} equals to ${computerChoiceWord}${computerText}. It\`s a draw!`;
  you_div.classList.add('gray');
  setTimeout(() => {
    you_div.classList.remove('gray')
  }, 300);
  computer_div.classList.add('gray');
  setTimeout(() => {
    computer_div.classList.remove('gray')
  }, 300);
}

const game = (yourChoice) => {
  const computerChoice = getComputerChoice();

  switch (yourChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(yourChoice, computerChoice);
      break;
    
    case 'rp':
    case 'ps':
    case 'sr':
      lose(yourChoice, computerChoice);
      break;

    case 'rr':
    case 'pp':
    case 'ss':
      draw(yourChoice, computerChoice);
      break;
  }

}