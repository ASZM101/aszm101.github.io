/*** VARIABLE ICONS ***/

// Icons inside button tags
document.querySelectorAll('button.var-icon').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        p = btn.querySelector('p');
        if (p) {
            p.style.color = 'white';
        }
        btn.querySelectorAll('img.var-icon').forEach(icon => {
            // Before mouseover (original): icon is black
            fullSrc = icon.src.split('/');
            oldFile = fullSrc[fullSrc.length - 1];
            name = oldFile.slice(0, oldFile.indexOf('-'));
            icon.src = `assets/img/${name}-white.png`;
            // While mouseover (on hover): icon is white
        });
    });
    btn.addEventListener('mouseout', () => {
        p = btn.querySelector('p');
        if (p) {
            p.style.color = 'black';
        }
        btn.querySelectorAll('img.var-icon').forEach(icon => {
            // Before mouseout (on hover): icon is white
            fullSrc = icon.src.split('/');
            oldFile = fullSrc[fullSrc.length - 1];
            name = oldFile.slice(0, oldFile.indexOf('-'));
            icon.src = `assets/img/${name}-black.png`;
            // While mouseout (original): icon is black
        });
    });
});

// Contact form button
contactFormIcon = document.querySelector('#contact-form img');
contactFormIcon.addEventListener('mouseover', () => {
    // Before mousover (original): icon is white
    fullSrc = contactFormIcon.src.split('/');
    oldFile = fullSrc[fullSrc.length - 1];
    name = oldFile.slice(0, oldFile.indexOf('-'));
    contactFormIcon.src = `assets/img/${name}-black.png`;
    // While mouseover (on hover): icon is black
});
contactFormIcon.addEventListener('mouseout', () => {
    // Before mouseout (on hover): icon is black
    fullSrc = contactFormIcon.src.split('/');
    oldFile = fullSrc[fullSrc.length - 1];
    name = oldFile.slice(0, oldFile.indexOf('-'));
    contactFormIcon.src = `assets/img/${name}-white.png`;
    // While mouseout (original): icon is white
});