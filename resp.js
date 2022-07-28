Burger= document.querySelector('.burger')
Navbar= document.querySelector('.navbar')
Navlist= document.querySelector('.navlist')
Rightnav= document.querySelector('.rightnav')

Burger.addEventListener('click',()=>{
Rightnav.classList.toggle('v-class')
Navlist.classList.toggle('v-class')
Navbar.classList.toggle('h-class')

})