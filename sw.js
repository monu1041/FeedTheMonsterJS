var cacheName = "ftm";
var version = 1.0;
var lang = 'english';
var filesToCache = [
  // infrastructure files ----------------------------------------------------------------------------------------------

  "./index.html",
  "./index.css",
  "./feedTheMonster.js",
  "./sw.js",
  "./manifest.json",
  "./assets/images/favicon.png",
  "./assets/images/idle4.png",
  "./assets/images/eat4.png",
  "./assets/images/spit4.png",
  "./assets/images/sad14.png",
  "./assets/images/happy14.png",
  "./assets/images/Install_button.png",
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
  "../../lang/"+lang+"/images/title.png",
  "./assets/images/mapIcon.png",
  "./assets/images/map.jpg",
  "./assets/images/star.png",
  "./assets/images/ftm_bonus_level_monsters.png",
  "../../lang/"+lang+"/images/fantastic_01.png",
  "./assets/images/promptTextBg.png",
  "../../lang/"+lang+"/images/great_01.png",
  "../../lang/"+lang+"/audios/fantastic.WAV",
  "./assets/audios/good job.WAV",
  "../../lang/"+lang+"/audios/great.wav",
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
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(function (res) {
      res.addEventListener("updatefound", () => {
        caches.delete(cacheName);
        console.log("Service Worker update detected!");
        caches.open(cacheName).then(function (cache) {
          console.log("sw: writing files into cache");
          return cache.addAll(filesToCache);
        });
      });
      fetch("./ftm_"+lang+".json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) =>
        res.json().then((data) => {
          for (let i = 0; i < 10; i++) {
            data.Levels[i].Puzzles.forEach((element) => {
              cacheNewFiles(element.prompt.PromptAudio);
            });
          }
        })
      );
      // getPWARegistration();
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

function cacheNewFiles(ftc) {
  caches.open(cacheName).then(function (cache) {
    console.log("sw: adding new files");
    return cache.add(ftc);
  });
}
