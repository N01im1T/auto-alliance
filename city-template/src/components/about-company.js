import Glide from "@glidejs/glide";

const aboutCompany = () => {
  const bullets = document.querySelectorAll(".glide-bullet-dark");

  function updateActiveBullet(index) {
    bullets.forEach((bullet, i) => {
      if (i === index) {
        bullet.classList.add("active");
      } else {
        bullet.classList.remove("active");
      }
    });
  }

  const aboutCompanySlider = new Glide(".about-company-awards-glide", {
    type: "slider",
    startAt: 0,
    focusAt: "center",
    perView: 1,
  });

  aboutCompanySlider.mount();

  aboutCompanySlider.on("run.after", () => {
    const activeIndex = aboutCompanySlider.index;
    updateActiveBullet(activeIndex);
  });

  bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      aboutCompanySlider.go(`=${index}`);
      updateActiveBullet(index);
    });
  });

  updateActiveBullet(aboutCompanySlider.index);
};

export default aboutCompany;