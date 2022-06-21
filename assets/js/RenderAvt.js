
var user = localStorage.getItem('account');
var data = JSON.parse(user);
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
}