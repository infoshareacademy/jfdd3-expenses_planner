/**
 * Created by krystian on 31.05.16.
 */

$(document).ready(function(){

    $('*[data-animate]').addClass('hide').each(function(){
        $(this).viewportChecker({
            classToAdd: 'show animated ' + $(this).data('animate'),
            classToRemove: 'hide',
            offset: '30%'
        });
    });

});