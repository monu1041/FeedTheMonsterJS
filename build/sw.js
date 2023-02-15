importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

workbox.precaching.precacheAndRoute([{"revision":"ec214e1eef89105b484900ac15d92649","url":"assets/audios/ButtonClick.wav"},{"revision":"ba78f7a742fdd386f18d6798a4a2c3ee","url":"assets/audios/Cheering-02.mp3"},{"revision":"2431a6bb00bfeecfb2d5404bdd087b24","url":"assets/audios/Disapointed-05.mp3"},{"revision":"f27755d5596c69afa238221f75a19afe","url":"assets/audios/fantastic.WAV"},{"revision":"f3349f9e400da37876c81913c0be026e","url":"assets/audios/good job.WAV"},{"revision":"54e68bba98cc48aa41ab13a27f36ae96","url":"assets/audios/great.wav"},{"revision":"e9f123cc47448b1b0db77fed7490dbe1","url":"assets/audios/intro.wav"},{"revision":"6136d62b03b9a373e45219606edbb877","url":"assets/audios/LevelLoseFanfare.mp3"},{"revision":"7c86597b8546ae3274789bf8bc1ed9a0","url":"assets/audios/LevelWinFanfare.mp3"},{"revision":"227040add97b1daecd5c21c2623e480a","url":"assets/audios/Monster Spits wrong stones-01.mp3"},{"revision":"cf0c6919347cc45bc20028d6155aa5d7","url":"assets/audios/onDrag.mp3"},{"revision":"685da4a6886babc85061d0ab8224a0cf","url":"assets/audios/timeout.mp3"},{"revision":"350b01e0bccbc96d411eab95d2306802","url":"assets/images/back_btn.png"},{"revision":"d6529000992906e214d4e823e63649cb","url":"assets/images/bar_empty_v01.png"},{"revision":"811d3537ac3d81d68ec6f9484d78540c","url":"assets/images/bar_full_v01.png"},{"revision":"0eb874baac10d2a76c7cc657c756acdf","url":"assets/images/bg_v01.jpg"},{"revision":"11d8d6133c5299e99f95d9761c850ca1","url":"assets/images/close_btn.png"},{"revision":"110f61121723fc9d0d4e8d00ef90bfae","url":"assets/images/eat4.png"},{"revision":"c17266e84b2b6880a590d1f3d96b62f5","url":"assets/images/fantastic_01.png"},{"revision":"b03d0eb276c7b1ff5a8bc80aca883185","url":"assets/images/favicon.png"},{"revision":"48d57fc669287060fa6d0955dfb8d257","url":"assets/images/fence_v01.png"},{"revision":"a267e28cb011391c1df9d59f8f2b5795","url":"assets/images/FG_a_v01.png"},{"revision":"d6ac191de224ec4be62cd9b639b17e9e","url":"assets/images/ftm_bonus_level_monsters.png"},{"revision":"885ce7b3e969576b7b627e657cd9515f","url":"assets/images/great_01.png"},{"revision":"0c32634282fb7092248ddb9e74f34981","url":"assets/images/happy14.png"},{"revision":"0ab4538bcfd8f9ed476513dedfc4758a","url":"assets/images/hill_v01.png"},{"revision":"d3316f6e45930df8cdb01f0dbe2aa26c","url":"assets/images/idle4.png"},{"revision":"1bc1a2333448c7a1bcf799db23247a22","url":"assets/images/Install_button.png"},{"revision":"a7468b94a4a45f089c49ce0b894d1a0e","url":"assets/images/levels_v01.png"},{"revision":"b5fe8b7fc02c5c7dac2a7a27f9779ab2","url":"assets/images/map_btn.png"},{"revision":"426d623c79ec3526eae92a56092b2220","url":"assets/images/map.jpg"},{"revision":"74c001286f2df47d9be71f85799da028","url":"assets/images/mapIcon.png"},{"revision":"1c55255523850f041717e1698d6696d8","url":"assets/images/next_btn.png"},{"revision":"b87dad233d04f0b40641b959b438377e","url":"assets/images/pause_v01.png"},{"revision":"9fa6a44fc1fd8fe7a29685449151fe35","url":"assets/images/pinStar1.png"},{"revision":"fb71b601378213dba8c1093efc8fbc0f","url":"assets/images/pinStar2.png"},{"revision":"02644516a381dce3b2372c5c36222278","url":"assets/images/pinStar3.png"},{"revision":"a8d1a644d1120069ae6cb93ec9a186f0","url":"assets/images/Play_button.png"},{"revision":"a1c254c3f41f25b56c4f14aa517c880f","url":"assets/images/player.png"},{"revision":"785f7eb9898630eb470bbd4cdb9ee6ca","url":"assets/images/popup_bg_v01.png"},{"revision":"2f08e930ba6b1f3618105080615223c3","url":"assets/images/promptTextBg.png"},{"revision":"2ac07f7f2e98a9354e24544d514a7e0f","url":"assets/images/retry_btn.png"},{"revision":"b5afca33825309273e12bd0018017116","url":"assets/images/sad14.png"},{"revision":"6736c9d8a52dc1a2d9eb69bdf79d3c96","url":"assets/images/score_v01.png"},{"revision":"1e619d83ae2358b4f38f6616ad54df5c","url":"assets/images/sp.jpg"},{"revision":"2f112013306898a438e8734c39b72670","url":"assets/images/spit4.png"},{"revision":"ad3037a2f54a38e25b216512a523f6bc","url":"assets/images/star.png"},{"revision":"80e3f39ff0fdd17298b7871fbf7456a2","url":"assets/images/stone_pink_v02.png"},{"revision":"b6fd372111f6d3e055474ae36d18643f","url":"assets/images/timer_empty.png"},{"revision":"7cbd4851bf2afe5220302744f6a9a8b4","url":"assets/images/timer_full.png"},{"revision":"97edf28b5589c5d07294eb1682e629c5","url":"assets/images/timer.png"},{"revision":"1b8031354ddc9ae3fe83a60e723b6cbe","url":"assets/images/title.png"},{"revision":"efb93b7899c47d3422a922ef832daaf9","url":"assets/images/Totem_v02_v01.png"},{"revision":"f9bdc4998da7d621ecd0894a813ed656","url":"assets/images/WIN_screen_bg.png"},{"revision":"85e6d81b31158d1fdd92e26f85458662","url":"feedTheMonster.js"},{"revision":"6696f114d57362021d3cb34b46ab797a","url":"ftm_english.json"},{"revision":"c1e30d4c7da86f1deafffcb3a47bf392","url":"index.css"},{"revision":"a6d08d728891db43b2217d53bd0007dd","url":"index.html"},{"revision":"0cf53891ef41f6bce228c97377d8cf66","url":"manifest.json"}]);
var number = 0;

// self.addEventListener('activate', function(e) {
//     console.log("activated");
//
// });

self.addEventListener("install", async function (e) {
  let cacheName = await getCacheName();
  self.skipWaiting();
});
self.addEventListener("activate", function (event) {
  console.log("Service worker activated");
  event.waitUntil(self.clients.claim());
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
      for (var i = 0; i < data.Levels.length; i++) {
        data.Levels[i].Puzzles.forEach((element) => {
          cacheAudiosFiles(
            element.prompt.PromptAudio,
            cacheName,
            data.Levels.length
          );
        });
      }
    })
  );
}
