$(document).ready(function () {

    // 1.VERTICAL SCROLL TO HORIZONTAL SCROLL START

    var blocks = document.getElementsByClassName("block");
    var container = document.getElementsByClassName("container");
    var hs = new HorizontalScroll.default({
        blocks: blocks,
        container: container,
    });

    // 1.VERTICAL SCROLL TO HORIZONTAL SCROLL END

    // 2.ACTIVATE ANIMATION WHEN SCROLL START

    window.addEventListener('wheel', animationOn, { passive: false }); // WHEEL LISTENER

    var currentWidth = $('.horizontal-scroll').width();

    var bodyWidth = $('#body').width();

    function animationOn(event) {
        event.preventDefault();
        $(".car-wrapper").css({ 'animation-play-state': 'running' });
        //  PROGRESS BAR COUNT CHANGES WHEN SCROLL START

        var matrix = $('.horizontal-scroll').css('transform').replace(/[^0-9\-.,]/g, '').split(',');

        var progressPercent = (-matrix[4] * 100) / (currentWidth - bodyWidth);

        if (
            !progressPercent
        ) {
            $("#progress").changePercent(0);
        }
        else {
            $("#progress").changePercent(progressPercent.toFixed());
        }

        //  PROGRESS BAR COUNT CHANGES WHEN SCROLL END

        if (
            event.deltaY > 0 &&
            progressPercent < 98 // FORWARD SCROLL
        ) {
            $(':animated').stop();
            $(".car-wrapper").animate({
                "offset-distance": "90%",
            }, 2000, 'linear');

            $(".common-wheel").addClass('_forward');
            $(".common-wheel").removeClass('_back');
            $("._forward").css({ 'animation-play-state': 'running' })


        } else if (
            event.deltaY < 0 &&
            progressPercent > 1 // BACK SCROLL
        ) {
            $(':animated').stop();
            $('.car-wrapper').animate({
                'offset-distance': '10%',
            }, 1000, 'linear');

            $(".common-wheel").addClass('_back');
            $(".common-wheel").removeClass('_forward');
            $("._back").css({ 'animation-play-state': 'running' });
        }

    }

    /**
     * Удаляет все движение анимации раз в секунду. 
     * Функционал остановки анимации, когда нет скролла.
     */

    setInterval(function () {
        $(':animated').stop();
        $(".car-wrapper, ._forward, ._back").css({ 'animation-play-state': 'paused' });
    }, 1000);

    // 2.ACTIVATE ANIMATION WHEN SCROLL END

    // 3.PROGRESS BAR INITIALIZATION START

    $("#progress").progressBar({
        width: $(window).width,
        height: 20,
        percent: 0,
        showPercent: true,
        split: 1
    });

    // 3.PROGRESS BAR INITIALIZATION END

});

