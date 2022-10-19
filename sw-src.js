importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);

let messageEvent;
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

console.log(self);

self.addEventListener('activate', function(e) {
    console.log("activated");
    // console.log(e);
});

self.addEventListener('install', function(e) {
    console.log("install");
    self.skipWaiting();
    // console.log(e);
});

self.registration.addEventListener('updatefound', function(e) {
    console.log(e);
    caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
            caches.delete(cacheName);
            console.log("ghgh");
            self.clients.matchAll().then(clients => {
                clients.forEach(client => client.postMessage({msg: 'Update Found'}));
            })
        });
    });
});




