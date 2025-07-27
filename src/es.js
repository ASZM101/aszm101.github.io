/*** HEADER ***/

document.querySelector('header.es').innerHTML = `
    <a href="inicio.html" id="nav-logo"><img src="../assets/img/logo-shadow.png" alt="Logo" title="Inicio"></a>
    <nav>
        <a href="proyectos.html"><img src="../assets/img/projects.png" alt="Bombillo" title="Proyectos"></a>
        <a href="articulos.html"><img src="../assets/img/articles.png" alt="Papel y lápiz" title="Artículos"></a>
        <a href="videos.html"><img src="../assets/img/videos.png" alt="Cámara de video" title="Videos"></a>
        <a href="contacto.html"><img src="../assets/img/contact.png" alt="Sobre abierto" title="Contacto"></a>
        <a href="curriculum.html"><img src="../assets/img/resume.png" alt="Maletín" title="Currículum"></a>
        <a href="../index.html"><img src="../assets/img/usa.png" alt="Bandera de los Estados Unidos" title="English"></a>
    </nav>
`;

/*** COPY BUTTONS ***/

// Discord username
document.querySelector('button.discord.es').addEventListener('click', (e) => {
    const username = document.querySelector('#discord-username');
    username.select();
    navigator.clipboard.writeText(username.value);
    document.execCommand('copy');
    alert(`Usuario de Discord copiado: ${username.value}`);
});