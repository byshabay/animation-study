$(document).ready(function () {

    // 1.VERTICAL SCROLL TO HORIZONTAL SCROLL START
    window.addEventListener('wheel', function (event) {
        event.preventDefault();

        window.scrollBy({
            left: event.deltaY < 0 ? -200 : 200,
        });
    }, { passive: false });
    // 1.VERTICAL SCROLL TO HORIZONTAL SCROLL END

});

