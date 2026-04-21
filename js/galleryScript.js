const footer = document.getElementsByTagName('footer')[0];
const params = new URLSearchParams(window.location.search);
const cat = params.get('cat');
const gal = params.get('gal');
const key = `${cat}/${gal}`;
const data = galleryDetails[key];
const backLink = document.getElementById('menuBack');
backLink.href = `index.html?cat=${encodeURIComponent(cat)}`;

if (data) {
    // Build galleries and arrow navigation.
    const files = typeof data.images !== 'undefined' ? data.images : {};;
    const galleryDiv = document.getElementsByClassName(`gallery`)[0];

    files.filter(file => {
        const ext = file.toLowerCase().slice(file.lastIndexOf('.'));
        return ext === '.jpg' || ext === '.jpeg' || ext === '.png';
    })
    .forEach(file => {
        const slide = document.createElement('div');
        slide.className = 'gallery-slide';
        const img = document.createElement('img');
        img.src = `images/${key}/${file}`;
        img.alt = 'Gallery image';
        slide.appendChild(img);
        galleryDiv.appendChild(slide);
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
    document.getElementById('title').innerText = data.description || "Brak opisu.";
}