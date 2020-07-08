const originalOnScroll = window.onscroll;

const setUpScroll = (upScrollId) => {
    const upScroll = document.getElementById(upScrollId);

    window.onscroll = function (win, ev) {
        if (window.pageYOffset > 400) {
            upScroll.style.top = window.scrollY + window.innerHeight - 50;
            upScroll.style.display = 'flex';
        } else {
            upScroll.style.display = 'none';
        }

        if(originalOnScroll) {
            originalOnScroll(win, ev);
        }
    };

    upScroll.onclick = function () {
        window.scrollBy(0, -window.innerHeight);
        return false;
    };
}
