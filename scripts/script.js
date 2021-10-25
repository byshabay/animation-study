$(document).ready(function () {

    // 1.VERTICAL SCROLL TO HORIZONTAL SCROLL START
    // window.addEventListener('wheel', function (event) {
    //     event.preventDefault();

    //     window.scrollBy({
    //         left: event.deltaY < 0 ? -200 : 200,
    //     });
    // }, { passive: false });

    var blocks = document.getElementsByClassName("block");
    var container = document.getElementsByClassName("container");
    var hs = new HorizontalScroll.default({
        blocks: blocks,
        container: container,
    });

    // 1.VERTICAL SCROLL TO HORIZONTAL SCROLL END

    // 2.ACTIVATE ANIMATION WHEN SCROLL START

    $(function () {
        $('#progressDiv').progressbar({
            value: 21
        });
    });
    window.addEventListener('wheel', animationOn, { passive: false });
    var currentWidth = $('.horizontal-scroll').width();
    var coefficient = currentWidth / $(window).width();
    $('.progress-bar').width(currentWidth);

    function animationOn(event) {
        event.preventDefault();
        $(".car-wrapper").css({ 'animation-play-state': 'running' });
        var matrix = $('.horizontal-scroll').css('transform').replace(/[^0-9\-.,]/g, '').split(',');
        var progressPercent = (-matrix[4] * 100) / currentWidth
        $("#progress").changePercent(progressPercent.toFixed());
        console.log(-matrix[4]);

        if (
            event.deltaY > 0
        ) {
            $(':animated').stop();
            $(".car-wrapper").animate({
                "offset-distance": "100%",
            }, 2000, 'linear');

            $(".common-wheel").addClass('_forward');
            $(".common-wheel").removeClass('_back');
            $("._forward").css({ 'animation-play-state': 'running' })


        } else if (
            event.deltaY < 0
        ) {
            $(':animated').stop();
            $('.car-wrapper').animate({
                'offset-distance': '0%',
            }, 2000, 'linear');

            $(".common-wheel").addClass('_back');
            $(".common-wheel").removeClass('_forward');
            $("._back").css({ 'animation-play-state': 'running' });
        }

    }

    setInterval(function () {
        $(':animated').stop();
        $(".car-wrapper, ._forward, ._back").css({ 'animation-play-state': 'paused' });
    }, 1000);

    // 2.ACTIVATE ANIMATION WHEN SCROLL END

    // 3.PROGRESS BAR START
    $("#progress").progressBar({
        width: $(window).width,
        height: 20,
        percent: 0,
        showPercent: true,
        split: 1
    });


    // 3.PROGRESS BAR END

});

