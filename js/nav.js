function openNavMenu() {
    const main = document.getElementById("main");
    main.setAttribute('aria-hidden', 'true');

    // hide all other links
    main.querySelectorAll("a").forEach(a => a.setAttribute('tabIndex', '-1'))

    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("open");
    menu.focus()

    const closeButton = document.getElementById('nav-menu-close-button');
    closeButton.classList.toggle("hidden");

    const openButton = document.getElementById('nav-menu-open-button');
    openButton.classList.toggle("hidden");
}

function closeNavMenu() {
    const main = document.getElementById("main");
    main.setAttribute('aria-hidden', 'false');

    // un-hide all other links
    main.querySelectorAll("a").forEach(a => a.removeAttribute('tabIndex'))

    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("open");

    const closeButton = document.getElementById('nav-menu-close-button');
    closeButton.classList.toggle("hidden");

    const openButton = document.getElementById('nav-menu-open-button');
    openButton.classList.toggle("hidden");
}