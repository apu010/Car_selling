let menu = document.querySelector('#manu-btn');
let navber = document.querySelector('.navbar');

menu.onclick = () => {
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-from-container').classlist.toggle('active');

}
