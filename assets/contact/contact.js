const img = document.querySelector('.section1').querySelector('.img')
new simpleParallax(img, {
	delay: 1.6,
    scale: 1.5,
    overflow:true,
	transition: 'cubic-bezier(0,0,0,1)'
});
function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }