
var span3 = document.getElementsByClassName("close_modal_window")[0];
var span = document.getElementsByClassName("close_modal_window")[0];
var items = ['Логин: ',//0
    'Толық аты: ',//1
    'Сәлемдеме түрі: ',//2 InfoCargo
    ' Бағыты: ',//3  DeliveryCity
    'Жеткізу күйі: ',//4
    'Жеткізу мерзімі:',//5
    'Төлем тәсілі:',//6
    'Жеткізу сомасы: ',//7  OrderCosts
    '№ трекера: '//8

];

let  modal2 = document.getElementById("my_modal2"),
    btn2 = document.getElementById("btn_modal_window2"),
    btn3 = document.getElementById("btn_modal_window3"),
    span2 = document.getElementsByClassName("close_modal_window2")[0],
    closeCallBtn = document.getElementById("closeCallBtn"),
    CallFormitems = ['Фамилия: ', 'Адрес: ', 'Вес Груза: ', 'Время вывоза: ', 'Телефон: '],
    CallKurierName = document.getElementById('CallKurierName'),
    CallKurierAdress = document.getElementById('CallKurierAdress'),
    CallKurierBox = document.getElementById('CallKurierBox'),
    CallKurierTel = document.getElementById('CallKurierTel'),
    CallKurierTime = document.getElementById('CallKurierTime'),
    FioCall = document.getElementById('FioCall'),
    modal3 = document.getElementById("my_modal3"),
    AdressCall = document.getElementById('AdressCall'),
    WeightBoxCall = document.getElementById('WeightBoxCall'),
    ConfirmOrderBtn = document.getElementById('cofirmOrderBtn'),
    btn4 = document.getElementById("btn_modal_window4"),
    btnLogin = document.getElementById('login-btn'),
    FioOrder = document.getElementById('FioOrder'),
    payMethod = document.getElementById('pay-method'),
    TimeCall = document.getElementById('TimeCall'),
    TelCall = document.getElementById('TelCall'),
    requestButton = document.getElementById('btn_modal_window'),
    InfoCargo = document.getElementById('userCount'),
    DeliveryCity = document.getElementById('speciality'),
    deliveryto = document.getElementById('delivery-to'),
    infoBoxToSend = document.getElementById('info-box-to-send'),
    deliverySumInfo = document.getElementById('delivery-cost-span'),
     adminPanel = document.getElementById('adminPanel'),
     modal = document.getElementById("my_modal"),
     btn = document.getElementById("btn_modal_window"),
    spanClose = document.getElementById("span-close"),
    closeAuth = document.getElementById("closeAuth"),
    header = document.getElementById('head'),
     startFrom = document.getElementById('start'),
    service = document.getElementById('service'),
    aboutReason = document.getElementById('about-reason'),
    paralaxInfo = document.getElementById('paralax-info'),
    aboutUs = document.getElementById('about-us'),
    calcForm = document.getElementById('calc-form'),
    topMenu = document.getElementById('top-menu'),
    map = document.getElementById('map'),
    whatsUp = document.getElementById('whatsUp'),
    Span1 = document.getElementById('1'),
    Span2 = document.getElementById('2'),
    Span3 = document.getElementById('3'),
    Span4 = document.getElementById('4'),
    Span5 = document.getElementById('5'),
    Span6 = document.getElementById('6'),
    Span7 = document.getElementById('7'),
    Span8 = document.getElementById('8'),
    OrderCosts = document.getElementById('megabyte');









btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

spanClose.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


btn2.onclick = function () {
    modal2.style.display = "block";
}

btn3.onclick = function () {
    modal2.style.display = "block";
}

span2.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


