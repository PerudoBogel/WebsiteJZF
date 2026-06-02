const menuToggle = document.getElementById('menu-toggle');
const backToggle = document.getElementById('menuBack');
const menu = document.getElementById('menu');
const menuLogo = document.getElementById('menu-logo');
const menuName = document.getElementById('menu-name');
const menuItems = document.querySelectorAll('#menu a');
const footer = document.querySelector('footer');
const header = document.querySelector('header');

function adjustMenuAndFooterHeight() {
    const width = window.innerWidth;
    const resizeThreshold = 0.14;
    
    if (resizeThreshold * width < 159)
    {
        // base the menu and footer height on the width of navi graphic which is 159px x 65px.
        // if the width of the screen is less than 15% of the width of the navi graphic, 
        // decrease the height of all footer and manu elements to match proportionally reduced height of graphic.
        const newHeight = resizeThreshold * width * 65 / 159;
        if (menu) menu.style.height = `${newHeight}px`;
        if (footer) footer.style.height = `${newHeight}px`;
        if (menuToggle) menuToggle.style.height = `${newHeight}px`;
        if (menuLogo) menuLogo.style.height = `${newHeight}px`;
        if (menuName) menuName.style.height = `${newHeight}px`;
        if (header) header.style.height = `${newHeight}px`;
        // Also reduce font sizes in menu items to match the reduced height of the menu. at 65px header height font is 40px.
        // #menu-option width is 150px at 65px header height, so reduce it proportionally as well.
        const menuOptions = document.querySelectorAll('#menu-option');
        const newWidth = newHeight * 150 / 65;
        if (menuOptions) {
            menuOptions.forEach(option => {
                option.style.width = `${newWidth}px`;
            });
        }
        // header defines fontsize for all menu items, so reduce it proportionally as well.
        const fontSize = newHeight * 20 / 65;
        if (header) {
            header.style.fontSize = `${fontSize}px`;
        }
        if (footer) {
            footer.style.fontSize = `${fontSize}px`;
        }

        // divider in #menu-select li:not(:last-child)::after is 50px at 65px header height, so reduce it proportionally as well.
        const dividerSize = newHeight * 50 / 65;
        let dynamicStyleTag = document.getElementById('dynamic-menu-styles');
        if (!dynamicStyleTag) {
            dynamicStyleTag = document.createElement('style');
            dynamicStyleTag.id = 'dynamic-menu-styles';
            document.head.appendChild(dynamicStyleTag);
        }
        dynamicStyleTag.textContent = `#menu-select li:not(:last-child)::after { font-size: ${dividerSize}px; }`;
    }
}

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
    adjustMenuAndFooterHeight();

    window.addEventListener('resize', function() {adjustMenuAndFooterHeight();});
    window.addEventListener("orientationchange", function() {adjustMenuAndFooterHeight();});
    
});
