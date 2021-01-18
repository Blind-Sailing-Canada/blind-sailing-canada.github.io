const BecomeVolunteer = `
<p> If you wish to become a volunteer, please send us an email at <a href="mailto:volunteering@blindsailing.ca">volunteering@blindsailing.ca</a> and tell us about yourself and how you would like to help. </p>
`;

const loadBecomeVolunteer = (displayId) => {
    console.log('BecomeVolunteer', BecomeVolunteer)
    const display = document.getElementById(displayId);

    display.innerHTML = BecomeVolunteer;
};