closeCallBtn.onclick = function (event) {
    if (event.target === modal2) {
        modal2.style.display = "none"
    }
    CallFormitems[0] = CallFormitems[0] + CallKurierName.value
    CallFormitems[1] = CallFormitems[1] + CallKurierAdress.value
    CallFormitems[2] = CallFormitems[2] + CallKurierBox.value
    CallFormitems[3] = CallFormitems[3] + CallKurierTime.value
    CallFormitems[4] = CallFormitems[4] + CallKurierTel.value

    alert('Рахмет, өтінішіңіз қабылданды, сіз көрсеткен уақытта курьерді күтіңіз');
    modal2.style.display = "none";

    localStorage['mykey'] = JSON.stringify(CallFormitems);
    FioCall.innerText = CallFormitems[0];
    AdressCall.innerText = CallFormitems[1];
    WeightBoxCall.innerText = CallFormitems[2];
    TimeCall.innerText = CallFormitems[3];
    TelCall.innerText = CallFormitems[4];

};
console.log(CallFormitems);






requestButton.addEventListener('click', () => {
    var text2 = InfoCargo.options[InfoCargo.selectedIndex].text;
    var text3 = DeliveryCity.options[DeliveryCity.selectedIndex].text;
    items[2] = items[2]+ text2
    items[3] = items[3]+ text3
    items[4] = items[4] + "Курьерді күтуде"
    items[5] = items[5] + "24 сағат"
    items[7] = items[7]+ OrderCosts.innerText
    items[8] = items[8] + "Nur2000"
    deliveryto.innerText = '3. бағыты: ' + text3
    infoBoxToSend.innerText = '2. Сәлемдеме түрі: ' + text2
    deliverySumInfo.innerText = '7. Жеткізу сомасы: ' + OrderCosts.innerText

},)


ConfirmOrderBtn.addEventListener('click', () => {
    items[1] = items[1]+ FioOrder.value;
    items[6] = items[6]+ payMethod.value;
    FioOrder.value = "";
    payMethod.value = "";
    InfoCargo.value = "";
    DeliveryCity.value = "";
    OrderCosts.innerText = "0";
    modal.style.display = "none";
    alert('Өтінішіңіз жіберілді, рахмет!');
    requestForm.style.display = 'none';
    Span1.innerText = items[1];
    Span2.innerText = items[2];
    Span3.innerText = items[3];
    Span4.innerText = items[4];
    Span5.innerText = items[5];
    Span6.innerText = items[6];
    Span7.innerText = items[7];
    Span8.innerText = items[8];

},);


console.log(items);




let searchBtnInput = document.getElementById('searchBtnInput'),
    deliveryFormInfoSpan = document.getElementById('deliveryFormInfoSpan'),
    inputTracker = document.getElementById('inputTracker');

searchBtnInput.addEventListener('click', () => {
    if (inputTracker.value === 'Nur2000') {
        deliveryFormInfoSpan.innerText = "Өтінішіңіздің күйі: Курьерді күтуде";
        inputTracker.value = '';
    }
    if (inputTracker.value === 'Nur2001') {
        deliveryFormInfoSpan.innerText = "Тапсырысыңыздың күйі: Алматыға келді, бір сағат ішінде жеткізу";
        inputTracker.value = '';
    }
    if (inputTracker.value === 'Nur2002') {
        deliveryFormInfoSpan.innerText = "Өтінішіңіздің жағдайы: Нұр-Сұлтаннан Көкшетауға бет алды";
        inputTracker.value = '';
    }
    if (inputTracker.value === 'Nur2003') {
        deliveryFormInfoSpan.innerText = "Сіздің өтінішіңіздің күйі: Қостанайға барар жолда 8 сағат";
        inputTracker.value = '';
    }
    if (inputTracker.value === 'Nur2004') {
        deliveryFormInfoSpan.innerText = "Сіздің өтінішіңіздің жағдайы: Ақтөбеге келді, екі сағат ішінде жеткізу";
        inputTracker.value = '';
    }
    if (inputTracker.value === 'Nur2005') {
        deliveryFormInfoSpan.innerText = "Өтінішіңіздің жағдайы: 20 сағат жолда, Ақтауға жету уақыты 22.00";
        inputTracker.value = '';
    }

},)









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

