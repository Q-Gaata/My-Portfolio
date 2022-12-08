const tabLinks = document.querySelectorAll('.tab-link')
const tabContents = document.querySelectorAll('.tab-contents')
const sideMenu = document.querySelector('#sidemenu')
const msg = document.querySelector('#msg')
const form = document.querySelector('form')
const hiddenElements = document.querySelectorAll('.hidden')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.cancel')
const btnsOpenModal = document.querySelector('.header-text .btn')
const header = document.querySelector('#header .container')
const typing = document.querySelector('.typing')



function openTab(tabName){
    tabLinks.forEach(link => {
        link.classList.remove('active-link')
    })

    tabContents.forEach(content => {
        content.classList.remove('active-tab')
    })

    event.currentTarget.classList.add('active-link')
    document.getElementById(tabName).classList.add('active-tab')
}

function openMenu(){
    sideMenu.style.right = '0'
}

function closeMenu(){
    sideMenu.style.right = '-200px'
}

form.addEventListener('submit', e => {
    const name = document.querySelector('.input1')
    const email = document.querySelector('.input2')
    const text = document.querySelector('.area')
    if(name === '' || email === '' || text === ''){
        e.preventDefault()
    }

    msg.textContent = 'Message sent successfully!'
    setTimeout(() => {
        msg.textContent = ''
    },4000)
    form.reset()
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show');
        }
    });
});

hiddenElements.forEach(el => observer.observe(el))

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hide');
    overlay.classList.remove('hide');
  };
  
  const closeModal = function () {
    modal.classList.add('hide');
    overlay.classList.add('hide');
  };
  
  btnsOpenModal.addEventListener('click', openModal);
  
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hide')) {
      closeModal();
    }
  });

//   Change Navbar on scroll 
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-cont')
    nav.classList.toggle('scroll', window.scrollY > 0)
})
  

// Animate Navbar on Load
window.addEventListener('load', () => {
    let reveals = document.querySelectorAll('.reveal')
    let box2 = document.querySelector('.box2')
    reveals.forEach((reveal) => {
            reveal.classList.add('active')
            box2.classList.add('show')

   })
})

// Animate on Onscroll
window.addEventListener('scroll', () => {
    let boxes = document.querySelectorAll('.box')
   boxes.forEach((box) => {
    let windowHeight = window.innerHeight;
    let boxTop = box.getBoundingClientRect().top;

    if(boxTop < windowHeight){
        box.classList.add('show')
    }
   })
})

const animate = () => {
    setTimeout(() => {
        typing.textContent = 'Frontend Developer'
    }, 0)
    setTimeout(() => {
        typing.textContent = 'JavaScript Developer'
    }, 4000)
    
}

animate()

setInterval(animate, 8000)

