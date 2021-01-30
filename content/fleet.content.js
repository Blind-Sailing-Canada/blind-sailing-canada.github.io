const FleetDescription = ''
const Boats = [
    {
        title: 'C-Breez',
        description: '22ft. Catalina',
    },
    {
        title: 'Catch-the-wind',
        description: '27ft. Catalina',
    },
    {
        title: 'Alberg ',
        description: '30ft Alberg',
    },
];


const loadFleetDescription = (displayId) => {
    const display = document.getElementById(displayId);

    display.innerHTML = FleetDescription;
};

const loadBoatsList = (displayId) => {
    const display = document.getElementById(displayId);

    let boatsList = '';

    Boats.forEach((boat) => {
        boatsList += `<dt>${boat.title}</dt><dd>${boat.description}</dd>`;
    });

    display.innerHTML = boatsList;
};
