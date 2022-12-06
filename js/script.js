function visibleMenu() {
    let menuMobile = document.querySelector('.menudesktop');
    if (menuMobile.classList.contains('aberto')) {
        menuMobile.classList.remove('aberto');
    } else {
        menuMobile.classList.add('aberto');
    }
}

function fichaShow() {
    let fichaMobile = document.querySelector('.fichatecnica');
    if (fichaMobile.classList.contains('open')) {
        fichaMobile.classList.remove('open');
    } else {
        fichaMobile.classList.add('open');
    }
}

