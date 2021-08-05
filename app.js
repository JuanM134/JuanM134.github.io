const botonHamburguesa = document.getElementById('hamburguesa')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}

botonHamburguesa.addEventListener('click',toggleButton)