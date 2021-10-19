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

});

