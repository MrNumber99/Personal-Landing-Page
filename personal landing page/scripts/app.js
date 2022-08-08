const navToggleIcon = document.querySelector('.nav__toggle-icon')
const menuToggle = document.querySelector('.menu')
const coverToggle = document.querySelector('.cover')
const resumeListItems = document.querySelectorAll('.resume-list__item')
const portfolioItems = document.querySelectorAll('.portfolio-list__item')

navToggleIcon.addEventListener('click', () => {
    navToggleIcon.classList.toggle('nav__toggle-icon--open')
    menuToggle.classList.toggle('menu--open')
    coverToggle.classList.toggle('cover--show')
})

function navigationTabsInit(listItems, listItemActiveClass, contentItemShowClass) {
    listItems.forEach(listItem => {
        listItem.addEventListener('click', function () {
            document.querySelector(`.${listItemActiveClass}`).classList.remove(listItemActiveClass)
            document.querySelector(`.${contentItemShowClass}`).classList.remove(contentItemShowClass)
            this.classList.add(listItemActiveClass)
            let contentId = this.getAttribute('data-content-id')
            document.querySelector(contentId).classList.add(contentItemShowClass)
        })
    })
}
navigationTabsInit(resumeListItems,'resume-list__item--active','resume-content--show')
navigationTabsInit(portfolioItems,'portfolio-list__item--active','portfolio-content--show')