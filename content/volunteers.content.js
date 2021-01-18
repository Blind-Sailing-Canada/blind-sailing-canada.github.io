const VolunteersDescription = 'We would like you to share your skills, experiences, and love of sailing with our club.'
const Volunteers = [
    {
        title: 'Skipper',
        description: 'Requirements: Toronto Harbour License, POC, VHF license.',
    },
    {
        title: 'Crew',
        description: 'Requirements: Basic knowledge of sailing and handling the boat.',
    },
    {
        title: 'Boat Maintenance',
        description: 'Help with general boat maintenance, preping the boats for start of the season, and putting the boats away for the winter.',
    },
    {
        title: 'Social events',
        description: 'Help organize and run out sovial event.',
    },
    {
        title: 'Social media',
        description: 'Help us maintain our online presence.',
    },
    {
        title: 'Fund raising',
        description: 'Help us raise funds.',
    },
    {
        title: 'Web development',
        description: 'Help us with maintaing and developing our open-source website and web app. Checkout out our <a href="https://github.com/Blind-Sailing-Canada" target="_blank">github account</a>.',
    },
];


const loadVolunteersDescription = (displayId) => {
    const display = document.getElementById(displayId);

    display.innerHTML = VolunteersDescription;
};

const loadVolunteersList = (displayId) => {
    const display = document.getElementById(displayId);

    let volunteersList = '';

    Volunteers.forEach((volunteer) => {
        volunteersList += `<dt>${volunteer.title}</dt><dd>${volunteer.description}</dd>`;
    });

    display.innerHTML = volunteersList;
};
