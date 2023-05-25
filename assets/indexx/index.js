//Dropdown Start
const optionMenu=document.querySelector('.dropdown')
const selectBtn = optionMenu.querySelector('.dropbtn')
const options = optionMenu.querySelectorAll('.item')

selectBtn.addEventListener('click', ()=> optionMenu.classList.toggle('active'))

const optionMenu2=document.querySelector('.dropdown2')
const selectBtn2 = optionMenu2.querySelector('.dropbtn2')
const options2 = optionMenu2.querySelectorAll('.item2')

selectBtn2.addEventListener('click', ()=> optionMenu2.classList.toggle('active'))
//Dropdown End
