
export function initNavHighlight() {
    const navLinks = document.querySelectorAll('.nav-link');
    if (!navLinks.length) return;
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        navLinks.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
      });      
    });
  }