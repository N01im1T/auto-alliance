import "../src/styles/main.css";

import header from "./components/header.js";
import transport from "./components/transport.js";
import footer from "./components/footer.js";
import buttons from "./components/buttons.js";

document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  header();
  transport();
  footer();
  buttons();
});
