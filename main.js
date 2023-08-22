function darkToggle() {
    var element = document.body;
    element.classList.toggle("darkMode");

    /*
    const darkLightButton = document.getElementById('darkLightButton');
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');


       if (element.classList.contains('darkMode')) {
            darkLightButton.classList.remove('btn-dark');
            darkLightButton.classList.add('btn-light');
            darkLightButton.style.backgroundColor = 'white';
            darkLightButton.style.color = 'black';
        } else {
            if (!darkModeMediaQuery.matches) {
                darkLightButton.classList.remove('btn-light');
                darkLightButton.classList.add('btn-dark');
                darkLightButton.style.backgroundColor = '';
                darkLightButton.style.color = 'white';
            }
    } 
    */
}
   // Get references to the icon and target container
   const scrollIcon = document.getElementById('scroll-down-icon');
   const groupTablesContainer = document.getElementById('group-tables-container');

   // Add a click event listener to the scroll icon
   scrollIcon.addEventListener('click', () => {
       // Calculate the target scroll position
       const targetPosition = groupTablesContainer.getBoundingClientRect().top + window.scrollY;

       // Smooth scroll to the target position
       window.scrollTo({
           top: targetPosition,
           behavior: 'smooth'
       });
   });

   // For page 2
      // Get references to the icon and target container
      const scrollIcon2 = document.getElementById('scroll-down-icon2');
      const groupA = document.getElementById('groupA');
   
      // Add a click event listener to the scroll icon
      scrollIcon.addEventListener('click', () => {
          // Calculate the target scroll position
          const targetPosition = groupA.getBoundingClientRect().top + window.scrollY;
   
          // Smooth scroll to the target position
          window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
          });
      });

      //clickable links on group tables page 1
      document.addEventListener ("DOMContentLoaded", () => {
        const rows = document.querySelectorAll("tr[data-href]");
        
        rows.forEach(row => {
row.addEventListener("click" , () => {
    window.location.href = row.dataset.href;
            }); 
        });
      });
