// Mobile navigation menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');

    const isOpen = nav.classList.contains('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
    menuBtn.textContent = isOpen ? 'Close' : 'Menu';
});

// Close menu after clicking a navigation link
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.textContent = 'Menu';
    });
});

// Highlight active navigation link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Contact form
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || message === '') {
        formMsg.textContent = 'Please fill in all fields.';
        return;
    }

    formMsg.textContent = `Thank you, ${name}! Your message has been received.`;

    form.reset();
});
