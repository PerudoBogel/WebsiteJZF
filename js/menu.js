const menuToggle = document.getElementById('menu-toggle');
const backToggle = document.getElementById('menuBack');
const menu = document.getElementById('menu');

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');

    // --- OBSŁUGA MENU ---
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.style.display = 'flex';
            menuToggle.style.display = 'none';
            if(backToggle)
            {
                backToggle.style.display = 'none';
            }
        });

        // Zamknij menu po kliknięciu w logo lub tło (opcjonalnie)
        const menuLogo = document.getElementById('menu-logo');
        if (menuLogo) {
            menuLogo.addEventListener('click', function() {
                menu.style.display = 'none';
                menuToggle.style.display = 'flex';
                if(backToggle)
                {
                    backToggle.style.display = 'flex';
                }
            });
        }
    }
});