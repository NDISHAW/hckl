newFunction();
function newFunction() {
    $(document).ready(function () {
        //Owl
        $(".hero-slider").owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: true,
            navText: ["PREV", "NEXT"],
            smartSpeed: 1000,
            autoplay: true,
            autoplayTimeout: 7000,
            responsive: {
                0: {
                    nav: false,
                },
                768: {
                    nav: true,
                },
            },
        });

        $(".reviews-slider").owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            smartSpeed: 900,
            items: 1,
            margin: 24,
            autoplay: true,
            autoplayTimeout: 4000,
        });
    });
}

