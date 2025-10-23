// ===== Smooth Scrolling =====
document.querySelectorAll('.smoothscroll').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.hash);
    if(target){
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Sticky Navigation =====
const nav = document.querySelector('.main_nav');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

// ===== Quote/Testimonial Fade Loop =====
const quotes = document.querySelectorAll('.quoteLoop .quote');
let currentQuote = 0;

function showQuote(index){
  quotes.forEach((q,i) => {
    q.style.display = (i === index) ? 'block' : 'none';
  });
}

showQuote(currentQuote);

setInterval(() => {
  currentQuote = (currentQuote + 1) % quotes.length;
  showQuote(currentQuote);
}, 4000);

// ===== Mobile Toggle =====
const mobileToggle = document.querySelector('.mobile-toggle');
const navUl = document.querySelector('.main_nav nav ul');

mobileToggle.addEventListener('click', () => {
  navUl.classList.toggle('open');
});
