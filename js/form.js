var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm          = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTermsHint     = document.getElementById('termHint');

function packageHint() {
    var pack = this.options[this.selectedIndex].value;
    if (pack === 'monthly') {
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';
    }else {
        elPackageHint.innerHTML = 'Wise choice!';
    }
}
function checkTerms(event) {
    if (!elTerm.checked) {
        elTermsHint.innerHTML = 'You mus agree to the term.';
    }
}

elForm.addEventListener('submit', checkTerm, false);
elSelectPackage.addEventListener('change',packageHint ,false);
