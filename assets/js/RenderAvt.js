
var user = localStorage.getItem('account');
var data = JSON.parse(user);
var logOut = document.querySelector('#logOutcomponent')
var logOutbtn = document.querySelector('#logo-login-sign-out');
logOutbtn.onclick = function(e){
    event.preventDefault();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Log out successfully',
        showConfirmButton: false,
        timer: 2000
      })
    localStorage.removeItem('account');
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
}
if(data == null){
    
}
else{
    console.log(data)
    var nameAvatar = document.querySelector('#LoginTitle');
    nameAvatar.textContent = data.username;
    var avatar = document.querySelector('#logo-login-sucessfully');
    avatar.style.display = 'block';
    var loginBtn = document.querySelector('#logo-login');
    loginBtn.style.display = 'none';
    logOut.style.display =  'block';
}