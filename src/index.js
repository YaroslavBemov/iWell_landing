import 'normalize.css'
import './sass/main.sass'
// import './sass/modal.sass'

import './js/careSlides'
import modal from './js/modal'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

// const $ = {}
// window.$ = {}
// $.modal = modal

// window.m = modal()

const fywaySwiper = new Swiper('.swiper-container.fyway__swiper-container')
const trainersSwiper = new Swiper('.swiper-container.trainers__swiper-container', {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 39
        }
    }
})
