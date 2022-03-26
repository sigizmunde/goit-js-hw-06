const formEl = document.querySelector('form.login-form');

formEl.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault();
    const {
        elements : {email, password}
    } = event.currentTarget;

    if (email.value.length === 0 || password.value.length === 0) {
        alert('Please, fill in all the fields.');
        return;
    }

    const submitObject = {};
    
    submitObject[email.name] = email.value;
    submitObject[password.name] = password.value;

    this.reset();

    console.log(submitObject);
}