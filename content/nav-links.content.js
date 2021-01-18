const NavLinks = [
    {
        label: 'About',
        href: '#about',
    },
    {
        label: 'Fleet',
        href: '#fleet',
    },
    {
        label: 'Sponsors',
        href: '#sponsors',
    },
    {
        label: 'Volunteers',
        href: '#volunteers',
    },
    {
        label: 'Contact Us',
        href: '#contact',
    },
];


const loadNavLinks = (displayId) => {
    const display = document.getElementById(displayId);

    let links = '';

    NavLinks.forEach((link) => {
        links += `<li><a href="${link.href}">${link.label}</a></li>`
    })

    display.innerHTML = links;
};
