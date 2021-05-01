import 'normalize.css'
import './sass/main.sass'
// import './sass/modal.sass'

import './js/metriks/googleMetrika'
import './js/metriks/yandexMetrika'
import modal from './js/modal'

// import Swiper from 'swiper/bundle'
// import 'swiper/swiper-bundle.css'

// const $ = {}
// window.$ = {}
// $.modal = modal

// window.m = modal()

// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpoint = window.matchMedia( '(min-width: 768px)' );
// keep track of swiper instances to destroy later
let fywaySwiper;

const breakpointChecker = function() {
    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {
        // clean up old instances and inline styles when available
        if ( fywaySwiper !== undefined ) fywaySwiper.destroy( true, true );
        // or/and do nothing
        return;
        // else if a small viewport and single column layout needed
    } else if ( breakpoint.matches === false ) {
        // fire small viewport version of swiper
        return enableSwiper();
    }
};

const enableSwiper = function() {
    fywaySwiper = new Swiper('.swiper-container.fyway__swiper-container', {
        spaceBetween: 16,
        // freeMode: true,
        // slidesPerView: 'auto',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        // lazy: true,
        navigation: {
            nextEl: '.swiper-button-next.fyway__swiper-button-next',
            prevEl: '.swiper-button-prev.fyway__swiper-button-prev',
        }
    })
};

// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();



const trainersSwiper = new Swiper('.swiper-container.trainers__swiper-container', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    // lazy: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next.trainers__swiper-button-next',
        prevEl: '.swiper-button-prev.trainers__swiper-button-prev'
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 31
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 39
        }
    }
})
