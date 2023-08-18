function darkMode() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;
   
    if (localStorage.getItem('dark-mode-toggle') === 'enabled') {
        body.classList.add('dark-mode-toggle');
      }
    darkModeToggle.addEventListener('click', () => {
       body.classList.toggle('dark-mode');
    });
    
     if (body.classList.contains('dark-mode')) {
         localStorage.setItem('dark-mode', 'enabled');
        } else {
           localStorage.setItem('dark-mode', 'disabled');
        }
        
}



export default darkMode;