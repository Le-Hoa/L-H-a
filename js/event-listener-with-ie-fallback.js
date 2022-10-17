var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
    if (elUsername.value.length < minLength) {
        elMsg.innerHTML = 'Username must be' + minLength + ' character or more';
    }else {
        elMsg.innerHTML='';
    }
}

if (elUsername.addEventListener ) {
    elUsername.addEventListener('blue',function(){
        checkUsername(5);
    }, false);
} else {
    elUsername.attachEvent('onblur',funtion(){
        checkUsername(5);
    });
}