// function to animated scrolling
$(document).ready(function() {

    $('a[href^="#"]').on('click', function(event) {
        var target = $( $(this).attr('href') );
        if(target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

// function to hide and show #backToTopButton
$(window).scroll(function()
    {
        if($(this).scrollTop()>300) $('#backtop').fadeIn();
        else $('#backtop').fadeOut();
    }
);