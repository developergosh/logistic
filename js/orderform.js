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





let requestButton = document.getElementById('btn_modal_window'),
    InfoCargo = document.getElementById('userCount'),
    DeliveryCity = document.getElementById('speciality'),
    deliveryto = document.getElementById('delivery-to'),
    infoBoxToSend = document.getElementById('info-box-to-send'),
    deliverySumInfo = document.getElementById('delivery-cost-span'),
    Span1 = document.getElementById('1'),
    Span2 = document.getElementById('2'),
    Span3 = document.getElementById('3'),
    Span4 = document.getElementById('4'),
    Span5 = document.getElementById('5'),
    Span6 = document.getElementById('6'),
    Span7 = document.getElementById('7'),
    Span8 = document.getElementById('8'),
    OrderCosts = document.getElementById('megabyte');




requestButton.addEventListener('click', () => {
    var text2 = InfoCargo.options[InfoCargo.selectedIndex].text;
    var text3 = DeliveryCity.options[DeliveryCity.selectedIndex].text;
    items[2] = items[2]+ text2
    items[3] = items[3]+ text3
    items[4] = items[4] + " Курьерді күтуде"
    items[5] = items[5] + " 24 сағат"
    items[7] = items[7]+ OrderCosts.innerText
    items[8] = items[8] + "Nur2000"
    deliveryto.innerText = '3.     бағыты:: ' + text3
    infoBoxToSend.innerText = '2.  Сәлемдеме түрі:: ' + text2
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
    alert(' Өтінішіңіз жіберілді, рахмет!');
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

