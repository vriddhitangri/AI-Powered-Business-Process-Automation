// Script to navigate to the next page
function goToNextPage() {
    window.location.href = 'login.html'; // Replace with the actual login page
  }
  
  // Optional: Handle carousel indicators
  const indicators = document.querySelectorAll('.indicator');
  let currentSlide = 0;
  
  setInterval(() => {
    indicators[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % indicators.length;
    indicators[currentSlide].classList.add('active');
  }, 3000); // Match this with the animation duration
  