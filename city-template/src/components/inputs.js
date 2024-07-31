const inputs = (container = document) => {
  container.querySelectorAll(".styled-input").forEach((input) => {
    if (input.id !== "message") {
      input.addEventListener("input", () => {
        const label = input.nextElementSibling;
        if (input.value.trim() === "") {
          label.textContent = label.getAttribute("data-original-text");
          return;
        }

        if (input.validity.valid) {
          input.classList.remove("invalid");
          label.textContent = label.getAttribute("data-original-text");
        } else {
          input.classList.add("invalid");
          label.textContent = label.getAttribute("data-error-message");
        }
      });
    }
  });

  container.querySelectorAll('input[type="tel"]').forEach(function (input) {
    input.addEventListener("input", function (e) {
      this.value = this.value.replace(/\D/, "");
    });

    input.addEventListener("paste", function (e) {
      e.preventDefault();
    });

    input.addEventListener("drop", function (e) {
      e.preventDefault();
    });
  });
};

export default inputs;