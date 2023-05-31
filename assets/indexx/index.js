// Count Down Start
var countDownDate = new Date("Jun 31, 2023 00:00:00").getTime();
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
// Count Down End

// Render Products Start
const container=document.querySelector('.card-container')
function createProduct(data) {
    const card = document.createElement('div')
    
    card.innerHTML=`<div class="card" data-aos="zoom-in">
    <img src="./assets/images/${data.img}" alt="">
    <img class="hover-img" src="./assets/images/${data.hoverImg}" alt="">
    <div class="hidden-part">
        <a href="#">
            <span>Add to cart</span>
        </a>
        <div>
            <i class="fa-regular fa-heart fa-2xl" style="color: #bcac76;"></i>
            <i class="fa-solid fa-arrows-up-down-left-right fa-2xl" style="color: #bcac76;"></i>
        </div>
    </div>
    <span class="title">${data.name}</span>
    <div class="hidden-stars">
        <p>$${data.price}.00</p>
        <div class="stars">
            <i class="fa-solid fa-star" style="color: #bcac76;"></i>
            <i class="fa-solid fa-star" style="color: #bcac76;"></i>
            <i class="fa-solid fa-star" style="color: #bcac76;"></i>
            <i class="fa-solid fa-star" style="color: #6b6b6b;"></i>
            <i class="fa-solid fa-star" style="color: #6b6b6b;"></i>
        </div>
    </div>
</div>`

    return card;
}
function renderProducts() {
    container.innerHTML = "";
    let _temp = [...data];
    _temp.forEach((x) => {
      const productDiv = createProduct(x);
      container.append(productDiv);
    });
}
renderProducts()
//Render Products End

 var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    function openNav() {
        document.getElementById("mySidenav").style.width = "500px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }