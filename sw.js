var cacheName = "ftm";

var filesToCache = [
  // infrastructure files ----------------------------------------------------------------------------------------------

  "./index.html",
  "./feedTheMonster.js",
  "./sw.js",
  "./manifest.json",
  "./assets/images/favicon.png",
  "./assets/images/idle4.png",
  "./assets/images/eat4.png",
  "./assets/images/spit4.png",
  "./assets/images/bg_v01.jpg",
  "./assets/images/hill_v01.png",
  "./assets/images/timer_empty.png",
  "./assets/images/Totem_v02_v01.png",
  "./assets/images/FG_a_v01.png",
  "./assets/images/timer.png",
  "./assets/images/fence_v01.png",
  "./assets/images/close_btn.png",
  "./assets/images/map_btn.png",
  "./assets/images/next_btn.png",
  "./assets/images/pause_v01.png",
  "./assets/images/timer_full.png",
  "./assets/images/levels_v01.png",
  "./assets/images/bar_empty_v01.png",
  "./assets/images/bar_full_v01.png",
  "./assets/images/popup_bg_v01.png",
  "./assets/images/WIN_screen_bg.png",
  "./assets/images/pinStar1.png",
  "./assets/images/pinStar2.png",
  "./assets/images/pinStar3.png",
  "./assets/images/stone_pink_v02.png",
  "./assets/images/retry_btn.png",
  "./assets/images/Play_button.png",
  "./assets/images/title.png",
  "./assets/images/mapIcon.png",
  "./assets/images/map.jpg",
  "./assets/images/star.png",
  "./assets/audios/fantastic.WAV",
  "./assets/audios/good job.WAV",
  "./assets/audios/great.wav",
  "./assets/audios/Monster Spits wrong stones-01.mp3",
  "./assets/audios/Cheering-02.mp3",
  "./assets/audios/Disapointed-05.mp3",
  "./assets/audios/ButtonClick.wav",
  "./assets/audios/LevelWinFanfare.mp3",
  "./assets/audios/LevelLoseFanfare.mp3",
  "./assets/audios/intro.wav",
  "./assets/audios/onDrag.mp3",
  "./assets/audios/timeout.mp3",
  //--------------------------------------------------------------------------------------------------------------------

  // app files ---------------------------------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------------------------------------------
];

// check if service worker is installed before
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(function () {
      console.log("sw: registration ok");
    })
    .catch(function (err) {
      console.error(err);
    });
}

// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Install' event. Writing files to browser cache
 *
 * @param {string} Event name ('install')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("sw: writing files into cache");
      return cache.addAll(filesToCache);
    })
  );
});
// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Activate' event. Service worker is activated
 *
 * @param {string} Event name ('activate')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener("activate", function (event) {
  console.log("sw: service worker ready and activated", event);
});
// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Fetch' event. Browser tries to get resources making a request
 *
 * @param {string} Event name ('fetch')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener("fetch", function (event) {
  event.respondWith(
    // test if the request is cached
    caches
      .match(event.request)
      .then(function (response) {
        // 1) if response cached, it will be returned from browser cache
        // 2) if response not cached, fetch resource from network
        return response || fetch(event.request);
      })
      .catch(function (err) {
        // if response not cached and network not available an error is thrown => return fallback image
        return caches.match("favicon.png");
      })
  );
});

// function cacheNewFiles(ftc){
//   caches.open(cacheName).then(function(cache) {
//     console.log("sw: adding new files");
//     return cache.addAll(ftc);
//   });
// }
