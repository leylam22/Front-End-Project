// Render Products Start
const container=document.querySelector('.card-container')
function createProduct(data) {
    const card = document.createElement('div')
    
    card.innerHTML=`<div class="card" data-aos="zoom-in">
    <img src="./assets/images/${data.img}" alt="">
    <h4>${data.title}</h4>
    <div>
        <a href="#">FASHION AND STYLE</a>
        <span>${data.date}</span>
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

function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  const img = document.querySelector('.section1').querySelector('.img')
new simpleParallax(img, {
	delay: 1.6,
    scale: 1.5,
    overflow:true,
	transition: 'cubic-bezier(0,0,0,1)'
});