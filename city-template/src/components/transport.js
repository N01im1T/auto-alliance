import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.css";

const transport = () => {
  const buttons = document.querySelectorAll(".btn-control");

  // Controls slider below 800px
  var position = 0;
  var itemsToShow = getSlidesToShow();
  const slidesToScroll = 1;
  const sliderWrapper = document.querySelector('.controls-wrapper');
  const sliderContainer = document.querySelector('.controls-container');
  const btnPrev = document.querySelector('.left-arrow');
  const btnNext = document.querySelector('.right-arrow');
  const items = document.querySelectorAll('.btn-transport-control');
  const itemsCount = buttons.length;
  const itemWidth = sliderWrapper.clientWidth / itemsToShow;
  const movePosition = slidesToScroll * itemWidth;
  var isSmallScreen = false;


  function updateActiveButton(index) {
    buttons.forEach((button, i) => {
      button.classList.toggle("active", i === index);
    });
  };

  const transportSlider = new Glide(".transport-glide", {
    type: "slider",
    startAt: 0,
    focusAt: "center",
    perView: 1,
  }).mount();

  transportSlider.on("run.after", () => {
    const activeIndex = transportSlider.index;
    updateActiveButton(activeIndex);
  });

  function getSlidesToShow() {
    if (!items || items.length === 0) return 1;
  
    const breakpoints = [
      { width: 800, slides: 1 }
    ];
  
    return breakpoints.find(breakpoint => window.innerWidth <= breakpoint.width)?.slides || items.length;
  }

  btnPrev.addEventListener('click', () => transportSlider.go('<'));
  btnNext.addEventListener('click', () => transportSlider.go('>'));

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      updateActiveButton(index);
    });
  });

  function handleResize() {
    if (window.innerWidth <= 800) {
      if (!isSmallScreen) {
        isSmallScreen = true;
        enableSmallScreenSlider();
      }
    } else {
      if (isSmallScreen) {
        isSmallScreen = false;
        resetSlider();
      }
    }
  }

  function enableSmallScreenSlider() {
    items.forEach((item) => {
      item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener('click', handleNextClick);
    btnPrev.addEventListener('click', handlePrevClick);

    setPosition();
    checkBtns();
  }

  function resetSlider() {
    items.forEach((item) => {
        item.style.minWidth = '';
    });
    position = 0;
    setPosition();

    btnNext.removeEventListener('click', handleNextClick);
    btnPrev.removeEventListener('click', handlePrevClick);

    btnPrev.disabled = false;
    btnNext.disabled = false;
  }

  function handleNextClick() {
    const itemsLeft = itemsCount - (Math.abs(position) + itemsToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  }

  function handlePrevClick() {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  }

  function setPosition() {
    sliderContainer.style.transform = `translateX(${position}px)`;
  }

  function checkBtns() {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - itemsToShow) * itemWidth;
  }

  handleResize();

  window.addEventListener('resize', () => {
    handleResize();
  });
  
  updateActiveButton(transportSlider.index);
};

export default transport;