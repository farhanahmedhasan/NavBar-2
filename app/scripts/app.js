class MobileMenu{
    constructor() {
        this.burger = document.querySelector('.burger')
        this.navLinks = document.querySelector('.nav-links')
        this.navLinksAnimation = document.querySelectorAll('.nav-links li')
        this.events()
    }

    events() {
        this.burger.addEventListener('click', () => {
            this.navSlide() //Slider Function
            this.navLinksFade() //NavLinks Animation
            this.burgerAnimation() //Burger Cross Animation
        })
    }

    //NavBar Sliding
    navSlide() {
        this.navLinks.classList.toggle('nav-active')
    }

    //Animation OF NavLinks
    navLinksFade() {
        this.navLinksAnimation.forEach((links,index) => {
            if (links.style.animation) {
                links.style.animation = ''
            }
            else {
                links.style.animation =`navLinksFade 0.5s ease forwards ${index / 5 + 0.2}s`
            }
        })
    }

    //Burger Animation
    burgerAnimation() {
        this.burger.classList.toggle('cross')
    }
}

let mobile_menu = new MobileMenu()