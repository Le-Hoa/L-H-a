var el;

function charCount(e) {
    var textEntered, charDisplay, counter , lastkey;
    textEntered = document.getElementById('message').value;
    charDisplay = document.getElementById('charactersLeft ');
    counter = (180-(textEntered.length));
    charDisplay.textContent = counter;
    lastkey = document.getElementById('lastKey');
    lastkey.textContent = 'Last key in ASCII code: ' + e.key.Code;
}
el = document.getElementById('massage');
el.addEventListener ('ketup' ,charCount, false);