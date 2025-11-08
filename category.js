document.addEventListener("DOMContentLoaded", () => {
    // Category click scroll to description
    const categories = document.querySelectorAll('.category');
    categories.forEach(cat => {
        cat.addEventListener('click', () => {
            const id = cat.id.split('-')[1];
            const desc = document.getElementById(`description-${id}`);
            if (desc) desc.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });

    // Start button redirect to website
    const startButtons = document.querySelectorAll('.start-btn');
    startButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.getAttribute('data-url');
            if (url) window.open(url, '_blank'); // Opens the site in a new tab
        });
    });

    // Appear animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.description-item').forEach(item => observer.observe(item));

    // Hover Zoom is handled by CSS
});
