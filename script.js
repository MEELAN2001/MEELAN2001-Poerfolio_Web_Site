// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  
  // Change icon based on menu state
  if (mobileMenu.classList.contains('active')) {
    menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

// Close mobile menu when clicking a nav link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// Typing effect
const typingText = document.getElementById('typingText');
const text = "QA Engineer & Security Specialist";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing effect when page loads
window.addEventListener('load', typeWriter);

// Contact form handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    console.log({ name, email, subject, message });
    
    // Show success message (in a real app, you'd wait for server response)
    alert('Message sent successfully!');
    
    // Reset form
    contactForm.reset();
  });
}

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkills = () => {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
    if (isVisible) {
      const width = bar.getAttribute('style')?.match(/width: (\d+)%/)?.[1] || '0';
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.transition = 'width 1s ease-in-out';
        bar.style.width = `${width}%`;
      }, 100);
    }
  });
};

// Initial check for visible skill bars
window.addEventListener('load', animateSkills);
window.addEventListener('scroll', animateSkills);