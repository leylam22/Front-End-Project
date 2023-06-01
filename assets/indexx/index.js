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
function createProduct(products) {
    const card = document.createElement('div')
    
    card.innerHTML=`<div class="card" data-aos="zoom-in">
    <img src="./assets/images/${products.img}" alt="">
    <img class="hover-img" src="./assets/images/${products.hoverImg}" alt="">
    <div class="hidden-part">
        <a href="#">
            <span class="addCart">Add to cart</span>
        </a>
        <div>
            <i class="fa-regular fa-heart fa-2xl" style="color: #bcac76;"></i>
            <i class="fa-solid fa-arrows-up-down-left-right fa-2xl" style="color: #bcac76;"></i>
        </div>
    </div>
    <span class="title">${products.name}</span>
    <div class="hidden-stars">
        <p>$${products.price}.00</p>
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
    let _temp = [...products];
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

    function openBasket() {
        document.getElementById("basket").style.width = "600px";
    }
    function closeBasket() {
        document.getElementById("basket").style.width = "0";
    }



//BASKET


document.addEventListener('DOMContentLoaded', () => {
    onLoadCartNumbers();
    displayCart();
});


let carts = document.querySelectorAll('.addCart');

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumber = localStorage.getItem('cartNumbers');

    if (productNumber) {
        document.querySelector('.cart span').textContent = productNumber;
    }
}

function cartNumbers(product) {
    let productNumber = localStorage.getItem('cartNumbers');
    productNumber = parseInt(productNumber);

    if (productNumber) {
        localStorage.setItem('cartNumbers', productNumber + 1);
        document.querySelector('.cart span').textContent = productNumber + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            };
        }
        cartItems[product.name].inCart += 1 || 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.name]: product
        };
    }
    localStorage.setItem('productInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseFloat(cartCost);
    } else {
        cartCost = 0;
    }
    cartCost = cartCost + parseFloat(product.price);
    localStorage.setItem('totalCost', cartCost.toString());
}


function displayCart() {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.basket').querySelector('.top');
    let cartCost = localStorage.getItem('totalCost');

    if (cartItems && Object.keys(cartItems).length > 0 && productContainer !== null) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map((x) => {
            productContainer.innerHTML += `
            <div class="products">
                <img src="./assets/images/${x.img}" alt="">
                <div>
                    <h3>${x.name}</h3>
                    <p>Quantity: ${x.inCart}</p>
                    <p>Price: $${x.price}</p>
                </div>
                <h3 class="clear">&times;</h3>
            </div> 
            <hr>
            `;
        });

        let total = document.querySelector('.total').querySelector('h5');
        total.innerHTML = `$${cartCost}`;
    }
}


onLoadCartNumbers();
displayCart();
