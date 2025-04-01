
export function initNavHighlight() {
    const navLinks = document.querySelectorAll('.nav-link');
    const certificate = document.getElementById('certificates');
    const project = document.getElementById('projects');

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

            if (link.innerText == "Skills")
            {
                certificate.classList.add("active");
                project.classList.add("active");
            }
		});
      });    
    });
}