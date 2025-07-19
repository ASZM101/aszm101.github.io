/*** HEADER ***/
document.querySelector('header').innerHTML = `
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
document.querySelectorAll('button.var-icon').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.querySelector('p').style.color = 'white';
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
        btn.querySelector('p').style.color = 'black';
        btn.querySelectorAll('img.var-icon').forEach(icon => {
            // Before mouseout (on hover): icon is white
            fullSrc = icon.src.split('/');
            oldFile = fullSrc[fullSrc.length - 1];
            name = oldFile.slice(0, oldFile.indexOf('-'));
            icon.src = `assets/img/${name}-black.png`;
            // While mouseout (original): icon is black
        });
    });
    // Simulating active pseudo class (not changing icon color, a bit laggy with changing text color)
    // btn.addEventListener('click', () => {
    //     btn.querySelector('p').style.color = 'black';
    //     btn.querySelectorAll('img.var-icon').forEach(icon => {
    //         // Before click: icon is white
    //         fullSrc = icon.src.spllit('/');
    //         oldFile = fullSrc[fullSrc.length - 1];
    //         name = oldFile.slice(0, oldFile.indexOf('-'));
    //         icon.src = `assets/img/${name}-black.png`;
    //         // While click: icon is black
    //     })
    // });
});