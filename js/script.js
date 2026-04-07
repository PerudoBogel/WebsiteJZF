document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuLinks = menu.querySelectorAll('a');
    const sections = document.querySelectorAll('section');

    menuToggle.addEventListener('click', function() {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');

            sections.forEach(section => {
                section.classList.remove('active');
            });

            const welcomeSection = document.getElementById('welcome');
            if (welcomeSection && sectionId !== 'welcome') {
                welcomeSection.classList.remove('active');
                welcomeSection.style.display = 'none';
            }

            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Populate galleries from directory catalog
    const catalog = typeof galleryCatalog !== 'undefined' ? galleryCatalog : {};
    const dirMapping = typeof galleryDirMapping !== 'undefined' ? galleryDirMapping : {};

    Object.keys(dirMapping).forEach(galleryId => {
        const catalogKey = dirMapping[galleryId];
        const files = catalog[catalogKey] || [];
        const galleryDiv = document.querySelector(`#${galleryId} .gallery`);
        if (!galleryDiv) return;

        files
            .filter(file => {
                const ext = file.toLowerCase().slice(file.lastIndexOf('.'));
                return ext === '.jpg' || ext === '.jpeg' || ext === '.png';
            })
            .forEach(file => {
                const img = document.createElement('img');
                img.src = `images/${catalogKey}/${file}`;
                img.alt = 'Gallery image';
                galleryDiv.appendChild(img);
            });
    });

    // Add drag/swipe functionality
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => {
        let isDown = false;
        let startX;
        let scrollLeft;

        gallery.addEventListener('mousedown', (e) => {
            isDown = true;
            gallery.classList.add('active');
            startX = e.pageX - gallery.offsetLeft;
            scrollLeft = gallery.scrollLeft;
        });

        gallery.addEventListener('mouseleave', () => {
            isDown = false;
            gallery.classList.remove('active');
        });

        gallery.addEventListener('mouseup', () => {
            isDown = false;
            gallery.classList.remove('active');
        });

        gallery.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - gallery.offsetLeft;
            const walk = (x - startX) * 2; // scroll speed
            gallery.scrollLeft = scrollLeft - walk;
        });

        // For touch
        gallery.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - gallery.offsetLeft;
            scrollLeft = gallery.scrollLeft;
        });

        gallery.addEventListener('touchend', () => {
            isDown = false;
        });

        gallery.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - gallery.offsetLeft;
            const walk = (x - startX) * 2;
            gallery.scrollLeft = scrollLeft - walk;
        });
    });
});