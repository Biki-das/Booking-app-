const hamburger = document.getElementsByClassName('hamburger')[0]
const navList = document.getElementsByClassName('nav-list')[0]
console.log(navList);

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show')
})
