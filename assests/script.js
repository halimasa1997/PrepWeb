/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

if (menuToggle && navbar) {

    menuToggle.addEventListener('click', () => {

        const isActive = navbar.classList.toggle('active');

        menuToggle.setAttribute(
            'aria-expanded',
            isActive
        );

    });


    navbar.querySelectorAll('a').forEach((link) => {

        link.addEventListener('click', () => {

            navbar.classList.remove('active');

            menuToggle.setAttribute(
                'aria-expanded',
                'false'
            );

        });

    });

}


/* =====================================================
   TEAM CAROUSEL
===================================================== */

const teamScroll = document.getElementById('teamScroll');

const teamNext = document.getElementById('teamNext');

const teamPrev = document.getElementById('teamPrev');


if (teamScroll && teamNext && teamPrev) {

    const scrollAmount = 290;


    /* التالي */

    teamNext.addEventListener('click', () => {

        teamScroll.scrollBy({

            left: -scrollAmount,

            behavior: 'smooth'

        });

    });


    /* السابق */

    teamPrev.addEventListener('click', () => {

        teamScroll.scrollBy({

            left: scrollAmount,

            behavior: 'smooth'

        });

    });

}