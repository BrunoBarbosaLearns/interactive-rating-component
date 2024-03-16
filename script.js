"use strict";

// Selecting necessary elements
const ratingButtons = document.querySelectorAll(".button");
const submitButton = document.querySelector(".submit-button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

let selectedRating = null; // Variable to store the selected rating

// Function to handle rating button clicks
const handleRatingClick = function (event) {
  const clickedButton = event.target;

  // Removes active class from all rating buttons
  ratingButtons.forEach(function (button) {
    if (button !== clickedButton) {
      button.classList.remove("active");
    }
  });

  // Adds active class to the clicked rating button
  clickedButton.classList.add("active");

  // Stores the selected rating
  selectedRating = clickedButton.textContent;
};

// Attaches event listeners to each rating button
ratingButtons.forEach(function (button) {
  button.addEventListener("click", handleRatingClick);
});

// Event listener for submit button
submitButton.addEventListener("click", function () {
  // Checks if a rating is selected before submitting
  if (!selectedRating) {
    // If no rating is selected, prevent submission
    console.log("Please select a rating before submitting.");
    return;
  }

  // Updates the modal text to display the selected rating
  const modalButtonText = `You selected ${selectedRating} out of 5`;
  const modalButton = document.querySelector(".modal-button");
  modalButton.textContent = modalButtonText;

  // Submit functionality goes here
  console.log("Rating submitted successfully! Rating:", selectedRating);

  // Opens the modal and overlay after submitting
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
