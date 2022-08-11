$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    span: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

$(function () {
    $('.owl-prev').css('background-color', 'transparent');
});
$(function () {
    $('.owl-next').css('background-color', 'transparent');
});