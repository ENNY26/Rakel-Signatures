
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
  

  // Optional: Only include this script if you want to enhance the swiping functionality on desktop
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.categories-container');
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    container.scrollLeft = scrollLeft - walk;
  });
  
});
// Initialize SmoothScroll with the specified configuration options
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
ScrollReveal().reveal('.hero-content',{delay:500, origin:'left'});
ScrollReveal().reveal('#events',{delay: 600, origin:'bottom'});
ScrollReveal().reveal('#about-us ',{delay: 600, origin:''});
ScrollReveal().reveal('#features',{delay: 600, origin:'bottom'});
ScrollReveal().reveal('#product-categories ',{delay: 600, origin:'bottom'});
ScrollReveal().reveal('#reviews ',{delay: 600, origin:'bottom'});
ScrollReveal().reveal('#review-image ',{delay: 600, origin:'left'});
ScrollReveal().reveal('#reach-out',{delay: 600, origin:'bottom'});
ScrollReveal().reveal('#footer',{delay: 600, origin:'bottom'});
