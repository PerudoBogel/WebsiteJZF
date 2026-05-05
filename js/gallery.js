document.addEventListener('DOMContentLoaded', function() {
    const catalog = typeof galleryCatalog !== 'undefined' ? galleryCatalog : {};
    
    // Znajdź sekcję, która jest obecna na stronie (rzezby lub medale)
    const activeSection = document.querySelector('section[id]');
    const catalogKey = activeSection ? activeSection.id : null;

    if (catalogKey && catalog[catalogKey]) {
        const galleryDiv = activeSection.querySelector('.gallery');
        if (galleryDiv) {
            const items = Object.values(catalog[catalogKey]).flat();
            
            items.forEach(item => {
                const slide = document.createElement('div');
                slide.className = 'gallery-slide';
                const link = document.createElement('a');
                link.href = `galleryDetail.html?cat=${catalogKey}&gal=${encodeURIComponent(item.name)}`;
                
                const img = document.createElement('img');
                img.src = `images/${catalogKey}/${item.name}/${item.cover}`;
                img.alt = item.name;
                
                link.appendChild(img);
                slide.appendChild(link);
                galleryDiv.appendChild(slide);
            });
        }
    }

    // Obsługa strzałek
    document.querySelectorAll('.gallery-container').forEach(container => {
        const gallery = container.querySelector('.gallery');
        const prev = container.querySelector('.gallery-nav-left');
        const next = container.querySelector('.gallery-nav-right');

        if (prev) prev.addEventListener('click', () => gallery.scrollBy({ left: -gallery.clientWidth, behavior: 'smooth' }));
        if (next) next.addEventListener('click', () => gallery.scrollBy({ left: gallery.clientWidth, behavior: 'smooth' }));
    });
});
