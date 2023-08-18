let closeMenu = document.getElementById('btn--close');
let menu = document.getElementById('nav__menu');
let iconMenu = document.getElementById('btn--menu');


function openCloseMenu() {
    //Mostrar y ocultar menu por medio del icono menu
    iconMenu.addEventListener('click', () => {
        if (menu.style.left === '-100%') {
            menu.style.left = '0px'
        } else {
            menu.style.left = '-100%'
        }
    })
    //Ocultar el menu por close
    closeMenu.addEventListener('click', () => {
        menu.style.left = '-100%'
    })
}



export {openCloseMenu}