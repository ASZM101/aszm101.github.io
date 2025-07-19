/*** HEADER ***/
document.querySelector('header').innerHTML = `
    <a href="index.html" id="nav-logo"><img src="assets/img/logo.png" alt="Logo" title="Home"></a>
    <nav>
        <a href="projects.html"><img src="assets/img/projects.png" alt="Light bulb" title="Projects"></a>
        <a href="https://medium.com/@aszm" target="_blank"><img src="assets/img/articles.png" alt="Paper and pencil" title="Articles"></a>
        <a href="https://www.youtube.com/@aszm" target="_blank"><img src="assets/img/videos.png" alt="Video camera" title="Videos"></a>
        <a href="contact.html"><img src="assets/img/contact.png" alt="Open envelope" title="Contact"></a>
        <a href="resume.html"><img src="assets/img/resume.png" alt="Briefcase" title="Resume"></a>
    </nav>
`;

/*** FOOTER ***/
document.querySelector('footer').innerHTML = `
    <small id="copyright" class="center">&copy; 2025 Adriana Zambrano. All rights reserved.</small>
`;