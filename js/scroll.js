/**
 * Created by krystian on 18.05.16.
 */
jQuery(function($)
    {
        //zresetuj scrolla

        $('#link').click(function() { $.scrollTo($('#opis'), 500); return false});
        $('#link1').click(function() { $.scrollTo($('#zespol'), 500); return false});
        $('#link3').click(function() { $.scrollTo($('body'), 500); return false});
        $('#backtop').click(function() { $.scrollTo($('body'), 500); return false});
        $('#cont').click(function() { $.scrollTo($('#email'), 500); return false});
        $('.button').click(function() { $.scrollTo($('#opis'), 500); return false});
    }
);


//pokaż podczas przewijania
$(window).scroll(function()
    {
        if($(this).scrollTop()>300) $('#backtop').fadeIn();
        else $('#backtop').fadeOut();
    }
);