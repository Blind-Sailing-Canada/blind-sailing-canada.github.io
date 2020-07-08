const VOLUNTEER_POSITIONS = [
    {
        title: 'Skipper',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        title: 'Crew',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        title: 'Boat Maintenance',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        title: 'Social events',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        title: 'Social media',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        title: 'Fund raising',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        title: 'Web development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
];

const createAccordion = (displayId, data) => {
    const display = document.getElementById(displayId);

    data.forEach((info, index) => {
        const panel = `
            <div class="accordion-panel${(index === (data.length - 1)) && (data.length % 2 === 1) ? '-span' : ''}">
                <button class="accordion-button">${info.title}</button>
                <div class="accordion-description">
                    <p>${info.description}</p>
                </div>
            </div>
        `;
        display.innerHTML += panel;
    });

    const accordionButtons = document.getElementsByClassName('accordion-button');

    for (let i = 0; i < accordionButtons.length; i += 1) {
        const button = accordionButtons[i];

        button.addEventListener("click", () => {
            button.classList.toggle("active");
            const description = button.nextElementSibling;
            if (description.style.maxHeight) {
                description.style.maxHeight = null;
            } else {
                description.style.maxHeight = description.scrollHeight + "px";
            }
        });
    };
};
