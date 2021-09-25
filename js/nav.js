function openNavMenu() {
    hideUpDownScroller();
    
    const main = document.getElementById("main");
    main.classList.toggle("hidden");

    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("open");
    menu.focus()

    const closeButton = document.getElementById('nav-menu-close-button');
    closeButton.classList.toggle("hidden");

    const openButton = document.getElementById('nav-menu-open-button');
    openButton.classList.toggle("hidden");
}

function closeNavMenu() {
    showUpDownScroller();
    
    const main = document.getElementById("main");
    main.classList.toggle("hidden");

    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("open");

    const closeButton = document.getElementById('nav-menu-close-button');
    closeButton.classList.toggle("hidden");

    const openButton = document.getElementById('nav-menu-open-button');
    openButton.classList.toggle("hidden");
}
