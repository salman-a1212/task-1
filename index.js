document.addEventListener("DOMContentLoaded", function () {
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {

        document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {

            everyitem.addEventListener('mouseover', function (e) {

                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }

            });
            everyitem.addEventListener('mouseleave', function (e) {
                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }


            })
        });

        $(document).ready(function () {

            // Gets the video src from the data-src on each button

            var $videoSrc;
            $('.video-btn').click(function () {
                $videoSrc = $(this).data("src");
            });
            console.log($videoSrc);



            // when the modal is opened autoplay it  
            $('#myModal').on('shown.bs.modal', function (e) {

                // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
                $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");

            })



            // stop playing the youtube video when I close the modal
            $('#myModal').on('hide.bs.modal', function (e) {
                // a poor man's stop video
                $("#video").attr('src', $videoSrc);
            })



            // slick slider
            $('.img-toggler').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 10000,
            });
            $('.mySlider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 10000,
            });

            $('.myslider').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 2,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 10000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 3,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 320,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1,
                            dots: false
                        }
                    }
                ]
            });

            // $('.blog-slider').slick({
            //     infinite: true,
            //     slidesToShow: 3,
            //     slidesToScroll: 1,
            //     dots: true,
            //     arrows: false,
            //     autoplay: true,
            //     autoplaySpeed: 10000,
            //     responsive: [
            //         {
            //             breakpoint: 768,
            //             settings: {
            //                 arrows: false,
            //                 centerMode: true,
            //                 centerPadding: '40px',
            //                 slidesToShow: 3,
            //                 dots: false,
            //                 variableWidth: true,
            //             }
            //         },
            //         {
            //             breakpoint: 480,
            //             settings: {
            //                 arrows: false,
            //                 centerMode: true,
            //                 centerPadding: '40px',
            //                 slidesToShow: 1,
            //                 dots: false,
            //                 variableWidth: true,
            //             }
            //         },
            //         {
            //             breakpoint: 320,
            //             settings: {
            //                 arrows: false,
            //                 centerMode: true,
            //                 centerPadding: '40px',
            //                 slidesToShow: 1,
            //                 dots: false,
            //                 variableWidth: true,
            //             }
            //         }
            //     ]
            // });

            // document ready  
        });
    }
    // end if innerWidth
});
// DOMContentLoaded  end

// Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2023 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("hours").innerHTML = hours + "<br> Hours"
    document.getElementById("mins").innerHTML = minutes + "<br> Minutes"
    document.getElementById("secs").innerHTML = seconds + "<br> Seconds"

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// back to top

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// home.html 

