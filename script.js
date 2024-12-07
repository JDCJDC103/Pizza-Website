document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderform");
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const emailInput = document.getElementById("email-address");
  const deliveryAddressInput = document.getElementById("delivery-address");
  const zipcodeInput = document.getElementById("zipcode");
  const pizzaCheckboxes = document.querySelectorAll('input[name="pizza[]"]');
  const drinkCheckboxes = document.querySelectorAll('input[name="drink[]"]');

  form.addEventListener("submit", function (event) {
    // store error messages with an array
    const errors = [];

    // Validation for first name
    if (firstNameInput.value.length === 0) {
      errors.push("First name is required.");
    }

    // Validation for last name
    if (lastNameInput.value.length === 0) {
      errors.push("Last name is required.");
    }

    // Validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.length === 0 || !emailRegex.test(emailInput.value)) {
      errors.push("Please enter a valid email address.");
    }

    // Validation for delivery
    if (deliveryAddressInput.value.length === 0) {
      errors.push("Delivery address is required.");
    }

    // Validation for zipcode
    const zipcodeRegex = /^\d{5}$/;
    if (zipcodeInput.value.length !== 5 || !zipcodeRegex.test(zipcodeInput.value)) {
      errors.push("Please enter a valid 5-digit zipcode.");
    }

    // checked checkboxes from array
    const pizzaSelected = Array.from(pizzaCheckboxes).some(checkbox => checkbox.checked);
    const drinkSelected = Array.from(drinkCheckboxes).some(checkbox => checkbox.checked);

    // If nothing is selected for either pizza or a drink, push errors and give an error message
    if (!pizzaSelected && !drinkSelected) {
      errors.push("Please select at least one item to order.");
    }

    // If there are errors, prevent form submission and show them
    if (errors.length > 0) {
      event.preventDefault();
      alert(errors.join("\n"));
    }
  });
});