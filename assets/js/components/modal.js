  function modal() {
    let confirmAction = false;

    // Modal 
    // Gracias por su compra
     function thanks() {
       const modals = document.querySelector(".modal");

       modals.style.display = "block";
    
       modals.addEventListener("click", (e) => {

        if (e.target.closest('.modal__close-btn')) {
          modals.style.display = "none";
          confirmAction = false;
        }
      });
    }

    // Stock insuficiente
        function showModal(modalType) {
        const modalStock = document.querySelector('.modal__stock');
        modalStock.style.display = 'block';
       
        modalStock.addEventListener("click", (e) => {

          if (e.target.closest('.modal__close-btn')) {
            modalStock.style.display = "none";
            confirmAction = false;
          }
        });
      } 

    // No hay artículos en el carrito
       function showModalNoArticles() {
        const modalStock = document.querySelector(".modal__noarticles");

        modalStock.style.display = "block";
    
        modalStock.addEventListener("click", (e) => {

          if (e.target.closest('.modal__close-btn')) {
             modalStock.style.display = "none";
             confirmAction = false;
          }
        });
      }

    // Confirmación de compra
      function confirmation() {
      const confirmationPurchase = document.querySelector(".modal__confirmation");
      confirmationPurchase.style.display = "block";

      confirmationPurchase.addEventListener('click', (e) => {
        if (e.target.closest('.modal__confirm-btn')) {
          confirmAction = true;
          confirmationPurchase.style.display = "none";
          thanks()
        } else if (e.target.closest('.modal__close-btn')) {
          confirmationPurchase.style.display = "none"
          confirmAction = false;
        }
          
      });
        return () => confirmAction
     };
      
    return {
      showModal,
      showModalNoArticles,
      thanks,
      confirmation,
      isActionConfirmed: () => confirmAction
    }

}
    

    
export default modal;