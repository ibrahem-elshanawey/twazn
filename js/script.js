

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
    $("input:radio").on('click', function () {
        var $box = $(this);
        if ($box.is(":radio")) {
            var group = "input:radio[name='" + $box.attr("name") + "']";
            $(group).prop("checked", false);
            $box.prop("checked", true);
        } else {
            $box.prop("checked", false);
        }
    });
    /* ===========================
           toggle icon btn-nav-2 
     =========================== */
    const done = document.querySelectorAll('.btn-nav-2');
    done.forEach(function (el) {
        el.addEventListener('click', function () {

            const b = el.children[1];
            if (b.style.display === "block") {
                b.style.display = "block";
                $(this)
                    .find('[data-fa-i2svg]')
                    .toggleClass('fa-angle-down')
                    .toggleClass('fa-angle-up');
            } else {
                b.style.display = "block";
                $(this)
                    .find('[data-fa-i2svg]')
                    .toggleClass('fa-angle-down')
                    .toggleClass('fa-angle-up');
            }
        });
    });

    // $(`.navbar-nav .nav-link[href="${hash}"]`).addClass('active');


});

document.addEventListener('DOMContentLoaded', function () {
    // var ctx = document.getElementById("myChart").getContext('2d');
    // new Chart(ctx, {
    //     type: 'doughnut',
    //     data: {
    //         datasets: [{
    //             data: [92, 8], // Specify the data values array
    //             borderColor: ['#2EAC6D', 'rgba(46, 172, 109, 0.2)'], // Add custom color border 
    //             backgroundColor: ['#2EAC6D', 'rgba(46, 172, 109, 0.2)'], // Add custom color background (Points and Fill)
    //             borderWidth: 1 // Specify bar border width
    //         }]
    //     },
    //     options: {
    //         responsive: true, // Instruct chart js to respond nicely.
    //         maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 

    //     },
    //     plugins: [{
    //         id: 'text',
    //         beforeDraw: function(chart, a, b) {
    //           var width = chart.width,
    //             height = chart.height,
    //             ctx = chart.ctx;

    //           ctx.restore();
    //           var fontSize = (height / 114).toFixed(2);
    //           ctx.font = fontSize + "em Nunito";
    //           ctx.textBaseline = "center";
    //           ctx.textColor="#2EAC6D";
    //           var text = "92%",
    //             textX = Math.round((width - ctx.measureText(text).width) / 2),
    //             textY = height / 2;
    //             ctx.fillStyle = '#2EAC6D';
    //           ctx.fillText(text, textX, textY);
    //           ctx.save();
    //         }
    //       }]
    // });
    var width = 120,
        height = 120;

    var outerRadius = width / 2;
    var innerRadius = 40;

    var data = [92];
    var pie = d3.pie().value(function (d) {
        return d;
    });

    var endAng = function (d) {
        return (d / 100) * Math.PI * 2;
    };

    var bgArc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(0)
        .endAngle(Math.PI * 2);

    var dataArc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .cornerRadius(15)
        .startAngle(0);

    var svg = d3
        .select('.chart-area')
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        // .attr("viewBox", "0 0 100 100")
        // .attr("class", "shadow")
        .classed("svg-content", true);

    var path = svg
        .selectAll("g")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    var colorScale = d3.scaleLinear()
        .domain([0, 79, 80, 100])
        .range(["#F2B5AA", "#F2B5AA", "rgba(46, 172, 109, 0.2)", "rgba(46, 172, 109, 0.2)"]);
    path
        .append("path")
        .attr("d", bgArc)
        .style("stroke-width", 5)
        .attr("fill", function (d) { return colorScale(data); });
    var colorScale2 = d3.scaleLinear()
        .domain([0, 79, 80, 100])
        .range(["#E66D57", "#E66D57", "#2EAC6D", "#2EAC6D"]);
    path
        .append("path")
        .attr("fill", function (d) { return colorScale2(data); })
        .transition()
        .ease(d3.easeCubicInOut)
        .duration(750)
        .attrTween("d", arcTween);

    path
        .append("text")
        .attr("fill", "#fff")
        .attr("font-size", "22px")
        .attr("font-family", "Nunito")
        .attr("tex-anchor", "middle")
        .attr("x", function (d) {
            if (d.data === 100) {
                return 8; // adjust x value for 100%
            }
            else if (d.data < 10) {
                return 0;
            }
            else {
                return 8; // default x value
            }
        })
        .attr("y", 8)
        .transition()
        .ease(d3.easeCubicInOut)
        .duration(750)
        .attr("fill", function (d) { return colorScale2(data); })
        .text(data);

    path.append("text")
        .attr("fill", "#fff")
        .attr("class", "ratingtext")
        .attr("font-size", "22px")
        .attr("font-family", "Nunito")
        .attr("tex-anchor", "middle")
        .attr("x", function (d) {
            if (d.data === 100) {
                return 27; // adjust x value for 100%
            }
            else if (d.data < 10) {
                return 20;
            } else {
                return 29; // default x value
            }
        })
        .attr("y", 8)
        .text('%')
        .transition()
        .ease(d3.easeCubicInOut)
        .duration(750)
        .attr("fill", function (d) { return colorScale2(data); });

    function arcTween(d) {
        var interpolate = d3.interpolate(d.startAngle, endAng(d.data));
        return function (t) {
            d.endAngle = interpolate(t);
            return dataArc(d);
        };
    }
    
});
$(document).ready(function () {
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

    video.addEventListener('ended', function () {
        video.style.display = 'none';
        video.setAttribute('poster', poster);
        video.load();
        video.style.display = 'block';
    });

    /* ===========================
          container 
     =========================== */
    var myDiv = document.getElementById('slide-self');
    var dozen = document.getElementById('dozen');
    var ready = document.getElementById('ready');
    var why = document.getElementById('why');
    var team = document.getElementById('team');
    var say = document.getElementById('say');
    var vido = document.getElementById('video');

    function setContainerClass() {
        if (window.matchMedia("(min-width: 1600px)").matches) {
            myDiv.classList.add('container');
            dozen.classList.add('container');
            ready.classList.add('container');
            why.classList.add('container');
            team.classList.add('container');
            say.classList.add('container');
            vido.classList.add('container');
        }
        else {
            myDiv.classList.remove('container');
            dozen.classList.remove('container');
            ready.classList.remove('container');
            why.classList.remove('container');
            team.classList.remove('container');
            say.classList.remove('container');
            vido.classList.remove('container');
        }
    }

    setContainerClass();
    window.addEventListener("resize", setContainerClass);

});
function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function() {
      const imagePreview = document.getElementById("image-preview");
      imagePreview.src = reader.result;
    }
    reader.readAsDataURL(file);
  }
  
  const editLabel = document.getElementById("edit-button");
  editLabel.addEventListener("click", function() {
    const imageInput = document.getElementById("image-input");
    imageInput.click();
  });