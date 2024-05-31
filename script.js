

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


window.onload = function() {
    var userAgent = navigator.userAgent.toLowerCase();
    var isChrome = /chrome/.test(userAgent);
    var isFirefox = /firefox/.test(userAgent);
    var isIOS = /ipad|iphone|ipod/.test(userAgent);
    var isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
    var isIE = /msie|trident/.test(userAgent);

    var chromeVersion = isChrome && parseInt(userAgent.match(/chrome\/(\d+)/)[1]);
    var firefoxVersion = isFirefox && parseInt(userAgent.match(/firefox\/(\d+)/)[1]);
    var safariVersion = isSafari && parseInt(userAgent.match(/version\/(\d+)/)[1]);
    var iosVersion = isIOS && parseInt(userAgent.match(/os (\d+)_(\d+)/)[1]);

    if (isChrome && chromeVersion < 60) {
        alert("This page does not support your version of Chrome. Please upgrade to the latest version for an optimal experience.");
    }

    if (isFirefox && firefoxVersion < 60) {
        alert("This page does not support your version of Firefox. Please upgrade to the latest version for an optimal experience.");
    }

    if (isIOS && iosVersion < 12) {
        alert("This page does not support your version of iOS. Please upgrade to the latest version for an optimal experience.");
    }

    if (isSafari && safariVersion < 12) {
        alert("This page does not support your version of Safari. Please upgrade to the latest version for an optimal experience.");
    }

    if (isFirefox && userAgent.indexOf('firefox esr') !== -1) {
        alert("This page does not support Firefox ESR. Please use the regular version of Firefox for an optimal experience.");
    }

    if (isIE) {
        alert("This page does not support Internet Explorer. Please use a modern browser for an optimal experience.");
    }
};

// Function to scroll to top
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Function to toggle the visibility of the back to top button
function toggleBackToTopBtn() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (window.scrollY > 100) { // Show the button after scrolling down 100px
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
}

// Event listeners
window.addEventListener('scroll', toggleBackToTopBtn);
document.getElementById('backToTopBtn').addEventListener('click', function() {
    scrollToTop();
    this.blur(); // Remove focus after clicking
    this.classList.remove('back-to-top-btn:focus'); // Ensure focus style is removed
});