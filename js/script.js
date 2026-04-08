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

    // Build galleries and arrow navigation.
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
                const slide = document.createElement('div');
                slide.className = 'gallery-slide';
                const img = document.createElement('img');
                img.src = `images/${catalogKey}/${file}`;
                img.alt = 'Gallery image';
                slide.appendChild(img);
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

    const aboutSlider = document.querySelector('.text-slider');
    const aboutSection = document.getElementById('about');
    if (aboutSlider && aboutSection && typeof aboutSlides !== 'undefined') {
        aboutSlides.forEach(text => {
            const slide = document.createElement('div');
            slide.className = 'text-slide';
            const paragraph = document.createElement('p');
            paragraph.innerHTML = text;
            slide.appendChild(paragraph);
            aboutSlider.appendChild(slide);
        });

        const prevButton = aboutSection.querySelector('.text-nav-left');
        const nextButton = aboutSection.querySelector('.text-nav-right');
        const totalSlides = aboutSlides.length;
        let currentIndex = 0;

        const updateArrowVisibility = () => {
            if (prevButton) {
                prevButton.style.display = currentIndex > 0 ? 'flex' : 'none';
            }
            if (nextButton) {
                nextButton.style.display = currentIndex < totalSlides - 1 ? 'flex' : 'none';
            }
        };

        const goToSlide = (index) => {
            currentIndex = Math.min(Math.max(index, 0), totalSlides - 1);
            aboutSlider.scrollTo({ left: currentIndex * aboutSlider.clientWidth, behavior: 'smooth' });
            updateArrowVisibility();
        };

        if (prevButton) {
            prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
        }
        if (nextButton) {
            nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));
        }

        updateArrowVisibility();

        window.addEventListener('resize', () => {
            goToSlide(currentIndex);
        });
    }
});