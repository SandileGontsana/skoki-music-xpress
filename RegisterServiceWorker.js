document.addEventListener('DOMContentLoaded', () => {
    // Service Worker registration
    function setupApp() {
        // Service Worker registration
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("ServiceWorker.js").then(() => {
                console.log("SW Registered!");
            }).catch(() => {
                console.log("SW Registration Failed");
            });
        }
    
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        const currentTheme = localStorage.getItem('theme');
    
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            if (currentTheme === 'dark') {
                themeToggle.checked = true;
            }
        }
    
        const video = document.getElementById('bgVideo');
        const source = document.getElementById('videoSource');
    
        const lightVideo = 'assets/video/music_anim.mp4';
        const darkVideo = 'assets/video/music_anim_dark.mp4';
    
        function setVideoByMode() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (source) {
                source.src = currentTheme === 'dark' ? darkVideo : lightVideo;
                video.load();
                video.play().catch(() => {
                    console.log("Autoplay prevented");
                });
            }
        }
    
        function toggleTheme() {
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
            setVideoByMode();
        }
    
        themeToggle?.addEventListener('click', toggleTheme);
    
        // Set initial video
        setVideoByMode();
    }
    
    // Run on first load
    document.addEventListener('DOMContentLoaded', setupApp);
    
    // Run when returning via back-forward cache
    window.addEventListener('pageshow', setupApp);
    
});
