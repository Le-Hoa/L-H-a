$(function() {
    $('li').on('click', function() {
        $(this).animate({
            opacity: 0.0,
            paddingLleft: '+=80'
        }, 500, function() {
            $(this).remove();
        });

        });
    });
