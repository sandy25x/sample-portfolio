    // Select the bot button and bot dialog
    const botBtn = document.getElementById('botBtn');
    const botDialog = document.querySelector('.bot-dialog');
    // Add a click event to the bot button to open/close the dialog
    botBtn.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent closing the dialog when clicking the button itself
        botBtn.classList.toggle('open');
        botDialog.classList.toggle('open');
    });

    // Add an event listener to close the dialog when clicking outside of it
    document.addEventListener('click', function (event) {
        if (botDialog.classList.contains('open') && !botDialog.contains(event.target) && !botBtn.contains(event.target)) {
            botBtn.classList.remove('open'); // Remove open class from the button
            botDialog.classList.remove('open'); // Hide the dialog

    
        
          
    

        
        Expand All
    
    @@ -23,7 +22,6 @@
  
        }
    });
    // Prevent closing the dialog when clicking inside the dialog
    botDialog.addEventListener('click', function (event) {
        event.stopPropagation(); // Stop click from propagating to the document
    });

// Show the 'Recent Works' section
document.getElementById('recentWorksBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    
          
            
    

          
          Expand Down
    
    
  
    showSection('recent-works');
});
// Show the 'Get In Touch' section
document.getElementById('getInTouchBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    showSection('contact');
});
// Show the 'Experience' section
document.getElementById('experienceBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    showSection('experience');
});
// Scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Show a specific section or scroll to the top if 'home' is selected
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });
    if (sectionId === 'home') {
        scrollToTop();
    } else {
        const targetSection = document.getElementById(sectionId);
        targetSection.classList.add('active');
        targetSection.classList.remove('hidden');
        // Scroll smoothly to the section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}
