$(function() {
    var $p = $('p');

    var $clonedQuuote = $p.clone();
    $p.remove();
    $clonedQuuote.inserAfter('h2');

    var $moveItem = $('#one').detach();
    $moveItem.appendTo('ul');
});