

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


