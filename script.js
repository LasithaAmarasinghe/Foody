// Reserve Table Button
document.getElementById('reserveTableBtn').addEventListener('click', function () {
    alert('Thank you for reserving a table! We will contact you shortly.');
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        if (validateEmail(email)) {
            alert('Thank you for your message! We will get back to you soon.');
            document.getElementById('contactForm').reset(); // Clear the form
        } else {
            alert('Please enter a valid email address.');
        }
    } else {
        alert('Please fill out all fields.');
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize Slick Carousel
$(document).ready(function(){
    $('.offer-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // Add navigation arrows
        pauseOnHover: true, // Pause on hover
        responsive: [ // Responsive settings
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});