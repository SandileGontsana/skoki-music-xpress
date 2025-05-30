// Cached core static resources 
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", './public/logo192.png']);
        })
    );
});

// Fetch resources
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video-background');
    video.play().catch(e => {
        // Fallback if autoplay is blocked
        video.controls = true;
    });
});
