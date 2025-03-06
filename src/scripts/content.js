
export function initNavHighlight() {
    const navLinks = document.querySelectorAll('.nav-link');
    if (!navLinks.length) return;

	const titles = document.querySelectorAll('.title');
    if (!titles.length) return;
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        navLinks.forEach(link => link.classList.remove('active'));
		titles.forEach(title => title.classList.remove('active'));

        e.target.classList.add('active');
		
		titles.forEach(title => {
			if (link.innerText == title.innerText)
				title.classList.add("active");
		});
      });    
    });
}