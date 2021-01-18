const autoPlayVideo = (videoId) => {
    if (!!window.IntersectionObserver) {
        let video = document.getElementById(videoId);
        let isPaused = true; /* flag for auto-pausing of the video */
        let observer = new IntersectionObserver((entries, observer) => {
            console.log('foo')
            entries.forEach(entry => {
                console.log(entry.intersectionRatio)
                if (entry.intersectionRatio >= 0.4) {
                    video.play();
                    // video.muted = video.muted? true: false
                    isPaused = false;
                } else {
                    video.pause();
                    isPaused = true;
                }
            });
        }, { threshold: [0, 0.25, 0.5, 0.75, 1] });
        observer.observe(video);
    }
};