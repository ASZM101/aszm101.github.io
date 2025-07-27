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

/*** COPY BUTTONS ***/

// Discord username in English
document.querySelector('button.discord.en').addEventListener('click', (e) => {
    const username = document.querySelector('#discord-username');
    username.select();
    navigator.clipboard.writeText(username.value);
    document.execCommand('copy');
    alert(`Copied Discord username: ${username.value}`);
});