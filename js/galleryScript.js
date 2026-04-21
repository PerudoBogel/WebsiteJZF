const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const sections = document.querySelectorAll('section');
const footer = document.getElementsByTagName('footer')[0];

function toggleMenu(sectionId) 
{
    sections.forEach(section => {
    section.classList.remove('active');
    });

    const welcomeSection = document.getElementById('welcome');
    if (welcomeSection && sectionId !== 'welcome') {
        welcomeSection.classList.remove('active');  
        welcomeSection.style.display = 'none';
        footer.style.display = 'block';
    }

    document.getElementById(sectionId).classList.add('active');
    menu.style.display = 'none';
    menuToggle.style.display = 'flex';
}

const params = new URLSearchParams(window.location.search);

if(params.has('cat'))
{
    switch(params.get('cat')) 
    {
        case 'rzezby':
            toggleMenu('rzezby');
            break;
        case 'medale':
            toggleMenu('medale');
            break;
        default:
            break;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.getElementById('menu-select').querySelectorAll('a');
    console.log('loaded');

    menuToggle.addEventListener('click', function() {
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
        menuToggle.style.display = menuToggle.style.display === 'none' ? 'flex' : 'none';
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            toggleMenu(sectionId);
        });
    });

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
    if (timelineContainer && typeof timelineEvents !== 'undefined') {
        const timeline = document.createElement('div');
        timeline.className = 'timeline';

        // Create axis line
        const axis = document.createElement('div');
        axis.className = 'timeline-axis';
        timeline.appendChild(axis);

        function addEventMarker(event) {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'timeline-event';

            const marker = document.createElement('div');
            marker.className = 'timeline-marker';

            const text = document.createElement('div');
            text.className = 'timeline-event-text';
            text.innerHTML = `${event.description}`;

            eventDiv.appendChild(marker);
            eventDiv.appendChild(text);
            timeline.appendChild(eventDiv);
        }
        
        function addMilestoneMarker(year,position) {
            const milestoneDiv = document.createElement('div');
            milestoneDiv.className = 'timeline-milestone';
            milestoneDiv.style.left = `${position}px`;

            const marker = document.createElement('div');
            marker.className = 'timeline-milestone-marker';

            const text = document.createElement('div');
            text.className = 'timeline-milestone-text';
            text.textContent = year;

            milestoneDiv.appendChild(text);
            milestoneDiv.appendChild(marker);
            timeline.appendChild(milestoneDiv);
        }

        // Add milestones positioned based on their actual timestamps
        eventCount = timelineEvents.length;
        eventWidth = 250;
        timelinePadding = 250;
        lastYear = null;
        for ( event_i = 0; event_i < eventCount; event_i++) {
            
            let event = timelineEvents.at(event_i);
            let eventYear = event.year;
            addEventMarker(event);

            // add milestone if year changed
            if (lastYear != eventYear) {
                addMilestoneMarker(eventYear, (event_i * eventWidth) / eventCount * 10 + timelinePadding);
            }
            lastYear = eventYear;
        };

        timelineContainer.appendChild(timeline);
    }
});