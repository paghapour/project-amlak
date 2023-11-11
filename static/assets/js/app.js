window.addEventListener('load', () => {
    const searchButton = document.querySelector('#searchButton');
    const SearchForm = document.querySelector('#searchForm');
    const overlay = document.querySelector('.overlay');
    const burgger = document.querySelector('.burgger')
    const mobileMenu = document.querySelector('.mobile_menu')

    searchButton.addEventListener('click', () => {
        SearchForm.submit()
    })

    burgger.addEventListener('click', () => {
        overlay.classList.add('active');
        mobileMenu.classList.add('active')
        burgger.classList.add('active')
    })

    overlay.addEventListener('click',()=>{
        overlay.classList.remove('active');
        mobileMenu.classList.remove('active')
        burgger.classList.remove('active')
    })

})