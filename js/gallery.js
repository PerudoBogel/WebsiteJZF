document.addEventListener('DOMContentLoaded', function() {    
    // Pobranie parametru 'gal' z adresu URL
    const urlParams = new URLSearchParams(window.location.search);
    const targetGalleryName = urlParams.get('gal');

    // Build galleries and arrow navigation.
    const catalog = typeof galleryCatalog !== 'undefined' ? galleryCatalog : {};
    Object.keys(catalog).forEach(galleryId => {
        const catalogKey = galleryId;
        const files = Object.values(catalog[catalogKey])
            .flat()
            .map(item => `${catalogKey}/${item.name}/${item.cover}`);
        const galleryDiv = document.querySelector(`#${catalogKey} .gallery`);
        if (!galleryDiv) return;

        let targetIndex = -1;
        let currentValidIndex = 0;

        files
            .filter(file => {
                const ext = file.toLowerCase().slice(file.lastIndexOf('.'));
                return ext === '.jpg' || ext === '.jpeg' || ext === '.png';
            })
            .forEach(file => {
                const slide = document.createElement('div');
                slide.className = 'gallery-slide';
                const clicableLink = document.createElement('a');
                
                // Poprawka pobierania nazwy galerii ze ścieżki pliku
                const galName = file.split('/')[1];

                if (targetGalleryName && galName === targetGalleryName) {
                    targetIndex = currentValidIndex;
                }

                clicableLink.href = `galleryDetail.html?cat=${encodeURIComponent(catalogKey)}&gal=${encodeURIComponent(galName)}`;
                const img = document.createElement('img');
                img.src = `images/${file}`;
                img.alt = 'Gallery image';
                img.classList.add('selectable');
                clicableLink.appendChild(img);
                slide.appendChild(clicableLink);
                galleryDiv.appendChild(slide);

                currentValidIndex++;
            });

        if (targetIndex !== -1) {
            const container = galleryDiv.closest('.gallery-container');
            if (container) {
                container.dataset.initialIndex = targetIndex;
            }
        }
    });

    const galleryContainers = document.querySelectorAll('.gallery-container');
    galleryContainers.forEach(container => {
        const gallery = container.querySelector('.gallery');
        const prevButton = container.querySelector('.gallery-nav-left');
        const nextButton = container.querySelector('.gallery-nav-right');
        const slides = gallery.querySelectorAll('.gallery-slide');
        
        let currentIndex = container.dataset.initialIndex ? parseInt(container.dataset.initialIndex, 10) : 0;
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

        const goToSlide = (index, smooth = true) => {
            currentIndex = Math.min(Math.max(index, 0), totalSlides - 1);
            gallery.scrollTo({ 
                left: currentIndex * gallery.clientWidth, 
                behavior: smooth ? 'smooth' : 'auto' 
            });
            updateArrowVisibility();
        };

        if (prevButton) {
            prevButton.addEventListener('click', () => goToSlide(currentIndex - 1, true));
        }
        if (nextButton) {
            nextButton.addEventListener('click', () => goToSlide(currentIndex + 1, true));
        }

        // NATYCHMIASTOWY SKOK: Wywołanie bez scroll-behavior i bez setTimeout
        if (currentIndex > 0) {
            goToSlide(currentIndex, false);
        } else {
            updateArrowVisibility();
        }

        window.addEventListener('resize', () => goToSlide(currentIndex, false));
    });
});
