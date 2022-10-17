var elUsername = document.getElementById ('username');
var elMsg      = document.getElementById ('feedback');

function checkUsername(minlength) {
    if (elUsername.value.length < minLength) {

        elMsg.innerHTML = 'Username must be ' + minLength + 'character or more';

    }else {
        elMsg.innerHTML = '';
    }
}
elUsername .addEventListener('bler',function() {
    checkUsername('5');
} ,false );