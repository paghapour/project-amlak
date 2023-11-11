$(".favorites .slider").slick({
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    rtl: true,
    prevArrow: $('.favorites .action_arrow .prev_slide'),
    nextArrow: $('.favorites .action_arrow .next_slide'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        },
    ]
});

window.addEventListener('load', () => {

    // active filter list
    const filterItem = document.querySelectorAll('#filterItem');

    filterItem.forEach(item => {
        const headItem = item.querySelector('.head');
        const lists = item.querySelector('.lists');

        item.style.height = headItem.offsetHeight + 'px';
        const boxHeight = lists.offsetHeight;
        
        headItem.addEventListener('click', () => {
            filterItem.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.style.height = headItem.offsetHeight + 'px';
                }
            });

            if (!item.classList.contains('active')) {
                item.classList.add('active');
                item.style.height = boxHeight + headItem.offsetHeight + 'px';
            } else {
                item.classList.remove('active');
                item.style.height = headItem.offsetHeight + 'px';
            }
        });
    });


    // const filterItem = document.querySelectorAll('#filterItem')

    // filterItem.forEach(item => {
    //     let headItem = item.querySelector('.head');

    //     item.style.height = headItem.offsetHeight + "px";

    //     let boxHeight = item.querySelector('.lists').offsetHeight;

    //     headItem.addEventListener('click', () => {

    //         filterItem.forEach(item => {
    //             item.classList.remove('active')
    //             item.style.height = headItem.offsetHeight + "px";
    //         })

    //         item.classList.add('active')
    //         item.style.height = boxHeight + headItem.offsetHeight + "px";
    //     })
    // })



    // show modal

    const filterBtn = document.querySelector('#filter-btn')
    const overlay = document.querySelector('.overlay')
    const filterMenu = document.querySelector('#filter-menu')

    filterBtn.addEventListener('click', () => {
        filterMenu.classList.add('active')
        overlay.classList.add('active')
    })

    overlay.addEventListener('click', () => {
        filterMenu.classList.remove('active')
        overlay.classList.remove('active')
    })

})