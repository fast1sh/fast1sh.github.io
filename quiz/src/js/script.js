const startButton = document.getElementById('button-start');
const steps = document.getElementsByClassName('step');
const mainBlock = document.getElementById('main-block');
let currentStep = 0;
let nextStep = 0;

const start = () => {
  steps[nextStep].classList.remove('hidden');
  nextStep += 1;
}

const next = () => {
  steps[currentStep].classList.add('hidden');
  steps[nextStep].classList.remove('hidden');
  currentStep += 1;
  nextStep += 1;

  mainBlock.classList.remove('hidden');

  if (currentStep === 6) {
    mainBlock.classList.add('hidden');
  }
}

const previous = () => {
  steps[currentStep].classList.add('hidden');
  steps[currentStep - 1].classList.remove('hidden');
  currentStep -= 1;
  nextStep -= 1;
}

const closeSlide = () => {
  steps[currentStep].classList.add('hidden');
  currentStep = 0;
  nextStep = 0;
}