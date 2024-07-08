document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });

  var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000, // Set the scroll speed in milliseconds
  speedAsDuration: true // Use the scroll speed as the duration
});

ScrollReveal({
  reset: true,
  distance:'60px',
  duration: 2500,
  delay:400
});
ScrollReveal().reveal('#footer',{delay: 600, origin:'bottom'});
