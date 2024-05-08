
    let lastScrollTop = 0;
    window.addEventListener("scroll", function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        currentScroll /= 0.8; 
        if (currentScroll > lastScrollTop) {
            
            document.querySelector(".navbar").classList.add("hidden"); 
        } else {
            
            document.querySelector(".navbar").classList.remove("hidden"); 
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
    }, false);
 