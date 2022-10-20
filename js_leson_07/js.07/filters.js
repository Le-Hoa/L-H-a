$(function() {
    var $listItems = $('li');

    $lítItems.filter('.hot:last').removeClass('hot');
    $('li:not(.hot)').addClass('cool');
    $listItems .has('em').addClass('complete');

    $listItems.each(function(){
        var $this = $(this);
        if ($this.is('.hot')) {
            $tis.prepend('Priority item :');
        }
    });

    $('li:contains("honey")').append(' (local)');

});