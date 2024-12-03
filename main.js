document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default behavior (navigation)
    
    // Remove 'active' class from all sections
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });
    
    // Get the target section by its ID
    const targetId = event.target.getAttribute('href').substring(1); // Extract the ID from the href (e.g., "#about" => "about")
    const targetElement = document.getElementById(targetId); // Find the target section
    
    // Add the 'active' class to the clicked section
    targetElement.classList.add('active');
    
    // Scroll to the target section smoothly
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
