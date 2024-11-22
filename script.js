document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const dropdowns = document.querySelectorAll('.has-dropdown');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('nav--visible');
        navToggle.classList.toggle('nav-toggle--active');
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('show-sub-nav');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
            nav.classList.remove('nav--visible');
            navToggle.classList.remove('nav-toggle--active');
        }
    });
});
