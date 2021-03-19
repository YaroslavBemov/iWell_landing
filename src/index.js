import 'normalize.css'
import './sass/main.sass'
// import './sass/modal.sass'

// import html from './index.html'

import './js/metriks/googleMetrika'
import './js/metriks/yandexMetrika'
import './js/careSlides'
import modal from './js/modal'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

// const $ = {}
// window.$ = {}
// $.modal = modal

// window.m = modal()

const fywaySwiper = new Swiper('.swiper-container.fyway__swiper-container', {
    spaceBetween: 16,
    navigation: {
        nextEl: '.swiper-button-next.fyway__swiper-button-next',
        prevEl: '.swiper-button-prev.fyway__swiper-button-prev',
    }
})
const trainersSwiper = new Swiper('.swiper-container.trainers__swiper-container', {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
        nextEl: '.swiper-button-next.trainers__swiper-button-next',
        prevEl: '.swiper-button-prev.trainers__swiper-button-prev'
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 39
        }
    }
})
