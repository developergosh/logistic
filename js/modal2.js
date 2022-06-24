let  modal2 = document.getElementById("my_modal2"),
     btn2 = document.getElementById("btn_modal_window2"),
     btn3 = document.getElementById("btn_modal_window3"),
     span2 = document.getElementsByClassName("close_modal_window2")[0],
     closeCallBtn = document.getElementById("closeCallBtn"),
     CallFormitems = ['Тегі: ', 'Мекен-жайы: ', 'Жүк салмағы: ', 'Қабылдау уақыты: ', 'Телефон: '];


let CallKurierName = document.getElementById('CallKurierName'),
    CallKurierAdress = document.getElementById('CallKurierAdress'),
    CallKurierBox = document.getElementById('CallKurierBox'),
    CallKurierTel = document.getElementById('CallKurierTel'),
    CallKurierTime = document.getElementById('CallKurierTime');

let
    FioCall = document.getElementById('FioCall'),
    AdressCall = document.getElementById('AdressCall'),
    WeightBoxCall = document.getElementById('WeightBoxCall'),
    TimeCall = document.getElementById('TimeCall'),
    TelCall = document.getElementById('TelCall');



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
    /*
    CallKurierName.value = '';
    CallKurierAdress.value = '';
    CallKurierBox.value = '';
    CallKurierTime.value = '';
    CallKurierTel.value = '';
     */
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





