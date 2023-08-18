import cart from "./components/cart.js";
import darkMode from "./components/darkMode.js";
import loader from "./components/loader.js";
import modal from "./components/modal.js";
import products from "./components/products.js";
import scroll from "./components/scroll.js";
import showCart from "./components/showCart.js";
import showMenu from "./components/showMenu.js";
import getProducts from "./helpers/getProducts.js";
import { apiProducts } from "./components/api.js";


/*** UI Elements */

// hidden loader
loader()

// showMenu
showMenu()

// showCart
showCart()

/* End UI Elements */
// Modal
const { showModal, showModalNoArticles, thanks, confirmation } = modal();

//Products
const { db, printProducts } = products(await getProducts())

// Cart
cart(db, printProducts, showModal, showModalNoArticles,
    thanks, confirmation)

// Dark-Mode
darkMode()

// scroll
scroll()

/* Modal Details */
// Details Products
function showProductDetails(product) {
   const modalDetails = document.querySelector('.modal__details');
   const modalTitle = modalDetails.querySelector('.modal__title');
   const modalText = modalDetails.querySelector('.modal__text');
   const modalCloseBtn = modalDetails.querySelector('.modal__close-btn');
 
    modalTitle.textContent = product.name;
    modalText.textContent = product.description;
 
    modalDetails.classList.add('show-modal');
 
    modalCloseBtn.addEventListener('click', closeModal);
    modalDetails.addEventListener('click', outsideClick);
}
 
function closeModal() {
   const modalDetails = document.querySelector('.modal__details');
     modalDetails.classList.remove('show-modal');
}
  
function outsideClick(e) {
   const modalDetails = document.querySelector('.modal__details');
     if (e.target === modalDetails) {
      closeModal();
     }
}
 
// Obtener los botones de detalles y agregar el evento al hacer clic
const showDetailsButtons = document.querySelectorAll('.product__details');
   showDetailsButtons.forEach(button => {
     const id = parseInt(button.dataset.id);
     button.addEventListener('click', () => {
       const product = apiProducts.find(p => p.id === id);
        if (product) {
         showProductDetails(product);
        }
     });
   });



