const inputEl = document.querySelector('input#validation-input');

inputEl.addEventListener('blur', validationCheck);

function validationCheck() {
    // console.log(this.value.length);
    // console.log(this.dataset.length);
    if (this.value.length === parseInt(this.dataset.length)) {
        this.classList.remove('invalid');
        this.classList.add('valid');
        return;
    }
    
    this.classList.remove('valid');
    this.classList.add('invalid');
    return;
}