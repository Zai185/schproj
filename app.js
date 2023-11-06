const nav = document.querySelector('nav')
const account = document.querySelector('.account')
const accountName = document.querySelector('.account > p')
const loginAcc = document.querySelector('.login-acc')

// For NavBar{yellow, 5
function toggleNav() {
    nav.classList.contains('nav-toggle')
        ? nav.classList.remove('nav-toggle')
        : nav.classList.add('nav-toggle')
}

//For Nav Lighting {red, 11}
function indicateNav() {
    const targetClass = location.hash
        ? '.' + location.hash.substring(1)
        : '.home'
    const targetNav = document.querySelector(targetClass)
    const preTarget = document.querySelector('.text-shadow')

    if (preTarget) preTarget.classList.remove('text-shadow')
    targetNav.classList.add('text-shadow')

}

window.addEventListener('popstate', () => {
    indicateNav()
})

const triggers = document.querySelectorAll('.trigger')
const slider = document.querySelector('.slider')

window.addEventListener('scroll', e => {
    triggers.forEach(trigger => {
        if (trigger.getBoundingClientRect().top < window.innerHeight - 92) {
            trigger.style.opacity = 1
            trigger.style.transform = 'translateY(0)'
        }
    })


})

if(localStorage.getItem('email')){
    const email = localStorage.getItem('email')
    account.style.display = 'flex'
    accountName.innerHTML = email[0].toUpperCase()
    loginAcc.style.display = 'none'

}

//createing packages
// const packageShowbox = document.querySelector('.package-showbox')
// var packages = [{ name: 'Chill', slogan: 'Stay at a place and chill with songs', price: 'Free' },
// { name: 'Paradice', slogan: 'Feel the breeze, Feel the rhythm, Feel the paradice', price: '$ 50' },
// { name: `Heaven's Harp`, slogan: 'Just close your eyes and Feel the music of angels', price: '$ 100' }
// ]


// packages.forEach(({ name, slogan, price }) => {
//     packageShowbox.innerHTML += createPackage(name, slogan, price)
// })




function createPackage(name, slogan, price) {
    return`
    <div class="package-box">
        <h3>${name}</h3>
        <p>${slogan}</p>
        <div class="price-gp">
            <p class="price" style="color: ${price == 'Free' ? '#3f3' : '#ff0'}">${price}</p>
            <button>See More</button>
        </div>
    </div>`

}

indicateNav()