function applyCustomValidation() {
  const forms = document.querySelectorAll<HTMLFormElement>(".needs-validation");

  function validateForm(event: Event, form: HTMLFormElement) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  }

  forms.forEach((form: HTMLFormElement) => {
    form.addEventListener("submit", (event) => {
      validateForm(event, form);
    });
  });
}

// Call the function to apply custom validation
applyCustomValidation();
