/*** HEADER ***/
document.querySelector('header.en').innerHTML = `
    <a href="index.html" id="nav-logo"><img src="assets/img/logo-shadow.png" alt="Logo" title="Home"></a>
    <nav>
        <a href="projects.html"><img src="assets/img/projects.png" alt="Light bulb" title="Projects"></a>
        <a href="articles.html"><img src="assets/img/articles.png" alt="Paper and pencil" title="Articles"></a>
        <a href="videos.html"><img src="assets/img/videos.png" alt="Video camera" title="Videos"></a>
        <a href="contact.html"><img src="assets/img/contact.png" alt="Open envelope" title="Contact"></a>
        <a href="resume.html"><img src="assets/img/resume.png" alt="Briefcase" title="Resume"></a>
    </nav>
`;

/*** FOOTER ***/
// Saving for later
// document.querySelector('footer').innerHTML = `
//     <small id="copyright" class="center">&copy; 2025 Adriana Zambrano. All rights reserved.</small>
// `;

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
})
contactFormIcon.addEventListener('mouseout', () => {
    // Before mouseout (on hover): icon is black
    fullSrc = contactFormIcon.src.split('/');
    oldFile = fullSrc[fullSrc.length - 1];
    name = oldFile.slice(0, oldFile.indexOf('-'));
    contactFormIcon.src = `assets/img/${name}-white.png`;
    // While mouseout (original): icon is white
})

/*** COPY BUTTONS ***/

// Discord username
document.querySelector('button.discord.en').addEventListener('click', (e) => {
    const username = document.querySelector('#discord-username');
    username.select();
    navigator.clipboard.writeText(username.value);
    document.execCommand('copy');
    alert(`Copied Discord username: ${username.value}`);
})