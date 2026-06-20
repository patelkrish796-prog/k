
// Contact Form

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Thank you for your enquiry. Our team will contact you shortly."
    );

    this.reset();

});

// Navbar Background Change

window.addEventListener("scroll", function(){

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(15,40,30,0.95)";

    }
    else{

        navbar.style.background =
        "rgba(15,40,30,0.85)";

    }

});

// Fade In Animation

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document
.querySelectorAll("section")
.forEach((section)=>{

    section.classList.add("hidden");

    observer.observe(section);

});

