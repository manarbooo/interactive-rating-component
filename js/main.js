const form = document.querySelector('.rateForm');
const inputs = document.querySelectorAll('.inputValue');
const submitBtn = document.querySelector('.submitBtn');

let rating = '';


inputs.forEach(input => {
  input.addEventListener('click', (event) => {
    // Remove active class from all inputs
    inputs.forEach(inp => inp.classList.remove('active'));

   
    event.target.classList.add('active');

    rating = event.target.value;
  });
});

// Add event listener to the form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  localStorage.setItem('rating', rating);
  window.location.href = 'thankyou.html';
});

