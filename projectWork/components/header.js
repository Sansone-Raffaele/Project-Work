let header = `

    <nav class="top-header">
        <a href="#">PRIVATI</a>
        <a href="#">BUSINESS</a>
        <a href="#">PREMIUM</a>
        <a href="#">POSTE ITALIANE</a>

        <img class="image" src="./images/logo-tgposte-menu.png" alt="err_img" />
    </nav>

    <nav class="sub-header">
        <img class="image" src="./images/logo-poste-italiane.png" alt="err_img" />

        <a href="#">AZIENDA</a>
        <a href="#">INVESTITORI</a>
        <a href="#">GOVERNANCE</a>
        <a href="#">MEDIA</a>
        <a href="#">CONTRATTI TRASPARENTI</a>
        <a class="active" href="#">SOSTENIBILITÀ</a>
        <a href="#">CARRIERE</a>
    </nav>

    <nav class="mobile-header">
        <button class="toggle-btn" onclick="toggleSidebar()">☰</button>

        <img class="image" src="./images/logo-poste-italiane.png" alt="err_img" />

        <div class="download-btn" onclick="scrollToDownload('download')">
            <img src="./images/direct-download.png" alt="err_img">
        </div>
    </nav>
`;

document.getElementById("header").innerHTML = header;
