var modal = document.getElementById("my_modal");
var btn = document.getElementById("btn_modal_window");
var spanClose = document.getElementById("span-close");
var span = document.getElementsByClassName("close_modal_window")[0];

let ConfirmOrderBtn = document.getElementById('cofirmOrderBtn'),
    FioOrder = document.getElementById('FioOrder'),
    payMethod = document.getElementById('pay-method'),
    statusDelivery = document.getElementById('status-delivery'),
    deliveryTerm = document.getElementById('delivery-term'),

    deliveryCostSpan = document.getElementById('delivery-cost-span'),
    trackerNumber = document.getElementById('trackerNumber');



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


