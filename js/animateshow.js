$(document).ready(function () {
    $(window).on('scroll load', function () {
        $('.section').each(function (i) {
            var top_of_object = $(this).offset().top;
            var top_of_window = $(window).scrollTop() + 1;
            console.log(top_of_window, top_of_object);
            if (top_of_window > top_of_object) {
                $(this).find('.hide').animate({'opacity': '1'}, 1000);
            }
        });
    });
});