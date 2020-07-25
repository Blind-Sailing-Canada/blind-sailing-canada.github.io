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
