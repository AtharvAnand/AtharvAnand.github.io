document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('page-transition-active');
            setTimeout(() => {
                section.style.display = 'none';
            }, 500); // Match this duration with the CSS transition time
        });

        setTimeout(() => {
            targetSection.style.display = 'block';
            targetSection.classList.add('page-transition-active');
        }, 500); // Match this duration with the CSS transition time
    });
});

// Initialize the first section to be visible with transition
document.getElementById('about').style.display = 'block';
document.getElementById('about').classList.add('page-transition-active');
