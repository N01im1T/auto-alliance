import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.css";

const transport = () => {
  const buttons = document.querySelectorAll(".btn-control");

  function updateActiveButton(index) {
      buttons.forEach((button, i) => {
          if (i === index) {
              button.classList.add("active");
          } else {
              button.classList.remove("active");
          }
      });
  };

  const transportSlider = new Glide(".transport-glide", {
    type: "slider",
    startAt: 0,
    focusAt: "center",
    perView: 1,
  });

  transportSlider.mount();

  transportSlider.on("run.after", () => {
      const activeIndex = transportSlider.index;
      updateActiveButton(activeIndex);
  });

  buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
          updateActiveButton(index);
      });
  });

  updateActiveButton(transportSlider.index);
};

export default transport;