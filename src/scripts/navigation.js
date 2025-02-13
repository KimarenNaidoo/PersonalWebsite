
export function initNavHighlight() {
    const navLinks = document.querySelectorAll('.nav-link');
    if (!navLinks.length) return;
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        navLinks.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
      });      
    });
  
    // Update active link on scroll
    /*window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 100)) {
          const id = section.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === id) {
              link.classList.add('active');
            }
          });
        }
      });
    });*/
  }