import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.css";

const transport = () => {
  const transportSlider = new Glide('.glide', {
    type: 'slider',
    startAt: 0,
    focusAt: 'center',
    perView: 1,
  });

  transportSlider.mount();
};

export default transport;