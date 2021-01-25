function loadPage(page) {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const template = document.createElement('template');
                template.innerHTML = this.responseText.trim();

                const content = document.getElementById('content');
                content.appendChild(template.content.firstChild);
                resolve();
            }
        };
        ajax.open("GET", page, true);
        ajax.send();
    })
}

async function loadPages() {
    await loadPage('./pages/about.html');
    await loadPage('./pages/fleet.html');
    await loadPage('./pages/sponsors.html');
    await loadPage('./pages/volunteers.html');
    await createAccordion('volunteerPositions', Volunteers);
    await loadPage('./pages/members.html');
    await loadPage('./pages/contact.html');
}
