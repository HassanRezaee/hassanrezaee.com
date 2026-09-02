(function () {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);

    const toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.addEventListener('click', function () {
            const newTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    if (!menuBtn || !navLinks) return;

    function setMenuOpen(open) {
        navLinks.classList.toggle('nav__links--open', open);
        menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    menuBtn.addEventListener('click', function () {
        setMenuOpen(!navLinks.classList.contains('nav__links--open'));
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            setMenuOpen(false);
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && navLinks.classList.contains('nav__links--open')) {
            setMenuOpen(false);
            menuBtn.focus();
        }
    });
})();
