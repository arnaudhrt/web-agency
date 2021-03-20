// Navigation
const mobileBtn = document.querySelector('.btn-menu')
const menuOpen = document.querySelector('.items-nav')
const items = document.querySelectorAll('.items-nav a')
const btnLang = document.querySelector('.container-lang')
const menuLang = document.querySelector('.list-lang')

//Toggle menu
mobileBtn.addEventListener('click', () => {
  mobileBtn.classList.toggle('active')
  menuOpen.classList.toggle('active')
})

//Close menu
items.forEach((item) => {
  item.addEventListener('click', () => {
    mobileBtn.classList.toggle('active')
    menuOpen.classList.toggle('active')
  })
})

// Language menu
btnLang.addEventListener('click', () => {
  menuLang.classList.toggle('active')
  btnLang.classList.toggle('active')
})

//Anim rect
const cards = document.querySelectorAll('.card')
const rect = document.querySelector('.rect')

cards.forEach((card) => {
  card.addEventListener('mouseover', (e) => {
    if (card == cards[0]) {
      rect.style.left = '16.5%'
    } else if (card == cards[2]) {
      rect.style.left = '84%'
    } else {
      rect.style.left = '50%'
    }
  })
  card.addEventListener('mouseout', () => {
    rect.style.left = '50%'
  })
})

// Carousel
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  slidesPerColumn: 2,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      slidesPerColumn: 2,
    },
    650: {
      slidesPerView: 3,
      slidesPerColumn: 2,
    },
    1000: {
      slidesPerView: 4,
      slidesPerColumn: 2,
    },
  },
})

// Btn scroll

window.addEventListener('scroll', (e) => {
  const scrollPos = window.pageYOffset

  if (scrollPos > 20) {
    document.querySelector('.scroll-btn').style.opacity = '0'
  } else {
    document.querySelector('.scroll-btn').style.opacity = '1'
  }
})

// Animation cursor
const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', (e) => {
  cursor.setAttribute('style', 'top: ' + (e.pageY - 22) + 'px; left: ' + (e.pageX - 22) + 'px;')
})
document.addEventListener('click', () => {
  cursor.classList.add('expand')

  setTimeout(() => {
    cursor.classList.remove('expand')
  }, 500)
})