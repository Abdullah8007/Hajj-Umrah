(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// FAQs Script
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;
        const isOpen = faqItem.classList.contains('open');
        
        // Close all other open faq-items
        document.querySelectorAll('.faq-item').forEach(faq => {
            faq.classList.remove('open');
        });
        
        // Toggle the clicked faq-item
        faqItem.classList.toggle('open', !isOpen);
        
        // Update icons
        document.querySelectorAll('.faq-item').forEach(faq => {
            const icon = faq.querySelector('.plus-icon');
            icon.textContent = faq.classList.contains('open') ? '-' : '+';
        });
    });
});