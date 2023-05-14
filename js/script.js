

$(document).ready(function () {

    /*================================
                self
    ==================================*/
    $(function () {
        $("#slide-self").owlCarousel({
            rtl: true,
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 2000,
            autoplayHoverPause: true,
            nav: true,
            dots: true,
            animateOut: 'bounceOutUp',
            animateIn: 'bounceInUp',
        });
    });
    /*================================
                say
    ==================================*/
    $(function () {
        $("#say-about").owlCarousel({
            rtl: true,
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 2000,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            slideBy: 1,
            navText: [
                '<i class="fa-solid fa-arrow-right"></i>',
                '<i class="fa-solid fa-arrow-left"></i>'
            ]
        });
    })
    /* ===========================
             team 
       =========================== */
    $(function () {
        $("#team-members").owlCarousel({
            rtl: true,
            loop: true,
            autoplay: true,
            smartSpeed: 2000,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            navText: [
                '<i class="fa-solid fa-arrow-right"></i>',
                '<i class="fa-solid fa-arrow-left"></i>'
            ],
            responsive: {

                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
    });
    /* ===========================
             partener 
       =========================== */
    $(function () {
        $("#partener-list").owlCarousel({
            rtl: true,
            loop: true,
            autoplay: true,
            smartSpeed: 2000,
            autoplayHoverPause: true,
            nav: true,
            navText: [
                '<i class="fa-solid fa-chevron-right"></i>',
                '<i class="fa-solid fa-chevron-left"></i>'
            ],
            dots: false,
            responsive: {

                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
    });
    /* ===========================
             slide-details 
       =========================== */
    $(function () {
        $("#slide-details").owlCarousel({
            rtl: true,
            loop: true,
            autoplay: true,
            smartSpeed: 2000,
            autoplayHoverPause: true,
            nav: true,
            navText: [
                '<i class="fa-solid fa-chevron-right"></i>',
                '<i class="fa-solid fa-chevron-left"></i>'
            ],
            dots: false,
            responsive: {

                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 4
                }
            }
        });
    });
    /* ===========================
             wow 
       =========================== */
    function wowActivator() {
        var wow = new WOW({
            offset: 0
        });
        wow.init();
    }
    wowActivator();
    /* ===========================
             nav-bar 
       =========================== */
    $("#open-menu").click(function () {
        var isExpanded = $(this).attr('aria-expanded');
        $(this).find('.fa-bars, .fa-bars').toggleClass('all');
        if (isExpanded === 'false') {
            $(this)
                .find('[data-fa-i2svg]')
                .toggleClass('fa-xmark')
                .toggleClass('fa-bars');
            $('body').css('position', 'static');
        } else {
            $(this)
                .find('[data-fa-i2svg]')
                .toggleClass('fa-bars')
                .toggleClass('fa-xmark');
            $('body').css({
                'position': 'fixed',
                'width': '100%',
                'height': '100%'
            });
        }
    })
    /* ===========================
             stats 
       =========================== */
    $(function () {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    });
    /* ===========================
             password 
       =========================== */
    $(document).ready(function () {
        $('.toggle-password').click(function () {
            $(this).toggleClass('show-password');
            var input = $("#password");
            if (input.attr('type') == 'password') {
                input.attr('type', 'text');
                $(this)
                    .find('[data-fa-i2svg]')
                    .toggleClass('fa-eye-slash')
                    .toggleClass('fa-eye');
            } else {
                input.attr('type', 'password');
                $(this).find('[data-fa-i2svg]')
                    .toggleClass('fa-eye-slash')
                    .toggleClass('fa-eye');
            }
        });
    });
    /* ===========================
           confiarmpassword 
     =========================== */
    $(document).ready(function () {
        $('.toggle-confiarmpassword').click(function () {
            $(this).toggleClass('show-password');
            var input = $("#confiarmpassword");
            if (input.attr('type') == 'password') {
                input.attr('type', 'text');
                $(this)
                    .find('[data-fa-i2svg]')
                    .toggleClass('fa-eye-slash')
                    .toggleClass('fa-eye');
            } else {
                input.attr('type', 'password');
                $(this).find('[data-fa-i2svg]')
                    .toggleClass('fa-eye-slash')
                    .toggleClass('fa-eye');
            }
        });
    });
    /* ===========================
           toggle-password-new 
     =========================== */
    $(document).ready(function () {
        $('.toggle-password-new').click(function () {
            $(this).toggleClass('show-password');
            var input = $("#passwordnew");
            if (input.attr('type') == 'password') {
                input.attr('type', 'text');
                $(this)
                    .find('[data-fa-i2svg]')
                    .toggleClass('fa-eye-slash')
                    .toggleClass('fa-eye');
            } else {
                input.attr('type', 'password');
                $(this).find('[data-fa-i2svg]')
                    .toggleClass('fa-eye-slash')
                    .toggleClass('fa-eye');
            }
        });
    });
    /* ===========================
             checkbox 
       =========================== */
    $("input:checkbox").on('click', function () {
        var $box = $(this);
        if ($box.is(":checked")) {
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            $(group).prop("checked", false);
            $box.prop("checked", true);
        } else {
            $box.prop("checked", false);
        }
    });

    $(`.navbar-nav .nav-link[href="${hash}"]`).addClass('active');

});
/* ===========================
      video 
 =========================== */
const play = document.getElementById('play');
const video = document.getElementById('testvideo');
const imag = document.getElementById('imag');
play.addEventListener('click', function () {
    if (video.paused) {
        video.play()
        play.style.display = 'none';
        video.setAttribute("controls", "controls")


    } else {

    }

})
video.addEventListener('pause', function () {
    play.style.display = 'block';
    video.removeAttribute('controls');
})

video.addEventListener('play', function () {
    play.style.display = 'none';
})
var poster = document.querySelector('#testvideo').getAttribute('poster');

video.addEventListener('ended', function() {
  video.style.display = 'none';
  video.setAttribute('poster', poster);
  video.load();
  video.style.display = 'block';
});