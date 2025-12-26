 const reveals = document.querySelectorAll('.reveal');
            function revealOnScroll() 
            {
                const triggerPoint = window.innerHeight * 0.85;
                reveals.forEach(el => {
                    const boxTop = el.getBoundingClientRect().top;
                    if (boxTop < triggerPoint) 
                    {
                        el.classList.add('active');
                    }
                });
            }
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();



  document.addEventListener("DOMContentLoaded", () => {
            const target = document.querySelector('.thirdpage');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.2
            });

            observer.observe(target);
        });


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');

    burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});


$(document).ready(function() {
    $('.contact-form').on('submit', function(e) {
        let isValid = true;

        $(this).find('input[required], textarea[required]').each(function() {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).css('border', '2px solid red'); 
            } else {
                $(this).css('border', '');
            }
        });

        if (!isValid) {
            e.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.querySelector('.fonth3 .button');
    const toast = document.getElementById('toast');

    if (!orderButton || !toast) return;

    orderButton.addEventListener('click', () => {
        const isMobile = window.innerWidth <= 600;

        if (isMobile) {
            const rect = orderButton.getBoundingClientRect();

            toast.style.position = 'absolute';
            toast.style.top = window.scrollY + rect.bottom + 10 + 'px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%)';
        } else {
            toast.style.position = 'fixed';
            toast.style.top = '20px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%)';
        }

        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    });
});