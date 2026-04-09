document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuLinks = document.getElementById('menu-select').querySelectorAll('a');
    const sections = document.querySelectorAll('section');

    menuToggle.addEventListener('click', function() {
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
        menuToggle.style.display = menuToggle.style.display === 'none' ? 'flex' : 'none';
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
            menu.style.display = 'none';
            menuToggle.style.display = 'flex';
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

    // Render timeline for osiagniecia section
    const timelineContainer = document.querySelector('.timeline-container');
    if (timelineContainer && typeof timelineEvents !== 'undefined' && typeof timelineMilestones !== 'undefined') {
        const timeline = document.createElement('div');
        timeline.className = 'timeline';

        // Create axis line
        const axis = document.createElement('div');
        axis.className = 'timeline-axis';
        timeline.appendChild(axis);

        // Calculate year range based on EVENTS only
        const eventYears = timelineEvents.map(e => parseInt(e.year));
        const minYear = Math.min(...eventYears);
        const maxYear = Math.max(...eventYears);
        const yearRange = maxYear - minYear;
        const totalEvents = timelineEvents.length;

        // Add milestones positioned based on their actual timestamps
        timelineMilestones.forEach(milestone => {
            const milestoneYear = parseInt(milestone.year);
            
            // Only show milestones within the event year range
            if (milestoneYear < minYear || milestoneYear > maxYear) {
                return;
            }
            
            // Position proportionally based on the year within the event range
            const yearPosition = yearRange > 0 ? ((milestoneYear - minYear) / yearRange) * 100 : 0;

            const milestoneDiv = document.createElement('div');
            milestoneDiv.className = 'timeline-milestone';
            milestoneDiv.style.left = `${yearPosition}%`;

            const marker = document.createElement('div');
            marker.className = 'timeline-milestone-marker';

            const text = document.createElement('div');
            text.className = 'timeline-milestone-text';
            text.textContent = milestone.label;

            milestoneDiv.appendChild(text);
            milestoneDiv.appendChild(marker);
            timeline.appendChild(milestoneDiv);
        });

        // Add events (evenly spaced)
        timelineEvents.forEach((event, index) => {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'timeline-event';

            const marker = document.createElement('div');
            marker.className = 'timeline-marker';

            const text = document.createElement('div');
            text.className = 'timeline-event-text';
            text.innerHTML = `<strong>${event.year}</strong><br>${event.description}`;

            eventDiv.appendChild(marker);
            eventDiv.appendChild(text);
            timeline.appendChild(eventDiv);
        });

        timelineContainer.appendChild(timeline);
    }
});