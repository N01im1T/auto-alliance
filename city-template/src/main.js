import "../src/styles/main.css";

import header from "./components/header.js";
import transport from "./components/transport.js";
import additionalServices from "./components/additional-services.js";
import aboutCompany from "./components/about-company.js";
import footer from "./components/footer.js";
import buttons from "./components/buttons.js";

document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  header();
  transport();
  aboutCompany();
  additionalServices();
  footer();
  buttons();
});
