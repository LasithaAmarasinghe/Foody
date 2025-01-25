fetch('http://127.0.0.1:5000/submit-form', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
})

// Reserve Table Button
document.getElementById('reserveTableBtn').addEventListener('click', function () {
    alert('Thank you for reserving a table! We will contact you shortly.');
});

document.addEventListener('DOMContentLoaded', function () {
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name && email && message) {
                if (validateEmail(email)) {
                    fetch('http://127.0.0.1:5000/submit-form', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ name, email, message }),
                    })
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('responseMessage').textContent = data.message;
                        contactForm.reset();
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        document.getElementById('responseMessage').textContent = 'An error occurred. Please try again.';
                    });
                } else {
                    alert('Please enter a valid email address.');
                }
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
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
    }

    // Email Validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

// Initialize Slick Carousel for Testimonials
$(document).ready(function(){
    $('.testimonial-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // Add navigation arrows
        pauseOnHover: true, // Pause on hover
    });
});

// Initialize Slick Carousel for Special Offers
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