const ContactUsEmail = `You contact us by email <a href="mailto:info@blindsailing.ca">info@blindsailing.ca</a>`;

const SocialNetworks = [
    {
        class: "fa fa-facebook",
        href: "https://www.facebook.com/pages/Blind-Sailing-Association-of-Canada",
        target: "_blank",
        label: 'Facebook',
    },
    {
        class: "fa fa-twitter",
        href: "https://twitter.com/blindsailingcan",
        target: "_blank",
        label: 'Twitter',
    },
    {
        class: "fa fa-linkedin",
        href: "https://www.linkedin.com/company/blindsailing",
        target: "_blank",
        label: 'LinkedIn',
    },
    {
        class: "fa fa-youtube",
        href: "https://www.youtube.com/channel/UCluZREjvbLSSWq60VHSbpXg",
        target: "_blank",
        label: 'Youtube',
    },
    {
        class: "fa fa-instagram",
        href: "#",
        target: "_blank",
        label: 'Instagram',
    },
];

const loadContactUsEmail = (displayId) => {
    const display = document.getElementById(displayId);
    display.innerHTML = ContactUsEmail;
};

const loadContactUsSocialNetworks = (displayId) => {
    const display = document.getElementById(displayId);

    let socialNetworksList = '';

    SocialNetworks.forEach((socialNetwork) => {
        socialNetworksList += `<li><a href=${socialNetwork.href} target="${socialNetwork.target}">${socialNetwork.label}</a></li>`;
    });

    display.innerHTML = socialNetworksList;
};

const displayContactUsSocialNetworks = (displayId) => {
    const display = document.getElementById(displayId);

    let socialNetworksList = '';

    SocialNetworks.forEach((socialNetwork) => {
        socialNetworksList += `<a class="${socialNetwork.class}" href=${socialNetwork.href} target="${socialNetwork.target}"></a>`;
    });

    display.innerHTML = socialNetworksList;
};
