$(':header').addClass('headline');
$('li:ly(3)').hide().fadeIn(1500);
$('li').on('click', function() {
    $(this).remove();
});