
var modal = document.querySelector('.modal');
function closeModal(e){
    event.preventDefault();
    modal.classList.remove('open');
}
function openModal(e){
    event.preventDefault();
    modal.classList.add('open');
}
function Register(){
    var usernameInput = document.querySelector('#modal-input1').value;
    var usernamePassword = document.querySelector('#modal-input2').value;
    var usernamePasswordConfirm = document.querySelector('#modal-input3').value;
    var user = {
        username : usernameInput,
        userpass : usernamePassword,
        userconfirm : usernamePasswordConfirm
    };
    var json = JSON.stringify(user);
    localStorage.setItem(usernameInput,json);
    closeModal();
}
function Login(e){
    event.preventDefault();
    var userNameLogin = document.querySelector('.panel-body-form-username-input').value;
    var userPasslogin = document.querySelector('.panel-body-form-password-input').value;
    var userlogin = localStorage.getItem(userNameLogin);
    var data = JSON.parse(userlogin);
    
    if(data==null){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Please enter correct user name and password',
            showConfirmButton: false,
            timer: 2000
          })
    }
    else if(userNameLogin == data.username && userPasslogin == data.userpass){
    let timerInterval
    Swal.fire({
  title: 'Successful login',
  html: 'Go to home page within <b></b> milliseconds.',
  timer: 1500,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    window.location.href = "index.html";
  }
});
}
else{
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Please enter correct user name and password',
    showConfirmButton: false,
    timer: 2000
  })
}
};







