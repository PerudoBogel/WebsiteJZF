document.addEventListener('DOMContentLoaded', function() {
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
