
// Retrieve the rating from localStorage
const rating = localStorage.getItem('rating');

// Select the element where the rating will be displayed
const ratingDisplay = document.getElementById('user-rating');

// Display the rating
if (rating) {
  ratingDisplay.textContent = rating;
} else {
  ratingDisplay.textContent = 'No rating selected';
}
