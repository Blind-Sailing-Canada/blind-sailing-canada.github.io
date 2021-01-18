const BecomeSponsor = `
<div>
<p>
Our sailing programs could not operate without the generous support of our many volunteers who serve as skippers, crew support, maintenance and administrators.
</p>
<p>
We are totally member and volunteer driven, having only one or two paid students during the summer to help coordinate our many sails.
</p>
<p>
It is our goal to make the pleasure of sailing accessible to blind and partially sighted people who would otherwise be unable to participate due to limited income or the lack of inclusive programs that accommodate their unique needs.
</p>
<p> Your financial support allows the charity to deliver and enrich our programs that benefit blind sailors. </p>
<p> If you wish to make a finantial donation, please visit our CanadaHelps.org <a href="https://www.canadahelps.org/en/charities/id/90212/" target="_blank">account</a>. </p>
<p>Our charitable tax number is <span class="charitable_tax_number">864 299 425 RR0001</span>.</p>
<p>If you wish to support us in other ways, please feel free to contact us by email at <a href="mailto:info@blindsailing.ca">info@blindsailing.ca</a>.</p>
<div>
`;

const loadBecomeSponsor = (displayId) => {
    const display = document.getElementById(displayId);

    display.innerHTML = BecomeSponsor;
};
