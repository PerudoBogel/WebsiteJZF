document.addEventListener('DOMContentLoaded', function() {    
    // Build galleries and arrow navigation.
    const catalog = typeof galleryCatalog !== 'undefined' ? galleryCatalog : {};
    Object.keys(catalog).forEach(galleryId => {
        const catalogKey = galleryId;
        const files = Object.values(catalog[catalogKey])
            .flat()
            .map(item => `${catalogKey}/${item.name}/${item.cover}`);
        const galleryDiv = document.querySelector(`#${catalogKey} .gallery`);
        if (!galleryDiv) return;

        files
            .filter(file => {
                const ext = file.toLowerCase().slice(file.lastIndexOf('.'));
                return ext === '.jpg' || ext === '.jpeg' || ext === '.png';
            })
            .forEach(file => {
                const slide = document.createElement('div');
                slide.className = 'gallery-slide';
                const clicableLink = document.createElement('a');
                const galName = file.split('/')[1];
                clicableLink.href = `galleryDetail.html?cat=${encodeURIComponent(catalogKey)}&gal=${encodeURIComponent(galName)}`;
                const img = document.createElement('img');
                img.src = `images/${file}`;
                img.alt = 'Gallery image';
                clicableLink.appendChild(img);
                slide.appendChild(clicableLink);
                galleryDiv.appendChild(slide);
            });
    });

    const galleryContainers = document.querySelectorAll('.gallery-container');
    galleryContainers.forEach(container => {
        const gallery = container.querySelector('.gallery');
        const prevButton = container.querySelector('.gallery-nav-left');
        const nextButton = container.querySelector('.gallery-nav-right');
        const slides = gallery.querySelectorAll('.gallery-slide');
        let currentIndex = 0;
        const totalSlides = slides.length;

        const updateArrowVisibility = () => {
            if (!prevButton || !nextButton) return;
            if (totalSlides <= 1) {
                prevButton.style.display = 'none';
                nextButton.style.display = 'none';
                return;
            }
            prevButton.style.display = currentIndex > 0 ? 'flex' : 'none';
            nextButton.style.display = currentIndex < totalSlides - 1 ? 'flex' : 'none';
        };

        const goToSlide = (index) => {
            currentIndex = Math.min(Math.max(index, 0), totalSlides - 1);
            gallery.scrollTo({ left: currentIndex * gallery.clientWidth, behavior: 'smooth' });
            updateArrowVisibility();
        };

        if (prevButton) {
            prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
        }
        if (nextButton) {
            nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));
        }

        updateArrowVisibility();
        window.addEventListener('resize', () => goToSlide(currentIndex));
    });
});
