var tl = gsap.timeline();
tl.from(".header a",{
    y:-200,
    duration:1,
    // stagger:0.1,
    delay:0.5,
    ease:"power2.out"

})
gsap.from("#home .profile-img",{
    x:-200,
    duration:2,
    delay:0.2,
    opacity:0,
    scrollTrigger:{
        trigger:"#home .profile-img",
        scroller:"body",
        start:"top 80%",
        toggleActions: "play none none none"
    }
    
})
tl.from("#home h1",{
    y:100,
    duration:1,
    // delay:0.1,
    opacity:0,

    
})
tl.from("#home h3",{
    y:100,
    duration:1,
    
    opacity:0,
  
    
})
tl.from("#home p",{
    y:100,
    duration:1,
    opacity:0,
  
    
})

gsap.from("#home .home-content",{
    x:200,
    duration:1,
    delay:0.2,
    opacity:0,
        scrollTrigger:{
        trigger:"#home .home-content",
        scroller:"body",
        start:"top 50%",
        toggleActions: "play none none none"
    }
})

gsap.from("#about .about-content",{
    x:-200,
    duration:1,
    delay:0.2,
    opacity:0,
       scrollTrigger:{
        trigger:"#about .about-content",
        scroller:"body",
        start:"top 80%",
        toggleActions: "play none none none"
    }
})
gsap.from("#about .about-img",{
    x:200,
    duration:1,
    delay:0.2,
    opacity:0,
       scrollTrigger:{
        trigger:"#about .about-content",
        scroller:"body",
        start:"top 80%",
        toggleActions: "play none none none"
    }
})



gsap.from("#skills .frontend",{
    y:200,
    duration:0.6,
    delay:0.2,
    opacity:0,
     scrollTrigger:{
        trigger:"#skills .frontend",
        scroller:"body",
        start:"top 80%",
        toggleActions: "play none none none"
    }
})

gsap.from("#project .project-cards",{
    y:200,
    duration:1,
    delay:0.2,
    opacity:0
})

gsap.from("#contact .social-box",{
    x:-200,
    duration:1,
    delay:0.2,
    opacity:0
})
gsap.from("#contact .contact-box",{
    x:200,
    duration:1,
    delay:0.2,
    opacity:0
})


const words = ["Developer", "Software Engineer", "Student", "Coder"];
const speed = 150; // typing speed in ms
const pause = 1500; // pause before backspacing
const backspaceSpeed = 100; // backspacing speed in ms

let wordIndex = 0;
let charIndex = 0;
let typing = true;

const typewriterElement = document.getElementById("typewriter");

function type() {
  if (typing) {
    if (charIndex < words[wordIndex].length) {
      typewriterElement.innerHTML += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, speed);
    } else {
      typing = false;
      setTimeout(type, pause);
    }
  } else {
    if (charIndex > 0) {
      typewriterElement.innerHTML = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, backspaceSpeed);
    } else {
      typing = true;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, speed);
    }
  }
}

window.onload = function() {
  typewriterElement.innerHTML = "";
  type();
};

// svg effet

let path = "M 10 100 Q 500 100 980 100"
let finalPath = "M 10 100 Q 500 100 980 100"

let svgLine =  document.querySelector(".svg-line")

svgLine.addEventListener("mousemove",function(e){
    path = `M 10 100 Q ${e.x} ${e.y} 980 100`

    gsap.to("svg path",{
        attr: {d: path},
        duration:0.4,
        ease:"power3.out"
    })
})

svgLine.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.3,
        ease:"elastic.out(1,0,2)"
    })
})



// Back to top button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    gsap.to(window, { duration: 0.8, scrollTo: { y: 0 }, ease: "power2.out" });
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close menu when a nav link is clicked
const navBtns = document.querySelectorAll('.nav-btn');
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});




