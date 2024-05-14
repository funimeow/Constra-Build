// Toggle the additional links sidebar
document.getElementById("additionalLinksBtn").addEventListener("click", function(event) {
    event.stopPropagation(); // Prevents the click event from propagating to the document
    const sidebar = document.getElementById("additionalLinksSidebar");
    sidebar.classList.toggle("active");
});

// Hide the sidebar when clicking outside of it
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("additionalLinksSidebar");
    if (!sidebar.contains(event.target) && event.target !== document.getElementById("additionalLinksBtn")) {
        sidebar.classList.remove("active");
    }
});

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