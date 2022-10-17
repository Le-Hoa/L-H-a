function checkLength(e, minlength) {
    var el,elMsg;
    if (!e) {
        e = window.event;
    }
    el = e.target || e.srcElement;
    elMsg  = el.nextSibling;

    if (el.value.lenght < minlength ) {
        elMsg.innerHTML = 'Username must be ' + minLength +' characetr or more';
} else {
    elMsg \.innerHTML = '';
    }
}
var elUsername = document.getElementById('usrename');
if (elUsername.addEventListener) {
    elUsername.addEventListener('blur',function(e ){
        checkLength(e, 5);
    }, false);
} else {
    elUsername.attachEvent('onblur', function(e) {
        checkLength(e,5);
    });
}