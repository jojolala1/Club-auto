/**
 * Pour mettre en "active" le lien actuel 
 */

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(nav => nav.classList.remove('active-white'));
            this.classList.add('active-white');
        });
    });
});