const Header = {
    title: 'Blind Sailing Canada',
    subtitle: 'Catch the wind, feel the freedom.',
};

const loadHeader = (displayId) => {
    const display = document.getElementById(displayId);

    display.innerHTML = `
        <h1>${Header.title}</h1>
        <h2>${Header.subtitle}</h2>
    `;
};
