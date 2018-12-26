 $(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    arrows: false,
    infinity: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1144,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },]
  });
});

const filterButton = document.getElementsByClassName('filter-button');
const filterBlock = document.getElementsByClassName('filterBlock');
const journeyButton = document.getElementById('journey-button');
const travelersButton = document.getElementById('travelers-button');
const guideButton = document.getElementById('guide-button');
const journeyBlocks = document.getElementsByClassName('journey-block');
const travelersBlocks = document.getElementsByClassName('travelers-block');
const guideBlocks = document.getElementsByClassName('guide-block');

const filter = () => {
  let isJourneyActive = journeyButton.classList.contains('active');
  let isTravelersActive = travelersButton.classList.contains('active');
  let isGuideActive = guideButton.classList.contains('active');

  if (isJourneyActive && !isTravelersActive && !isGuideActive) {
    for (let i = 0; i < journeyBlocks.length; i += 1) {
      journeyBlocks[i].classList.remove('hidden');
    }
    for (let i = 0; i < travelersBlocks.length; i += 1) {
      travelersBlocks[i].classList.add('hidden');
    }
    for (let i = 0; i < guideBlocks.length; i += 1) {
      guideBlocks[i].classList.add('hidden');
    }
  }
  
  if (isJourneyActive && isTravelersActive && !isGuideActive) {
    for (let i = 0; i < journeyBlocks.length; i += 1) {
      journeyBlocks[i].classList.remove('hidden');
    }
    for (let i = 0; i < travelersBlocks.length; i += 1) {
      travelersBlocks[i].classList.remove('hidden');
    }
    for (let i = 0; i < guideBlocks.length; i += 1) {
      guideBlocks[i].classList.add('hidden');
    }
  }

  if (isJourneyActive && isTravelersActive && isGuideActive) {
    for (let i = 0; i < journeyBlocks.length; i += 1) {
      journeyBlocks[i].classList.remove('hidden');
    }
    for (let i = 0; i < travelersBlocks.length; i += 1) {
      travelersBlocks[i].classList.remove('hidden');
    }
    for (let i = 0; i < guideBlocks.length; i += 1) {
      guideBlocks[i].classList.remove('hidden');
    }
  }

  if (!isJourneyActive && !isTravelersActive && isGuideActive) {
    for (let i = 0; i < journeyBlocks.length; i += 1) {
      journeyBlocks[i].classList.add('hidden');
    }
    for (let i = 0; i < travelersBlocks.length; i += 1) {
      travelersBlocks[i].classList.add('hidden');
    }
    for (let i = 0; i < guideBlocks.length; i += 1) {
      guideBlocks[i].classList.remove('hidden');
    }
  }

  if (!isJourneyActive && isTravelersActive && !isGuideActive) {
    for (let i = 0; i < journeyBlocks.length; i += 1) {
      journeyBlocks[i].classList.add('hidden');
    }
    for (let i = 0; i < travelersBlocks.length; i += 1) {
      travelersBlocks[i].classList.remove('hidden');
    }
    for (let i = 0; i < guideBlocks.length; i += 1) {
      guideBlocks[i].classList.add('hidden');
    }
  }

  if (!isJourneyActive && isTravelersActive && isGuideActive) {
    for (let i = 0; i < journeyBlocks.length; i += 1) {
      journeyBlocks[i].classList.add('hidden');
    }
    for (let i = 0; i < travelersBlocks.length; i += 1) {
      travelersBlocks[i].classList.remove('hidden');
    }
    for (let i = 0; i < guideBlocks.length; i += 1) {
      guideBlocks[i].classList.remove('hidden');
    }
  }

  if (isJourneyActive && !isTravelersActive && isGuideActive) {
    for (let i = 0; i < journeyBlocks.length; i += 1) {
      journeyBlocks[i].classList.remove('hidden');
    }
    for (let i = 0; i < travelersBlocks.length; i += 1) {
      travelersBlocks[i].classList.add('hidden');
    }
    for (let i = 0; i < guideBlocks.length; i += 1) {
      guideBlocks[i].classList.remove('hidden');
    }
  }

  if (!isJourneyActive && !isTravelersActive && !isGuideActive) {
    for (let i = 0; i < journeyBlocks.length; i += 1) {
      journeyBlocks[i].classList.remove('hidden');
    }
    for (let i = 0; i < travelersBlocks.length; i += 1) {
      travelersBlocks[i].classList.remove('hidden');
    }
    for (let i = 0; i < guideBlocks.length; i += 1) {
      guideBlocks[i].classList.remove('hidden');
    }
  }
}



journeyButton.onclick = () => {
  journeyButton.classList.toggle('active');
  filter();
}

travelersButton.onclick = () => {
  travelersButton.classList.toggle('active');
  filter();
}

guideButton.onclick = () => {
  guideButton.classList.toggle('active');
  filter();
}


filterButton.onchange = function () {
  console.log(this.value);
  var items = items_el.getElementsByClassName('item');
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains(this.value)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
};