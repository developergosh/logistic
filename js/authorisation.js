let
    btnLogin = document.getElementById('login-btn'),
    formAuthorisation = document.getElementById('formAuth'),
    demoAdminForm = document.getElementById('demoAdmin-form'),
    passwordInput = document.getElementById('passwordInput'),
    demoUserForm = document.getElementById('demoUser-form');



btnLogin.addEventListener('click', () => {
    if  (passwordInput.value === '123456') {
        demoAdminForm.style.display = 'flex'
        formAuthorisation.style.display = 'none'
    }
    if (passwordInput.value ==='654321') {
        demoUserForm.style.display = 'flex'
        formAuthorisation.style.display = 'none'
    }
    if (passwordInput.value !== '123456') {
        alert('неверный логин или пароль')
    }
},)