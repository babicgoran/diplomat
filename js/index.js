// counter 

const counters = document.querySelectorAll(".js-counter")
const speed = 50;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 15);

        } else {
            counter.innerText = target;
        }
    }

    updateCount()
})


//toggle button 

const button = document.querySelector('.js-gallery-collapse');

button.addEventListener('click', () => {

    const x = document.querySelectorAll(".js-hidden-gallery");
    x.forEach(x => {
        if (x.style.display === "block") {
            x.style.display = "none";
            button.innerHTML = "Show More"
        } else {
            x.style.display = "block";
            button.innerHTML = "Show Less"
        }
    })


})


$('.js-nav-button').on('click', () => {
    $('.js-nav').toggle('slow')

    $('.js-nav-button').toggleClass('navigation__mobile-button--red')

}
)