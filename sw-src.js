importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// self.addEventListener('activate', function(e) {
//     console.log("activated");
//     // console.log(e);
// });

self.addEventListener("install", async function (e) {
  let cacheName = await getCacheName();
  self.skipWaiting();
});

self.registration.addEventListener("updatefound", function (e) {
  caches.keys().then((cacheNames) => {
    cacheNames.forEach((cacheName) => {
      caches.delete(cacheName);
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) =>
          client.postMessage({ msg: "Update Found" })
        );
      });
    });
  });
});

function cacheAudiosFiles(file, cacheName, length) {
  caches.open(cacheName).then(function (cache) {
    cache
      .add(file)
      .then(() => {
        number = number + 1;
        self.clients.matchAll().then((clients) => {
          clients.forEach((client) =>
            client.postMessage({
              msg: "Loading",
              data: Math.round((number / (length * 5)) * 100),
            })
          );
        });
      })
      .catch(function (error) {
        number = number + 1;
      });
  });
}
function getCacheName() {
  caches.keys().then((cacheNames) => {
    cacheNames.forEach((cacheName) => {
      getALLAudioUrls(cacheName);
    });
  });
}

function getALLAudioUrls(cacheName) {
  let lang = "english";
  fetch("./lang/" + lang + "/ftm_" + lang + ".json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) =>
    res.json().then((data) => {
      data.Levels.forEach((level) => {
        level.Puzzles.forEach((element) => {
          cacheAudiosFiles(element.prompt.PromptAudio, cacheName);
        });
      });
    })
  );
}
