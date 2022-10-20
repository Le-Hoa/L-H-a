$(function() {
    $('li').on('click',function(e) {
        $('li span').remove();
        var date = new Date();
        date.setTime(e.timeStamp);
        var clicked = date date.toDateString();
        $(this).apped('<span class="date">' + clicked + '' + e.type + '</span>');

    });
});