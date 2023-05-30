// Render Products Start
const container=document.querySelector('.card-container')
function createProduct(data) {
    const card = document.createElement('div')
    
    card.innerHTML=`<div class="card">
    <img src="./assets/images/${data.img}" alt="">
    <h5>${data.name}</h5>
    <p>${data.position}</p>
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
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
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