// Fading out the loading page with a faster transition
gsap.fromTo(".loading-page", 
    { opacity: 1 }, 
    { 
        opacity: 0, 
        duration: 1, 
        delay: 1.5,     // Reduced delay to 3 seconds
        y: -500,       // The horizontal movement stays the same
        ease: "power2.inOut"
    }
);

// Animating the logo's appearance with a faster transition
gsap.fromTo(".logo-name", 
    { 
        y: 50, 
        opacity: 0 
    }, 
    { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        delay: 0.5 
    }
);

gsap.to(".navbar", {
    opacity: 1, // Make the navbar visible
    pointerEvents: "auto", // Allow interaction with navbar
    duration: 1,
    delay: 7, // Delay to show after SVG animation completes
    ease: "power2.out"
  });



  window.addEventListener('resize', function () {
    if (window.innerWidth > 992) {
        dropDownMenu.classList.remove('open'); // Hilangkan dropdown jika layar > 992px
    }
  });

  window.onload = function() {
    // Delay the appearance of the navbar after the loading page is hidden
    setTimeout(function() {
        document.querySelector('.navbar').style.opacity = 1;
        document.querySelector('.navbar').style.pointerEvents = 'auto'; // Enable interaction
    }, 3000); // Adjust the delay time to match the length of the loading animation
};

let items = document.querySelectorAll('.scroll .speed');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 3;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }