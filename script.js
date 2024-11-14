// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations for sections (fade-in effect)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // stop observing once animation is triggered
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Skill bars animation
const skillBars = document.querySelectorAll('.skills');
window.addEventListener('scroll', () => {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (barPosition < screenPosition) {
            bar.style.width = bar.dataset.skill + '%';
        }
    });
});

// Simple form validation
document.getElementById('contact').addEventListener('submit', function(event) {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('LastName').value;
    const message = document.getElementById('message').value;

    if (!firstName || !lastName || !message) {
        alert("Please fill in all the fields!");
        event.preventDefault(); // prevent form submission
    }
});

