// Your code goes here
let body = document.querySelector('body')
let navCont = document.querySelector('.nav-container')
let navMain = document.querySelector('.main-navigation')
let footer = document.querySelector('.footer')
let navLinks = document.querySelectorAll('.nav a')
let nightMode = document.querySelector('.logo-heading')
let introImg = document.querySelector('.intro img')
let secondImg = document.querySelector('.content-section img')
let thirdImg = document.querySelector('.inverse-content img')
let lastImg = document.querySelector('.content-destination img')
let buttons = document.querySelectorAll('.content-pick .btn')

nightMode.addEventListener('click', (event) => {
    nightMode.textContent='Night Bus'
    body.style.color='limegreen'
    body.style.background='black'
    navMain.style.color='limegreen'
    navMain.style.background='black'
    footer.style.color='limegreen'
    footer.style.background='black'
    navLinks.forEach((elem) => {
        elem.style.color='limegreen'
        
    })
    buttons.forEach((elem) => {
        elem.style.color='black'
        elem.style.background = 'limegreen'
        
    })
    event.stopPropagation()
})
nightMode.addEventListener('dblclick', (event) => {
    nightMode.textContent='Fun Bus'
    body.style.color='black'
    body.style.background='white'
    navMain.style.color='black'
    navMain.style.background='white'
    footer.style.color='black'
    footer.style.background='white'
    navLinks.forEach((elem) => {
        elem.style.color='black'
        
    })
    buttons.forEach((elem) => {
        elem.style.color='white'
        elem.style.background = '#17A2B8'
        
    })
    introImg.src = 'img/fun-bus.jpg'
    secondImg.src = 'img/adventure.jpg'
    thirdImg.src = 'img/fun.jpg'
    lastImg.src = 'img/destination.jpg'
    event.stopPropagation()
})
introImg.addEventListener('mouseenter', () => {
    nightMode.textContent='Death Bus'
    body.style.color='crimson'
    body.style.background='black'
    navMain.style.color='crimson'
    navMain.style.background='black'
    footer.style.color='crimson'
    footer.style.background='black'
    navLinks.forEach((elem) => {
        elem.style.color='crimson'
        
    })
    buttons.forEach((elem) => {
        elem.style.color='black'
        elem.style.background = 'crimson'
        
    })
    introImg.src = 'img/horrorbanner.jpg'
    secondImg.src = 'img/pic2.jpeg'
    thirdImg.src = 'img/horror_ghost-other.jpg'
    lastImg.src = 'img/horforest.jpg'
})
introImg.addEventListener('mouseleave', ()=>{
    navLinks.forEach((elem) => {
        elem.style.color='black'
        
    })
})
secondImg.addEventListener('mousedown', ()=>{
    secondImg.src = 'img/adventure.jpg'
})
secondImg.addEventListener('mouseup', ()=>{
    secondImg.src = 'img/pic2.jpeg'
})

navCont.addEventListener('click', (event)=>{
    body.style.background = 'crimson'
    event.stopPropagation()
   
})
navLinks.forEach((elem)=> elem.addEventListener('click', (event)=>{
    event.preventDefault()
}))

lastImg.addEventListener('mouseover', ()=>{
    
    body.style.color='black'
    body.style.background='black'
    navMain.style.color='black'
    navMain.style.background='black'
    footer.style.color='black'
    footer.style.background='black'
    navLinks.forEach((elem) => {
        elem.style.color='black'
        
    })
    buttons.forEach((elem) => {
        elem.style.color='black'
        elem.style.background = 'black'
        
    })
})
lastImg.addEventListener('mouseout', ()=>{
    
    body.style.color='red'
    body.style.background='red'
    navMain.style.color='red'
    navMain.style.background='red'
    footer.style.color='red'
    footer.style.background='black'
    navLinks.forEach((elem) => {
        elem.style.color='black'
        
    })
    buttons.forEach((elem) => {
        elem.style.color='black'
        elem.style.background = 'black'
        
    })
})

navLinks.forEach((elem)=>{
    elem.addEventListener('click', (event)=>{
        event.preventDefault()
    })
})