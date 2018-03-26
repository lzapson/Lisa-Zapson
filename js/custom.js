/*--------------------------
        SERVICES
----------------------------*/

/* jquery shortcut for document.ready */

$(function () {

    new WOW().init();

});



/*--------------------------
        Navigation
----------------------------*/
// show/hide transparent black navigation

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("lisazapson-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            // show nav
            $("nav").addClass("lisazapson-top-nav");
            $("#back-to-top").fadeIn();
        }
    })

});

//Smooth scrolling

$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // return section id like #about
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");

    })

});

//close  mobile menu on click

$(function () {

    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });

});