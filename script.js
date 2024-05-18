

// Hide the navbar collapse when a link is clicked
document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", function() {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    });
});

document.getElementById("learn-more-button").addEventListener("click", function() {
    window.location.href = "services.html";
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var contactInfo = document.getElementById('contactInfo');
    if (window.scrollY > navbar.offsetHeight) {
        contactInfo.classList.remove('text-white');
    } else {
        contactInfo.classList.add('text-white');
    }
});
