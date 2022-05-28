
var lineEmail = document.querySelector('.panel-body-form-email-input');
var EmailForm = document.querySelector('.panel-body-form-email');
var linePassword = document.querySelector('.panel-body-form-password-input');
var passWordForm = document.querySelector('.panel-body-form-password');
var messErrorEmail = document.querySelector('.Login--error-mess-email')
var messErrorPassword = document.querySelector('.Login--error-mess-password')
lineEmail.addEventListener('input' , function(e){
    if(!e.target.value.includes('@gmail.co'))
    {
        EmailForm.classList.add('form-field--error')
        messErrorEmail.style.display = 'flex'
    }
});
lineEmail.addEventListener('input' , function(e){
    if(e.target.value.includes('@gmail.co'))
    {
        EmailForm.classList.remove('form-field--error')
        messErrorEmail.style.display = 'none'
    }
});
linePassword.addEventListener('input' , function(e){
    if(e.target.value === "")
    {
        passWordForm.classList.add('form-field--error')
        messErrorPassword.style.display = 'flex'
    }
});
linePassword.addEventListener('input' , function(e){
    console.log(e.target.value)
    if(!e.target.value === "")
    {
        passWordForm.classList.remove('form-field--error')
        messErrorPassword.style.display = 'none'
        
    }
});