$(function() {
    var listItem,itemSstatus, eventType;

    $('ul').on(
        'click mouseover',
        ':not(#four)',
        {status: 'important'}
        function(e) {
            listItem = 'Item: ' + e.target.textContent + '<br />';
            itemSstatus = 'Status : ' + e.data.status + '<br />';
            eventType = 'Event: ' + e.type;
            $('#notes').html(listItem + itemStatus + eventType);
        }
    );
});