Let menu = document.querySelector('#menu-btn');
Let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-from-container').classlist.toggle('active');

}
