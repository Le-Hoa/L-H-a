$(function() {
    $('li').each(function() {
        var ids = tis.id;
        $(this).append(' <span class="order">' + ids +'</span>');
    });
});