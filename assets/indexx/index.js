//First top bar Dropdown Start
const optionMenu=document.querySelector('.dropdownn')
const selectBtn = optionMenu.querySelector('.dropbtn')

selectBtn.addEventListener('click', ()=> optionMenu.classList.toggle('active'))

const optionMenu2=document.querySelector('.dropdown2')
const selectBtn2 = optionMenu2.querySelector('.dropbtn2')

selectBtn2.addEventListener('click', ()=> optionMenu2.classList.toggle('active'))
//First top bar Dropdown End

// Count Down Start
var countDownDate = new Date("May 30, 2023 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.querySelector('#days').innerHTML = '00';
        document.querySelector('#hours').innerHTML = '00';
        document.querySelector('#minutes').innerHTML = '00';
        document.querySelector('#seconds').innerHTML = '00';
    }
}, 1000);

