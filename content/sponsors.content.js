const SponsorsDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const Sponsors = [
    {
        name: 'Island Yacht Club',
        description: 'Nestled on a private island and dedicated to active, resort-style living, Island Yacht Club is your Cottage-in-the-City.',
        website: 'https://iyc.ca/',
        logo: './assets/images/sponsors/iyc_logo_2019.png',
        logoStyle: '',
    },
    {
        name: 'Ontario Trillium Foundation',
        description: 'The Ontario Trillium Foundation (OTF) is an agency of the Government of Ontario, and one of Canada’s leading granting foundations.',
        website: 'https://otf.ca/',
        logo: './assets/images/sponsors/otf_logo.png',
        logoStyle: '',
    },
    {
        name: 'Bluffers Park Yacht Club',
        description: 'BPYC offers its members and visitors more than just a great view of Lake Ontario.',
        website: 'https://bpyc.on.ca/',
        logo: './assets/images/sponsors/bpyc-burgee.png',
        logoStyle: '',
    },
    {
        name: 'Harbourfront Center',
        description: 'Harbourfront Centre\'s 10-acre site, nestled along the beautiful shoreline of Lake Ontario, is an excellent way to spend the day!',
        website: 'https://www.harbourfrontcentre.com/',
        logo: './assets/images/sponsors/hfc.png',
        logoStyle: 'background-color: black;',
    },
    {
        name: 'Gone Sailing Adventures',
        description: 'Gone Sailing Adventures was founded in 2008 by Howie Colt and started charters in 2010.',
        website: 'https://www.gonesailingadventures.com/',
        logo: './assets/images/sponsors/GoneSailing_HORIZ_RGB_white-1920w-302w.png',
        logoStyle: 'background-color: #11174f;',
    }
];

const loadSponsorsDescription = (displayId) => {
    const display = document.getElementById(displayId);

    display.innerHTML = SponsorsDescription;
};

const loadSponsorsList = (displayId) => {
    const display = document.getElementById(displayId);

    let sponsorsList = '';

    Sponsors.forEach((sponsor) => {
        sponsorsList += `<dt><a href="${sponsor.website}">${sponsor.name}</a></dt><dd>${sponsor.description}<dd>`;
    });

    display.innerHTML = sponsorsList;
};


const flipCard = (sponsor) => {
    const card = `
        <div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                    <img class="sponsor-image" alt="${sponsor.name}" src="${sponsor.logo}" style="${sponsor.logoStyle}">
                </div>
                <div class="flip-box-back" onclick="window.open('${sponsor.website}', '_blank')">
                    <div class="sponsor-info">
                        <div class="sponsor-info-header"><h2>${sponsor.name}</h2></div>
                        <div class="sponsor-info-body"><p>${sponsor.description}</p></div>
                        <div class="sponsor-info-footer"><a target="_blank" href="${sponsor.website}">${sponsor.website}</a></div>
                    </div>
                </div>
            </div>
        </div>`;
    return card;
};

const displaySponsors = (containerId) => {
    const container = document.getElementById(containerId);

    Sponsors.forEach((sponsor) => {
        const card = flipCard(sponsor);
        container.innerHTML += card;
    })
};