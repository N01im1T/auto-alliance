import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.css";

const additionalServices = () => {
  const bullets = document.querySelectorAll(".glide-bullet");

  function updateActiveBullet(index) {
    bullets.forEach((bullet, i) => {
          if (i === index) {
            bullet.classList.add("active");
          } else {
            bullet.classList.remove("active");
          }
      });
  };

  const additionalServicesSlider = new Glide(".additional-services-glide", {
    type: "slider",
    startAt: 0,
    focusAt: "center",
    perView: 1,
  });

  additionalServicesSlider.mount();

  additionalServicesSlider.on("run.after", () => {
    const activeIndex = additionalServicesSlider.index;
    updateActiveBullet(activeIndex);
  });

  bullets.forEach((button, index) => {
      button.addEventListener('click', () => {
          updateActiveBullet(index);
      });
  });

  updateActiveBullet(additionalServicesSlider.index);
};

export default additionalServices;