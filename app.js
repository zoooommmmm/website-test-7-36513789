document.addEventListener('DOMContentLoaded', () => {
    // Loading screen animation
    const loadingScreen = document.getElementById('loading-screen');
    const progress = document.querySelector('.progress');

    progress.style.width = '100%';
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 300);
    }, 2000);

    // Typing animation
    const text = "Hi, I'm Dhars";
    const typingText = document.querySelector('.typing-text');
    typingText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 2300);

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        setTimeout(() => {
            submitButton.textContent = 'Message Sent!';
            contactForm.reset();
            setTimeout(() => {
                submitButton.textContent = 'Send Message';
                submitButton.disabled = false;
            }, 2000);
        }, 1500);
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .skill-badge').forEach(el => {
        observer.observe(el);
    });
});