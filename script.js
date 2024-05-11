// Toggle the additional links sidebar
document.getElementById("additionalLinksBtn").addEventListener("click", function(event) {
    document.getElementById("additionalLinksSidebar").classList.toggle("active");
    event.stopPropagation(); // Prevents the click event from bubbling up to the document
});

// Hide the sidebar when clicking outside of it
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("additionalLinksSidebar");
    const sidebarBtn = document.getElementById("additionalLinksBtn");
    if (!sidebar.contains(event.target) && event.target !== sidebarBtn) {
        sidebar.classList.remove("active");
    }
});
