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

document.addEventListener("DOMContentLoaded", function() {
    const learnMoreButton = document.querySelector('.learn-more-button');
    const paragraphs = document.querySelectorAll('.paragraphmeowwwww');
    const buttonArrowIcon = document.querySelector('.arrow-icon');

    // Initially hide paragraphs
    paragraphs.forEach(paragraph => {
        paragraph.style.display = 'none';
    });

    learnMoreButton.addEventListener('click', function() {
        paragraphs.forEach(paragraph => {
            if (paragraph.style.display === 'none') {
                paragraph.style.display = 'block';
                learnMoreButton.querySelector('.button-text').textContent = 'Show Less';
                buttonArrowIcon.classList.remove('fa-arrow-down');
                buttonArrowIcon.classList.add('fa-arrow-up');
            } else {
                paragraph.style.display = 'none';
                learnMoreButton.querySelector('.button-text').textContent = 'Learn More';
                buttonArrowIcon.classList.remove('fa-arrow-up');
                buttonArrowIcon.classList.add('fa-arrow-down');
            }
        });
    });
});