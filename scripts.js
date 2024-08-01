document.addEventListener("DOMContentLoaded", function() {
    // Slider
    const slides = document.querySelector(".slides");
    let index = 0;
    setInterval(() => {
        index++;
        if (index >= slides.children.length) {
            index = 0;
        }
        slides.style.transform = `translateX(${-index * 100}%)`;
    }, 3000);

    // Form Validation
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const interest = document.getElementById("interest").value;
        
        if (!name || !email || !interest) {
            alert("Please fill out all fields.");
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});
