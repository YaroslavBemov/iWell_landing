showBlock('.care__slide', getCheckedId('.care__input'))

const inputs = document.querySelectorAll('.care__input')

inputs.forEach(item => {
    item.addEventListener('click', function () {
        showBlock('.care__slide', getCheckedId('.care__input'))
    })
})

function getCheckedId (selector) {
    const inputs = document.querySelectorAll(selector)
    let id

    inputs.forEach(item => {
        if (item.checked) {
            id = item.id
        }
    })

    return id
}

function showBlock(selector, id) {
    const slides = document.querySelectorAll(selector)
    const slideId = id + '-slide'

    slides.forEach(item => {
        if (item.id === slideId) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}
