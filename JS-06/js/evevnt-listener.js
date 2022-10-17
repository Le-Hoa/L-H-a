function checkUsername() {
    var elMsg = document.getElementByI('feedback')
    if ( this.value.length < 5 ) {
        elMsg.textContent = 'User name must be 5 character or more';
    } else {
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('username ');
elUsername.addEventListener ('blur ',checkUsername ,'false');