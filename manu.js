$(document).ready(function () {
    $(window).scroll(function () {
        $('.funcoes').each(function () {
            var position = $(this).offset().top;
            var windowHeight = $(window).height();
            if (position < $(window).scrollTop() + windowHeight - 100) {
                $(this).addClass('visible');
            }
        });
    });
});