let menu = document.querySelector('#menu-btn');
let navber = document.querySelector('.navbar');

menu.onclick = () => {
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-from-container').classlist.toggle('active');

}
document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}