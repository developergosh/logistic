var modal3 = document.getElementById("my_modal3");
var btn4 = document.getElementById("btn_modal_window4");
var closeAuth = document.getElementById("closeAuth");
var btnLogin = document.getElementById('login-btn');
var adminPanel = document.getElementById('adminPanel');
var header = document.getElementById('head');
var startFrom = document.getElementById('start');
var service = document.getElementById('service');
var aboutReason = document.getElementById('about-reason');
var paralaxInfo = document.getElementById('paralax-info');
var aboutUs = document.getElementById('about-us');
var calcForm = document.getElementById('calc-form');
var topMenu = document.getElementById('top-menu');
var map = document.getElementById('map');
var whatsUp = document.getElementById('whatsUp');
var span3 = document.getElementsByClassName("close_modal_window")[0];





btn4.onclick = function () {
    modal3.style.display = "block";
}

span3.onclick = function () {
    modal3.style.display = "none";
}

closeAuth.onclick = function () {
    modal3.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}


btnLogin.addEventListener('click', () => {
    if  (passwordInput.value === '123456') {
        modal3.style.display = "none"
        topMenu.style.display = 'none'
        adminPanel.style.display = 'flex'
        header.style.visibility = 'hidden'
        startFrom.style.display = 'none'
        service.style.display = 'none'
        aboutReason.style.display = 'none'
        paralaxInfo.style.display = 'none'
        aboutUs.style.display = 'none'
        calcForm.style.display = 'none'
        map.style.display = 'none'
        whatsUp.style.display = 'none'

    }

    if (passwordInput.value !== '123456') {
        alert('неверный логин или пароль')
    }


},)

/*

if (adminPanel.style.display === 'flex') {
    modal3.style.display = "none",
    topMenu.style.display = 'none',
    adminPanel.style.display = 'flex',
    header.style.visibility = 'hidden',
    startFrom.style.display = 'none',
    service.style.display = 'none',
    aboutReason.style.display = 'none',
    paralaxInfo.style.display = 'none',
    aboutUs.style.display = 'none',
    calcForm.style.display = 'none',
    map.style.display = 'none',
    whatsUp.style.display = 'none';
}
*/