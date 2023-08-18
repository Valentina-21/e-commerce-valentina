function scroll() {
   
    function header() {
        const header = document.querySelector('.header');

        window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          header.classList.add('scrolled');
         } else {
          header.classList.remove('scrolled');
         }
        });
    };

    header()
   
    function scrollCart() {
        document.addEventListener("DOMContentLoaded", () => {
            const cartBtn = document.querySelector(".btn--cart");
            const cart = document.querySelector(".cart");
            const cartCloseBtn = document.querySelector(".cart__btn--close");
          
            cartBtn.addEventListener("click", () => {
              cart.classList.add("cart--open");
            });
          
            cartCloseBtn.addEventListener("click", () => {
              cart.classList.remove("cart--open");
            });
          });    
    };
   
    scrollCart()
 

}
  


export default scroll;