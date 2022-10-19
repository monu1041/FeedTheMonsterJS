importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

console.log(self);

self.addEventListener('activate', function(e) {
    console.log("activated");
    // console.log(e);
});

self.addEventListener('install', async function(e) {
    console.log("install");
    let cacheName = await getCacheName();
    console.log(cacheName);

    self.skipWaiting();
    // console.log(e);
});

self.registration.addEventListener('updatefound', function(e) {
    console.log(e);
    caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
            caches.delete(cacheName);
            self.clients.matchAll().then(clients => {
                clients.forEach(client => client.postMessage({msg: 'Update Found'}));
            })
        });
    });
});




function cacheAudiosFiles(file, cacheName) {
    caches.open(cacheName).then(function (cache) {
      console.log("sw: adding AUdio files");
      return cache.add(file);
    });
  }

function getCacheName() {
    caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
            getALLAudioUrls(cacheName)
        })
    });
}

function getALLAudioUrls(cacheName) { 
    fetch("./ftm_english.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    }).then((res) =>
    res.json().then((data) => {
      for (let i = 0; i < 10; i++) {
        data.Levels[i].Puzzles.forEach((element) => {
            cacheAudiosFiles(element.prompt.PromptAudio, cacheName);
        });
      }
    })
  );
}