
function setUpDownScroller (upDownScrollerId) {
    const upDownScroller = document.getElementById(upDownScrollerId);
    const upScroller = document.getElementById('up-scroller');
    const downScroller = document.getElementById('down-scroller');

    const scrollListener = () => {
        upDownScroller.style.top = window.scrollY + window.innerHeight - 70;
        
        console.log('upDownScroller.style.top', upDownScroller.style.top)

        if (window.pageYOffset > 400) {
            upScroller.classList.remove("hide");
        } else {
            upScroller.classList.add("hide");
        }


        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 5) {
            downScroller.classList.add("hide");
        } else {
            downScroller.classList.remove("hide");
        }
    }

    upScroller.onclick = function () {
        window.scrollBy(0, -window.innerHeight);
        return false;
    };

    downScroller.onclick = function () {
        window.scrollBy(0, window.innerHeight);
        return false;
    };

    scrollListener()

    window.addEventListener('scroll', scrollListener);
}

function showUpDownScroller() {
    const scroller = document.getElementById('upDownScroller');
    scroller.classList.remove("hidden");
}

function hideUpDownScroller() {
    const scroller = document.getElementById('upDownScroller');
    scroller.classList.add("hidden");
}
