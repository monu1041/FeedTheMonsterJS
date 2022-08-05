export function preloadImages(urls, allImagesLoadedCallback){
//     var loadedCounter = 0;
//   var toBeLoadedNumber = urls.length;
//   urls.forEach(function(url){
//     preloadImage(url, function(){
//         loadedCounter++;
//             console.log('Number of loaded images: ' + loadedCounter);
//       if(loadedCounter == toBeLoadedNumber){
//         allImagesLoadedCallback();
//       }
//     });
//   });
//   function preloadImage(url, anImageLoadedCallback){
//       var img = new Image();
//       img.onload = anImageLoadedCallback;
//       img.src = url;
//   }
    var bgImg = new Image();
    bgImg.src = "./assets/images/bg_v01.jpg";
    bgImg.onload = allImagesLoadedCallback;

    var hillImg = new Image();
    hillImg.src = "./assets/images/hill_v01.png";
    hillImg.onload = allImagesLoadedCallback;
    var timer_empty = new Image();
    timer_empty.src = "./assets/images/timer_empty.png";
    timer_empty.onload = allImagesLoadedCallback;

    var pillerImg = new Image();
    pillerImg.src = "./assets/images/Totem_v02_v01.png";
    pillerImg.onload = allImagesLoadedCallback;

    var grassImg = new Image();
    grassImg.src = "./assets/images/FG_a_v01.png";
    grassImg.onload = allImagesLoadedCallback;

    var rotating_clock = new Image();
    rotating_clock.src = "./assets/images/timer.png";
    rotating_clock.onload = allImagesLoadedCallback;
    
    var timer_full = new Image();
    timer_full.src = "./assets/images/timer_full.png";
    timer_full.onload = allImagesLoadedCallback;

    var fenchImg = new Image();
    fenchImg.src = "./assets/images/fence_v01.png";
    fenchImg.onload = allImagesLoadedCallback;
}
