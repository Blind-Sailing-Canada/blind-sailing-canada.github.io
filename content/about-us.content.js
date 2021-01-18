const AboutUsContent = {
    description: `
    <p>The Blind Sailing Association of Canada (BSAC) is a charitable organization mandated to bring the sailing experience to blind and visually impaired persons.<p>
    <p>Out boats are skippered and crewed by sighted volunteers.</p>
    <p>BSAC has a number of sailing programs for all levels of interest raging from learning how to sail to learning to race raicing.</p>`
};

const loadAboutUs = (displayId) => {
    const display = document.getElementById(displayId);
    display.innerHTML = AboutUsContent.description;
};
