document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderform");
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const emailInput = document.getElementById("email-address");
  const deliveryAddressInput = document.getElementById("delivery-address");
  const zipcodeInput = document.getElementById("zipcode");
  const pizzaCheckboxes = document.querySelectorAll('input[name="pizza"]');
  const drinkCheckboxes = document.querySelectorAll('input[name="drink"]');

  form.addEventListener("submit", function (event) {
    // Initialize an array to store error messages
    const errors = [];

    // Validation for first name (must have at least 1 character)
    if (firstNameInput.value.length === 0) {
      errors.push("First name is required.");
    }

    // Validation for last name (must have at least 1 character)
    if (lastNameInput.value.length === 0) {
      errors.push("Last name is required.");
    }

    // Validation for email (must have at least 1 character and follow basic format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.length === 0 || !emailRegex.test(emailInput.value)) {
      errors.push("Please enter a valid email address.");
    }

    // Validation for delivery address (must have at least 1 character)
    if (deliveryAddressInput.value.length === 0) {
      errors.push("Delivery address is required.");
    }

    // Validation for zipcode (must have 5 characters)
    const zipcodeRegex = /^\d{5}$/;
    if (zipcodeInput.value.length !== 5 || !zipcodeRegex.test(zipcodeInput.value)) {
      errors.push("Please enter a valid 5-digit zipcode.");
    }

    const pizzaSelected = Array.from(pizzaCheckboxes).some(checkbox => checkbox.checked);
    const drinkSelected = Array.from(drinkCheckboxes).some(checkbox => checkbox.checked);

    if (!pizzaSelected && !drinkSelected) {
      errors.push("Please select at least one item to order.");
    }

    // If there are errors, prevent form submission and display them
    if (errors.length > 0) {
      event.preventDefault(); // Prevent form submission
      alert(errors.join("\n")); // Display error messages in the console
    }
  });
});