/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./global-variables.js":
/*!*****************************!*\
  !*** ./global-variables.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lang": () => (/* binding */ lang)
/* harmony export */ });
const urlParams = new URLSearchParams(window.location.search);
var lang = urlParams.get("ftm_language");


/***/ }),

/***/ "./node_modules/howler/dist/howler.js":
/*!********************************************!*\
  !*** ./node_modules/howler/dist/howler.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */
  var HowlerGlobal = function() {
    this.init();
  };
  HowlerGlobal.prototype = {
    /**
     * Initialize the global Howler object.
     * @return {Howler}
     */
    init: function() {
      var self = this || Howler;

      // Create a global ID counter.
      self._counter = 1000;

      // Pool of unlocked HTML5 Audio objects.
      self._html5AudioPool = [];
      self.html5PoolSize = 10;

      // Internal properties.
      self._codecs = {};
      self._howls = [];
      self._muted = false;
      self._volume = 1;
      self._canPlayEvent = 'canplaythrough';
      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

      // Public properties.
      self.masterGain = null;
      self.noAudio = false;
      self.usingWebAudio = true;
      self.autoSuspend = true;
      self.ctx = null;

      // Set to false to disable the auto audio unlocker.
      self.autoUnlock = true;

      // Setup the various state values for global tracking.
      self._setup();

      return self;
    },

    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this || Howler;
      vol = parseFloat(vol);

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        self._volume = vol;

        // Don't update any of the nodes if we are muted.
        if (self._muted) {
          return self;
        }

        // When using Web Audio, we just need to adjust the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
        }

        // Loop through and change volume for all HTML5 audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and change the volumes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.volume = sound._volume * vol;
              }
            }
          }
        }

        return self;
      }

      return self._volume;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    mute: function(muted) {
      var self = this || Howler;

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      self._muted = muted;

      // With Web Audio, we just need to mute the master gain.
      if (self.usingWebAudio) {
        self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
      }

      // Loop through and mute all HTML5 Audio nodes.
      for (var i=0; i<self._howls.length; i++) {
        if (!self._howls[i]._webAudio) {
          // Get all of the sounds in this Howl group.
          var ids = self._howls[i]._getSoundIds();

          // Loop through all sounds and mark the audio node as muted.
          for (var j=0; j<ids.length; j++) {
            var sound = self._howls[i]._soundById(ids[j]);

            if (sound && sound._node) {
              sound._node.muted = (muted) ? true : sound._muted;
            }
          }
        }
      }

      return self;
    },

    /**
     * Handle stopping all sounds globally.
     */
    stop: function() {
      var self = this || Howler;

      // Loop through all Howls and stop them.
      for (var i=0; i<self._howls.length; i++) {
        self._howls[i].stop();
      }

      return self;
    },

    /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */
    unload: function() {
      var self = this || Howler;

      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].unload();
      }

      // Create a new AudioContext to make sure it is fully reset.
      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
        self.ctx.close();
        self.ctx = null;
        setupAudioContext();
      }

      return self;
    },

    /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */
    codecs: function(ext) {
      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
    },

    /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */
    _setup: function() {
      var self = this || Howler;

      // Keeps track of the suspend/resume state of the AudioContext.
      self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';

      // Automatically begin the 30-second suspend process
      self._autoSuspend();

      // Check if audio is available.
      if (!self.usingWebAudio) {
        // No audio is available on this system if noAudio is set to true.
        if (typeof Audio !== 'undefined') {
          try {
            var test = new Audio();

            // Check if the canplaythrough event is available.
            if (typeof test.oncanplaythrough === 'undefined') {
              self._canPlayEvent = 'canplay';
            }
          } catch(e) {
            self.noAudio = true;
          }
        } else {
          self.noAudio = true;
        }
      }

      // Test to make sure audio isn't disabled in Internet Explorer.
      try {
        var test = new Audio();
        if (test.muted) {
          self.noAudio = true;
        }
      } catch (e) {}

      // Check for supported codecs.
      if (!self.noAudio) {
        self._setupCodecs();
      }

      return self;
    },

    /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */
    _setupCodecs: function() {
      var self = this || Howler;
      var audioTest = null;

      // Must wrap in a try/catch because IE11 in server mode throws an error.
      try {
        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
      } catch (err) {
        return self;
      }

      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
        return self;
      }

      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
      var ua = self._navigator ? self._navigator.userAgent : '';
      var checkOpera = ua.match(/OPR\/([0-6].)/g);
      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);
      var checkSafari = ua.indexOf('Safari') !== -1 && ua.indexOf('Chrome') === -1;
      var safariVersion = ua.match(/Version\/(.*?) /);
      var isOldSafari = (checkSafari && safariVersion && parseInt(safariVersion[1], 10) < 15);

      self._codecs = {
        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
        mpeg: !!mpegTest,
        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!(audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType('audio/wav')).replace(/^no$/, ''),
        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        m4b: !!(audioTest.canPlayType('audio/x-m4b;') || audioTest.canPlayType('audio/m4b;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
        webm: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
      };

      return self;
    },

    /**
     * Some browsers/devices will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _unlockAudio: function() {
      var self = this || Howler;

      // Only run this if Web Audio is supported and it hasn't already been unlocked.
      if (self._audioUnlocked || !self.ctx) {
        return;
      }

      self._audioUnlocked = false;
      self.autoUnlock = false;

      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
        self._mobileUnloaded = true;
        self.unload();
      }

      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
      // http://stackoverflow.com/questions/24119684
      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

      // Call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS, Android, etc.
      var unlock = function(e) {
        // Create a pool of unlocked HTML5 Audio objects that can
        // be used for playing sounds without user interaction. HTML5
        // Audio objects must be individually unlocked, as opposed
        // to the WebAudio API which only needs a single activation.
        // This must occur before WebAudio setup or the source.onended
        // event will not fire.
        while (self._html5AudioPool.length < self.html5PoolSize) {
          try {
            var audioNode = new Audio();

            // Mark this Audio object as unlocked to ensure it can get returned
            // to the unlocked pool when released.
            audioNode._unlocked = true;

            // Add the audio node to the pool.
            self._releaseHtml5Audio(audioNode);
          } catch (e) {
            self.noAudio = true;
            break;
          }
        }

        // Loop through any assigned audio nodes and unlock them.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and unlock the audio nodes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node && !sound._node._unlocked) {
                sound._node._unlocked = true;
                sound._node.load();
              }
            }
          }
        }

        // Fix Android can not play in suspend state.
        self._autoResume();

        // Create an empty buffer.
        var source = self.ctx.createBufferSource();
        source.buffer = self._scratchBuffer;
        source.connect(self.ctx.destination);

        // Play the empty buffer.
        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        }

        // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
        if (typeof self.ctx.resume === 'function') {
          self.ctx.resume();
        }

        // Setup a timeout to check that we are unlocked on the next event loop.
        source.onended = function() {
          source.disconnect(0);

          // Update the unlocked state and prevent this check from happening again.
          self._audioUnlocked = true;

          // Remove the touch start listener.
          document.removeEventListener('touchstart', unlock, true);
          document.removeEventListener('touchend', unlock, true);
          document.removeEventListener('click', unlock, true);
          document.removeEventListener('keydown', unlock, true);

          // Let all sounds know that audio has been unlocked.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('unlock');
          }
        };
      };

      // Setup a touch start listener to attempt an unlock in.
      document.addEventListener('touchstart', unlock, true);
      document.addEventListener('touchend', unlock, true);
      document.addEventListener('click', unlock, true);
      document.addEventListener('keydown', unlock, true);

      return self;
    },

    /**
     * Get an unlocked HTML5 Audio object from the pool. If none are left,
     * return a new Audio object and throw a warning.
     * @return {Audio} HTML5 Audio object.
     */
    _obtainHtml5Audio: function() {
      var self = this || Howler;

      // Return the next object from the pool if one exists.
      if (self._html5AudioPool.length) {
        return self._html5AudioPool.pop();
      }

      //.Check if the audio is locked and throw a warning.
      var testPlay = new Audio().play();
      if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
        testPlay.catch(function() {
          console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
        });
      }

      return new Audio();
    },

    /**
     * Return an activated HTML5 Audio object to the pool.
     * @return {Howler}
     */
    _releaseHtml5Audio: function(audio) {
      var self = this || Howler;

      // Don't add audio to the pool if we don't know if it has been unlocked.
      if (audio._unlocked) {
        self._html5AudioPool.push(audio);
      }

      return self;
    },

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */
    _autoSuspend: function() {
      var self = this;

      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      // Check if any sounds are playing.
      for (var i=0; i<self._howls.length; i++) {
        if (self._howls[i]._webAudio) {
          for (var j=0; j<self._howls[i]._sounds.length; j++) {
            if (!self._howls[i]._sounds[j]._paused) {
              return self;
            }
          }
        }
      }

      if (self._suspendTimer) {
        clearTimeout(self._suspendTimer);
      }

      // If no sound has played after 30 seconds, suspend the context.
      self._suspendTimer = setTimeout(function() {
        if (!self.autoSuspend) {
          return;
        }

        self._suspendTimer = null;
        self.state = 'suspending';

        // Handle updating the state of the audio context after suspending.
        var handleSuspension = function() {
          self.state = 'suspended';

          if (self._resumeAfterSuspend) {
            delete self._resumeAfterSuspend;
            self._autoResume();
          }
        };

        // Either the state gets suspended or it is interrupted.
        // Either way, we need to update the state to suspended.
        self.ctx.suspend().then(handleSuspension, handleSuspension);
      }, 30000);

      return self;
    },

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */
    _autoResume: function() {
      var self = this;

      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      if (self.state === 'running' && self.ctx.state !== 'interrupted' && self._suspendTimer) {
        clearTimeout(self._suspendTimer);
        self._suspendTimer = null;
      } else if (self.state === 'suspended' || self.state === 'running' && self.ctx.state === 'interrupted') {
        self.ctx.resume().then(function() {
          self.state = 'running';

          // Emit to all Howls that the audio has resumed.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('resume');
          }
        });

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        }
      } else if (self.state === 'suspending') {
        self._resumeAfterSuspend = true;
      }

      return self;
    }
  };

  // Setup the global audio controller.
  var Howler = new HowlerGlobal();

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */
  var Howl = function(o) {
    var self = this;

    // Throw an error if no source is provided.
    if (!o.src || o.src.length === 0) {
      console.error('An array of source files must be passed with any new Howl.');
      return;
    }

    self.init(o);
  };
  Howl.prototype = {
    /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */
    init: function(o) {
      var self = this;

      // If we don't have an AudioContext created yet, run the setup.
      if (!Howler.ctx) {
        setupAudioContext();
      }

      // Setup user-defined default properties.
      self._autoplay = o.autoplay || false;
      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
      self._html5 = o.html5 || false;
      self._muted = o.mute || false;
      self._loop = o.loop || false;
      self._pool = o.pool || 5;
      self._preload = (typeof o.preload === 'boolean' || o.preload === 'metadata') ? o.preload : true;
      self._rate = o.rate || 1;
      self._sprite = o.sprite || {};
      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
      self._volume = o.volume !== undefined ? o.volume : 1;
      self._xhr = {
        method: o.xhr && o.xhr.method ? o.xhr.method : 'GET',
        headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
        withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false,
      };

      // Setup all other default properties.
      self._duration = 0;
      self._state = 'unloaded';
      self._sounds = [];
      self._endTimers = {};
      self._queue = [];
      self._playLock = false;

      // Setup event listeners.
      self._onend = o.onend ? [{fn: o.onend}] : [];
      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
      self._onload = o.onload ? [{fn: o.onload}] : [];
      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
      self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
      self._onunlock = o.onunlock ? [{fn: o.onunlock}] : [];
      self._onresume = [];

      // Web Audio or HTML5 Audio?
      self._webAudio = Howler.usingWebAudio && !self._html5;

      // Automatically try to enable audio.
      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
        Howler._unlockAudio();
      }

      // Keep track of this Howl group in the global controller.
      Howler._howls.push(self);

      // If they selected autoplay, add a play event to the load queue.
      if (self._autoplay) {
        self._queue.push({
          event: 'play',
          action: function() {
            self.play();
          }
        });
      }

      // Load the source file unless otherwise specified.
      if (self._preload && self._preload !== 'none') {
        self.load();
      }

      return self;
    },

    /**
     * Load the audio file.
     * @return {Howler}
     */
    load: function() {
      var self = this;
      var url = null;

      // If no audio is available, quit immediately.
      if (Howler.noAudio) {
        self._emit('loaderror', null, 'No audio support.');
        return;
      }

      // Make sure our source is in an array.
      if (typeof self._src === 'string') {
        self._src = [self._src];
      }

      // Loop through the sources and pick the first one that is compatible.
      for (var i=0; i<self._src.length; i++) {
        var ext, str;

        if (self._format && self._format[i]) {
          // If an extension was specified, use that instead.
          ext = self._format[i];
        } else {
          // Make sure the source is a string.
          str = self._src[i];
          if (typeof str !== 'string') {
            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
            continue;
          }

          // Extract the file extension from the URL or base64 data URI.
          ext = /^data:audio\/([^;,]+);/i.exec(str);
          if (!ext) {
            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          }
        }

        // Log a warning if no extension was found.
        if (!ext) {
          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
        }

        // Check if this extension is available.
        if (ext && Howler.codecs(ext)) {
          url = self._src[i];
          break;
        }
      }

      if (!url) {
        self._emit('loaderror', null, 'No codec support for selected audio sources.');
        return;
      }

      self._src = url;
      self._state = 'loading';

      // If the hosting page is HTTPS and the source isn't,
      // drop down to HTML5 Audio to avoid Mixed Content errors.
      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
        self._html5 = true;
        self._webAudio = false;
      }

      // Create a new sound object and add it to the pool.
      new Sound(self);

      // Load and decode the audio data for playback.
      if (self._webAudio) {
        loadBuffer(self);
      }

      return self;
    },

    /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */
    play: function(sprite, internal) {
      var self = this;
      var id = null;

      // Determine if a sprite, sound id or nothing was passed
      if (typeof sprite === 'number') {
        id = sprite;
        sprite = null;
      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
        // If the passed sprite doesn't exist, do nothing.
        return null;
      } else if (typeof sprite === 'undefined') {
        // Use the default sound sprite (plays the full audio length).
        sprite = '__default';

        // Check if there is a single paused sound that isn't ended.
        // If there is, play that sound. If not, continue as usual.
        if (!self._playLock) {
          var num = 0;
          for (var i=0; i<self._sounds.length; i++) {
            if (self._sounds[i]._paused && !self._sounds[i]._ended) {
              num++;
              id = self._sounds[i]._id;
            }
          }

          if (num === 1) {
            sprite = null;
          } else {
            id = null;
          }
        }
      }

      // Get the selected node, or get one from the pool.
      var sound = id ? self._soundById(id) : self._inactiveSound();

      // If the sound doesn't exist, do nothing.
      if (!sound) {
        return null;
      }

      // Select the sprite definition.
      if (id && !sprite) {
        sprite = sound._sprite || '__default';
      }

      // If the sound hasn't loaded, we must wait to get the audio's duration.
      // We also need to wait to make sure we don't run into race conditions with
      // the order of function calls.
      if (self._state !== 'loaded') {
        // Set the sprite value on this sound.
        sound._sprite = sprite;

        // Mark this sound as not ended in case another sound is played before this one loads.
        sound._ended = false;

        // Add the sound to the queue to be played on load.
        var soundId = sound._id;
        self._queue.push({
          event: 'play',
          action: function() {
            self.play(soundId);
          }
        });

        return soundId;
      }

      // Don't play the sound if an id was passed and it is already playing.
      if (id && !sound._paused) {
        // Trigger the play event, in order to keep iterating through queue.
        if (!internal) {
          self._loadQueue('play');
        }

        return sound._id;
      }

      // Make sure the AudioContext isn't suspended, and resume it if it is.
      if (self._webAudio) {
        Howler._autoResume();
      }

      // Determine how long to play for and where to start playing.
      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
      var timeout = (duration * 1000) / Math.abs(sound._rate);
      var start = self._sprite[sprite][0] / 1000;
      var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
      sound._sprite = sprite;

      // Mark the sound as ended instantly so that this async playback
      // doesn't get grabbed by another call to play while this one waits to start.
      sound._ended = false;

      // Update the parameters of the sound.
      var setParams = function() {
        sound._paused = false;
        sound._seek = seek;
        sound._start = start;
        sound._stop = stop;
        sound._loop = !!(sound._loop || self._sprite[sprite][2]);
      };

      // End the sound instantly if seek is at the end.
      if (seek >= stop) {
        self._ended(sound);
        return;
      }

      // Begin the actual playback.
      var node = sound._node;
      if (self._webAudio) {
        // Fire this when the sound is ready to play to begin Web Audio playback.
        var playWebAudio = function() {
          self._playLock = false;
          setParams();
          self._refreshBuffer(sound);

          // Setup the playback params.
          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          sound._playStart = Howler.ctx.currentTime;

          // Play the sound using the supported method.
          if (typeof node.bufferSource.start === 'undefined') {
            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
          } else {
            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          }

          // Start a new timer if none is present.
          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            setTimeout(function() {
              self._emit('play', sound._id);
              self._loadQueue();
            }, 0);
          }
        };

        if (Howler.state === 'running' && Howler.ctx.state !== 'interrupted') {
          playWebAudio();
        } else {
          self._playLock = true;

          // Wait for the audio context to resume before playing.
          self.once('resume', playWebAudio);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      } else {
        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
        var playHtml5 = function() {
          node.currentTime = seek;
          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
          node.volume = sound._volume * Howler.volume();
          node.playbackRate = sound._rate;

          // Some browsers will throw an error if this is called without user interaction.
          try {
            var play = node.play();

            // Support older browsers that don't support promises, and thus don't have this issue.
            if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
              // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
              self._playLock = true;

              // Set param values immediately.
              setParams();

              // Releases the lock and executes queued actions.
              play
                .then(function() {
                  self._playLock = false;
                  node._unlocked = true;
                  if (!internal) {
                    self._emit('play', sound._id);
                  } else {
                    self._loadQueue();
                  }
                })
                .catch(function() {
                  self._playLock = false;
                  self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                    'on mobile devices and Chrome where playback was not within a user interaction.');

                  // Reset the ended and paused values.
                  sound._ended = true;
                  sound._paused = true;
                });
            } else if (!internal) {
              self._playLock = false;
              setParams();
              self._emit('play', sound._id);
            }

            // Setting rate before playing won't work in IE, so we set it again here.
            node.playbackRate = sound._rate;

            // If the node is still paused, then we can assume there was a playback issue.
            if (node.paused) {
              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                'on mobile devices and Chrome where playback was not within a user interaction.');
              return;
            }

            // Setup the end timer on sprites or listen for the ended event.
            if (sprite !== '__default' || sound._loop) {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            } else {
              self._endTimers[sound._id] = function() {
                // Fire ended on this audio node.
                self._ended(sound);

                // Clear this listener.
                node.removeEventListener('ended', self._endTimers[sound._id], false);
              };
              node.addEventListener('ended', self._endTimers[sound._id], false);
            }
          } catch (err) {
            self._emit('playerror', sound._id, err);
          }
        };

        // If this is streaming audio, make sure the src is set and load again.
        if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
          node.src = self._src;
          node.load();
        }

        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
        var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
        if (node.readyState >= 3 || loadedNoReadyState) {
          playHtml5();
        } else {
          self._playLock = true;
          self._state = 'loading';

          var listener = function() {
            self._state = 'loaded';
            
            // Begin playback.
            playHtml5();

            // Clear this listener.
            node.removeEventListener(Howler._canPlayEvent, listener, false);
          };
          node.addEventListener(Howler._canPlayEvent, listener, false);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      }

      return sound._id;
    },

    /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */
    pause: function(id) {
      var self = this;

      // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'pause',
          action: function() {
            self.pause(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be paused.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound && !sound._paused) {
          // Reset the seek position.
          sound._seek = self.seek(ids[i]);
          sound._rateSeek = 0;
          sound._paused = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound has been created.
              if (!sound._node.bufferSource) {
                continue;
              }

              if (typeof sound._node.bufferSource.stop === 'undefined') {
                sound._node.bufferSource.noteOff(0);
              } else {
                sound._node.bufferSource.stop(0);
              }

              // Clean up the buffer source.
              self._cleanBuffer(sound._node);
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.pause();
            }
          }
        }

        // Fire the pause event, unless `true` is passed as the 2nd argument.
        if (!arguments[1]) {
          self._emit('pause', sound ? sound._id : null);
        }
      }

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */
    stop: function(id, internal) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to stop when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'stop',
          action: function() {
            self.stop(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be stopped.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          // Reset the seek position.
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._paused = true;
          sound._ended = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound's AudioBufferSourceNode has been created.
              if (sound._node.bufferSource) {
                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              }
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.currentTime = sound._start || 0;
              sound._node.pause();

              // If this is a live stream, stop download once the audio is stopped.
              if (sound._node.duration === Infinity) {
                self._clearSound(sound._node);
              }
            }
          }

          if (!internal) {
            self._emit('stop', sound._id);
          }
        }
      }

      return self;
    },

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */
    mute: function(muted, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to mute when capable.
      if (self._state !== 'loaded'|| self._playLock) {
        self._queue.push({
          event: 'mute',
          action: function() {
            self.mute(muted, id);
          }
        });

        return self;
      }

      // If applying mute/unmute to all sounds, update the group's value.
      if (typeof id === 'undefined') {
        if (typeof muted === 'boolean') {
          self._muted = muted;
        } else {
          return self._muted;
        }
      }

      // If no id is passed, get all ID's to be muted.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          sound._muted = muted;

          // Cancel active fade and set the volume to the end value.
          if (sound._interval) {
            self._stopFade(sound._id);
          }

          if (self._webAudio && sound._node) {
            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
          } else if (sound._node) {
            sound._node.muted = Howler._muted ? true : muted;
          }

          self._emit('mute', sound._id);
        }
      }

      return self;
    },

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */
    volume: function() {
      var self = this;
      var args = arguments;
      var vol, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the value of the groups' volume.
        return self._volume;
      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
        // First check if this is an ID, and if not, assume it is a new volume.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          vol = parseFloat(args[0]);
        }
      } else if (args.length >= 2) {
        vol = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the volume or return the current volume.
      var sound;
      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
        if (self._state !== 'loaded'|| self._playLock) {
          self._queue.push({
            event: 'volume',
            action: function() {
              self.volume.apply(self, args);
            }
          });

          return self;
        }

        // Set the group volume.
        if (typeof id === 'undefined') {
          self._volume = vol;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            sound._volume = vol;

            // Stop currently running fades.
            if (!args[2]) {
              self._stopFade(id[i]);
            }

            if (self._webAudio && sound._node && !sound._muted) {
              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } else if (sound._node && !sound._muted) {
              sound._node.volume = vol * Howler.volume();
            }

            self._emit('volume', sound._id);
          }
        }
      } else {
        sound = id ? self._soundById(id) : self._sounds[0];
        return sound ? sound._volume : 0;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */
    fade: function(from, to, len, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to fade when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'fade',
          action: function() {
            self.fade(from, to, len, id);
          }
        });

        return self;
      }

      // Make sure the to/from/len values are numbers.
      from = Math.min(Math.max(0, parseFloat(from)), 1);
      to = Math.min(Math.max(0, parseFloat(to)), 1);
      len = parseFloat(len);

      // Set the volume to the start position.
      self.volume(from, id);

      // Fade the volume of one or all sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        // Create a linear fade or fall back to timeouts with HTML5 Audio.
        if (sound) {
          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
          if (!id) {
            self._stopFade(ids[i]);
          }

          // If we are using Web Audio, let the native methods do the actual fade.
          if (self._webAudio && !sound._muted) {
            var currentTime = Howler.ctx.currentTime;
            var end = currentTime + (len / 1000);
            sound._volume = from;
            sound._node.gain.setValueAtTime(from, currentTime);
            sound._node.gain.linearRampToValueAtTime(to, end);
          }

          self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
        }
      }

      return self;
    },

    /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */
    _startFadeInterval: function(sound, from, to, len, id, isGroup) {
      var self = this;
      var vol = from;
      var diff = to - from;
      var steps = Math.abs(diff / 0.01);
      var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
      var lastTick = Date.now();

      // Store the value being faded to.
      sound._fadeTo = to;

      // Update the volume value on each interval tick.
      sound._interval = setInterval(function() {
        // Update the volume based on the time since the last tick.
        var tick = (Date.now() - lastTick) / len;
        lastTick = Date.now();
        vol += diff * tick;

        // Round to within 2 decimal points.
        vol = Math.round(vol * 100) / 100;

        // Make sure the volume is in the right bounds.
        if (diff < 0) {
          vol = Math.max(to, vol);
        } else {
          vol = Math.min(to, vol);
        }

        // Change the volume.
        if (self._webAudio) {
          sound._volume = vol;
        } else {
          self.volume(vol, sound._id, true);
        }

        // Set the group's volume.
        if (isGroup) {
          self._volume = vol;
        }

        // When the fade is complete, stop it and fire event.
        if ((to < from && vol <= to) || (to > from && vol >= to)) {
          clearInterval(sound._interval);
          sound._interval = null;
          sound._fadeTo = null;
          self.volume(to, sound._id);
          self._emit('fade', sound._id);
        }
      }, stepLen);
    },

    /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */
    _stopFade: function(id) {
      var self = this;
      var sound = self._soundById(id);

      if (sound && sound._interval) {
        if (self._webAudio) {
          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
        }

        clearInterval(sound._interval);
        sound._interval = null;
        self.volume(sound._fadeTo, id);
        sound._fadeTo = null;
        self._emit('fade', id);
      }

      return self;
    },

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */
    loop: function() {
      var self = this;
      var args = arguments;
      var loop, id, sound;

      // Determine the values for loop and id.
      if (args.length === 0) {
        // Return the grou's loop value.
        return self._loop;
      } else if (args.length === 1) {
        if (typeof args[0] === 'boolean') {
          loop = args[0];
          self._loop = loop;
        } else {
          // Return this sound's loop value.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._loop : false;
        }
      } else if (args.length === 2) {
        loop = args[0];
        id = parseInt(args[1], 10);
      }

      // If no id is passed, get all ID's to be looped.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          sound._loop = loop;
          if (self._webAudio && sound._node && sound._node.bufferSource) {
            sound._node.bufferSource.loop = loop;
            if (loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop;

              // If playing, restart playback to ensure looping updates.
              if (self.playing(ids[i])) {
                self.pause(ids[i], true);
                self.play(ids[i], true);
              }
            }
          }
        }
      }

      return self;
    },

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */
    rate: function() {
      var self = this;
      var args = arguments;
      var rate, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current rate of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new rate value.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          rate = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        rate = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the playback rate or return the current value.
      var sound;
      if (typeof rate === 'number') {
        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'rate',
            action: function() {
              self.rate.apply(self, args);
            }
          });

          return self;
        }

        // Set the group rate.
        if (typeof id === 'undefined') {
          self._rate = rate;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            // Keep track of our position when the rate changed and update the playback
            // start position so we can properly adjust the seek position for time elapsed.
            if (self.playing(id[i])) {
              sound._rateSeek = self.seek(id[i]);
              sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
            }
            sound._rate = rate;

            // Change the playback rate.
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.playbackRate = rate;
            }

            // Reset the timers.
            var seek = self.seek(id[i]);
            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Start a new end timer if sound is already playing.
            if (self._endTimers[id[i]] || !sound._paused) {
              self._clearTimer(id[i]);
              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            self._emit('rate', sound._id);
          }
        }
      } else {
        sound = self._soundById(id);
        return sound ? sound._rate : self._rate;
      }

      return self;
    },

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */
    seek: function() {
      var self = this;
      var args = arguments;
      var seek, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current position of the first node.
        if (self._sounds.length) {
          id = self._sounds[0]._id;
        }
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new seek position.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else if (self._sounds.length) {
          id = self._sounds[0]._id;
          seek = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        seek = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // If there is no ID, bail out.
      if (typeof id === 'undefined') {
        return 0;
      }

      // If the sound hasn't loaded, add it to the load queue to seek when capable.
      if (typeof seek === 'number' && (self._state !== 'loaded' || self._playLock)) {
        self._queue.push({
          event: 'seek',
          action: function() {
            self.seek.apply(self, args);
          }
        });

        return self;
      }

      // Get the sound.
      var sound = self._soundById(id);

      if (sound) {
        if (typeof seek === 'number' && seek >= 0) {
          // Pause the sound and update position for restarting playback.
          var playing = self.playing(id);
          if (playing) {
            self.pause(id, true);
          }

          // Move the position of the track and cancel timer.
          sound._seek = seek;
          sound._ended = false;
          self._clearTimer(id);

          // Update the seek position for HTML5 Audio.
          if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
            sound._node.currentTime = seek;
          }

          // Seek and emit when ready.
          var seekAndEmit = function() {
            // Restart the playback if the sound was playing.
            if (playing) {
              self.play(id, true);
            }

            self._emit('seek', id);
          };

          // Wait for the play lock to be unset before emitting (HTML5 Audio).
          if (playing && !self._webAudio) {
            var emitSeek = function() {
              if (!self._playLock) {
                seekAndEmit();
              } else {
                setTimeout(emitSeek, 0);
              }
            };
            setTimeout(emitSeek, 0);
          } else {
            seekAndEmit();
          }
        } else {
          if (self._webAudio) {
            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
          } else {
            return sound._node.currentTime;
          }
        }
      }

      return self;
    },

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */
    playing: function(id) {
      var self = this;

      // Check the passed sound ID (if any).
      if (typeof id === 'number') {
        var sound = self._soundById(id);
        return sound ? !sound._paused : false;
      }

      // Otherwise, loop through all sounds and check if any are playing.
      for (var i=0; i<self._sounds.length; i++) {
        if (!self._sounds[i]._paused) {
          return true;
        }
      }

      return false;
    },

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */
    duration: function(id) {
      var self = this;
      var duration = self._duration;

      // If we pass an ID, get the sound and return the sprite length.
      var sound = self._soundById(id);
      if (sound) {
        duration = self._sprite[sound._sprite][1] / 1000;
      }

      return duration;
    },

    /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */
    state: function() {
      return this._state;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */
    unload: function() {
      var self = this;

      // Stop playing any active sounds.
      var sounds = self._sounds;
      for (var i=0; i<sounds.length; i++) {
        // Stop the sound if it is currently playing.
        if (!sounds[i]._paused) {
          self.stop(sounds[i]._id);
        }

        // Remove the source or disconnect.
        if (!self._webAudio) {
          // Set the source to 0-second silence to stop any downloading (except in IE).
          self._clearSound(sounds[i]._node);

          // Remove any event listeners.
          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
          sounds[i]._node.removeEventListener('ended', sounds[i]._endFn, false);

          // Release the Audio object back to the pool.
          Howler._releaseHtml5Audio(sounds[i]._node);
        }

        // Empty out all of the nodes.
        delete sounds[i]._node;

        // Make sure all timers are cleared out.
        self._clearTimer(sounds[i]._id);
      }

      // Remove the references in the global Howler object.
      var index = Howler._howls.indexOf(self);
      if (index >= 0) {
        Howler._howls.splice(index, 1);
      }

      // Delete this sound from the cache (if no other Howl is using it).
      var remCache = true;
      for (i=0; i<Howler._howls.length; i++) {
        if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
          remCache = false;
          break;
        }
      }

      if (cache && remCache) {
        delete cache[self._src];
      }

      // Clear global errors.
      Howler.noAudio = false;

      // Clear out `self`.
      self._state = 'unloaded';
      self._sounds = [];
      self = null;

      return null;
    },

    /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */
    on: function(event, fn, id, once) {
      var self = this;
      var events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
      }

      return self;
    },

    /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */
    off: function(event, fn, id) {
      var self = this;
      var events = self['_on' + event];
      var i = 0;

      // Allow passing just an event and ID.
      if (typeof fn === 'number') {
        id = fn;
        fn = null;
      }

      if (fn || id) {
        // Loop through event store and remove the passed function.
        for (i=0; i<events.length; i++) {
          var isId = (id === events[i].id);
          if (fn === events[i].fn && isId || !fn && isId) {
            events.splice(i, 1);
            break;
          }
        }
      } else if (event) {
        // Clear out all events of this type.
        self['_on' + event] = [];
      } else {
        // Clear out all events of every type.
        var keys = Object.keys(self);
        for (i=0; i<keys.length; i++) {
          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
            self[keys[i]] = [];
          }
        }
      }

      return self;
    },

    /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */
    once: function(event, fn, id) {
      var self = this;

      // Setup the event listener.
      self.on(event, fn, id, 1);

      return self;
    },

    /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */
    _emit: function(event, id, msg) {
      var self = this;
      var events = self['_on' + event];

      // Loop through event store and fire all functions.
      for (var i=events.length-1; i>=0; i--) {
        // Only fire the listener if the correct ID is used.
        if (!events[i].id || events[i].id === id || event === 'load') {
          setTimeout(function(fn) {
            fn.call(this, id, msg);
          }.bind(self, events[i].fn), 0);

          // If this event was setup with `once`, remove it.
          if (events[i].once) {
            self.off(event, events[i].fn, events[i].id);
          }
        }
      }

      // Pass the event type into load queue so that it can continue stepping.
      self._loadQueue(event);

      return self;
    },

    /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */
    _loadQueue: function(event) {
      var self = this;

      if (self._queue.length > 0) {
        var task = self._queue[0];

        // Remove this task if a matching event was passed.
        if (task.event === event) {
          self._queue.shift();
          self._loadQueue();
        }

        // Run the task if no event type is passed.
        if (!event) {
          task.action();
        }
      }

      return self;
    },

    /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _ended: function(sound) {
      var self = this;
      var sprite = sound._sprite;

      // If we are using IE and there was network latency we may be clipping
      // audio before it completes playing. Lets check the node to make sure it
      // believes it has completed, before ending the playback.
      if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
        setTimeout(self._ended.bind(self, sound), 100);
        return self;
      }

      // Should this sound loop?
      var loop = !!(sound._loop || self._sprite[sprite][2]);

      // Fire the ended event.
      self._emit('end', sound._id);

      // Restart the playback for HTML5 Audio loop.
      if (!self._webAudio && loop) {
        self.stop(sound._id, true).play(sound._id);
      }

      // Restart this timer if on a Web Audio loop.
      if (self._webAudio && loop) {
        self._emit('play', sound._id);
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        sound._playStart = Howler.ctx.currentTime;

        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
      }

      // Mark the node as paused.
      if (self._webAudio && !loop) {
        sound._paused = true;
        sound._ended = true;
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        self._clearTimer(sound._id);

        // Clean up the buffer source.
        self._cleanBuffer(sound._node);

        // Attempt to auto-suspend AudioContext if no sounds are still playing.
        Howler._autoSuspend();
      }

      // When using a sprite, end the track.
      if (!self._webAudio && !loop) {
        self.stop(sound._id, true);
      }

      return self;
    },

    /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */
    _clearTimer: function(id) {
      var self = this;

      if (self._endTimers[id]) {
        // Clear the timeout or remove the ended listener.
        if (typeof self._endTimers[id] !== 'function') {
          clearTimeout(self._endTimers[id]);
        } else {
          var sound = self._soundById(id);
          if (sound && sound._node) {
            sound._node.removeEventListener('ended', self._endTimers[id], false);
          }
        }

        delete self._endTimers[id];
      }

      return self;
    },

    /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */
    _soundById: function(id) {
      var self = this;

      // Loop through all sounds and find the one with this ID.
      for (var i=0; i<self._sounds.length; i++) {
        if (id === self._sounds[i]._id) {
          return self._sounds[i];
        }
      }

      return null;
    },

    /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */
    _inactiveSound: function() {
      var self = this;

      self._drain();

      // Find the first inactive node to recycle.
      for (var i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          return self._sounds[i].reset();
        }
      }

      // If no inactive node was found, create a new one.
      return new Sound(self);
    },

    /**
     * Drain excess inactive sounds from the pool.
     */
    _drain: function() {
      var self = this;
      var limit = self._pool;
      var cnt = 0;
      var i = 0;

      // If there are less sounds than the max pool size, we are done.
      if (self._sounds.length < limit) {
        return;
      }

      // Count the number of inactive sounds.
      for (i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          cnt++;
        }
      }

      // Remove excess inactive sounds, going in reverse order.
      for (i=self._sounds.length - 1; i>=0; i--) {
        if (cnt <= limit) {
          return;
        }

        if (self._sounds[i]._ended) {
          // Disconnect the audio source when using Web Audio.
          if (self._webAudio && self._sounds[i]._node) {
            self._sounds[i]._node.disconnect(0);
          }

          // Remove sounds until we have the pool size.
          self._sounds.splice(i, 1);
          cnt--;
        }
      }
    },

    /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */
    _getSoundIds: function(id) {
      var self = this;

      if (typeof id === 'undefined') {
        var ids = [];
        for (var i=0; i<self._sounds.length; i++) {
          ids.push(self._sounds[i]._id);
        }

        return ids;
      } else {
        return [id];
      }
    },

    /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _refreshBuffer: function(sound) {
      var self = this;

      // Setup the buffer source for playback.
      sound._node.bufferSource = Howler.ctx.createBufferSource();
      sound._node.bufferSource.buffer = cache[self._src];

      // Connect to the correct node.
      if (sound._panner) {
        sound._node.bufferSource.connect(sound._panner);
      } else {
        sound._node.bufferSource.connect(sound._node);
      }

      // Setup looping and playback rate.
      sound._node.bufferSource.loop = sound._loop;
      if (sound._loop) {
        sound._node.bufferSource.loopStart = sound._start || 0;
        sound._node.bufferSource.loopEnd = sound._stop || 0;
      }
      sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

      return self;
    },

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */
    _cleanBuffer: function(node) {
      var self = this;
      var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;

      if (Howler._scratchBuffer && node.bufferSource) {
        node.bufferSource.onended = null;
        node.bufferSource.disconnect(0);
        if (isIOS) {
          try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
        }
      }
      node.bufferSource = null;

      return self;
    },

    /**
     * Set the source to a 0-second silence to stop any downloading (except in IE).
     * @param  {Object} node Audio node to clear.
     */
    _clearSound: function(node) {
      var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
      if (!checkIE) {
        node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
      }
    }
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */
  var Sound = function(howl) {
    this._parent = howl;
    this.init();
  };
  Sound.prototype = {
    /**
     * Initialize a new Sound object.
     * @return {Sound}
     */
    init: function() {
      var self = this;
      var parent = self._parent;

      // Setup the default parameters.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a unique ID for this sound.
      self._id = ++Howler._counter;

      // Add itself to the parent's pool.
      parent._sounds.push(self);

      // Create the new node.
      self.create();

      return self;
    },

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */
    create: function() {
      var self = this;
      var parent = self._parent;
      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

      if (parent._webAudio) {
        // Create the gain node for controlling volume (the source will connect to this).
        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
        self._node.paused = true;
        self._node.connect(Howler.masterGain);
      } else if (!Howler.noAudio) {
        // Get an unlocked Audio object from the pool.
        self._node = Howler._obtainHtml5Audio();

        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
        self._errorFn = self._errorListener.bind(self);
        self._node.addEventListener('error', self._errorFn, false);

        // Listen for 'canplaythrough' event to let us know the sound is ready.
        self._loadFn = self._loadListener.bind(self);
        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

        // Listen for the 'ended' event on the sound to account for edge-case where
        // a finite sound has a duration of Infinity.
        self._endFn = self._endListener.bind(self);
        self._node.addEventListener('ended', self._endFn, false);

        // Setup the new audio node.
        self._node.src = parent._src;
        self._node.preload = parent._preload === true ? 'auto' : parent._preload;
        self._node.volume = volume * Howler.volume();

        // Begin loading the source.
        self._node.load();
      }

      return self;
    },

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */
    reset: function() {
      var self = this;
      var parent = self._parent;

      // Reset all of the parameters of this sound.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._rateSeek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a new ID so that it isn't confused with the previous sound.
      self._id = ++Howler._counter;

      return self;
    },

    /**
     * HTML5 Audio error listener callback.
     */
    _errorListener: function() {
      var self = this;

      // Fire an error event and pass back the code.
      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

      // Clear the event listener.
      self._node.removeEventListener('error', self._errorFn, false);
    },

    /**
     * HTML5 Audio canplaythrough listener callback.
     */
    _loadListener: function() {
      var self = this;
      var parent = self._parent;

      // Round up the duration to account for the lower precision in HTML5 Audio.
      parent._duration = Math.ceil(self._node.duration * 10) / 10;

      // Setup a sprite if none is defined.
      if (Object.keys(parent._sprite).length === 0) {
        parent._sprite = {__default: [0, parent._duration * 1000]};
      }

      if (parent._state !== 'loaded') {
        parent._state = 'loaded';
        parent._emit('load');
        parent._loadQueue();
      }

      // Clear the event listener.
      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
    },

    /**
     * HTML5 Audio ended listener callback.
     */
    _endListener: function() {
      var self = this;
      var parent = self._parent;

      // Only handle the `ended`` event if the duration is Infinity.
      if (parent._duration === Infinity) {
        // Update the parent duration to match the real audio duration.
        // Round up the duration to account for the lower precision in HTML5 Audio.
        parent._duration = Math.ceil(self._node.duration * 10) / 10;

        // Update the sprite that corresponds to the real duration.
        if (parent._sprite.__default[1] === Infinity) {
          parent._sprite.__default[1] = parent._duration * 1000;
        }

        // Run the regular ended method.
        parent._ended(self);
      }

      // Clear the event listener since the duration is now correct.
      self._node.removeEventListener('ended', self._endFn, false);
    }
  };

  /** Helper Methods **/
  /***************************************************************************/

  var cache = {};

  /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */
  var loadBuffer = function(self) {
    var url = self._src;

    // Check if the buffer has already been cached and use it instead.
    if (cache[url]) {
      // Set the duration from the cache.
      self._duration = cache[url].duration;

      // Load the sound into this Howl.
      loadSound(self);

      return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
      // Decode the base64 data URI without XHR, since some browsers don't support it.
      var data = atob(url.split(',')[1]);
      var dataView = new Uint8Array(data.length);
      for (var i=0; i<data.length; ++i) {
        dataView[i] = data.charCodeAt(i);
      }

      decodeAudioData(dataView.buffer, self);
    } else {
      // Load the buffer from the URL.
      var xhr = new XMLHttpRequest();
      xhr.open(self._xhr.method, url, true);
      xhr.withCredentials = self._xhr.withCredentials;
      xhr.responseType = 'arraybuffer';

      // Apply any custom headers to the request.
      if (self._xhr.headers) {
        Object.keys(self._xhr.headers).forEach(function(key) {
          xhr.setRequestHeader(key, self._xhr.headers[key]);
        });
      }

      xhr.onload = function() {
        // Make sure we get a successful response back.
        var code = (xhr.status + '')[0];
        if (code !== '0' && code !== '2' && code !== '3') {
          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
          return;
        }

        decodeAudioData(xhr.response, self);
      };
      xhr.onerror = function() {
        // If there is an error, switch to HTML5 Audio.
        if (self._webAudio) {
          self._html5 = true;
          self._webAudio = false;
          self._sounds = [];
          delete cache[url];
          self.load();
        }
      };
      safeXhrSend(xhr);
    }
  };

  /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */
  var safeXhrSend = function(xhr) {
    try {
      xhr.send();
    } catch (e) {
      xhr.onerror();
    }
  };

  /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */
  var decodeAudioData = function(arraybuffer, self) {
    // Fire a load error if something broke.
    var error = function() {
      self._emit('loaderror', null, 'Decoding audio data failed.');
    };

    // Load the sound on success.
    var success = function(buffer) {
      if (buffer && self._sounds.length > 0) {
        cache[self._src] = buffer;
        loadSound(self, buffer);
      } else {
        error();
      }
    };

    // Decode the buffer into an audio source.
    if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
      Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
    } else {
      Howler.ctx.decodeAudioData(arraybuffer, success, error);
    }
  }

  /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */
  var loadSound = function(self, buffer) {
    // Set the duration.
    if (buffer && !self._duration) {
      self._duration = buffer.duration;
    }

    // Setup a sprite if none is defined.
    if (Object.keys(self._sprite).length === 0) {
      self._sprite = {__default: [0, self._duration * 1000]};
    }

    // Fire the loaded event.
    if (self._state !== 'loaded') {
      self._state = 'loaded';
      self._emit('load');
      self._loadQueue();
    }
  };

  /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */
  var setupAudioContext = function() {
    // If we have already detected that Web Audio isn't supported, don't run this step again.
    if (!Howler.usingWebAudio) {
      return;
    }

    // Check if we are using Web Audio and setup the AudioContext if we are.
    try {
      if (typeof AudioContext !== 'undefined') {
        Howler.ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        Howler.ctx = new webkitAudioContext();
      } else {
        Howler.usingWebAudio = false;
      }
    } catch(e) {
      Howler.usingWebAudio = false;
    }

    // If the audio context creation still failed, set using web audio to false.
    if (!Howler.ctx) {
      Howler.usingWebAudio = false;
    }

    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
    // If it is, disable Web Audio as it causes crashing.
    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    var version = appVersion ? parseInt(appVersion[1], 10) : null;
    if (iOS && version && version < 9) {
      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
      if (Howler._navigator && !safari) {
        Howler.usingWebAudio = false;
      }
    }

    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
    if (Howler.usingWebAudio) {
      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
      Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : Howler._volume, Howler.ctx.currentTime);
      Howler.masterGain.connect(Howler.ctx.destination);
    }

    // Re-run the setup on Howler.
    Howler._setup();
  };

  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  // Add support for CommonJS libraries such as browserify.
  if (true) {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }

  // Add to global in Node.js (for testing, etc).
  if (typeof __webpack_require__.g !== 'undefined') {
    __webpack_require__.g.HowlerGlobal = HowlerGlobal;
    __webpack_require__.g.Howler = Howler;
    __webpack_require__.g.Howl = Howl;
    __webpack_require__.g.Sound = Sound;
  } else if (typeof window !== 'undefined') {  // Define globally in case AMD is not available or unused.
    window.HowlerGlobal = HowlerGlobal;
    window.Howler = Howler;
    window.Howl = Howl;
    window.Sound = Sound;
  }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  // Setup default properties.
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */
  HowlerGlobal.prototype.stereo = function(pan) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Loop through all Howls and update their stereo panning.
    for (var i=self._howls.length-1; i>=0; i--) {
      self._howls[i].stereo(pan);
    }

    return self;
  };

  /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */
  HowlerGlobal.prototype.pos = function(x, y, z) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._pos[1] : y;
    z = (typeof z !== 'number') ? self._pos[2] : z;

    if (typeof x === 'number') {
      self._pos = [x, y, z];

      if (typeof self.ctx.listener.positionX !== 'undefined') {
        self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
      }
    } else {
      return self._pos;
    }

    return self;
  };

  /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */
  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    var or = self._orientation;
    y = (typeof y !== 'number') ? or[1] : y;
    z = (typeof z !== 'number') ? or[2] : z;
    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

    if (typeof x === 'number') {
      self._orientation = [x, y, z, xUp, yUp, zUp];

      if (typeof self.ctx.listener.forwardX !== 'undefined') {
        self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
      }
    } else {
      return or;
    }

    return self;
  };

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */
  Howl.prototype.init = (function(_super) {
    return function(o) {
      var self = this;

      // Setup user-defined default properties.
      self._orientation = o.orientation || [1, 0, 0];
      self._stereo = o.stereo || null;
      self._pos = o.pos || null;
      self._pannerAttr = {
        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
      };

      // Setup event listeners.
      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

      // Complete initilization with howler.js core's init function.
      return _super.call(this, o);
    };
  })(Howl.prototype.init);

  /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */
  Howl.prototype.stereo = function(pan, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'stereo',
        action: function() {
          self.stereo(pan, id);
        }
      });

      return self;
    }

    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

    // Setup the group's stereo panning if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's stereo panning if no parameters are passed.
      if (typeof pan === 'number') {
        self._stereo = pan;
        self._pos = [pan, 0, 0];
      } else {
        return self._stereo;
      }
    }

    // Change the streo panning of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof pan === 'number') {
          sound._stereo = pan;
          sound._pos = [pan, 0, 0];

          if (sound._node) {
            // If we are falling back, make sure the panningModel is equalpower.
            sound._pannerAttr.panningModel = 'equalpower';

            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || !sound._panner.pan) {
              setupPanner(sound, pannerType);
            }

            if (pannerType === 'spatial') {
              if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
              } else {
                sound._panner.setPosition(pan, 0, 0);
              }
            } else {
              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
            }
          }

          self._emit('stereo', sound._id);
        } else {
          return sound._stereo;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */
  Howl.prototype.pos = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change position when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'pos',
        action: function() {
          self.pos(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? 0 : y;
    z = (typeof z !== 'number') ? -0.5 : z;

    // Setup the group's spatial position if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial position if no parameters are passed.
      if (typeof x === 'number') {
        self._pos = [x, y, z];
      } else {
        return self._pos;
      }
    }

    // Change the spatial position of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._pos = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || sound._panner.pan) {
              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.positionX !== 'undefined') {
              sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setPosition(x, y, z);
            }
          }

          self._emit('pos', sound._id);
        } else {
          return sound._pos;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */
  Howl.prototype.orientation = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'orientation',
        action: function() {
          self.orientation(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._orientation[1] : y;
    z = (typeof z !== 'number') ? self._orientation[2] : z;

    // Setup the group's spatial orientation if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial orientation if no parameters are passed.
      if (typeof x === 'number') {
        self._orientation = [x, y, z];
      } else {
        return self._orientation;
      }
    }

    // Change the spatial orientation of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._orientation = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner) {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }

              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.orientationX !== 'undefined') {
              sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setOrientation(x, y, z);
            }
          }

          self._emit('orientation', sound._id);
        } else {
          return sound._orientation;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */
  Howl.prototype.pannerAttr = function() {
    var self = this;
    var args = arguments;
    var o, id, sound;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // Determine the values based on arguments.
    if (args.length === 0) {
      // Return the group's panner attribute values.
      return self._pannerAttr;
    } else if (args.length === 1) {
      if (typeof args[0] === 'object') {
        o = args[0];

        // Set the grou's panner attribute values.
        if (typeof id === 'undefined') {
          if (!o.pannerAttr) {
            o.pannerAttr = {
              coneInnerAngle: o.coneInnerAngle,
              coneOuterAngle: o.coneOuterAngle,
              coneOuterGain: o.coneOuterGain,
              distanceModel: o.distanceModel,
              maxDistance: o.maxDistance,
              refDistance: o.refDistance,
              rolloffFactor: o.rolloffFactor,
              panningModel: o.panningModel
            };
          }

          self._pannerAttr = {
            coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
            coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
            coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
            distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
            maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
            refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
            rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
            panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
          };
        }
      } else {
        // Return this sound's panner attribute values.
        sound = self._soundById(parseInt(args[0], 10));
        return sound ? sound._pannerAttr : self._pannerAttr;
      }
    } else if (args.length === 2) {
      o = args[0];
      id = parseInt(args[1], 10);
    }

    // Update the values of the specified sounds.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      sound = self._soundById(ids[i]);

      if (sound) {
        // Merge the new values into the sound.
        var pa = sound._pannerAttr;
        pa = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
        };

        // Update the panner values or create a new panner if none exists.
        var panner = sound._panner;
        if (panner) {
          panner.coneInnerAngle = pa.coneInnerAngle;
          panner.coneOuterAngle = pa.coneOuterAngle;
          panner.coneOuterGain = pa.coneOuterGain;
          panner.distanceModel = pa.distanceModel;
          panner.maxDistance = pa.maxDistance;
          panner.refDistance = pa.refDistance;
          panner.rolloffFactor = pa.rolloffFactor;
          panner.panningModel = pa.panningModel;
        } else {
          // Make sure we have a position to setup the node with.
          if (!sound._pos) {
            sound._pos = self._pos || [0, 0, -0.5];
          }

          // Create a new panner node.
          setupPanner(sound, 'spatial');
        }
      }
    }

    return self;
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */
  Sound.prototype.init = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Setup user-defined default properties.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete initilization with howler.js core Sound's init function.
      _super.call(this);

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      }
    };
  })(Sound.prototype.init);

  /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */
  Sound.prototype.reset = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Reset all spatial plugin properties on this sound.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      } else if (self._panner) {
        // Disconnect the panner.
        self._panner.disconnect(0);
        self._panner = undefined;
        parent._refreshBuffer(self);
      }

      // Complete resetting of the sound.
      return _super.call(this);
    };
  })(Sound.prototype.reset);

  /** Helper Methods **/
  /***************************************************************************/

  /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */
  var setupPanner = function(sound, type) {
    type = type || 'spatial';

    // Create the new panner node.
    if (type === 'spatial') {
      sound._panner = Howler.ctx.createPanner();
      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
      sound._panner.refDistance = sound._pannerAttr.refDistance;
      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
      sound._panner.panningModel = sound._pannerAttr.panningModel;

      if (typeof sound._panner.positionX !== 'undefined') {
        sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
        sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
        sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      }

      if (typeof sound._panner.orientationX !== 'undefined') {
        sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
        sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
        sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
      }
    } else {
      sound._panner = Howler.ctx.createStereoPanner();
      sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
    }

    sound._panner.connect(sound._node);

    // Update the connections.
    if (!sound._paused) {
      sound._parent.pause(sound._id, true).play(sound._id, true);
    }
  };
})();


/***/ }),

/***/ "./src/common/common.js":
/*!******************************!*\
  !*** ./src/common/common.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CachedLanguages": () => (/* binding */ CachedLanguages),
/* harmony export */   "FirebaseUserClicked": () => (/* binding */ FirebaseUserClicked),
/* harmony export */   "FirebaseUserInstall": () => (/* binding */ FirebaseUserInstall),
/* harmony export */   "GameEndLayer": () => (/* binding */ GameEndLayer),
/* harmony export */   "LevelEndButtonsLayer": () => (/* binding */ LevelEndButtonsLayer),
/* harmony export */   "LevelEndLayer": () => (/* binding */ LevelEndLayer),
/* harmony export */   "LevelSelectionLayer": () => (/* binding */ LevelSelectionLayer),
/* harmony export */   "LevelStartLayer": () => (/* binding */ LevelStartLayer),
/* harmony export */   "MonsterLayer": () => (/* binding */ MonsterLayer),
/* harmony export */   "NativePlayButton": () => (/* binding */ NativePlayButton),
/* harmony export */   "PWAInstallStatus": () => (/* binding */ PWAInstallStatus),
/* harmony export */   "PausePopupLayer": () => (/* binding */ PausePopupLayer),
/* harmony export */   "PlayButtonLayer": () => (/* binding */ PlayButtonLayer),
/* harmony export */   "PreviousPlayedLevel": () => (/* binding */ PreviousPlayedLevel),
/* harmony export */   "PromptTextLayer": () => (/* binding */ PromptTextLayer),
/* harmony export */   "StartSceneLayer": () => (/* binding */ StartSceneLayer),
/* harmony export */   "StoneLayer": () => (/* binding */ StoneLayer),
/* harmony export */   "StoreMonsterPhaseNumber": () => (/* binding */ StoreMonsterPhaseNumber),
/* harmony export */   "TimetickerLayer": () => (/* binding */ TimetickerLayer),
/* harmony export */   "UserCancelled": () => (/* binding */ UserCancelled),
/* harmony export */   "loadImages": () => (/* binding */ loadImages),
/* harmony export */   "loadingScreen": () => (/* binding */ loadingScreen)
/* harmony export */ });
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global-variables.js */ "./global-variables.js");


function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function () {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}
function loadingScreen(loading) {
    const loadingElement = document.getElementById("loading-screen");
    const loadingText = document.getElementById("loading_text");
    loadingText.style.display = "none";
    if (loading) {
        loadingElement.style.display = "block";
        new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_0__.CanvasStack("canvas").bkgCanvas.layers.forEach((element) => {
            const htmlElement = document.getElementById(element.id);
            htmlElement.style.display = "none";
        });
    }
    else {
        loadingElement.style.display = "none";
        new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_0__.CanvasStack("canvas").bkgCanvas.layers.forEach((element) => {
            const htmlElement = document.getElementById(element.id);
            htmlElement.style.display = "flex";
        });
    }
}
const MonsterLayer = "monsterCanvas";
const PausePopupLayer = "pausepopupCanvas";
const StoneLayer = "stoneCanvas";
const TimetickerLayer = "timetickCanvas";
const LevelEndLayer = "levelEndCanvas";
const LevelEndButtonsLayer = "levelEndButtonsCanvas";
const LevelSelectionLayer = "levelSelectionCanvas";
const LevelStartLayer = "levelStartCanvas";
const StartSceneLayer = "startSceneCanvas";
const PlayButtonLayer = "playButtonCanvas";
const GameEndLayer = "GameEndCanvas";
const FirebaseUserClicked = "user_clicked";
const FirebaseUserInstall = "user_installed";
const PromptTextLayer = "promptTextCanvas";
const PWAInstallStatus = "pwa_installed_status";
const UserCancelled = "user_cancel_installation";
const NativePlayButton = "native_playbutton_clicked";
const PreviousPlayedLevel = "storePreviousPlayedLevel" + _global_variables_js__WEBPACK_IMPORTED_MODULE_1__.lang;
const StoreMonsterPhaseNumber = "storeMonsterPhaseNumber" + _global_variables_js__WEBPACK_IMPORTED_MODULE_1__.lang;
const CachedLanguages = "cached_languages";


/***/ }),

/***/ "./src/common/level-config.js":
/*!************************************!*\
  !*** ./src/common/level-config.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelConfig": () => (/* binding */ LevelConfig)
/* harmony export */ });
class LevelConfig {
    constructor(xPos, yPos, index) {
        this.x = xPos;
        this.y = yPos;
        this.index = index;
        this.drawready = false;
        this.img = new Image();
        this.img.src = "./assets/images/mapIcon.png";
    }
}


/***/ }),

/***/ "./src/common/sound.js":
/*!*****************************!*\
  !*** ./src/common/sound.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sound)
/* harmony export */ });
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_0__);

let inactive_screen = false;
class Sound {
    constructor() {
        this.audio = new Audio();
        this.introAudio = new howler__WEBPACK_IMPORTED_MODULE_0__.Howl({
            src: ["./assets/audios/intro.wav"],
        });
    }
    playSound(src) {
        this.audio.play().catch((e) => {
            this.audio1 = new Audio();
            this.audio1.src = src;
            this.audio1.play().catch((e) => {
                this.audio2 = new Audio();
                this.audio2.src = src;
                this.audio2.play();
            });
        });
    }
    activeScreen() {
        if (inactive_screen) {
            inactive_screen = false;
        }
        else {
            this.pauseSound();
            inactive_screen = true;
        }
    }
    pauseSound() {
        this.introAudio.pause();
        this.audio ? this.audio.pause() : null;
        this.audio2 ? this.audio1.pause() : null;
        this.audio2 ? this.audio2.pause() : null;
    }
    changeSourse(src) {
        this.audio.src = src;
        this.playSound(src);
    }
    playLevelEndHappyAudio(levelWinAudio) {
        this.audio.src = levelWinAudio;
        this.playSound(levelWinAudio);
        setTimeout(() => {
            this.introAudio.play();
        }, 700);
    }
}


/***/ }),

/***/ "./src/common/stones-config.js":
/*!*************************************!*\
  !*** ./src/common/stones-config.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoneConfig": () => (/* binding */ StoneConfig)
/* harmony export */ });
class StoneConfig {
    constructor(stoneLetter, xPos, yPos) {
        this.x = xPos;
        this.y = yPos;
        this.origx = xPos;
        this.origy = yPos;
        this.drawready = false;
        this.text = stoneLetter;
        this.img = new Image();
        this.img.src = "./assets/images/stone_pink_v02.png";
    }
}


/***/ }),

/***/ "./src/components/buttons/cancel_button.js":
/*!*************************************************!*\
  !*** ./src/components/buttons/cancel_button.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CancelButton)
/* harmony export */ });
class CancelButton {
    constructor(context, canvas) {
        this.posX = canvas.width * 0.1 + (canvas.width * 0.15) / 2;
        this.posY = canvas.height * 0.2;
        this.context = context;
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        var self = this;
        var pause_button_image = new Image();
        pause_button_image.src = "./assets/images/close_btn.png";
        pause_button_image.onload = function (e) {
            self.context.drawImage(pause_button_image, self.posX, self.posY, self.canvas.width * 0.15, self.canvas.width * 0.15);
        };
    }
    onClick(xClick, yClick) {
        const distance = Math.sqrt((xClick - this.posX - (this.canvas.width * 0.15) / 2) *
            (xClick - this.posX - (this.canvas.width * 0.15) / 2) +
            (yClick - this.posY - (this.canvas.width * 0.15) / 2) *
                (yClick - this.posY - (this.canvas.width * 0.15) / 2));
        if (distance < (this.canvas.width * 0.15) / 2) {
            return true;
        }
    }
}


/***/ }),

/***/ "./src/components/buttons/close_button.js":
/*!************************************************!*\
  !*** ./src/components/buttons/close_button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloseButton)
/* harmony export */ });
class CloseButton {
    constructor(context, canvas, posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        var self = this;
        var pause_button_image = new Image();
        pause_button_image.src = "./assets/images/map_btn.png";
        pause_button_image.onload = function (e) {
            self.context.drawImage(pause_button_image, self.posX, self.posY, self.canvas.width * 0.19, self.canvas.width * 0.19);
        };
    }
    onClick(xClick, yClick) {
        const distance = Math.sqrt((xClick - this.posX - (this.canvas.width * 0.19) / 2) *
            (xClick - this.posX - (this.canvas.width * 0.19) / 2) +
            (yClick - this.posY - (this.canvas.width * 0.19) / 2) *
                (yClick - this.posY - (this.canvas.width * 0.19) / 2));
        if (distance < (this.canvas.width * 0.19) / 2) {
            return true;
        }
    }
}


/***/ }),

/***/ "./src/components/buttons/install_button.js":
/*!**************************************************!*\
  !*** ./src/components/buttons/install_button.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InstallButton)
/* harmony export */ });
class InstallButton {
    constructor(context, canvas, posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        var self = this;
        var pause_button_image = new Image();
        pause_button_image.src = "./assets/images/Install_button.png";
        self.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        pause_button_image.onload = function (e) {
            self.context.drawImage(pause_button_image, self.posX, self.posY, self.canvas.width / 3, self.canvas.width / 6);
        };
    }
    onClick(xClick, yClick) {
        const distance = Math.sqrt((xClick - this.posX - this.canvas.width / 6) *
            (xClick - this.posX - this.canvas.width / 6) +
            (yClick - this.posY - this.canvas.width / 12) *
                (yClick - this.posY - this.canvas.width / 12));
        if (distance < this.canvas.width / 8) {
            return true;
        }
    }
}


/***/ }),

/***/ "./src/components/buttons/next_button.js":
/*!***********************************************!*\
  !*** ./src/components/buttons/next_button.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NextButton)
/* harmony export */ });
class NextButton {
    constructor(context, canvas, posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        var self = this;
        var pause_button_image = new Image();
        pause_button_image.src = "./assets/images/next_btn.png";
        pause_button_image.onload = function (e) {
            self.context.drawImage(pause_button_image, self.posX, self.posY, self.canvas.width * 0.19, self.canvas.width * 0.19);
        };
    }
    onClick(xClick, yClick) {
        const distance = Math.sqrt((xClick - this.posX - (this.canvas.width * 0.19) / 2) *
            (xClick - this.posX - (this.canvas.width * 0.19) / 2) +
            (yClick - this.posY - (this.canvas.width * 0.19) / 2) *
                (yClick - this.posY - (this.canvas.width * 0.19) / 2));
        if (distance < (this.canvas.width * 0.19) / 2) {
            return true;
        }
    }
}


/***/ }),

/***/ "./src/components/buttons/pause_button.js":
/*!************************************************!*\
  !*** ./src/components/buttons/pause_button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PauseButton)
/* harmony export */ });
class PauseButton {
    constructor(context, canvas) {
        this.posX = canvas.width - canvas.height * 0.09;
        this.posY = 0;
        this.context = context;
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        var self = this;
        var pause_button_image = new Image();
        pause_button_image.src = "./assets/images/pause_v01.png";
        pause_button_image.onload = function (e) {
            self.context.drawImage(pause_button_image, self.posX, self.posY, self.canvas.height * 0.09, self.canvas.height * 0.09);
        };
    }
    onClick(xClick, yClick) {
        const distance = Math.sqrt((xClick - this.posX - (this.canvas.height * 0.09) / 2) *
            (xClick - this.posX - (this.canvas.height * 0.09) / 2) +
            (yClick - this.posY - (this.canvas.height * 0.09) / 2) *
                (yClick - this.posY - (this.canvas.height * 0.09) / 2));
        if (distance < (this.canvas.height * 0.09) / 2) {
            return true;
        }
    }
}


/***/ }),

/***/ "./src/components/buttons/play_butoon.js":
/*!***********************************************!*\
  !*** ./src/components/buttons/play_butoon.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayButton)
/* harmony export */ });
class PlayButton {
    constructor(context, canvas, posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        var self = this;
        var pause_button_image = new Image();
        pause_button_image.src = "./assets/images/Play_button.png";
        self.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        pause_button_image.onload = function (e) {
            self.context.drawImage(pause_button_image, self.posX, self.posY, self.canvas.width / 3, self.canvas.width / 3);
        };
    }
    onClick(xClick, yClick) {
        const distance = Math.sqrt((xClick - this.posX - this.canvas.width / 6) *
            (xClick - this.posX - this.canvas.width / 6) +
            (yClick - this.posY - this.canvas.width / 6) *
                (yClick - this.posY - this.canvas.width / 6));
        if (distance < this.canvas.width / 8) {
            return true;
        }
    }
}


/***/ }),

/***/ "./src/components/buttons/retry_button.js":
/*!************************************************!*\
  !*** ./src/components/buttons/retry_button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RetryButton)
/* harmony export */ });
class RetryButton {
    constructor(context, canvas, posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.canvas = canvas;
        this.draw();
    }
    draw() {
        var self = this;
        var pause_button_image = new Image();
        pause_button_image.src = "./assets/images/retry_btn.png";
        pause_button_image.onload = function (e) {
            self.context.drawImage(pause_button_image, self.posX, self.posY, self.canvas.width * 0.19, self.canvas.width * 0.19);
        };
    }
    onClick(xClick, yClick) {
        const distance = Math.sqrt((xClick - this.posX - (this.canvas.width * 0.19) / 2) *
            (xClick - this.posX - (this.canvas.width * 0.19) / 2) +
            (yClick - this.posY - (this.canvas.width * 0.19) / 2) *
                (yClick - this.posY - (this.canvas.width * 0.19) / 2));
        if (distance < (this.canvas.width * 0.19) / 2) {
            return true;
        }
    }
}


/***/ }),

/***/ "./src/components/level-indicators.js":
/*!********************************************!*\
  !*** ./src/components/level-indicators.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelIndicators": () => (/* binding */ LevelIndicators)
/* harmony export */ });
class LevelIndicators {
    constructor(context, canvas, activeIndicators) {
        this.context = context;
        this.canvas = canvas;
        this.activeIndicators = activeIndicators;
        this.draw();
    }
    setIndicators(int) {
        this.activeIndicators = int;
        this.update(this);
    }
    draw() {
        var self = this;
        var level_indicator = new Image();
        level_indicator.src = "./assets/images/levels_v01.png";
        var bar_empty = new Image();
        bar_empty.src = "./assets/images/bar_empty_v01.png";
        level_indicator.onload = function (e) {
            self.context.drawImage(level_indicator, 0, 0, self.canvas.width * 0.35, self.canvas.height * 0.09);
            bar_empty.onload = function (e) {
                for (var i = 0; i < 5; i++) {
                    self.context.drawImage(bar_empty, ((self.canvas.width * 0.35) / 7) * (i + 1), (self.canvas.height * 0.09) / 2 - (self.canvas.height * 0.09) / 6, (self.canvas.width * 0.35) / 10, (self.canvas.height * 0.09) / 3);
                }
            };
            self.update(self);
        };
    }
    update(self) {
        var bar_full = new Image();
        bar_full.src = "./assets/images/bar_full_v01.png";
        bar_full.onload = function (e) {
            for (var i = 0; i < self.activeIndicators; i++) {
                self.context.drawImage(bar_full, ((self.canvas.width * 0.35) / 7) * (i + 1), (self.canvas.height * 0.09) / 2 - (self.canvas.height * 0.09) / 6, (self.canvas.width * 0.35) / 10, (self.canvas.height * 0.09) / 3);
            }
        };
    }
}


/***/ }),

/***/ "./src/components/monster.js":
/*!***********************************!*\
  !*** ./src/components/monster.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Monster": () => (/* binding */ Monster)
/* harmony export */ });
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");


var lastTime = 0;
var self;
var animationFrame;
var monsterPhaseNumber = localStorage.getItem(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.StoreMonsterPhaseNumber) || 1;
console.log(">>>>>>>>>.");
console.log(monsterPhaseNumber);
var eatImg = new Image();
eatImg.src = "./assets/images/eat1" + monsterPhaseNumber + ".png";
var idleImg = new Image();
idleImg.src = "./assets/images/idle1" + monsterPhaseNumber + ".png";
var spitImg = new Image();
spitImg.src = "./assets/images/spit1" + monsterPhaseNumber + ".png";
console.log("monsterexecuting");
class Monster {
    constructor(game, zindex) {
        this.game = game;
        self = this;
        this.zindex = zindex;
        this.width = this.game.width;
        this.height = this.game.height;
        this.image = document.getElementById("monster");
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 6;
        this.x = this.game.width / 2 - this.game.width * 0.243;
        this.y = this.game.width / 3;
        this.fps = 10;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__.CanvasStack("canvas");
        this.createCanvas();
    }
    createCanvas() {
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.MonsterLayer);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = "6";
        this.canavsElement.style.bottom = "0";
        this.draw();
        this.animation(0);
    }
    changeZindex(index) {
        this.canavsElement.style.zIndex = index;
    }
    deleteCanvas() {
        cancelAnimationFrame(animationFrame);
        this.canvasStack.deleteLayer(this.id);
    }
    update(deltaTime) {
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) {
                this.frameX++;
            }
            else {
                this.frameX = 0;
            }
        }
        else {
            this.frameTimer += deltaTime;
        }
        this.draw();
    }
    draw() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.drawImage(this.image, 770 * this.frameX, 1386 * this.frameY, 768, 1386, this.x, this.y * 0.8, this.width / 2, this.height / 1.5);
    }
    changeImage(src) {
        this.animation(0);
        // if (this.frameY == 1) {
        //   this.frameY = 0;
        // } else {
        //   this.frameY = 1;
        // }
        this.image.src = src;
    }
    changePhaseNumber(monsterPhaseNum) {
        console.log("monster changing");
        eatImg = new Image();
        eatImg.src = "./assets/images/eat1" + monsterPhaseNum + ".png";
        idleImg = new Image();
        idleImg.src = "./assets/images/idle1" + monsterPhaseNum + ".png";
        spitImg = new Image();
        spitImg.src = "./assets/images/spit1" + monsterPhaseNum + ".png";
        console.log(eatImg.src);
        console.log(idleImg.src);
        console.log(spitImg.src);
        console.log(monsterPhaseNumber);
    }
    changeToEatAnimation() {
        this.image = eatImg;
        setTimeout(() => {
            this.changeToIdleAnimation();
        }, 2000);
    }
    changeToIdleAnimation() {
        this.image = idleImg;
    }
    changeToSpitAnimation() {
        this.image = spitImg;
        setTimeout(() => {
            this.changeToIdleAnimation();
        }, 2000);
    }
    animation(timeStamp) {
        let deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        self.update(deltaTime);
        animationFrame = requestAnimationFrame(self.animation);
    }
}


/***/ }),

/***/ "./src/components/pause-popup.js":
/*!***************************************!*\
  !*** ./src/components/pause-popup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PausePopUp)
/* harmony export */ });
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _buttons_cancel_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/cancel_button.js */ "./src/components/buttons/cancel_button.js");
/* harmony import */ var _buttons_close_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/close_button.js */ "./src/components/buttons/close_button.js");
/* harmony import */ var _buttons_retry_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/retry_button.js */ "./src/components/buttons/retry_button.js");





class PausePopUp {
    constructor(canvas, levelStart) {
        this.canvas = canvas;
        this.levelStart = levelStart;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__.CanvasStack("canvas");
        this.createCanvas();
    }
    createCanvas() {
        var self = this;
        this.id = this.canvasStack.createLayer(this.canvas.height, this.canvas.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.PausePopupLayer);
        const selfIdElement = document.getElementById(this.id);
        this.context = selfIdElement.getContext("2d");
        selfIdElement.style.zIndex = "11";
        selfIdElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        var pop_up_image = new Image();
        pop_up_image.src = "./assets/images/popup_bg_v01.png";
        pop_up_image.onload = function (e) {
            self.context.drawImage(pop_up_image, self.canvas.width * 0.1, self.canvas.height * 0.2, self.canvas.width * 0.8, self.canvas.width * 0.8);
            self.cancelButton = new _buttons_cancel_button_js__WEBPACK_IMPORTED_MODULE_2__["default"](self.context, self.canvas);
            self.retryButton = new _buttons_retry_button_js__WEBPACK_IMPORTED_MODULE_4__["default"](self.context, self.canvas, self.canvas.width * 0.55, self.canvas.height * 0.2 +
                self.canvas.width * 0.4 -
                (self.canvas.width * 0.19) / 2);
            self.closeButton = new _buttons_close_button_js__WEBPACK_IMPORTED_MODULE_3__["default"](self.context, self.canvas, self.canvas.width * 0.25, self.canvas.height * 0.2 +
                self.canvas.width * 0.4 -
                (self.canvas.width * 0.19) / 2);
        };
        selfIdElement.addEventListener("click", function (event) {
            var rect = selfIdElement.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (self.cancelButton.onClick(x, y)) {
                self.levelStart.timerTicking.resumeTimer();
                self.levelStart.levelEndCallBack();
                self.deleteCanvas(self);
            }
            if (self.retryButton.onClick(x, y)) {
                self.levelStart.levelEndCallBack("retry_button");
                self.deleteCanvas(self);
            }
            if (self.closeButton.onClick(x, y)) {
                self.levelStart.levelEndCallBack("close_button");
                self.deleteCanvas(self);
            }
        });
    }
    deleteCanvas(self) {
        self.canvasStack.deleteLayer(this.id);
    }
    draw() { }
    update() { }
}


/***/ }),

/***/ "./src/components/prompt-text.js":
/*!***************************************!*\
  !*** ./src/components/prompt-text.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromptText": () => (/* binding */ PromptText)
/* harmony export */ });
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global-variables.js */ "./global-variables.js");



var self;
class PromptText {
    constructor(game, levelStart, currentPuzzleData, levelData) {
        this.game = game;
        this.width = game.width;
        this.height = game.height;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__.CanvasStack("canvas");
        this.levelStart = levelStart;
        this.levelData = levelData;
        self = this;
        this.currentPromptText = currentPuzzleData.prompt.promptText;
        this.currentPuzzleData = currentPuzzleData;
        this.fntstOrGrtImgArr = [];
        this.createCanvas();
        this.loadFantasticAndGreatImage();
    }
    loadFantasticAndGreatImage() {
        var self = this;
        this.fantastic_image = new Image();
        this.fantastic_image.src = "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_2__.lang + "/images/fantastic_01.png";
        this.fntstOrGrtImgArr.push(this.fantastic_image);
        this.great_image = new Image();
        this.great_image.src = "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_2__.lang + "/images/great_01.png";
        this.fntstOrGrtImgArr.push(this.great_image);
    }
    createCanvas() {
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.PromptTextLayer);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = 5;
    }
    setCurrrentPuzzleData(data) {
        this.currentPuzzleData = data;
        this.currentPromptText = data.prompt.promptText;
    }
    showFantasticOrGreat(imageIndex) {
        var self = this;
        this.context.clearRect(this.game.width / 2 - (this.game.width * 0.5) / 2, this.height * 0.15, this.game.width * 0.5, this.height * 0.25);
        this.context.drawImage(self.fntstOrGrtImgArr[imageIndex], this.game.width - this.game.width * 0.75, this.height * 0.2, this.game.width * 0.5, this.height * 0.1);
    }
    deleteCanvas() {
        this.canvasStack.deleteLayer(this.id);
    }
    draw(droppedStones = 0) {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.drawImage(this.prompt_image, this.game.width / 2 - (this.game.width * 0.5) / 2, this.height * 0.15, this.game.width * 0.5, this.height * 0.25);
        this.context.fillStyle = "black";
        this.context.font = 30 + "px Arial";
        this.context.textAlign = "center";
        const promptTextLetters = this.currentPromptText.split("");
        const x = this.width / 2;
        const y = this.height * 0.26;
        var fontSize = 20;
        var letterHighlight = this.currentPuzzleData.targetStones[0].split("");
        for (let i = 0; i < promptTextLetters.length; i++) {
            // this.context.textAlign = "center";
            switch (this.levelData.levelMeta.levelType) {
                case "LetterInWord": {
                    if (letterHighlight.includes(promptTextLetters[i])) {
                        letterHighlight = letterHighlight.slice(1, letterHighlight.length);
                        this.context.fillStyle = "red";
                        this.context.fillText(promptTextLetters[i], fontSize * i + x - promptTextLetters.length * 6, y);
                    }
                    else {
                        this.context.fillStyle = "black";
                        this.context.fillText(promptTextLetters[i], fontSize * i + x - promptTextLetters.length * 6, y);
                    }
                    break;
                }
                case "Word": {
                    if (droppedStones > i || droppedStones == undefined) {
                        this.context.fillStyle = "black";
                        this.context.fillText(promptTextLetters[i], fontSize * i + x - promptTextLetters.length * 6, y);
                    }
                    else {
                        this.context.fillStyle = "red";
                        this.context.fillText(promptTextLetters[i], fontSize * i + x - promptTextLetters.length * 6, y);
                    }
                    break;
                }
                default: {
                    this.context.fillStyle = "black";
                    this.context.fillText(promptTextLetters[i], fontSize * i + x - promptTextLetters.length * 6, y);
                }
            }
        }
        // this.context.fillText(
        //     this.currentPromptText,
        //   this.width / 2.1,
        //   this.height * 0.26
        // );
    }
    createBackground() {
        var self = this;
        self.prompt_image = new Image();
        self.prompt_image.src = "./assets/images/promptTextBg.png";
        self.prompt_image.onload = function (e) {
            self.draw();
        };
    }
    update() {
        this.createBackground();
    }
}


/***/ }),

/***/ "./src/components/stones-layer.js":
/*!****************************************!*\
  !*** ./src/components/stones-layer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StonesLayer)
/* harmony export */ });
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _common_stones_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/stones-config.js */ "./src/common/stones-config.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _pause_popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pause-popup.js */ "./src/components/pause-popup.js");




var gs = {
    mode: "gameplay",
    levelnum: 0,
};
gs.puzzle = {
    target: [],
    stones: [],
};
gs.stones = [];
var pickedStone;
var offsetCoordinateValue = 32;
const dragAudio = new Audio();
dragAudio.src = "./assets/audios/onDrag.mp3";
dragAudio.preload = "auto";
class StonesLayer {
    constructor(canvas, puzzleData, pausebutton, callBack, levelStart) {
        this.canvas = canvas;
        this.levelStart = levelStart;
        this.width = canvas.width;
        this.pausebutton = pausebutton;
        this.height = canvas.height;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_2__.CanvasStack("canvas");
        this.puzzleData = puzzleData;
        this.setCurrentPuzzle();
        this.levelStart = levelStart;
        this.callBack = callBack;
        this.createCanvas();
    }
    setNewPuzzle(currentPuzzle) {
        this.puzzleData = currentPuzzle;
        this.setCurrentPuzzle();
        this.createStones(this.stonepos);
    }
    stonepos(stonepos) {
        throw new Error("Method not implemented.");
    }
    setCurrentPuzzle() {
        this.levelStart.audio.changeSourse(this.puzzleData.prompt.promptAudio);
        gs.puzzle.stones = [];
        gs.puzzle.target = [];
        for (let target of this.puzzleData.targetStones) {
            gs.puzzle.target.push(target);
        }
        gs.puzzle.stones = this.gameStoneOptions(this.puzzleData.foilStones, this.puzzleData.targetStones);
        gs.puzzle.prompt = this.puzzleData.prompt.promptText;
    }
    isTimerEnded() {
        pickedStone = null;
    }
    gameStoneOptions(foilStones, targetStones) {
        targetStones.forEach((e) => {
            foilStones.indexOf(e) != -1
                ? foilStones.splice(foilStones.indexOf(e), 1)
                : null;
        });
        targetStones.forEach((e) => {
            foilStones.push(e);
        });
        return foilStones.sort(() => Math.random() - 0.5);
    }
    createCanvas() {
        var self = this;
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.StoneLayer);
        const selfElelementId = document.getElementById(this.id);
        this.context = selfElelementId.getContext("2d");
        selfElelementId.style.zIndex = "7";
        selfElelementId.style.bottom = "0";
        this.stonepos = [
            [
                [
                    this.canvas.width / 5 - offsetCoordinateValue,
                    this.canvas.height / 1.9 - offsetCoordinateValue,
                ],
                [
                    this.canvas.width / 2 - offsetCoordinateValue,
                    this.canvas.height / 1.15 - offsetCoordinateValue,
                ],
                [
                    this.canvas.width / 3.5 +
                        this.canvas.width / 2 -
                        offsetCoordinateValue,
                    this.canvas.height / 1.2 - offsetCoordinateValue,
                ],
                [
                    this.canvas.width / 4 - offsetCoordinateValue,
                    this.canvas.height / 1.28 - offsetCoordinateValue,
                ],
                [
                    this.canvas.width / 7 - offsetCoordinateValue,
                    this.canvas.height / 1.5 - offsetCoordinateValue,
                ],
                [
                    this.canvas.width / 2.3 +
                        this.canvas.width / 2.1 -
                        offsetCoordinateValue,
                    this.canvas.height / 1.9 - offsetCoordinateValue,
                ],
                [
                    this.canvas.width / 2.3 +
                        this.canvas.width / 2.1 -
                        offsetCoordinateValue,
                    this.canvas.height / 1.42 - offsetCoordinateValue,
                ],
                [
                    this.canvas.width / 6 - offsetCoordinateValue,
                    this.canvas.height / 1.15 - offsetCoordinateValue,
                ],
            ],
        ];
        selfElelementId.addEventListener("click", function (event) {
            var rect = selfElelementId.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (Math.sqrt(x - this.width / 3) < 12 &&
                Math.sqrt(y - this.height / 5.5) < 10) {
                self.levelStart.audio.changeSourse(self.puzzleData.prompt.promptAudio);
            }
            if (Math.sqrt((x - this.width / 2 - (this.width * 0.3) / 2) *
                (x - this.width / 2 - (this.width * 0.3) / 2)) +
                (y - this.height * 0.15) * (y - this.height * 0.15) <=
                1000) {
                console.log("prompt");
            }
        });
        selfElelementId.addEventListener("mousedown", function (event) {
            var rect = selfElelementId.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            self.levelStart.timerTicking.resumeTimer();
            if (self.pausebutton.onClick(x, y)) {
                self.levelStart.timerTicking.pauseTimer();
                self.levelStart.levelEndCallBack();
                new _pause_popup_js__WEBPACK_IMPORTED_MODULE_3__["default"](document.getElementById(self.id), self.levelStart);
            }
            for (let s of gs.stones) {
                if (Math.sqrt((x - s.x) * (x - s.x) + (y - s.y) * (y - s.y)) <= 40) {
                    dragAudio.currentTime = 0;
                    dragAudio.play();
                    pickedStone = s;
                }
            }
        }, false);
        selfElelementId.addEventListener("mouseup", function (event) {
            var rect = selfElelementId.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (Math.sqrt((x -
                self.canvas.scene.monster.x -
                self.canvas.scene.monster.width / 4) *
                (x -
                    self.canvas.scene.monster.x -
                    self.canvas.scene.monster.width / 4) +
                (y -
                    self.canvas.scene.monster.y -
                    self.canvas.scene.monster.height / 2.7) *
                    (y -
                        self.canvas.scene.monster.y -
                        self.canvas.scene.monster.height / 2.7)) <= 60) {
                if (pickedStone) {
                    pickedStone.x = -900;
                    pickedStone.y = -900;
                    if (pickedStone.text == gs.puzzle.target[0]) {
                        gs.puzzle.target.shift();
                        if (gs.puzzle.target.length == 0) {
                            gs.stones = [];
                            self.callBack(true, true, pickedStone.text.length);
                        }
                        else {
                            self.callBack(true, false, pickedStone.text.length);
                        }
                    }
                    else {
                        gs.stones = [];
                        self.callBack(false, true, pickedStone.text.length);
                    }
                }
                pickedStone = null;
            }
            if (pickedStone) {
                pickedStone.x = pickedStone.origx;
                pickedStone.y = pickedStone.origy;
            }
            pickedStone = null;
        }, false);
        selfElelementId.addEventListener("mousemove", function (event) {
            var rect = selfElelementId.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (pickedStone) {
                pickedStone.x = x;
                pickedStone.y = y;
            }
        }, false);
        selfElelementId.addEventListener("touchstart", function (e) {
            var touch = e.touches[0];
            var mouseEvent = new MouseEvent("mousedown", {
                clientX: touch.clientX,
                clientY: touch.clientY,
            });
            selfElelementId.dispatchEvent(mouseEvent);
        }, false);
        selfElelementId.addEventListener("touchmove", function (e) {
            var touch = e.touches[0];
            var mouseEvent = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY,
            });
            selfElelementId.dispatchEvent(mouseEvent);
        }, false);
        selfElelementId.addEventListener("touchend", function (e) {
            var touch = e.changedTouches[0];
            var mouseEvent = new MouseEvent("mouseup", {
                clientX: touch.clientX,
                clientY: touch.clientY,
            });
            selfElelementId.dispatchEvent(mouseEvent);
        }, false);
        this.createStones(this.stonepos);
    }
    setPrompt() {
        this.context.fillStyle = "black";
        this.context.font = this.width * 0.09 + "px Arial";
        this.context.textAlign = "center";
        this.context.fillText(gs.puzzle.prompt, this.width / 2, this.height * 0.27);
    }
    deleteCanvas() {
        this.canvasStack.deleteLayer(this.id);
    }
    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let s of gs.stones) {
            this.drawstone(s, this.canvas);
        }
    }
    drawstone(s, canvas) {
        var imageSize = canvas.height / 13;
        var textFontSize = canvas.height / 20;
        var imageCenterOffsetX = imageSize / 2.3;
        var imageCenterOffsetY = imageSize / 1.5;
        this.context.drawImage(s.img, s.x - imageCenterOffsetX, s.y - imageCenterOffsetY, imageSize, imageSize);
        this.context.fillStyle = "white";
        this.context.font = textFontSize + "px Arial";
        this.context.textAlign = "center";
        this.context.fillText(s.text, s.x, s.y);
    }
    createStones(stonepos) {
        var poss = stonepos[0];
        var i = 0;
        gs.stones.splice(0, gs.stones.length);
        for (let s of gs.puzzle.stones) {
            var ns = new _common_stones_config_js__WEBPACK_IMPORTED_MODULE_1__.StoneConfig(s, poss[i][0], poss[i][1]);
            gs.stones.push(ns);
            i += 1;
        }
        this.draw();
    }
    update() {
        this.draw();
    }
}


/***/ }),

/***/ "./src/components/timer-ticking.js":
/*!*****************************************!*\
  !*** ./src/components/timer-ticking.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerTicking": () => (/* binding */ TimerTicking)
/* harmony export */ });
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");


class TimerTicking {
    constructor(game, levelStart) {
        this.game = game;
        this.width = game.width;
        this.height = game.height;
        this.widthToClear = this.game.width / 3.4;
        this.maxLimitExhausted = false;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_1__.CanvasStack("canvas");
        this.timer = 0;
        this.isTimerStarted = false;
        this.isTimerEnded = false;
        this.levelStart = levelStart;
        this.isTimerRunningOut = false;
        var self = this;
        this.createCanvas();
    }
    createCanvas() {
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.TimetickerLayer);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = "4";
        // this.animation(0);
    }
    deleteCanvas() {
        this.canvasStack.deleteLayer(this.id);
    }
    draw() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.drawImage(this.timer_full, this.game.width * 0.12, this.height * 0.099, this.game.width - 50, this.height * 0.05);
        this.beginTimerOnStart();
    }
    createBackgroud() {
        var self = this;
        this.timer_full = new Image();
        this.timer_full.src = "./assets/images/timer_full.png";
        this.timer_full.onload = function (e) {
            self.draw();
            self.beginTimerOnStart();
        };
    }
    update() {
        if (this.isTimerStarted) {
            this.timer += 0.06;
            if (this.game.width * 1.3 - this.widthToClear - 10 * this.timer > 55) {
                this.context.clearRect(this.game.width * 1.3 - this.widthToClear - 10 * this.timer, 0, this.width, this.height);
            }
            if (this.game.width * 1.3 - this.widthToClear - 10 * this.timer < 100 &&
                this.game.width * 1.3 - this.widthToClear - 10 * this.timer > 54 &&
                !this.isTimerRunningOut) {
                this.isTimerRunningOut = true;
                this.levelStart.audio.changeSourse("./assets/audios/timeout.mp3");
            }
            if (this.game.width * 1.3 - this.widthToClear - 10 * this.timer < 55 &&
                this.game.width * 1.3 - this.widthToClear - 10 * this.timer > 54) {
                this.isTimerRunningOut = false;
                this.isTimerEnded = true;
                this.isTimerEnded ? this.levelStart.changePuzzle() : null;
                this.timer = 0;
            }
        }
    }
    beginTimerOnStart() {
        var self = this;
        setTimeout(() => {
            if (!this.pauseButtonClicked) {
                if (!self.isTimerStarted && self.timer == 0) {
                    self.timer = 0;
                    self.isTimerStarted = true;
                }
            }
        }, 6500);
    }
    stopTimer() {
        this.isTimerStarted = false;
        setTimeout(() => {
            this.timer = 0;
        }, 3000);
        this.timer = 0;
    }
    pauseTimer() {
        this.isTimerStarted = false;
        this.pauseButtonClicked = true;
    }
    resumeTimer() {
        this.isTimerStarted = true;
        this.pauseButtonClicked = false;
    }
}


/***/ }),

/***/ "./src/data/api-data.js":
/*!******************************!*\
  !*** ./src/data/api-data.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "getFtmData": () => (/* binding */ getFtmData)
/* harmony export */ });
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global-variables.js */ "./global-variables.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const URL = "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_0__.lang + "/ftm_" + _global_variables_js__WEBPACK_IMPORTED_MODULE_0__.lang + ".json";
function getFtmData() {
    return fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json().then((data) => {
        return data;
    }));
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        // let d = {
        //     "OtherAudios": null,
        //     "FeedbackTexts": null,
        //     "Levels": null,
        //     "FeedbackAudios": null,
        //     "RightToLeft": null
        // }
        return yield getFtmData();
    });
}


/***/ }),

/***/ "./src/data/data-modal.js":
/*!********************************!*\
  !*** ./src/data/data-modal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataModal": () => (/* binding */ DataModal),
/* harmony export */   "FeedbackAudios": () => (/* binding */ FeedbackAudios),
/* harmony export */   "FeedbackTexts": () => (/* binding */ FeedbackTexts),
/* harmony export */   "FoilStone": () => (/* binding */ FoilStone),
/* harmony export */   "LevelMeta": () => (/* binding */ LevelMeta),
/* harmony export */   "Levels": () => (/* binding */ Levels),
/* harmony export */   "OtherAudios": () => (/* binding */ OtherAudios),
/* harmony export */   "Prompt": () => (/* binding */ Prompt),
/* harmony export */   "Puzzles": () => (/* binding */ Puzzles),
/* harmony export */   "TargetStone": () => (/* binding */ TargetStone)
/* harmony export */ });
class DataModal {
    constructor(otherAudios, levels, feedbackTexts, rightToLeft, feedbackAudios) {
        this.otherAudios = new OtherAudios(otherAudios);
        this.levels = this.getLevels(levels);
        this.FeedbackTexts = new FeedbackTexts(feedbackTexts);
        this.FeedbackAudios = new FeedbackAudios(feedbackAudios);
        this.rightToLeft = rightToLeft;
    }
    getLevels(levels) {
        let levelArray = [];
        for (let i = 0; i < levels.length; i++) {
            levelArray.push(new Levels(levels[i]));
        }
        return levelArray;
    }
}
class OtherAudios {
    constructor(otherAudios) {
        this.selctYourPlayer = otherAudios["Select your player"];
        this.watchMeGrow = otherAudios["Watch me grow"];
        this.areYouSure = otherAudios["Are you sure"];
    }
}
class FeedbackTexts {
    constructor(feedbackTexts) {
        this.fantastic = feedbackTexts[0];
        this.great = feedbackTexts[1];
        this.amazing = feedbackTexts[2];
    }
}
class FeedbackAudios {
    constructor(feedbackAudios) {
        this.fantastic = feedbackAudios[0];
        this.great = feedbackAudios[1];
        this.amazing = feedbackAudios[2];
    }
}
class Levels {
    constructor(levels) {
        this.puzzles = this.getPuzzleData(levels);
        this.levelMeta = new LevelMeta(levels.LevelMeta);
        this.levelNumber = levels.LevelNumber;
    }
    getPuzzleData(levels) {
        let puzzleObjects = [];
        levels.Puzzles.map((puzzleData, index) => {
            puzzleObjects.push(new Puzzles(puzzleData));
        });
        return puzzleObjects;
    }
}
class Puzzles {
    constructor(puzzle) {
        this.segmentNumber = puzzle.SegmentNumber;
        this.prompt = new Prompt(puzzle.prompt);
        this.foilStones = this.getFoilStones(puzzle);
        this.targetStones = this.getTargetStones(puzzle);
    }
    getFoilStones(puzzle) {
        let foilStoneArray = [];
        puzzle.foilstones.map((stones, index) => {
            foilStoneArray.push(stones.StoneText);
        });
        return foilStoneArray;
    }
    getTargetStones(puzzle) {
        let targetStoneArray = [];
        puzzle.targetstones.map((stones, index) => {
            targetStoneArray.push(stones.StoneText);
        });
        return targetStoneArray;
    }
}
class FoilStone {
    constructor(stoneText) {
        this.stoneText = stoneText;
    }
}
class TargetStone {
    constructor() {
        this.stoneText;
    }
}
class Prompt {
    constructor(prompt) {
        this.promptText = prompt.PromptText;
        this.promptAudio = prompt.PromptAudio;
    }
}
class LevelMeta {
    constructor(levelMeta) {
        this.promptFadeOut = levelMeta.PromptFadeout;
        this.letterGroup = levelMeta.LetterGroup;
        this.levelNumber = levelMeta.LevelNumber;
        this.protoType = levelMeta.PromptType;
        this.levelType = levelMeta.LevelType;
    }
}


/***/ }),

/***/ "./src/data/profile-data.js":
/*!**********************************!*\
  !*** ./src/data/profile-data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileData": () => (/* binding */ ProfileData),
/* harmony export */   "getDatafromStorage": () => (/* binding */ getDatafromStorage),
/* harmony export */   "setDataToStorage": () => (/* binding */ setDataToStorage)
/* harmony export */ });
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global-variables.js */ "./global-variables.js");

class ProfileData {
    constructor(levelName, levelNumber, levelScore, levelStar) {
        (this.levelName = levelName),
            (this.levelNumber = levelNumber),
            (this.levelScore = levelScore),
            (this.levelStar = levelStar);
    }
}
function setDataToStorage(profileData) {
    const existingData = getDatafromStorage()
        ? jsonToArray(getDatafromStorage())
        : [];
    profileData ? dataPushToArray(existingData, profileData) : null;
    existingData.sort((a, b) => {
        if (a.levelNumber > b.levelNumber) {
            return 1;
        }
        else {
            return -1;
        }
    });
    const data = JSON.stringify(existingData);
    if (data) {
        localStorage.setItem(_global_variables_js__WEBPACK_IMPORTED_MODULE_0__.lang + "Profile", data);
    }
}
function jsonToArray(json) {
    var data = [];
    for (var i in json) {
        data.push(json[i]);
    }
    return data;
}
function dataPushToArray(jsonData, profileData) {
    var dataNotExist = true;
    jsonData.forEach((data) => {
        if (parseInt(data.levelNumber) == parseInt(profileData.levelNumber)) {
            dataNotExist = false;
            data.levelScore < profileData.levelScore
                ? (data.levelScore = profileData.levelScore)
                : null;
            data.levelStar < profileData.levelStar
                ? (data.levelStar = profileData.levelStar)
                : null;
        }
    });
    dataNotExist ? jsonData.push(profileData) : null;
    return jsonData;
}
function getDatafromStorage() {
    const data = JSON.parse(localStorage.getItem(_global_variables_js__WEBPACK_IMPORTED_MODULE_0__.lang + "Profile") || "{}");
    return data;
}


/***/ }),

/***/ "./src/firebase/firebase_config.js":
/*!*****************************************!*\
  !*** ./src/firebase/firebase_config.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firebaseConfig": () => (/* binding */ firebaseConfig)
/* harmony export */ });
const firebaseConfig = {
    apiKey: "AIzaSyCl6CcquG4FlwPUtfmTY16-R5czxOnTtPE",
    authDomain: "feedthemonsterjs.firebaseapp.com",
    projectId: "feedthemonsterjs",
    storageBucket: "feedthemonsterjs.appspot.com",
    messagingSenderId: "69001268201",
    appId: "1:69001268201:web:2bfe4d5395d1602662d978",
    measurementId: "G-N6VQE5GWQH"
};


/***/ }),

/***/ "./src/scenes/game-end-scene.js":
/*!**************************************!*\
  !*** ./src/scenes/game-end-scene.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameEndScene": () => (/* binding */ GameEndScene)
/* harmony export */ });
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");


var images = {
    bgImg: "./assets/images/bg_v01.jpg",
    hillImg: "./assets/images/hill_v01.png",
    timer_empty: "./assets/images/timer_empty.png",
    pillerImg: "./assets/images/Totem_v02_v01.png",
    grassImg: "./assets/images/FG_a_v01.png",
    fenchImg: "./assets/images/fence_v01.png",
    bigMonsterImg: "./assets/images/ftm_bonus_level_monsters.png"
};
var self;
class GameEndScene {
    constructor(game) {
        this.game = game;
        this.width = game.width;
        this.height = game.height;
        self = this;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_0__.CanvasStack("canvas");
        this.createCanvas();
    }
    createCanvas() {
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_1__.GameEndLayer);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = '3';
        document.getElementById("discription-text").style.display = "block";
        document.getElementById("discription-text").innerHTML = globalThis.descriptionText;
        this.createBackgroud();
    }
    deleteCanvas() {
        document.getElementById("discription-text").style.display = "none";
        this.canvasStack.deleteLayer(this.id);
        //delete this;
    }
    draw() {
    }
    createBackgroud() {
        var self = this;
        var context = this.context;
        var width = this.width;
        var height = this.height;
        (0,_common_common_js__WEBPACK_IMPORTED_MODULE_1__.loadImages)(images, function (image) {
            context.drawImage(image.bgImg, 0, 0, width, height);
            context.drawImage(image.pillerImg, width * 0.6, height / 6, width, height / 2);
            context.drawImage(image.fenchImg, -width * 0.4, height / 3, width, height / 3);
            context.drawImage(image.hillImg, -width * 0.25, height / 2, width * 1.5, height / 2);
            context.drawImage(image.grassImg, -width * 0.25, height / 2 + (height / 2) * 0.1, width * 1.5, height / 2);
            context.drawImage(image.bigMonsterImg, width * 0.25, height / 2 - height * 0.25, width / 1.7, height / 2.5);
        });
    }
}


/***/ }),

/***/ "./src/scenes/game.js":
/*!****************************!*\
  !*** ./src/scenes/game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _level_start_scene_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level-start-scene.js */ "./src/scenes/level-start-scene.js");


var animationFrame;
var self;
class Game {
    constructor(width, height, puzzleData, gameSceneCallBack) {
        this.width = width;
        this.height = height;
        this.monsterPhaseNumber =
            localStorage.getItem(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.StoreMonsterPhaseNumber) || 1;
        this.scene = new _level_start_scene_js__WEBPACK_IMPORTED_MODULE_1__.LevelStartScene({
            game: this,
            levelData: puzzleData,
            levelStartCallBack: this.levelStartCallBack,
            monsterPhaseNumber: this.monsterPhaseNumber,
        });
        this.gameSceneCallBack = gameSceneCallBack;
        this.render();
        self = this;
        this.animation();
    }
    levelStartCallBack(button_name) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
        switch (button_name) {
            case "close_button": {
                self.gameSceneCallBack(button_name);
                break;
            }
            case "next_button": {
                self.gameSceneCallBack(button_name);
                break;
            }
            case "retry_button": {
                self.gameSceneCallBack(button_name);
                break;
            }
        }
    }
    update() {
        self.scene ? (self.scene.stones ? self.scene.stones.update() : null) : null;
        self.scene ? self.scene.update() : null;
    }
    render() {
        cancelAnimationFrame(animationFrame);
        this.scene.createBackgroud();
    }
    animation() {
        self.update();
        animationFrame = requestAnimationFrame(self.animation);
    }
}


/***/ }),

/***/ "./src/scenes/level-end-scene.js":
/*!***************************************!*\
  !*** ./src/scenes/level-end-scene.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelEndScene": () => (/* binding */ LevelEndScene)
/* harmony export */ });
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _components_buttons_close_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/buttons/close_button.js */ "./src/components/buttons/close_button.js");
/* harmony import */ var _components_buttons_next_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/buttons/next_button.js */ "./src/components/buttons/next_button.js");
/* harmony import */ var _components_buttons_retry_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/buttons/retry_button.js */ "./src/components/buttons/retry_button.js");
/* harmony import */ var _data_profile_data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/profile-data.js */ "./src/data/profile-data.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");






var audioUrl = {
    levelWin: "./assets/audios/LevelWinFanfare.mp3",
    levelLose: "./assets/audios/LevelLoseFanfare.mp3",
    intro: "./assets/audios/intro.wav",
};
class LevelEndScene {
    constructor(canvas, score, monster, levelEndCallBack, levelData, isGamePause, monsterPhaseNumber) {
        this.canvas = canvas;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_5__.CanvasStack("canvas");
        this.monster = monster;
        this.levelData = levelData;
        this.isGamePause = isGamePause;
        this.monsterPhaseNumber = monsterPhaseNumber || 1;
        this.starCount =
            score == 200
                ? 1
                : score == 300
                    ? 2
                    : score == 400
                        ? 2
                        : score == 500
                            ? 3
                            : 0;
        console.log(levelData.levelMeta.levelNumber);
        console.log(score);
        this.createCanvas();
        this.levelEndCallBack = levelEndCallBack;
        (0,_data_profile_data_js__WEBPACK_IMPORTED_MODULE_4__.setDataToStorage)(new _data_profile_data_js__WEBPACK_IMPORTED_MODULE_4__.ProfileData(levelData.levelMeta.levelType, levelData.levelMeta.levelNumber, score, this.starCount));
    }
    createCanvas() {
        if (this.starCount <= 1) {
            this.canvas.scene.audio.changeSourse(audioUrl.levelLose);
            this.monster.changeImage("./assets/images/sad1" + this.monsterPhaseNumber + ".png");
        }
        else {
            this.monster.changeImage("./assets/images/happy1" + this.monsterPhaseNumber + ".png");
            this.canvas.scene.audio.playLevelEndHappyAudio(audioUrl.levelWin);
        }
        document.addEventListener("visibilitychange", function () {
            if (document.visibilityState === "visible") {
                self.canvas.scene.audio.playSound("./assets/audios/intro.wav");
            }
            else {
                self.canvas.scene.audio.pauseSound();
            }
        }, false);
        this.monster.changeZindex(9);
        var self = this;
        this.id = this.canvasStack.createLayer(this.canvas.height, this.canvas.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.LevelEndLayer);
        this.context = document.getElementById(this.id).getContext("2d");
        document.getElementById(this.id).style.zIndex = "8";
        this.bottonLayer = this.canvasStack.createLayer(this.canvas.height, this.canvas.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.LevelEndButtonsLayer);
        this.bottonContext = document.getElementById(this.bottonLayer).getContext("2d");
        document.getElementById(this.bottonLayer).style.zIndex =
            "9";
        document.getElementById(this.id).style.backgroundColor =
            "#00407B";
        document.getElementById(this.id).style.backgroundImage =
            "url('./assets/images/WIN_screen_bg.png')";
        document.getElementById(this.id).style.backgroundSize =
            "contain";
        document.getElementById(this.id).style.backgroundPosition =
            "center";
        document.getElementById(this.id).style.backgroundAttachment = "fixed";
        document.getElementById(this.id).style.backgroundRepeat =
            "no-repeat";
        var star1 = new Image();
        star1.src = "./assets/images/pinStar1.png";
        var star2 = new Image();
        star2.src = "./assets/images/pinStar2.png";
        var star3 = new Image();
        star3.src = "./assets/images/pinStar3.png";
        self.drawStarts(self, star1, star2, star3);
        self.nextButton =
            self.starCount >= 2
                ? new _components_buttons_next_button_js__WEBPACK_IMPORTED_MODULE_2__["default"](self.context, self.canvas, self.canvas.width * 0.8 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.7)
                : null;
        self.retryButton = new _components_buttons_retry_button_js__WEBPACK_IMPORTED_MODULE_3__["default"](self.context, self.canvas, self.starCount >= 2
            ? self.canvas.width * 0.5 - (self.canvas.width * 0.19) / 2
            : self.canvas.width * 0.8 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.7);
        self.closeButton = new _components_buttons_close_button_js__WEBPACK_IMPORTED_MODULE_1__["default"](self.context, self.canvas, self.canvas.width * 0.2 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.7);
        document.getElementById(this.bottonLayer).addEventListener("click", function (event) {
            var rect = document.getElementById(self.bottonLayer).getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (self.nextButton && self.nextButton.onClick(x, y)) {
                self.canvas.scene.audio.pauseSound();
                self.levelEndCallBack("next_button");
            }
            if (self.retryButton.onClick(x, y)) {
                self.canvas.scene.audio.pauseSound();
                self.levelEndCallBack("retry_button");
            }
            if (self.closeButton.onClick(x, y)) {
                self.canvas.scene.audio.pauseSound();
                self.levelEndCallBack("close_button");
            }
        });
    }
    drawStarts(self, star1, star2, star3) {
        star1.onload = function (e) {
            if (self.starCount >= 2) {
                setTimeout(() => {
                    self.context.drawImage(star1, self.canvas.width * 0.2 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.2, self.canvas.width * 0.19, self.canvas.width * 0.19);
                }, 500);
            }
        };
        star2.onload = function (e) {
            if (self.starCount <= 3 && self.starCount > 0) {
                setTimeout(() => {
                    self.context.drawImage(star2, self.canvas.width * 0.5 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.15, self.canvas.width * 0.19, self.canvas.width * 0.19);
                }, 1000);
            }
        };
        star3.onload = function (e) {
            if (self.starCount >= 3) {
                setTimeout(() => {
                    self.context.drawImage(star3, self.canvas.width * 0.82 - (self.canvas.width * 0.19) / 2, self.canvas.height * 0.2, self.canvas.width * 0.19, self.canvas.width * 0.19);
                }, 1500);
            }
        };
    }
    deleteCanvas(self) {
        self.canvasStack.deleteLayer(this.id);
        self.canvasStack.deleteLayer(this.bottonLayer);
    }
}


/***/ }),

/***/ "./src/scenes/level-selection-scene.js":
/*!*********************************************!*\
  !*** ./src/scenes/level-selection-scene.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelSelectionScreen": () => (/* binding */ LevelSelectionScreen)
/* harmony export */ });
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _common_level_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/level-config.js */ "./src/common/level-config.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ "./src/scenes/game.js");
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _common_sound_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/sound.js */ "./src/common/sound.js");
/* harmony import */ var _data_profile_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/profile-data.js */ "./src/data/profile-data.js");






var mapIcon = new Image();
mapIcon.src = "./assets/images/mapIcon.png";
var mapLock = new Image();
mapLock.src = "./assets/images/mapLock.png";
var map = new Image();
map.src = "./assets/images/map.jpg";
var star = new Image();
star.src = "./assets/images/star.png";
var nextbtn = new Image();
nextbtn.src = "./assets/images/next_btn.png";
var backbtn = new Image();
backbtn.src = "./assets/images/back_btn.png";
var levelNumber;
var self;
var unlockLevelIndex = -1;
var previousPlayedLevel = parseInt(localStorage.getItem(_common_common_js__WEBPACK_IMPORTED_MODULE_3__.PreviousPlayedLevel)) | 0;
var level;
if (previousPlayedLevel != null) {
    level = 10 * Math.floor(previousPlayedLevel / 10);
}
class LevelSelectionScreen {
    constructor(canvas, data) {
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_0__.CanvasStack("canvas");
        self = this;
        this.data = data;
        this.levels = [];
        this.levelsSectionCount =
            self.data.levels.length / 10 > Math.floor(self.data.levels.length / 10)
                ? Math.floor(self.data.levels.length / 10) + 1
                : Math.floor(self.data.levels.length / 10);
        this.sound = new _common_sound_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.createCanvas();
        this.drawStars();
    }
    gameSceneCallBack(button_name) {
        switch (button_name) {
            case "next_button": {
                self.startGame((levelNumber += 1));
                break;
            }
            case "retry_button": {
                self.startGame(levelNumber);
                break;
            }
            case "close_button": {
                self.drawStars();
            }
        }
    }
    createCanvas() {
        document.addEventListener("visibilitychange", function () {
            self.sound.activeScreen();
        }, false);
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_3__.LevelSelectionLayer);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(map, 0, 0, this.canvas.width, this.canvas.height);
        this.canavsElement.style.zIndex = 2;
        this.starsId = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_3__.LevelSelectionLayer + 1);
        this.starsCanavsElement = document.getElementById(this.starsId);
        this.starsContext = this.canavsElement.getContext("2d");
        this.starsCanavsElement.style.zIndex = "3";
        this.levelButtonpos = [
            [
                [this.canvas.width / 10, this.canvas.height / 10],
                [this.canvas.width / 2.5, this.canvas.height / 10],
                [
                    this.canvas.width / 3 + this.canvas.width / 2.8,
                    this.canvas.height / 10,
                ],
                [this.canvas.width / 10, this.canvas.height / 3],
                [this.canvas.width / 2.5, this.canvas.height / 3],
                [
                    this.canvas.width / 3 + this.canvas.width / 2.8,
                    this.canvas.height / 3,
                ],
                [this.canvas.width / 10, this.canvas.height / 1.8],
                [this.canvas.width / 2.5, this.canvas.height / 1.8],
                [
                    this.canvas.width / 3 + this.canvas.width / 2.8,
                    this.canvas.height / 1.8,
                ],
                [this.canvas.width / 2.5, this.canvas.height / 1.3],
            ],
        ];
        document
            .getElementById(this.starsId)
            .addEventListener("touchstart", handleTouchStart, false);
        document
            .getElementById(this.starsId)
            .addEventListener("touchmove", handleTouchMove, false);
        var xDown = null;
        var yDown = null;
        function getTouches(evt) {
            return (evt.touches || // browser API
                evt.originalEvent.touches); // jQuery
        }
        function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];
            xDown = firstTouch.clientX;
            yDown = firstTouch.clientY;
        }
        function handleTouchMove(evt) {
            if (!xDown || !yDown) {
                return;
            }
            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;
            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                /*most significant*/
                if (xDiff > 0) {
                    if (level != self.levelsSectionCount * 10 - 10) {
                        self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
                        self.context.drawImage(map, 0, 0, self.canvas.width, self.canvas.height);
                        level = level + 10;
                        self.draw(level);
                        self.downButton(level);
                        self.drawStars();
                    }
                    /* right swipe */
                }
                else {
                    if (level != 0) {
                        level = level - 10;
                    }
                    self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
                    self.context.drawImage(map, 0, 0, self.canvas.width, self.canvas.height);
                    self.draw(level);
                    self.downButton(level);
                    self.drawStars();
                    /* left swipe */
                }
            }
            else {
                if (yDiff > 0) {
                    /* down swipe */
                }
                else {
                    /* up swipe */
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        }
        document.getElementById(this.starsId).addEventListener("mousedown", function (event) {
            event.preventDefault();
            var rect = document.getElementById(this.id).getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (x >= self.canvas.width * 0.7 &&
                x < self.canvas.width * 0.7 + self.canvas.height / 10 &&
                y > self.canvas.height / 1.3 &&
                y < self.canvas.height / 1.3 + self.canvas.height / 10) {
                if (level != self.levelsSectionCount * 10 - 10) {
                    self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
                    self.context.drawImage(map, 0, 0, self.canvas.width, self.canvas.height);
                    level = level + 10;
                    self.draw(level);
                    self.downButton(level);
                    self.drawStars();
                }
            }
            if (x >= self.canvas.width / 10 &&
                x < self.canvas.width / 10 + self.canvas.height / 10 &&
                y > self.canvas.height / 1.3 &&
                y < self.canvas.height / 1.3 + self.canvas.height / 10) {
                if (level != 0) {
                    level = level - 10;
                }
                self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
                self.context.drawImage(map, 0, 0, self.canvas.width, self.canvas.height);
                self.draw(level);
                self.downButton(level);
                self.drawStars();
            }
            for (let s of self.levels) {
                if (Math.sqrt((x - s.x - self.canvas.height / 20) *
                    (x - s.x - self.canvas.height / 20) +
                    (y - s.y - self.canvas.height / 20) *
                        (y - s.y - self.canvas.height / 20)) < 45) {
                    if (s.index + level - 1 <= unlockLevelIndex + 1) {
                        self.sound.changeSourse("./assets/audios/ButtonClick.wav");
                        self.sound.pauseSound();
                        levelNumber = s.index + level - 1;
                        self.startGame(levelNumber);
                    }
                }
            }
        }, false);
        this.createLevelButtons(this.levelButtonpos);
    }
    createLevelButtons(levelButtonpos) {
        var poss = levelButtonpos[0];
        var i = 0;
        for (let s = 0; s < 10; s++) {
            var ns = new _common_level_config_js__WEBPACK_IMPORTED_MODULE_1__.LevelConfig(poss[i][0], poss[i][1], i + 1);
            self.levels.push(ns);
            i += 1;
        }
        this.draw(level);
        this.downButton(level);
    }
    draw(level) {
        for (let s of self.levels) {
            this.drawlevel(s, self.canvas);
        }
    }
    downButton(level) {
        var imageSize = self.canvas.height / 10;
        if (level != self.levelsSectionCount * 10 - 10) {
            this.context.drawImage(nextbtn, this.canvas.width * 0.7, this.canvas.height / 1.3, imageSize, imageSize);
        }
        if (level != 0) {
            this.context.drawImage(backbtn, this.canvas.width / 10, this.canvas.height / 1.3, imageSize, imageSize);
        }
        // if (level != 0) {
        //   this.context.clearRect(300, 500, imageSize, imageSize);
        //   this.context.save();
        //   this.context.translate(imageSize, imageSize);
        //   this.context.rotate(90);
        //   this.context.drawImage(next, 300, 500, imageSize, imageSize);
        // }
    }
    drawlevel(s, canvas) {
        var imageSize = canvas.height / 5;
        var textFontSize = imageSize / 6;
        if (s.index + level <= self.data.levels.length) {
            this.context.drawImage(mapIcon, s.x, s.y, imageSize, imageSize);
            this.context.fillStyle = "white";
            this.context.font = textFontSize + "px Arial";
            this.context.textAlign = "center";
            this.context.fillText(s.index + level, s.x + imageSize / 3.5, s.y + imageSize / 3);
            this.context.font = textFontSize - imageSize / 30 + "px Arial";
            this.context.fillText(this.data.levels[s.index + level - 1].levelMeta.levelType, s.x + imageSize / 3.5, s.y + imageSize / 1.3);
        }
    }
    startGame(level_number) {
        new _game_js__WEBPACK_IMPORTED_MODULE_2__.Game(this.canvas.width, this.canvas.height, self.data.levels[level_number], self.gameSceneCallBack);
    }
    drawStars() {
        this.sound.changeSourse("./assets/audios/intro.wav");
        let gameLevelData = (0,_data_profile_data_js__WEBPACK_IMPORTED_MODULE_5__.getDatafromStorage)();
        let canvas = document.getElementById("canvas");
        var canavsElement = (document.getElementById("levelSelectionCanvas1"));
        var context = canavsElement.getContext("2d");
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (gameLevelData != null) {
            if (gameLevelData.length != undefined) {
                for (let game of gameLevelData) {
                    if (unlockLevelIndex < parseInt(game.levelNumber)) {
                        game.levelStar >= 2
                            ? (unlockLevelIndex = parseInt(game.levelNumber))
                            : null;
                    }
                }
            }
            for (let s of self.levels) {
                if (s.index + level <= self.data.levels.length) {
                    s.index + level - 1 > unlockLevelIndex + 1
                        ? context.drawImage(mapLock, s.x, s.y, this.canvas.height / 13, this.canvas.height / 13)
                        : null;
                    for (let i = 0; i < gameLevelData.length; i++) {
                        if (s.index - 1 + level == parseInt(gameLevelData[i].levelNumber)) {
                            this.drawStar(s, canvas, gameLevelData[i].levelStar, context);
                            break;
                        }
                    }
                }
            }
        }
    }
    drawStar(s, canvas, starCount, context) {
        var imageSize = canvas.height / 5;
        if (starCount >= 1) {
            context.drawImage(star, s.x, s.y - imageSize * 0.01, imageSize / 5, imageSize / 5);
        }
        if (starCount > 1) {
            context.drawImage(star, s.x + imageSize / 2.5, s.y - imageSize * 0.01, imageSize / 5, imageSize / 5);
        }
        if (starCount == 3) {
            context.drawImage(star, s.x + imageSize / 5, s.y - imageSize * 0.1, imageSize / 5, imageSize / 5);
        }
    }
}


/***/ }),

/***/ "./src/scenes/level-start-scene.js":
/*!*****************************************!*\
  !*** ./src/scenes/level-start-scene.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LevelStartScene": () => (/* binding */ LevelStartScene)
/* harmony export */ });
/* harmony import */ var _components_monster_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/monster.js */ "./src/components/monster.js");
/* harmony import */ var _components_timer_ticking_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/timer-ticking.js */ "./src/components/timer-ticking.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _components_stones_layer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/stones-layer.js */ "./src/components/stones-layer.js");
/* harmony import */ var _components_prompt_text_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/prompt-text.js */ "./src/components/prompt-text.js");
/* harmony import */ var _components_buttons_pause_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/buttons/pause_button.js */ "./src/components/buttons/pause_button.js");
/* harmony import */ var _components_level_indicators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/level-indicators.js */ "./src/components/level-indicators.js");
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _game_end_scene_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-end-scene.js */ "./src/scenes/game-end-scene.js");
/* harmony import */ var _common_sound_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/sound.js */ "./src/common/sound.js");
/* harmony import */ var _level_end_scene_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./level-end-scene.js */ "./src/scenes/level-end-scene.js");
/* harmony import */ var _data_profile_data_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/profile-data.js */ "./src/data/profile-data.js");
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../global-variables.js */ "./global-variables.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














var images = {
    bgImg: "./assets/images/bg_v01.jpg",
    hillImg: "./assets/images/hill_v01.png",
    timer_empty: "./assets/images/timer_empty.png",
    pillerImg: "./assets/images/Totem_v02_v01.png",
    grassImg: "./assets/images/FG_a_v01.png",
    rotating_clock: "./assets/images/timer.png",
    fenchImg: "./assets/images/fence_v01.png",
    promptImg: "./assets/images/promptTextBg.png",
    fantastic: "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_12__.lang + "/images/fantastic_01.png",
    great: "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_12__.lang + "/images/great_01.png",
    autumnBgImg: "./assets/images/Autumn_bg_v01.jpg",
    autumnHillImg: "./assets/images/Autumn_hill_v01.png",
    autumnSignImg: "./assets/images/Autumn_sign_v01.png",
    autumnGrassImg: "./assets/images/Autumn_FG_v01.png",
    autumnFenceImg: "./assets/images/Autumn_fence_v01.png",
    autumnPillerImg: "./assets/images/Autumn_sign_v01.png",
    winterBgImg: "./assets/images/Winter_bg_01.jpg",
    winterHillImg: "./assets/images/Winter_hill_v01.png",
    winterSignImg: "./assets/images/Winter_sign_v01.png",
    winterGrassImg: "./assets/images/Winter_FG_v01.png",
    winterFenceImg: "./assets/images/Winter_fence_v01.png",
    winterPillerImg: "./assets/images/Winter_sign_v01.png",
};
var audioUrl = {
    phraseAudios: [
        "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_12__.lang + "/audios/fantastic.WAV",
        // "./assets/audios/good job.WAV",
        "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_12__.lang + "/audios/great.wav",
    ],
    monsterSplit: "./assets/audios/Monster Spits wrong stones-01.mp3",
    monsterHappy: "./assets/audios/Cheering-02.mp3",
    monsterSad: "./assets/audios/Disapointed-05.mp3",
    buttonClick: "./assets/audios/ButtonClick.wav",
};
var self;
var word_dropped_stones = 0;
var current_puzzle_index = 0;
var score = 0;
var word_dropped_stones = 0;
var isGamePause = false;
var noMoreTarget = false;
var isLevelEnded = false;
class LevelStartScene {
    constructor({ game, levelData, levelStartCallBack, monsterPhaseNumber, }) {
        this.game = game;
        this.width = game.width;
        this.height = game.height;
        self = this;
        this.monster = new _components_monster_js__WEBPACK_IMPORTED_MODULE_0__.Monster(game);
        this.audio = new _common_sound_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_2__.CanvasStack("canvas");
        this.monsterPhaseNumber = monsterPhaseNumber || 1;
        this.levelData = levelData;
        this.levelStartCallBack = levelStartCallBack;
        this.timerTicking = new _components_timer_ticking_js__WEBPACK_IMPORTED_MODULE_1__.TimerTicking(game, this);
        this.promptText = new _components_prompt_text_js__WEBPACK_IMPORTED_MODULE_4__.PromptText(game, this, levelData.puzzles[current_puzzle_index], levelData);
        this.createCanvas();
        this.stones = new _components_stones_layer_js__WEBPACK_IMPORTED_MODULE_3__["default"](game, levelData.puzzles[current_puzzle_index], this.pauseButton, this.redrawOfStones, this);
        this.puzzleData = levelData.puzzles;
    }
    levelEndCallBack(button_name) {
        if (!isGamePause) {
            isGamePause = true;
            if (isLevelEnded) {
                isLevelEnded = false;
                isGamePause = false;
            }
        }
        else {
            if (current_puzzle_index == self.puzzleData.length) {
                if (noMoreTarget) {
                    self.levelEnded();
                    current_puzzle_index = 0;
                }
            }
            else {
                isGamePause = false;
                if (noMoreTarget && button_name != "close_button") {
                    setTimeout(() => {
                        self.stones.setNewPuzzle(self.puzzleData[current_puzzle_index]);
                        self.promptText.setCurrrentPuzzleData(self.puzzleData[current_puzzle_index]);
                        self.timerTicking.draw();
                        self.promptText.draw();
                    }, 1000);
                }
            }
        }
        self.audio.changeSourse(audioUrl.buttonClick);
        switch (button_name) {
            case "next_button": {
                self.exitAllScreens();
                self.levelStartCallBack(button_name);
                break;
            }
            case "retry_button": {
                self.exitAllScreens();
                self.levelStartCallBack(button_name);
                break;
            }
            case "close_button": {
                isGamePause = false;
                self.exitAllScreens();
                self.levelStartCallBack(button_name);
                break;
            }
        }
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    redrawOfStones(status, emptyTarget, picked_stone_lenghth) {
        noMoreTarget = emptyTarget;
        var fntsticOrGrtIndex = self.getRandomInt(0, 1);
        if (status) {
            self.monster.changeToEatAnimation();
            self.audio.changeSourse(audioUrl.monsterHappy);
            if (emptyTarget) {
                setTimeout(() => {
                    self.audio.changeSourse(audioUrl.phraseAudios[fntsticOrGrtIndex]);
                    self.promptText.showFantasticOrGreat(fntsticOrGrtIndex);
                }, 1000);
                self.promptText.draw((word_dropped_stones += picked_stone_lenghth));
                self.timerTicking.stopTimer();
                // self.promptText.draw((word_dropped_stones += 1));
                score += 100;
                word_dropped_stones = 0;
                current_puzzle_index += 1;
            }
            else {
                self.promptText.draw((word_dropped_stones += picked_stone_lenghth));
            }
        }
        else {
            self.timerTicking.stopTimer();
            self.monster.changeToSpitAnimation();
            self.audio.changeSourse(audioUrl.monsterSad);
            setTimeout(() => {
                self.audio.changeSourse(audioUrl.monsterSplit);
            }, 1000);
            current_puzzle_index += 1;
        }
        if (current_puzzle_index == self.puzzleData.length) {
            self.levelIndicators.setIndicators(current_puzzle_index);
            for (let i = 0; i <= 3; i++) {
                setTimeout(() => {
                    if (i == 3 && !isGamePause) {
                        self.levelEnded();
                    }
                }, i * 1166.66);
            }
        }
        else {
            if (emptyTarget) {
                self.levelIndicators.setIndicators(current_puzzle_index);
                for (let i = 0; i <= 3; i++) {
                    setTimeout(() => {
                        if (i == 3 && !isGamePause) {
                            self.stones.setNewPuzzle(self.puzzleData[current_puzzle_index]);
                            self.promptText.setCurrrentPuzzleData(self.puzzleData[current_puzzle_index]);
                            self.timerTicking.draw();
                            self.promptText.draw();
                        }
                    }, i * 1166.66);
                }
            }
        }
    }
    levelEnded() {
        console.log("Level");
        let totalStarsCount = 0;
        let monsterPhaseNumber = self.monsterPhaseNumber || 1;
        var gameLevelData = (0,_data_profile_data_js__WEBPACK_IMPORTED_MODULE_11__.getDatafromStorage)();
        if (gameLevelData != null) {
            for (let i = 0; i < gameLevelData.length; i++) {
                totalStarsCount = totalStarsCount + gameLevelData[i].levelStar;
            }
            monsterPhaseNumber = Math.floor(totalStarsCount / 12) + 1 || 1;
            console.log(totalStarsCount + "total star count");
            if (self.monsterPhaseNumber < monsterPhaseNumber) {
                if (monsterPhaseNumber <= 4) {
                    self.monsterPhaseNumber = monsterPhaseNumber;
                    console.log("setting data" + monsterPhaseNumber);
                    localStorage.setItem(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.StoreMonsterPhaseNumber, monsterPhaseNumber);
                    self.monster.changePhaseNumber(monsterPhaseNumber);
                    self.monster.changeImage("./assets/images/idle1" + self.monsterPhaseNumber + ".png");
                }
                else {
                    self.monsterPhaseNumber = 4;
                }
            }
            console.log(self.monsterPhaseNumber);
            console.log(monsterPhaseNumber);
        }
        self.levelStartCallBack();
        if (self.levelData.levelNumber == 149) {
            self.exitAllScreens();
            new _game_end_scene_js__WEBPACK_IMPORTED_MODULE_8__.GameEndScene(self.game);
        }
        else {
            new _level_end_scene_js__WEBPACK_IMPORTED_MODULE_10__.LevelEndScene(self.game, score, self.monster, self.levelEndCallBack, self.levelData, isGamePause, self.monsterPhaseNumber);
        }
        isLevelEnded = true;
    }
    createCanvas() {
        var monsterPhaseNumber = this.monsterPhaseNumber || 1;
        console.log(monsterPhaseNumber);
        this.monster.changeImage("./assets/images/idle1" + monsterPhaseNumber + ".png");
        window.addEventListener("resize", () => __awaiter(this, void 0, void 0, function* () {
            self.deleteObjects();
        }));
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_7__.LevelStartLayer);
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = 3;
        this.pauseButton = new _components_buttons_pause_button_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.context, this.canavsElement);
        this.levelIndicators = new _components_level_indicators_js__WEBPACK_IMPORTED_MODULE_6__.LevelIndicators(this.context, this.canavsElement, 0);
        var self = this;
        const selfElement = document.getElementById(self.id);
        this.canavsElement.addEventListener("click", function (event) {
            var rect = selfElement.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
        });
        var previousPlayedLevel = self.levelData.levelMeta.levelNumber;
        localStorage.setItem(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.PreviousPlayedLevel, previousPlayedLevel);
    }
    deleteCanvas() {
        this.canvasStack.deleteLayer(this.id);
    }
    exitAllScreens() {
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.LevelEndLayer);
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.LevelEndButtonsLayer);
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.LevelStartLayer);
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.StoneLayer);
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.TimetickerLayer);
        self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_7__.PromptTextLayer);
        // self.monster.changeImage("./assets/images/idle4.png");
        self.monster.changeImage("./assets/images/idle1" + self.monsterPhaseNumber + ".png");
        self.monster.deleteCanvas();
        self.deleteObjects();
        word_dropped_stones = 0;
    }
    deleteObjects() {
        delete self.monster;
        delete self.audio;
        delete self.levelIndicators;
        delete self.pauseButton;
        delete self.stones;
        delete self.timerTicking;
        delete self.canvasStack;
        delete self.monster;
        delete self.promptText;
        current_puzzle_index = 0;
        score = 0;
    }
    draw() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.drawImage(this.bgImg, 0, 0, this.width, this.height);
        this.context.drawImage(this.pillerImg, this.width * 0.6, this.height / 6, this.width, this.height / 2);
        this.context.drawImage(this.fenchImg, -this.width * 0.4, this.height / 3, this.width, this.height / 3);
        this.context.drawImage(this.hillImg, -this.width * 0.25, this.height / 2, this.width * 1.5, this.height / 2);
        this.context.drawImage(this.grassImg, -this.width * 0.25, this.height / 2 + (this.height / 2) * 0.1, this.width * 1.5, this.height / 2);
        this.context.drawImage(this.timer_empty, 0, this.height * 0.1, this.width, this.height * 0.05);
        this.context.drawImage(this.rotating_clock, 5, this.height * 0.09, this.width * 0.12, this.height * 0.06);
        this.timerTicking.createBackgroud();
        this.stones.draw();
        this.pauseButton.draw();
        this.levelIndicators.draw();
        this.promptText.createBackground();
    }
    update() {
        self.timerTicking ? self.timerTicking.update() : null;
    }
    changePuzzle() {
        if (self.timerTicking.isTimerEnded) {
            self.stones.isTimerEnded();
            word_dropped_stones = 0;
            current_puzzle_index += 1;
            self.stones.canvas.scene.levelIndicators.setIndicators(current_puzzle_index);
            if (current_puzzle_index == self.puzzleData.length) {
                isLevelEnded = true;
                self.levelStartCallBack();
                delete self.timerTicking;
                new _level_end_scene_js__WEBPACK_IMPORTED_MODULE_10__.LevelEndScene(self.game, score, self.monster, self.levelEndCallBack, self.levelData, isGamePause, this.monsterPhaseNumber);
            }
            else {
                // self.promptText.setCurrrentPromptText(
                //   self.puzzleData[current_puzzle_index].prompt.promptText
                // );
                self.promptText.setCurrrentPuzzleData(self.puzzleData[current_puzzle_index]);
                self.timerTicking.draw();
                self.promptText.draw();
                self.stones.setNewPuzzle(self.puzzleData[current_puzzle_index]);
            }
            self.timerTicking ? (self.timerTicking.isTimerEnded = false) : null;
        }
    }
    createBackgroud() {
        var self = this;
        const availableBackgroundTypes = ["Summer", "Autumn", "Winter"];
        var backgroundType = Math.floor(self.levelData.levelNumber / 10) %
            availableBackgroundTypes.length;
        if (self.levelData.levelNumber >= 30) {
            backgroundType = backgroundType % 3;
        }
        (0,_common_common_js__WEBPACK_IMPORTED_MODULE_7__.loadingScreen)(true);
        var context = this.context;
        var width = this.width;
        var height = this.height;
        (0,_common_common_js__WEBPACK_IMPORTED_MODULE_7__.loadImages)(images, function (image) {
            switch (availableBackgroundTypes[backgroundType]) {
                case "Winter":
                    {
                        context.drawImage(image.winterBgImg, 0, 0, width, height);
                        context.drawImage(image.winterPillerImg, width * 0.38, height / 6, width / 1.2, height / 2);
                        context.drawImage(image.winterFenceImg, -width * 0.4, height / 4, width, height / 2);
                        context.drawImage(image.winterHillImg, -width * 0.25, height / 2, width * 1.5, height / 2);
                        context.drawImage(image.winterGrassImg, -width * 0.25, height / 2 + (height / 2) * 0.1, width * 1.5, height / 2);
                    }
                    break;
                case "Autumn":
                    {
                        context.drawImage(image.autumnBgImg, 0, 0, width, height);
                        context.drawImage(image.autumnPillerImg, width * 0.38, height / 6, width / 1.2, height / 2);
                        context.drawImage(image.autumnFenceImg, -width * 0.4, height / 4, width, height / 2);
                        context.drawImage(image.autumnHillImg, -width * 0.25, height / 2, width * 1.5, height / 2);
                        context.drawImage(image.autumnGrassImg, -width * 0.25, height / 2 + (height / 2) * 0.1, width * 1.5, height / 2);
                    }
                    break;
                default:
                    {
                        context.drawImage(image.bgImg, 0, 0, width, height);
                        context.drawImage(image.pillerImg, width * 0.6, height / 6, width, height / 2);
                        context.drawImage(image.fenchImg, -width * 0.4, height / 3, width, height / 3);
                        context.drawImage(image.hillImg, -width * 0.25, height / 2, width * 1.5, height / 2);
                        context.drawImage(image.grassImg, -width * 0.25, height / 2 + (height / 2) * 0.1, width * 1.5, height / 2);
                    }
                    break;
            }
            context.drawImage(image.timer_empty, 0, height * 0.1, width, height * 0.05);
            context.drawImage(image.rotating_clock, 5, height * 0.09, width * 0.12, height * 0.06);
            self.timerTicking.createBackgroud();
            self.stones.draw();
            self.pauseButton.draw();
            self.levelIndicators.draw();
            self.promptText.createBackground();
            (0,_common_common_js__WEBPACK_IMPORTED_MODULE_7__.loadingScreen)(false);
        });
    }
}


/***/ }),

/***/ "./src/scenes/start-scene.js":
/*!***********************************!*\
  !*** ./src/scenes/start-scene.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartScene": () => (/* binding */ StartScene)
/* harmony export */ });
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./src/common/common.js");
/* harmony import */ var _common_sound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/sound.js */ "./src/common/sound.js");
/* harmony import */ var _components_buttons_install_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/buttons/install_button.js */ "./src/components/buttons/install_button.js");
/* harmony import */ var _components_buttons_play_butoon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/buttons/play_butoon.js */ "./src/components/buttons/play_butoon.js");
/* harmony import */ var _components_monster_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/monster.js */ "./src/components/monster.js");
/* harmony import */ var _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _level_selection_scene_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./level-selection-scene.js */ "./src/scenes/level-selection-scene.js");
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../global-variables.js */ "./global-variables.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








var bgImg = new Image();
bgImg.src = "./assets/images/bg_v01.jpg";
var hillImg = new Image();
hillImg.src = "./assets/images/hill_v01.png";
var pillerImg = new Image();
pillerImg.src = "./assets/images/Totem_v02_v01.png";
var grassImg = new Image();
grassImg.src = "./assets/images/FG_a_v01.png";
var fenchImg = new Image();
fenchImg.src = "./assets/images/fence_v01.png";
var title = new Image();
title.src = "./lang/" + _global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang + "/images/title.png";
var profileMonster = new Image();
profileMonster.src = "./assets/images/idle4.png";
var self;
let pwa_install_status;
const aboutCompanyElement = (document.getElementById("about-company"));
window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    pwa_install_status = e;
    localStorage.setItem(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.PWAInstallStatus, "false");
});
class StartScene {
    constructor(canvas, data, firebase_analytics) {
        self = this;
        this.canvas = canvas;
        this.data = data;
        this.width = canvas.width;
        this.height = canvas.height;
        this.canvasStack = new _utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_5__.CanvasStack("canvas");
        this.monster = new _components_monster_js__WEBPACK_IMPORTED_MODULE_4__.Monster(this.canvas);
        this.pwa_status = localStorage.getItem(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.PWAInstallStatus);
        this.createCanvas();
        this.createPlayButton();
        this.firebase_analytics = firebase_analytics;
    }
    createCanvas() {
        this.id = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.StartSceneLayer);
        aboutCompanyElement.style.display = "block";
        aboutCompanyElement.innerHTML = globalThis.aboutCompany;
        this.canavsElement = document.getElementById(this.id);
        this.context = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = 2;
        this.canavsElement.style.bottom = 0;
        var id = this.id;
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.drawImage(bgImg, 0, 0, this.width, this.height);
        this.context.drawImage(pillerImg, this.width * 0.6, this.height / 6, this.width, this.height / 2);
        this.context.drawImage(fenchImg, -this.width * 0.4, this.height / 3, this.width, this.height / 3);
        this.context.drawImage(hillImg, -this.width * 0.25, this.height / 2, this.width * 1.5, this.height / 2);
        this.context.drawImage(grassImg, -this.width * 0.25, this.height / 2 + (this.height / 2) * 0.1, this.width * 1.5, this.height / 2);
        this.context.drawImage(title, this.width * 0, this.height / 50, this.width, this.height / 6);
        document.getElementById("loading-screen").style.display = "none";
    }
    createPlayButton() {
        const playButtonLayerElement = (document.getElementById(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.PlayButtonLayer));
        var self = this;
        var data = this.data;
        var playButtonId = this.canvasStack.createLayer(this.height, this.width, _common_common_js__WEBPACK_IMPORTED_MODULE_0__.PlayButtonLayer);
        this.canavsElement = document.getElementById(playButtonId);
        this.buttonContext = this.canavsElement.getContext("2d");
        this.canavsElement.style.zIndex = 7;
        if (true) {
            self.playButton = new _components_buttons_play_butoon_js__WEBPACK_IMPORTED_MODULE_3__["default"](self.buttonContext, self.canvas, self.canvas.width * 0.35, self.canvas.height / 7);
        }
        else {}
        document.getElementById(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.PlayButtonLayer).addEventListener("click", function (event) {
            return __awaiter(this, void 0, void 0, function* () {
                const selfElement = document.getElementById(self.id);
                event.preventDefault();
                var rect = selfElement.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                if (self.playButton.onClick(x, y)) {
                    self.firebase_analytics
                        ? self.firebase_analytics.logEvent(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.FirebaseUserClicked, "click")
                        : null;
                    fbq("trackCustom", _common_common_js__WEBPACK_IMPORTED_MODULE_0__.FirebaseUserClicked, {
                        event: "click",
                    });
                    aboutCompanyElement.style.display = "none";
                    new _common_sound_js__WEBPACK_IMPORTED_MODULE_1__["default"]().changeSourse("./assets/audios/ButtonClick.wav");
                    self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
                    new _level_selection_scene_js__WEBPACK_IMPORTED_MODULE_6__.LevelSelectionScreen(self.canvas, data);
                    self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.PlayButtonLayer);
                    self.monster.deleteCanvas();
                    delete self.monster;
                    self.canvasStack.deleteLayer(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.StartSceneLayer);
                    // if (self.pwa_status == "false" || !self.pwa_status) {
                    //   pwa_install_status.prompt();
                    //   const { outcome } = await pwa_install_status.userChoice;
                    //   if (outcome === "accepted") {
                    //     pwa_install_status = null;
                    //     localStorage.setItem(PWAInstallStatus, "true");
                    //     fbq("trackCustom", FirebaseUserInstall, {
                    //       event: "install_count",
                    //     });
                    //     self.firebase_analytics
                    //       ? self.firebase_analytics.logEvent(
                    //           FirebaseUserInstall,
                    //           "Install"
                    //         )
                    //       : null;
                    //     window.location.reload();
                    //   } else {
                    //     fbq("trackCustom", UserCancelled, {
                    //       event: "cancel_count",
                    //     });
                    //     self.firebase_analytics
                    //       ? self.firebase_analytics.logEvent(UserCancelled, "Cancelled")
                    //       : null;
                    //   }
                    // } else {
                    //   if (
                    //     !window.matchMedia("(display-mode: standalone)").matches &&
                    //     self.pwa_status == "true"
                    //   ) {
                    //     alert("PWA is installed on your device \nPlease play from there");
                    //   } else {
                    //     aboutCompanyElement.style.display = "none";
                    //     new Sound().changeSourse("./assets/audios/ButtonClick.wav");
                    //     self.context.clearRect(
                    //       0,
                    //       0,
                    //       self.canvas.width,
                    //       self.canvas.height
                    //     );
                    //     new LevelSelectionScreen(self.canvas, data);
                    //     self.canvasStack.deleteLayer(PlayButtonLayer);
                    //     self.monster.deleteCanvas();
                    //     delete self.monster;
                    //     self.canvasStack.deleteLayer(StartSceneLayer);
                    //   }
                    // }
                }
            });
        }, false);
    }
}


/***/ }),

/***/ "./src/utility/canvas-stack.js":
/*!*************************************!*\
  !*** ./src/utility/canvas-stack.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanvasStack": () => (/* binding */ CanvasStack)
/* harmony export */ });
var CanvasStack;
(function () {
    "use strict";
    class Layer {
        constructor({ canvasID, canvasElement, }) {
            this.id = canvasID;
            this.cElem = canvasElement;
            this.dragObjects = [];
        }
    }
    CanvasStack = class {
        constructor(cvsID, stackLimit) {
            const savThis = this;
            this.cId = cvsID;
            this.stackLimit = stackLimit || 12;
            this.bkgCanvas = document.getElementById(cvsID);
            this.rawWidth = this.bkgCanvas.offsetWidth;
            this.rawHeight = this.bkgCanvas.offsetHeight;
            this.bkgCanvas.resizeFns = [];
            if (!this.bkgCanvas.hasOwnProperty("layers")) {
                this.bkgCanvas.layers = [];
                let bkgL = new Layer({
                    canvasID: this.cId,
                    canvasElement: this.bkgCanvas,
                }); // bkgCanvas is always layer[0]
                this.bkgCanvas.layers[0] = bkgL;
            }
            if (!this.bkgCanvas.hasOwnProperty("unique")) {
                this.bkgCanvas.unique = 0;
            }
        }
        createLayer(height, width, layerId) {
            if (!this.isLayerExist(layerId)) {
                const w = width + "px", h = height + "px", nLyrs = this.bkgCanvas.layers.length; // bkg is layer 0 so at least 1
                if (!(this.bkgCanvas && this.bkgCanvas.layers)) {
                    return;
                }
                if (this.bkgCanvas.layers.length >= this.stackLimit) {
                    console.error("CanvasStack: too many layers");
                    return;
                }
                this.bkgCanvas.unique += 1; // a private static variable
                // const uniqueTag = this.bkgCanvas.unique.toString();
                // const ovlId = this.cId + "_ovl_" + uniqueTag;
                const ovlId = layerId;
                const ovlHTML = "<canvas id='" +
                    ovlId +
                    "' style='position:absolute' width='" +
                    w +
                    "' height='" +
                    h +
                    "'></canvas>";
                const topCvs = this.bkgCanvas.layers[nLyrs - 1].cElem;
                topCvs.insertAdjacentHTML("afterend", ovlHTML);
                const newCvs = document.getElementById(ovlId);
                newCvs.style.backgroundColor;
                newCvs.style.left = "50%";
                newCvs.style.transform = "translate(-50%, 0%)";
                newCvs.style.height = h;
                newCvs.style.width = w;
                let newL = new Layer({ canvasID: ovlId, canvasElement: newCvs });
                // save the ID in an array to facilitate removal
                this.bkgCanvas.layers.push(newL);
                return ovlId; // return the new canvas id
            }
        }
        deleteLayer(ovlyId) {
            // check background canvas is still there
            if (!(this.bkgCanvas && this.bkgCanvas.layers)) {
                return;
            }
            for (let i = 1; i < this.bkgCanvas.layers.length; i++) {
                if (this.bkgCanvas.layers[i].id === ovlyId) {
                    let ovlNode = this.bkgCanvas.layers[i].cElem;
                    if (ovlNode) {
                        ovlNode.parentNode.removeChild(ovlNode);
                    }
                    // now delete layers array element
                    this.bkgCanvas.layers.splice(i, 1); // delete the Layer object
                }
            }
        }
        deleteAllLayers() {
            if (!(this.bkgCanvas && this.bkgCanvas.layers)) {
                return;
            }
            for (let i = this.bkgCanvas.layers.length - 1; i > 0; i--) {
                let ovlNode = this.bkgCanvas.layers[i].cElem;
                if (ovlNode) {
                    let orphan = ovlNode.parentNode.removeChild(ovlNode);
                    orphan = null;
                }
                // now delete layers array element
                this.bkgCanvas.layers.splice(i, 1);
            }
            // clear any resize callbacks, the layers are gone
            this.bkgCanvas.resizeFns.length = 0; // remove any added handlers, leave the basic
        }
        isLayerExist(layerID) {
            for (let i = 1; i < this.bkgCanvas.layers.length; i++) {
                if (this.bkgCanvas.layers[i].id === layerID) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    };
})();


/***/ }),

/***/ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-window/build/workbox-window.prod.es5.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Workbox": () => (/* binding */ c),
/* harmony export */   "messageSW": () => (/* binding */ n)
/* harmony export */ });
try{self["workbox:window:4.3.1"]&&_()}catch(n){}var n=function(n,t){return new Promise(function(i){var e=new MessageChannel;e.port1.onmessage=function(n){return i(n.data)},n.postMessage(t,[e.port2])})};function t(n,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function i(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}try{self["workbox:core:4.3.1"]&&_()}catch(n){}var e=function(){var n=this;this.promise=new Promise(function(t,i){n.resolve=t,n.reject=i})},r=function(n,t){return new URL(n,location).href===new URL(t,location).href},o=function(n,t){Object.assign(this,t,{type:n})};function u(n){return function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];try{return Promise.resolve(n.apply(this,t))}catch(n){return Promise.reject(n)}}}function a(n,t,i){return i?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function s(){}var c=function(c){var f,h;function v(n,t){var r;return void 0===t&&(t={}),(r=c.call(this)||this).t=n,r.i=t,r.o=0,r.u=new e,r.s=new e,r.h=new e,r.v=r.v.bind(i(i(r))),r.l=r.l.bind(i(i(r))),r.g=r.g.bind(i(i(r))),r.m=r.m.bind(i(i(r))),r}h=c,(f=v).prototype=Object.create(h.prototype),f.prototype.constructor=f,f.__proto__=h;var l,w,g,d=v.prototype;return d.register=u(function(n){var t,i,e=this,u=(void 0===n?{}:n).immediate,c=void 0!==u&&u;return t=function(){return e.p=Boolean(navigator.serviceWorker.controller),e.P=e.R(),a(e.k(),function(n){e.B=n,e.P&&(e.O=e.P,e.s.resolve(e.P),e.h.resolve(e.P),e.j(e.P),e.P.addEventListener("statechange",e.l,{once:!0}));var t=e.B.waiting;return t&&r(t.scriptURL,e.t)&&(e.O=t,Promise.resolve().then(function(){e.dispatchEvent(new o("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})),e.O&&e.u.resolve(e.O),e.B.addEventListener("updatefound",e.g),navigator.serviceWorker.addEventListener("controllerchange",e.m,{once:!0}),"BroadcastChannel"in self&&(e.C=new BroadcastChannel("workbox"),e.C.addEventListener("message",e.v)),navigator.serviceWorker.addEventListener("message",e.v),e.B})},(i=function(){if(!c&&"complete"!==document.readyState)return function(n,t){if(!t)return n&&n.then?n.then(s):Promise.resolve()}(new Promise(function(n){return addEventListener("load",n)}))}())&&i.then?i.then(t):t(i)}),d.getSW=u(function(){return this.O||this.u.promise}),d.messageSW=u(function(t){return a(this.getSW(),function(i){return n(i,t)})}),d.R=function(){var n=navigator.serviceWorker.controller;if(n&&r(n.scriptURL,this.t))return n},d.k=u(function(){var n=this;return function(n,t){try{var i=n()}catch(n){return t(n)}return i&&i.then?i.then(void 0,t):i}(function(){return a(navigator.serviceWorker.register(n.t,n.i),function(t){return n.L=performance.now(),t})},function(n){throw n})}),d.j=function(t){n(t,{type:"WINDOW_READY",meta:"workbox-window"})},d.g=function(){var n=this.B.installing;this.o>0||!r(n.scriptURL,this.t)||performance.now()>this.L+6e4?(this.W=n,this.B.removeEventListener("updatefound",this.g)):(this.O=n,this.u.resolve(n)),++this.o,n.addEventListener("statechange",this.l)},d.l=function(n){var t=this,i=n.target,e=i.state,r=i===this.W,u=r?"external":"",a={sw:i,originalEvent:n};!r&&this.p&&(a.isUpdate=!0),this.dispatchEvent(new o(u+e,a)),"installed"===e?this._=setTimeout(function(){"installed"===e&&t.B.waiting===i&&t.dispatchEvent(new o(u+"waiting",a))},200):"activating"===e&&(clearTimeout(this._),r||this.s.resolve(i))},d.m=function(n){var t=this.O;t===navigator.serviceWorker.controller&&(this.dispatchEvent(new o("controlling",{sw:t,originalEvent:n})),this.h.resolve(t))},d.v=function(n){var t=n.data;this.dispatchEvent(new o("message",{data:t,originalEvent:n}))},l=v,(w=[{key:"active",get:function(){return this.s.promise}},{key:"controlling",get:function(){return this.h.promise}}])&&t(l.prototype,w),g&&t(l,g),v}(function(){function n(){this.D={}}var t=n.prototype;return t.addEventListener=function(n,t){this.T(n).add(t)},t.removeEventListener=function(n,t){this.T(n).delete(t)},t.dispatchEvent=function(n){n.target=this,this.T(n.type).forEach(function(t){return t(n)})},t.T=function(n){return this.D[n]=this.D[n]||new Set},n}());
//# sourceMappingURL=workbox-window.prod.es5.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./feedTheMonster.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_data_api_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/data/api-data.js */ "./src/data/api-data.js");
/* harmony import */ var _src_data_data_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/data/data-modal.js */ "./src/data/data-modal.js");
/* harmony import */ var _src_scenes_start_scene_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/scenes/start-scene.js */ "./src/scenes/start-scene.js");
/* harmony import */ var _src_utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/utility/canvas-stack.js */ "./src/utility/canvas-stack.js");
/* harmony import */ var _src_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/firebase/firebase_config.js */ "./src/firebase/firebase_config.js");
/* harmony import */ var _src_common_common_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/common/common.js */ "./src/common/common.js");
/* harmony import */ var workbox_window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-window */ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs");
/* harmony import */ var _global_variables_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global-variables.js */ "./global-variables.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const channel = new BroadcastChannel("my-channel");
let cached_languages = localStorage.getItem(_src_common_common_js__WEBPACK_IMPORTED_MODULE_5__.CachedLanguages)
    ? new Map(JSON.parse(localStorage.getItem(_src_common_common_js__WEBPACK_IMPORTED_MODULE_5__.CachedLanguages)))
    : new Map();
window.addEventListener("load", function () {
    return __awaiter(this, void 0, void 0, function* () {
        if ("serviceWorker" in navigator) {
            let wb = new workbox_window__WEBPACK_IMPORTED_MODULE_6__.Workbox("./sw.js", {});
            wb.register().then((registration) => {
                registration.installing.postMessage({
                    type: "Registration",
                    value: _global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang,
                });
            });
            if (!cached_languages.has(_global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang)) {
                channel.postMessage({ command: "Cache", data: _global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang });
            }
            navigator.serviceWorker.addEventListener("message", function (event) {
                if (event.data.msg == "Loading") {
                    document.getElementById("loading_number").innerHTML =
                        " " + " downloading... " + event.data.data + "%";
                    if (event.data.data == 100) {
                        cached_languages.set(_global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang, "true");
                        localStorage.setItem(_src_common_common_js__WEBPACK_IMPORTED_MODULE_5__.CachedLanguages, JSON.stringify(Array.from(cached_languages.entries())));
                        window.location.reload();
                    }
                }
                if (event.data.msg == "Update Found") {
                    let text = "Update Found\nPress ok to update.";
                    if (confirm(text) == true) {
                        localStorage.removeItem(_src_common_common_js__WEBPACK_IMPORTED_MODULE_5__.CachedLanguages);
                        window.location.reload();
                    }
                    else {
                        text = "You canceled!";
                    }
                }
            });
        }
        if (navigator.onLine) {
            this.app = firebase.initializeApp(_src_firebase_firebase_config_js__WEBPACK_IMPORTED_MODULE_4__.firebaseConfig);
            this.analytics = firebase.analytics(this.app);
        }
        const canvas = document.getElementById("canvas");
        canvas.height = window.innerHeight;
        canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;
        let data = yield (0,_src_data_api_data_js__WEBPACK_IMPORTED_MODULE_0__.getData)();
        let d = new _src_data_data_modal_js__WEBPACK_IMPORTED_MODULE_1__.DataModal(data.OtherAudios, data.Levels, data.FeedbackTexts, data.RightToLeft, data.FeedbackAudios);
        if (window.Android) {
            window.Android.receiveData(cached_languages.has(_global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang) ? cached_languages.get(_global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang) : null);
        }
        globalThis.aboutCompany = data.aboutCompany;
        globalThis.descriptionText = data.descriptionText;
        window.addEventListener("resize", () => __awaiter(this, void 0, void 0, function* () {
            if (cached_languages.has(_global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang)) {
                canvas.height = window.innerHeight;
                canvas.width = window.screen.width > 420 ? 420 : window.innerWidth;
                delete this.monster;
                new _src_utility_canvas_stack_js__WEBPACK_IMPORTED_MODULE_3__.CanvasStack("canvas").deleteAllLayers();
                delete this.startScene;
                this.startScene = new _src_scenes_start_scene_js__WEBPACK_IMPORTED_MODULE_2__.StartScene(canvas, d, this.analytics);
            }
        }));
        if (cached_languages.has(_global_variables_js__WEBPACK_IMPORTED_MODULE_7__.lang)) {
            this.startScene = new _src_scenes_start_scene_js__WEBPACK_IMPORTED_MODULE_2__.StartScene(canvas, d, this.analytics);
        }
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZFRoZU1vbnN0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPOzs7Ozs7Ozs7OztBQ0RQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsY0FBYztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsTUFBTTtBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBLGtEQUFrRDtBQUNsRCxpREFBaUQ7QUFDakQsaURBQWlEO0FBQ2pELGtEQUFrRDtBQUNsRCxnREFBZ0Q7QUFDaEQsa0RBQWtEO0FBQ2xELG1EQUFtRCx1Q0FBdUMsdUNBQXVDO0FBQ2pJLG1EQUFtRCx1Q0FBdUMsdUNBQXVDO0FBQ2pJLG1EQUFtRCx1Q0FBdUMsdUNBQXVDO0FBQ2pJLG9FQUFvRTtBQUNwRSxvRUFBb0U7QUFDcEUsbURBQW1EO0FBQ25ELHFEQUFxRCx3Q0FBd0M7QUFDN0Y7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLGNBQWM7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBLHdCQUF3QixpQ0FBaUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLFlBQVk7QUFDNUMsa0NBQWtDLGFBQWE7QUFDL0Msa0NBQWtDLGFBQWE7QUFDL0MsNENBQTRDLGtCQUFrQjtBQUM5RCw0Q0FBNEMsa0JBQWtCO0FBQzlELG9DQUFvQyxjQUFjO0FBQ2xELGtDQUFrQyxhQUFhO0FBQy9DLGtDQUFrQyxhQUFhO0FBQy9DLGtDQUFrQyxhQUFhO0FBQy9DLHNDQUFzQyxlQUFlO0FBQ3JELGtDQUFrQyxhQUFhO0FBQy9DLGtDQUFrQyxhQUFhO0FBQy9DLHNDQUFzQyxlQUFlO0FBQ3JEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLEtBQUs7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0IsZ0JBQWdCLFNBQVM7QUFDekIsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixhQUFhO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixjQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixhQUFhO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFD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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixHQUFHO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQixjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQixjQUFjLFFBQVE7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QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsY0FBYztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLGVBQWU7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLGVBQWU7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxPQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJCQUEyQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7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aUVBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLHlEQUFVO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhEQUFPO0FBQ2hDLG9CQUFvQiw4REFBUztBQUM3QjtBQUNBLDREQUE0RCxzREFBSSx5QkFBeUIsc0RBQUk7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0RBQUk7QUFDekM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFFQUFXO0FBQy9CO0FBQ0Esc0NBQXNDLGtFQUFVO0FBQ2hEO0FBQ0EsU0FBUztBQUNULGlDQUFpQyxzREFBSTtBQUNyQyxrQ0FBa0Msa0VBQVU7QUFDNUM7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9nbG9iYWwtdmFyaWFibGVzLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9ub2RlX21vZHVsZXMvaG93bGVyL2Rpc3QvaG93bGVyLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tbW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbW1vbi9sZXZlbC1jb25maWcuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21tb24vc291bmQuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21tb24vc3RvbmVzLWNvbmZpZy5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9jYW5jZWxfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2Nsb3NlX2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9pbnN0YWxsX2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9uZXh0X2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9wYXVzZV9idXR0b24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvcGxheV9idXRvb24uanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvcmV0cnlfYnV0dG9uLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9sZXZlbC1pbmRpY2F0b3JzLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9tb25zdGVyLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvY29tcG9uZW50cy9wYXVzZS1wb3B1cC5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvcHJvbXB0LXRleHQuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9jb21wb25lbnRzL3N0b25lcy1sYXllci5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2NvbXBvbmVudHMvdGltZXItdGlja2luZy5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2RhdGEvYXBpLWRhdGEuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9kYXRhL2RhdGEtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9kYXRhL3Byb2ZpbGUtZGF0YS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL2ZpcmViYXNlL2ZpcmViYXNlX2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3NjZW5lcy9nYW1lLWVuZC1zY2VuZS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3NjZW5lcy9nYW1lLmpzIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvLi9zcmMvc2NlbmVzL2xldmVsLWVuZC1zY2VuZS5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vc3JjL3NjZW5lcy9sZXZlbC1zZWxlY3Rpb24tc2NlbmUuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9zY2VuZXMvbGV2ZWwtc3RhcnQtc2NlbmUuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy9zY2VuZXMvc3RhcnQtc2NlbmUuanMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL3NyYy91dGlsaXR5L2NhbnZhcy1zdGFjay5qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtd2luZG93L2J1aWxkL3dvcmtib3gtd2luZG93LnByb2QuZXM1Lm1qcyIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ZlZWR0aGVtb25zdGVyanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mZWVkdGhlbW9uc3RlcmpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmVlZHRoZW1vbnN0ZXJqcy8uL2ZlZWRUaGVNb25zdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5leHBvcnQgdmFyIGxhbmcgPSB1cmxQYXJhbXMuZ2V0KFwiZnRtX2xhbmd1YWdlXCIpO1xuIiwiLyohXG4gKiAgaG93bGVyLmpzIHYyLjIuM1xuICogIGhvd2xlcmpzLmNvbVxuICpcbiAqICAoYykgMjAxMy0yMDIwLCBKYW1lcyBTaW1wc29uIG9mIEdvbGRGaXJlIFN0dWRpb3NcbiAqICBnb2xkZmlyZXN0dWRpb3MuY29tXG4gKlxuICogIE1JVCBMaWNlbnNlXG4gKi9cblxuKGZ1bmN0aW9uKCkge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICAvKiogR2xvYmFsIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgZ2xvYmFsIGNvbnRyb2xsZXIuIEFsbCBjb250YWluZWQgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcHBseVxuICAgKiB0byBhbGwgc291bmRzIHRoYXQgYXJlIGN1cnJlbnRseSBwbGF5aW5nIG9yIHdpbGwgYmUgaW4gdGhlIGZ1dHVyZS5cbiAgICovXG4gIHZhciBIb3dsZXJHbG9iYWwgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfTtcbiAgSG93bGVyR2xvYmFsLnByb3RvdHlwZSA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoZSBnbG9iYWwgSG93bGVyIG9iamVjdC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuXG4gICAgICAvLyBDcmVhdGUgYSBnbG9iYWwgSUQgY291bnRlci5cbiAgICAgIHNlbGYuX2NvdW50ZXIgPSAxMDAwO1xuXG4gICAgICAvLyBQb29sIG9mIHVubG9ja2VkIEhUTUw1IEF1ZGlvIG9iamVjdHMuXG4gICAgICBzZWxmLl9odG1sNUF1ZGlvUG9vbCA9IFtdO1xuICAgICAgc2VsZi5odG1sNVBvb2xTaXplID0gMTA7XG5cbiAgICAgIC8vIEludGVybmFsIHByb3BlcnRpZXMuXG4gICAgICBzZWxmLl9jb2RlY3MgPSB7fTtcbiAgICAgIHNlbGYuX2hvd2xzID0gW107XG4gICAgICBzZWxmLl9tdXRlZCA9IGZhbHNlO1xuICAgICAgc2VsZi5fdm9sdW1lID0gMTtcbiAgICAgIHNlbGYuX2NhblBsYXlFdmVudCA9ICdjYW5wbGF5dGhyb3VnaCc7XG4gICAgICBzZWxmLl9uYXZpZ2F0b3IgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvcikgPyB3aW5kb3cubmF2aWdhdG9yIDogbnVsbDtcblxuICAgICAgLy8gUHVibGljIHByb3BlcnRpZXMuXG4gICAgICBzZWxmLm1hc3RlckdhaW4gPSBudWxsO1xuICAgICAgc2VsZi5ub0F1ZGlvID0gZmFsc2U7XG4gICAgICBzZWxmLnVzaW5nV2ViQXVkaW8gPSB0cnVlO1xuICAgICAgc2VsZi5hdXRvU3VzcGVuZCA9IHRydWU7XG4gICAgICBzZWxmLmN0eCA9IG51bGw7XG5cbiAgICAgIC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoZSBhdXRvIGF1ZGlvIHVubG9ja2VyLlxuICAgICAgc2VsZi5hdXRvVW5sb2NrID0gdHJ1ZTtcblxuICAgICAgLy8gU2V0dXAgdGhlIHZhcmlvdXMgc3RhdGUgdmFsdWVzIGZvciBnbG9iYWwgdHJhY2tpbmcuXG4gICAgICBzZWxmLl9zZXR1cCgpO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0L3NldCB0aGUgZ2xvYmFsIHZvbHVtZSBmb3IgYWxsIHNvdW5kcy5cbiAgICAgKiBAcGFyYW0gIHtGbG9hdH0gdm9sIFZvbHVtZSBmcm9tIDAuMCB0byAxLjAuXG4gICAgICogQHJldHVybiB7SG93bGVyL0Zsb2F0fSAgICAgUmV0dXJucyBzZWxmIG9yIGN1cnJlbnQgdm9sdW1lLlxuICAgICAqL1xuICAgIHZvbHVtZTogZnVuY3Rpb24odm9sKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuICAgICAgdm9sID0gcGFyc2VGbG9hdCh2b2wpO1xuXG4gICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGFuIEF1ZGlvQ29udGV4dCBjcmVhdGVkIHlldCwgcnVuIHRoZSBzZXR1cC5cbiAgICAgIGlmICghc2VsZi5jdHgpIHtcbiAgICAgICAgc2V0dXBBdWRpb0NvbnRleHQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2b2wgIT09ICd1bmRlZmluZWQnICYmIHZvbCA+PSAwICYmIHZvbCA8PSAxKSB7XG4gICAgICAgIHNlbGYuX3ZvbHVtZSA9IHZvbDtcblxuICAgICAgICAvLyBEb24ndCB1cGRhdGUgYW55IG9mIHRoZSBub2RlcyBpZiB3ZSBhcmUgbXV0ZWQuXG4gICAgICAgIGlmIChzZWxmLl9tdXRlZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbiB1c2luZyBXZWIgQXVkaW8sIHdlIGp1c3QgbmVlZCB0byBhZGp1c3QgdGhlIG1hc3RlciBnYWluLlxuICAgICAgICBpZiAoc2VsZi51c2luZ1dlYkF1ZGlvKSB7XG4gICAgICAgICAgc2VsZi5tYXN0ZXJHYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUodm9sLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbmQgY2hhbmdlIHZvbHVtZSBmb3IgYWxsIEhUTUw1IGF1ZGlvIG5vZGVzLlxuICAgICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5faG93bHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoIXNlbGYuX2hvd2xzW2ldLl93ZWJBdWRpbykge1xuICAgICAgICAgICAgLy8gR2V0IGFsbCBvZiB0aGUgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICAgICAgICAgIHZhciBpZHMgPSBzZWxmLl9ob3dsc1tpXS5fZ2V0U291bmRJZHMoKTtcblxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBzb3VuZHMgYW5kIGNoYW5nZSB0aGUgdm9sdW1lcy5cbiAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajxpZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5faG93bHNbaV0uX3NvdW5kQnlJZChpZHNbal0pO1xuXG4gICAgICAgICAgICAgIGlmIChzb3VuZCAmJiBzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgICAgIHNvdW5kLl9ub2RlLnZvbHVtZSA9IHNvdW5kLl92b2x1bWUgKiB2b2w7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGYuX3ZvbHVtZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIG11dGluZyBhbmQgdW5tdXRpbmcgZ2xvYmFsbHkuXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gbXV0ZWQgSXMgbXV0ZWQgb3Igbm90LlxuICAgICAqL1xuICAgIG11dGU6IGZ1bmN0aW9uKG11dGVkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuXG4gICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGFuIEF1ZGlvQ29udGV4dCBjcmVhdGVkIHlldCwgcnVuIHRoZSBzZXR1cC5cbiAgICAgIGlmICghc2VsZi5jdHgpIHtcbiAgICAgICAgc2V0dXBBdWRpb0NvbnRleHQoKTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fbXV0ZWQgPSBtdXRlZDtcblxuICAgICAgLy8gV2l0aCBXZWIgQXVkaW8sIHdlIGp1c3QgbmVlZCB0byBtdXRlIHRoZSBtYXN0ZXIgZ2Fpbi5cbiAgICAgIGlmIChzZWxmLnVzaW5nV2ViQXVkaW8pIHtcbiAgICAgICAgc2VsZi5tYXN0ZXJHYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUobXV0ZWQgPyAwIDogc2VsZi5fdm9sdW1lLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgIH1cblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGFuZCBtdXRlIGFsbCBIVE1MNSBBdWRpbyBub2Rlcy5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9ob3dscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXNlbGYuX2hvd2xzW2ldLl93ZWJBdWRpbykge1xuICAgICAgICAgIC8vIEdldCBhbGwgb2YgdGhlIHNvdW5kcyBpbiB0aGlzIEhvd2wgZ3JvdXAuXG4gICAgICAgICAgdmFyIGlkcyA9IHNlbGYuX2hvd2xzW2ldLl9nZXRTb3VuZElkcygpO1xuXG4gICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBzb3VuZHMgYW5kIG1hcmsgdGhlIGF1ZGlvIG5vZGUgYXMgbXV0ZWQuXG4gICAgICAgICAgZm9yICh2YXIgaj0wOyBqPGlkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5faG93bHNbaV0uX3NvdW5kQnlJZChpZHNbal0pO1xuXG4gICAgICAgICAgICBpZiAoc291bmQgJiYgc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUubXV0ZWQgPSAobXV0ZWQpID8gdHJ1ZSA6IHNvdW5kLl9tdXRlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBzdG9wcGluZyBhbGwgc291bmRzIGdsb2JhbGx5LlxuICAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBIb3dscyBhbmQgc3RvcCB0aGVtLlxuICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX2hvd2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNlbGYuX2hvd2xzW2ldLnN0b3AoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVubG9hZCBhbmQgZGVzdHJveSBhbGwgY3VycmVudGx5IGxvYWRlZCBIb3dsIG9iamVjdHMuXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIHVubG9hZDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuXG4gICAgICBmb3IgKHZhciBpPXNlbGYuX2hvd2xzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgc2VsZi5faG93bHNbaV0udW5sb2FkKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBhIG5ldyBBdWRpb0NvbnRleHQgdG8gbWFrZSBzdXJlIGl0IGlzIGZ1bGx5IHJlc2V0LlxuICAgICAgaWYgKHNlbGYudXNpbmdXZWJBdWRpbyAmJiBzZWxmLmN0eCAmJiB0eXBlb2Ygc2VsZi5jdHguY2xvc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuY3R4LmNsb3NlKCk7XG4gICAgICAgIHNlbGYuY3R4ID0gbnVsbDtcbiAgICAgICAgc2V0dXBBdWRpb0NvbnRleHQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBjb2RlYyBzdXBwb3J0IG9mIHNwZWNpZmljIGV4dGVuc2lvbi5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGV4dCBBdWRpbyBmaWxlIGV4dGVudGlvbi5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGNvZGVjczogZnVuY3Rpb24oZXh0KSB7XG4gICAgICByZXR1cm4gKHRoaXMgfHwgSG93bGVyKS5fY29kZWNzW2V4dC5yZXBsYWNlKC9eeC0vLCAnJyldO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCB2YXJpb3VzIHN0YXRlIHZhbHVlcyBmb3IgZ2xvYmFsIHRyYWNraW5nLlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBfc2V0dXA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcblxuICAgICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIHN1c3BlbmQvcmVzdW1lIHN0YXRlIG9mIHRoZSBBdWRpb0NvbnRleHQuXG4gICAgICBzZWxmLnN0YXRlID0gc2VsZi5jdHggPyBzZWxmLmN0eC5zdGF0ZSB8fCAnc3VzcGVuZGVkJyA6ICdzdXNwZW5kZWQnO1xuXG4gICAgICAvLyBBdXRvbWF0aWNhbGx5IGJlZ2luIHRoZSAzMC1zZWNvbmQgc3VzcGVuZCBwcm9jZXNzXG4gICAgICBzZWxmLl9hdXRvU3VzcGVuZCgpO1xuXG4gICAgICAvLyBDaGVjayBpZiBhdWRpbyBpcyBhdmFpbGFibGUuXG4gICAgICBpZiAoIXNlbGYudXNpbmdXZWJBdWRpbykge1xuICAgICAgICAvLyBObyBhdWRpbyBpcyBhdmFpbGFibGUgb24gdGhpcyBzeXN0ZW0gaWYgbm9BdWRpbyBpcyBzZXQgdG8gdHJ1ZS5cbiAgICAgICAgaWYgKHR5cGVvZiBBdWRpbyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHRlc3QgPSBuZXcgQXVkaW8oKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNhbnBsYXl0aHJvdWdoIGV2ZW50IGlzIGF2YWlsYWJsZS5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGVzdC5vbmNhbnBsYXl0aHJvdWdoID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICBzZWxmLl9jYW5QbGF5RXZlbnQgPSAnY2FucGxheSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBzZWxmLm5vQXVkaW8gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLm5vQXVkaW8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRlc3QgdG8gbWFrZSBzdXJlIGF1ZGlvIGlzbid0IGRpc2FibGVkIGluIEludGVybmV0IEV4cGxvcmVyLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHRlc3QgPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgaWYgKHRlc3QubXV0ZWQpIHtcbiAgICAgICAgICBzZWxmLm5vQXVkaW8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAvLyBDaGVjayBmb3Igc3VwcG9ydGVkIGNvZGVjcy5cbiAgICAgIGlmICghc2VsZi5ub0F1ZGlvKSB7XG4gICAgICAgIHNlbGYuX3NldHVwQ29kZWNzKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgYnJvd3NlciBzdXBwb3J0IGZvciB2YXJpb3VzIGNvZGVjcyBhbmQgY2FjaGUgdGhlIHJlc3VsdHMuXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIF9zZXR1cENvZGVjczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuICAgICAgdmFyIGF1ZGlvVGVzdCA9IG51bGw7XG5cbiAgICAgIC8vIE11c3Qgd3JhcCBpbiBhIHRyeS9jYXRjaCBiZWNhdXNlIElFMTEgaW4gc2VydmVyIG1vZGUgdGhyb3dzIGFuIGVycm9yLlxuICAgICAgdHJ5IHtcbiAgICAgICAgYXVkaW9UZXN0ID0gKHR5cGVvZiBBdWRpbyAhPT0gJ3VuZGVmaW5lZCcpID8gbmV3IEF1ZGlvKCkgOiBudWxsO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWF1ZGlvVGVzdCB8fCB0eXBlb2YgYXVkaW9UZXN0LmNhblBsYXlUeXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICB2YXIgbXBlZ1Rlc3QgPSBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL21wZWc7JykucmVwbGFjZSgvXm5vJC8sICcnKTtcblxuICAgICAgLy8gT3BlcmEgdmVyc2lvbiA8MzMgaGFzIG1peGVkIE1QMyBzdXBwb3J0LCBzbyB3ZSBuZWVkIHRvIGNoZWNrIGZvciBhbmQgYmxvY2sgaXQuXG4gICAgICB2YXIgdWEgPSBzZWxmLl9uYXZpZ2F0b3IgPyBzZWxmLl9uYXZpZ2F0b3IudXNlckFnZW50IDogJyc7XG4gICAgICB2YXIgY2hlY2tPcGVyYSA9IHVhLm1hdGNoKC9PUFJcXC8oWzAtNl0uKS9nKTtcbiAgICAgIHZhciBpc09sZE9wZXJhID0gKGNoZWNrT3BlcmEgJiYgcGFyc2VJbnQoY2hlY2tPcGVyYVswXS5zcGxpdCgnLycpWzFdLCAxMCkgPCAzMyk7XG4gICAgICB2YXIgY2hlY2tTYWZhcmkgPSB1YS5pbmRleE9mKCdTYWZhcmknKSAhPT0gLTEgJiYgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xO1xuICAgICAgdmFyIHNhZmFyaVZlcnNpb24gPSB1YS5tYXRjaCgvVmVyc2lvblxcLyguKj8pIC8pO1xuICAgICAgdmFyIGlzT2xkU2FmYXJpID0gKGNoZWNrU2FmYXJpICYmIHNhZmFyaVZlcnNpb24gJiYgcGFyc2VJbnQoc2FmYXJpVmVyc2lvblsxXSwgMTApIDwgMTUpO1xuXG4gICAgICBzZWxmLl9jb2RlY3MgPSB7XG4gICAgICAgIG1wMzogISEoIWlzT2xkT3BlcmEgJiYgKG1wZWdUZXN0IHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vbXAzOycpLnJlcGxhY2UoL15ubyQvLCAnJykpKSxcbiAgICAgICAgbXBlZzogISFtcGVnVGVzdCxcbiAgICAgICAgb3B1czogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwib3B1c1wiJykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgb2dnOiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIG9nYTogISFhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICB3YXY6ICEhKGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vd2F2OyBjb2RlY3M9XCIxXCInKSB8fCBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL3dhdicpKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBhYWM6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9hYWM7JykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgY2FmOiAhIWF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8veC1jYWY7JykucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgbTRhOiAhIShhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL3gtbTRhOycpIHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vbTRhOycpIHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vYWFjOycpKS5yZXBsYWNlKC9ebm8kLywgJycpLFxuICAgICAgICBtNGI6ICEhKGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8veC1tNGI7JykgfHwgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9tNGI7JykgfHwgYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9hYWM7JykpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIG1wNDogISEoYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby94LW1wNDsnKSB8fCBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL21wNDsnKSB8fCBhdWRpb1Rlc3QuY2FuUGxheVR5cGUoJ2F1ZGlvL2FhYzsnKSkucmVwbGFjZSgvXm5vJC8sICcnKSxcbiAgICAgICAgd2ViYTogISEoIWlzT2xkU2FmYXJpICYmIGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vd2VibTsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKSxcbiAgICAgICAgd2VibTogISEoIWlzT2xkU2FmYXJpICYmIGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vd2VibTsgY29kZWNzPVwidm9yYmlzXCInKS5yZXBsYWNlKC9ebm8kLywgJycpKSxcbiAgICAgICAgZG9sYnk6ICEhYXVkaW9UZXN0LmNhblBsYXlUeXBlKCdhdWRpby9tcDQ7IGNvZGVjcz1cImVjLTNcIicpLnJlcGxhY2UoL15ubyQvLCAnJyksXG4gICAgICAgIGZsYWM6ICEhKGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8veC1mbGFjOycpIHx8IGF1ZGlvVGVzdC5jYW5QbGF5VHlwZSgnYXVkaW8vZmxhYzsnKSkucmVwbGFjZSgvXm5vJC8sICcnKVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNvbWUgYnJvd3NlcnMvZGV2aWNlcyB3aWxsIG9ubHkgYWxsb3cgYXVkaW8gdG8gYmUgcGxheWVkIGFmdGVyIGEgdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgKiBBdHRlbXB0IHRvIGF1dG9tYXRpY2FsbHkgdW5sb2NrIGF1ZGlvIG9uIHRoZSBmaXJzdCB1c2VyIGludGVyYWN0aW9uLlxuICAgICAqIENvbmNlcHQgZnJvbTogaHR0cDovL3BhdWxiYWthdXMuY29tL3R1dG9yaWFscy9odG1sNS93ZWItYXVkaW8tb24taW9zL1xuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBfdW5sb2NrQXVkaW86IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzIHx8IEhvd2xlcjtcblxuICAgICAgLy8gT25seSBydW4gdGhpcyBpZiBXZWIgQXVkaW8gaXMgc3VwcG9ydGVkIGFuZCBpdCBoYXNuJ3QgYWxyZWFkeSBiZWVuIHVubG9ja2VkLlxuICAgICAgaWYgKHNlbGYuX2F1ZGlvVW5sb2NrZWQgfHwgIXNlbGYuY3R4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fYXVkaW9VbmxvY2tlZCA9IGZhbHNlO1xuICAgICAgc2VsZi5hdXRvVW5sb2NrID0gZmFsc2U7XG5cbiAgICAgIC8vIFNvbWUgbW9iaWxlIGRldmljZXMvcGxhdGZvcm1zIGhhdmUgZGlzdG9ydGlvbiBpc3N1ZXMgd2hlbiBvcGVuaW5nL2Nsb3NpbmcgdGFicyBhbmQvb3Igd2ViIHZpZXdzLlxuICAgICAgLy8gQnVncyBpbiB0aGUgYnJvd3NlciAoZXNwZWNpYWxseSBNb2JpbGUgU2FmYXJpKSBjYW4gY2F1c2UgdGhlIHNhbXBsZVJhdGUgdG8gY2hhbmdlIGZyb20gNDQxMDAgdG8gNDgwMDAuXG4gICAgICAvLyBCeSBjYWxsaW5nIEhvd2xlci51bmxvYWQoKSwgd2UgY3JlYXRlIGEgbmV3IEF1ZGlvQ29udGV4dCB3aXRoIHRoZSBjb3JyZWN0IHNhbXBsZVJhdGUuXG4gICAgICBpZiAoIXNlbGYuX21vYmlsZVVubG9hZGVkICYmIHNlbGYuY3R4LnNhbXBsZVJhdGUgIT09IDQ0MTAwKSB7XG4gICAgICAgIHNlbGYuX21vYmlsZVVubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgc2VsZi51bmxvYWQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2NyYXRjaCBidWZmZXIgZm9yIGVuYWJsaW5nIGlPUyB0byBkaXNwb3NlIG9mIHdlYiBhdWRpbyBidWZmZXJzIGNvcnJlY3RseSwgYXMgcGVyOlxuICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDExOTY4NFxuICAgICAgc2VsZi5fc2NyYXRjaEJ1ZmZlciA9IHNlbGYuY3R4LmNyZWF0ZUJ1ZmZlcigxLCAxLCAyMjA1MCk7XG5cbiAgICAgIC8vIENhbGwgdGhpcyBtZXRob2Qgb24gdG91Y2ggc3RhcnQgdG8gY3JlYXRlIGFuZCBwbGF5IGEgYnVmZmVyLFxuICAgICAgLy8gdGhlbiBjaGVjayBpZiB0aGUgYXVkaW8gYWN0dWFsbHkgcGxheWVkIHRvIGRldGVybWluZSBpZlxuICAgICAgLy8gYXVkaW8gaGFzIG5vdyBiZWVuIHVubG9ja2VkIG9uIGlPUywgQW5kcm9pZCwgZXRjLlxuICAgICAgdmFyIHVubG9jayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgcG9vbCBvZiB1bmxvY2tlZCBIVE1MNSBBdWRpbyBvYmplY3RzIHRoYXQgY2FuXG4gICAgICAgIC8vIGJlIHVzZWQgZm9yIHBsYXlpbmcgc291bmRzIHdpdGhvdXQgdXNlciBpbnRlcmFjdGlvbi4gSFRNTDVcbiAgICAgICAgLy8gQXVkaW8gb2JqZWN0cyBtdXN0IGJlIGluZGl2aWR1YWxseSB1bmxvY2tlZCwgYXMgb3Bwb3NlZFxuICAgICAgICAvLyB0byB0aGUgV2ViQXVkaW8gQVBJIHdoaWNoIG9ubHkgbmVlZHMgYSBzaW5nbGUgYWN0aXZhdGlvbi5cbiAgICAgICAgLy8gVGhpcyBtdXN0IG9jY3VyIGJlZm9yZSBXZWJBdWRpbyBzZXR1cCBvciB0aGUgc291cmNlLm9uZW5kZWRcbiAgICAgICAgLy8gZXZlbnQgd2lsbCBub3QgZmlyZS5cbiAgICAgICAgd2hpbGUgKHNlbGYuX2h0bWw1QXVkaW9Qb29sLmxlbmd0aCA8IHNlbGYuaHRtbDVQb29sU2l6ZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYXVkaW9Ob2RlID0gbmV3IEF1ZGlvKCk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgdGhpcyBBdWRpbyBvYmplY3QgYXMgdW5sb2NrZWQgdG8gZW5zdXJlIGl0IGNhbiBnZXQgcmV0dXJuZWRcbiAgICAgICAgICAgIC8vIHRvIHRoZSB1bmxvY2tlZCBwb29sIHdoZW4gcmVsZWFzZWQuXG4gICAgICAgICAgICBhdWRpb05vZGUuX3VubG9ja2VkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gQWRkIHRoZSBhdWRpbyBub2RlIHRvIHRoZSBwb29sLlxuICAgICAgICAgICAgc2VsZi5fcmVsZWFzZUh0bWw1QXVkaW8oYXVkaW9Ob2RlKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBzZWxmLm5vQXVkaW8gPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFueSBhc3NpZ25lZCBhdWRpbyBub2RlcyBhbmQgdW5sb2NrIHRoZW0uXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9ob3dscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICghc2VsZi5faG93bHNbaV0uX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgICAvLyBHZXQgYWxsIG9mIHRoZSBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAgICAgICAgdmFyIGlkcyA9IHNlbGYuX2hvd2xzW2ldLl9nZXRTb3VuZElkcygpO1xuXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHNvdW5kcyBhbmQgdW5sb2NrIHRoZSBhdWRpbyBub2Rlcy5cbiAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajxpZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5faG93bHNbaV0uX3NvdW5kQnlJZChpZHNbal0pO1xuXG4gICAgICAgICAgICAgIGlmIChzb3VuZCAmJiBzb3VuZC5fbm9kZSAmJiAhc291bmQuX25vZGUuX3VubG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgc291bmQuX25vZGUuX3VubG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5sb2FkKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXggQW5kcm9pZCBjYW4gbm90IHBsYXkgaW4gc3VzcGVuZCBzdGF0ZS5cbiAgICAgICAgc2VsZi5fYXV0b1Jlc3VtZSgpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhbiBlbXB0eSBidWZmZXIuXG4gICAgICAgIHZhciBzb3VyY2UgPSBzZWxmLmN0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgICAgc291cmNlLmJ1ZmZlciA9IHNlbGYuX3NjcmF0Y2hCdWZmZXI7XG4gICAgICAgIHNvdXJjZS5jb25uZWN0KHNlbGYuY3R4LmRlc3RpbmF0aW9uKTtcblxuICAgICAgICAvLyBQbGF5IHRoZSBlbXB0eSBidWZmZXIuXG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlLnN0YXJ0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHNvdXJjZS5ub3RlT24oMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc291cmNlLnN0YXJ0KDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbGluZyByZXN1bWUoKSBvbiBhIHN0YWNrIGluaXRpYXRlZCBieSB1c2VyIGdlc3R1cmUgaXMgd2hhdCBhY3R1YWxseSB1bmxvY2tzIHRoZSBhdWRpbyBvbiBBbmRyb2lkIENocm9tZSA+PSA1NS5cbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmN0eC5yZXN1bWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBzZWxmLmN0eC5yZXN1bWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldHVwIGEgdGltZW91dCB0byBjaGVjayB0aGF0IHdlIGFyZSB1bmxvY2tlZCBvbiB0aGUgbmV4dCBldmVudCBsb29wLlxuICAgICAgICBzb3VyY2Uub25lbmRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNvdXJjZS5kaXNjb25uZWN0KDApO1xuXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSB1bmxvY2tlZCBzdGF0ZSBhbmQgcHJldmVudCB0aGlzIGNoZWNrIGZyb20gaGFwcGVuaW5nIGFnYWluLlxuICAgICAgICAgIHNlbGYuX2F1ZGlvVW5sb2NrZWQgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSB0b3VjaCBzdGFydCBsaXN0ZW5lci5cbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdW5sb2NrLCB0cnVlKTtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHVubG9jaywgdHJ1ZSk7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1bmxvY2ssIHRydWUpO1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB1bmxvY2ssIHRydWUpO1xuXG4gICAgICAgICAgLy8gTGV0IGFsbCBzb3VuZHMga25vdyB0aGF0IGF1ZGlvIGhhcyBiZWVuIHVubG9ja2VkLlxuICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9ob3dscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2VsZi5faG93bHNbaV0uX2VtaXQoJ3VubG9jaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFNldHVwIGEgdG91Y2ggc3RhcnQgbGlzdGVuZXIgdG8gYXR0ZW1wdCBhbiB1bmxvY2sgaW4uXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdW5sb2NrLCB0cnVlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdW5sb2NrLCB0cnVlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdW5sb2NrLCB0cnVlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB1bmxvY2ssIHRydWUpO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGFuIHVubG9ja2VkIEhUTUw1IEF1ZGlvIG9iamVjdCBmcm9tIHRoZSBwb29sLiBJZiBub25lIGFyZSBsZWZ0LFxuICAgICAqIHJldHVybiBhIG5ldyBBdWRpbyBvYmplY3QgYW5kIHRocm93IGEgd2FybmluZy5cbiAgICAgKiBAcmV0dXJuIHtBdWRpb30gSFRNTDUgQXVkaW8gb2JqZWN0LlxuICAgICAqL1xuICAgIF9vYnRhaW5IdG1sNUF1ZGlvOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyB8fCBIb3dsZXI7XG5cbiAgICAgIC8vIFJldHVybiB0aGUgbmV4dCBvYmplY3QgZnJvbSB0aGUgcG9vbCBpZiBvbmUgZXhpc3RzLlxuICAgICAgaWYgKHNlbGYuX2h0bWw1QXVkaW9Qb29sLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gc2VsZi5faHRtbDVBdWRpb1Bvb2wucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIC8vLkNoZWNrIGlmIHRoZSBhdWRpbyBpcyBsb2NrZWQgYW5kIHRocm93IGEgd2FybmluZy5cbiAgICAgIHZhciB0ZXN0UGxheSA9IG5ldyBBdWRpbygpLnBsYXkoKTtcbiAgICAgIGlmICh0ZXN0UGxheSAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgKHRlc3RQbGF5IGluc3RhbmNlb2YgUHJvbWlzZSB8fCB0eXBlb2YgdGVzdFBsYXkudGhlbiA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgdGVzdFBsYXkuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdIVE1MNSBBdWRpbyBwb29sIGV4aGF1c3RlZCwgcmV0dXJuaW5nIHBvdGVudGlhbGx5IGxvY2tlZCBhdWRpbyBvYmplY3QuJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IEF1ZGlvKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybiBhbiBhY3RpdmF0ZWQgSFRNTDUgQXVkaW8gb2JqZWN0IHRvIHRoZSBwb29sLlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBfcmVsZWFzZUh0bWw1QXVkaW86IGZ1bmN0aW9uKGF1ZGlvKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMgfHwgSG93bGVyO1xuXG4gICAgICAvLyBEb24ndCBhZGQgYXVkaW8gdG8gdGhlIHBvb2wgaWYgd2UgZG9uJ3Qga25vdyBpZiBpdCBoYXMgYmVlbiB1bmxvY2tlZC5cbiAgICAgIGlmIChhdWRpby5fdW5sb2NrZWQpIHtcbiAgICAgICAgc2VsZi5faHRtbDVBdWRpb1Bvb2wucHVzaChhdWRpbyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdXRvbWF0aWNhbGx5IHN1c3BlbmQgdGhlIFdlYiBBdWRpbyBBdWRpb0NvbnRleHQgYWZ0ZXIgbm8gc291bmQgaGFzIHBsYXllZCBmb3IgMzAgc2Vjb25kcy5cbiAgICAgKiBUaGlzIHNhdmVzIHByb2Nlc3NpbmcvZW5lcmd5IGFuZCBmaXhlcyB2YXJpb3VzIGJyb3dzZXItc3BlY2lmaWMgYnVncyB3aXRoIGF1ZGlvIGdldHRpbmcgc3R1Y2suXG4gICAgICogQHJldHVybiB7SG93bGVyfVxuICAgICAqL1xuICAgIF9hdXRvU3VzcGVuZDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmICghc2VsZi5hdXRvU3VzcGVuZCB8fCAhc2VsZi5jdHggfHwgdHlwZW9mIHNlbGYuY3R4LnN1c3BlbmQgPT09ICd1bmRlZmluZWQnIHx8ICFIb3dsZXIudXNpbmdXZWJBdWRpbykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIGFueSBzb3VuZHMgYXJlIHBsYXlpbmcuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5faG93bHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGYuX2hvd2xzW2ldLl93ZWJBdWRpbykge1xuICAgICAgICAgIGZvciAodmFyIGo9MDsgajxzZWxmLl9ob3dsc1tpXS5fc291bmRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoIXNlbGYuX2hvd2xzW2ldLl9zb3VuZHNbal0uX3BhdXNlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYuX3N1c3BlbmRUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5fc3VzcGVuZFRpbWVyKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gc291bmQgaGFzIHBsYXllZCBhZnRlciAzMCBzZWNvbmRzLCBzdXNwZW5kIHRoZSBjb250ZXh0LlxuICAgICAgc2VsZi5fc3VzcGVuZFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFzZWxmLmF1dG9TdXNwZW5kKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5fc3VzcGVuZFRpbWVyID0gbnVsbDtcbiAgICAgICAgc2VsZi5zdGF0ZSA9ICdzdXNwZW5kaW5nJztcblxuICAgICAgICAvLyBIYW5kbGUgdXBkYXRpbmcgdGhlIHN0YXRlIG9mIHRoZSBhdWRpbyBjb250ZXh0IGFmdGVyIHN1c3BlbmRpbmcuXG4gICAgICAgIHZhciBoYW5kbGVTdXNwZW5zaW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi5zdGF0ZSA9ICdzdXNwZW5kZWQnO1xuXG4gICAgICAgICAgaWYgKHNlbGYuX3Jlc3VtZUFmdGVyU3VzcGVuZCkge1xuICAgICAgICAgICAgZGVsZXRlIHNlbGYuX3Jlc3VtZUFmdGVyU3VzcGVuZDtcbiAgICAgICAgICAgIHNlbGYuX2F1dG9SZXN1bWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gRWl0aGVyIHRoZSBzdGF0ZSBnZXRzIHN1c3BlbmRlZCBvciBpdCBpcyBpbnRlcnJ1cHRlZC5cbiAgICAgICAgLy8gRWl0aGVyIHdheSwgd2UgbmVlZCB0byB1cGRhdGUgdGhlIHN0YXRlIHRvIHN1c3BlbmRlZC5cbiAgICAgICAgc2VsZi5jdHguc3VzcGVuZCgpLnRoZW4oaGFuZGxlU3VzcGVuc2lvbiwgaGFuZGxlU3VzcGVuc2lvbik7XG4gICAgICB9LCAzMDAwMCk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdXRvbWF0aWNhbGx5IHJlc3VtZSB0aGUgV2ViIEF1ZGlvIEF1ZGlvQ29udGV4dCB3aGVuIGEgbmV3IHNvdW5kIGlzIHBsYXllZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsZXJ9XG4gICAgICovXG4gICAgX2F1dG9SZXN1bWU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoIXNlbGYuY3R4IHx8IHR5cGVvZiBzZWxmLmN0eC5yZXN1bWUgPT09ICd1bmRlZmluZWQnIHx8ICFIb3dsZXIudXNpbmdXZWJBdWRpbykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLnN0YXRlID09PSAncnVubmluZycgJiYgc2VsZi5jdHguc3RhdGUgIT09ICdpbnRlcnJ1cHRlZCcgJiYgc2VsZi5fc3VzcGVuZFRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChzZWxmLl9zdXNwZW5kVGltZXIpO1xuICAgICAgICBzZWxmLl9zdXNwZW5kVGltZXIgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLnN0YXRlID09PSAnc3VzcGVuZGVkJyB8fCBzZWxmLnN0YXRlID09PSAncnVubmluZycgJiYgc2VsZi5jdHguc3RhdGUgPT09ICdpbnRlcnJ1cHRlZCcpIHtcbiAgICAgICAgc2VsZi5jdHgucmVzdW1lKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLnN0YXRlID0gJ3J1bm5pbmcnO1xuXG4gICAgICAgICAgLy8gRW1pdCB0byBhbGwgSG93bHMgdGhhdCB0aGUgYXVkaW8gaGFzIHJlc3VtZWQuXG4gICAgICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX2hvd2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZWxmLl9ob3dsc1tpXS5fZW1pdCgncmVzdW1lJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2VsZi5fc3VzcGVuZFRpbWVyKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX3N1c3BlbmRUaW1lcik7XG4gICAgICAgICAgc2VsZi5fc3VzcGVuZFRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzZWxmLnN0YXRlID09PSAnc3VzcGVuZGluZycpIHtcbiAgICAgICAgc2VsZi5fcmVzdW1lQWZ0ZXJTdXNwZW5kID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNldHVwIHRoZSBnbG9iYWwgYXVkaW8gY29udHJvbGxlci5cbiAgdmFyIEhvd2xlciA9IG5ldyBIb3dsZXJHbG9iYWwoKTtcblxuICAvKiogR3JvdXAgTWV0aG9kcyAqKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGF1ZGlvIGdyb3VwIGNvbnRyb2xsZXIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvIFBhc3NlZCBpbiBwcm9wZXJ0aWVzIGZvciB0aGlzIGdyb3VwLlxuICAgKi9cbiAgdmFyIEhvd2wgPSBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgbm8gc291cmNlIGlzIHByb3ZpZGVkLlxuICAgIGlmICghby5zcmMgfHwgby5zcmMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdBbiBhcnJheSBvZiBzb3VyY2UgZmlsZXMgbXVzdCBiZSBwYXNzZWQgd2l0aCBhbnkgbmV3IEhvd2wuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZi5pbml0KG8pO1xuICB9O1xuICBIb3dsLnByb3RvdHlwZSA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGEgbmV3IEhvd2wgZ3JvdXAgb2JqZWN0LlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gbyBQYXNzZWQgaW4gcHJvcGVydGllcyBmb3IgdGhpcyBncm91cC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uKG8pIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhbiBBdWRpb0NvbnRleHQgY3JlYXRlZCB5ZXQsIHJ1biB0aGUgc2V0dXAuXG4gICAgICBpZiAoIUhvd2xlci5jdHgpIHtcbiAgICAgICAgc2V0dXBBdWRpb0NvbnRleHQoKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0dXAgdXNlci1kZWZpbmVkIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgICAgIHNlbGYuX2F1dG9wbGF5ID0gby5hdXRvcGxheSB8fCBmYWxzZTtcbiAgICAgIHNlbGYuX2Zvcm1hdCA9ICh0eXBlb2Ygby5mb3JtYXQgIT09ICdzdHJpbmcnKSA/IG8uZm9ybWF0IDogW28uZm9ybWF0XTtcbiAgICAgIHNlbGYuX2h0bWw1ID0gby5odG1sNSB8fCBmYWxzZTtcbiAgICAgIHNlbGYuX211dGVkID0gby5tdXRlIHx8IGZhbHNlO1xuICAgICAgc2VsZi5fbG9vcCA9IG8ubG9vcCB8fCBmYWxzZTtcbiAgICAgIHNlbGYuX3Bvb2wgPSBvLnBvb2wgfHwgNTtcbiAgICAgIHNlbGYuX3ByZWxvYWQgPSAodHlwZW9mIG8ucHJlbG9hZCA9PT0gJ2Jvb2xlYW4nIHx8IG8ucHJlbG9hZCA9PT0gJ21ldGFkYXRhJykgPyBvLnByZWxvYWQgOiB0cnVlO1xuICAgICAgc2VsZi5fcmF0ZSA9IG8ucmF0ZSB8fCAxO1xuICAgICAgc2VsZi5fc3ByaXRlID0gby5zcHJpdGUgfHwge307XG4gICAgICBzZWxmLl9zcmMgPSAodHlwZW9mIG8uc3JjICE9PSAnc3RyaW5nJykgPyBvLnNyYyA6IFtvLnNyY107XG4gICAgICBzZWxmLl92b2x1bWUgPSBvLnZvbHVtZSAhPT0gdW5kZWZpbmVkID8gby52b2x1bWUgOiAxO1xuICAgICAgc2VsZi5feGhyID0ge1xuICAgICAgICBtZXRob2Q6IG8ueGhyICYmIG8ueGhyLm1ldGhvZCA/IG8ueGhyLm1ldGhvZCA6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiBvLnhociAmJiBvLnhoci5oZWFkZXJzID8gby54aHIuaGVhZGVycyA6IG51bGwsXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogby54aHIgJiYgby54aHIud2l0aENyZWRlbnRpYWxzID8gby54aHIud2l0aENyZWRlbnRpYWxzIDogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgICAvLyBTZXR1cCBhbGwgb3RoZXIgZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICAgICAgc2VsZi5fZHVyYXRpb24gPSAwO1xuICAgICAgc2VsZi5fc3RhdGUgPSAndW5sb2FkZWQnO1xuICAgICAgc2VsZi5fc291bmRzID0gW107XG4gICAgICBzZWxmLl9lbmRUaW1lcnMgPSB7fTtcbiAgICAgIHNlbGYuX3F1ZXVlID0gW107XG4gICAgICBzZWxmLl9wbGF5TG9jayA9IGZhbHNlO1xuXG4gICAgICAvLyBTZXR1cCBldmVudCBsaXN0ZW5lcnMuXG4gICAgICBzZWxmLl9vbmVuZCA9IG8ub25lbmQgPyBbe2ZuOiBvLm9uZW5kfV0gOiBbXTtcbiAgICAgIHNlbGYuX29uZmFkZSA9IG8ub25mYWRlID8gW3tmbjogby5vbmZhZGV9XSA6IFtdO1xuICAgICAgc2VsZi5fb25sb2FkID0gby5vbmxvYWQgPyBbe2ZuOiBvLm9ubG9hZH1dIDogW107XG4gICAgICBzZWxmLl9vbmxvYWRlcnJvciA9IG8ub25sb2FkZXJyb3IgPyBbe2ZuOiBvLm9ubG9hZGVycm9yfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ucGxheWVycm9yID0gby5vbnBsYXllcnJvciA/IFt7Zm46IG8ub25wbGF5ZXJyb3J9XSA6IFtdO1xuICAgICAgc2VsZi5fb25wYXVzZSA9IG8ub25wYXVzZSA/IFt7Zm46IG8ub25wYXVzZX1dIDogW107XG4gICAgICBzZWxmLl9vbnBsYXkgPSBvLm9ucGxheSA/IFt7Zm46IG8ub25wbGF5fV0gOiBbXTtcbiAgICAgIHNlbGYuX29uc3RvcCA9IG8ub25zdG9wID8gW3tmbjogby5vbnN0b3B9XSA6IFtdO1xuICAgICAgc2VsZi5fb25tdXRlID0gby5vbm11dGUgPyBbe2ZuOiBvLm9ubXV0ZX1dIDogW107XG4gICAgICBzZWxmLl9vbnZvbHVtZSA9IG8ub252b2x1bWUgPyBbe2ZuOiBvLm9udm9sdW1lfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ucmF0ZSA9IG8ub25yYXRlID8gW3tmbjogby5vbnJhdGV9XSA6IFtdO1xuICAgICAgc2VsZi5fb25zZWVrID0gby5vbnNlZWsgPyBbe2ZuOiBvLm9uc2Vla31dIDogW107XG4gICAgICBzZWxmLl9vbnVubG9jayA9IG8ub251bmxvY2sgPyBbe2ZuOiBvLm9udW5sb2NrfV0gOiBbXTtcbiAgICAgIHNlbGYuX29ucmVzdW1lID0gW107XG5cbiAgICAgIC8vIFdlYiBBdWRpbyBvciBIVE1MNSBBdWRpbz9cbiAgICAgIHNlbGYuX3dlYkF1ZGlvID0gSG93bGVyLnVzaW5nV2ViQXVkaW8gJiYgIXNlbGYuX2h0bWw1O1xuXG4gICAgICAvLyBBdXRvbWF0aWNhbGx5IHRyeSB0byBlbmFibGUgYXVkaW8uXG4gICAgICBpZiAodHlwZW9mIEhvd2xlci5jdHggIT09ICd1bmRlZmluZWQnICYmIEhvd2xlci5jdHggJiYgSG93bGVyLmF1dG9VbmxvY2spIHtcbiAgICAgICAgSG93bGVyLl91bmxvY2tBdWRpbygpO1xuICAgICAgfVxuXG4gICAgICAvLyBLZWVwIHRyYWNrIG9mIHRoaXMgSG93bCBncm91cCBpbiB0aGUgZ2xvYmFsIGNvbnRyb2xsZXIuXG4gICAgICBIb3dsZXIuX2hvd2xzLnB1c2goc2VsZik7XG5cbiAgICAgIC8vIElmIHRoZXkgc2VsZWN0ZWQgYXV0b3BsYXksIGFkZCBhIHBsYXkgZXZlbnQgdG8gdGhlIGxvYWQgcXVldWUuXG4gICAgICBpZiAoc2VsZi5fYXV0b3BsYXkpIHtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdwbGF5JyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5wbGF5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gTG9hZCB0aGUgc291cmNlIGZpbGUgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gICAgICBpZiAoc2VsZi5fcHJlbG9hZCAmJiBzZWxmLl9wcmVsb2FkICE9PSAnbm9uZScpIHtcbiAgICAgICAgc2VsZi5sb2FkKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHRoZSBhdWRpbyBmaWxlLlxuICAgICAqIEByZXR1cm4ge0hvd2xlcn1cbiAgICAgKi9cbiAgICBsb2FkOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciB1cmwgPSBudWxsO1xuXG4gICAgICAvLyBJZiBubyBhdWRpbyBpcyBhdmFpbGFibGUsIHF1aXQgaW1tZWRpYXRlbHkuXG4gICAgICBpZiAoSG93bGVyLm5vQXVkaW8pIHtcbiAgICAgICAgc2VsZi5fZW1pdCgnbG9hZGVycm9yJywgbnVsbCwgJ05vIGF1ZGlvIHN1cHBvcnQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSBzdXJlIG91ciBzb3VyY2UgaXMgaW4gYW4gYXJyYXkuXG4gICAgICBpZiAodHlwZW9mIHNlbGYuX3NyYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgc2VsZi5fc3JjID0gW3NlbGYuX3NyY107XG4gICAgICB9XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgc291cmNlcyBhbmQgcGljayB0aGUgZmlyc3Qgb25lIHRoYXQgaXMgY29tcGF0aWJsZS5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9zcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGV4dCwgc3RyO1xuXG4gICAgICAgIGlmIChzZWxmLl9mb3JtYXQgJiYgc2VsZi5fZm9ybWF0W2ldKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXh0ZW5zaW9uIHdhcyBzcGVjaWZpZWQsIHVzZSB0aGF0IGluc3RlYWQuXG4gICAgICAgICAgZXh0ID0gc2VsZi5fZm9ybWF0W2ldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgc291cmNlIGlzIGEgc3RyaW5nLlxuICAgICAgICAgIHN0ciA9IHNlbGYuX3NyY1tpXTtcbiAgICAgICAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHNlbGYuX2VtaXQoJ2xvYWRlcnJvcicsIG51bGwsICdOb24tc3RyaW5nIGZvdW5kIGluIHNlbGVjdGVkIGF1ZGlvIHNvdXJjZXMgLSBpZ25vcmluZy4nKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEV4dHJhY3QgdGhlIGZpbGUgZXh0ZW5zaW9uIGZyb20gdGhlIFVSTCBvciBiYXNlNjQgZGF0YSBVUkkuXG4gICAgICAgICAgZXh0ID0gL15kYXRhOmF1ZGlvXFwvKFteOyxdKyk7L2kuZXhlYyhzdHIpO1xuICAgICAgICAgIGlmICghZXh0KSB7XG4gICAgICAgICAgICBleHQgPSAvXFwuKFteLl0rKSQvLmV4ZWMoc3RyLnNwbGl0KCc/JywgMSlbMF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChleHQpIHtcbiAgICAgICAgICAgIGV4dCA9IGV4dFsxXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExvZyBhIHdhcm5pbmcgaWYgbm8gZXh0ZW5zaW9uIHdhcyBmb3VuZC5cbiAgICAgICAgaWYgKCFleHQpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIGZpbGUgZXh0ZW5zaW9uIHdhcyBmb3VuZC4gQ29uc2lkZXIgdXNpbmcgdGhlIFwiZm9ybWF0XCIgcHJvcGVydHkgb3Igc3BlY2lmeSBhbiBleHRlbnNpb24uJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGV4dGVuc2lvbiBpcyBhdmFpbGFibGUuXG4gICAgICAgIGlmIChleHQgJiYgSG93bGVyLmNvZGVjcyhleHQpKSB7XG4gICAgICAgICAgdXJsID0gc2VsZi5fc3JjW2ldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHNlbGYuX2VtaXQoJ2xvYWRlcnJvcicsIG51bGwsICdObyBjb2RlYyBzdXBwb3J0IGZvciBzZWxlY3RlZCBhdWRpbyBzb3VyY2VzLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX3NyYyA9IHVybDtcbiAgICAgIHNlbGYuX3N0YXRlID0gJ2xvYWRpbmcnO1xuXG4gICAgICAvLyBJZiB0aGUgaG9zdGluZyBwYWdlIGlzIEhUVFBTIGFuZCB0aGUgc291cmNlIGlzbid0LFxuICAgICAgLy8gZHJvcCBkb3duIHRvIEhUTUw1IEF1ZGlvIHRvIGF2b2lkIE1peGVkIENvbnRlbnQgZXJyb3JzLlxuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgJiYgdXJsLnNsaWNlKDAsIDUpID09PSAnaHR0cDonKSB7XG4gICAgICAgIHNlbGYuX2h0bWw1ID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5fd2ViQXVkaW8gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IHNvdW5kIG9iamVjdCBhbmQgYWRkIGl0IHRvIHRoZSBwb29sLlxuICAgICAgbmV3IFNvdW5kKHNlbGYpO1xuXG4gICAgICAvLyBMb2FkIGFuZCBkZWNvZGUgdGhlIGF1ZGlvIGRhdGEgZm9yIHBsYXliYWNrLlxuICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgIGxvYWRCdWZmZXIoc2VsZik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQbGF5IGEgc291bmQgb3IgcmVzdW1lIHByZXZpb3VzIHBsYXliYWNrLlxuICAgICAqIEBwYXJhbSAge1N0cmluZy9OdW1iZXJ9IHNwcml0ZSAgIFNwcml0ZSBuYW1lIGZvciBzcHJpdGUgcGxheWJhY2sgb3Igc291bmQgaWQgdG8gY29udGludWUgcHJldmlvdXMuXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gaW50ZXJuYWwgSW50ZXJuYWwgVXNlOiB0cnVlIHByZXZlbnRzIGV2ZW50IGZpcmluZy5cbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgIFNvdW5kIElELlxuICAgICAqL1xuICAgIHBsYXk6IGZ1bmN0aW9uKHNwcml0ZSwgaW50ZXJuYWwpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBpZCA9IG51bGw7XG5cbiAgICAgIC8vIERldGVybWluZSBpZiBhIHNwcml0ZSwgc291bmQgaWQgb3Igbm90aGluZyB3YXMgcGFzc2VkXG4gICAgICBpZiAodHlwZW9mIHNwcml0ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWQgPSBzcHJpdGU7XG4gICAgICAgIHNwcml0ZSA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzcHJpdGUgPT09ICdzdHJpbmcnICYmIHNlbGYuX3N0YXRlID09PSAnbG9hZGVkJyAmJiAhc2VsZi5fc3ByaXRlW3Nwcml0ZV0pIHtcbiAgICAgICAgLy8gSWYgdGhlIHBhc3NlZCBzcHJpdGUgZG9lc24ndCBleGlzdCwgZG8gbm90aGluZy5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzcHJpdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgZGVmYXVsdCBzb3VuZCBzcHJpdGUgKHBsYXlzIHRoZSBmdWxsIGF1ZGlvIGxlbmd0aCkuXG4gICAgICAgIHNwcml0ZSA9ICdfX2RlZmF1bHQnO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgc2luZ2xlIHBhdXNlZCBzb3VuZCB0aGF0IGlzbid0IGVuZGVkLlxuICAgICAgICAvLyBJZiB0aGVyZSBpcywgcGxheSB0aGF0IHNvdW5kLiBJZiBub3QsIGNvbnRpbnVlIGFzIHVzdWFsLlxuICAgICAgICBpZiAoIXNlbGYuX3BsYXlMb2NrKSB7XG4gICAgICAgICAgdmFyIG51bSA9IDA7XG4gICAgICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX3NvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNlbGYuX3NvdW5kc1tpXS5fcGF1c2VkICYmICFzZWxmLl9zb3VuZHNbaV0uX2VuZGVkKSB7XG4gICAgICAgICAgICAgIG51bSsrO1xuICAgICAgICAgICAgICBpZCA9IHNlbGYuX3NvdW5kc1tpXS5faWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG51bSA9PT0gMSkge1xuICAgICAgICAgICAgc3ByaXRlID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBHZXQgdGhlIHNlbGVjdGVkIG5vZGUsIG9yIGdldCBvbmUgZnJvbSB0aGUgcG9vbC5cbiAgICAgIHZhciBzb3VuZCA9IGlkID8gc2VsZi5fc291bmRCeUlkKGlkKSA6IHNlbGYuX2luYWN0aXZlU291bmQoKTtcblxuICAgICAgLy8gSWYgdGhlIHNvdW5kIGRvZXNuJ3QgZXhpc3QsIGRvIG5vdGhpbmcuXG4gICAgICBpZiAoIXNvdW5kKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBTZWxlY3QgdGhlIHNwcml0ZSBkZWZpbml0aW9uLlxuICAgICAgaWYgKGlkICYmICFzcHJpdGUpIHtcbiAgICAgICAgc3ByaXRlID0gc291bmQuX3Nwcml0ZSB8fCAnX19kZWZhdWx0JztcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIHdlIG11c3Qgd2FpdCB0byBnZXQgdGhlIGF1ZGlvJ3MgZHVyYXRpb24uXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gd2FpdCB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcnVuIGludG8gcmFjZSBjb25kaXRpb25zIHdpdGhcbiAgICAgIC8vIHRoZSBvcmRlciBvZiBmdW5jdGlvbiBjYWxscy5cbiAgICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgICAgLy8gU2V0IHRoZSBzcHJpdGUgdmFsdWUgb24gdGhpcyBzb3VuZC5cbiAgICAgICAgc291bmQuX3Nwcml0ZSA9IHNwcml0ZTtcblxuICAgICAgICAvLyBNYXJrIHRoaXMgc291bmQgYXMgbm90IGVuZGVkIGluIGNhc2UgYW5vdGhlciBzb3VuZCBpcyBwbGF5ZWQgYmVmb3JlIHRoaXMgb25lIGxvYWRzLlxuICAgICAgICBzb3VuZC5fZW5kZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBBZGQgdGhlIHNvdW5kIHRvIHRoZSBxdWV1ZSB0byBiZSBwbGF5ZWQgb24gbG9hZC5cbiAgICAgICAgdmFyIHNvdW5kSWQgPSBzb3VuZC5faWQ7XG4gICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiAncGxheScsXG4gICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYucGxheShzb3VuZElkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzb3VuZElkO1xuICAgICAgfVxuXG4gICAgICAvLyBEb24ndCBwbGF5IHRoZSBzb3VuZCBpZiBhbiBpZCB3YXMgcGFzc2VkIGFuZCBpdCBpcyBhbHJlYWR5IHBsYXlpbmcuXG4gICAgICBpZiAoaWQgJiYgIXNvdW5kLl9wYXVzZWQpIHtcbiAgICAgICAgLy8gVHJpZ2dlciB0aGUgcGxheSBldmVudCwgaW4gb3JkZXIgdG8ga2VlcCBpdGVyYXRpbmcgdGhyb3VnaCBxdWV1ZS5cbiAgICAgICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgICAgIHNlbGYuX2xvYWRRdWV1ZSgncGxheScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNvdW5kLl9pZDtcbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSBzdXJlIHRoZSBBdWRpb0NvbnRleHQgaXNuJ3Qgc3VzcGVuZGVkLCBhbmQgcmVzdW1lIGl0IGlmIGl0IGlzLlxuICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgIEhvd2xlci5fYXV0b1Jlc3VtZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBEZXRlcm1pbmUgaG93IGxvbmcgdG8gcGxheSBmb3IgYW5kIHdoZXJlIHRvIHN0YXJ0IHBsYXlpbmcuXG4gICAgICB2YXIgc2VlayA9IE1hdGgubWF4KDAsIHNvdW5kLl9zZWVrID4gMCA/IHNvdW5kLl9zZWVrIDogc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMF0gLyAxMDAwKTtcbiAgICAgIHZhciBkdXJhdGlvbiA9IE1hdGgubWF4KDAsICgoc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMF0gKyBzZWxmLl9zcHJpdGVbc3ByaXRlXVsxXSkgLyAxMDAwKSAtIHNlZWspO1xuICAgICAgdmFyIHRpbWVvdXQgPSAoZHVyYXRpb24gKiAxMDAwKSAvIE1hdGguYWJzKHNvdW5kLl9yYXRlKTtcbiAgICAgIHZhciBzdGFydCA9IHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzBdIC8gMTAwMDtcbiAgICAgIHZhciBzdG9wID0gKHNlbGYuX3Nwcml0ZVtzcHJpdGVdWzBdICsgc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMV0pIC8gMTAwMDtcbiAgICAgIHNvdW5kLl9zcHJpdGUgPSBzcHJpdGU7XG5cbiAgICAgIC8vIE1hcmsgdGhlIHNvdW5kIGFzIGVuZGVkIGluc3RhbnRseSBzbyB0aGF0IHRoaXMgYXN5bmMgcGxheWJhY2tcbiAgICAgIC8vIGRvZXNuJ3QgZ2V0IGdyYWJiZWQgYnkgYW5vdGhlciBjYWxsIHRvIHBsYXkgd2hpbGUgdGhpcyBvbmUgd2FpdHMgdG8gc3RhcnQuXG4gICAgICBzb3VuZC5fZW5kZWQgPSBmYWxzZTtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBwYXJhbWV0ZXJzIG9mIHRoZSBzb3VuZC5cbiAgICAgIHZhciBzZXRQYXJhbXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc291bmQuX3BhdXNlZCA9IGZhbHNlO1xuICAgICAgICBzb3VuZC5fc2VlayA9IHNlZWs7XG4gICAgICAgIHNvdW5kLl9zdGFydCA9IHN0YXJ0O1xuICAgICAgICBzb3VuZC5fc3RvcCA9IHN0b3A7XG4gICAgICAgIHNvdW5kLl9sb29wID0gISEoc291bmQuX2xvb3AgfHwgc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMl0pO1xuICAgICAgfTtcblxuICAgICAgLy8gRW5kIHRoZSBzb3VuZCBpbnN0YW50bHkgaWYgc2VlayBpcyBhdCB0aGUgZW5kLlxuICAgICAgaWYgKHNlZWsgPj0gc3RvcCkge1xuICAgICAgICBzZWxmLl9lbmRlZChzb3VuZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQmVnaW4gdGhlIGFjdHVhbCBwbGF5YmFjay5cbiAgICAgIHZhciBub2RlID0gc291bmQuX25vZGU7XG4gICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgLy8gRmlyZSB0aGlzIHdoZW4gdGhlIHNvdW5kIGlzIHJlYWR5IHRvIHBsYXkgdG8gYmVnaW4gV2ViIEF1ZGlvIHBsYXliYWNrLlxuICAgICAgICB2YXIgcGxheVdlYkF1ZGlvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi5fcGxheUxvY2sgPSBmYWxzZTtcbiAgICAgICAgICBzZXRQYXJhbXMoKTtcbiAgICAgICAgICBzZWxmLl9yZWZyZXNoQnVmZmVyKHNvdW5kKTtcblxuICAgICAgICAgIC8vIFNldHVwIHRoZSBwbGF5YmFjayBwYXJhbXMuXG4gICAgICAgICAgdmFyIHZvbCA9IChzb3VuZC5fbXV0ZWQgfHwgc2VsZi5fbXV0ZWQpID8gMCA6IHNvdW5kLl92b2x1bWU7XG4gICAgICAgICAgbm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKHZvbCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgc291bmQuX3BsYXlTdGFydCA9IEhvd2xlci5jdHguY3VycmVudFRpbWU7XG5cbiAgICAgICAgICAvLyBQbGF5IHRoZSBzb3VuZCB1c2luZyB0aGUgc3VwcG9ydGVkIG1ldGhvZC5cbiAgICAgICAgICBpZiAodHlwZW9mIG5vZGUuYnVmZmVyU291cmNlLnN0YXJ0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgc291bmQuX2xvb3AgPyBub2RlLmJ1ZmZlclNvdXJjZS5ub3RlR3JhaW5PbigwLCBzZWVrLCA4NjQwMCkgOiBub2RlLmJ1ZmZlclNvdXJjZS5ub3RlR3JhaW5PbigwLCBzZWVrLCBkdXJhdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNvdW5kLl9sb29wID8gbm9kZS5idWZmZXJTb3VyY2Uuc3RhcnQoMCwgc2VlaywgODY0MDApIDogbm9kZS5idWZmZXJTb3VyY2Uuc3RhcnQoMCwgc2VlaywgZHVyYXRpb24pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFN0YXJ0IGEgbmV3IHRpbWVyIGlmIG5vbmUgaXMgcHJlc2VudC5cbiAgICAgICAgICBpZiAodGltZW91dCAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgIHNlbGYuX2VuZFRpbWVyc1tzb3VuZC5faWRdID0gc2V0VGltZW91dChzZWxmLl9lbmRlZC5iaW5kKHNlbGYsIHNvdW5kKSwgdGltZW91dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgc2VsZi5fZW1pdCgncGxheScsIHNvdW5kLl9pZCk7XG4gICAgICAgICAgICAgIHNlbGYuX2xvYWRRdWV1ZSgpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChIb3dsZXIuc3RhdGUgPT09ICdydW5uaW5nJyAmJiBIb3dsZXIuY3R4LnN0YXRlICE9PSAnaW50ZXJydXB0ZWQnKSB7XG4gICAgICAgICAgcGxheVdlYkF1ZGlvKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5fcGxheUxvY2sgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gV2FpdCBmb3IgdGhlIGF1ZGlvIGNvbnRleHQgdG8gcmVzdW1lIGJlZm9yZSBwbGF5aW5nLlxuICAgICAgICAgIHNlbGYub25jZSgncmVzdW1lJywgcGxheVdlYkF1ZGlvKTtcblxuICAgICAgICAgIC8vIENhbmNlbCB0aGUgZW5kIHRpbWVyLlxuICAgICAgICAgIHNlbGYuX2NsZWFyVGltZXIoc291bmQuX2lkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmlyZSB0aGlzIHdoZW4gdGhlIHNvdW5kIGlzIHJlYWR5IHRvIHBsYXkgdG8gYmVnaW4gSFRNTDUgQXVkaW8gcGxheWJhY2suXG4gICAgICAgIHZhciBwbGF5SHRtbDUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBub2RlLmN1cnJlbnRUaW1lID0gc2VlaztcbiAgICAgICAgICBub2RlLm11dGVkID0gc291bmQuX211dGVkIHx8IHNlbGYuX211dGVkIHx8IEhvd2xlci5fbXV0ZWQgfHwgbm9kZS5tdXRlZDtcbiAgICAgICAgICBub2RlLnZvbHVtZSA9IHNvdW5kLl92b2x1bWUgKiBIb3dsZXIudm9sdW1lKCk7XG4gICAgICAgICAgbm9kZS5wbGF5YmFja1JhdGUgPSBzb3VuZC5fcmF0ZTtcblxuICAgICAgICAgIC8vIFNvbWUgYnJvd3NlcnMgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGlzIGlzIGNhbGxlZCB3aXRob3V0IHVzZXIgaW50ZXJhY3Rpb24uXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBwbGF5ID0gbm9kZS5wbGF5KCk7XG5cbiAgICAgICAgICAgIC8vIFN1cHBvcnQgb2xkZXIgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHByb21pc2VzLCBhbmQgdGh1cyBkb24ndCBoYXZlIHRoaXMgaXNzdWUuXG4gICAgICAgICAgICBpZiAocGxheSAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgKHBsYXkgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHR5cGVvZiBwbGF5LnRoZW4gPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICAgIC8vIEltcGxlbWVudHMgYSBsb2NrIHRvIHByZXZlbnQgRE9NRXhjZXB0aW9uOiBUaGUgcGxheSgpIHJlcXVlc3Qgd2FzIGludGVycnVwdGVkIGJ5IGEgY2FsbCB0byBwYXVzZSgpLlxuICAgICAgICAgICAgICBzZWxmLl9wbGF5TG9jayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgLy8gU2V0IHBhcmFtIHZhbHVlcyBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgICAgc2V0UGFyYW1zKCk7XG5cbiAgICAgICAgICAgICAgLy8gUmVsZWFzZXMgdGhlIGxvY2sgYW5kIGV4ZWN1dGVzIHF1ZXVlZCBhY3Rpb25zLlxuICAgICAgICAgICAgICBwbGF5XG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLl9wbGF5TG9jayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgbm9kZS5fdW5sb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9lbWl0KCdwbGF5Jywgc291bmQuX2lkKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2xvYWRRdWV1ZSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgc2VsZi5fcGxheUxvY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3BsYXllcnJvcicsIHNvdW5kLl9pZCwgJ1BsYXliYWNrIHdhcyB1bmFibGUgdG8gc3RhcnQuIFRoaXMgaXMgbW9zdCBjb21tb25seSBhbiBpc3N1ZSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ29uIG1vYmlsZSBkZXZpY2VzIGFuZCBDaHJvbWUgd2hlcmUgcGxheWJhY2sgd2FzIG5vdCB3aXRoaW4gYSB1c2VyIGludGVyYWN0aW9uLicpO1xuXG4gICAgICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgZW5kZWQgYW5kIHBhdXNlZCB2YWx1ZXMuXG4gICAgICAgICAgICAgICAgICBzb3VuZC5fZW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgc291bmQuX3BhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgICAgICAgICBzZWxmLl9wbGF5TG9jayA9IGZhbHNlO1xuICAgICAgICAgICAgICBzZXRQYXJhbXMoKTtcbiAgICAgICAgICAgICAgc2VsZi5fZW1pdCgncGxheScsIHNvdW5kLl9pZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldHRpbmcgcmF0ZSBiZWZvcmUgcGxheWluZyB3b24ndCB3b3JrIGluIElFLCBzbyB3ZSBzZXQgaXQgYWdhaW4gaGVyZS5cbiAgICAgICAgICAgIG5vZGUucGxheWJhY2tSYXRlID0gc291bmQuX3JhdGU7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBub2RlIGlzIHN0aWxsIHBhdXNlZCwgdGhlbiB3ZSBjYW4gYXNzdW1lIHRoZXJlIHdhcyBhIHBsYXliYWNrIGlzc3VlLlxuICAgICAgICAgICAgaWYgKG5vZGUucGF1c2VkKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2VtaXQoJ3BsYXllcnJvcicsIHNvdW5kLl9pZCwgJ1BsYXliYWNrIHdhcyB1bmFibGUgdG8gc3RhcnQuIFRoaXMgaXMgbW9zdCBjb21tb25seSBhbiBpc3N1ZSAnICtcbiAgICAgICAgICAgICAgICAnb24gbW9iaWxlIGRldmljZXMgYW5kIENocm9tZSB3aGVyZSBwbGF5YmFjayB3YXMgbm90IHdpdGhpbiBhIHVzZXIgaW50ZXJhY3Rpb24uJyk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0dXAgdGhlIGVuZCB0aW1lciBvbiBzcHJpdGVzIG9yIGxpc3RlbiBmb3IgdGhlIGVuZGVkIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHNwcml0ZSAhPT0gJ19fZGVmYXVsdCcgfHwgc291bmQuX2xvb3ApIHtcbiAgICAgICAgICAgICAgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0gPSBzZXRUaW1lb3V0KHNlbGYuX2VuZGVkLmJpbmQoc2VsZiwgc291bmQpLCB0aW1lb3V0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGYuX2VuZFRpbWVyc1tzb3VuZC5faWRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gRmlyZSBlbmRlZCBvbiB0aGlzIGF1ZGlvIG5vZGUuXG4gICAgICAgICAgICAgICAgc2VsZi5fZW5kZWQoc291bmQpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgdGhpcyBsaXN0ZW5lci5cbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgc2VsZi5fZW5kVGltZXJzW3NvdW5kLl9pZF0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIHNlbGYuX2VuZFRpbWVyc1tzb3VuZC5faWRdLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzZWxmLl9lbWl0KCdwbGF5ZXJyb3InLCBzb3VuZC5faWQsIGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgc3RyZWFtaW5nIGF1ZGlvLCBtYWtlIHN1cmUgdGhlIHNyYyBpcyBzZXQgYW5kIGxvYWQgYWdhaW4uXG4gICAgICAgIGlmIChub2RlLnNyYyA9PT0gJ2RhdGE6YXVkaW8vd2F2O2Jhc2U2NCxVa2xHUmlnQUFBQlhRVlpGWm0xMElCSUFBQUFCQUFFQVJLd0FBSWhZQVFBQ0FCQUFBQUJrWVhSaEFnQUFBQUVBJykge1xuICAgICAgICAgIG5vZGUuc3JjID0gc2VsZi5fc3JjO1xuICAgICAgICAgIG5vZGUubG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGxheSBpbW1lZGlhdGVseSBpZiByZWFkeSwgb3Igd2FpdCBmb3IgdGhlICdjYW5wbGF5dGhyb3VnaCdlIHZlbnQuXG4gICAgICAgIHZhciBsb2FkZWROb1JlYWR5U3RhdGUgPSAod2luZG93ICYmIHdpbmRvdy5lamVjdGEpIHx8ICghbm9kZS5yZWFkeVN0YXRlICYmIEhvd2xlci5fbmF2aWdhdG9yLmlzQ29jb29uSlMpO1xuICAgICAgICBpZiAobm9kZS5yZWFkeVN0YXRlID49IDMgfHwgbG9hZGVkTm9SZWFkeVN0YXRlKSB7XG4gICAgICAgICAgcGxheUh0bWw1KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5fcGxheUxvY2sgPSB0cnVlO1xuICAgICAgICAgIHNlbGYuX3N0YXRlID0gJ2xvYWRpbmcnO1xuXG4gICAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLl9zdGF0ZSA9ICdsb2FkZWQnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBCZWdpbiBwbGF5YmFjay5cbiAgICAgICAgICAgIHBsYXlIdG1sNSgpO1xuXG4gICAgICAgICAgICAvLyBDbGVhciB0aGlzIGxpc3RlbmVyLlxuICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKEhvd2xlci5fY2FuUGxheUV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKEhvd2xlci5fY2FuUGxheUV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuXG4gICAgICAgICAgLy8gQ2FuY2VsIHRoZSBlbmQgdGltZXIuXG4gICAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihzb3VuZC5faWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzb3VuZC5faWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBhdXNlIHBsYXliYWNrIGFuZCBzYXZlIGN1cnJlbnQgcG9zaXRpb24uXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCBUaGUgc291bmQgSUQgKGVtcHR5IHRvIHBhdXNlIGFsbCBpbiBncm91cCkuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBwYXVzZTogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQgb3IgYSBwbGF5KCkgcHJvbWlzZSBpcyBwZW5kaW5nLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gcGF1c2Ugd2hlbiBjYXBhYmxlLlxuICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJyB8fCBzZWxmLl9wbGF5TG9jaykge1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ3BhdXNlJyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5wYXVzZShpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gaWQgaXMgcGFzc2VkLCBnZXQgYWxsIElEJ3MgdG8gYmUgcGF1c2VkLlxuICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcblxuICAgICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBDbGVhciB0aGUgZW5kIHRpbWVyLlxuICAgICAgICBzZWxmLl9jbGVhclRpbWVyKGlkc1tpXSk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgICAgaWYgKHNvdW5kICYmICFzb3VuZC5fcGF1c2VkKSB7XG4gICAgICAgICAgLy8gUmVzZXQgdGhlIHNlZWsgcG9zaXRpb24uXG4gICAgICAgICAgc291bmQuX3NlZWsgPSBzZWxmLnNlZWsoaWRzW2ldKTtcbiAgICAgICAgICBzb3VuZC5fcmF0ZVNlZWsgPSAwO1xuICAgICAgICAgIHNvdW5kLl9wYXVzZWQgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gU3RvcCBjdXJyZW50bHkgcnVubmluZyBmYWRlcy5cbiAgICAgICAgICBzZWxmLl9zdG9wRmFkZShpZHNbaV0pO1xuXG4gICAgICAgICAgaWYgKHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBzb3VuZCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgICAgICAgICAgICBpZiAoIXNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2Uuc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2Uubm90ZU9mZigwKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2Uuc3RvcCgwKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSBidWZmZXIgc291cmNlLlxuICAgICAgICAgICAgICBzZWxmLl9jbGVhbkJ1ZmZlcihzb3VuZC5fbm9kZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc05hTihzb3VuZC5fbm9kZS5kdXJhdGlvbikgfHwgc291bmQuX25vZGUuZHVyYXRpb24gPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSB0aGUgcGF1c2UgZXZlbnQsIHVubGVzcyBgdHJ1ZWAgaXMgcGFzc2VkIGFzIHRoZSAybmQgYXJndW1lbnQuXG4gICAgICAgIGlmICghYXJndW1lbnRzWzFdKSB7XG4gICAgICAgICAgc2VsZi5fZW1pdCgncGF1c2UnLCBzb3VuZCA/IHNvdW5kLl9pZCA6IG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdG9wIHBsYXliYWNrIGFuZCByZXNldCB0byBzdGFydC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFRoZSBzb3VuZCBJRCAoZW1wdHkgdG8gc3RvcCBhbGwgaW4gZ3JvdXApLlxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IGludGVybmFsIEludGVybmFsIFVzZTogdHJ1ZSBwcmV2ZW50cyBldmVudCBmaXJpbmcuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbihpZCwgaW50ZXJuYWwpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBzdG9wIHdoZW4gY2FwYWJsZS5cbiAgICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcgfHwgc2VsZi5fcGxheUxvY2spIHtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdzdG9wJyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5zdG9wKGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBpZCBpcyBwYXNzZWQsIGdldCBhbGwgSUQncyB0byBiZSBzdG9wcGVkLlxuICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcblxuICAgICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBDbGVhciB0aGUgZW5kIHRpbWVyLlxuICAgICAgICBzZWxmLl9jbGVhclRpbWVyKGlkc1tpXSk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgICAgLy8gUmVzZXQgdGhlIHNlZWsgcG9zaXRpb24uXG4gICAgICAgICAgc291bmQuX3NlZWsgPSBzb3VuZC5fc3RhcnQgfHwgMDtcbiAgICAgICAgICBzb3VuZC5fcmF0ZVNlZWsgPSAwO1xuICAgICAgICAgIHNvdW5kLl9wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgIHNvdW5kLl9lbmRlZCA9IHRydWU7XG5cbiAgICAgICAgICAvLyBTdG9wIGN1cnJlbnRseSBydW5uaW5nIGZhZGVzLlxuICAgICAgICAgIHNlbGYuX3N0b3BGYWRlKGlkc1tpXSk7XG5cbiAgICAgICAgICBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHNvdW5kJ3MgQXVkaW9CdWZmZXJTb3VyY2VOb2RlIGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICAgICAgICAgIGlmIChzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5zdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLm5vdGVPZmYoMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5zdG9wKDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSBidWZmZXIgc291cmNlLlxuICAgICAgICAgICAgICAgIHNlbGYuX2NsZWFuQnVmZmVyKHNvdW5kLl9ub2RlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghaXNOYU4oc291bmQuX25vZGUuZHVyYXRpb24pIHx8IHNvdW5kLl9ub2RlLmR1cmF0aW9uID09PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5jdXJyZW50VGltZSA9IHNvdW5kLl9zdGFydCB8fCAwO1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5wYXVzZSgpO1xuXG4gICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBsaXZlIHN0cmVhbSwgc3RvcCBkb3dubG9hZCBvbmNlIHRoZSBhdWRpbyBpcyBzdG9wcGVkLlxuICAgICAgICAgICAgICBpZiAoc291bmQuX25vZGUuZHVyYXRpb24gPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fY2xlYXJTb3VuZChzb3VuZC5fbm9kZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWludGVybmFsKSB7XG4gICAgICAgICAgICBzZWxmLl9lbWl0KCdzdG9wJywgc291bmQuX2lkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE11dGUvdW5tdXRlIGEgc2luZ2xlIHNvdW5kIG9yIGFsbCBzb3VuZHMgaW4gdGhpcyBIb3dsIGdyb3VwLlxuICAgICAqIEBwYXJhbSAge0Jvb2xlYW59IG11dGVkIFNldCB0byB0cnVlIHRvIG11dGUgYW5kIGZhbHNlIHRvIHVubXV0ZS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkICAgIFRoZSBzb3VuZCBJRCB0byB1cGRhdGUgKG9taXQgdG8gbXV0ZS91bm11dGUgYWxsKS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIG11dGU6IGZ1bmN0aW9uKG11dGVkLCBpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIG11dGUgd2hlbiBjYXBhYmxlLlxuICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJ3x8IHNlbGYuX3BsYXlMb2NrKSB7XG4gICAgICAgIHNlbGYuX3F1ZXVlLnB1c2goe1xuICAgICAgICAgIGV2ZW50OiAnbXV0ZScsXG4gICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYubXV0ZShtdXRlZCwgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFwcGx5aW5nIG11dGUvdW5tdXRlIHRvIGFsbCBzb3VuZHMsIHVwZGF0ZSB0aGUgZ3JvdXAncyB2YWx1ZS5cbiAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbXV0ZWQgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHNlbGYuX211dGVkID0gbXV0ZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuX211dGVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIGlkIGlzIHBhc3NlZCwgZ2V0IGFsbCBJRCdzIHRvIGJlIG11dGVkLlxuICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcblxuICAgICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBHZXQgdGhlIHNvdW5kLlxuICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgICBzb3VuZC5fbXV0ZWQgPSBtdXRlZDtcblxuICAgICAgICAgIC8vIENhbmNlbCBhY3RpdmUgZmFkZSBhbmQgc2V0IHRoZSB2b2x1bWUgdG8gdGhlIGVuZCB2YWx1ZS5cbiAgICAgICAgICBpZiAoc291bmQuX2ludGVydmFsKSB7XG4gICAgICAgICAgICBzZWxmLl9zdG9wRmFkZShzb3VuZC5faWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiBzb3VuZC5fbm9kZSkge1xuICAgICAgICAgICAgc291bmQuX25vZGUuZ2Fpbi5zZXRWYWx1ZUF0VGltZShtdXRlZCA/IDAgOiBzb3VuZC5fdm9sdW1lLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5tdXRlZCA9IEhvd2xlci5fbXV0ZWQgPyB0cnVlIDogbXV0ZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5fZW1pdCgnbXV0ZScsIHNvdW5kLl9pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldC9zZXQgdGhlIHZvbHVtZSBvZiB0aGlzIHNvdW5kIG9yIG9mIHRoZSBIb3dsIGdyb3VwLiBUaGlzIG1ldGhvZCBjYW4gb3B0aW9uYWxseSB0YWtlIDAsIDEgb3IgMiBhcmd1bWVudHMuXG4gICAgICogICB2b2x1bWUoKSAtPiBSZXR1cm5zIHRoZSBncm91cCdzIHZvbHVtZSB2YWx1ZS5cbiAgICAgKiAgIHZvbHVtZShpZCkgLT4gUmV0dXJucyB0aGUgc291bmQgaWQncyBjdXJyZW50IHZvbHVtZS5cbiAgICAgKiAgIHZvbHVtZSh2b2wpIC0+IFNldHMgdGhlIHZvbHVtZSBvZiBhbGwgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICAgKiAgIHZvbHVtZSh2b2wsIGlkKSAtPiBTZXRzIHRoZSB2b2x1bWUgb2YgcGFzc2VkIHNvdW5kIGlkLlxuICAgICAqIEByZXR1cm4ge0hvd2wvTnVtYmVyfSBSZXR1cm5zIHNlbGYgb3IgY3VycmVudCB2b2x1bWUuXG4gICAgICovXG4gICAgdm9sdW1lOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdmFyIHZvbCwgaWQ7XG5cbiAgICAgIC8vIERldGVybWluZSB0aGUgdmFsdWVzIGJhc2VkIG9uIGFyZ3VtZW50cy5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBSZXR1cm4gdGhlIHZhbHVlIG9mIHRoZSBncm91cHMnIHZvbHVtZS5cbiAgICAgICAgcmV0dXJuIHNlbGYuX3ZvbHVtZTtcbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEgfHwgYXJncy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIGFyZ3NbMV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIEZpcnN0IGNoZWNrIGlmIHRoaXMgaXMgYW4gSUQsIGFuZCBpZiBub3QsIGFzc3VtZSBpdCBpcyBhIG5ldyB2b2x1bWUuXG4gICAgICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcygpO1xuICAgICAgICB2YXIgaW5kZXggPSBpZHMuaW5kZXhPZihhcmdzWzBdKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMF0sIDEwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2b2wgPSBwYXJzZUZsb2F0KGFyZ3NbMF0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID49IDIpIHtcbiAgICAgICAgdm9sID0gcGFyc2VGbG9hdChhcmdzWzBdKTtcbiAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgdm9sdW1lIG9yIHJldHVybiB0aGUgY3VycmVudCB2b2x1bWUuXG4gICAgICB2YXIgc291bmQ7XG4gICAgICBpZiAodHlwZW9mIHZvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdm9sID49IDAgJiYgdm9sIDw9IDEpIHtcbiAgICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBjaGFuZ2Ugdm9sdW1lIHdoZW4gY2FwYWJsZS5cbiAgICAgICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJ3x8IHNlbGYuX3BsYXlMb2NrKSB7XG4gICAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgICBldmVudDogJ3ZvbHVtZScsXG4gICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBzZWxmLnZvbHVtZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBncm91cCB2b2x1bWUuXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgc2VsZi5fdm9sdW1lID0gdm9sO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIG9uZSBvciBhbGwgdm9sdW1lcy5cbiAgICAgICAgaWQgPSBzZWxmLl9nZXRTb3VuZElkcyhpZCk7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICAgICAgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRbaV0pO1xuXG4gICAgICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgICAgICBzb3VuZC5fdm9sdW1lID0gdm9sO1xuXG4gICAgICAgICAgICAvLyBTdG9wIGN1cnJlbnRseSBydW5uaW5nIGZhZGVzLlxuICAgICAgICAgICAgaWYgKCFhcmdzWzJdKSB7XG4gICAgICAgICAgICAgIHNlbGYuX3N0b3BGYWRlKGlkW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvICYmIHNvdW5kLl9ub2RlICYmICFzb3VuZC5fbXV0ZWQpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUuZ2Fpbi5zZXRWYWx1ZUF0VGltZSh2b2wsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzb3VuZC5fbm9kZSAmJiAhc291bmQuX211dGVkKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLnZvbHVtZSA9IHZvbCAqIEhvd2xlci52b2x1bWUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5fZW1pdCgndm9sdW1lJywgc291bmQuX2lkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdW5kID0gaWQgPyBzZWxmLl9zb3VuZEJ5SWQoaWQpIDogc2VsZi5fc291bmRzWzBdO1xuICAgICAgICByZXR1cm4gc291bmQgPyBzb3VuZC5fdm9sdW1lIDogMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEZhZGUgYSBjdXJyZW50bHkgcGxheWluZyBzb3VuZCBiZXR3ZWVuIHR3byB2b2x1bWVzIChpZiBubyBpZCBpcyBwYXNzZWQsIGFsbCBzb3VuZHMgd2lsbCBmYWRlKS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGZyb20gVGhlIHZhbHVlIHRvIGZhZGUgZnJvbSAoMC4wIHRvIDEuMCkuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0byAgIFRoZSB2b2x1bWUgdG8gZmFkZSB0byAoMC4wIHRvIDEuMCkuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBsZW4gIFRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIGZhZGUuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCAgIFRoZSBzb3VuZCBpZCAob21pdCB0byBmYWRlIGFsbCBzb3VuZHMpLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgZmFkZTogZnVuY3Rpb24oZnJvbSwgdG8sIGxlbiwgaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBmYWRlIHdoZW4gY2FwYWJsZS5cbiAgICAgIGlmIChzZWxmLl9zdGF0ZSAhPT0gJ2xvYWRlZCcgfHwgc2VsZi5fcGxheUxvY2spIHtcbiAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdmYWRlJyxcbiAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5mYWRlKGZyb20sIHRvLCBsZW4sIGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIHRvL2Zyb20vbGVuIHZhbHVlcyBhcmUgbnVtYmVycy5cbiAgICAgIGZyb20gPSBNYXRoLm1pbihNYXRoLm1heCgwLCBwYXJzZUZsb2F0KGZyb20pKSwgMSk7XG4gICAgICB0byA9IE1hdGgubWluKE1hdGgubWF4KDAsIHBhcnNlRmxvYXQodG8pKSwgMSk7XG4gICAgICBsZW4gPSBwYXJzZUZsb2F0KGxlbik7XG5cbiAgICAgIC8vIFNldCB0aGUgdm9sdW1lIHRvIHRoZSBzdGFydCBwb3NpdGlvbi5cbiAgICAgIHNlbGYudm9sdW1lKGZyb20sIGlkKTtcblxuICAgICAgLy8gRmFkZSB0aGUgdm9sdW1lIG9mIG9uZSBvciBhbGwgc291bmRzLlxuICAgICAgdmFyIGlkcyA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcbiAgICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgICAgdmFyIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgbGluZWFyIGZhZGUgb3IgZmFsbCBiYWNrIHRvIHRpbWVvdXRzIHdpdGggSFRNTDUgQXVkaW8uXG4gICAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICAgIC8vIFN0b3AgdGhlIHByZXZpb3VzIGZhZGUgaWYgbm8gc3ByaXRlIGlzIGJlaW5nIHVzZWQgKG90aGVyd2lzZSwgdm9sdW1lIGhhbmRsZXMgdGhpcykuXG4gICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgc2VsZi5fc3RvcEZhZGUoaWRzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiB3ZSBhcmUgdXNpbmcgV2ViIEF1ZGlvLCBsZXQgdGhlIG5hdGl2ZSBtZXRob2RzIGRvIHRoZSBhY3R1YWwgZmFkZS5cbiAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgIXNvdW5kLl9tdXRlZCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gSG93bGVyLmN0eC5jdXJyZW50VGltZTtcbiAgICAgICAgICAgIHZhciBlbmQgPSBjdXJyZW50VGltZSArIChsZW4gLyAxMDAwKTtcbiAgICAgICAgICAgIHNvdW5kLl92b2x1bWUgPSBmcm9tO1xuICAgICAgICAgICAgc291bmQuX25vZGUuZ2Fpbi5zZXRWYWx1ZUF0VGltZShmcm9tLCBjdXJyZW50VGltZSk7XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHRvLCBlbmQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX3N0YXJ0RmFkZUludGVydmFsKHNvdW5kLCBmcm9tLCB0bywgbGVuLCBpZHNbaV0sIHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIGludGVybmFsIGludGVydmFsIHRvIGZhZGUgYSBzb3VuZC5cbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IHNvdW5kIFJlZmVyZW5jZSB0byBzb3VuZCB0byBmYWRlLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gZnJvbSBUaGUgdmFsdWUgdG8gZmFkZSBmcm9tICgwLjAgdG8gMS4wKS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRvICAgVGhlIHZvbHVtZSB0byBmYWRlIHRvICgwLjAgdG8gMS4wKS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGxlbiAgVGltZSBpbiBtaWxsaXNlY29uZHMgdG8gZmFkZS5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkICAgVGhlIHNvdW5kIGlkIHRvIGZhZGUuXG4gICAgICogQHBhcmFtICB7Qm9vbGVhbn0gaXNHcm91cCAgIElmIHRydWUsIHNldCB0aGUgdm9sdW1lIG9uIHRoZSBncm91cC5cbiAgICAgKi9cbiAgICBfc3RhcnRGYWRlSW50ZXJ2YWw6IGZ1bmN0aW9uKHNvdW5kLCBmcm9tLCB0bywgbGVuLCBpZCwgaXNHcm91cCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHZvbCA9IGZyb207XG4gICAgICB2YXIgZGlmZiA9IHRvIC0gZnJvbTtcbiAgICAgIHZhciBzdGVwcyA9IE1hdGguYWJzKGRpZmYgLyAwLjAxKTtcbiAgICAgIHZhciBzdGVwTGVuID0gTWF0aC5tYXgoNCwgKHN0ZXBzID4gMCkgPyBsZW4gLyBzdGVwcyA6IGxlbik7XG4gICAgICB2YXIgbGFzdFRpY2sgPSBEYXRlLm5vdygpO1xuXG4gICAgICAvLyBTdG9yZSB0aGUgdmFsdWUgYmVpbmcgZmFkZWQgdG8uXG4gICAgICBzb3VuZC5fZmFkZVRvID0gdG87XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgdm9sdW1lIHZhbHVlIG9uIGVhY2ggaW50ZXJ2YWwgdGljay5cbiAgICAgIHNvdW5kLl9pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHZvbHVtZSBiYXNlZCBvbiB0aGUgdGltZSBzaW5jZSB0aGUgbGFzdCB0aWNrLlxuICAgICAgICB2YXIgdGljayA9IChEYXRlLm5vdygpIC0gbGFzdFRpY2spIC8gbGVuO1xuICAgICAgICBsYXN0VGljayA9IERhdGUubm93KCk7XG4gICAgICAgIHZvbCArPSBkaWZmICogdGljaztcblxuICAgICAgICAvLyBSb3VuZCB0byB3aXRoaW4gMiBkZWNpbWFsIHBvaW50cy5cbiAgICAgICAgdm9sID0gTWF0aC5yb3VuZCh2b2wgKiAxMDApIC8gMTAwO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdm9sdW1lIGlzIGluIHRoZSByaWdodCBib3VuZHMuXG4gICAgICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgIHZvbCA9IE1hdGgubWF4KHRvLCB2b2wpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZvbCA9IE1hdGgubWluKHRvLCB2b2wpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hhbmdlIHRoZSB2b2x1bWUuXG4gICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgIHNvdW5kLl92b2x1bWUgPSB2b2w7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi52b2x1bWUodm9sLCBzb3VuZC5faWQsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBncm91cCdzIHZvbHVtZS5cbiAgICAgICAgaWYgKGlzR3JvdXApIHtcbiAgICAgICAgICBzZWxmLl92b2x1bWUgPSB2b2w7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXaGVuIHRoZSBmYWRlIGlzIGNvbXBsZXRlLCBzdG9wIGl0IGFuZCBmaXJlIGV2ZW50LlxuICAgICAgICBpZiAoKHRvIDwgZnJvbSAmJiB2b2wgPD0gdG8pIHx8ICh0byA+IGZyb20gJiYgdm9sID49IHRvKSkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc291bmQuX2ludGVydmFsKTtcbiAgICAgICAgICBzb3VuZC5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgIHNvdW5kLl9mYWRlVG8gPSBudWxsO1xuICAgICAgICAgIHNlbGYudm9sdW1lKHRvLCBzb3VuZC5faWQpO1xuICAgICAgICAgIHNlbGYuX2VtaXQoJ2ZhZGUnLCBzb3VuZC5faWQpO1xuICAgICAgICB9XG4gICAgICB9LCBzdGVwTGVuKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgbWV0aG9kIHRoYXQgc3RvcHMgdGhlIGN1cnJlbnRseSBwbGF5aW5nIGZhZGUgd2hlblxuICAgICAqIGEgbmV3IGZhZGUgc3RhcnRzLCB2b2x1bWUgaXMgY2hhbmdlZCBvciB0aGUgc291bmQgaXMgc3RvcHBlZC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFRoZSBzb3VuZCBpZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9zdG9wRmFkZTogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZCk7XG5cbiAgICAgIGlmIChzb3VuZCAmJiBzb3VuZC5faW50ZXJ2YWwpIHtcbiAgICAgICAgaWYgKHNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgc291bmQuX25vZGUuZ2Fpbi5jYW5jZWxTY2hlZHVsZWRWYWx1ZXMoSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhckludGVydmFsKHNvdW5kLl9pbnRlcnZhbCk7XG4gICAgICAgIHNvdW5kLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHNlbGYudm9sdW1lKHNvdW5kLl9mYWRlVG8sIGlkKTtcbiAgICAgICAgc291bmQuX2ZhZGVUbyA9IG51bGw7XG4gICAgICAgIHNlbGYuX2VtaXQoJ2ZhZGUnLCBpZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQvc2V0IHRoZSBsb29wIHBhcmFtZXRlciBvbiBhIHNvdW5kLiBUaGlzIG1ldGhvZCBjYW4gb3B0aW9uYWxseSB0YWtlIDAsIDEgb3IgMiBhcmd1bWVudHMuXG4gICAgICogICBsb29wKCkgLT4gUmV0dXJucyB0aGUgZ3JvdXAncyBsb29wIHZhbHVlLlxuICAgICAqICAgbG9vcChpZCkgLT4gUmV0dXJucyB0aGUgc291bmQgaWQncyBsb29wIHZhbHVlLlxuICAgICAqICAgbG9vcChsb29wKSAtPiBTZXRzIHRoZSBsb29wIHZhbHVlIGZvciBhbGwgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICAgKiAgIGxvb3AobG9vcCwgaWQpIC0+IFNldHMgdGhlIGxvb3AgdmFsdWUgb2YgcGFzc2VkIHNvdW5kIGlkLlxuICAgICAqIEByZXR1cm4ge0hvd2wvQm9vbGVhbn0gUmV0dXJucyBzZWxmIG9yIGN1cnJlbnQgbG9vcCB2YWx1ZS5cbiAgICAgKi9cbiAgICBsb29wOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdmFyIGxvb3AsIGlkLCBzb3VuZDtcblxuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSB2YWx1ZXMgZm9yIGxvb3AgYW5kIGlkLlxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIFJldHVybiB0aGUgZ3JvdSdzIGxvb3AgdmFsdWUuXG4gICAgICAgIHJldHVybiBzZWxmLl9sb29wO1xuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdib29sZWFuJykge1xuICAgICAgICAgIGxvb3AgPSBhcmdzWzBdO1xuICAgICAgICAgIHNlbGYuX2xvb3AgPSBsb29wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJldHVybiB0aGlzIHNvdW5kJ3MgbG9vcCB2YWx1ZS5cbiAgICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChwYXJzZUludChhcmdzWzBdLCAxMCkpO1xuICAgICAgICAgIHJldHVybiBzb3VuZCA/IHNvdW5kLl9sb29wIDogZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgbG9vcCA9IGFyZ3NbMF07XG4gICAgICAgIGlkID0gcGFyc2VJbnQoYXJnc1sxXSwgMTApO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBpZCBpcyBwYXNzZWQsIGdldCBhbGwgSUQncyB0byBiZSBsb29wZWQuXG4gICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgICAgZm9yICh2YXIgaT0wOyBpPGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZHNbaV0pO1xuXG4gICAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICAgIHNvdW5kLl9sb29wID0gbG9vcDtcbiAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgc291bmQuX25vZGUgJiYgc291bmQuX25vZGUuYnVmZmVyU291cmNlKSB7XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UubG9vcCA9IGxvb3A7XG4gICAgICAgICAgICBpZiAobG9vcCkge1xuICAgICAgICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UubG9vcFN0YXJ0ID0gc291bmQuX3N0YXJ0IHx8IDA7XG4gICAgICAgICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5sb29wRW5kID0gc291bmQuX3N0b3A7XG5cbiAgICAgICAgICAgICAgLy8gSWYgcGxheWluZywgcmVzdGFydCBwbGF5YmFjayB0byBlbnN1cmUgbG9vcGluZyB1cGRhdGVzLlxuICAgICAgICAgICAgICBpZiAoc2VsZi5wbGF5aW5nKGlkc1tpXSkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnBhdXNlKGlkc1tpXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5KGlkc1tpXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldC9zZXQgdGhlIHBsYXliYWNrIHJhdGUgb2YgYSBzb3VuZC4gVGhpcyBtZXRob2QgY2FuIG9wdGlvbmFsbHkgdGFrZSAwLCAxIG9yIDIgYXJndW1lbnRzLlxuICAgICAqICAgcmF0ZSgpIC0+IFJldHVybnMgdGhlIGZpcnN0IHNvdW5kIG5vZGUncyBjdXJyZW50IHBsYXliYWNrIHJhdGUuXG4gICAgICogICByYXRlKGlkKSAtPiBSZXR1cm5zIHRoZSBzb3VuZCBpZCdzIGN1cnJlbnQgcGxheWJhY2sgcmF0ZS5cbiAgICAgKiAgIHJhdGUocmF0ZSkgLT4gU2V0cyB0aGUgcGxheWJhY2sgcmF0ZSBvZiBhbGwgc291bmRzIGluIHRoaXMgSG93bCBncm91cC5cbiAgICAgKiAgIHJhdGUocmF0ZSwgaWQpIC0+IFNldHMgdGhlIHBsYXliYWNrIHJhdGUgb2YgcGFzc2VkIHNvdW5kIGlkLlxuICAgICAqIEByZXR1cm4ge0hvd2wvTnVtYmVyfSBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgcGxheWJhY2sgcmF0ZS5cbiAgICAgKi9cbiAgICByYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdmFyIHJhdGUsIGlkO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIHZhbHVlcyBiYXNlZCBvbiBhcmd1bWVudHMuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gV2Ugd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IHJhdGUgb2YgdGhlIGZpcnN0IG5vZGUuXG4gICAgICAgIGlkID0gc2VsZi5fc291bmRzWzBdLl9pZDtcbiAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gRmlyc3QgY2hlY2sgaWYgdGhpcyBpcyBhbiBJRCwgYW5kIGlmIG5vdCwgYXNzdW1lIGl0IGlzIGEgbmV3IHJhdGUgdmFsdWUuXG4gICAgICAgIHZhciBpZHMgPSBzZWxmLl9nZXRTb3VuZElkcygpO1xuICAgICAgICB2YXIgaW5kZXggPSBpZHMuaW5kZXhPZihhcmdzWzBdKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMF0sIDEwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByYXRlID0gcGFyc2VGbG9hdChhcmdzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICByYXRlID0gcGFyc2VGbG9hdChhcmdzWzBdKTtcbiAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgcGxheWJhY2sgcmF0ZSBvciByZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAgICB2YXIgc291bmQ7XG4gICAgICBpZiAodHlwZW9mIHJhdGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gY2hhbmdlIHBsYXliYWNrIHJhdGUgd2hlbiBjYXBhYmxlLlxuICAgICAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnIHx8IHNlbGYuX3BsYXlMb2NrKSB7XG4gICAgICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgICAgICBldmVudDogJ3JhdGUnLFxuICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgc2VsZi5yYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGhlIGdyb3VwIHJhdGUuXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgc2VsZi5fcmF0ZSA9IHJhdGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgb25lIG9yIGFsbCB2b2x1bWVzLlxuICAgICAgICBpZCA9IHNlbGYuX2dldFNvdW5kSWRzKGlkKTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZFtpXSk7XG5cbiAgICAgICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgICAgIC8vIEtlZXAgdHJhY2sgb2Ygb3VyIHBvc2l0aW9uIHdoZW4gdGhlIHJhdGUgY2hhbmdlZCBhbmQgdXBkYXRlIHRoZSBwbGF5YmFja1xuICAgICAgICAgICAgLy8gc3RhcnQgcG9zaXRpb24gc28gd2UgY2FuIHByb3Blcmx5IGFkanVzdCB0aGUgc2VlayBwb3NpdGlvbiBmb3IgdGltZSBlbGFwc2VkLlxuICAgICAgICAgICAgaWYgKHNlbGYucGxheWluZyhpZFtpXSkpIHtcbiAgICAgICAgICAgICAgc291bmQuX3JhdGVTZWVrID0gc2VsZi5zZWVrKGlkW2ldKTtcbiAgICAgICAgICAgICAgc291bmQuX3BsYXlTdGFydCA9IHNlbGYuX3dlYkF1ZGlvID8gSG93bGVyLmN0eC5jdXJyZW50VGltZSA6IHNvdW5kLl9wbGF5U3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3VuZC5fcmF0ZSA9IHJhdGU7XG5cbiAgICAgICAgICAgIC8vIENoYW5nZSB0aGUgcGxheWJhY2sgcmF0ZS5cbiAgICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiBzb3VuZC5fbm9kZSAmJiBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLnBsYXliYWNrUmF0ZS5zZXRWYWx1ZUF0VGltZShyYXRlLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgICAgc291bmQuX25vZGUucGxheWJhY2tSYXRlID0gcmF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVzZXQgdGhlIHRpbWVycy5cbiAgICAgICAgICAgIHZhciBzZWVrID0gc2VsZi5zZWVrKGlkW2ldKTtcbiAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9ICgoc2VsZi5fc3ByaXRlW3NvdW5kLl9zcHJpdGVdWzBdICsgc2VsZi5fc3ByaXRlW3NvdW5kLl9zcHJpdGVdWzFdKSAvIDEwMDApIC0gc2VlaztcbiAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gKGR1cmF0aW9uICogMTAwMCkgLyBNYXRoLmFicyhzb3VuZC5fcmF0ZSk7XG5cbiAgICAgICAgICAgIC8vIFN0YXJ0IGEgbmV3IGVuZCB0aW1lciBpZiBzb3VuZCBpcyBhbHJlYWR5IHBsYXlpbmcuXG4gICAgICAgICAgICBpZiAoc2VsZi5fZW5kVGltZXJzW2lkW2ldXSB8fCAhc291bmQuX3BhdXNlZCkge1xuICAgICAgICAgICAgICBzZWxmLl9jbGVhclRpbWVyKGlkW2ldKTtcbiAgICAgICAgICAgICAgc2VsZi5fZW5kVGltZXJzW2lkW2ldXSA9IHNldFRpbWVvdXQoc2VsZi5fZW5kZWQuYmluZChzZWxmLCBzb3VuZCksIHRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLl9lbWl0KCdyYXRlJywgc291bmQuX2lkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkKTtcbiAgICAgICAgcmV0dXJuIHNvdW5kID8gc291bmQuX3JhdGUgOiBzZWxmLl9yYXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0L3NldCB0aGUgc2VlayBwb3NpdGlvbiBvZiBhIHNvdW5kLiBUaGlzIG1ldGhvZCBjYW4gb3B0aW9uYWxseSB0YWtlIDAsIDEgb3IgMiBhcmd1bWVudHMuXG4gICAgICogICBzZWVrKCkgLT4gUmV0dXJucyB0aGUgZmlyc3Qgc291bmQgbm9kZSdzIGN1cnJlbnQgc2VlayBwb3NpdGlvbi5cbiAgICAgKiAgIHNlZWsoaWQpIC0+IFJldHVybnMgdGhlIHNvdW5kIGlkJ3MgY3VycmVudCBzZWVrIHBvc2l0aW9uLlxuICAgICAqICAgc2VlayhzZWVrKSAtPiBTZXRzIHRoZSBzZWVrIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBzb3VuZCBub2RlLlxuICAgICAqICAgc2VlayhzZWVrLCBpZCkgLT4gU2V0cyB0aGUgc2VlayBwb3NpdGlvbiBvZiBwYXNzZWQgc291bmQgaWQuXG4gICAgICogQHJldHVybiB7SG93bC9OdW1iZXJ9IFJldHVybnMgc2VsZiBvciB0aGUgY3VycmVudCBzZWVrIHBvc2l0aW9uLlxuICAgICAqL1xuICAgIHNlZWs6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgc2VlaywgaWQ7XG5cbiAgICAgIC8vIERldGVybWluZSB0aGUgdmFsdWVzIGJhc2VkIG9uIGFyZ3VtZW50cy5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBXZSB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIGZpcnN0IG5vZGUuXG4gICAgICAgIGlmIChzZWxmLl9zb3VuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgaWQgPSBzZWxmLl9zb3VuZHNbMF0uX2lkO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIEZpcnN0IGNoZWNrIGlmIHRoaXMgaXMgYW4gSUQsIGFuZCBpZiBub3QsIGFzc3VtZSBpdCBpcyBhIG5ldyBzZWVrIHBvc2l0aW9uLlxuICAgICAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gaWRzLmluZGV4T2YoYXJnc1swXSk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzBdLCAxMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZi5fc291bmRzLmxlbmd0aCkge1xuICAgICAgICAgIGlkID0gc2VsZi5fc291bmRzWzBdLl9pZDtcbiAgICAgICAgICBzZWVrID0gcGFyc2VGbG9hdChhcmdzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBzZWVrID0gcGFyc2VGbG9hdChhcmdzWzBdKTtcbiAgICAgICAgaWQgPSBwYXJzZUludChhcmdzWzFdLCAxMCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIG5vIElELCBiYWlsIG91dC5cbiAgICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIHNlZWsgd2hlbiBjYXBhYmxlLlxuICAgICAgaWYgKHR5cGVvZiBzZWVrID09PSAnbnVtYmVyJyAmJiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnIHx8IHNlbGYuX3BsYXlMb2NrKSkge1xuICAgICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ3NlZWsnLFxuICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnNlZWsuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IHRoZSBzb3VuZC5cbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZCk7XG5cbiAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICBpZiAodHlwZW9mIHNlZWsgPT09ICdudW1iZXInICYmIHNlZWsgPj0gMCkge1xuICAgICAgICAgIC8vIFBhdXNlIHRoZSBzb3VuZCBhbmQgdXBkYXRlIHBvc2l0aW9uIGZvciByZXN0YXJ0aW5nIHBsYXliYWNrLlxuICAgICAgICAgIHZhciBwbGF5aW5nID0gc2VsZi5wbGF5aW5nKGlkKTtcbiAgICAgICAgICBpZiAocGxheWluZykge1xuICAgICAgICAgICAgc2VsZi5wYXVzZShpZCwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTW92ZSB0aGUgcG9zaXRpb24gb2YgdGhlIHRyYWNrIGFuZCBjYW5jZWwgdGltZXIuXG4gICAgICAgICAgc291bmQuX3NlZWsgPSBzZWVrO1xuICAgICAgICAgIHNvdW5kLl9lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgIHNlbGYuX2NsZWFyVGltZXIoaWQpO1xuXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBzZWVrIHBvc2l0aW9uIGZvciBIVE1MNSBBdWRpby5cbiAgICAgICAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvICYmIHNvdW5kLl9ub2RlICYmICFpc05hTihzb3VuZC5fbm9kZS5kdXJhdGlvbikpIHtcbiAgICAgICAgICAgIHNvdW5kLl9ub2RlLmN1cnJlbnRUaW1lID0gc2VlaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTZWVrIGFuZCBlbWl0IHdoZW4gcmVhZHkuXG4gICAgICAgICAgdmFyIHNlZWtBbmRFbWl0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBSZXN0YXJ0IHRoZSBwbGF5YmFjayBpZiB0aGUgc291bmQgd2FzIHBsYXlpbmcuXG4gICAgICAgICAgICBpZiAocGxheWluZykge1xuICAgICAgICAgICAgICBzZWxmLnBsYXkoaWQsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLl9lbWl0KCdzZWVrJywgaWQpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBXYWl0IGZvciB0aGUgcGxheSBsb2NrIHRvIGJlIHVuc2V0IGJlZm9yZSBlbWl0dGluZyAoSFRNTDUgQXVkaW8pLlxuICAgICAgICAgIGlmIChwbGF5aW5nICYmICFzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgICAgdmFyIGVtaXRTZWVrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmICghc2VsZi5fcGxheUxvY2spIHtcbiAgICAgICAgICAgICAgICBzZWVrQW5kRW1pdCgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZW1pdFNlZWssIDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2V0VGltZW91dChlbWl0U2VlaywgMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlZWtBbmRFbWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzZWxmLl93ZWJBdWRpbykge1xuICAgICAgICAgICAgdmFyIHJlYWxUaW1lID0gc2VsZi5wbGF5aW5nKGlkKSA/IEhvd2xlci5jdHguY3VycmVudFRpbWUgLSBzb3VuZC5fcGxheVN0YXJ0IDogMDtcbiAgICAgICAgICAgIHZhciByYXRlU2VlayA9IHNvdW5kLl9yYXRlU2VlayA/IHNvdW5kLl9yYXRlU2VlayAtIHNvdW5kLl9zZWVrIDogMDtcbiAgICAgICAgICAgIHJldHVybiBzb3VuZC5fc2VlayArIChyYXRlU2VlayArIHJlYWxUaW1lICogTWF0aC5hYnMoc291bmQuX3JhdGUpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNvdW5kLl9ub2RlLmN1cnJlbnRUaW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBzcGVjaWZpYyBzb3VuZCBpcyBjdXJyZW50bHkgcGxheWluZyBvciBub3QgKGlmIGlkIGlzIHByb3ZpZGVkKSwgb3IgY2hlY2sgaWYgYXQgbGVhc3Qgb25lIG9mIHRoZSBzb3VuZHMgaW4gdGhlIGdyb3VwIGlzIHBsYXlpbmcgb3Igbm90LlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gIGlkIFRoZSBzb3VuZCBpZCB0byBjaGVjay4gSWYgbm9uZSBpcyBwYXNzZWQsIHRoZSB3aG9sZSBzb3VuZCBncm91cCBpcyBjaGVja2VkLlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IFRydWUgaWYgcGxheWluZyBhbmQgZmFsc2UgaWYgbm90LlxuICAgICAqL1xuICAgIHBsYXlpbmc6IGZ1bmN0aW9uKGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIENoZWNrIHRoZSBwYXNzZWQgc291bmQgSUQgKGlmIGFueSkuXG4gICAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJykge1xuICAgICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWQpO1xuICAgICAgICByZXR1cm4gc291bmQgPyAhc291bmQuX3BhdXNlZCA6IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2UsIGxvb3AgdGhyb3VnaCBhbGwgc291bmRzIGFuZCBjaGVjayBpZiBhbnkgYXJlIHBsYXlpbmcuXG4gICAgICBmb3IgKHZhciBpPTA7IGk8c2VsZi5fc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghc2VsZi5fc291bmRzW2ldLl9wYXVzZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZHVyYXRpb24gb2YgdGhpcyBzb3VuZC4gUGFzc2luZyBhIHNvdW5kIGlkIHdpbGwgcmV0dXJuIHRoZSBzcHJpdGUgZHVyYXRpb24uXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCBUaGUgc291bmQgaWQgdG8gY2hlY2suIElmIG5vbmUgaXMgcGFzc2VkLCByZXR1cm4gZnVsbCBzb3VyY2UgZHVyYXRpb24uXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBBdWRpbyBkdXJhdGlvbiBpbiBzZWNvbmRzLlxuICAgICAqL1xuICAgIGR1cmF0aW9uOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGR1cmF0aW9uID0gc2VsZi5fZHVyYXRpb247XG5cbiAgICAgIC8vIElmIHdlIHBhc3MgYW4gSUQsIGdldCB0aGUgc291bmQgYW5kIHJldHVybiB0aGUgc3ByaXRlIGxlbmd0aC5cbiAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZCk7XG4gICAgICBpZiAoc291bmQpIHtcbiAgICAgICAgZHVyYXRpb24gPSBzZWxmLl9zcHJpdGVbc291bmQuX3Nwcml0ZV1bMV0gLyAxMDAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZHVyYXRpb247XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgbG9hZGVkIHN0YXRlIG9mIHRoaXMgSG93bC5cbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICd1bmxvYWRlZCcsICdsb2FkaW5nJywgJ2xvYWRlZCdcbiAgICAgKi9cbiAgICBzdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVubG9hZCBhbmQgZGVzdHJveSB0aGUgY3VycmVudCBIb3dsIG9iamVjdC5cbiAgICAgKiBUaGlzIHdpbGwgaW1tZWRpYXRlbHkgc3RvcCBhbGwgc291bmQgaW5zdGFuY2VzIGF0dGFjaGVkIHRvIHRoaXMgZ3JvdXAuXG4gICAgICovXG4gICAgdW5sb2FkOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gU3RvcCBwbGF5aW5nIGFueSBhY3RpdmUgc291bmRzLlxuICAgICAgdmFyIHNvdW5kcyA9IHNlbGYuX3NvdW5kcztcbiAgICAgIGZvciAodmFyIGk9MDsgaTxzb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gU3RvcCB0aGUgc291bmQgaWYgaXQgaXMgY3VycmVudGx5IHBsYXlpbmcuXG4gICAgICAgIGlmICghc291bmRzW2ldLl9wYXVzZWQpIHtcbiAgICAgICAgICBzZWxmLnN0b3Aoc291bmRzW2ldLl9pZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIHNvdXJjZSBvciBkaXNjb25uZWN0LlxuICAgICAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICAgICAgLy8gU2V0IHRoZSBzb3VyY2UgdG8gMC1zZWNvbmQgc2lsZW5jZSB0byBzdG9wIGFueSBkb3dubG9hZGluZyAoZXhjZXB0IGluIElFKS5cbiAgICAgICAgICBzZWxmLl9jbGVhclNvdW5kKHNvdW5kc1tpXS5fbm9kZSk7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgYW55IGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgICBzb3VuZHNbaV0uX25vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBzb3VuZHNbaV0uX2Vycm9yRm4sIGZhbHNlKTtcbiAgICAgICAgICBzb3VuZHNbaV0uX25vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihIb3dsZXIuX2NhblBsYXlFdmVudCwgc291bmRzW2ldLl9sb2FkRm4sIGZhbHNlKTtcbiAgICAgICAgICBzb3VuZHNbaV0uX25vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBzb3VuZHNbaV0uX2VuZEZuLCBmYWxzZSk7XG5cbiAgICAgICAgICAvLyBSZWxlYXNlIHRoZSBBdWRpbyBvYmplY3QgYmFjayB0byB0aGUgcG9vbC5cbiAgICAgICAgICBIb3dsZXIuX3JlbGVhc2VIdG1sNUF1ZGlvKHNvdW5kc1tpXS5fbm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbXB0eSBvdXQgYWxsIG9mIHRoZSBub2Rlcy5cbiAgICAgICAgZGVsZXRlIHNvdW5kc1tpXS5fbm9kZTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgYWxsIHRpbWVycyBhcmUgY2xlYXJlZCBvdXQuXG4gICAgICAgIHNlbGYuX2NsZWFyVGltZXIoc291bmRzW2ldLl9pZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgcmVmZXJlbmNlcyBpbiB0aGUgZ2xvYmFsIEhvd2xlciBvYmplY3QuXG4gICAgICB2YXIgaW5kZXggPSBIb3dsZXIuX2hvd2xzLmluZGV4T2Yoc2VsZik7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICBIb3dsZXIuX2hvd2xzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG5cbiAgICAgIC8vIERlbGV0ZSB0aGlzIHNvdW5kIGZyb20gdGhlIGNhY2hlIChpZiBubyBvdGhlciBIb3dsIGlzIHVzaW5nIGl0KS5cbiAgICAgIHZhciByZW1DYWNoZSA9IHRydWU7XG4gICAgICBmb3IgKGk9MDsgaTxIb3dsZXIuX2hvd2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChIb3dsZXIuX2hvd2xzW2ldLl9zcmMgPT09IHNlbGYuX3NyYyB8fCBzZWxmLl9zcmMuaW5kZXhPZihIb3dsZXIuX2hvd2xzW2ldLl9zcmMpID49IDApIHtcbiAgICAgICAgICByZW1DYWNoZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjYWNoZSAmJiByZW1DYWNoZSkge1xuICAgICAgICBkZWxldGUgY2FjaGVbc2VsZi5fc3JjXTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYXIgZ2xvYmFsIGVycm9ycy5cbiAgICAgIEhvd2xlci5ub0F1ZGlvID0gZmFsc2U7XG5cbiAgICAgIC8vIENsZWFyIG91dCBgc2VsZmAuXG4gICAgICBzZWxmLl9zdGF0ZSA9ICd1bmxvYWRlZCc7XG4gICAgICBzZWxmLl9zb3VuZHMgPSBbXTtcbiAgICAgIHNlbGYgPSBudWxsO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIGEgY3VzdG9tIGV2ZW50LlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudCBFdmVudCBuYW1lLlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICBMaXN0ZW5lciB0byBjYWxsLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gICBpZCAgICAob3B0aW9uYWwpIE9ubHkgbGlzdGVuIHRvIGV2ZW50cyBmb3IgdGhpcyBzb3VuZC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9ICAgb25jZSAgKElOVEVSTkFMKSBNYXJrcyBldmVudCB0byBmaXJlIG9ubHkgb25jZS5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIG9uOiBmdW5jdGlvbihldmVudCwgZm4sIGlkLCBvbmNlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgZXZlbnRzID0gc2VsZlsnX29uJyArIGV2ZW50XTtcblxuICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBldmVudHMucHVzaChvbmNlID8ge2lkOiBpZCwgZm46IGZuLCBvbmNlOiBvbmNlfSA6IHtpZDogaWQsIGZuOiBmbn0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgY3VzdG9tIGV2ZW50LiBDYWxsIHdpdGhvdXQgcGFyYW1ldGVycyB0byByZW1vdmUgYWxsIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnQgRXZlbnQgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gICAgTGlzdGVuZXIgdG8gcmVtb3ZlLiBMZWF2ZSBlbXB0eSB0byByZW1vdmUgYWxsLlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gICBpZCAgICAob3B0aW9uYWwpIE9ubHkgcmVtb3ZlIGV2ZW50cyBmb3IgdGhpcyBzb3VuZC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIG9mZjogZnVuY3Rpb24oZXZlbnQsIGZuLCBpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGV2ZW50cyA9IHNlbGZbJ19vbicgKyBldmVudF07XG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIC8vIEFsbG93IHBhc3NpbmcganVzdCBhbiBldmVudCBhbmQgSUQuXG4gICAgICBpZiAodHlwZW9mIGZuID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZCA9IGZuO1xuICAgICAgICBmbiA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChmbiB8fCBpZCkge1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggZXZlbnQgc3RvcmUgYW5kIHJlbW92ZSB0aGUgcGFzc2VkIGZ1bmN0aW9uLlxuICAgICAgICBmb3IgKGk9MDsgaTxldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaXNJZCA9IChpZCA9PT0gZXZlbnRzW2ldLmlkKTtcbiAgICAgICAgICBpZiAoZm4gPT09IGV2ZW50c1tpXS5mbiAmJiBpc0lkIHx8ICFmbiAmJiBpc0lkKSB7XG4gICAgICAgICAgICBldmVudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50KSB7XG4gICAgICAgIC8vIENsZWFyIG91dCBhbGwgZXZlbnRzIG9mIHRoaXMgdHlwZS5cbiAgICAgICAgc2VsZlsnX29uJyArIGV2ZW50XSA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2xlYXIgb3V0IGFsbCBldmVudHMgb2YgZXZlcnkgdHlwZS5cbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzZWxmKTtcbiAgICAgICAgZm9yIChpPTA7IGk8a2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICgoa2V5c1tpXS5pbmRleE9mKCdfb24nKSA9PT0gMCkgJiYgQXJyYXkuaXNBcnJheShzZWxmW2tleXNbaV1dKSkge1xuICAgICAgICAgICAgc2VsZltrZXlzW2ldXSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIGEgY3VzdG9tIGV2ZW50IGFuZCByZW1vdmUgaXQgb25jZSBmaXJlZC5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnQgRXZlbnQgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gICAgTGlzdGVuZXIgdG8gY2FsbC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9ICAgaWQgICAgKG9wdGlvbmFsKSBPbmx5IGxpc3RlbiB0byBldmVudHMgZm9yIHRoaXMgc291bmQuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBvbmNlOiBmdW5jdGlvbihldmVudCwgZm4sIGlkKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIFNldHVwIHRoZSBldmVudCBsaXN0ZW5lci5cbiAgICAgIHNlbGYub24oZXZlbnQsIGZuLCBpZCwgMSk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbWl0IGFsbCBldmVudHMgb2YgYSBzcGVjaWZpYyB0eXBlIGFuZCBwYXNzIHRoZSBzb3VuZCBpZC5cbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGV2ZW50IEV2ZW50IG5hbWUuXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCAgICBTb3VuZCBJRC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG1zZyAgIE1lc3NhZ2UgdG8gZ28gd2l0aCBldmVudC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9lbWl0OiBmdW5jdGlvbihldmVudCwgaWQsIG1zZykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGV2ZW50cyA9IHNlbGZbJ19vbicgKyBldmVudF07XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBldmVudCBzdG9yZSBhbmQgZmlyZSBhbGwgZnVuY3Rpb25zLlxuICAgICAgZm9yICh2YXIgaT1ldmVudHMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICAvLyBPbmx5IGZpcmUgdGhlIGxpc3RlbmVyIGlmIHRoZSBjb3JyZWN0IElEIGlzIHVzZWQuXG4gICAgICAgIGlmICghZXZlbnRzW2ldLmlkIHx8IGV2ZW50c1tpXS5pZCA9PT0gaWQgfHwgZXZlbnQgPT09ICdsb2FkJykge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcywgaWQsIG1zZyk7XG4gICAgICAgICAgfS5iaW5kKHNlbGYsIGV2ZW50c1tpXS5mbiksIDApO1xuXG4gICAgICAgICAgLy8gSWYgdGhpcyBldmVudCB3YXMgc2V0dXAgd2l0aCBgb25jZWAsIHJlbW92ZSBpdC5cbiAgICAgICAgICBpZiAoZXZlbnRzW2ldLm9uY2UpIHtcbiAgICAgICAgICAgIHNlbGYub2ZmKGV2ZW50LCBldmVudHNbaV0uZm4sIGV2ZW50c1tpXS5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFBhc3MgdGhlIGV2ZW50IHR5cGUgaW50byBsb2FkIHF1ZXVlIHNvIHRoYXQgaXQgY2FuIGNvbnRpbnVlIHN0ZXBwaW5nLlxuICAgICAgc2VsZi5fbG9hZFF1ZXVlKGV2ZW50KTtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFF1ZXVlIG9mIGFjdGlvbnMgaW5pdGlhdGVkIGJlZm9yZSB0aGUgc291bmQgaGFzIGxvYWRlZC5cbiAgICAgKiBUaGVzZSB3aWxsIGJlIGNhbGxlZCBpbiBzZXF1ZW5jZSwgd2l0aCB0aGUgbmV4dCBvbmx5IGZpcmluZ1xuICAgICAqIGFmdGVyIHRoZSBwcmV2aW91cyBoYXMgZmluaXNoZWQgZXhlY3V0aW5nIChldmVuIGlmIGFzeW5jIGxpa2UgcGxheSkuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBfbG9hZFF1ZXVlOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAoc2VsZi5fcXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgdGFzayA9IHNlbGYuX3F1ZXVlWzBdO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGlzIHRhc2sgaWYgYSBtYXRjaGluZyBldmVudCB3YXMgcGFzc2VkLlxuICAgICAgICBpZiAodGFzay5ldmVudCA9PT0gZXZlbnQpIHtcbiAgICAgICAgICBzZWxmLl9xdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgIHNlbGYuX2xvYWRRdWV1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUnVuIHRoZSB0YXNrIGlmIG5vIGV2ZW50IHR5cGUgaXMgcGFzc2VkLlxuICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgdGFzay5hY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiBwbGF5YmFjayBlbmRzIGF0IHRoZSBlbmQgb2YgdGhlIGR1cmF0aW9uLlxuICAgICAqIEBwYXJhbSAge1NvdW5kfSBzb3VuZCBUaGUgc291bmQgb2JqZWN0IHRvIHdvcmsgd2l0aC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9lbmRlZDogZnVuY3Rpb24oc291bmQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBzcHJpdGUgPSBzb3VuZC5fc3ByaXRlO1xuXG4gICAgICAvLyBJZiB3ZSBhcmUgdXNpbmcgSUUgYW5kIHRoZXJlIHdhcyBuZXR3b3JrIGxhdGVuY3kgd2UgbWF5IGJlIGNsaXBwaW5nXG4gICAgICAvLyBhdWRpbyBiZWZvcmUgaXQgY29tcGxldGVzIHBsYXlpbmcuIExldHMgY2hlY2sgdGhlIG5vZGUgdG8gbWFrZSBzdXJlIGl0XG4gICAgICAvLyBiZWxpZXZlcyBpdCBoYXMgY29tcGxldGVkLCBiZWZvcmUgZW5kaW5nIHRoZSBwbGF5YmFjay5cbiAgICAgIGlmICghc2VsZi5fd2ViQXVkaW8gJiYgc291bmQuX25vZGUgJiYgIXNvdW5kLl9ub2RlLnBhdXNlZCAmJiAhc291bmQuX25vZGUuZW5kZWQgJiYgc291bmQuX25vZGUuY3VycmVudFRpbWUgPCBzb3VuZC5fc3RvcCkge1xuICAgICAgICBzZXRUaW1lb3V0KHNlbGYuX2VuZGVkLmJpbmQoc2VsZiwgc291bmQpLCAxMDApO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH1cblxuICAgICAgLy8gU2hvdWxkIHRoaXMgc291bmQgbG9vcD9cbiAgICAgIHZhciBsb29wID0gISEoc291bmQuX2xvb3AgfHwgc2VsZi5fc3ByaXRlW3Nwcml0ZV1bMl0pO1xuXG4gICAgICAvLyBGaXJlIHRoZSBlbmRlZCBldmVudC5cbiAgICAgIHNlbGYuX2VtaXQoJ2VuZCcsIHNvdW5kLl9pZCk7XG5cbiAgICAgIC8vIFJlc3RhcnQgdGhlIHBsYXliYWNrIGZvciBIVE1MNSBBdWRpbyBsb29wLlxuICAgICAgaWYgKCFzZWxmLl93ZWJBdWRpbyAmJiBsb29wKSB7XG4gICAgICAgIHNlbGYuc3RvcChzb3VuZC5faWQsIHRydWUpLnBsYXkoc291bmQuX2lkKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVzdGFydCB0aGlzIHRpbWVyIGlmIG9uIGEgV2ViIEF1ZGlvIGxvb3AuXG4gICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgbG9vcCkge1xuICAgICAgICBzZWxmLl9lbWl0KCdwbGF5Jywgc291bmQuX2lkKTtcbiAgICAgICAgc291bmQuX3NlZWsgPSBzb3VuZC5fc3RhcnQgfHwgMDtcbiAgICAgICAgc291bmQuX3JhdGVTZWVrID0gMDtcbiAgICAgICAgc291bmQuX3BsYXlTdGFydCA9IEhvd2xlci5jdHguY3VycmVudFRpbWU7XG5cbiAgICAgICAgdmFyIHRpbWVvdXQgPSAoKHNvdW5kLl9zdG9wIC0gc291bmQuX3N0YXJ0KSAqIDEwMDApIC8gTWF0aC5hYnMoc291bmQuX3JhdGUpO1xuICAgICAgICBzZWxmLl9lbmRUaW1lcnNbc291bmQuX2lkXSA9IHNldFRpbWVvdXQoc2VsZi5fZW5kZWQuYmluZChzZWxmLCBzb3VuZCksIHRpbWVvdXQpO1xuICAgICAgfVxuXG4gICAgICAvLyBNYXJrIHRoZSBub2RlIGFzIHBhdXNlZC5cbiAgICAgIGlmIChzZWxmLl93ZWJBdWRpbyAmJiAhbG9vcCkge1xuICAgICAgICBzb3VuZC5fcGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgc291bmQuX2VuZGVkID0gdHJ1ZTtcbiAgICAgICAgc291bmQuX3NlZWsgPSBzb3VuZC5fc3RhcnQgfHwgMDtcbiAgICAgICAgc291bmQuX3JhdGVTZWVrID0gMDtcbiAgICAgICAgc2VsZi5fY2xlYXJUaW1lcihzb3VuZC5faWQpO1xuXG4gICAgICAgIC8vIENsZWFuIHVwIHRoZSBidWZmZXIgc291cmNlLlxuICAgICAgICBzZWxmLl9jbGVhbkJ1ZmZlcihzb3VuZC5fbm9kZSk7XG5cbiAgICAgICAgLy8gQXR0ZW1wdCB0byBhdXRvLXN1c3BlbmQgQXVkaW9Db250ZXh0IGlmIG5vIHNvdW5kcyBhcmUgc3RpbGwgcGxheWluZy5cbiAgICAgICAgSG93bGVyLl9hdXRvU3VzcGVuZCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBXaGVuIHVzaW5nIGEgc3ByaXRlLCBlbmQgdGhlIHRyYWNrLlxuICAgICAgaWYgKCFzZWxmLl93ZWJBdWRpbyAmJiAhbG9vcCkge1xuICAgICAgICBzZWxmLnN0b3Aoc291bmQuX2lkLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWFyIHRoZSBlbmQgdGltZXIgZm9yIGEgc291bmQgcGxheWJhY2suXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBpZCBUaGUgc291bmQgSUQuXG4gICAgICogQHJldHVybiB7SG93bH1cbiAgICAgKi9cbiAgICBfY2xlYXJUaW1lcjogZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKHNlbGYuX2VuZFRpbWVyc1tpZF0pIHtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIHRpbWVvdXQgb3IgcmVtb3ZlIHRoZSBlbmRlZCBsaXN0ZW5lci5cbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLl9lbmRUaW1lcnNbaWRdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX2VuZFRpbWVyc1tpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChpZCk7XG4gICAgICAgICAgaWYgKHNvdW5kICYmIHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICBzb3VuZC5fbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlbmRlZCcsIHNlbGYuX2VuZFRpbWVyc1tpZF0sIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc2VsZi5fZW5kVGltZXJzW2lkXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgc291bmQgaWRlbnRpZmllZCBieSB0aGlzIElELCBvciByZXR1cm4gbnVsbC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIFNvdW5kIElEXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAgICBTb3VuZCBvYmplY3Qgb3IgbnVsbC5cbiAgICAgKi9cbiAgICBfc291bmRCeUlkOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHNvdW5kcyBhbmQgZmluZCB0aGUgb25lIHdpdGggdGhpcyBJRC5cbiAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9zb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlkID09PSBzZWxmLl9zb3VuZHNbaV0uX2lkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuX3NvdW5kc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIGluYWN0aXZlIHNvdW5kIGZyb20gdGhlIHBvb2wgb3IgY3JlYXRlIGEgbmV3IG9uZS5cbiAgICAgKiBAcmV0dXJuIHtTb3VuZH0gU291bmQgcGxheWJhY2sgb2JqZWN0LlxuICAgICAqL1xuICAgIF9pbmFjdGl2ZVNvdW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgc2VsZi5fZHJhaW4oKTtcblxuICAgICAgLy8gRmluZCB0aGUgZmlyc3QgaW5hY3RpdmUgbm9kZSB0byByZWN5Y2xlLlxuICAgICAgZm9yICh2YXIgaT0wOyBpPHNlbGYuX3NvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZi5fc291bmRzW2ldLl9lbmRlZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLl9zb3VuZHNbaV0ucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBpbmFjdGl2ZSBub2RlIHdhcyBmb3VuZCwgY3JlYXRlIGEgbmV3IG9uZS5cbiAgICAgIHJldHVybiBuZXcgU291bmQoc2VsZik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERyYWluIGV4Y2VzcyBpbmFjdGl2ZSBzb3VuZHMgZnJvbSB0aGUgcG9vbC5cbiAgICAgKi9cbiAgICBfZHJhaW46IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGxpbWl0ID0gc2VsZi5fcG9vbDtcbiAgICAgIHZhciBjbnQgPSAwO1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAvLyBJZiB0aGVyZSBhcmUgbGVzcyBzb3VuZHMgdGhhbiB0aGUgbWF4IHBvb2wgc2l6ZSwgd2UgYXJlIGRvbmUuXG4gICAgICBpZiAoc2VsZi5fc291bmRzLmxlbmd0aCA8IGxpbWl0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ291bnQgdGhlIG51bWJlciBvZiBpbmFjdGl2ZSBzb3VuZHMuXG4gICAgICBmb3IgKGk9MDsgaTxzZWxmLl9zb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGYuX3NvdW5kc1tpXS5fZW5kZWQpIHtcbiAgICAgICAgICBjbnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgZXhjZXNzIGluYWN0aXZlIHNvdW5kcywgZ29pbmcgaW4gcmV2ZXJzZSBvcmRlci5cbiAgICAgIGZvciAoaT1zZWxmLl9zb3VuZHMubGVuZ3RoIC0gMTsgaT49MDsgaS0tKSB7XG4gICAgICAgIGlmIChjbnQgPD0gbGltaXQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi5fc291bmRzW2ldLl9lbmRlZCkge1xuICAgICAgICAgIC8vIERpc2Nvbm5lY3QgdGhlIGF1ZGlvIHNvdXJjZSB3aGVuIHVzaW5nIFdlYiBBdWRpby5cbiAgICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8gJiYgc2VsZi5fc291bmRzW2ldLl9ub2RlKSB7XG4gICAgICAgICAgICBzZWxmLl9zb3VuZHNbaV0uX25vZGUuZGlzY29ubmVjdCgwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZW1vdmUgc291bmRzIHVudGlsIHdlIGhhdmUgdGhlIHBvb2wgc2l6ZS5cbiAgICAgICAgICBzZWxmLl9zb3VuZHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGNudC0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgSUQncyBmcm9tIHRoZSBzb3VuZHMgcG9vbC5cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGlkIE9ubHkgcmV0dXJuIG9uZSBJRCBpZiBvbmUgaXMgcGFzc2VkLlxuICAgICAqIEByZXR1cm4ge0FycmF5fSAgICBBcnJheSBvZiBJRHMuXG4gICAgICovXG4gICAgX2dldFNvdW5kSWRzOiBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgaWRzID0gW107XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxzZWxmLl9zb3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZHMucHVzaChzZWxmLl9zb3VuZHNbaV0uX2lkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW2lkXTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTG9hZCB0aGUgc291bmQgYmFjayBpbnRvIHRoZSBidWZmZXIgc291cmNlLlxuICAgICAqIEBwYXJhbSAge1NvdW5kfSBzb3VuZCBUaGUgc291bmQgb2JqZWN0IHRvIHdvcmsgd2l0aC5cbiAgICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgICAqL1xuICAgIF9yZWZyZXNoQnVmZmVyOiBmdW5jdGlvbihzb3VuZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBTZXR1cCB0aGUgYnVmZmVyIHNvdXJjZSBmb3IgcGxheWJhY2suXG4gICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UgPSBIb3dsZXIuY3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmJ1ZmZlciA9IGNhY2hlW3NlbGYuX3NyY107XG5cbiAgICAgIC8vIENvbm5lY3QgdG8gdGhlIGNvcnJlY3Qgbm9kZS5cbiAgICAgIGlmIChzb3VuZC5fcGFubmVyKSB7XG4gICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5jb25uZWN0KHNvdW5kLl9wYW5uZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmNvbm5lY3Qoc291bmQuX25vZGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXR1cCBsb29waW5nIGFuZCBwbGF5YmFjayByYXRlLlxuICAgICAgc291bmQuX25vZGUuYnVmZmVyU291cmNlLmxvb3AgPSBzb3VuZC5fbG9vcDtcbiAgICAgIGlmIChzb3VuZC5fbG9vcCkge1xuICAgICAgICBzb3VuZC5fbm9kZS5idWZmZXJTb3VyY2UubG9vcFN0YXJ0ID0gc291bmQuX3N0YXJ0IHx8IDA7XG4gICAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5sb29wRW5kID0gc291bmQuX3N0b3AgfHwgMDtcbiAgICAgIH1cbiAgICAgIHNvdW5kLl9ub2RlLmJ1ZmZlclNvdXJjZS5wbGF5YmFja1JhdGUuc2V0VmFsdWVBdFRpbWUoc291bmQuX3JhdGUsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUHJldmVudCBtZW1vcnkgbGVha3MgYnkgY2xlYW5pbmcgdXAgdGhlIGJ1ZmZlciBzb3VyY2UgYWZ0ZXIgcGxheWJhY2suXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBub2RlIFNvdW5kJ3MgYXVkaW8gbm9kZSBjb250YWluaW5nIHRoZSBidWZmZXIgc291cmNlLlxuICAgICAqIEByZXR1cm4ge0hvd2x9XG4gICAgICovXG4gICAgX2NsZWFuQnVmZmVyOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgaXNJT1MgPSBIb3dsZXIuX25hdmlnYXRvciAmJiBIb3dsZXIuX25hdmlnYXRvci52ZW5kb3IuaW5kZXhPZignQXBwbGUnKSA+PSAwO1xuXG4gICAgICBpZiAoSG93bGVyLl9zY3JhdGNoQnVmZmVyICYmIG5vZGUuYnVmZmVyU291cmNlKSB7XG4gICAgICAgIG5vZGUuYnVmZmVyU291cmNlLm9uZW5kZWQgPSBudWxsO1xuICAgICAgICBub2RlLmJ1ZmZlclNvdXJjZS5kaXNjb25uZWN0KDApO1xuICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICB0cnkgeyBub2RlLmJ1ZmZlclNvdXJjZS5idWZmZXIgPSBIb3dsZXIuX3NjcmF0Y2hCdWZmZXI7IH0gY2F0Y2goZSkge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbm9kZS5idWZmZXJTb3VyY2UgPSBudWxsO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBzb3VyY2UgdG8gYSAwLXNlY29uZCBzaWxlbmNlIHRvIHN0b3AgYW55IGRvd25sb2FkaW5nIChleGNlcHQgaW4gSUUpLlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gbm9kZSBBdWRpbyBub2RlIHRvIGNsZWFyLlxuICAgICAqL1xuICAgIF9jbGVhclNvdW5kOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICB2YXIgY2hlY2tJRSA9IC9NU0lFIHxUcmlkZW50XFwvLy50ZXN0KEhvd2xlci5fbmF2aWdhdG9yICYmIEhvd2xlci5fbmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICBpZiAoIWNoZWNrSUUpIHtcbiAgICAgICAgbm9kZS5zcmMgPSAnZGF0YTphdWRpby93YXY7YmFzZTY0LFVrbEdSaWdBQUFCWFFWWkZabTEwSUJJQUFBQUJBQUVBUkt3QUFJaFlBUUFDQUJBQUFBQmtZWFJoQWdBQUFBRUEnO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKiogU2luZ2xlIFNvdW5kIE1ldGhvZHMgKiovXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBzb3VuZCBvYmplY3QsIHdoaWNoIGVhY2ggbm9kZSBhdHRhY2hlZCB0byBhIEhvd2wgZ3JvdXAgaXMgY29udGFpbmVkIGluLlxuICAgKiBAcGFyYW0ge09iamVjdH0gaG93bCBUaGUgSG93bCBwYXJlbnQgZ3JvdXAuXG4gICAqL1xuICB2YXIgU291bmQgPSBmdW5jdGlvbihob3dsKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gaG93bDtcbiAgICB0aGlzLmluaXQoKTtcbiAgfTtcbiAgU291bmQucHJvdG90eXBlID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgYSBuZXcgU291bmQgb2JqZWN0LlxuICAgICAqIEByZXR1cm4ge1NvdW5kfVxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHBhcmVudCA9IHNlbGYuX3BhcmVudDtcblxuICAgICAgLy8gU2V0dXAgdGhlIGRlZmF1bHQgcGFyYW1ldGVycy5cbiAgICAgIHNlbGYuX211dGVkID0gcGFyZW50Ll9tdXRlZDtcbiAgICAgIHNlbGYuX2xvb3AgPSBwYXJlbnQuX2xvb3A7XG4gICAgICBzZWxmLl92b2x1bWUgPSBwYXJlbnQuX3ZvbHVtZTtcbiAgICAgIHNlbGYuX3JhdGUgPSBwYXJlbnQuX3JhdGU7XG4gICAgICBzZWxmLl9zZWVrID0gMDtcbiAgICAgIHNlbGYuX3BhdXNlZCA9IHRydWU7XG4gICAgICBzZWxmLl9lbmRlZCA9IHRydWU7XG4gICAgICBzZWxmLl9zcHJpdGUgPSAnX19kZWZhdWx0JztcblxuICAgICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIHRoaXMgc291bmQuXG4gICAgICBzZWxmLl9pZCA9ICsrSG93bGVyLl9jb3VudGVyO1xuXG4gICAgICAvLyBBZGQgaXRzZWxmIHRvIHRoZSBwYXJlbnQncyBwb29sLlxuICAgICAgcGFyZW50Ll9zb3VuZHMucHVzaChzZWxmKTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBuZXcgbm9kZS5cbiAgICAgIHNlbGYuY3JlYXRlKCk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW5kIHNldHVwIGEgbmV3IHNvdW5kIG9iamVjdCwgd2hldGhlciBIVE1MNSBBdWRpbyBvciBXZWIgQXVkaW8uXG4gICAgICogQHJldHVybiB7U291bmR9XG4gICAgICovXG4gICAgY3JlYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBwYXJlbnQgPSBzZWxmLl9wYXJlbnQ7XG4gICAgICB2YXIgdm9sdW1lID0gKEhvd2xlci5fbXV0ZWQgfHwgc2VsZi5fbXV0ZWQgfHwgc2VsZi5fcGFyZW50Ll9tdXRlZCkgPyAwIDogc2VsZi5fdm9sdW1lO1xuXG4gICAgICBpZiAocGFyZW50Ll93ZWJBdWRpbykge1xuICAgICAgICAvLyBDcmVhdGUgdGhlIGdhaW4gbm9kZSBmb3IgY29udHJvbGxpbmcgdm9sdW1lICh0aGUgc291cmNlIHdpbGwgY29ubmVjdCB0byB0aGlzKS5cbiAgICAgICAgc2VsZi5fbm9kZSA9ICh0eXBlb2YgSG93bGVyLmN0eC5jcmVhdGVHYWluID09PSAndW5kZWZpbmVkJykgPyBIb3dsZXIuY3R4LmNyZWF0ZUdhaW5Ob2RlKCkgOiBIb3dsZXIuY3R4LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgc2VsZi5fbm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKHZvbHVtZSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgIHNlbGYuX25vZGUucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5fbm9kZS5jb25uZWN0KEhvd2xlci5tYXN0ZXJHYWluKTtcbiAgICAgIH0gZWxzZSBpZiAoIUhvd2xlci5ub0F1ZGlvKSB7XG4gICAgICAgIC8vIEdldCBhbiB1bmxvY2tlZCBBdWRpbyBvYmplY3QgZnJvbSB0aGUgcG9vbC5cbiAgICAgICAgc2VsZi5fbm9kZSA9IEhvd2xlci5fb2J0YWluSHRtbDVBdWRpbygpO1xuXG4gICAgICAgIC8vIExpc3RlbiBmb3IgZXJyb3JzIChodHRwOi8vZGV2LnczLm9yZy9odG1sNS9zcGVjLWF1dGhvci12aWV3L3NwZWMuaHRtbCNtZWRpYWVycm9yKS5cbiAgICAgICAgc2VsZi5fZXJyb3JGbiA9IHNlbGYuX2Vycm9yTGlzdGVuZXIuYmluZChzZWxmKTtcbiAgICAgICAgc2VsZi5fbm9kZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHNlbGYuX2Vycm9yRm4sIGZhbHNlKTtcblxuICAgICAgICAvLyBMaXN0ZW4gZm9yICdjYW5wbGF5dGhyb3VnaCcgZXZlbnQgdG8gbGV0IHVzIGtub3cgdGhlIHNvdW5kIGlzIHJlYWR5LlxuICAgICAgICBzZWxmLl9sb2FkRm4gPSBzZWxmLl9sb2FkTGlzdGVuZXIuYmluZChzZWxmKTtcbiAgICAgICAgc2VsZi5fbm9kZS5hZGRFdmVudExpc3RlbmVyKEhvd2xlci5fY2FuUGxheUV2ZW50LCBzZWxmLl9sb2FkRm4sIGZhbHNlKTtcblxuICAgICAgICAvLyBMaXN0ZW4gZm9yIHRoZSAnZW5kZWQnIGV2ZW50IG9uIHRoZSBzb3VuZCB0byBhY2NvdW50IGZvciBlZGdlLWNhc2Ugd2hlcmVcbiAgICAgICAgLy8gYSBmaW5pdGUgc291bmQgaGFzIGEgZHVyYXRpb24gb2YgSW5maW5pdHkuXG4gICAgICAgIHNlbGYuX2VuZEZuID0gc2VsZi5fZW5kTGlzdGVuZXIuYmluZChzZWxmKTtcbiAgICAgICAgc2VsZi5fbm9kZS5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIHNlbGYuX2VuZEZuLCBmYWxzZSk7XG5cbiAgICAgICAgLy8gU2V0dXAgdGhlIG5ldyBhdWRpbyBub2RlLlxuICAgICAgICBzZWxmLl9ub2RlLnNyYyA9IHBhcmVudC5fc3JjO1xuICAgICAgICBzZWxmLl9ub2RlLnByZWxvYWQgPSBwYXJlbnQuX3ByZWxvYWQgPT09IHRydWUgPyAnYXV0bycgOiBwYXJlbnQuX3ByZWxvYWQ7XG4gICAgICAgIHNlbGYuX25vZGUudm9sdW1lID0gdm9sdW1lICogSG93bGVyLnZvbHVtZSgpO1xuXG4gICAgICAgIC8vIEJlZ2luIGxvYWRpbmcgdGhlIHNvdXJjZS5cbiAgICAgICAgc2VsZi5fbm9kZS5sb2FkKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgcGFyYW1ldGVycyBvZiB0aGlzIHNvdW5kIHRvIHRoZSBvcmlnaW5hbCBzdGF0ZSAoZm9yIHJlY3ljbGUpLlxuICAgICAqIEByZXR1cm4ge1NvdW5kfVxuICAgICAqL1xuICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBwYXJlbnQgPSBzZWxmLl9wYXJlbnQ7XG5cbiAgICAgIC8vIFJlc2V0IGFsbCBvZiB0aGUgcGFyYW1ldGVycyBvZiB0aGlzIHNvdW5kLlxuICAgICAgc2VsZi5fbXV0ZWQgPSBwYXJlbnQuX211dGVkO1xuICAgICAgc2VsZi5fbG9vcCA9IHBhcmVudC5fbG9vcDtcbiAgICAgIHNlbGYuX3ZvbHVtZSA9IHBhcmVudC5fdm9sdW1lO1xuICAgICAgc2VsZi5fcmF0ZSA9IHBhcmVudC5fcmF0ZTtcbiAgICAgIHNlbGYuX3NlZWsgPSAwO1xuICAgICAgc2VsZi5fcmF0ZVNlZWsgPSAwO1xuICAgICAgc2VsZi5fcGF1c2VkID0gdHJ1ZTtcbiAgICAgIHNlbGYuX2VuZGVkID0gdHJ1ZTtcbiAgICAgIHNlbGYuX3Nwcml0ZSA9ICdfX2RlZmF1bHQnO1xuXG4gICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBJRCBzbyB0aGF0IGl0IGlzbid0IGNvbmZ1c2VkIHdpdGggdGhlIHByZXZpb3VzIHNvdW5kLlxuICAgICAgc2VsZi5faWQgPSArK0hvd2xlci5fY291bnRlcjtcblxuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhUTUw1IEF1ZGlvIGVycm9yIGxpc3RlbmVyIGNhbGxiYWNrLlxuICAgICAqL1xuICAgIF9lcnJvckxpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgLy8gRmlyZSBhbiBlcnJvciBldmVudCBhbmQgcGFzcyBiYWNrIHRoZSBjb2RlLlxuICAgICAgc2VsZi5fcGFyZW50Ll9lbWl0KCdsb2FkZXJyb3InLCBzZWxmLl9pZCwgc2VsZi5fbm9kZS5lcnJvciA/IHNlbGYuX25vZGUuZXJyb3IuY29kZSA6IDApO1xuXG4gICAgICAvLyBDbGVhciB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICBzZWxmLl9ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgc2VsZi5fZXJyb3JGbiwgZmFsc2UpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIVE1MNSBBdWRpbyBjYW5wbGF5dGhyb3VnaCBsaXN0ZW5lciBjYWxsYmFjay5cbiAgICAgKi9cbiAgICBfbG9hZExpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBwYXJlbnQgPSBzZWxmLl9wYXJlbnQ7XG5cbiAgICAgIC8vIFJvdW5kIHVwIHRoZSBkdXJhdGlvbiB0byBhY2NvdW50IGZvciB0aGUgbG93ZXIgcHJlY2lzaW9uIGluIEhUTUw1IEF1ZGlvLlxuICAgICAgcGFyZW50Ll9kdXJhdGlvbiA9IE1hdGguY2VpbChzZWxmLl9ub2RlLmR1cmF0aW9uICogMTApIC8gMTA7XG5cbiAgICAgIC8vIFNldHVwIGEgc3ByaXRlIGlmIG5vbmUgaXMgZGVmaW5lZC5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhwYXJlbnQuX3Nwcml0ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHBhcmVudC5fc3ByaXRlID0ge19fZGVmYXVsdDogWzAsIHBhcmVudC5fZHVyYXRpb24gKiAxMDAwXX07XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJlbnQuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgICBwYXJlbnQuX3N0YXRlID0gJ2xvYWRlZCc7XG4gICAgICAgIHBhcmVudC5fZW1pdCgnbG9hZCcpO1xuICAgICAgICBwYXJlbnQuX2xvYWRRdWV1ZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBDbGVhciB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICBzZWxmLl9ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoSG93bGVyLl9jYW5QbGF5RXZlbnQsIHNlbGYuX2xvYWRGbiwgZmFsc2UpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIVE1MNSBBdWRpbyBlbmRlZCBsaXN0ZW5lciBjYWxsYmFjay5cbiAgICAgKi9cbiAgICBfZW5kTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHBhcmVudCA9IHNlbGYuX3BhcmVudDtcblxuICAgICAgLy8gT25seSBoYW5kbGUgdGhlIGBlbmRlZGBgIGV2ZW50IGlmIHRoZSBkdXJhdGlvbiBpcyBJbmZpbml0eS5cbiAgICAgIGlmIChwYXJlbnQuX2R1cmF0aW9uID09PSBJbmZpbml0eSkge1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHBhcmVudCBkdXJhdGlvbiB0byBtYXRjaCB0aGUgcmVhbCBhdWRpbyBkdXJhdGlvbi5cbiAgICAgICAgLy8gUm91bmQgdXAgdGhlIGR1cmF0aW9uIHRvIGFjY291bnQgZm9yIHRoZSBsb3dlciBwcmVjaXNpb24gaW4gSFRNTDUgQXVkaW8uXG4gICAgICAgIHBhcmVudC5fZHVyYXRpb24gPSBNYXRoLmNlaWwoc2VsZi5fbm9kZS5kdXJhdGlvbiAqIDEwKSAvIDEwO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc3ByaXRlIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHJlYWwgZHVyYXRpb24uXG4gICAgICAgIGlmIChwYXJlbnQuX3Nwcml0ZS5fX2RlZmF1bHRbMV0gPT09IEluZmluaXR5KSB7XG4gICAgICAgICAgcGFyZW50Ll9zcHJpdGUuX19kZWZhdWx0WzFdID0gcGFyZW50Ll9kdXJhdGlvbiAqIDEwMDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSdW4gdGhlIHJlZ3VsYXIgZW5kZWQgbWV0aG9kLlxuICAgICAgICBwYXJlbnQuX2VuZGVkKHNlbGYpO1xuICAgICAgfVxuXG4gICAgICAvLyBDbGVhciB0aGUgZXZlbnQgbGlzdGVuZXIgc2luY2UgdGhlIGR1cmF0aW9uIGlzIG5vdyBjb3JyZWN0LlxuICAgICAgc2VsZi5fbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlbmRlZCcsIHNlbGYuX2VuZEZuLCBmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKiBIZWxwZXIgTWV0aG9kcyAqKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICB2YXIgY2FjaGUgPSB7fTtcblxuICAvKipcbiAgICogQnVmZmVyIGEgc291bmQgZnJvbSBVUkwsIERhdGEgVVJJIG9yIGNhY2hlIGFuZCBkZWNvZGUgdG8gYXVkaW8gc291cmNlIChXZWIgQXVkaW8gQVBJKS5cbiAgICogQHBhcmFtICB7SG93bH0gc2VsZlxuICAgKi9cbiAgdmFyIGxvYWRCdWZmZXIgPSBmdW5jdGlvbihzZWxmKSB7XG4gICAgdmFyIHVybCA9IHNlbGYuX3NyYztcblxuICAgIC8vIENoZWNrIGlmIHRoZSBidWZmZXIgaGFzIGFscmVhZHkgYmVlbiBjYWNoZWQgYW5kIHVzZSBpdCBpbnN0ZWFkLlxuICAgIGlmIChjYWNoZVt1cmxdKSB7XG4gICAgICAvLyBTZXQgdGhlIGR1cmF0aW9uIGZyb20gdGhlIGNhY2hlLlxuICAgICAgc2VsZi5fZHVyYXRpb24gPSBjYWNoZVt1cmxdLmR1cmF0aW9uO1xuXG4gICAgICAvLyBMb2FkIHRoZSBzb3VuZCBpbnRvIHRoaXMgSG93bC5cbiAgICAgIGxvYWRTb3VuZChzZWxmKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICgvXmRhdGE6W147XSs7YmFzZTY0LC8udGVzdCh1cmwpKSB7XG4gICAgICAvLyBEZWNvZGUgdGhlIGJhc2U2NCBkYXRhIFVSSSB3aXRob3V0IFhIUiwgc2luY2Ugc29tZSBicm93c2VycyBkb24ndCBzdXBwb3J0IGl0LlxuICAgICAgdmFyIGRhdGEgPSBhdG9iKHVybC5zcGxpdCgnLCcpWzFdKTtcbiAgICAgIHZhciBkYXRhVmlldyA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoKTtcbiAgICAgIGZvciAodmFyIGk9MDsgaTxkYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGRhdGFWaWV3W2ldID0gZGF0YS5jaGFyQ29kZUF0KGkpO1xuICAgICAgfVxuXG4gICAgICBkZWNvZGVBdWRpb0RhdGEoZGF0YVZpZXcuYnVmZmVyLCBzZWxmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTG9hZCB0aGUgYnVmZmVyIGZyb20gdGhlIFVSTC5cbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHhoci5vcGVuKHNlbGYuX3hoci5tZXRob2QsIHVybCwgdHJ1ZSk7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gc2VsZi5feGhyLndpdGhDcmVkZW50aWFscztcbiAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuXG4gICAgICAvLyBBcHBseSBhbnkgY3VzdG9tIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3QuXG4gICAgICBpZiAoc2VsZi5feGhyLmhlYWRlcnMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc2VsZi5feGhyLmhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBzZWxmLl94aHIuaGVhZGVyc1trZXldKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGdldCBhIHN1Y2Nlc3NmdWwgcmVzcG9uc2UgYmFjay5cbiAgICAgICAgdmFyIGNvZGUgPSAoeGhyLnN0YXR1cyArICcnKVswXTtcbiAgICAgICAgaWYgKGNvZGUgIT09ICcwJyAmJiBjb2RlICE9PSAnMicgJiYgY29kZSAhPT0gJzMnKSB7XG4gICAgICAgICAgc2VsZi5fZW1pdCgnbG9hZGVycm9yJywgbnVsbCwgJ0ZhaWxlZCBsb2FkaW5nIGF1ZGlvIGZpbGUgd2l0aCBzdGF0dXM6ICcgKyB4aHIuc3RhdHVzICsgJy4nKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkZWNvZGVBdWRpb0RhdGEoeGhyLnJlc3BvbnNlLCBzZWxmKTtcbiAgICAgIH07XG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbiBlcnJvciwgc3dpdGNoIHRvIEhUTUw1IEF1ZGlvLlxuICAgICAgICBpZiAoc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgICAgICBzZWxmLl9odG1sNSA9IHRydWU7XG4gICAgICAgICAgc2VsZi5fd2ViQXVkaW8gPSBmYWxzZTtcbiAgICAgICAgICBzZWxmLl9zb3VuZHMgPSBbXTtcbiAgICAgICAgICBkZWxldGUgY2FjaGVbdXJsXTtcbiAgICAgICAgICBzZWxmLmxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHNhZmVYaHJTZW5kKHhocik7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSBYSFIgcmVxdWVzdCB3cmFwcGVkIGluIGEgdHJ5L2NhdGNoLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHhociBYSFIgdG8gc2VuZC5cbiAgICovXG4gIHZhciBzYWZlWGhyU2VuZCA9IGZ1bmN0aW9uKHhocikge1xuICAgIHRyeSB7XG4gICAgICB4aHIuc2VuZCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHhoci5vbmVycm9yKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEZWNvZGUgYXVkaW8gZGF0YSBmcm9tIGFuIGFycmF5IGJ1ZmZlci5cbiAgICogQHBhcmFtICB7QXJyYXlCdWZmZXJ9IGFycmF5YnVmZmVyIFRoZSBhdWRpbyBkYXRhLlxuICAgKiBAcGFyYW0gIHtIb3dsfSAgICAgICAgc2VsZlxuICAgKi9cbiAgdmFyIGRlY29kZUF1ZGlvRGF0YSA9IGZ1bmN0aW9uKGFycmF5YnVmZmVyLCBzZWxmKSB7XG4gICAgLy8gRmlyZSBhIGxvYWQgZXJyb3IgaWYgc29tZXRoaW5nIGJyb2tlLlxuICAgIHZhciBlcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5fZW1pdCgnbG9hZGVycm9yJywgbnVsbCwgJ0RlY29kaW5nIGF1ZGlvIGRhdGEgZmFpbGVkLicpO1xuICAgIH07XG5cbiAgICAvLyBMb2FkIHRoZSBzb3VuZCBvbiBzdWNjZXNzLlxuICAgIHZhciBzdWNjZXNzID0gZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICBpZiAoYnVmZmVyICYmIHNlbGYuX3NvdW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNhY2hlW3NlbGYuX3NyY10gPSBidWZmZXI7XG4gICAgICAgIGxvYWRTb3VuZChzZWxmLCBidWZmZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRGVjb2RlIHRoZSBidWZmZXIgaW50byBhbiBhdWRpbyBzb3VyY2UuXG4gICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiBIb3dsZXIuY3R4LmRlY29kZUF1ZGlvRGF0YS5sZW5ndGggPT09IDEpIHtcbiAgICAgIEhvd2xlci5jdHguZGVjb2RlQXVkaW9EYXRhKGFycmF5YnVmZmVyKS50aGVuKHN1Y2Nlc3MpLmNhdGNoKGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgSG93bGVyLmN0eC5kZWNvZGVBdWRpb0RhdGEoYXJyYXlidWZmZXIsIHN1Y2Nlc3MsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU291bmQgaXMgbm93IGxvYWRlZCwgc28gZmluaXNoIHNldHRpbmcgZXZlcnl0aGluZyB1cCBhbmQgZmlyZSB0aGUgbG9hZGVkIGV2ZW50LlxuICAgKiBAcGFyYW0gIHtIb3dsfSBzZWxmXG4gICAqIEBwYXJhbSAge09iamVjdH0gYnVmZmVyIFRoZSBkZWNvZGVkIGJ1ZmZlciBzb3VuZCBzb3VyY2UuXG4gICAqL1xuICB2YXIgbG9hZFNvdW5kID0gZnVuY3Rpb24oc2VsZiwgYnVmZmVyKSB7XG4gICAgLy8gU2V0IHRoZSBkdXJhdGlvbi5cbiAgICBpZiAoYnVmZmVyICYmICFzZWxmLl9kdXJhdGlvbikge1xuICAgICAgc2VsZi5fZHVyYXRpb24gPSBidWZmZXIuZHVyYXRpb247XG4gICAgfVxuXG4gICAgLy8gU2V0dXAgYSBzcHJpdGUgaWYgbm9uZSBpcyBkZWZpbmVkLlxuICAgIGlmIChPYmplY3Qua2V5cyhzZWxmLl9zcHJpdGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2VsZi5fc3ByaXRlID0ge19fZGVmYXVsdDogWzAsIHNlbGYuX2R1cmF0aW9uICogMTAwMF19O1xuICAgIH1cblxuICAgIC8vIEZpcmUgdGhlIGxvYWRlZCBldmVudC5cbiAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICBzZWxmLl9zdGF0ZSA9ICdsb2FkZWQnO1xuICAgICAgc2VsZi5fZW1pdCgnbG9hZCcpO1xuICAgICAgc2VsZi5fbG9hZFF1ZXVlKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTZXR1cCB0aGUgYXVkaW8gY29udGV4dCB3aGVuIGF2YWlsYWJsZSwgb3Igc3dpdGNoIHRvIEhUTUw1IEF1ZGlvIG1vZGUuXG4gICAqL1xuICB2YXIgc2V0dXBBdWRpb0NvbnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIGFscmVhZHkgZGV0ZWN0ZWQgdGhhdCBXZWIgQXVkaW8gaXNuJ3Qgc3VwcG9ydGVkLCBkb24ndCBydW4gdGhpcyBzdGVwIGFnYWluLlxuICAgIGlmICghSG93bGVyLnVzaW5nV2ViQXVkaW8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBhcmUgdXNpbmcgV2ViIEF1ZGlvIGFuZCBzZXR1cCB0aGUgQXVkaW9Db250ZXh0IGlmIHdlIGFyZS5cbiAgICB0cnkge1xuICAgICAgaWYgKHR5cGVvZiBBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIEhvd2xlci5jdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB3ZWJraXRBdWRpb0NvbnRleHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIEhvd2xlci5jdHggPSBuZXcgd2Via2l0QXVkaW9Db250ZXh0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBIb3dsZXIudXNpbmdXZWJBdWRpbyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgSG93bGVyLnVzaW5nV2ViQXVkaW8gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgYXVkaW8gY29udGV4dCBjcmVhdGlvbiBzdGlsbCBmYWlsZWQsIHNldCB1c2luZyB3ZWIgYXVkaW8gdG8gZmFsc2UuXG4gICAgaWYgKCFIb3dsZXIuY3R4KSB7XG4gICAgICBIb3dsZXIudXNpbmdXZWJBdWRpbyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGEgd2VidmlldyBpcyBiZWluZyB1c2VkIG9uIGlPUzggb3IgZWFybGllciAocmF0aGVyIHRoYW4gdGhlIGJyb3dzZXIpLlxuICAgIC8vIElmIGl0IGlzLCBkaXNhYmxlIFdlYiBBdWRpbyBhcyBpdCBjYXVzZXMgY3Jhc2hpbmcuXG4gICAgdmFyIGlPUyA9ICgvaVAoaG9uZXxvZHxhZCkvLnRlc3QoSG93bGVyLl9uYXZpZ2F0b3IgJiYgSG93bGVyLl9uYXZpZ2F0b3IucGxhdGZvcm0pKTtcbiAgICB2YXIgYXBwVmVyc2lvbiA9IEhvd2xlci5fbmF2aWdhdG9yICYmIEhvd2xlci5fbmF2aWdhdG9yLmFwcFZlcnNpb24ubWF0Y2goL09TIChcXGQrKV8oXFxkKylfPyhcXGQrKT8vKTtcbiAgICB2YXIgdmVyc2lvbiA9IGFwcFZlcnNpb24gPyBwYXJzZUludChhcHBWZXJzaW9uWzFdLCAxMCkgOiBudWxsO1xuICAgIGlmIChpT1MgJiYgdmVyc2lvbiAmJiB2ZXJzaW9uIDwgOSkge1xuICAgICAgdmFyIHNhZmFyaSA9IC9zYWZhcmkvLnRlc3QoSG93bGVyLl9uYXZpZ2F0b3IgJiYgSG93bGVyLl9uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKEhvd2xlci5fbmF2aWdhdG9yICYmICFzYWZhcmkpIHtcbiAgICAgICAgSG93bGVyLnVzaW5nV2ViQXVkaW8gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYW5kIGV4cG9zZSB0aGUgbWFzdGVyIEdhaW5Ob2RlIHdoZW4gdXNpbmcgV2ViIEF1ZGlvICh1c2VmdWwgZm9yIHBsdWdpbnMgb3IgYWR2YW5jZWQgdXNhZ2UpLlxuICAgIGlmIChIb3dsZXIudXNpbmdXZWJBdWRpbykge1xuICAgICAgSG93bGVyLm1hc3RlckdhaW4gPSAodHlwZW9mIEhvd2xlci5jdHguY3JlYXRlR2FpbiA9PT0gJ3VuZGVmaW5lZCcpID8gSG93bGVyLmN0eC5jcmVhdGVHYWluTm9kZSgpIDogSG93bGVyLmN0eC5jcmVhdGVHYWluKCk7XG4gICAgICBIb3dsZXIubWFzdGVyR2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKEhvd2xlci5fbXV0ZWQgPyAwIDogSG93bGVyLl92b2x1bWUsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgSG93bGVyLm1hc3RlckdhaW4uY29ubmVjdChIb3dsZXIuY3R4LmRlc3RpbmF0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZS1ydW4gdGhlIHNldHVwIG9uIEhvd2xlci5cbiAgICBIb3dsZXIuX3NldHVwKCk7XG4gIH07XG5cbiAgLy8gQWRkIHN1cHBvcnQgZm9yIEFNRCAoQXN5bmNocm9ub3VzIE1vZHVsZSBEZWZpbml0aW9uKSBsaWJyYXJpZXMgc3VjaCBhcyByZXF1aXJlLmpzLlxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIEhvd2xlcjogSG93bGVyLFxuICAgICAgICBIb3dsOiBIb3dsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQWRkIHN1cHBvcnQgZm9yIENvbW1vbkpTIGxpYnJhcmllcyBzdWNoIGFzIGJyb3dzZXJpZnkuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBleHBvcnRzLkhvd2xlciA9IEhvd2xlcjtcbiAgICBleHBvcnRzLkhvd2wgPSBIb3dsO1xuICB9XG5cbiAgLy8gQWRkIHRvIGdsb2JhbCBpbiBOb2RlLmpzIChmb3IgdGVzdGluZywgZXRjKS5cbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLkhvd2xlckdsb2JhbCA9IEhvd2xlckdsb2JhbDtcbiAgICBnbG9iYWwuSG93bGVyID0gSG93bGVyO1xuICAgIGdsb2JhbC5Ib3dsID0gSG93bDtcbiAgICBnbG9iYWwuU291bmQgPSBTb3VuZDtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyAgLy8gRGVmaW5lIGdsb2JhbGx5IGluIGNhc2UgQU1EIGlzIG5vdCBhdmFpbGFibGUgb3IgdW51c2VkLlxuICAgIHdpbmRvdy5Ib3dsZXJHbG9iYWwgPSBIb3dsZXJHbG9iYWw7XG4gICAgd2luZG93Lkhvd2xlciA9IEhvd2xlcjtcbiAgICB3aW5kb3cuSG93bCA9IEhvd2w7XG4gICAgd2luZG93LlNvdW5kID0gU291bmQ7XG4gIH1cbn0pKCk7XG5cblxuLyohXG4gKiAgU3BhdGlhbCBQbHVnaW4gLSBBZGRzIHN1cHBvcnQgZm9yIHN0ZXJlbyBhbmQgM0QgYXVkaW8gd2hlcmUgV2ViIEF1ZGlvIGlzIHN1cHBvcnRlZC5cbiAqICBcbiAqICBob3dsZXIuanMgdjIuMi4zXG4gKiAgaG93bGVyanMuY29tXG4gKlxuICogIChjKSAyMDEzLTIwMjAsIEphbWVzIFNpbXBzb24gb2YgR29sZEZpcmUgU3R1ZGlvc1xuICogIGdvbGRmaXJlc3R1ZGlvcy5jb21cbiAqXG4gKiAgTUlUIExpY2Vuc2VcbiAqL1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFNldHVwIGRlZmF1bHQgcHJvcGVydGllcy5cbiAgSG93bGVyR2xvYmFsLnByb3RvdHlwZS5fcG9zID0gWzAsIDAsIDBdO1xuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlLl9vcmllbnRhdGlvbiA9IFswLCAwLCAtMSwgMCwgMSwgMF07XG5cbiAgLyoqIEdsb2JhbCBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgc3RlcmVvIHBhbm5pbmcgcG9zaXRpb24gb2YgYWxsIGN1cnJlbnQgSG93bHMuXG4gICAqIEZ1dHVyZSBIb3dscyB3aWxsIG5vdCB1c2UgdGhpcyB2YWx1ZSB1bmxlc3MgZXhwbGljaXRseSBzZXQuXG4gICAqIEBwYXJhbSAge051bWJlcn0gcGFuIEEgdmFsdWUgb2YgLTEuMCBpcyBhbGwgdGhlIHdheSBsZWZ0IGFuZCAxLjAgaXMgYWxsIHRoZSB3YXkgcmlnaHQuXG4gICAqIEByZXR1cm4ge0hvd2xlci9OdW1iZXJ9ICAgICBTZWxmIG9yIGN1cnJlbnQgc3RlcmVvIHBhbm5pbmcgdmFsdWUuXG4gICAqL1xuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlLnN0ZXJlbyA9IGZ1bmN0aW9uKHBhbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5jdHggfHwgIXNlbGYuY3R4Lmxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggYWxsIEhvd2xzIGFuZCB1cGRhdGUgdGhlaXIgc3RlcmVvIHBhbm5pbmcuXG4gICAgZm9yICh2YXIgaT1zZWxmLl9ob3dscy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICBzZWxmLl9ob3dsc1tpXS5zdGVyZW8ocGFuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgcG9zaXRpb24gb2YgdGhlIGxpc3RlbmVyIGluIDNEIGNhcnRlc2lhbiBzcGFjZS4gU291bmRzIHVzaW5nXG4gICAqIDNEIHBvc2l0aW9uIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhlIGxpc3RlbmVyJ3MgcG9zaXRpb24uXG4gICAqIEBwYXJhbSAge051bWJlcn0geCBUaGUgeC1wb3NpdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geSBUaGUgeS1wb3NpdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geiBUaGUgei1wb3NpdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge0hvd2xlci9BcnJheX0gICBTZWxmIG9yIGN1cnJlbnQgbGlzdGVuZXIgcG9zaXRpb24uXG4gICAqL1xuICBIb3dsZXJHbG9iYWwucHJvdG90eXBlLnBvcyA9IGZ1bmN0aW9uKHgsIHksIHopIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBTdG9wIHJpZ2h0IGhlcmUgaWYgbm90IHVzaW5nIFdlYiBBdWRpby5cbiAgICBpZiAoIXNlbGYuY3R4IHx8ICFzZWxmLmN0eC5saXN0ZW5lcikge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0cyBmb3Igb3B0aW9uYWwgJ3knICYgJ3onLlxuICAgIHkgPSAodHlwZW9mIHkgIT09ICdudW1iZXInKSA/IHNlbGYuX3Bvc1sxXSA6IHk7XG4gICAgeiA9ICh0eXBlb2YgeiAhPT0gJ251bWJlcicpID8gc2VsZi5fcG9zWzJdIDogejtcblxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHNlbGYuX3BvcyA9IFt4LCB5LCB6XTtcblxuICAgICAgaWYgKHR5cGVvZiBzZWxmLmN0eC5saXN0ZW5lci5wb3NpdGlvblggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLnBvc2l0aW9uWC5zZXRUYXJnZXRBdFRpbWUoc2VsZi5fcG9zWzBdLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lLCAwLjEpO1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci5wb3NpdGlvblkuc2V0VGFyZ2V0QXRUaW1lKHNlbGYuX3Bvc1sxXSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSwgMC4xKTtcbiAgICAgICAgc2VsZi5jdHgubGlzdGVuZXIucG9zaXRpb25aLnNldFRhcmdldEF0VGltZShzZWxmLl9wb3NbMl0sIEhvd2xlci5jdHguY3VycmVudFRpbWUsIDAuMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci5zZXRQb3NpdGlvbihzZWxmLl9wb3NbMF0sIHNlbGYuX3Bvc1sxXSwgc2VsZi5fcG9zWzJdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNlbGYuX3BvcztcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgZGlyZWN0aW9uIHRoZSBsaXN0ZW5lciBpcyBwb2ludGluZyBpbiB0aGUgM0QgY2FydGVzaWFuIHNwYWNlLlxuICAgKiBBIGZyb250IGFuZCB1cCB2ZWN0b3IgbXVzdCBiZSBwcm92aWRlZC4gVGhlIGZyb250IGlzIHRoZSBkaXJlY3Rpb24gdGhlXG4gICAqIGZhY2Ugb2YgdGhlIGxpc3RlbmVyIGlzIHBvaW50aW5nLCBhbmQgdXAgaXMgdGhlIGRpcmVjdGlvbiB0aGUgdG9wIG9mIHRoZVxuICAgKiBsaXN0ZW5lciBpcyBwb2ludGluZy4gVGh1cywgdGhlc2UgdmFsdWVzIGFyZSBleHBlY3RlZCB0byBiZSBhdCByaWdodCBhbmdsZXNcbiAgICogZnJvbSBlYWNoIG90aGVyLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHggICBUaGUgeC1vcmllbnRhdGlvbiBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geSAgIFRoZSB5LW9yaWVudGF0aW9uIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB6ICAgVGhlIHotb3JpZW50YXRpb24gb2YgdGhlIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHhVcCBUaGUgeC1vcmllbnRhdGlvbiBvZiB0aGUgdG9wIG9mIHRoZSBsaXN0ZW5lci5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB5VXAgVGhlIHktb3JpZW50YXRpb24gb2YgdGhlIHRvcCBvZiB0aGUgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0gelVwIFRoZSB6LW9yaWVudGF0aW9uIG9mIHRoZSB0b3Agb2YgdGhlIGxpc3RlbmVyLlxuICAgKiBAcmV0dXJuIHtIb3dsZXIvQXJyYXl9ICAgICBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgb3JpZW50YXRpb24gdmVjdG9ycy5cbiAgICovXG4gIEhvd2xlckdsb2JhbC5wcm90b3R5cGUub3JpZW50YXRpb24gPSBmdW5jdGlvbih4LCB5LCB6LCB4VXAsIHlVcCwgelVwKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gU3RvcCByaWdodCBoZXJlIGlmIG5vdCB1c2luZyBXZWIgQXVkaW8uXG4gICAgaWYgKCFzZWxmLmN0eCB8fCAhc2VsZi5jdHgubGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdHMgZm9yIG9wdGlvbmFsICd5JyAmICd6Jy5cbiAgICB2YXIgb3IgPSBzZWxmLl9vcmllbnRhdGlvbjtcbiAgICB5ID0gKHR5cGVvZiB5ICE9PSAnbnVtYmVyJykgPyBvclsxXSA6IHk7XG4gICAgeiA9ICh0eXBlb2YgeiAhPT0gJ251bWJlcicpID8gb3JbMl0gOiB6O1xuICAgIHhVcCA9ICh0eXBlb2YgeFVwICE9PSAnbnVtYmVyJykgPyBvclszXSA6IHhVcDtcbiAgICB5VXAgPSAodHlwZW9mIHlVcCAhPT0gJ251bWJlcicpID8gb3JbNF0gOiB5VXA7XG4gICAgelVwID0gKHR5cGVvZiB6VXAgIT09ICdudW1iZXInKSA/IG9yWzVdIDogelVwO1xuXG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgc2VsZi5fb3JpZW50YXRpb24gPSBbeCwgeSwgeiwgeFVwLCB5VXAsIHpVcF07XG5cbiAgICAgIGlmICh0eXBlb2Ygc2VsZi5jdHgubGlzdGVuZXIuZm9yd2FyZFggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLmZvcndhcmRYLnNldFRhcmdldEF0VGltZSh4LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lLCAwLjEpO1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci5mb3J3YXJkWS5zZXRUYXJnZXRBdFRpbWUoeSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSwgMC4xKTtcbiAgICAgICAgc2VsZi5jdHgubGlzdGVuZXIuZm9yd2FyZFouc2V0VGFyZ2V0QXRUaW1lKHosIEhvd2xlci5jdHguY3VycmVudFRpbWUsIDAuMSk7XG4gICAgICAgIHNlbGYuY3R4Lmxpc3RlbmVyLnVwWC5zZXRUYXJnZXRBdFRpbWUoeFVwLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lLCAwLjEpO1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci51cFkuc2V0VGFyZ2V0QXRUaW1lKHlVcCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSwgMC4xKTtcbiAgICAgICAgc2VsZi5jdHgubGlzdGVuZXIudXBaLnNldFRhcmdldEF0VGltZSh6VXAsIEhvd2xlci5jdHguY3VycmVudFRpbWUsIDAuMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmN0eC5saXN0ZW5lci5zZXRPcmllbnRhdGlvbih4LCB5LCB6LCB4VXAsIHlVcCwgelVwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9yO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKiBHcm91cCBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBBZGQgbmV3IHByb3BlcnRpZXMgdG8gdGhlIGNvcmUgaW5pdC5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IF9zdXBlciBDb3JlIGluaXQgbWV0aG9kLlxuICAgKiBAcmV0dXJuIHtIb3dsfVxuICAgKi9cbiAgSG93bC5wcm90b3R5cGUuaW5pdCA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24obykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBTZXR1cCB1c2VyLWRlZmluZWQgZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICAgICAgc2VsZi5fb3JpZW50YXRpb24gPSBvLm9yaWVudGF0aW9uIHx8IFsxLCAwLCAwXTtcbiAgICAgIHNlbGYuX3N0ZXJlbyA9IG8uc3RlcmVvIHx8IG51bGw7XG4gICAgICBzZWxmLl9wb3MgPSBvLnBvcyB8fCBudWxsO1xuICAgICAgc2VsZi5fcGFubmVyQXR0ciA9IHtcbiAgICAgICAgY29uZUlubmVyQW5nbGU6IHR5cGVvZiBvLmNvbmVJbm5lckFuZ2xlICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZUlubmVyQW5nbGUgOiAzNjAsXG4gICAgICAgIGNvbmVPdXRlckFuZ2xlOiB0eXBlb2Ygby5jb25lT3V0ZXJBbmdsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLmNvbmVPdXRlckFuZ2xlIDogMzYwLFxuICAgICAgICBjb25lT3V0ZXJHYWluOiB0eXBlb2Ygby5jb25lT3V0ZXJHYWluICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZU91dGVyR2FpbiA6IDAsXG4gICAgICAgIGRpc3RhbmNlTW9kZWw6IHR5cGVvZiBvLmRpc3RhbmNlTW9kZWwgIT09ICd1bmRlZmluZWQnID8gby5kaXN0YW5jZU1vZGVsIDogJ2ludmVyc2UnLFxuICAgICAgICBtYXhEaXN0YW5jZTogdHlwZW9mIG8ubWF4RGlzdGFuY2UgIT09ICd1bmRlZmluZWQnID8gby5tYXhEaXN0YW5jZSA6IDEwMDAwLFxuICAgICAgICBwYW5uaW5nTW9kZWw6IHR5cGVvZiBvLnBhbm5pbmdNb2RlbCAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5pbmdNb2RlbCA6ICdIUlRGJyxcbiAgICAgICAgcmVmRGlzdGFuY2U6IHR5cGVvZiBvLnJlZkRpc3RhbmNlICE9PSAndW5kZWZpbmVkJyA/IG8ucmVmRGlzdGFuY2UgOiAxLFxuICAgICAgICByb2xsb2ZmRmFjdG9yOiB0eXBlb2Ygby5yb2xsb2ZmRmFjdG9yICE9PSAndW5kZWZpbmVkJyA/IG8ucm9sbG9mZkZhY3RvciA6IDFcbiAgICAgIH07XG5cbiAgICAgIC8vIFNldHVwIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgIHNlbGYuX29uc3RlcmVvID0gby5vbnN0ZXJlbyA/IFt7Zm46IG8ub25zdGVyZW99XSA6IFtdO1xuICAgICAgc2VsZi5fb25wb3MgPSBvLm9ucG9zID8gW3tmbjogby5vbnBvc31dIDogW107XG4gICAgICBzZWxmLl9vbm9yaWVudGF0aW9uID0gby5vbm9yaWVudGF0aW9uID8gW3tmbjogby5vbm9yaWVudGF0aW9ufV0gOiBbXTtcblxuICAgICAgLy8gQ29tcGxldGUgaW5pdGlsaXphdGlvbiB3aXRoIGhvd2xlci5qcyBjb3JlJ3MgaW5pdCBmdW5jdGlvbi5cbiAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBvKTtcbiAgICB9O1xuICB9KShIb3dsLnByb3RvdHlwZS5pbml0KTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgc3RlcmVvIHBhbm5pbmcgb2YgdGhlIGF1ZGlvIHNvdXJjZSBmb3IgdGhpcyBzb3VuZCBvciBhbGwgaW4gdGhlIGdyb3VwLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHBhbiAgQSB2YWx1ZSBvZiAtMS4wIGlzIGFsbCB0aGUgd2F5IGxlZnQgYW5kIDEuMCBpcyBhbGwgdGhlIHdheSByaWdodC5cbiAgICogQHBhcmFtICB7TnVtYmVyfSBpZCAob3B0aW9uYWwpIFRoZSBzb3VuZCBJRC4gSWYgbm9uZSBpcyBwYXNzZWQsIGFsbCBpbiBncm91cCB3aWxsIGJlIHVwZGF0ZWQuXG4gICAqIEByZXR1cm4ge0hvd2wvTnVtYmVyfSAgICBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgc3RlcmVvIHBhbm5pbmcgdmFsdWUuXG4gICAqL1xuICBIb3dsLnByb3RvdHlwZS5zdGVyZW8gPSBmdW5jdGlvbihwYW4sIGlkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gU3RvcCByaWdodCBoZXJlIGlmIG5vdCB1c2luZyBXZWIgQXVkaW8uXG4gICAgaWYgKCFzZWxmLl93ZWJBdWRpbykge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHNvdW5kIGhhc24ndCBsb2FkZWQsIGFkZCBpdCB0byB0aGUgbG9hZCBxdWV1ZSB0byBjaGFuZ2Ugc3RlcmVvIHBhbiB3aGVuIGNhcGFibGUuXG4gICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgIGV2ZW50OiAnc3RlcmVvJyxcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLnN0ZXJlbyhwYW4sIGlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBQYW5uZXJTdGVyZW9Ob2RlIHN1cHBvcnQgYW5kIGZhbGxiYWNrIHRvIFBhbm5lck5vZGUgaWYgaXQgZG9lc24ndCBleGlzdC5cbiAgICB2YXIgcGFubmVyVHlwZSA9ICh0eXBlb2YgSG93bGVyLmN0eC5jcmVhdGVTdGVyZW9QYW5uZXIgPT09ICd1bmRlZmluZWQnKSA/ICdzcGF0aWFsJyA6ICdzdGVyZW8nO1xuXG4gICAgLy8gU2V0dXAgdGhlIGdyb3VwJ3Mgc3RlcmVvIHBhbm5pbmcgaWYgbm8gSUQgaXMgcGFzc2VkLlxuICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBSZXR1cm4gdGhlIGdyb3VwJ3Mgc3RlcmVvIHBhbm5pbmcgaWYgbm8gcGFyYW1ldGVycyBhcmUgcGFzc2VkLlxuICAgICAgaWYgKHR5cGVvZiBwYW4gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHNlbGYuX3N0ZXJlbyA9IHBhbjtcbiAgICAgICAgc2VsZi5fcG9zID0gW3BhbiwgMCwgMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc2VsZi5fc3RlcmVvO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgc3RyZW8gcGFubmluZyBvZiBvbmUgb3IgYWxsIHNvdW5kcyBpbiBncm91cC5cbiAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGFuID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHNvdW5kLl9zdGVyZW8gPSBwYW47XG4gICAgICAgICAgc291bmQuX3BvcyA9IFtwYW4sIDAsIDBdO1xuXG4gICAgICAgICAgaWYgKHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBhcmUgZmFsbGluZyBiYWNrLCBtYWtlIHN1cmUgdGhlIHBhbm5pbmdNb2RlbCBpcyBlcXVhbHBvd2VyLlxuICAgICAgICAgICAgc291bmQuX3Bhbm5lckF0dHIucGFubmluZ01vZGVsID0gJ2VxdWFscG93ZXInO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHBhbm5lciBzZXR1cCBhbmQgY3JlYXRlIGEgbmV3IG9uZSBpZiBub3QuXG4gICAgICAgICAgICBpZiAoIXNvdW5kLl9wYW5uZXIgfHwgIXNvdW5kLl9wYW5uZXIucGFuKSB7XG4gICAgICAgICAgICAgIHNldHVwUGFubmVyKHNvdW5kLCBwYW5uZXJUeXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhbm5lclR5cGUgPT09ICdzcGF0aWFsJykge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHNvdW5kLl9wYW5uZXIucG9zaXRpb25YICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIucG9zaXRpb25YLnNldFZhbHVlQXRUaW1lKHBhbiwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblkuc2V0VmFsdWVBdFRpbWUoMCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblouc2V0VmFsdWVBdFRpbWUoMCwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5zZXRQb3NpdGlvbihwYW4sIDAsIDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnBhbi5zZXRWYWx1ZUF0VGltZShwYW4sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX2VtaXQoJ3N0ZXJlbycsIHNvdW5kLl9pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNvdW5kLl9zdGVyZW87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgM0Qgc3BhdGlhbCBwb3NpdGlvbiBvZiB0aGUgYXVkaW8gc291cmNlIGZvciB0aGlzIHNvdW5kIG9yIGdyb3VwIHJlbGF0aXZlIHRvIHRoZSBnbG9iYWwgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSAge051bWJlcn0geCAgVGhlIHgtcG9zaXRpb24gb2YgdGhlIGF1ZGlvIHNvdXJjZS5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB5ICBUaGUgeS1wb3NpdGlvbiBvZiB0aGUgYXVkaW8gc291cmNlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHogIFRoZSB6LXBvc2l0aW9uIG9mIHRoZSBhdWRpbyBzb3VyY2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0gaWQgKG9wdGlvbmFsKSBUaGUgc291bmQgSUQuIElmIG5vbmUgaXMgcGFzc2VkLCBhbGwgaW4gZ3JvdXAgd2lsbCBiZSB1cGRhdGVkLlxuICAgKiBAcmV0dXJuIHtIb3dsL0FycmF5fSAgICBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgM0Qgc3BhdGlhbCBwb3NpdGlvbjogW3gsIHksIHpdLlxuICAgKi9cbiAgSG93bC5wcm90b3R5cGUucG9zID0gZnVuY3Rpb24oeCwgeSwgeiwgaWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBTdG9wIHJpZ2h0IGhlcmUgaWYgbm90IHVzaW5nIFdlYiBBdWRpby5cbiAgICBpZiAoIXNlbGYuX3dlYkF1ZGlvKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgc291bmQgaGFzbid0IGxvYWRlZCwgYWRkIGl0IHRvIHRoZSBsb2FkIHF1ZXVlIHRvIGNoYW5nZSBwb3NpdGlvbiB3aGVuIGNhcGFibGUuXG4gICAgaWYgKHNlbGYuX3N0YXRlICE9PSAnbG9hZGVkJykge1xuICAgICAgc2VsZi5fcXVldWUucHVzaCh7XG4gICAgICAgIGV2ZW50OiAncG9zJyxcbiAgICAgICAgYWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLnBvcyh4LCB5LCB6LCBpZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHRzIGZvciBvcHRpb25hbCAneScgJiAneicuXG4gICAgeSA9ICh0eXBlb2YgeSAhPT0gJ251bWJlcicpID8gMCA6IHk7XG4gICAgeiA9ICh0eXBlb2YgeiAhPT0gJ251bWJlcicpID8gLTAuNSA6IHo7XG5cbiAgICAvLyBTZXR1cCB0aGUgZ3JvdXAncyBzcGF0aWFsIHBvc2l0aW9uIGlmIG5vIElEIGlzIHBhc3NlZC5cbiAgICBpZiAodHlwZW9mIGlkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gUmV0dXJuIHRoZSBncm91cCdzIHNwYXRpYWwgcG9zaXRpb24gaWYgbm8gcGFyYW1ldGVycyBhcmUgcGFzc2VkLlxuICAgICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICBzZWxmLl9wb3MgPSBbeCwgeSwgel07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc2VsZi5fcG9zO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgc3BhdGlhbCBwb3NpdGlvbiBvZiBvbmUgb3IgYWxsIHNvdW5kcyBpbiBncm91cC5cbiAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBzb3VuZC5fcG9zID0gW3gsIHksIHpdO1xuXG4gICAgICAgICAgaWYgKHNvdW5kLl9ub2RlKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHBhbm5lciBzZXR1cCBhbmQgY3JlYXRlIGEgbmV3IG9uZSBpZiBub3QuXG4gICAgICAgICAgICBpZiAoIXNvdW5kLl9wYW5uZXIgfHwgc291bmQuX3Bhbm5lci5wYW4pIHtcbiAgICAgICAgICAgICAgc2V0dXBQYW5uZXIoc291bmQsICdzcGF0aWFsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQuX3Bhbm5lci5wb3NpdGlvblggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIucG9zaXRpb25YLnNldFZhbHVlQXRUaW1lKHgsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWS5zZXRWYWx1ZUF0VGltZSh5LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblouc2V0VmFsdWVBdFRpbWUoeiwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnNldFBvc2l0aW9uKHgsIHksIHopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX2VtaXQoJ3BvcycsIHNvdW5kLl9pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNvdW5kLl9wb3M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcblxuICAvKipcbiAgICogR2V0L3NldCB0aGUgZGlyZWN0aW9uIHRoZSBhdWRpbyBzb3VyY2UgaXMgcG9pbnRpbmcgaW4gdGhlIDNEIGNhcnRlc2lhbiBjb29yZGluYXRlXG4gICAqIHNwYWNlLiBEZXBlbmRpbmcgb24gaG93IGRpcmVjdGlvbiB0aGUgc291bmQgaXMsIGJhc2VkIG9uIHRoZSBgY29uZWAgYXR0cmlidXRlcyxcbiAgICogYSBzb3VuZCBwb2ludGluZyBhd2F5IGZyb20gdGhlIGxpc3RlbmVyIGNhbiBiZSBxdWlldCBvciBzaWxlbnQuXG4gICAqIEBwYXJhbSAge051bWJlcn0geCAgVGhlIHgtb3JpZW50YXRpb24gb2YgdGhlIHNvdXJjZS5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB5ICBUaGUgeS1vcmllbnRhdGlvbiBvZiB0aGUgc291cmNlLlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHogIFRoZSB6LW9yaWVudGF0aW9uIG9mIHRoZSBzb3VyY2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0gaWQgKG9wdGlvbmFsKSBUaGUgc291bmQgSUQuIElmIG5vbmUgaXMgcGFzc2VkLCBhbGwgaW4gZ3JvdXAgd2lsbCBiZSB1cGRhdGVkLlxuICAgKiBAcmV0dXJuIHtIb3dsL0FycmF5fSAgICBSZXR1cm5zIHNlbGYgb3IgdGhlIGN1cnJlbnQgM0Qgc3BhdGlhbCBvcmllbnRhdGlvbjogW3gsIHksIHpdLlxuICAgKi9cbiAgSG93bC5wcm90b3R5cGUub3JpZW50YXRpb24gPSBmdW5jdGlvbih4LCB5LCB6LCBpZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIFN0b3AgcmlnaHQgaGVyZSBpZiBub3QgdXNpbmcgV2ViIEF1ZGlvLlxuICAgIGlmICghc2VsZi5fd2ViQXVkaW8pIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBzb3VuZCBoYXNuJ3QgbG9hZGVkLCBhZGQgaXQgdG8gdGhlIGxvYWQgcXVldWUgdG8gY2hhbmdlIG9yaWVudGF0aW9uIHdoZW4gY2FwYWJsZS5cbiAgICBpZiAoc2VsZi5fc3RhdGUgIT09ICdsb2FkZWQnKSB7XG4gICAgICBzZWxmLl9xdWV1ZS5wdXNoKHtcbiAgICAgICAgZXZlbnQ6ICdvcmllbnRhdGlvbicsXG4gICAgICAgIGFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi5vcmllbnRhdGlvbih4LCB5LCB6LCBpZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHRzIGZvciBvcHRpb25hbCAneScgJiAneicuXG4gICAgeSA9ICh0eXBlb2YgeSAhPT0gJ251bWJlcicpID8gc2VsZi5fb3JpZW50YXRpb25bMV0gOiB5O1xuICAgIHogPSAodHlwZW9mIHogIT09ICdudW1iZXInKSA/IHNlbGYuX29yaWVudGF0aW9uWzJdIDogejtcblxuICAgIC8vIFNldHVwIHRoZSBncm91cCdzIHNwYXRpYWwgb3JpZW50YXRpb24gaWYgbm8gSUQgaXMgcGFzc2VkLlxuICAgIGlmICh0eXBlb2YgaWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBSZXR1cm4gdGhlIGdyb3VwJ3Mgc3BhdGlhbCBvcmllbnRhdGlvbiBpZiBubyBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQuXG4gICAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHNlbGYuX29yaWVudGF0aW9uID0gW3gsIHksIHpdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuX29yaWVudGF0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgc3BhdGlhbCBvcmllbnRhdGlvbiBvZiBvbmUgb3IgYWxsIHNvdW5kcyBpbiBncm91cC5cbiAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEdldCB0aGUgc291bmQuXG4gICAgICB2YXIgc291bmQgPSBzZWxmLl9zb3VuZEJ5SWQoaWRzW2ldKTtcblxuICAgICAgaWYgKHNvdW5kKSB7XG4gICAgICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBzb3VuZC5fb3JpZW50YXRpb24gPSBbeCwgeSwgel07XG5cbiAgICAgICAgICBpZiAoc291bmQuX25vZGUpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgcGFubmVyIHNldHVwIGFuZCBjcmVhdGUgYSBuZXcgb25lIGlmIG5vdC5cbiAgICAgICAgICAgIGlmICghc291bmQuX3Bhbm5lcikge1xuICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHBvc2l0aW9uIHRvIHNldHVwIHRoZSBub2RlIHdpdGguXG4gICAgICAgICAgICAgIGlmICghc291bmQuX3Bvcykge1xuICAgICAgICAgICAgICAgIHNvdW5kLl9wb3MgPSBzZWxmLl9wb3MgfHwgWzAsIDAsIC0wLjVdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2V0dXBQYW5uZXIoc291bmQsICdzcGF0aWFsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc291bmQuX3Bhbm5lci5vcmllbnRhdGlvblggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHNvdW5kLl9wYW5uZXIub3JpZW50YXRpb25YLnNldFZhbHVlQXRUaW1lKHgsIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLm9yaWVudGF0aW9uWS5zZXRWYWx1ZUF0VGltZSh5LCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgICAgc291bmQuX3Bhbm5lci5vcmllbnRhdGlvblouc2V0VmFsdWVBdFRpbWUoeiwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzb3VuZC5fcGFubmVyLnNldE9yaWVudGF0aW9uKHgsIHksIHopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuX2VtaXQoJ29yaWVudGF0aW9uJywgc291bmQuX2lkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc291bmQuX29yaWVudGF0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldC9zZXQgdGhlIHBhbm5lciBub2RlJ3MgYXR0cmlidXRlcyBmb3IgYSBzb3VuZCBvciBncm91cCBvZiBzb3VuZHMuXG4gICAqIFRoaXMgbWV0aG9kIGNhbiBvcHRpb25hbGwgdGFrZSAwLCAxIG9yIDIgYXJndW1lbnRzLlxuICAgKiAgIHBhbm5lckF0dHIoKSAtPiBSZXR1cm5zIHRoZSBncm91cCdzIHZhbHVlcy5cbiAgICogICBwYW5uZXJBdHRyKGlkKSAtPiBSZXR1cm5zIHRoZSBzb3VuZCBpZCdzIHZhbHVlcy5cbiAgICogICBwYW5uZXJBdHRyKG8pIC0+IFNldCdzIHRoZSB2YWx1ZXMgb2YgYWxsIHNvdW5kcyBpbiB0aGlzIEhvd2wgZ3JvdXAuXG4gICAqICAgcGFubmVyQXR0cihvLCBpZCkgLT4gU2V0J3MgdGhlIHZhbHVlcyBvZiBwYXNzZWQgc291bmQgaWQuXG4gICAqXG4gICAqICAgQXR0cmlidXRlczpcbiAgICogICAgIGNvbmVJbm5lckFuZ2xlIC0gKDM2MCBieSBkZWZhdWx0KSBBIHBhcmFtZXRlciBmb3IgZGlyZWN0aW9uYWwgYXVkaW8gc291cmNlcywgdGhpcyBpcyBhbiBhbmdsZSwgaW4gZGVncmVlcyxcbiAgICogICAgICAgICAgICAgICAgICAgICAgaW5zaWRlIG9mIHdoaWNoIHRoZXJlIHdpbGwgYmUgbm8gdm9sdW1lIHJlZHVjdGlvbi5cbiAgICogICAgIGNvbmVPdXRlckFuZ2xlIC0gKDM2MCBieSBkZWZhdWx0KSBBIHBhcmFtZXRlciBmb3IgZGlyZWN0aW9uYWwgYXVkaW8gc291cmNlcywgdGhpcyBpcyBhbiBhbmdsZSwgaW4gZGVncmVlcyxcbiAgICogICAgICAgICAgICAgICAgICAgICAgb3V0c2lkZSBvZiB3aGljaCB0aGUgdm9sdW1lIHdpbGwgYmUgcmVkdWNlZCB0byBhIGNvbnN0YW50IHZhbHVlIG9mIGBjb25lT3V0ZXJHYWluYC5cbiAgICogICAgIGNvbmVPdXRlckdhaW4gLSAoMCBieSBkZWZhdWx0KSBBIHBhcmFtZXRlciBmb3IgZGlyZWN0aW9uYWwgYXVkaW8gc291cmNlcywgdGhpcyBpcyB0aGUgZ2FpbiBvdXRzaWRlIG9mIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgIGBjb25lT3V0ZXJBbmdsZWAuIEl0IGlzIGEgbGluZWFyIHZhbHVlIGluIHRoZSByYW5nZSBgWzAsIDFdYC5cbiAgICogICAgIGRpc3RhbmNlTW9kZWwgLSAoJ2ludmVyc2UnIGJ5IGRlZmF1bHQpIERldGVybWluZXMgYWxnb3JpdGhtIHVzZWQgdG8gcmVkdWNlIHZvbHVtZSBhcyBhdWRpbyBtb3ZlcyBhd2F5IGZyb21cbiAgICogICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci4gQ2FuIGJlIGBsaW5lYXJgLCBgaW52ZXJzZWAgb3IgYGV4cG9uZW50aWFsLlxuICAgKiAgICAgbWF4RGlzdGFuY2UgLSAoMTAwMDAgYnkgZGVmYXVsdCkgVGhlIG1heGltdW0gZGlzdGFuY2UgYmV0d2VlbiBzb3VyY2UgYW5kIGxpc3RlbmVyLCBhZnRlciB3aGljaCB0aGUgdm9sdW1lXG4gICAqICAgICAgICAgICAgICAgICAgIHdpbGwgbm90IGJlIHJlZHVjZWQgYW55IGZ1cnRoZXIuXG4gICAqICAgICByZWZEaXN0YW5jZSAtICgxIGJ5IGRlZmF1bHQpIEEgcmVmZXJlbmNlIGRpc3RhbmNlIGZvciByZWR1Y2luZyB2b2x1bWUgYXMgc291cmNlIG1vdmVzIGZ1cnRoZXIgZnJvbSB0aGUgbGlzdGVuZXIuXG4gICAqICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgc2ltcGx5IGEgdmFyaWFibGUgb2YgdGhlIGRpc3RhbmNlIG1vZGVsIGFuZCBoYXMgYSBkaWZmZXJlbnQgZWZmZWN0IGRlcGVuZGluZyBvbiB3aGljaCBtb2RlbFxuICAgKiAgICAgICAgICAgICAgICAgICBpcyB1c2VkIGFuZCB0aGUgc2NhbGUgb2YgeW91ciBjb29yZGluYXRlcy4gR2VuZXJhbGx5LCB2b2x1bWUgd2lsbCBiZSBlcXVhbCB0byAxIGF0IHRoaXMgZGlzdGFuY2UuXG4gICAqICAgICByb2xsb2ZmRmFjdG9yIC0gKDEgYnkgZGVmYXVsdCkgSG93IHF1aWNrbHkgdGhlIHZvbHVtZSByZWR1Y2VzIGFzIHNvdXJjZSBtb3ZlcyBmcm9tIGxpc3RlbmVyLiBUaGlzIGlzIHNpbXBseSBhXG4gICAqICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUgb2YgdGhlIGRpc3RhbmNlIG1vZGVsIGFuZCBjYW4gYmUgaW4gdGhlIHJhbmdlIG9mIGBbMCwgMV1gIHdpdGggYGxpbmVhcmAgYW5kIGBbMCwg4oieXWBcbiAgICogICAgICAgICAgICAgICAgICAgICB3aXRoIGBpbnZlcnNlYCBhbmQgYGV4cG9uZW50aWFsYC5cbiAgICogICAgIHBhbm5pbmdNb2RlbCAtICgnSFJURicgYnkgZGVmYXVsdCkgRGV0ZXJtaW5lcyB3aGljaCBzcGF0aWFsaXphdGlvbiBhbGdvcml0aG0gaXMgdXNlZCB0byBwb3NpdGlvbiBhdWRpby5cbiAgICogICAgICAgICAgICAgICAgICAgICBDYW4gYmUgYEhSVEZgIG9yIGBlcXVhbHBvd2VyYC5cbiAgICpcbiAgICogQHJldHVybiB7SG93bC9PYmplY3R9IFJldHVybnMgc2VsZiBvciBjdXJyZW50IHBhbm5lciBhdHRyaWJ1dGVzLlxuICAgKi9cbiAgSG93bC5wcm90b3R5cGUucGFubmVyQXR0ciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgbywgaWQsIHNvdW5kO1xuXG4gICAgLy8gU3RvcCByaWdodCBoZXJlIGlmIG5vdCB1c2luZyBXZWIgQXVkaW8uXG4gICAgaWYgKCFzZWxmLl93ZWJBdWRpbykge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSB2YWx1ZXMgYmFzZWQgb24gYXJndW1lbnRzLlxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gUmV0dXJuIHRoZSBncm91cCdzIHBhbm5lciBhdHRyaWJ1dGUgdmFsdWVzLlxuICAgICAgcmV0dXJuIHNlbGYuX3Bhbm5lckF0dHI7XG4gICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvID0gYXJnc1swXTtcblxuICAgICAgICAvLyBTZXQgdGhlIGdyb3UncyBwYW5uZXIgYXR0cmlidXRlIHZhbHVlcy5cbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpZiAoIW8ucGFubmVyQXR0cikge1xuICAgICAgICAgICAgby5wYW5uZXJBdHRyID0ge1xuICAgICAgICAgICAgICBjb25lSW5uZXJBbmdsZTogby5jb25lSW5uZXJBbmdsZSxcbiAgICAgICAgICAgICAgY29uZU91dGVyQW5nbGU6IG8uY29uZU91dGVyQW5nbGUsXG4gICAgICAgICAgICAgIGNvbmVPdXRlckdhaW46IG8uY29uZU91dGVyR2FpbixcbiAgICAgICAgICAgICAgZGlzdGFuY2VNb2RlbDogby5kaXN0YW5jZU1vZGVsLFxuICAgICAgICAgICAgICBtYXhEaXN0YW5jZTogby5tYXhEaXN0YW5jZSxcbiAgICAgICAgICAgICAgcmVmRGlzdGFuY2U6IG8ucmVmRGlzdGFuY2UsXG4gICAgICAgICAgICAgIHJvbGxvZmZGYWN0b3I6IG8ucm9sbG9mZkZhY3RvcixcbiAgICAgICAgICAgICAgcGFubmluZ01vZGVsOiBvLnBhbm5pbmdNb2RlbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLl9wYW5uZXJBdHRyID0ge1xuICAgICAgICAgICAgY29uZUlubmVyQW5nbGU6IHR5cGVvZiBvLnBhbm5lckF0dHIuY29uZUlubmVyQW5nbGUgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLmNvbmVJbm5lckFuZ2xlIDogc2VsZi5fY29uZUlubmVyQW5nbGUsXG4gICAgICAgICAgICBjb25lT3V0ZXJBbmdsZTogdHlwZW9mIG8ucGFubmVyQXR0ci5jb25lT3V0ZXJBbmdsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIuY29uZU91dGVyQW5nbGUgOiBzZWxmLl9jb25lT3V0ZXJBbmdsZSxcbiAgICAgICAgICAgIGNvbmVPdXRlckdhaW46IHR5cGVvZiBvLnBhbm5lckF0dHIuY29uZU91dGVyR2FpbiAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIuY29uZU91dGVyR2FpbiA6IHNlbGYuX2NvbmVPdXRlckdhaW4sXG4gICAgICAgICAgICBkaXN0YW5jZU1vZGVsOiB0eXBlb2Ygby5wYW5uZXJBdHRyLmRpc3RhbmNlTW9kZWwgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLmRpc3RhbmNlTW9kZWwgOiBzZWxmLl9kaXN0YW5jZU1vZGVsLFxuICAgICAgICAgICAgbWF4RGlzdGFuY2U6IHR5cGVvZiBvLnBhbm5lckF0dHIubWF4RGlzdGFuY2UgIT09ICd1bmRlZmluZWQnID8gby5wYW5uZXJBdHRyLm1heERpc3RhbmNlIDogc2VsZi5fbWF4RGlzdGFuY2UsXG4gICAgICAgICAgICByZWZEaXN0YW5jZTogdHlwZW9mIG8ucGFubmVyQXR0ci5yZWZEaXN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIucmVmRGlzdGFuY2UgOiBzZWxmLl9yZWZEaXN0YW5jZSxcbiAgICAgICAgICAgIHJvbGxvZmZGYWN0b3I6IHR5cGVvZiBvLnBhbm5lckF0dHIucm9sbG9mZkZhY3RvciAhPT0gJ3VuZGVmaW5lZCcgPyBvLnBhbm5lckF0dHIucm9sbG9mZkZhY3RvciA6IHNlbGYuX3JvbGxvZmZGYWN0b3IsXG4gICAgICAgICAgICBwYW5uaW5nTW9kZWw6IHR5cGVvZiBvLnBhbm5lckF0dHIucGFubmluZ01vZGVsICE9PSAndW5kZWZpbmVkJyA/IG8ucGFubmVyQXR0ci5wYW5uaW5nTW9kZWwgOiBzZWxmLl9wYW5uaW5nTW9kZWxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gdGhpcyBzb3VuZCdzIHBhbm5lciBhdHRyaWJ1dGUgdmFsdWVzLlxuICAgICAgICBzb3VuZCA9IHNlbGYuX3NvdW5kQnlJZChwYXJzZUludChhcmdzWzBdLCAxMCkpO1xuICAgICAgICByZXR1cm4gc291bmQgPyBzb3VuZC5fcGFubmVyQXR0ciA6IHNlbGYuX3Bhbm5lckF0dHI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgbyA9IGFyZ3NbMF07XG4gICAgICBpZCA9IHBhcnNlSW50KGFyZ3NbMV0sIDEwKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIHZhbHVlcyBvZiB0aGUgc3BlY2lmaWVkIHNvdW5kcy5cbiAgICB2YXIgaWRzID0gc2VsZi5fZ2V0U291bmRJZHMoaWQpO1xuICAgIGZvciAodmFyIGk9MDsgaTxpZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNvdW5kID0gc2VsZi5fc291bmRCeUlkKGlkc1tpXSk7XG5cbiAgICAgIGlmIChzb3VuZCkge1xuICAgICAgICAvLyBNZXJnZSB0aGUgbmV3IHZhbHVlcyBpbnRvIHRoZSBzb3VuZC5cbiAgICAgICAgdmFyIHBhID0gc291bmQuX3Bhbm5lckF0dHI7XG4gICAgICAgIHBhID0ge1xuICAgICAgICAgIGNvbmVJbm5lckFuZ2xlOiB0eXBlb2Ygby5jb25lSW5uZXJBbmdsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLmNvbmVJbm5lckFuZ2xlIDogcGEuY29uZUlubmVyQW5nbGUsXG4gICAgICAgICAgY29uZU91dGVyQW5nbGU6IHR5cGVvZiBvLmNvbmVPdXRlckFuZ2xlICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZU91dGVyQW5nbGUgOiBwYS5jb25lT3V0ZXJBbmdsZSxcbiAgICAgICAgICBjb25lT3V0ZXJHYWluOiB0eXBlb2Ygby5jb25lT3V0ZXJHYWluICE9PSAndW5kZWZpbmVkJyA/IG8uY29uZU91dGVyR2FpbiA6IHBhLmNvbmVPdXRlckdhaW4sXG4gICAgICAgICAgZGlzdGFuY2VNb2RlbDogdHlwZW9mIG8uZGlzdGFuY2VNb2RlbCAhPT0gJ3VuZGVmaW5lZCcgPyBvLmRpc3RhbmNlTW9kZWwgOiBwYS5kaXN0YW5jZU1vZGVsLFxuICAgICAgICAgIG1heERpc3RhbmNlOiB0eXBlb2Ygby5tYXhEaXN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcgPyBvLm1heERpc3RhbmNlIDogcGEubWF4RGlzdGFuY2UsXG4gICAgICAgICAgcmVmRGlzdGFuY2U6IHR5cGVvZiBvLnJlZkRpc3RhbmNlICE9PSAndW5kZWZpbmVkJyA/IG8ucmVmRGlzdGFuY2UgOiBwYS5yZWZEaXN0YW5jZSxcbiAgICAgICAgICByb2xsb2ZmRmFjdG9yOiB0eXBlb2Ygby5yb2xsb2ZmRmFjdG9yICE9PSAndW5kZWZpbmVkJyA/IG8ucm9sbG9mZkZhY3RvciA6IHBhLnJvbGxvZmZGYWN0b3IsXG4gICAgICAgICAgcGFubmluZ01vZGVsOiB0eXBlb2Ygby5wYW5uaW5nTW9kZWwgIT09ICd1bmRlZmluZWQnID8gby5wYW5uaW5nTW9kZWwgOiBwYS5wYW5uaW5nTW9kZWxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHBhbm5lciB2YWx1ZXMgb3IgY3JlYXRlIGEgbmV3IHBhbm5lciBpZiBub25lIGV4aXN0cy5cbiAgICAgICAgdmFyIHBhbm5lciA9IHNvdW5kLl9wYW5uZXI7XG4gICAgICAgIGlmIChwYW5uZXIpIHtcbiAgICAgICAgICBwYW5uZXIuY29uZUlubmVyQW5nbGUgPSBwYS5jb25lSW5uZXJBbmdsZTtcbiAgICAgICAgICBwYW5uZXIuY29uZU91dGVyQW5nbGUgPSBwYS5jb25lT3V0ZXJBbmdsZTtcbiAgICAgICAgICBwYW5uZXIuY29uZU91dGVyR2FpbiA9IHBhLmNvbmVPdXRlckdhaW47XG4gICAgICAgICAgcGFubmVyLmRpc3RhbmNlTW9kZWwgPSBwYS5kaXN0YW5jZU1vZGVsO1xuICAgICAgICAgIHBhbm5lci5tYXhEaXN0YW5jZSA9IHBhLm1heERpc3RhbmNlO1xuICAgICAgICAgIHBhbm5lci5yZWZEaXN0YW5jZSA9IHBhLnJlZkRpc3RhbmNlO1xuICAgICAgICAgIHBhbm5lci5yb2xsb2ZmRmFjdG9yID0gcGEucm9sbG9mZkZhY3RvcjtcbiAgICAgICAgICBwYW5uZXIucGFubmluZ01vZGVsID0gcGEucGFubmluZ01vZGVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgcG9zaXRpb24gdG8gc2V0dXAgdGhlIG5vZGUgd2l0aC5cbiAgICAgICAgICBpZiAoIXNvdW5kLl9wb3MpIHtcbiAgICAgICAgICAgIHNvdW5kLl9wb3MgPSBzZWxmLl9wb3MgfHwgWzAsIDAsIC0wLjVdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwYW5uZXIgbm9kZS5cbiAgICAgICAgICBzZXR1cFBhbm5lcihzb3VuZCwgJ3NwYXRpYWwnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9O1xuXG4gIC8qKiBTaW5nbGUgU291bmQgTWV0aG9kcyAqKi9cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogQWRkIG5ldyBwcm9wZXJ0aWVzIHRvIHRoZSBjb3JlIFNvdW5kIGluaXQuXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBfc3VwZXIgQ29yZSBTb3VuZCBpbml0IG1ldGhvZC5cbiAgICogQHJldHVybiB7U291bmR9XG4gICAqL1xuICBTb3VuZC5wcm90b3R5cGUuaW5pdCA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgcGFyZW50ID0gc2VsZi5fcGFyZW50O1xuXG4gICAgICAvLyBTZXR1cCB1c2VyLWRlZmluZWQgZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICAgICAgc2VsZi5fb3JpZW50YXRpb24gPSBwYXJlbnQuX29yaWVudGF0aW9uO1xuICAgICAgc2VsZi5fc3RlcmVvID0gcGFyZW50Ll9zdGVyZW87XG4gICAgICBzZWxmLl9wb3MgPSBwYXJlbnQuX3BvcztcbiAgICAgIHNlbGYuX3Bhbm5lckF0dHIgPSBwYXJlbnQuX3Bhbm5lckF0dHI7XG5cbiAgICAgIC8vIENvbXBsZXRlIGluaXRpbGl6YXRpb24gd2l0aCBob3dsZXIuanMgY29yZSBTb3VuZCdzIGluaXQgZnVuY3Rpb24uXG4gICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcblxuICAgICAgLy8gSWYgYSBzdGVyZW8gb3IgcG9zaXRpb24gd2FzIHNwZWNpZmllZCwgc2V0IGl0IHVwLlxuICAgICAgaWYgKHNlbGYuX3N0ZXJlbykge1xuICAgICAgICBwYXJlbnQuc3RlcmVvKHNlbGYuX3N0ZXJlbyk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuX3Bvcykge1xuICAgICAgICBwYXJlbnQucG9zKHNlbGYuX3Bvc1swXSwgc2VsZi5fcG9zWzFdLCBzZWxmLl9wb3NbMl0sIHNlbGYuX2lkKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KShTb3VuZC5wcm90b3R5cGUuaW5pdCk7XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBTb3VuZC5yZXNldCBtZXRob2QgdG8gY2xlYW4gdXAgcHJvcGVydGllcyBmcm9tIHRoZSBzcGF0aWFsIHBsdWdpbi5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IF9zdXBlciBTb3VuZCByZXNldCBtZXRob2QuXG4gICAqIEByZXR1cm4ge1NvdW5kfVxuICAgKi9cbiAgU291bmQucHJvdG90eXBlLnJlc2V0ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBwYXJlbnQgPSBzZWxmLl9wYXJlbnQ7XG5cbiAgICAgIC8vIFJlc2V0IGFsbCBzcGF0aWFsIHBsdWdpbiBwcm9wZXJ0aWVzIG9uIHRoaXMgc291bmQuXG4gICAgICBzZWxmLl9vcmllbnRhdGlvbiA9IHBhcmVudC5fb3JpZW50YXRpb247XG4gICAgICBzZWxmLl9zdGVyZW8gPSBwYXJlbnQuX3N0ZXJlbztcbiAgICAgIHNlbGYuX3BvcyA9IHBhcmVudC5fcG9zO1xuICAgICAgc2VsZi5fcGFubmVyQXR0ciA9IHBhcmVudC5fcGFubmVyQXR0cjtcblxuICAgICAgLy8gSWYgYSBzdGVyZW8gb3IgcG9zaXRpb24gd2FzIHNwZWNpZmllZCwgc2V0IGl0IHVwLlxuICAgICAgaWYgKHNlbGYuX3N0ZXJlbykge1xuICAgICAgICBwYXJlbnQuc3RlcmVvKHNlbGYuX3N0ZXJlbyk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuX3Bvcykge1xuICAgICAgICBwYXJlbnQucG9zKHNlbGYuX3Bvc1swXSwgc2VsZi5fcG9zWzFdLCBzZWxmLl9wb3NbMl0sIHNlbGYuX2lkKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5fcGFubmVyKSB7XG4gICAgICAgIC8vIERpc2Nvbm5lY3QgdGhlIHBhbm5lci5cbiAgICAgICAgc2VsZi5fcGFubmVyLmRpc2Nvbm5lY3QoMCk7XG4gICAgICAgIHNlbGYuX3Bhbm5lciA9IHVuZGVmaW5lZDtcbiAgICAgICAgcGFyZW50Ll9yZWZyZXNoQnVmZmVyKHNlbGYpO1xuICAgICAgfVxuXG4gICAgICAvLyBDb21wbGV0ZSByZXNldHRpbmcgb2YgdGhlIHNvdW5kLlxuICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIH07XG4gIH0pKFNvdW5kLnByb3RvdHlwZS5yZXNldCk7XG5cbiAgLyoqIEhlbHBlciBNZXRob2RzICoqL1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgcGFubmVyIG5vZGUgYW5kIHNhdmUgaXQgb24gdGhlIHNvdW5kLlxuICAgKiBAcGFyYW0gIHtTb3VuZH0gc291bmQgU3BlY2lmaWMgc291bmQgdG8gc2V0dXAgcGFubmluZyBvbi5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVHlwZSBvZiBwYW5uZXIgdG8gY3JlYXRlOiAnc3RlcmVvJyBvciAnc3BhdGlhbCcuXG4gICAqL1xuICB2YXIgc2V0dXBQYW5uZXIgPSBmdW5jdGlvbihzb3VuZCwgdHlwZSkge1xuICAgIHR5cGUgPSB0eXBlIHx8ICdzcGF0aWFsJztcblxuICAgIC8vIENyZWF0ZSB0aGUgbmV3IHBhbm5lciBub2RlLlxuICAgIGlmICh0eXBlID09PSAnc3BhdGlhbCcpIHtcbiAgICAgIHNvdW5kLl9wYW5uZXIgPSBIb3dsZXIuY3R4LmNyZWF0ZVBhbm5lcigpO1xuICAgICAgc291bmQuX3Bhbm5lci5jb25lSW5uZXJBbmdsZSA9IHNvdW5kLl9wYW5uZXJBdHRyLmNvbmVJbm5lckFuZ2xlO1xuICAgICAgc291bmQuX3Bhbm5lci5jb25lT3V0ZXJBbmdsZSA9IHNvdW5kLl9wYW5uZXJBdHRyLmNvbmVPdXRlckFuZ2xlO1xuICAgICAgc291bmQuX3Bhbm5lci5jb25lT3V0ZXJHYWluID0gc291bmQuX3Bhbm5lckF0dHIuY29uZU91dGVyR2FpbjtcbiAgICAgIHNvdW5kLl9wYW5uZXIuZGlzdGFuY2VNb2RlbCA9IHNvdW5kLl9wYW5uZXJBdHRyLmRpc3RhbmNlTW9kZWw7XG4gICAgICBzb3VuZC5fcGFubmVyLm1heERpc3RhbmNlID0gc291bmQuX3Bhbm5lckF0dHIubWF4RGlzdGFuY2U7XG4gICAgICBzb3VuZC5fcGFubmVyLnJlZkRpc3RhbmNlID0gc291bmQuX3Bhbm5lckF0dHIucmVmRGlzdGFuY2U7XG4gICAgICBzb3VuZC5fcGFubmVyLnJvbGxvZmZGYWN0b3IgPSBzb3VuZC5fcGFubmVyQXR0ci5yb2xsb2ZmRmFjdG9yO1xuICAgICAgc291bmQuX3Bhbm5lci5wYW5uaW5nTW9kZWwgPSBzb3VuZC5fcGFubmVyQXR0ci5wYW5uaW5nTW9kZWw7XG5cbiAgICAgIGlmICh0eXBlb2Ygc291bmQuX3Bhbm5lci5wb3NpdGlvblggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNvdW5kLl9wYW5uZXIucG9zaXRpb25YLnNldFZhbHVlQXRUaW1lKHNvdW5kLl9wb3NbMF0sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICBzb3VuZC5fcGFubmVyLnBvc2l0aW9uWS5zZXRWYWx1ZUF0VGltZShzb3VuZC5fcG9zWzFdLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgc291bmQuX3Bhbm5lci5wb3NpdGlvblouc2V0VmFsdWVBdFRpbWUoc291bmQuX3Bvc1syXSwgSG93bGVyLmN0eC5jdXJyZW50VGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzb3VuZC5fcGFubmVyLnNldFBvc2l0aW9uKHNvdW5kLl9wb3NbMF0sIHNvdW5kLl9wb3NbMV0sIHNvdW5kLl9wb3NbMl0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHNvdW5kLl9wYW5uZXIub3JpZW50YXRpb25YICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzb3VuZC5fcGFubmVyLm9yaWVudGF0aW9uWC5zZXRWYWx1ZUF0VGltZShzb3VuZC5fb3JpZW50YXRpb25bMF0sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICBzb3VuZC5fcGFubmVyLm9yaWVudGF0aW9uWS5zZXRWYWx1ZUF0VGltZShzb3VuZC5fb3JpZW50YXRpb25bMV0sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgICBzb3VuZC5fcGFubmVyLm9yaWVudGF0aW9uWi5zZXRWYWx1ZUF0VGltZShzb3VuZC5fb3JpZW50YXRpb25bMl0sIEhvd2xlci5jdHguY3VycmVudFRpbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291bmQuX3Bhbm5lci5zZXRPcmllbnRhdGlvbihzb3VuZC5fb3JpZW50YXRpb25bMF0sIHNvdW5kLl9vcmllbnRhdGlvblsxXSwgc291bmQuX29yaWVudGF0aW9uWzJdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc291bmQuX3Bhbm5lciA9IEhvd2xlci5jdHguY3JlYXRlU3RlcmVvUGFubmVyKCk7XG4gICAgICBzb3VuZC5fcGFubmVyLnBhbi5zZXRWYWx1ZUF0VGltZShzb3VuZC5fc3RlcmVvLCBIb3dsZXIuY3R4LmN1cnJlbnRUaW1lKTtcbiAgICB9XG5cbiAgICBzb3VuZC5fcGFubmVyLmNvbm5lY3Qoc291bmQuX25vZGUpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBjb25uZWN0aW9ucy5cbiAgICBpZiAoIXNvdW5kLl9wYXVzZWQpIHtcbiAgICAgIHNvdW5kLl9wYXJlbnQucGF1c2Uoc291bmQuX2lkLCB0cnVlKS5wbGF5KHNvdW5kLl9pZCwgdHJ1ZSk7XG4gICAgfVxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XG5pbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4uLy4uL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBsb2FkSW1hZ2VzKHNvdXJjZXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGltYWdlcyA9IHt9O1xuICAgIHZhciBsb2FkZWRJbWFnZXMgPSAwO1xuICAgIHZhciBudW1JbWFnZXMgPSAwO1xuICAgIC8vIGdldCBudW0gb2Ygc291cmNlc1xuICAgIGZvciAodmFyIHNyYyBpbiBzb3VyY2VzKSB7XG4gICAgICAgIG51bUltYWdlcysrO1xuICAgIH1cbiAgICBmb3IgKHZhciBzcmMgaW4gc291cmNlcykge1xuICAgICAgICBpbWFnZXNbc3JjXSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZXNbc3JjXS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoKytsb2FkZWRJbWFnZXMgPj0gbnVtSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaW1hZ2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaW1hZ2VzW3NyY10uc3JjID0gc291cmNlc1tzcmNdO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2FkaW5nU2NyZWVuKGxvYWRpbmcpIHtcbiAgICBjb25zdCBsb2FkaW5nRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZy1zY3JlZW5cIik7XG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdfdGV4dFwiKTtcbiAgICBsb2FkaW5nVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZ0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpLmJrZ0NhbnZhcy5sYXllcnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50LmlkKTtcbiAgICAgICAgICAgIGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsb2FkaW5nRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKS5ia2dDYW52YXMubGF5ZXJzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudC5pZCk7XG4gICAgICAgICAgICBodG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBNb25zdGVyTGF5ZXIgPSBcIm1vbnN0ZXJDYW52YXNcIjtcbmV4cG9ydCBjb25zdCBQYXVzZVBvcHVwTGF5ZXIgPSBcInBhdXNlcG9wdXBDYW52YXNcIjtcbmV4cG9ydCBjb25zdCBTdG9uZUxheWVyID0gXCJzdG9uZUNhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IFRpbWV0aWNrZXJMYXllciA9IFwidGltZXRpY2tDYW52YXNcIjtcbmV4cG9ydCBjb25zdCBMZXZlbEVuZExheWVyID0gXCJsZXZlbEVuZENhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IExldmVsRW5kQnV0dG9uc0xheWVyID0gXCJsZXZlbEVuZEJ1dHRvbnNDYW52YXNcIjtcbmV4cG9ydCBjb25zdCBMZXZlbFNlbGVjdGlvbkxheWVyID0gXCJsZXZlbFNlbGVjdGlvbkNhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IExldmVsU3RhcnRMYXllciA9IFwibGV2ZWxTdGFydENhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IFN0YXJ0U2NlbmVMYXllciA9IFwic3RhcnRTY2VuZUNhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IFBsYXlCdXR0b25MYXllciA9IFwicGxheUJ1dHRvbkNhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IEdhbWVFbmRMYXllciA9IFwiR2FtZUVuZENhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IEZpcmViYXNlVXNlckNsaWNrZWQgPSBcInVzZXJfY2xpY2tlZFwiO1xuZXhwb3J0IGNvbnN0IEZpcmViYXNlVXNlckluc3RhbGwgPSBcInVzZXJfaW5zdGFsbGVkXCI7XG5leHBvcnQgY29uc3QgUHJvbXB0VGV4dExheWVyID0gXCJwcm9tcHRUZXh0Q2FudmFzXCI7XG5leHBvcnQgY29uc3QgUFdBSW5zdGFsbFN0YXR1cyA9IFwicHdhX2luc3RhbGxlZF9zdGF0dXNcIjtcbmV4cG9ydCBjb25zdCBVc2VyQ2FuY2VsbGVkID0gXCJ1c2VyX2NhbmNlbF9pbnN0YWxsYXRpb25cIjtcbmV4cG9ydCBjb25zdCBOYXRpdmVQbGF5QnV0dG9uID0gXCJuYXRpdmVfcGxheWJ1dHRvbl9jbGlja2VkXCI7XG5leHBvcnQgY29uc3QgUHJldmlvdXNQbGF5ZWRMZXZlbCA9IFwic3RvcmVQcmV2aW91c1BsYXllZExldmVsXCIgKyBsYW5nO1xuZXhwb3J0IGNvbnN0IFN0b3JlTW9uc3RlclBoYXNlTnVtYmVyID0gXCJzdG9yZU1vbnN0ZXJQaGFzZU51bWJlclwiICsgbGFuZztcbmV4cG9ydCBjb25zdCBDYWNoZWRMYW5ndWFnZXMgPSBcImNhY2hlZF9sYW5ndWFnZXNcIjtcbiIsImV4cG9ydCBjbGFzcyBMZXZlbENvbmZpZyB7XG4gICAgY29uc3RydWN0b3IoeFBvcywgeVBvcywgaW5kZXgpIHtcbiAgICAgICAgdGhpcy54ID0geFBvcztcbiAgICAgICAgdGhpcy55ID0geVBvcztcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmRyYXdyZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9tYXBJY29uLnBuZ1wiO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEhvd2wgfSBmcm9tIFwiaG93bGVyXCI7XG5sZXQgaW5hY3RpdmVfc2NyZWVuID0gZmFsc2U7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXVkaW8gPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgdGhpcy5pbnRyb0F1ZGlvID0gbmV3IEhvd2woe1xuICAgICAgICAgICAgc3JjOiBbXCIuL2Fzc2V0cy9hdWRpb3MvaW50cm8ud2F2XCJdLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGxheVNvdW5kKHNyYykge1xuICAgICAgICB0aGlzLmF1ZGlvLnBsYXkoKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdWRpbzEgPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW8xLnNyYyA9IHNyYztcbiAgICAgICAgICAgIHRoaXMuYXVkaW8xLnBsYXkoKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW8yID0gbmV3IEF1ZGlvKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpbzIuc3JjID0gc3JjO1xuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW8yLnBsYXkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWN0aXZlU2NyZWVuKCkge1xuICAgICAgICBpZiAoaW5hY3RpdmVfc2NyZWVuKSB7XG4gICAgICAgICAgICBpbmFjdGl2ZV9zY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2VTb3VuZCgpO1xuICAgICAgICAgICAgaW5hY3RpdmVfc2NyZWVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXVzZVNvdW5kKCkge1xuICAgICAgICB0aGlzLmludHJvQXVkaW8ucGF1c2UoKTtcbiAgICAgICAgdGhpcy5hdWRpbyA/IHRoaXMuYXVkaW8ucGF1c2UoKSA6IG51bGw7XG4gICAgICAgIHRoaXMuYXVkaW8yID8gdGhpcy5hdWRpbzEucGF1c2UoKSA6IG51bGw7XG4gICAgICAgIHRoaXMuYXVkaW8yID8gdGhpcy5hdWRpbzIucGF1c2UoKSA6IG51bGw7XG4gICAgfVxuICAgIGNoYW5nZVNvdXJzZShzcmMpIHtcbiAgICAgICAgdGhpcy5hdWRpby5zcmMgPSBzcmM7XG4gICAgICAgIHRoaXMucGxheVNvdW5kKHNyYyk7XG4gICAgfVxuICAgIHBsYXlMZXZlbEVuZEhhcHB5QXVkaW8obGV2ZWxXaW5BdWRpbykge1xuICAgICAgICB0aGlzLmF1ZGlvLnNyYyA9IGxldmVsV2luQXVkaW87XG4gICAgICAgIHRoaXMucGxheVNvdW5kKGxldmVsV2luQXVkaW8pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW50cm9BdWRpby5wbGF5KCk7XG4gICAgICAgIH0sIDcwMCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFN0b25lQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3RvcihzdG9uZUxldHRlciwgeFBvcywgeVBvcykge1xuICAgICAgICB0aGlzLnggPSB4UG9zO1xuICAgICAgICB0aGlzLnkgPSB5UG9zO1xuICAgICAgICB0aGlzLm9yaWd4ID0geFBvcztcbiAgICAgICAgdGhpcy5vcmlneSA9IHlQb3M7XG4gICAgICAgIHRoaXMuZHJhd3JlYWR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGV4dCA9IHN0b25lTGV0dGVyO1xuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9zdG9uZV9waW5rX3YwMi5wbmdcIjtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW5jZWxCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcykge1xuICAgICAgICB0aGlzLnBvc1ggPSBjYW52YXMud2lkdGggKiAwLjEgKyAoY2FudmFzLndpZHRoICogMC4xNSkgLyAyO1xuICAgICAgICB0aGlzLnBvc1kgPSBjYW52YXMuaGVpZ2h0ICogMC4yO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvY2xvc2VfYnRuLnBuZ1wiO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE1LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTUpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE1KSAvIDIpICpcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE1KSAvIDIpICtcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE1KSAvIDIpICpcbiAgICAgICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xNSkgLyAyKSk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8ICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTUpIC8gMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9zZUJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBwb3NYLCBwb3NZKSB7XG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XG4gICAgICAgIHRoaXMucG9zWSA9IHBvc1k7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9tYXBfYnRuLnBuZ1wiO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICtcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpICpcbiAgICAgICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8ICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0YWxsQnV0dG9uIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMsIHBvc1gsIHBvc1kpIHtcbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWDtcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwYXVzZV9idXR0b25faW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL0luc3RhbGxfYnV0dG9uLnBuZ1wiO1xuICAgICAgICBzZWxmLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggLyAzLCBzZWxmLmNhbnZhcy53aWR0aCAvIDYpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSB0aGlzLmNhbnZhcy53aWR0aCAvIDYpICpcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSB0aGlzLmNhbnZhcy53aWR0aCAvIDYpICtcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSB0aGlzLmNhbnZhcy53aWR0aCAvIDEyKSAqXG4gICAgICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtIHRoaXMuY2FudmFzLndpZHRoIC8gMTIpKTtcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgdGhpcy5jYW52YXMud2lkdGggLyA4KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5leHRCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcywgcG9zWCwgcG9zWSkge1xuICAgICAgICB0aGlzLnBvc1ggPSBwb3NYO1xuICAgICAgICB0aGlzLnBvc1kgPSBwb3NZO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHBhdXNlX2J1dHRvbl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbmV4dF9idG4ucG5nXCI7XG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShwYXVzZV9idXR0b25faW1hZ2UsIHNlbGYucG9zWCwgc2VsZi5wb3NZLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIG9uQ2xpY2soeENsaWNrLCB5Q2xpY2spIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikgKlxuICAgICAgICAgICAgKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikgK1xuICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikgKlxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpKTtcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdXNlQnV0dG9uIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5wb3NYID0gY2FudmFzLndpZHRoIC0gY2FudmFzLmhlaWdodCAqIDAuMDk7XG4gICAgICAgIHRoaXMucG9zWSA9IDA7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9wYXVzZV92MDEucG5nXCI7XG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShwYXVzZV9idXR0b25faW1hZ2UsIHNlbGYucG9zWCwgc2VsZi5wb3NZLCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5LCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgb25DbGljayh4Q2xpY2ssIHlDbGljaykge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeENsaWNrIC0gdGhpcy5wb3NYIC0gKHRoaXMuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMikgKlxuICAgICAgICAgICAgKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDIpICtcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyKSAqXG4gICAgICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtICh0aGlzLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDIpKTtcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgKHRoaXMuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5QnV0dG9uIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYW52YXMsIHBvc1gsIHBvc1kpIHtcbiAgICAgICAgdGhpcy5wb3NYID0gcG9zWDtcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwYXVzZV9idXR0b25faW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGF1c2VfYnV0dG9uX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL1BsYXlfYnV0dG9uLnBuZ1wiO1xuICAgICAgICBzZWxmLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBwYXVzZV9idXR0b25faW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UocGF1c2VfYnV0dG9uX2ltYWdlLCBzZWxmLnBvc1gsIHNlbGYucG9zWSwgc2VsZi5jYW52YXMud2lkdGggLyAzLCBzZWxmLmNhbnZhcy53aWR0aCAvIDMpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBvbkNsaWNrKHhDbGljaywgeUNsaWNrKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCh4Q2xpY2sgLSB0aGlzLnBvc1ggLSB0aGlzLmNhbnZhcy53aWR0aCAvIDYpICpcbiAgICAgICAgICAgICh4Q2xpY2sgLSB0aGlzLnBvc1ggLSB0aGlzLmNhbnZhcy53aWR0aCAvIDYpICtcbiAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSB0aGlzLmNhbnZhcy53aWR0aCAvIDYpICpcbiAgICAgICAgICAgICAgICAoeUNsaWNrIC0gdGhpcy5wb3NZIC0gdGhpcy5jYW52YXMud2lkdGggLyA2KSk7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMuY2FudmFzLndpZHRoIC8gOCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZXRyeUJ1dHRvbiB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgY2FudmFzLCBwb3NYLCBwb3NZKSB7XG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XG4gICAgICAgIHRoaXMucG9zWSA9IHBvc1k7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcGF1c2VfYnV0dG9uX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9yZXRyeV9idG4ucG5nXCI7XG4gICAgICAgIHBhdXNlX2J1dHRvbl9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShwYXVzZV9idXR0b25faW1hZ2UsIHNlbGYucG9zWCwgc2VsZi5wb3NZLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIG9uQ2xpY2soeENsaWNrLCB5Q2xpY2spIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikgKlxuICAgICAgICAgICAgKHhDbGljayAtIHRoaXMucG9zWCAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikgK1xuICAgICAgICAgICAgKHlDbGljayAtIHRoaXMucG9zWSAtICh0aGlzLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMikgKlxuICAgICAgICAgICAgICAgICh5Q2xpY2sgLSB0aGlzLnBvc1kgLSAodGhpcy5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpKTtcbiAgICAgICAgaWYgKGRpc3RhbmNlIDwgKHRoaXMuY2FudmFzLndpZHRoICogMC4xOSkgLyAyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBMZXZlbEluZGljYXRvcnMge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNhbnZhcywgYWN0aXZlSW5kaWNhdG9ycykge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRpY2F0b3JzID0gYWN0aXZlSW5kaWNhdG9ycztcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIHNldEluZGljYXRvcnMoaW50KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kaWNhdG9ycyA9IGludDtcbiAgICAgICAgdGhpcy51cGRhdGUodGhpcyk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGxldmVsX2luZGljYXRvciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsZXZlbF9pbmRpY2F0b3Iuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvbGV2ZWxzX3YwMS5wbmdcIjtcbiAgICAgICAgdmFyIGJhcl9lbXB0eSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiYXJfZW1wdHkuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvYmFyX2VtcHR5X3YwMS5wbmdcIjtcbiAgICAgICAgbGV2ZWxfaW5kaWNhdG9yLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKGxldmVsX2luZGljYXRvciwgMCwgMCwgc2VsZi5jYW52YXMud2lkdGggKiAwLjM1LCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KTtcbiAgICAgICAgICAgIGJhcl9lbXB0eS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UoYmFyX2VtcHR5LCAoKHNlbGYuY2FudmFzLndpZHRoICogMC4zNSkgLyA3KSAqIChpICsgMSksIChzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjA5KSAvIDIgLSAoc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyA2LCAoc2VsZi5jYW52YXMud2lkdGggKiAwLjM1KSAvIDEwLCAoc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2VsZi51cGRhdGUoc2VsZik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHVwZGF0ZShzZWxmKSB7XG4gICAgICAgIHZhciBiYXJfZnVsbCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiYXJfZnVsbC5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9iYXJfZnVsbF92MDEucG5nXCI7XG4gICAgICAgIGJhcl9mdWxsLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuYWN0aXZlSW5kaWNhdG9yczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShiYXJfZnVsbCwgKChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUpIC8gNykgKiAoaSArIDEpLCAoc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4wOSkgLyAyIC0gKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gNiwgKHNlbGYuY2FudmFzLndpZHRoICogMC4zNSkgLyAxMCwgKHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMDkpIC8gMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTW9uc3RlckxheWVyLCBTdG9yZU1vbnN0ZXJQaGFzZU51bWJlciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xudmFyIGxhc3RUaW1lID0gMDtcbnZhciBzZWxmO1xudmFyIGFuaW1hdGlvbkZyYW1lO1xudmFyIG1vbnN0ZXJQaGFzZU51bWJlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JlTW9uc3RlclBoYXNlTnVtYmVyKSB8fCAxO1xuY29uc29sZS5sb2coXCI+Pj4+Pj4+Pj4uXCIpO1xuY29uc29sZS5sb2cobW9uc3RlclBoYXNlTnVtYmVyKTtcbnZhciBlYXRJbWcgPSBuZXcgSW1hZ2UoKTtcbmVhdEltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9lYXQxXCIgKyBtb25zdGVyUGhhc2VOdW1iZXIgKyBcIi5wbmdcIjtcbnZhciBpZGxlSW1nID0gbmV3IEltYWdlKCk7XG5pZGxlSW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2lkbGUxXCIgKyBtb25zdGVyUGhhc2VOdW1iZXIgKyBcIi5wbmdcIjtcbnZhciBzcGl0SW1nID0gbmV3IEltYWdlKCk7XG5zcGl0SW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3NwaXQxXCIgKyBtb25zdGVyUGhhc2VOdW1iZXIgKyBcIi5wbmdcIjtcbmNvbnNvbGUubG9nKFwibW9uc3RlcmV4ZWN1dGluZ1wiKTtcbmV4cG9ydCBjbGFzcyBNb25zdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB6aW5kZXgpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuemluZGV4ID0gemluZGV4O1xuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5nYW1lLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZ2FtZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vbnN0ZXJcIik7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICB0aGlzLm1heEZyYW1lID0gNjtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5nYW1lLndpZHRoIC8gMiAtIHRoaXMuZ2FtZS53aWR0aCAqIDAuMjQzO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmdhbWUud2lkdGggLyAzO1xuICAgICAgICB0aGlzLmZwcyA9IDEwO1xuICAgICAgICB0aGlzLmZyYW1lSW50ZXJ2YWwgPSAxMDAwIC8gdGhpcy5mcHM7XG4gICAgICAgIHRoaXMuZnJhbWVUaW1lciA9IDA7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIE1vbnN0ZXJMYXllcik7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuekluZGV4ID0gXCI2XCI7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS5ib3R0b20gPSBcIjBcIjtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uKDApO1xuICAgIH1cbiAgICBjaGFuZ2VaaW5kZXgoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgICBkZWxldGVDYW52YXMoKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmlkKTtcbiAgICB9XG4gICAgdXBkYXRlKGRlbHRhVGltZSkge1xuICAgICAgICBpZiAodGhpcy5mcmFtZVRpbWVyID4gdGhpcy5mcmFtZUludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lVGltZXIgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVYIDwgdGhpcy5tYXhGcmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVYKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lVGltZXIgKz0gZGVsdGFUaW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlLCA3NzAgKiB0aGlzLmZyYW1lWCwgMTM4NiAqIHRoaXMuZnJhbWVZLCA3NjgsIDEzODYsIHRoaXMueCwgdGhpcy55ICogMC44LCB0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAxLjUpO1xuICAgIH1cbiAgICBjaGFuZ2VJbWFnZShzcmMpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24oMCk7XG4gICAgICAgIC8vIGlmICh0aGlzLmZyYW1lWSA9PSAxKSB7XG4gICAgICAgIC8vICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgIHRoaXMuZnJhbWVZID0gMTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHNyYztcbiAgICB9XG4gICAgY2hhbmdlUGhhc2VOdW1iZXIobW9uc3RlclBoYXNlTnVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibW9uc3RlciBjaGFuZ2luZ1wiKTtcbiAgICAgICAgZWF0SW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGVhdEltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9lYXQxXCIgKyBtb25zdGVyUGhhc2VOdW0gKyBcIi5wbmdcIjtcbiAgICAgICAgaWRsZUltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpZGxlSW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2lkbGUxXCIgKyBtb25zdGVyUGhhc2VOdW0gKyBcIi5wbmdcIjtcbiAgICAgICAgc3BpdEltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzcGl0SW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3NwaXQxXCIgKyBtb25zdGVyUGhhc2VOdW0gKyBcIi5wbmdcIjtcbiAgICAgICAgY29uc29sZS5sb2coZWF0SW1nLnNyYyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkbGVJbWcuc3JjKTtcbiAgICAgICAgY29uc29sZS5sb2coc3BpdEltZy5zcmMpO1xuICAgICAgICBjb25zb2xlLmxvZyhtb25zdGVyUGhhc2VOdW1iZXIpO1xuICAgIH1cbiAgICBjaGFuZ2VUb0VhdEFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5pbWFnZSA9IGVhdEltZztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRvSWRsZUFuaW1hdGlvbigpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG4gICAgY2hhbmdlVG9JZGxlQW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLmltYWdlID0gaWRsZUltZztcbiAgICB9XG4gICAgY2hhbmdlVG9TcGl0QW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLmltYWdlID0gc3BpdEltZztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRvSWRsZUFuaW1hdGlvbigpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG4gICAgYW5pbWF0aW9uKHRpbWVTdGFtcCkge1xuICAgICAgICBsZXQgZGVsdGFUaW1lID0gdGltZVN0YW1wIC0gbGFzdFRpbWU7XG4gICAgICAgIGxhc3RUaW1lID0gdGltZVN0YW1wO1xuICAgICAgICBzZWxmLnVwZGF0ZShkZWx0YVRpbWUpO1xuICAgICAgICBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzZWxmLmFuaW1hdGlvbik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUGF1c2VQb3B1cExheWVyIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcbmltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XG5pbXBvcnQgQ2FuY2VsQnV0dG9uIGZyb20gXCIuL2J1dHRvbnMvY2FuY2VsX2J1dHRvbi5qc1wiO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCIuL2J1dHRvbnMvY2xvc2VfYnV0dG9uLmpzXCI7XG5pbXBvcnQgUmV0cnlCdXR0b24gZnJvbSBcIi4vYnV0dG9ucy9yZXRyeV9idXR0b24uanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdXNlUG9wVXAge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgbGV2ZWxTdGFydCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0ID0gbGV2ZWxTdGFydDtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuY2FudmFzLmhlaWdodCwgdGhpcy5jYW52YXMud2lkdGgsIFBhdXNlUG9wdXBMYXllcik7XG4gICAgICAgIGNvbnN0IHNlbGZJZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gc2VsZklkRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHNlbGZJZEVsZW1lbnQuc3R5bGUuekluZGV4ID0gXCIxMVwiO1xuICAgICAgICBzZWxmSWRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjUpXCI7XG4gICAgICAgIHZhciBwb3BfdXBfaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcG9wX3VwX2ltYWdlLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3BvcHVwX2JnX3YwMS5wbmdcIjtcbiAgICAgICAgcG9wX3VwX2ltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKHBvcF91cF9pbWFnZSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjEsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMiwgc2VsZi5jYW52YXMud2lkdGggKiAwLjgsIHNlbGYuY2FudmFzLndpZHRoICogMC44KTtcbiAgICAgICAgICAgIHNlbGYuY2FuY2VsQnV0dG9uID0gbmV3IENhbmNlbEJ1dHRvbihzZWxmLmNvbnRleHQsIHNlbGYuY2FudmFzKTtcbiAgICAgICAgICAgIHNlbGYucmV0cnlCdXR0b24gPSBuZXcgUmV0cnlCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5jYW52YXMud2lkdGggKiAwLjU1LCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjIgK1xuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLndpZHRoICogMC40IC1cbiAgICAgICAgICAgICAgICAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIpO1xuICAgICAgICAgICAgc2VsZi5jbG9zZUJ1dHRvbiA9IG5ldyBDbG9zZUJ1dHRvbihzZWxmLmNvbnRleHQsIHNlbGYuY2FudmFzLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMjUsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMiArXG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMud2lkdGggKiAwLjQgLVxuICAgICAgICAgICAgICAgIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMik7XG4gICAgICAgIH07XG4gICAgICAgIHNlbGZJZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHJlY3QgPSBzZWxmSWRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgaWYgKHNlbGYuY2FuY2VsQnV0dG9uLm9uQ2xpY2soeCwgeSkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQudGltZXJUaWNraW5nLnJlc3VtZVRpbWVyKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbFN0YXJ0LmxldmVsRW5kQ2FsbEJhY2soKTtcbiAgICAgICAgICAgICAgICBzZWxmLmRlbGV0ZUNhbnZhcyhzZWxmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLnJldHJ5QnV0dG9uLm9uQ2xpY2soeCwgeSkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQubGV2ZWxFbmRDYWxsQmFjayhcInJldHJ5X2J1dHRvblwiKTtcbiAgICAgICAgICAgICAgICBzZWxmLmRlbGV0ZUNhbnZhcyhzZWxmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLmNsb3NlQnV0dG9uLm9uQ2xpY2soeCwgeSkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQubGV2ZWxFbmRDYWxsQmFjayhcImNsb3NlX2J1dHRvblwiKTtcbiAgICAgICAgICAgICAgICBzZWxmLmRlbGV0ZUNhbnZhcyhzZWxmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRlbGV0ZUNhbnZhcyhzZWxmKSB7XG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XG4gICAgfVxuICAgIGRyYXcoKSB7IH1cbiAgICB1cGRhdGUoKSB7IH1cbn1cbiIsImltcG9ydCB7IFByb21wdFRleHRMYXllciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IHsgbGFuZyB9IGZyb20gXCIuLi8uLi9nbG9iYWwtdmFyaWFibGVzLmpzXCI7XG52YXIgc2VsZjtcbmV4cG9ydCBjbGFzcyBQcm9tcHRUZXh0IHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBsZXZlbFN0YXJ0LCBjdXJyZW50UHV6emxlRGF0YSwgbGV2ZWxEYXRhKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMud2lkdGggPSBnYW1lLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmxldmVsU3RhcnQgPSBsZXZlbFN0YXJ0O1xuICAgICAgICB0aGlzLmxldmVsRGF0YSA9IGxldmVsRGF0YTtcbiAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3VycmVudFByb21wdFRleHQgPSBjdXJyZW50UHV6emxlRGF0YS5wcm9tcHQucHJvbXB0VGV4dDtcbiAgICAgICAgdGhpcy5jdXJyZW50UHV6emxlRGF0YSA9IGN1cnJlbnRQdXp6bGVEYXRhO1xuICAgICAgICB0aGlzLmZudHN0T3JHcnRJbWdBcnIgPSBbXTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICAgICAgdGhpcy5sb2FkRmFudGFzdGljQW5kR3JlYXRJbWFnZSgpO1xuICAgIH1cbiAgICBsb2FkRmFudGFzdGljQW5kR3JlYXRJbWFnZSgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmZhbnRhc3RpY19pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLmZhbnRhc3RpY19pbWFnZS5zcmMgPSBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9pbWFnZXMvZmFudGFzdGljXzAxLnBuZ1wiO1xuICAgICAgICB0aGlzLmZudHN0T3JHcnRJbWdBcnIucHVzaCh0aGlzLmZhbnRhc3RpY19pbWFnZSk7XG4gICAgICAgIHRoaXMuZ3JlYXRfaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5ncmVhdF9pbWFnZS5zcmMgPSBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9pbWFnZXMvZ3JlYXRfMDEucG5nXCI7XG4gICAgICAgIHRoaXMuZm50c3RPckdydEltZ0Fyci5wdXNoKHRoaXMuZ3JlYXRfaW1hZ2UpO1xuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBQcm9tcHRUZXh0TGF5ZXIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IDU7XG4gICAgfVxuICAgIHNldEN1cnJyZW50UHV6emxlRGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFB1enpsZURhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmN1cnJlbnRQcm9tcHRUZXh0ID0gZGF0YS5wcm9tcHQucHJvbXB0VGV4dDtcbiAgICB9XG4gICAgc2hvd0ZhbnRhc3RpY09yR3JlYXQoaW1hZ2VJbmRleCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QodGhpcy5nYW1lLndpZHRoIC8gMiAtICh0aGlzLmdhbWUud2lkdGggKiAwLjUpIC8gMiwgdGhpcy5oZWlnaHQgKiAwLjE1LCB0aGlzLmdhbWUud2lkdGggKiAwLjUsIHRoaXMuaGVpZ2h0ICogMC4yNSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2Uoc2VsZi5mbnRzdE9yR3J0SW1nQXJyW2ltYWdlSW5kZXhdLCB0aGlzLmdhbWUud2lkdGggLSB0aGlzLmdhbWUud2lkdGggKiAwLjc1LCB0aGlzLmhlaWdodCAqIDAuMiwgdGhpcy5nYW1lLndpZHRoICogMC41LCB0aGlzLmhlaWdodCAqIDAuMSk7XG4gICAgfVxuICAgIGRlbGV0ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmlkKTtcbiAgICB9XG4gICAgZHJhdyhkcm9wcGVkU3RvbmVzID0gMCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnByb21wdF9pbWFnZSwgdGhpcy5nYW1lLndpZHRoIC8gMiAtICh0aGlzLmdhbWUud2lkdGggKiAwLjUpIC8gMiwgdGhpcy5oZWlnaHQgKiAwLjE1LCB0aGlzLmdhbWUud2lkdGggKiAwLjUsIHRoaXMuaGVpZ2h0ICogMC4yNSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gMzAgKyBcInB4IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjb25zdCBwcm9tcHRUZXh0TGV0dGVycyA9IHRoaXMuY3VycmVudFByb21wdFRleHQuc3BsaXQoXCJcIik7XG4gICAgICAgIGNvbnN0IHggPSB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgeSA9IHRoaXMuaGVpZ2h0ICogMC4yNjtcbiAgICAgICAgdmFyIGZvbnRTaXplID0gMjA7XG4gICAgICAgIHZhciBsZXR0ZXJIaWdobGlnaHQgPSB0aGlzLmN1cnJlbnRQdXp6bGVEYXRhLnRhcmdldFN0b25lc1swXS5zcGxpdChcIlwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9tcHRUZXh0TGV0dGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubGV2ZWxEYXRhLmxldmVsTWV0YS5sZXZlbFR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiTGV0dGVySW5Xb3JkXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldHRlckhpZ2hsaWdodC5pbmNsdWRlcyhwcm9tcHRUZXh0TGV0dGVyc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlckhpZ2hsaWdodCA9IGxldHRlckhpZ2hsaWdodC5zbGljZSgxLCBsZXR0ZXJIaWdobGlnaHQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHByb21wdFRleHRMZXR0ZXJzW2ldLCBmb250U2l6ZSAqIGkgKyB4IC0gcHJvbXB0VGV4dExldHRlcnMubGVuZ3RoICogNiwgeSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHByb21wdFRleHRMZXR0ZXJzW2ldLCBmb250U2l6ZSAqIGkgKyB4IC0gcHJvbXB0VGV4dExldHRlcnMubGVuZ3RoICogNiwgeSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJXb3JkXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRyb3BwZWRTdG9uZXMgPiBpIHx8IGRyb3BwZWRTdG9uZXMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHByb21wdFRleHRMZXR0ZXJzW2ldLCBmb250U2l6ZSAqIGkgKyB4IC0gcHJvbXB0VGV4dExldHRlcnMubGVuZ3RoICogNiwgeSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChwcm9tcHRUZXh0TGV0dGVyc1tpXSwgZm9udFNpemUgKiBpICsgeCAtIHByb21wdFRleHRMZXR0ZXJzLmxlbmd0aCAqIDYsIHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChwcm9tcHRUZXh0TGV0dGVyc1tpXSwgZm9udFNpemUgKiBpICsgeCAtIHByb21wdFRleHRMZXR0ZXJzLmxlbmd0aCAqIDYsIHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuZmlsbFRleHQoXG4gICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnRQcm9tcHRUZXh0LFxuICAgICAgICAvLyAgIHRoaXMud2lkdGggLyAyLjEsXG4gICAgICAgIC8vICAgdGhpcy5oZWlnaHQgKiAwLjI2XG4gICAgICAgIC8vICk7XG4gICAgfVxuICAgIGNyZWF0ZUJhY2tncm91bmQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5wcm9tcHRfaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc2VsZi5wcm9tcHRfaW1hZ2Uuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcHJvbXB0VGV4dEJnLnBuZ1wiO1xuICAgICAgICBzZWxmLnByb21wdF9pbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5kcmF3KCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVCYWNrZ3JvdW5kKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU3RvbmVMYXllciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XG5pbXBvcnQgeyBTdG9uZUNvbmZpZyB9IGZyb20gXCIuLi9jb21tb24vc3RvbmVzLWNvbmZpZy5qc1wiO1xuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcbmltcG9ydCBQYXVzZVBvcFVwIGZyb20gXCIuL3BhdXNlLXBvcHVwLmpzXCI7XG52YXIgZ3MgPSB7XG4gICAgbW9kZTogXCJnYW1lcGxheVwiLFxuICAgIGxldmVsbnVtOiAwLFxufTtcbmdzLnB1enpsZSA9IHtcbiAgICB0YXJnZXQ6IFtdLFxuICAgIHN0b25lczogW10sXG59O1xuZ3Muc3RvbmVzID0gW107XG52YXIgcGlja2VkU3RvbmU7XG52YXIgb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlID0gMzI7XG5jb25zdCBkcmFnQXVkaW8gPSBuZXcgQXVkaW8oKTtcbmRyYWdBdWRpby5zcmMgPSBcIi4vYXNzZXRzL2F1ZGlvcy9vbkRyYWcubXAzXCI7XG5kcmFnQXVkaW8ucHJlbG9hZCA9IFwiYXV0b1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvbmVzTGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgcHV6emxlRGF0YSwgcGF1c2VidXR0b24sIGNhbGxCYWNrLCBsZXZlbFN0YXJ0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmxldmVsU3RhcnQgPSBsZXZlbFN0YXJ0O1xuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLnBhdXNlYnV0dG9uID0gcGF1c2VidXR0b247XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5wdXp6bGVEYXRhID0gcHV6emxlRGF0YTtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50UHV6emxlKCk7XG4gICAgICAgIHRoaXMubGV2ZWxTdGFydCA9IGxldmVsU3RhcnQ7XG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBjYWxsQmFjaztcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICB9XG4gICAgc2V0TmV3UHV6emxlKGN1cnJlbnRQdXp6bGUpIHtcbiAgICAgICAgdGhpcy5wdXp6bGVEYXRhID0gY3VycmVudFB1enpsZTtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50UHV6emxlKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU3RvbmVzKHRoaXMuc3RvbmVwb3MpO1xuICAgIH1cbiAgICBzdG9uZXBvcyhzdG9uZXBvcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgc2V0Q3VycmVudFB1enpsZSgpIHtcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0LmF1ZGlvLmNoYW5nZVNvdXJzZSh0aGlzLnB1enpsZURhdGEucHJvbXB0LnByb21wdEF1ZGlvKTtcbiAgICAgICAgZ3MucHV6emxlLnN0b25lcyA9IFtdO1xuICAgICAgICBncy5wdXp6bGUudGFyZ2V0ID0gW107XG4gICAgICAgIGZvciAobGV0IHRhcmdldCBvZiB0aGlzLnB1enpsZURhdGEudGFyZ2V0U3RvbmVzKSB7XG4gICAgICAgICAgICBncy5wdXp6bGUudGFyZ2V0LnB1c2godGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBncy5wdXp6bGUuc3RvbmVzID0gdGhpcy5nYW1lU3RvbmVPcHRpb25zKHRoaXMucHV6emxlRGF0YS5mb2lsU3RvbmVzLCB0aGlzLnB1enpsZURhdGEudGFyZ2V0U3RvbmVzKTtcbiAgICAgICAgZ3MucHV6emxlLnByb21wdCA9IHRoaXMucHV6emxlRGF0YS5wcm9tcHQucHJvbXB0VGV4dDtcbiAgICB9XG4gICAgaXNUaW1lckVuZGVkKCkge1xuICAgICAgICBwaWNrZWRTdG9uZSA9IG51bGw7XG4gICAgfVxuICAgIGdhbWVTdG9uZU9wdGlvbnMoZm9pbFN0b25lcywgdGFyZ2V0U3RvbmVzKSB7XG4gICAgICAgIHRhcmdldFN0b25lcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICBmb2lsU3RvbmVzLmluZGV4T2YoZSkgIT0gLTFcbiAgICAgICAgICAgICAgICA/IGZvaWxTdG9uZXMuc3BsaWNlKGZvaWxTdG9uZXMuaW5kZXhPZihlKSwgMSlcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXJnZXRTdG9uZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgZm9pbFN0b25lcy5wdXNoKGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvaWxTdG9uZXMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBTdG9uZUxheWVyKTtcbiAgICAgICAgY29uc3Qgc2VsZkVsZWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5zdHlsZS56SW5kZXggPSBcIjdcIjtcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICAgICAgICB0aGlzLnN0b25lcG9zID0gW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyA1IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjkgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4xNSAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAzLjUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4yIC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDQgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuMjggLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gNyAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS41IC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIuMyArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIuMSAtXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOSAtIG9mZnNldENvb3JkaW5hdGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyLjMgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyLjEgLVxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjQyIC0gb2Zmc2V0Q29vcmRpbmF0ZVZhbHVlLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDYgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuMTUgLSBvZmZzZXRDb29yZGluYXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIF07XG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIGlmIChNYXRoLnNxcnQoeCAtIHRoaXMud2lkdGggLyAzKSA8IDEyICYmXG4gICAgICAgICAgICAgICAgTWF0aC5zcXJ0KHkgLSB0aGlzLmhlaWdodCAvIDUuNSkgPCAxMCkge1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydC5hdWRpby5jaGFuZ2VTb3Vyc2Uoc2VsZi5wdXp6bGVEYXRhLnByb21wdC5wcm9tcHRBdWRpbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC0gdGhpcy53aWR0aCAvIDIgLSAodGhpcy53aWR0aCAqIDAuMykgLyAyKSAqXG4gICAgICAgICAgICAgICAgKHggLSB0aGlzLndpZHRoIC8gMiAtICh0aGlzLndpZHRoICogMC4zKSAvIDIpKSArXG4gICAgICAgICAgICAgICAgKHkgLSB0aGlzLmhlaWdodCAqIDAuMTUpICogKHkgLSB0aGlzLmhlaWdodCAqIDAuMTUpIDw9XG4gICAgICAgICAgICAgICAgMTAwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvbXB0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydC50aW1lclRpY2tpbmcucmVzdW1lVGltZXIoKTtcbiAgICAgICAgICAgIGlmIChzZWxmLnBhdXNlYnV0dG9uLm9uQ2xpY2soeCwgeSkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQudGltZXJUaWNraW5nLnBhdXNlVGltZXIoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnQubGV2ZWxFbmRDYWxsQmFjaygpO1xuICAgICAgICAgICAgICAgIG5ldyBQYXVzZVBvcFVwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGYuaWQpLCBzZWxmLmxldmVsU3RhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgcyBvZiBncy5zdG9uZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5zcXJ0KCh4IC0gcy54KSAqICh4IC0gcy54KSArICh5IC0gcy55KSAqICh5IC0gcy55KSkgPD0gNDApIHtcbiAgICAgICAgICAgICAgICAgICAgZHJhZ0F1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZHJhZ0F1ZGlvLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgcGlja2VkU3RvbmUgPSBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVsZW1lbnRJZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIGlmIChNYXRoLnNxcnQoKHggLVxuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIueCAtXG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci53aWR0aCAvIDQpICpcbiAgICAgICAgICAgICAgICAoeCAtXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIueCAtXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLm1vbnN0ZXIud2lkdGggLyA0KSArXG4gICAgICAgICAgICAgICAgKHkgLVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5tb25zdGVyLnkgLVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5tb25zdGVyLmhlaWdodCAvIDIuNykgKlxuICAgICAgICAgICAgICAgICAgICAoeSAtXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5tb25zdGVyLnkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUubW9uc3Rlci5oZWlnaHQgLyAyLjcpKSA8PSA2MCkge1xuICAgICAgICAgICAgICAgIGlmIChwaWNrZWRTdG9uZSkge1xuICAgICAgICAgICAgICAgICAgICBwaWNrZWRTdG9uZS54ID0gLTkwMDtcbiAgICAgICAgICAgICAgICAgICAgcGlja2VkU3RvbmUueSA9IC05MDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWNrZWRTdG9uZS50ZXh0ID09IGdzLnB1enpsZS50YXJnZXRbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdzLnB1enpsZS50YXJnZXQuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncy5wdXp6bGUudGFyZ2V0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3Muc3RvbmVzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxsQmFjayh0cnVlLCB0cnVlLCBwaWNrZWRTdG9uZS50ZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGxCYWNrKHRydWUsIGZhbHNlLCBwaWNrZWRTdG9uZS50ZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncy5zdG9uZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsbEJhY2soZmFsc2UsIHRydWUsIHBpY2tlZFN0b25lLnRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwaWNrZWRTdG9uZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGlja2VkU3RvbmUpIHtcbiAgICAgICAgICAgICAgICBwaWNrZWRTdG9uZS54ID0gcGlja2VkU3RvbmUub3JpZ3g7XG4gICAgICAgICAgICAgICAgcGlja2VkU3RvbmUueSA9IHBpY2tlZFN0b25lLm9yaWd5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGlja2VkU3RvbmUgPSBudWxsO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHNlbGZFbGVsZW1lbnRJZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHJlY3QgPSBzZWxmRWxlbGVtZW50SWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICBpZiAocGlja2VkU3RvbmUpIHtcbiAgICAgICAgICAgICAgICBwaWNrZWRTdG9uZS54ID0geDtcbiAgICAgICAgICAgICAgICBwaWNrZWRTdG9uZS55ID0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBzZWxmRWxlbGVtZW50SWQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0b3VjaCA9IGUudG91Y2hlc1swXTtcbiAgICAgICAgICAgIHZhciBtb3VzZUV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXCJtb3VzZWRvd25cIiwge1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IHRvdWNoLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogdG91Y2guY2xpZW50WSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZkVsZWxlbWVudElkLmRpc3BhdGNoRXZlbnQobW91c2VFdmVudCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0b3VjaCA9IGUudG91Y2hlc1swXTtcbiAgICAgICAgICAgIHZhciBtb3VzZUV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXCJtb3VzZW1vdmVcIiwge1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IHRvdWNoLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogdG91Y2guY2xpZW50WSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZkVsZWxlbWVudElkLmRpc3BhdGNoRXZlbnQobW91c2VFdmVudCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgc2VsZkVsZWxlbWVudElkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgIHZhciBtb3VzZUV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIsIHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiB0b3VjaC5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IHRvdWNoLmNsaWVudFksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGZFbGVsZW1lbnRJZC5kaXNwYXRjaEV2ZW50KG1vdXNlRXZlbnQpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3JlYXRlU3RvbmVzKHRoaXMuc3RvbmVwb3MpO1xuICAgIH1cbiAgICBzZXRQcm9tcHQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gdGhpcy53aWR0aCAqIDAuMDkgKyBcInB4IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoZ3MucHV6emxlLnByb21wdCwgdGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0ICogMC4yNyk7XG4gICAgfVxuICAgIGRlbGV0ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmlkKTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgZm9yIChsZXQgcyBvZiBncy5zdG9uZXMpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd3N0b25lKHMsIHRoaXMuY2FudmFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3c3RvbmUocywgY2FudmFzKSB7XG4gICAgICAgIHZhciBpbWFnZVNpemUgPSBjYW52YXMuaGVpZ2h0IC8gMTM7XG4gICAgICAgIHZhciB0ZXh0Rm9udFNpemUgPSBjYW52YXMuaGVpZ2h0IC8gMjA7XG4gICAgICAgIHZhciBpbWFnZUNlbnRlck9mZnNldFggPSBpbWFnZVNpemUgLyAyLjM7XG4gICAgICAgIHZhciBpbWFnZUNlbnRlck9mZnNldFkgPSBpbWFnZVNpemUgLyAxLjU7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2Uocy5pbWcsIHMueCAtIGltYWdlQ2VudGVyT2Zmc2V0WCwgcy55IC0gaW1hZ2VDZW50ZXJPZmZzZXRZLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gdGV4dEZvbnRTaXplICsgXCJweCBBcmlhbFwiO1xuICAgICAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHMudGV4dCwgcy54LCBzLnkpO1xuICAgIH1cbiAgICBjcmVhdGVTdG9uZXMoc3RvbmVwb3MpIHtcbiAgICAgICAgdmFyIHBvc3MgPSBzdG9uZXBvc1swXTtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICBncy5zdG9uZXMuc3BsaWNlKDAsIGdzLnN0b25lcy5sZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBzIG9mIGdzLnB1enpsZS5zdG9uZXMpIHtcbiAgICAgICAgICAgIHZhciBucyA9IG5ldyBTdG9uZUNvbmZpZyhzLCBwb3NzW2ldWzBdLCBwb3NzW2ldWzFdKTtcbiAgICAgICAgICAgIGdzLnN0b25lcy5wdXNoKG5zKTtcbiAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUaW1ldGlja2VyTGF5ZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcbmV4cG9ydCBjbGFzcyBUaW1lclRpY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGxldmVsU3RhcnQpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy53aWR0aCA9IGdhbWUud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMud2lkdGhUb0NsZWFyID0gdGhpcy5nYW1lLndpZHRoIC8gMy40O1xuICAgICAgICB0aGlzLm1heExpbWl0RXhoYXVzdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICB0aGlzLmlzVGltZXJTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNUaW1lckVuZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGV2ZWxTdGFydCA9IGxldmVsU3RhcnQ7XG4gICAgICAgIHRoaXMuaXNUaW1lclJ1bm5pbmdPdXQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBUaW1ldGlja2VyTGF5ZXIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IFwiNFwiO1xuICAgICAgICAvLyB0aGlzLmFuaW1hdGlvbigwKTtcbiAgICB9XG4gICAgZGVsZXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKHRoaXMuaWQpO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnRpbWVyX2Z1bGwsIHRoaXMuZ2FtZS53aWR0aCAqIDAuMTIsIHRoaXMuaGVpZ2h0ICogMC4wOTksIHRoaXMuZ2FtZS53aWR0aCAtIDUwLCB0aGlzLmhlaWdodCAqIDAuMDUpO1xuICAgICAgICB0aGlzLmJlZ2luVGltZXJPblN0YXJ0KCk7XG4gICAgfVxuICAgIGNyZWF0ZUJhY2tncm91ZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnRpbWVyX2Z1bGwgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy50aW1lcl9mdWxsLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3RpbWVyX2Z1bGwucG5nXCI7XG4gICAgICAgIHRoaXMudGltZXJfZnVsbC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5kcmF3KCk7XG4gICAgICAgICAgICBzZWxmLmJlZ2luVGltZXJPblN0YXJ0KCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUaW1lclN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgKz0gMC4wNjtcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUud2lkdGggKiAxLjMgLSB0aGlzLndpZHRoVG9DbGVhciAtIDEwICogdGhpcy50aW1lciA+IDU1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCh0aGlzLmdhbWUud2lkdGggKiAxLjMgLSB0aGlzLndpZHRoVG9DbGVhciAtIDEwICogdGhpcy50aW1lciwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS53aWR0aCAqIDEuMyAtIHRoaXMud2lkdGhUb0NsZWFyIC0gMTAgKiB0aGlzLnRpbWVyIDwgMTAwICYmXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLndpZHRoICogMS4zIC0gdGhpcy53aWR0aFRvQ2xlYXIgLSAxMCAqIHRoaXMudGltZXIgPiA1NCAmJlxuICAgICAgICAgICAgICAgICF0aGlzLmlzVGltZXJSdW5uaW5nT3V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpbWVyUnVubmluZ091dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbFN0YXJ0LmF1ZGlvLmNoYW5nZVNvdXJzZShcIi4vYXNzZXRzL2F1ZGlvcy90aW1lb3V0Lm1wM1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUud2lkdGggKiAxLjMgLSB0aGlzLndpZHRoVG9DbGVhciAtIDEwICogdGhpcy50aW1lciA8IDU1ICYmXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLndpZHRoICogMS4zIC0gdGhpcy53aWR0aFRvQ2xlYXIgLSAxMCAqIHRoaXMudGltZXIgPiA1NCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUaW1lclJ1bm5pbmdPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGltZXJFbmRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpbWVyRW5kZWQgPyB0aGlzLmxldmVsU3RhcnQuY2hhbmdlUHV6emxlKCkgOiBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGJlZ2luVGltZXJPblN0YXJ0KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhdXNlQnV0dG9uQ2xpY2tlZCkge1xuICAgICAgICAgICAgICAgIGlmICghc2VsZi5pc1RpbWVyU3RhcnRlZCAmJiBzZWxmLnRpbWVyID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50aW1lciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaXNUaW1lclN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNjUwMCk7XG4gICAgfVxuICAgIHN0b3BUaW1lcigpIHtcbiAgICAgICAgdGhpcy5pc1RpbWVyU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuICAgIHBhdXNlVGltZXIoKSB7XG4gICAgICAgIHRoaXMuaXNUaW1lclN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbkNsaWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXN1bWVUaW1lcigpIHtcbiAgICAgICAgdGhpcy5pc1RpbWVyU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucGF1c2VCdXR0b25DbGlja2VkID0gZmFsc2U7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBsYW5nIH0gZnJvbSBcIi4uLy4uL2dsb2JhbC12YXJpYWJsZXMuanNcIjtcbmNvbnN0IFVSTCA9IFwiLi9sYW5nL1wiICsgbGFuZyArIFwiL2Z0bV9cIiArIGxhbmcgKyBcIi5qc29uXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RnRtRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goVVJMLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gbGV0IGQgPSB7XG4gICAgICAgIC8vICAgICBcIk90aGVyQXVkaW9zXCI6IG51bGwsXG4gICAgICAgIC8vICAgICBcIkZlZWRiYWNrVGV4dHNcIjogbnVsbCxcbiAgICAgICAgLy8gICAgIFwiTGV2ZWxzXCI6IG51bGwsXG4gICAgICAgIC8vICAgICBcIkZlZWRiYWNrQXVkaW9zXCI6IG51bGwsXG4gICAgICAgIC8vICAgICBcIlJpZ2h0VG9MZWZ0XCI6IG51bGxcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4geWllbGQgZ2V0RnRtRGF0YSgpO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGNsYXNzIERhdGFNb2RhbCB7XG4gICAgY29uc3RydWN0b3Iob3RoZXJBdWRpb3MsIGxldmVscywgZmVlZGJhY2tUZXh0cywgcmlnaHRUb0xlZnQsIGZlZWRiYWNrQXVkaW9zKSB7XG4gICAgICAgIHRoaXMub3RoZXJBdWRpb3MgPSBuZXcgT3RoZXJBdWRpb3Mob3RoZXJBdWRpb3MpO1xuICAgICAgICB0aGlzLmxldmVscyA9IHRoaXMuZ2V0TGV2ZWxzKGxldmVscyk7XG4gICAgICAgIHRoaXMuRmVlZGJhY2tUZXh0cyA9IG5ldyBGZWVkYmFja1RleHRzKGZlZWRiYWNrVGV4dHMpO1xuICAgICAgICB0aGlzLkZlZWRiYWNrQXVkaW9zID0gbmV3IEZlZWRiYWNrQXVkaW9zKGZlZWRiYWNrQXVkaW9zKTtcbiAgICAgICAgdGhpcy5yaWdodFRvTGVmdCA9IHJpZ2h0VG9MZWZ0O1xuICAgIH1cbiAgICBnZXRMZXZlbHMobGV2ZWxzKSB7XG4gICAgICAgIGxldCBsZXZlbEFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV2ZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXZlbEFycmF5LnB1c2gobmV3IExldmVscyhsZXZlbHNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGV2ZWxBcnJheTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgT3RoZXJBdWRpb3Mge1xuICAgIGNvbnN0cnVjdG9yKG90aGVyQXVkaW9zKSB7XG4gICAgICAgIHRoaXMuc2VsY3RZb3VyUGxheWVyID0gb3RoZXJBdWRpb3NbXCJTZWxlY3QgeW91ciBwbGF5ZXJcIl07XG4gICAgICAgIHRoaXMud2F0Y2hNZUdyb3cgPSBvdGhlckF1ZGlvc1tcIldhdGNoIG1lIGdyb3dcIl07XG4gICAgICAgIHRoaXMuYXJlWW91U3VyZSA9IG90aGVyQXVkaW9zW1wiQXJlIHlvdSBzdXJlXCJdO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGZWVkYmFja1RleHRzIHtcbiAgICBjb25zdHJ1Y3RvcihmZWVkYmFja1RleHRzKSB7XG4gICAgICAgIHRoaXMuZmFudGFzdGljID0gZmVlZGJhY2tUZXh0c1swXTtcbiAgICAgICAgdGhpcy5ncmVhdCA9IGZlZWRiYWNrVGV4dHNbMV07XG4gICAgICAgIHRoaXMuYW1hemluZyA9IGZlZWRiYWNrVGV4dHNbMl07XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrQXVkaW9zIHtcbiAgICBjb25zdHJ1Y3RvcihmZWVkYmFja0F1ZGlvcykge1xuICAgICAgICB0aGlzLmZhbnRhc3RpYyA9IGZlZWRiYWNrQXVkaW9zWzBdO1xuICAgICAgICB0aGlzLmdyZWF0ID0gZmVlZGJhY2tBdWRpb3NbMV07XG4gICAgICAgIHRoaXMuYW1hemluZyA9IGZlZWRiYWNrQXVkaW9zWzJdO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMZXZlbHMge1xuICAgIGNvbnN0cnVjdG9yKGxldmVscykge1xuICAgICAgICB0aGlzLnB1enpsZXMgPSB0aGlzLmdldFB1enpsZURhdGEobGV2ZWxzKTtcbiAgICAgICAgdGhpcy5sZXZlbE1ldGEgPSBuZXcgTGV2ZWxNZXRhKGxldmVscy5MZXZlbE1ldGEpO1xuICAgICAgICB0aGlzLmxldmVsTnVtYmVyID0gbGV2ZWxzLkxldmVsTnVtYmVyO1xuICAgIH1cbiAgICBnZXRQdXp6bGVEYXRhKGxldmVscykge1xuICAgICAgICBsZXQgcHV6emxlT2JqZWN0cyA9IFtdO1xuICAgICAgICBsZXZlbHMuUHV6emxlcy5tYXAoKHB1enpsZURhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBwdXp6bGVPYmplY3RzLnB1c2gobmV3IFB1enpsZXMocHV6emxlRGF0YSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHB1enpsZU9iamVjdHM7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFB1enpsZXMge1xuICAgIGNvbnN0cnVjdG9yKHB1enpsZSkge1xuICAgICAgICB0aGlzLnNlZ21lbnROdW1iZXIgPSBwdXp6bGUuU2VnbWVudE51bWJlcjtcbiAgICAgICAgdGhpcy5wcm9tcHQgPSBuZXcgUHJvbXB0KHB1enpsZS5wcm9tcHQpO1xuICAgICAgICB0aGlzLmZvaWxTdG9uZXMgPSB0aGlzLmdldEZvaWxTdG9uZXMocHV6emxlKTtcbiAgICAgICAgdGhpcy50YXJnZXRTdG9uZXMgPSB0aGlzLmdldFRhcmdldFN0b25lcyhwdXp6bGUpO1xuICAgIH1cbiAgICBnZXRGb2lsU3RvbmVzKHB1enpsZSkge1xuICAgICAgICBsZXQgZm9pbFN0b25lQXJyYXkgPSBbXTtcbiAgICAgICAgcHV6emxlLmZvaWxzdG9uZXMubWFwKChzdG9uZXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBmb2lsU3RvbmVBcnJheS5wdXNoKHN0b25lcy5TdG9uZVRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvaWxTdG9uZUFycmF5O1xuICAgIH1cbiAgICBnZXRUYXJnZXRTdG9uZXMocHV6emxlKSB7XG4gICAgICAgIGxldCB0YXJnZXRTdG9uZUFycmF5ID0gW107XG4gICAgICAgIHB1enpsZS50YXJnZXRzdG9uZXMubWFwKChzdG9uZXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0YXJnZXRTdG9uZUFycmF5LnB1c2goc3RvbmVzLlN0b25lVGV4dCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0U3RvbmVBcnJheTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRm9pbFN0b25lIHtcbiAgICBjb25zdHJ1Y3RvcihzdG9uZVRleHQpIHtcbiAgICAgICAgdGhpcy5zdG9uZVRleHQgPSBzdG9uZVRleHQ7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRhcmdldFN0b25lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdG9uZVRleHQ7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFByb21wdCB7XG4gICAgY29uc3RydWN0b3IocHJvbXB0KSB7XG4gICAgICAgIHRoaXMucHJvbXB0VGV4dCA9IHByb21wdC5Qcm9tcHRUZXh0O1xuICAgICAgICB0aGlzLnByb21wdEF1ZGlvID0gcHJvbXB0LlByb21wdEF1ZGlvO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMZXZlbE1ldGEge1xuICAgIGNvbnN0cnVjdG9yKGxldmVsTWV0YSkge1xuICAgICAgICB0aGlzLnByb21wdEZhZGVPdXQgPSBsZXZlbE1ldGEuUHJvbXB0RmFkZW91dDtcbiAgICAgICAgdGhpcy5sZXR0ZXJHcm91cCA9IGxldmVsTWV0YS5MZXR0ZXJHcm91cDtcbiAgICAgICAgdGhpcy5sZXZlbE51bWJlciA9IGxldmVsTWV0YS5MZXZlbE51bWJlcjtcbiAgICAgICAgdGhpcy5wcm90b1R5cGUgPSBsZXZlbE1ldGEuUHJvbXB0VHlwZTtcbiAgICAgICAgdGhpcy5sZXZlbFR5cGUgPSBsZXZlbE1ldGEuTGV2ZWxUeXBlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGxhbmcgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xuZXhwb3J0IGNsYXNzIFByb2ZpbGVEYXRhIHtcbiAgICBjb25zdHJ1Y3RvcihsZXZlbE5hbWUsIGxldmVsTnVtYmVyLCBsZXZlbFNjb3JlLCBsZXZlbFN0YXIpIHtcbiAgICAgICAgKHRoaXMubGV2ZWxOYW1lID0gbGV2ZWxOYW1lKSxcbiAgICAgICAgICAgICh0aGlzLmxldmVsTnVtYmVyID0gbGV2ZWxOdW1iZXIpLFxuICAgICAgICAgICAgKHRoaXMubGV2ZWxTY29yZSA9IGxldmVsU2NvcmUpLFxuICAgICAgICAgICAgKHRoaXMubGV2ZWxTdGFyID0gbGV2ZWxTdGFyKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGF0YVRvU3RvcmFnZShwcm9maWxlRGF0YSkge1xuICAgIGNvbnN0IGV4aXN0aW5nRGF0YSA9IGdldERhdGFmcm9tU3RvcmFnZSgpXG4gICAgICAgID8ganNvblRvQXJyYXkoZ2V0RGF0YWZyb21TdG9yYWdlKCkpXG4gICAgICAgIDogW107XG4gICAgcHJvZmlsZURhdGEgPyBkYXRhUHVzaFRvQXJyYXkoZXhpc3RpbmdEYXRhLCBwcm9maWxlRGF0YSkgOiBudWxsO1xuICAgIGV4aXN0aW5nRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmxldmVsTnVtYmVyID4gYi5sZXZlbE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdEYXRhKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsYW5nICsgXCJQcm9maWxlXCIsIGRhdGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGpzb25Ub0FycmF5KGpzb24pIHtcbiAgICB2YXIgZGF0YSA9IFtdO1xuICAgIGZvciAodmFyIGkgaW4ganNvbikge1xuICAgICAgICBkYXRhLnB1c2goanNvbltpXSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufVxuZnVuY3Rpb24gZGF0YVB1c2hUb0FycmF5KGpzb25EYXRhLCBwcm9maWxlRGF0YSkge1xuICAgIHZhciBkYXRhTm90RXhpc3QgPSB0cnVlO1xuICAgIGpzb25EYXRhLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKHBhcnNlSW50KGRhdGEubGV2ZWxOdW1iZXIpID09IHBhcnNlSW50KHByb2ZpbGVEYXRhLmxldmVsTnVtYmVyKSkge1xuICAgICAgICAgICAgZGF0YU5vdEV4aXN0ID0gZmFsc2U7XG4gICAgICAgICAgICBkYXRhLmxldmVsU2NvcmUgPCBwcm9maWxlRGF0YS5sZXZlbFNjb3JlXG4gICAgICAgICAgICAgICAgPyAoZGF0YS5sZXZlbFNjb3JlID0gcHJvZmlsZURhdGEubGV2ZWxTY29yZSlcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBkYXRhLmxldmVsU3RhciA8IHByb2ZpbGVEYXRhLmxldmVsU3RhclxuICAgICAgICAgICAgICAgID8gKGRhdGEubGV2ZWxTdGFyID0gcHJvZmlsZURhdGEubGV2ZWxTdGFyKVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRhdGFOb3RFeGlzdCA/IGpzb25EYXRhLnB1c2gocHJvZmlsZURhdGEpIDogbnVsbDtcbiAgICByZXR1cm4ganNvbkRhdGE7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YWZyb21TdG9yYWdlKCkge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxhbmcgKyBcIlByb2ZpbGVcIikgfHwgXCJ7fVwiKTtcbiAgICByZXR1cm4gZGF0YTtcbn1cbiIsImV4cG9ydCBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5Q2w2Q2NxdUc0Rmx3UFV0Zm1UWTE2LVI1Y3p4T25UdFBFXCIsXG4gICAgYXV0aERvbWFpbjogXCJmZWVkdGhlbW9uc3RlcmpzLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJmZWVkdGhlbW9uc3RlcmpzXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJmZWVkdGhlbW9uc3RlcmpzLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjkwMDEyNjgyMDFcIixcbiAgICBhcHBJZDogXCIxOjY5MDAxMjY4MjAxOndlYjoyYmZlNGQ1Mzk1ZDE2MDI2NjJkOTc4XCIsXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLU42VlFFNUdXUUhcIlxufTtcbiIsImltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XG5pbXBvcnQgeyBHYW1lRW5kTGF5ZXIsIGxvYWRJbWFnZXMgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xudmFyIGltYWdlcyA9IHtcbiAgICBiZ0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvYmdfdjAxLmpwZ1wiLFxuICAgIGhpbGxJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL2hpbGxfdjAxLnBuZ1wiLFxuICAgIHRpbWVyX2VtcHR5OiBcIi4vYXNzZXRzL2ltYWdlcy90aW1lcl9lbXB0eS5wbmdcIixcbiAgICBwaWxsZXJJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1RvdGVtX3YwMl92MDEucG5nXCIsXG4gICAgZ3Jhc3NJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0ZHX2FfdjAxLnBuZ1wiLFxuICAgIGZlbmNoSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9mZW5jZV92MDEucG5nXCIsXG4gICAgYmlnTW9uc3RlckltZzogXCIuL2Fzc2V0cy9pbWFnZXMvZnRtX2JvbnVzX2xldmVsX21vbnN0ZXJzLnBuZ1wiXG59O1xudmFyIHNlbGY7XG5leHBvcnQgY2xhc3MgR2FtZUVuZFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMud2lkdGggPSBnYW1lLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xuICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjayA9IG5ldyBDYW52YXNTdGFjayhcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgR2FtZUVuZExheWVyKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSAnMyc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzY3JpcHRpb24tdGV4dFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2NyaXB0aW9uLXRleHRcIikuaW5uZXJIVE1MID0gZ2xvYmFsVGhpcy5kZXNjcmlwdGlvblRleHQ7XG4gICAgICAgIHRoaXMuY3JlYXRlQmFja2dyb3VkKCk7XG4gICAgfVxuICAgIGRlbGV0ZUNhbnZhcygpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNjcmlwdGlvbi10ZXh0XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5jYW52YXNTdGFjay5kZWxldGVMYXllcih0aGlzLmlkKTtcbiAgICAgICAgLy9kZWxldGUgdGhpcztcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICB9XG4gICAgY3JlYXRlQmFja2dyb3VkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIGxvYWRJbWFnZXMoaW1hZ2VzLCBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmJnSW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLnBpbGxlckltZywgd2lkdGggKiAwLjYsIGhlaWdodCAvIDYsIHdpZHRoLCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmZlbmNoSW1nLCAtd2lkdGggKiAwLjQsIGhlaWdodCAvIDMsIHdpZHRoLCBoZWlnaHQgLyAzKTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmhpbGxJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmdyYXNzSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyICsgKGhlaWdodCAvIDIpICogMC4xLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS5iaWdNb25zdGVySW1nLCB3aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIgLSBoZWlnaHQgKiAwLjI1LCB3aWR0aCAvIDEuNywgaGVpZ2h0IC8gMi41KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgTGV2ZWxTdGFydFNjZW5lIH0gZnJvbSBcIi4vbGV2ZWwtc3RhcnQtc2NlbmUuanNcIjtcbnZhciBhbmltYXRpb25GcmFtZTtcbnZhciBzZWxmO1xuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIHB1enpsZURhdGEsIGdhbWVTY2VuZUNhbGxCYWNrKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMubW9uc3RlclBoYXNlTnVtYmVyID1cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFN0b3JlTW9uc3RlclBoYXNlTnVtYmVyKSB8fCAxO1xuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IExldmVsU3RhcnRTY2VuZSh7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLFxuICAgICAgICAgICAgbGV2ZWxEYXRhOiBwdXp6bGVEYXRhLFxuICAgICAgICAgICAgbGV2ZWxTdGFydENhbGxCYWNrOiB0aGlzLmxldmVsU3RhcnRDYWxsQmFjayxcbiAgICAgICAgICAgIG1vbnN0ZXJQaGFzZU51bWJlcjogdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWVTY2VuZUNhbGxCYWNrID0gZ2FtZVNjZW5lQ2FsbEJhY2s7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbigpO1xuICAgIH1cbiAgICBsZXZlbFN0YXJ0Q2FsbEJhY2soYnV0dG9uX25hbWUpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgICAgICBhbmltYXRpb25GcmFtZSA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAoYnV0dG9uX25hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZV9idXR0b25cIjoge1xuICAgICAgICAgICAgICAgIHNlbGYuZ2FtZVNjZW5lQ2FsbEJhY2soYnV0dG9uX25hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIm5leHRfYnV0dG9uXCI6IHtcbiAgICAgICAgICAgICAgICBzZWxmLmdhbWVTY2VuZUNhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJyZXRyeV9idXR0b25cIjoge1xuICAgICAgICAgICAgICAgIHNlbGYuZ2FtZVNjZW5lQ2FsbEJhY2soYnV0dG9uX25hbWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgc2VsZi5zY2VuZSA/IChzZWxmLnNjZW5lLnN0b25lcyA/IHNlbGYuc2NlbmUuc3RvbmVzLnVwZGF0ZSgpIDogbnVsbCkgOiBudWxsO1xuICAgICAgICBzZWxmLnNjZW5lID8gc2VsZi5zY2VuZS51cGRhdGUoKSA6IG51bGw7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgICAgICB0aGlzLnNjZW5lLmNyZWF0ZUJhY2tncm91ZCgpO1xuICAgIH1cbiAgICBhbmltYXRpb24oKSB7XG4gICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgIGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNlbGYuYW5pbWF0aW9uKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMZXZlbEVuZEJ1dHRvbnNMYXllciwgTGV2ZWxFbmRMYXllciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9jbG9zZV9idXR0b24uanNcIjtcbmltcG9ydCBOZXh0QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvbmV4dF9idXR0b24uanNcIjtcbmltcG9ydCBSZXRyeUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25zL3JldHJ5X2J1dHRvbi5qc1wiO1xuaW1wb3J0IHsgUHJvZmlsZURhdGEsIHNldERhdGFUb1N0b3JhZ2UgfSBmcm9tIFwiLi4vZGF0YS9wcm9maWxlLWRhdGEuanNcIjtcbmltcG9ydCB7IENhbnZhc1N0YWNrIH0gZnJvbSBcIi4uL3V0aWxpdHkvY2FudmFzLXN0YWNrLmpzXCI7XG52YXIgYXVkaW9VcmwgPSB7XG4gICAgbGV2ZWxXaW46IFwiLi9hc3NldHMvYXVkaW9zL0xldmVsV2luRmFuZmFyZS5tcDNcIixcbiAgICBsZXZlbExvc2U6IFwiLi9hc3NldHMvYXVkaW9zL0xldmVsTG9zZUZhbmZhcmUubXAzXCIsXG4gICAgaW50cm86IFwiLi9hc3NldHMvYXVkaW9zL2ludHJvLndhdlwiLFxufTtcbmV4cG9ydCBjbGFzcyBMZXZlbEVuZFNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHNjb3JlLCBtb25zdGVyLCBsZXZlbEVuZENhbGxCYWNrLCBsZXZlbERhdGEsIGlzR2FtZVBhdXNlLCBtb25zdGVyUGhhc2VOdW1iZXIpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2sgPSBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMubW9uc3RlciA9IG1vbnN0ZXI7XG4gICAgICAgIHRoaXMubGV2ZWxEYXRhID0gbGV2ZWxEYXRhO1xuICAgICAgICB0aGlzLmlzR2FtZVBhdXNlID0gaXNHYW1lUGF1c2U7XG4gICAgICAgIHRoaXMubW9uc3RlclBoYXNlTnVtYmVyID0gbW9uc3RlclBoYXNlTnVtYmVyIHx8IDE7XG4gICAgICAgIHRoaXMuc3RhckNvdW50ID1cbiAgICAgICAgICAgIHNjb3JlID09IDIwMFxuICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgIDogc2NvcmUgPT0gMzAwXG4gICAgICAgICAgICAgICAgICAgID8gMlxuICAgICAgICAgICAgICAgICAgICA6IHNjb3JlID09IDQwMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNjb3JlID09IDUwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgY29uc29sZS5sb2cobGV2ZWxEYXRhLmxldmVsTWV0YS5sZXZlbE51bWJlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHNjb3JlKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYW52YXMoKTtcbiAgICAgICAgdGhpcy5sZXZlbEVuZENhbGxCYWNrID0gbGV2ZWxFbmRDYWxsQmFjaztcbiAgICAgICAgc2V0RGF0YVRvU3RvcmFnZShuZXcgUHJvZmlsZURhdGEobGV2ZWxEYXRhLmxldmVsTWV0YS5sZXZlbFR5cGUsIGxldmVsRGF0YS5sZXZlbE1ldGEubGV2ZWxOdW1iZXIsIHNjb3JlLCB0aGlzLnN0YXJDb3VudCkpO1xuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJDb3VudCA8PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zY2VuZS5hdWRpby5jaGFuZ2VTb3Vyc2UoYXVkaW9VcmwubGV2ZWxMb3NlKTtcbiAgICAgICAgICAgIHRoaXMubW9uc3Rlci5jaGFuZ2VJbWFnZShcIi4vYXNzZXRzL2ltYWdlcy9zYWQxXCIgKyB0aGlzLm1vbnN0ZXJQaGFzZU51bWJlciArIFwiLnBuZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW9uc3Rlci5jaGFuZ2VJbWFnZShcIi4vYXNzZXRzL2ltYWdlcy9oYXBweTFcIiArIHRoaXMubW9uc3RlclBoYXNlTnVtYmVyICsgXCIucG5nXCIpO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc2NlbmUuYXVkaW8ucGxheUxldmVsRW5kSGFwcHlBdWRpbyhhdWRpb1VybC5sZXZlbFdpbik7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNhbnZhcy5zY2VuZS5hdWRpby5wbGF5U291bmQoXCIuL2Fzc2V0cy9hdWRpb3MvaW50cm8ud2F2XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUuYXVkaW8ucGF1c2VTb3VuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHRoaXMubW9uc3Rlci5jaGFuZ2VaaW5kZXgoOSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5jYW52YXMuaGVpZ2h0LCB0aGlzLmNhbnZhcy53aWR0aCwgTGV2ZWxFbmRMYXllcik7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuekluZGV4ID0gXCI4XCI7XG4gICAgICAgIHRoaXMuYm90dG9uTGF5ZXIgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuY2FudmFzLmhlaWdodCwgdGhpcy5jYW52YXMud2lkdGgsIExldmVsRW5kQnV0dG9uc0xheWVyKTtcbiAgICAgICAgdGhpcy5ib3R0b25Db250ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5ib3R0b25MYXllcikuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmJvdHRvbkxheWVyKS5zdHlsZS56SW5kZXggPVxuICAgICAgICAgICAgXCI5XCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgICAgICBcIiMwMDQwN0JcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgICAgICAgIFwidXJsKCcuL2Fzc2V0cy9pbWFnZXMvV0lOX3NjcmVlbl9iZy5wbmcnKVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9XG4gICAgICAgICAgICBcImNvbnRhaW5cIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID1cbiAgICAgICAgICAgIFwiY2VudGVyXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLnN0eWxlLmJhY2tncm91bmRBdHRhY2htZW50ID0gXCJmaXhlZFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID1cbiAgICAgICAgICAgIFwibm8tcmVwZWF0XCI7XG4gICAgICAgIHZhciBzdGFyMSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzdGFyMS5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9waW5TdGFyMS5wbmdcIjtcbiAgICAgICAgdmFyIHN0YXIyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHN0YXIyLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3BpblN0YXIyLnBuZ1wiO1xuICAgICAgICB2YXIgc3RhcjMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc3RhcjMuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcGluU3RhcjMucG5nXCI7XG4gICAgICAgIHNlbGYuZHJhd1N0YXJ0cyhzZWxmLCBzdGFyMSwgc3RhcjIsIHN0YXIzKTtcbiAgICAgICAgc2VsZi5uZXh0QnV0dG9uID1cbiAgICAgICAgICAgIHNlbGYuc3RhckNvdW50ID49IDJcbiAgICAgICAgICAgICAgICA/IG5ldyBOZXh0QnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuY2FudmFzLndpZHRoICogMC44IC0gKHNlbGYuY2FudmFzLndpZHRoICogMC4xOSkgLyAyLCBzZWxmLmNhbnZhcy5oZWlnaHQgKiAwLjcpXG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBzZWxmLnJldHJ5QnV0dG9uID0gbmV3IFJldHJ5QnV0dG9uKHNlbGYuY29udGV4dCwgc2VsZi5jYW52YXMsIHNlbGYuc3RhckNvdW50ID49IDJcbiAgICAgICAgICAgID8gc2VsZi5jYW52YXMud2lkdGggKiAwLjUgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDJcbiAgICAgICAgICAgIDogc2VsZi5jYW52YXMud2lkdGggKiAwLjggLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuNyk7XG4gICAgICAgIHNlbGYuY2xvc2VCdXR0b24gPSBuZXcgQ2xvc2VCdXR0b24oc2VsZi5jb250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5jYW52YXMud2lkdGggKiAwLjIgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuNyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuYm90dG9uTGF5ZXIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZi5ib3R0b25MYXllcikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICBpZiAoc2VsZi5uZXh0QnV0dG9uICYmIHNlbGYubmV4dEJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUuYXVkaW8ucGF1c2VTb3VuZCgpO1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxFbmRDYWxsQmFjayhcIm5leHRfYnV0dG9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYucmV0cnlCdXR0b24ub25DbGljayh4LCB5KSkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzLnNjZW5lLmF1ZGlvLnBhdXNlU291bmQoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsRW5kQ2FsbEJhY2soXCJyZXRyeV9idXR0b25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5jbG9zZUJ1dHRvbi5vbkNsaWNrKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYW52YXMuc2NlbmUuYXVkaW8ucGF1c2VTb3VuZCgpO1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxFbmRDYWxsQmFjayhcImNsb3NlX2J1dHRvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdTdGFydHMoc2VsZiwgc3RhcjEsIHN0YXIyLCBzdGFyMykge1xuICAgICAgICBzdGFyMS5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuc3RhckNvdW50ID49IDIpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShzdGFyMSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjIgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMiwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5LCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHN0YXIyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5zdGFyQ291bnQgPD0gMyAmJiBzZWxmLnN0YXJDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShzdGFyMiwgc2VsZi5jYW52YXMud2lkdGggKiAwLjUgLSAoc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KSAvIDIsIHNlbGYuY2FudmFzLmhlaWdodCAqIDAuMTUsIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSwgc2VsZi5jYW52YXMud2lkdGggKiAwLjE5KTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc3RhcjMub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLnN0YXJDb3VudCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2Uoc3RhcjMsIHNlbGYuY2FudmFzLndpZHRoICogMC44MiAtIChzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTkpIC8gMiwgc2VsZi5jYW52YXMuaGVpZ2h0ICogMC4yLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMTksIHNlbGYuY2FudmFzLndpZHRoICogMC4xOSk7XG4gICAgICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGRlbGV0ZUNhbnZhcyhzZWxmKSB7XG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5ib3R0b25MYXllcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi4vdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcbmltcG9ydCB7IExldmVsQ29uZmlnIH0gZnJvbSBcIi4uL2NvbW1vbi9sZXZlbC1jb25maWcuanNcIjtcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lLmpzXCI7XG5pbXBvcnQgeyBMZXZlbFNlbGVjdGlvbkxheWVyLCBQcmV2aW91c1BsYXllZExldmVsIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi4vY29tbW9uL3NvdW5kLmpzXCI7XG5pbXBvcnQgeyBnZXREYXRhZnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi4vZGF0YS9wcm9maWxlLWRhdGEuanNcIjtcbnZhciBtYXBJY29uID0gbmV3IEltYWdlKCk7XG5tYXBJY29uLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL21hcEljb24ucG5nXCI7XG52YXIgbWFwTG9jayA9IG5ldyBJbWFnZSgpO1xubWFwTG9jay5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9tYXBMb2NrLnBuZ1wiO1xudmFyIG1hcCA9IG5ldyBJbWFnZSgpO1xubWFwLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL21hcC5qcGdcIjtcbnZhciBzdGFyID0gbmV3IEltYWdlKCk7XG5zdGFyLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3N0YXIucG5nXCI7XG52YXIgbmV4dGJ0biA9IG5ldyBJbWFnZSgpO1xubmV4dGJ0bi5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9uZXh0X2J0bi5wbmdcIjtcbnZhciBiYWNrYnRuID0gbmV3IEltYWdlKCk7XG5iYWNrYnRuLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2JhY2tfYnRuLnBuZ1wiO1xudmFyIGxldmVsTnVtYmVyO1xudmFyIHNlbGY7XG52YXIgdW5sb2NrTGV2ZWxJbmRleCA9IC0xO1xudmFyIHByZXZpb3VzUGxheWVkTGV2ZWwgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShQcmV2aW91c1BsYXllZExldmVsKSkgfCAwO1xudmFyIGxldmVsO1xuaWYgKHByZXZpb3VzUGxheWVkTGV2ZWwgIT0gbnVsbCkge1xuICAgIGxldmVsID0gMTAgKiBNYXRoLmZsb29yKHByZXZpb3VzUGxheWVkTGV2ZWwgLyAxMCk7XG59XG5leHBvcnQgY2xhc3MgTGV2ZWxTZWxlY3Rpb25TY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xuICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBbXTtcbiAgICAgICAgdGhpcy5sZXZlbHNTZWN0aW9uQ291bnQgPVxuICAgICAgICAgICAgc2VsZi5kYXRhLmxldmVscy5sZW5ndGggLyAxMCA+IE1hdGguZmxvb3Ioc2VsZi5kYXRhLmxldmVscy5sZW5ndGggLyAxMClcbiAgICAgICAgICAgICAgICA/IE1hdGguZmxvb3Ioc2VsZi5kYXRhLmxldmVscy5sZW5ndGggLyAxMCkgKyAxXG4gICAgICAgICAgICAgICAgOiBNYXRoLmZsb29yKHNlbGYuZGF0YS5sZXZlbHMubGVuZ3RoIC8gMTApO1xuICAgICAgICB0aGlzLnNvdW5kID0gbmV3IFNvdW5kKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgICAgIHRoaXMuZHJhd1N0YXJzKCk7XG4gICAgfVxuICAgIGdhbWVTY2VuZUNhbGxCYWNrKGJ1dHRvbl9uYW1lKSB7XG4gICAgICAgIHN3aXRjaCAoYnV0dG9uX25hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJuZXh0X2J1dHRvblwiOiB7XG4gICAgICAgICAgICAgICAgc2VsZi5zdGFydEdhbWUoKGxldmVsTnVtYmVyICs9IDEpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJyZXRyeV9idXR0b25cIjoge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RhcnRHYW1lKGxldmVsTnVtYmVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZV9idXR0b25cIjoge1xuICAgICAgICAgICAgICAgIHNlbGYuZHJhd1N0YXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnNvdW5kLmFjdGl2ZVNjcmVlbigpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBMZXZlbFNlbGVjdGlvbkxheWVyKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UobWFwLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IDI7XG4gICAgICAgIHRoaXMuc3RhcnNJZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIExldmVsU2VsZWN0aW9uTGF5ZXIgKyAxKTtcbiAgICAgICAgdGhpcy5zdGFyc0NhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnN0YXJzSWQpO1xuICAgICAgICB0aGlzLnN0YXJzQ29udGV4dCA9IHRoaXMuY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuc3RhcnNDYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IFwiM1wiO1xuICAgICAgICB0aGlzLmxldmVsQnV0dG9ucG9zID0gW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFt0aGlzLmNhbnZhcy53aWR0aCAvIDEwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxMF0sXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMi41LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxMF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDMgKyB0aGlzLmNhbnZhcy53aWR0aCAvIDIuOCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMTAsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbdGhpcy5jYW52YXMud2lkdGggLyAxMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gM10sXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMi41LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAzXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMyArIHRoaXMuY2FudmFzLndpZHRoIC8gMi44LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAzLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMTAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOF0sXG4gICAgICAgICAgICAgICAgW3RoaXMuY2FudmFzLndpZHRoIC8gMi41LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAxLjhdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAzICsgdGhpcy5jYW52YXMud2lkdGggLyAyLjgsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDEuOCxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFt0aGlzLmNhbnZhcy53aWR0aCAvIDIuNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4zXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIF07XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQodGhpcy5zdGFyc0lkKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZVRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCh0aGlzLnN0YXJzSWQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoYW5kbGVUb3VjaE1vdmUsIGZhbHNlKTtcbiAgICAgICAgdmFyIHhEb3duID0gbnVsbDtcbiAgICAgICAgdmFyIHlEb3duID0gbnVsbDtcbiAgICAgICAgZnVuY3Rpb24gZ2V0VG91Y2hlcyhldnQpIHtcbiAgICAgICAgICAgIHJldHVybiAoZXZ0LnRvdWNoZXMgfHwgLy8gYnJvd3NlciBBUElcbiAgICAgICAgICAgICAgICBldnQub3JpZ2luYWxFdmVudC50b3VjaGVzKTsgLy8galF1ZXJ5XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChldnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VG91Y2ggPSBnZXRUb3VjaGVzKGV2dClbMF07XG4gICAgICAgICAgICB4RG93biA9IGZpcnN0VG91Y2guY2xpZW50WDtcbiAgICAgICAgICAgIHlEb3duID0gZmlyc3RUb3VjaC5jbGllbnRZO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShldnQpIHtcbiAgICAgICAgICAgIGlmICgheERvd24gfHwgIXlEb3duKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHhVcCA9IGV2dC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICB2YXIgeVVwID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgICAgIHZhciB4RGlmZiA9IHhEb3duIC0geFVwO1xuICAgICAgICAgICAgdmFyIHlEaWZmID0geURvd24gLSB5VXA7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoeERpZmYpID4gTWF0aC5hYnMoeURpZmYpKSB7XG4gICAgICAgICAgICAgICAgLyptb3N0IHNpZ25pZmljYW50Ki9cbiAgICAgICAgICAgICAgICBpZiAoeERpZmYgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCAhPSBzZWxmLmxldmVsc1NlY3Rpb25Db3VudCAqIDEwIC0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKG1hcCwgMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbCA9IGxldmVsICsgMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRyYXcobGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kb3duQnV0dG9uKGxldmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhd1N0YXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLyogcmlnaHQgc3dpcGUgKi9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbCA9IGxldmVsIC0gMTA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmRyYXdJbWFnZShtYXAsIDAsIDAsIHNlbGYuY2FudmFzLndpZHRoLCBzZWxmLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRyYXcobGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRvd25CdXR0b24obGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRyYXdTdGFycygpO1xuICAgICAgICAgICAgICAgICAgICAvKiBsZWZ0IHN3aXBlICovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHlEaWZmID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvKiBkb3duIHN3aXBlICovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvKiB1cCBzd2lwZSAqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIHJlc2V0IHZhbHVlcyAqL1xuICAgICAgICAgICAgeERvd24gPSBudWxsO1xuICAgICAgICAgICAgeURvd24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3RhcnNJZCkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgaWYgKHggPj0gc2VsZi5jYW52YXMud2lkdGggKiAwLjcgJiZcbiAgICAgICAgICAgICAgICB4IDwgc2VsZi5jYW52YXMud2lkdGggKiAwLjcgKyBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxMCAmJlxuICAgICAgICAgICAgICAgIHkgPiBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxLjMgJiZcbiAgICAgICAgICAgICAgICB5IDwgc2VsZi5jYW52YXMuaGVpZ2h0IC8gMS4zICsgc2VsZi5jYW52YXMuaGVpZ2h0IC8gMTApIHtcbiAgICAgICAgICAgICAgICBpZiAobGV2ZWwgIT0gc2VsZi5sZXZlbHNTZWN0aW9uQ291bnQgKiAxMCAtIDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5kcmF3SW1hZ2UobWFwLCAwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPSBsZXZlbCArIDEwO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRyYXcobGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRvd25CdXR0b24obGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRyYXdTdGFycygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh4ID49IHNlbGYuY2FudmFzLndpZHRoIC8gMTAgJiZcbiAgICAgICAgICAgICAgICB4IDwgc2VsZi5jYW52YXMud2lkdGggLyAxMCArIHNlbGYuY2FudmFzLmhlaWdodCAvIDEwICYmXG4gICAgICAgICAgICAgICAgeSA+IHNlbGYuY2FudmFzLmhlaWdodCAvIDEuMyAmJlxuICAgICAgICAgICAgICAgIHkgPCBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxLjMgKyBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxMCkge1xuICAgICAgICAgICAgICAgIGlmIChsZXZlbCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsID0gbGV2ZWwgLSAxMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbnRleHQuZHJhd0ltYWdlKG1hcCwgMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgc2VsZi5kcmF3KGxldmVsKTtcbiAgICAgICAgICAgICAgICBzZWxmLmRvd25CdXR0b24obGV2ZWwpO1xuICAgICAgICAgICAgICAgIHNlbGYuZHJhd1N0YXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBzIG9mIHNlbGYubGV2ZWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguc3FydCgoeCAtIHMueCAtIHNlbGYuY2FudmFzLmhlaWdodCAvIDIwKSAqXG4gICAgICAgICAgICAgICAgICAgICh4IC0gcy54IC0gc2VsZi5jYW52YXMuaGVpZ2h0IC8gMjApICtcbiAgICAgICAgICAgICAgICAgICAgKHkgLSBzLnkgLSBzZWxmLmNhbnZhcy5oZWlnaHQgLyAyMCkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgKHkgLSBzLnkgLSBzZWxmLmNhbnZhcy5oZWlnaHQgLyAyMCkpIDwgNDUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuaW5kZXggKyBsZXZlbCAtIDEgPD0gdW5sb2NrTGV2ZWxJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc291bmQuY2hhbmdlU291cnNlKFwiLi9hc3NldHMvYXVkaW9zL0J1dHRvbkNsaWNrLndhdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc291bmQucGF1c2VTb3VuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxOdW1iZXIgPSBzLmluZGV4ICsgbGV2ZWwgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdGFydEdhbWUobGV2ZWxOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3JlYXRlTGV2ZWxCdXR0b25zKHRoaXMubGV2ZWxCdXR0b25wb3MpO1xuICAgIH1cbiAgICBjcmVhdGVMZXZlbEJ1dHRvbnMobGV2ZWxCdXR0b25wb3MpIHtcbiAgICAgICAgdmFyIHBvc3MgPSBsZXZlbEJ1dHRvbnBvc1swXTtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICBmb3IgKGxldCBzID0gMDsgcyA8IDEwOyBzKyspIHtcbiAgICAgICAgICAgIHZhciBucyA9IG5ldyBMZXZlbENvbmZpZyhwb3NzW2ldWzBdLCBwb3NzW2ldWzFdLCBpICsgMSk7XG4gICAgICAgICAgICBzZWxmLmxldmVscy5wdXNoKG5zKTtcbiAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcobGV2ZWwpO1xuICAgICAgICB0aGlzLmRvd25CdXR0b24obGV2ZWwpO1xuICAgIH1cbiAgICBkcmF3KGxldmVsKSB7XG4gICAgICAgIGZvciAobGV0IHMgb2Ygc2VsZi5sZXZlbHMpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd2xldmVsKHMsIHNlbGYuY2FudmFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb3duQnV0dG9uKGxldmVsKSB7XG4gICAgICAgIHZhciBpbWFnZVNpemUgPSBzZWxmLmNhbnZhcy5oZWlnaHQgLyAxMDtcbiAgICAgICAgaWYgKGxldmVsICE9IHNlbGYubGV2ZWxzU2VjdGlvbkNvdW50ICogMTAgLSAxMCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShuZXh0YnRuLCB0aGlzLmNhbnZhcy53aWR0aCAqIDAuNywgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4zLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxldmVsICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoYmFja2J0biwgdGhpcy5jYW52YXMud2lkdGggLyAxMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMS4zLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKGxldmVsICE9IDApIHtcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDMwMCwgNTAwLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XG4gICAgICAgIC8vICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKGltYWdlU2l6ZSwgaW1hZ2VTaXplKTtcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQucm90YXRlKDkwKTtcbiAgICAgICAgLy8gICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKG5leHQsIDMwMCwgNTAwLCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgZHJhd2xldmVsKHMsIGNhbnZhcykge1xuICAgICAgICB2YXIgaW1hZ2VTaXplID0gY2FudmFzLmhlaWdodCAvIDU7XG4gICAgICAgIHZhciB0ZXh0Rm9udFNpemUgPSBpbWFnZVNpemUgLyA2O1xuICAgICAgICBpZiAocy5pbmRleCArIGxldmVsIDw9IHNlbGYuZGF0YS5sZXZlbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKG1hcEljb24sIHMueCwgcy55LCBpbWFnZVNpemUsIGltYWdlU2l6ZSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSB0ZXh0Rm9udFNpemUgKyBcInB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChzLmluZGV4ICsgbGV2ZWwsIHMueCArIGltYWdlU2l6ZSAvIDMuNSwgcy55ICsgaW1hZ2VTaXplIC8gMyk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IHRleHRGb250U2l6ZSAtIGltYWdlU2l6ZSAvIDMwICsgXCJweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRoaXMuZGF0YS5sZXZlbHNbcy5pbmRleCArIGxldmVsIC0gMV0ubGV2ZWxNZXRhLmxldmVsVHlwZSwgcy54ICsgaW1hZ2VTaXplIC8gMy41LCBzLnkgKyBpbWFnZVNpemUgLyAxLjMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0R2FtZShsZXZlbF9udW1iZXIpIHtcbiAgICAgICAgbmV3IEdhbWUodGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgc2VsZi5kYXRhLmxldmVsc1tsZXZlbF9udW1iZXJdLCBzZWxmLmdhbWVTY2VuZUNhbGxCYWNrKTtcbiAgICB9XG4gICAgZHJhd1N0YXJzKCkge1xuICAgICAgICB0aGlzLnNvdW5kLmNoYW5nZVNvdXJzZShcIi4vYXNzZXRzL2F1ZGlvcy9pbnRyby53YXZcIik7XG4gICAgICAgIGxldCBnYW1lTGV2ZWxEYXRhID0gZ2V0RGF0YWZyb21TdG9yYWdlKCk7XG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICAgICAgdmFyIGNhbmF2c0VsZW1lbnQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXZlbFNlbGVjdGlvbkNhbnZhczFcIikpO1xuICAgICAgICB2YXIgY29udGV4dCA9IGNhbmF2c0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgaWYgKGdhbWVMZXZlbERhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGdhbWVMZXZlbERhdGEubGVuZ3RoICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGdhbWUgb2YgZ2FtZUxldmVsRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodW5sb2NrTGV2ZWxJbmRleCA8IHBhcnNlSW50KGdhbWUubGV2ZWxOdW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmxldmVsU3RhciA+PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAodW5sb2NrTGV2ZWxJbmRleCA9IHBhcnNlSW50KGdhbWUubGV2ZWxOdW1iZXIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IHMgb2Ygc2VsZi5sZXZlbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocy5pbmRleCArIGxldmVsIDw9IHNlbGYuZGF0YS5sZXZlbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHMuaW5kZXggKyBsZXZlbCAtIDEgPiB1bmxvY2tMZXZlbEluZGV4ICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb250ZXh0LmRyYXdJbWFnZShtYXBMb2NrLCBzLngsIHMueSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMTMsIHRoaXMuY2FudmFzLmhlaWdodCAvIDEzKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVMZXZlbERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzLmluZGV4IC0gMSArIGxldmVsID09IHBhcnNlSW50KGdhbWVMZXZlbERhdGFbaV0ubGV2ZWxOdW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3U3RhcihzLCBjYW52YXMsIGdhbWVMZXZlbERhdGFbaV0ubGV2ZWxTdGFyLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3U3RhcihzLCBjYW52YXMsIHN0YXJDb3VudCwgY29udGV4dCkge1xuICAgICAgICB2YXIgaW1hZ2VTaXplID0gY2FudmFzLmhlaWdodCAvIDU7XG4gICAgICAgIGlmIChzdGFyQ291bnQgPj0gMSkge1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3Rhciwgcy54LCBzLnkgLSBpbWFnZVNpemUgKiAwLjAxLCBpbWFnZVNpemUgLyA1LCBpbWFnZVNpemUgLyA1KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhckNvdW50ID4gMSkge1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3Rhciwgcy54ICsgaW1hZ2VTaXplIC8gMi41LCBzLnkgLSBpbWFnZVNpemUgKiAwLjAxLCBpbWFnZVNpemUgLyA1LCBpbWFnZVNpemUgLyA1KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhckNvdW50ID09IDMpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHN0YXIsIHMueCArIGltYWdlU2l6ZSAvIDUsIHMueSAtIGltYWdlU2l6ZSAqIDAuMSwgaW1hZ2VTaXplIC8gNSwgaW1hZ2VTaXplIC8gNSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IE1vbnN0ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb25zdGVyLmpzXCI7XG5pbXBvcnQgeyBUaW1lclRpY2tpbmcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy90aW1lci10aWNraW5nLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IFN0b25lc0xheWVyIGZyb20gXCIuLi9jb21wb25lbnRzL3N0b25lcy1sYXllci5qc1wiO1xuaW1wb3J0IHsgUHJvbXB0VGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Byb21wdC10ZXh0LmpzXCI7XG5pbXBvcnQgUGF1c2VCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9ucy9wYXVzZV9idXR0b24uanNcIjtcbmltcG9ydCB7IExldmVsSW5kaWNhdG9ycyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2xldmVsLWluZGljYXRvcnMuanNcIjtcbmltcG9ydCB7IExldmVsRW5kQnV0dG9uc0xheWVyLCBMZXZlbEVuZExheWVyLCBsb2FkSW1hZ2VzLCBsb2FkaW5nU2NyZWVuLCBTdG9uZUxheWVyLCBUaW1ldGlja2VyTGF5ZXIsIFByb21wdFRleHRMYXllciwgUHJldmlvdXNQbGF5ZWRMZXZlbCwgU3RvcmVNb25zdGVyUGhhc2VOdW1iZXIsIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb24uanNcIjtcbmltcG9ydCB7IExldmVsU3RhcnRMYXllciB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uLmpzXCI7XG5pbXBvcnQgeyBHYW1lRW5kU2NlbmUgfSBmcm9tIFwiLi9nYW1lLWVuZC1zY2VuZS5qc1wiO1xuaW1wb3J0IFNvdW5kIGZyb20gXCIuLi9jb21tb24vc291bmQuanNcIjtcbmltcG9ydCB7IExldmVsRW5kU2NlbmUgfSBmcm9tIFwiLi9sZXZlbC1lbmQtc2NlbmUuanNcIjtcbmltcG9ydCB7IGdldERhdGFmcm9tU3RvcmFnZSB9IGZyb20gXCIuLi9kYXRhL3Byb2ZpbGUtZGF0YS5qc1wiO1xuaW1wb3J0IHsgbGFuZyB9IGZyb20gXCIuLi8uLi9nbG9iYWwtdmFyaWFibGVzLmpzXCI7XG52YXIgaW1hZ2VzID0ge1xuICAgIGJnSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9iZ192MDEuanBnXCIsXG4gICAgaGlsbEltZzogXCIuL2Fzc2V0cy9pbWFnZXMvaGlsbF92MDEucG5nXCIsXG4gICAgdGltZXJfZW1wdHk6IFwiLi9hc3NldHMvaW1hZ2VzL3RpbWVyX2VtcHR5LnBuZ1wiLFxuICAgIHBpbGxlckltZzogXCIuL2Fzc2V0cy9pbWFnZXMvVG90ZW1fdjAyX3YwMS5wbmdcIixcbiAgICBncmFzc0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvRkdfYV92MDEucG5nXCIsXG4gICAgcm90YXRpbmdfY2xvY2s6IFwiLi9hc3NldHMvaW1hZ2VzL3RpbWVyLnBuZ1wiLFxuICAgIGZlbmNoSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9mZW5jZV92MDEucG5nXCIsXG4gICAgcHJvbXB0SW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9wcm9tcHRUZXh0QmcucG5nXCIsXG4gICAgZmFudGFzdGljOiBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9pbWFnZXMvZmFudGFzdGljXzAxLnBuZ1wiLFxuICAgIGdyZWF0OiBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9pbWFnZXMvZ3JlYXRfMDEucG5nXCIsXG4gICAgYXV0dW1uQmdJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0F1dHVtbl9iZ192MDEuanBnXCIsXG4gICAgYXV0dW1uSGlsbEltZzogXCIuL2Fzc2V0cy9pbWFnZXMvQXV0dW1uX2hpbGxfdjAxLnBuZ1wiLFxuICAgIGF1dHVtblNpZ25JbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0F1dHVtbl9zaWduX3YwMS5wbmdcIixcbiAgICBhdXR1bW5HcmFzc0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvQXV0dW1uX0ZHX3YwMS5wbmdcIixcbiAgICBhdXR1bW5GZW5jZUltZzogXCIuL2Fzc2V0cy9pbWFnZXMvQXV0dW1uX2ZlbmNlX3YwMS5wbmdcIixcbiAgICBhdXR1bW5QaWxsZXJJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL0F1dHVtbl9zaWduX3YwMS5wbmdcIixcbiAgICB3aW50ZXJCZ0ltZzogXCIuL2Fzc2V0cy9pbWFnZXMvV2ludGVyX2JnXzAxLmpwZ1wiLFxuICAgIHdpbnRlckhpbGxJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1dpbnRlcl9oaWxsX3YwMS5wbmdcIixcbiAgICB3aW50ZXJTaWduSW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9XaW50ZXJfc2lnbl92MDEucG5nXCIsXG4gICAgd2ludGVyR3Jhc3NJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1dpbnRlcl9GR192MDEucG5nXCIsXG4gICAgd2ludGVyRmVuY2VJbWc6IFwiLi9hc3NldHMvaW1hZ2VzL1dpbnRlcl9mZW5jZV92MDEucG5nXCIsXG4gICAgd2ludGVyUGlsbGVySW1nOiBcIi4vYXNzZXRzL2ltYWdlcy9XaW50ZXJfc2lnbl92MDEucG5nXCIsXG59O1xudmFyIGF1ZGlvVXJsID0ge1xuICAgIHBocmFzZUF1ZGlvczogW1xuICAgICAgICBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9hdWRpb3MvZmFudGFzdGljLldBVlwiLFxuICAgICAgICAvLyBcIi4vYXNzZXRzL2F1ZGlvcy9nb29kIGpvYi5XQVZcIixcbiAgICAgICAgXCIuL2xhbmcvXCIgKyBsYW5nICsgXCIvYXVkaW9zL2dyZWF0LndhdlwiLFxuICAgIF0sXG4gICAgbW9uc3RlclNwbGl0OiBcIi4vYXNzZXRzL2F1ZGlvcy9Nb25zdGVyIFNwaXRzIHdyb25nIHN0b25lcy0wMS5tcDNcIixcbiAgICBtb25zdGVySGFwcHk6IFwiLi9hc3NldHMvYXVkaW9zL0NoZWVyaW5nLTAyLm1wM1wiLFxuICAgIG1vbnN0ZXJTYWQ6IFwiLi9hc3NldHMvYXVkaW9zL0Rpc2Fwb2ludGVkLTA1Lm1wM1wiLFxuICAgIGJ1dHRvbkNsaWNrOiBcIi4vYXNzZXRzL2F1ZGlvcy9CdXR0b25DbGljay53YXZcIixcbn07XG52YXIgc2VsZjtcbnZhciB3b3JkX2Ryb3BwZWRfc3RvbmVzID0gMDtcbnZhciBjdXJyZW50X3B1enpsZV9pbmRleCA9IDA7XG52YXIgc2NvcmUgPSAwO1xudmFyIHdvcmRfZHJvcHBlZF9zdG9uZXMgPSAwO1xudmFyIGlzR2FtZVBhdXNlID0gZmFsc2U7XG52YXIgbm9Nb3JlVGFyZ2V0ID0gZmFsc2U7XG52YXIgaXNMZXZlbEVuZGVkID0gZmFsc2U7XG5leHBvcnQgY2xhc3MgTGV2ZWxTdGFydFNjZW5lIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGdhbWUsIGxldmVsRGF0YSwgbGV2ZWxTdGFydENhbGxCYWNrLCBtb25zdGVyUGhhc2VOdW1iZXIsIH0pIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy53aWR0aCA9IGdhbWUud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm1vbnN0ZXIgPSBuZXcgTW9uc3RlcihnYW1lKTtcbiAgICAgICAgdGhpcy5hdWRpbyA9IG5ldyBTb3VuZCgpO1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLm1vbnN0ZXJQaGFzZU51bWJlciA9IG1vbnN0ZXJQaGFzZU51bWJlciB8fCAxO1xuICAgICAgICB0aGlzLmxldmVsRGF0YSA9IGxldmVsRGF0YTtcbiAgICAgICAgdGhpcy5sZXZlbFN0YXJ0Q2FsbEJhY2sgPSBsZXZlbFN0YXJ0Q2FsbEJhY2s7XG4gICAgICAgIHRoaXMudGltZXJUaWNraW5nID0gbmV3IFRpbWVyVGlja2luZyhnYW1lLCB0aGlzKTtcbiAgICAgICAgdGhpcy5wcm9tcHRUZXh0ID0gbmV3IFByb21wdFRleHQoZ2FtZSwgdGhpcywgbGV2ZWxEYXRhLnB1enpsZXNbY3VycmVudF9wdXp6bGVfaW5kZXhdLCBsZXZlbERhdGEpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuICAgICAgICB0aGlzLnN0b25lcyA9IG5ldyBTdG9uZXNMYXllcihnYW1lLCBsZXZlbERhdGEucHV6emxlc1tjdXJyZW50X3B1enpsZV9pbmRleF0sIHRoaXMucGF1c2VCdXR0b24sIHRoaXMucmVkcmF3T2ZTdG9uZXMsIHRoaXMpO1xuICAgICAgICB0aGlzLnB1enpsZURhdGEgPSBsZXZlbERhdGEucHV6emxlcztcbiAgICB9XG4gICAgbGV2ZWxFbmRDYWxsQmFjayhidXR0b25fbmFtZSkge1xuICAgICAgICBpZiAoIWlzR2FtZVBhdXNlKSB7XG4gICAgICAgICAgICBpc0dhbWVQYXVzZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaXNMZXZlbEVuZGVkKSB7XG4gICAgICAgICAgICAgICAgaXNMZXZlbEVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXNHYW1lUGF1c2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50X3B1enpsZV9pbmRleCA9PSBzZWxmLnB1enpsZURhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vTW9yZVRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxldmVsRW5kZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9wdXp6bGVfaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzR2FtZVBhdXNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKG5vTW9yZVRhcmdldCAmJiBidXR0b25fbmFtZSAhPSBcImNsb3NlX2J1dHRvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zdG9uZXMuc2V0TmV3UHV6emxlKHNlbGYucHV6emxlRGF0YVtjdXJyZW50X3B1enpsZV9pbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LnNldEN1cnJyZW50UHV6emxlRGF0YShzZWxmLnB1enpsZURhdGFbY3VycmVudF9wdXp6bGVfaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudGltZXJUaWNraW5nLmRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5kcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZWxmLmF1ZGlvLmNoYW5nZVNvdXJzZShhdWRpb1VybC5idXR0b25DbGljayk7XG4gICAgICAgIHN3aXRjaCAoYnV0dG9uX25hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJuZXh0X2J1dHRvblwiOiB7XG4gICAgICAgICAgICAgICAgc2VsZi5leGl0QWxsU2NyZWVucygpO1xuICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxTdGFydENhbGxCYWNrKGJ1dHRvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJyZXRyeV9idXR0b25cIjoge1xuICAgICAgICAgICAgICAgIHNlbGYuZXhpdEFsbFNjcmVlbnMoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnRDYWxsQmFjayhidXR0b25fbmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VfYnV0dG9uXCI6IHtcbiAgICAgICAgICAgICAgICBpc0dhbWVQYXVzZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNlbGYuZXhpdEFsbFNjcmVlbnMoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnRDYWxsQmFjayhidXR0b25fbmFtZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgIH1cbiAgICByZWRyYXdPZlN0b25lcyhzdGF0dXMsIGVtcHR5VGFyZ2V0LCBwaWNrZWRfc3RvbmVfbGVuZ2h0aCkge1xuICAgICAgICBub01vcmVUYXJnZXQgPSBlbXB0eVRhcmdldDtcbiAgICAgICAgdmFyIGZudHN0aWNPckdydEluZGV4ID0gc2VsZi5nZXRSYW5kb21JbnQoMCwgMSk7XG4gICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgIHNlbGYubW9uc3Rlci5jaGFuZ2VUb0VhdEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgc2VsZi5hdWRpby5jaGFuZ2VTb3Vyc2UoYXVkaW9VcmwubW9uc3RlckhhcHB5KTtcbiAgICAgICAgICAgIGlmIChlbXB0eVRhcmdldCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmF1ZGlvLmNoYW5nZVNvdXJzZShhdWRpb1VybC5waHJhc2VBdWRpb3NbZm50c3RpY09yR3J0SW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LnNob3dGYW50YXN0aWNPckdyZWF0KGZudHN0aWNPckdydEluZGV4KTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICBzZWxmLnByb21wdFRleHQuZHJhdygod29yZF9kcm9wcGVkX3N0b25lcyArPSBwaWNrZWRfc3RvbmVfbGVuZ2h0aCkpO1xuICAgICAgICAgICAgICAgIHNlbGYudGltZXJUaWNraW5nLnN0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIC8vIHNlbGYucHJvbXB0VGV4dC5kcmF3KCh3b3JkX2Ryb3BwZWRfc3RvbmVzICs9IDEpKTtcbiAgICAgICAgICAgICAgICBzY29yZSArPSAxMDA7XG4gICAgICAgICAgICAgICAgd29yZF9kcm9wcGVkX3N0b25lcyA9IDA7XG4gICAgICAgICAgICAgICAgY3VycmVudF9wdXp6bGVfaW5kZXggKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5kcmF3KCh3b3JkX2Ryb3BwZWRfc3RvbmVzICs9IHBpY2tlZF9zdG9uZV9sZW5naHRoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZy5zdG9wVGltZXIoKTtcbiAgICAgICAgICAgIHNlbGYubW9uc3Rlci5jaGFuZ2VUb1NwaXRBbmltYXRpb24oKTtcbiAgICAgICAgICAgIHNlbGYuYXVkaW8uY2hhbmdlU291cnNlKGF1ZGlvVXJsLm1vbnN0ZXJTYWQpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5hdWRpby5jaGFuZ2VTb3Vyc2UoYXVkaW9VcmwubW9uc3RlclNwbGl0KTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgY3VycmVudF9wdXp6bGVfaW5kZXggKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudF9wdXp6bGVfaW5kZXggPT0gc2VsZi5wdXp6bGVEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgc2VsZi5sZXZlbEluZGljYXRvcnMuc2V0SW5kaWNhdG9ycyhjdXJyZW50X3B1enpsZV9pbmRleCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMyAmJiAhaXNHYW1lUGF1c2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGV2ZWxFbmRlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgaSAqIDExNjYuNjYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGVtcHR5VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sZXZlbEluZGljYXRvcnMuc2V0SW5kaWNhdG9ycyhjdXJyZW50X3B1enpsZV9pbmRleCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMyAmJiAhaXNHYW1lUGF1c2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN0b25lcy5zZXROZXdQdXp6bGUoc2VsZi5wdXp6bGVEYXRhW2N1cnJlbnRfcHV6emxlX2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LnNldEN1cnJyZW50UHV6emxlRGF0YShzZWxmLnB1enpsZURhdGFbY3VycmVudF9wdXp6bGVfaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZy5kcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LmRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgaSAqIDExNjYuNjYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXZlbEVuZGVkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxldmVsXCIpO1xuICAgICAgICBsZXQgdG90YWxTdGFyc0NvdW50ID0gMDtcbiAgICAgICAgbGV0IG1vbnN0ZXJQaGFzZU51bWJlciA9IHNlbGYubW9uc3RlclBoYXNlTnVtYmVyIHx8IDE7XG4gICAgICAgIHZhciBnYW1lTGV2ZWxEYXRhID0gZ2V0RGF0YWZyb21TdG9yYWdlKCk7XG4gICAgICAgIGlmIChnYW1lTGV2ZWxEYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUxldmVsRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRvdGFsU3RhcnNDb3VudCA9IHRvdGFsU3RhcnNDb3VudCArIGdhbWVMZXZlbERhdGFbaV0ubGV2ZWxTdGFyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9uc3RlclBoYXNlTnVtYmVyID0gTWF0aC5mbG9vcih0b3RhbFN0YXJzQ291bnQgLyAxMikgKyAxIHx8IDE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b3RhbFN0YXJzQ291bnQgKyBcInRvdGFsIHN0YXIgY291bnRcIik7XG4gICAgICAgICAgICBpZiAoc2VsZi5tb25zdGVyUGhhc2VOdW1iZXIgPCBtb25zdGVyUGhhc2VOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAobW9uc3RlclBoYXNlTnVtYmVyIDw9IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyUGhhc2VOdW1iZXIgPSBtb25zdGVyUGhhc2VOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyBkYXRhXCIgKyBtb25zdGVyUGhhc2VOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdG9yZU1vbnN0ZXJQaGFzZU51bWJlciwgbW9uc3RlclBoYXNlTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZVBoYXNlTnVtYmVyKG1vbnN0ZXJQaGFzZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubW9uc3Rlci5jaGFuZ2VJbWFnZShcIi4vYXNzZXRzL2ltYWdlcy9pZGxlMVwiICsgc2VsZi5tb25zdGVyUGhhc2VOdW1iZXIgKyBcIi5wbmdcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vbnN0ZXJQaGFzZU51bWJlciA9IDQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZi5tb25zdGVyUGhhc2VOdW1iZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobW9uc3RlclBoYXNlTnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmxldmVsU3RhcnRDYWxsQmFjaygpO1xuICAgICAgICBpZiAoc2VsZi5sZXZlbERhdGEubGV2ZWxOdW1iZXIgPT0gMTQ5KSB7XG4gICAgICAgICAgICBzZWxmLmV4aXRBbGxTY3JlZW5zKCk7XG4gICAgICAgICAgICBuZXcgR2FtZUVuZFNjZW5lKHNlbGYuZ2FtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXcgTGV2ZWxFbmRTY2VuZShzZWxmLmdhbWUsIHNjb3JlLCBzZWxmLm1vbnN0ZXIsIHNlbGYubGV2ZWxFbmRDYWxsQmFjaywgc2VsZi5sZXZlbERhdGEsIGlzR2FtZVBhdXNlLCBzZWxmLm1vbnN0ZXJQaGFzZU51bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgaXNMZXZlbEVuZGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICB2YXIgbW9uc3RlclBoYXNlTnVtYmVyID0gdGhpcy5tb25zdGVyUGhhc2VOdW1iZXIgfHwgMTtcbiAgICAgICAgY29uc29sZS5sb2cobW9uc3RlclBoYXNlTnVtYmVyKTtcbiAgICAgICAgdGhpcy5tb25zdGVyLmNoYW5nZUltYWdlKFwiLi9hc3NldHMvaW1hZ2VzL2lkbGUxXCIgKyBtb25zdGVyUGhhc2VOdW1iZXIgKyBcIi5wbmdcIik7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHNlbGYuZGVsZXRlT2JqZWN0cygpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmNhbnZhc1N0YWNrLmNyZWF0ZUxheWVyKHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCBMZXZlbFN0YXJ0TGF5ZXIpO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IDM7XG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24gPSBuZXcgUGF1c2VCdXR0b24odGhpcy5jb250ZXh0LCB0aGlzLmNhbmF2c0VsZW1lbnQpO1xuICAgICAgICB0aGlzLmxldmVsSW5kaWNhdG9ycyA9IG5ldyBMZXZlbEluZGljYXRvcnModGhpcy5jb250ZXh0LCB0aGlzLmNhbmF2c0VsZW1lbnQsIDApO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHNlbGZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZi5pZCk7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IHNlbGZFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHByZXZpb3VzUGxheWVkTGV2ZWwgPSBzZWxmLmxldmVsRGF0YS5sZXZlbE1ldGEubGV2ZWxOdW1iZXI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFByZXZpb3VzUGxheWVkTGV2ZWwsIHByZXZpb3VzUGxheWVkTGV2ZWwpO1xuICAgIH1cbiAgICBkZWxldGVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIodGhpcy5pZCk7XG4gICAgfVxuICAgIGV4aXRBbGxTY3JlZW5zKCkge1xuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKExldmVsRW5kTGF5ZXIpO1xuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKExldmVsRW5kQnV0dG9uc0xheWVyKTtcbiAgICAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihMZXZlbFN0YXJ0TGF5ZXIpO1xuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFN0b25lTGF5ZXIpO1xuICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFRpbWV0aWNrZXJMYXllcik7XG4gICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoUHJvbXB0VGV4dExheWVyKTtcbiAgICAgICAgLy8gc2VsZi5tb25zdGVyLmNoYW5nZUltYWdlKFwiLi9hc3NldHMvaW1hZ2VzL2lkbGU0LnBuZ1wiKTtcbiAgICAgICAgc2VsZi5tb25zdGVyLmNoYW5nZUltYWdlKFwiLi9hc3NldHMvaW1hZ2VzL2lkbGUxXCIgKyBzZWxmLm1vbnN0ZXJQaGFzZU51bWJlciArIFwiLnBuZ1wiKTtcbiAgICAgICAgc2VsZi5tb25zdGVyLmRlbGV0ZUNhbnZhcygpO1xuICAgICAgICBzZWxmLmRlbGV0ZU9iamVjdHMoKTtcbiAgICAgICAgd29yZF9kcm9wcGVkX3N0b25lcyA9IDA7XG4gICAgfVxuICAgIGRlbGV0ZU9iamVjdHMoKSB7XG4gICAgICAgIGRlbGV0ZSBzZWxmLm1vbnN0ZXI7XG4gICAgICAgIGRlbGV0ZSBzZWxmLmF1ZGlvO1xuICAgICAgICBkZWxldGUgc2VsZi5sZXZlbEluZGljYXRvcnM7XG4gICAgICAgIGRlbGV0ZSBzZWxmLnBhdXNlQnV0dG9uO1xuICAgICAgICBkZWxldGUgc2VsZi5zdG9uZXM7XG4gICAgICAgIGRlbGV0ZSBzZWxmLnRpbWVyVGlja2luZztcbiAgICAgICAgZGVsZXRlIHNlbGYuY2FudmFzU3RhY2s7XG4gICAgICAgIGRlbGV0ZSBzZWxmLm1vbnN0ZXI7XG4gICAgICAgIGRlbGV0ZSBzZWxmLnByb21wdFRleHQ7XG4gICAgICAgIGN1cnJlbnRfcHV6emxlX2luZGV4ID0gMDtcbiAgICAgICAgc2NvcmUgPSAwO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmJnSW1nLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5waWxsZXJJbWcsIHRoaXMud2lkdGggKiAwLjYsIHRoaXMuaGVpZ2h0IC8gNiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmZlbmNoSW1nLCAtdGhpcy53aWR0aCAqIDAuNCwgdGhpcy5oZWlnaHQgLyAzLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAvIDMpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaGlsbEltZywgLXRoaXMud2lkdGggKiAwLjI1LCB0aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGggKiAxLjUsIHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5ncmFzc0ltZywgLXRoaXMud2lkdGggKiAwLjI1LCB0aGlzLmhlaWdodCAvIDIgKyAodGhpcy5oZWlnaHQgLyAyKSAqIDAuMSwgdGhpcy53aWR0aCAqIDEuNSwgdGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnRpbWVyX2VtcHR5LCAwLCB0aGlzLmhlaWdodCAqIDAuMSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgKiAwLjA1KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnJvdGF0aW5nX2Nsb2NrLCA1LCB0aGlzLmhlaWdodCAqIDAuMDksIHRoaXMud2lkdGggKiAwLjEyLCB0aGlzLmhlaWdodCAqIDAuMDYpO1xuICAgICAgICB0aGlzLnRpbWVyVGlja2luZy5jcmVhdGVCYWNrZ3JvdWQoKTtcbiAgICAgICAgdGhpcy5zdG9uZXMuZHJhdygpO1xuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLmRyYXcoKTtcbiAgICAgICAgdGhpcy5sZXZlbEluZGljYXRvcnMuZHJhdygpO1xuICAgICAgICB0aGlzLnByb21wdFRleHQuY3JlYXRlQmFja2dyb3VuZCgpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHNlbGYudGltZXJUaWNraW5nID8gc2VsZi50aW1lclRpY2tpbmcudXBkYXRlKCkgOiBudWxsO1xuICAgIH1cbiAgICBjaGFuZ2VQdXp6bGUoKSB7XG4gICAgICAgIGlmIChzZWxmLnRpbWVyVGlja2luZy5pc1RpbWVyRW5kZWQpIHtcbiAgICAgICAgICAgIHNlbGYuc3RvbmVzLmlzVGltZXJFbmRlZCgpO1xuICAgICAgICAgICAgd29yZF9kcm9wcGVkX3N0b25lcyA9IDA7XG4gICAgICAgICAgICBjdXJyZW50X3B1enpsZV9pbmRleCArPSAxO1xuICAgICAgICAgICAgc2VsZi5zdG9uZXMuY2FudmFzLnNjZW5lLmxldmVsSW5kaWNhdG9ycy5zZXRJbmRpY2F0b3JzKGN1cnJlbnRfcHV6emxlX2luZGV4KTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50X3B1enpsZV9pbmRleCA9PSBzZWxmLnB1enpsZURhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaXNMZXZlbEVuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWxmLmxldmVsU3RhcnRDYWxsQmFjaygpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmLnRpbWVyVGlja2luZztcbiAgICAgICAgICAgICAgICBuZXcgTGV2ZWxFbmRTY2VuZShzZWxmLmdhbWUsIHNjb3JlLCBzZWxmLm1vbnN0ZXIsIHNlbGYubGV2ZWxFbmRDYWxsQmFjaywgc2VsZi5sZXZlbERhdGEsIGlzR2FtZVBhdXNlLCB0aGlzLm1vbnN0ZXJQaGFzZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBzZWxmLnByb21wdFRleHQuc2V0Q3VycnJlbnRQcm9tcHRUZXh0KFxuICAgICAgICAgICAgICAgIC8vICAgc2VsZi5wdXp6bGVEYXRhW2N1cnJlbnRfcHV6emxlX2luZGV4XS5wcm9tcHQucHJvbXB0VGV4dFxuICAgICAgICAgICAgICAgIC8vICk7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LnNldEN1cnJyZW50UHV6emxlRGF0YShzZWxmLnB1enpsZURhdGFbY3VycmVudF9wdXp6bGVfaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZy5kcmF3KCk7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9tcHRUZXh0LmRyYXcoKTtcbiAgICAgICAgICAgICAgICBzZWxmLnN0b25lcy5zZXROZXdQdXp6bGUoc2VsZi5wdXp6bGVEYXRhW2N1cnJlbnRfcHV6emxlX2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnRpbWVyVGlja2luZyA/IChzZWxmLnRpbWVyVGlja2luZy5pc1RpbWVyRW5kZWQgPSBmYWxzZSkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUJhY2tncm91ZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBhdmFpbGFibGVCYWNrZ3JvdW5kVHlwZXMgPSBbXCJTdW1tZXJcIiwgXCJBdXR1bW5cIiwgXCJXaW50ZXJcIl07XG4gICAgICAgIHZhciBiYWNrZ3JvdW5kVHlwZSA9IE1hdGguZmxvb3Ioc2VsZi5sZXZlbERhdGEubGV2ZWxOdW1iZXIgLyAxMCkgJVxuICAgICAgICAgICAgYXZhaWxhYmxlQmFja2dyb3VuZFR5cGVzLmxlbmd0aDtcbiAgICAgICAgaWYgKHNlbGYubGV2ZWxEYXRhLmxldmVsTnVtYmVyID49IDMwKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kVHlwZSA9IGJhY2tncm91bmRUeXBlICUgMztcbiAgICAgICAgfVxuICAgICAgICBsb2FkaW5nU2NyZWVuKHRydWUpO1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgICAgICBsb2FkSW1hZ2VzKGltYWdlcywgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGF2YWlsYWJsZUJhY2tncm91bmRUeXBlc1tiYWNrZ3JvdW5kVHlwZV0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiV2ludGVyXCI6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLndpbnRlckJnSW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLndpbnRlclBpbGxlckltZywgd2lkdGggKiAwLjM4LCBoZWlnaHQgLyA2LCB3aWR0aCAvIDEuMiwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS53aW50ZXJGZW5jZUltZywgLXdpZHRoICogMC40LCBoZWlnaHQgLyA0LCB3aWR0aCwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS53aW50ZXJIaWxsSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZS53aW50ZXJHcmFzc0ltZywgLXdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiArIChoZWlnaHQgLyAyKSAqIDAuMSwgd2lkdGggKiAxLjUsIGhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJBdXR1bW5cIjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuYXV0dW1uQmdJbWcsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuYXV0dW1uUGlsbGVySW1nLCB3aWR0aCAqIDAuMzgsIGhlaWdodCAvIDYsIHdpZHRoIC8gMS4yLCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmF1dHVtbkZlbmNlSW1nLCAtd2lkdGggKiAwLjQsIGhlaWdodCAvIDQsIHdpZHRoLCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmF1dHVtbkhpbGxJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLmF1dHVtbkdyYXNzSW1nLCAtd2lkdGggKiAwLjI1LCBoZWlnaHQgLyAyICsgKGhlaWdodCAvIDIpICogMC4xLCB3aWR0aCAqIDEuNSwgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuYmdJbWcsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UucGlsbGVySW1nLCB3aWR0aCAqIDAuNiwgaGVpZ2h0IC8gNiwgd2lkdGgsIGhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuZmVuY2hJbWcsIC13aWR0aCAqIDAuNCwgaGVpZ2h0IC8gMywgd2lkdGgsIGhlaWdodCAvIDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuaGlsbEltZywgLXdpZHRoICogMC4yNSwgaGVpZ2h0IC8gMiwgd2lkdGggKiAxLjUsIGhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UuZ3Jhc3NJbWcsIC13aWR0aCAqIDAuMjUsIGhlaWdodCAvIDIgKyAoaGVpZ2h0IC8gMikgKiAwLjEsIHdpZHRoICogMS41LCBoZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLnRpbWVyX2VtcHR5LCAwLCBoZWlnaHQgKiAwLjEsIHdpZHRoLCBoZWlnaHQgKiAwLjA1KTtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLnJvdGF0aW5nX2Nsb2NrLCA1LCBoZWlnaHQgKiAwLjA5LCB3aWR0aCAqIDAuMTIsIGhlaWdodCAqIDAuMDYpO1xuICAgICAgICAgICAgc2VsZi50aW1lclRpY2tpbmcuY3JlYXRlQmFja2dyb3VkKCk7XG4gICAgICAgICAgICBzZWxmLnN0b25lcy5kcmF3KCk7XG4gICAgICAgICAgICBzZWxmLnBhdXNlQnV0dG9uLmRyYXcoKTtcbiAgICAgICAgICAgIHNlbGYubGV2ZWxJbmRpY2F0b3JzLmRyYXcoKTtcbiAgICAgICAgICAgIHNlbGYucHJvbXB0VGV4dC5jcmVhdGVCYWNrZ3JvdW5kKCk7XG4gICAgICAgICAgICBsb2FkaW5nU2NyZWVuKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBGaXJlYmFzZVVzZXJDbGlja2VkLCBQbGF5QnV0dG9uTGF5ZXIsIFBXQUluc3RhbGxTdGF0dXMsIFN0YXJ0U2NlbmVMYXllciwgfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IFNvdW5kIGZyb20gXCIuLi9jb21tb24vc291bmQuanNcIjtcbmltcG9ydCBJbnN0YWxsQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvaW5zdGFsbF9idXR0b24uanNcIjtcbmltcG9ydCBQbGF5QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2J1dHRvbnMvcGxheV9idXRvb24uanNcIjtcbmltcG9ydCB7IE1vbnN0ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb25zdGVyLmpzXCI7XG5pbXBvcnQgeyBDYW52YXNTdGFjayB9IGZyb20gXCIuLi91dGlsaXR5L2NhbnZhcy1zdGFjay5qc1wiO1xuaW1wb3J0IHsgTGV2ZWxTZWxlY3Rpb25TY3JlZW4gfSBmcm9tIFwiLi9sZXZlbC1zZWxlY3Rpb24tc2NlbmUuanNcIjtcbmltcG9ydCB7IGxhbmcgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsLXZhcmlhYmxlcy5qc1wiO1xudmFyIGJnSW1nID0gbmV3IEltYWdlKCk7XG5iZ0ltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9iZ192MDEuanBnXCI7XG52YXIgaGlsbEltZyA9IG5ldyBJbWFnZSgpO1xuaGlsbEltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9oaWxsX3YwMS5wbmdcIjtcbnZhciBwaWxsZXJJbWcgPSBuZXcgSW1hZ2UoKTtcbnBpbGxlckltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9Ub3RlbV92MDJfdjAxLnBuZ1wiO1xudmFyIGdyYXNzSW1nID0gbmV3IEltYWdlKCk7XG5ncmFzc0ltZy5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9GR19hX3YwMS5wbmdcIjtcbnZhciBmZW5jaEltZyA9IG5ldyBJbWFnZSgpO1xuZmVuY2hJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvZmVuY2VfdjAxLnBuZ1wiO1xudmFyIHRpdGxlID0gbmV3IEltYWdlKCk7XG50aXRsZS5zcmMgPSBcIi4vbGFuZy9cIiArIGxhbmcgKyBcIi9pbWFnZXMvdGl0bGUucG5nXCI7XG52YXIgcHJvZmlsZU1vbnN0ZXIgPSBuZXcgSW1hZ2UoKTtcbnByb2ZpbGVNb25zdGVyLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL2lkbGU0LnBuZ1wiO1xudmFyIHNlbGY7XG5sZXQgcHdhX2luc3RhbGxfc3RhdHVzO1xuY29uc3QgYWJvdXRDb21wYW55RWxlbWVudCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LWNvbXBhbnlcIikpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVpbnN0YWxscHJvbXB0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHB3YV9pbnN0YWxsX3N0YXR1cyA9IGU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oUFdBSW5zdGFsbFN0YXR1cywgXCJmYWxzZVwiKTtcbn0pO1xuZXhwb3J0IGNsYXNzIFN0YXJ0U2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgZGF0YSwgZmlyZWJhc2VfYW5hbHl0aWNzKSB7XG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhc1N0YWNrID0gbmV3IENhbnZhc1N0YWNrKFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLm1vbnN0ZXIgPSBuZXcgTW9uc3Rlcih0aGlzLmNhbnZhcyk7XG4gICAgICAgIHRoaXMucHdhX3N0YXR1cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFBXQUluc3RhbGxTdGF0dXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcygpO1xuICAgICAgICB0aGlzLmNyZWF0ZVBsYXlCdXR0b24oKTtcbiAgICAgICAgdGhpcy5maXJlYmFzZV9hbmFseXRpY3MgPSBmaXJlYmFzZV9hbmFseXRpY3M7XG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuY2FudmFzU3RhY2suY3JlYXRlTGF5ZXIodGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIFN0YXJ0U2NlbmVMYXllcik7XG4gICAgICAgIGFib3V0Q29tcGFueUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgYWJvdXRDb21wYW55RWxlbWVudC5pbm5lckhUTUwgPSBnbG9iYWxUaGlzLmFib3V0Q29tcGFueTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FuYXZzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuY2FuYXZzRWxlbWVudC5zdHlsZS56SW5kZXggPSAyO1xuICAgICAgICB0aGlzLmNhbmF2c0VsZW1lbnQuc3R5bGUuYm90dG9tID0gMDtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoYmdJbWcsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShwaWxsZXJJbWcsIHRoaXMud2lkdGggKiAwLjYsIHRoaXMuaGVpZ2h0IC8gNiwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShmZW5jaEltZywgLXRoaXMud2lkdGggKiAwLjQsIHRoaXMuaGVpZ2h0IC8gMywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLyAzKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShoaWxsSW1nLCAtdGhpcy53aWR0aCAqIDAuMjUsIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy53aWR0aCAqIDEuNSwgdGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShncmFzc0ltZywgLXRoaXMud2lkdGggKiAwLjI1LCB0aGlzLmhlaWdodCAvIDIgKyAodGhpcy5oZWlnaHQgLyAyKSAqIDAuMSwgdGhpcy53aWR0aCAqIDEuNSwgdGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aXRsZSwgdGhpcy53aWR0aCAqIDAsIHRoaXMuaGVpZ2h0IC8gNTAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC8gNik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZy1zY3JlZW5cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBjcmVhdGVQbGF5QnV0dG9uKCkge1xuICAgICAgICBjb25zdCBwbGF5QnV0dG9uTGF5ZXJFbGVtZW50ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFBsYXlCdXR0b25MYXllcikpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICB2YXIgcGxheUJ1dHRvbklkID0gdGhpcy5jYW52YXNTdGFjay5jcmVhdGVMYXllcih0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgUGxheUJ1dHRvbkxheWVyKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxheUJ1dHRvbklkKTtcbiAgICAgICAgdGhpcy5idXR0b25Db250ZXh0ID0gdGhpcy5jYW5hdnNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jYW5hdnNFbGVtZW50LnN0eWxlLnpJbmRleCA9IDc7XG4gICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICBzZWxmLnBsYXlCdXR0b24gPSBuZXcgUGxheUJ1dHRvbihzZWxmLmJ1dHRvbkNvbnRleHQsIHNlbGYuY2FudmFzLCBzZWxmLmNhbnZhcy53aWR0aCAqIDAuMzUsIHNlbGYuY2FudmFzLmhlaWdodCAvIDcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5wbGF5QnV0dG9uID0gbmV3IEluc3RhbGxCdXR0b24oc2VsZi5idXR0b25Db250ZXh0LCBzZWxmLmNhbnZhcywgc2VsZi5jYW52YXMud2lkdGggKiAwLjM1LCBzZWxmLmNhbnZhcy5oZWlnaHQgLyA1KTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChQbGF5QnV0dG9uTGF5ZXIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxmLmlkKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHZhciByZWN0ID0gc2VsZkVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5wbGF5QnV0dG9uLm9uQ2xpY2soeCwgeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5maXJlYmFzZV9hbmFseXRpY3NcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5maXJlYmFzZV9hbmFseXRpY3MubG9nRXZlbnQoRmlyZWJhc2VVc2VyQ2xpY2tlZCwgXCJjbGlja1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBmYnEoXCJ0cmFja0N1c3RvbVwiLCBGaXJlYmFzZVVzZXJDbGlja2VkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogXCJjbGlja1wiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYWJvdXRDb21wYW55RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBTb3VuZCgpLmNoYW5nZVNvdXJzZShcIi4vYXNzZXRzL2F1ZGlvcy9CdXR0b25DbGljay53YXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgc2VsZi5jYW52YXMud2lkdGgsIHNlbGYuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBMZXZlbFNlbGVjdGlvblNjcmVlbihzZWxmLmNhbnZhcywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoUGxheUJ1dHRvbkxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tb25zdGVyLmRlbGV0ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2VsZi5tb25zdGVyO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbnZhc1N0YWNrLmRlbGV0ZUxheWVyKFN0YXJ0U2NlbmVMYXllcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChzZWxmLnB3YV9zdGF0dXMgPT0gXCJmYWxzZVwiIHx8ICFzZWxmLnB3YV9zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBwd2FfaW5zdGFsbF9zdGF0dXMucHJvbXB0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgeyBvdXRjb21lIH0gPSBhd2FpdCBwd2FfaW5zdGFsbF9zdGF0dXMudXNlckNob2ljZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAob3V0Y29tZSA9PT0gXCJhY2NlcHRlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBwd2FfaW5zdGFsbF9zdGF0dXMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oUFdBSW5zdGFsbFN0YXR1cywgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmJxKFwidHJhY2tDdXN0b21cIiwgRmlyZWJhc2VVc2VySW5zdGFsbCwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBldmVudDogXCJpbnN0YWxsX2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuZmlyZWJhc2VfYW5hbHl0aWNzXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgID8gc2VsZi5maXJlYmFzZV9hbmFseXRpY3MubG9nRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICBGaXJlYmFzZVVzZXJJbnN0YWxsLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgXCJJbnN0YWxsXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmJxKFwidHJhY2tDdXN0b21cIiwgVXNlckNhbmNlbGxlZCwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBldmVudDogXCJjYW5jZWxfY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5maXJlYmFzZV9hbmFseXRpY3NcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgPyBzZWxmLmZpcmViYXNlX2FuYWx5dGljcy5sb2dFdmVudChVc2VyQ2FuY2VsbGVkLCBcIkNhbmNlbGxlZFwiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICF3aW5kb3cubWF0Y2hNZWRpYShcIihkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpXCIpLm1hdGNoZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYucHdhX3N0YXR1cyA9PSBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYWxlcnQoXCJQV0EgaXMgaW5zdGFsbGVkIG9uIHlvdXIgZGV2aWNlIFxcblBsZWFzZSBwbGF5IGZyb20gdGhlcmVcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGFib3V0Q29tcGFueUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbmV3IFNvdW5kKCkuY2hhbmdlU291cnNlKFwiLi9hc3NldHMvYXVkaW9zL0J1dHRvbkNsaWNrLndhdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuY29udGV4dC5jbGVhclJlY3QoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHNlbGYuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBzZWxmLmNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBuZXcgTGV2ZWxTZWxlY3Rpb25TY3JlZW4oc2VsZi5jYW52YXMsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5jYW52YXNTdGFjay5kZWxldGVMYXllcihQbGF5QnV0dG9uTGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZi5tb25zdGVyLmRlbGV0ZUNhbnZhcygpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGVsZXRlIHNlbGYubW9uc3RlcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuY2FudmFzU3RhY2suZGVsZXRlTGF5ZXIoU3RhcnRTY2VuZUxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgQ2FudmFzU3RhY2s7XG4oZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGNsYXNzIExheWVyIHtcbiAgICAgICAgY29uc3RydWN0b3IoeyBjYW52YXNJRCwgY2FudmFzRWxlbWVudCwgfSkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGNhbnZhc0lEO1xuICAgICAgICAgICAgdGhpcy5jRWxlbSA9IGNhbnZhc0VsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLmRyYWdPYmplY3RzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2FudmFzU3RhY2sgPSBjbGFzcyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGN2c0lELCBzdGFja0xpbWl0KSB7XG4gICAgICAgICAgICBjb25zdCBzYXZUaGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY0lkID0gY3ZzSUQ7XG4gICAgICAgICAgICB0aGlzLnN0YWNrTGltaXQgPSBzdGFja0xpbWl0IHx8IDEyO1xuICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdnNJRCk7XG4gICAgICAgICAgICB0aGlzLnJhd1dpZHRoID0gdGhpcy5ia2dDYW52YXMub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB0aGlzLnJhd0hlaWdodCA9IHRoaXMuYmtnQ2FudmFzLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLnJlc2l6ZUZucyA9IFtdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmJrZ0NhbnZhcy5oYXNPd25Qcm9wZXJ0eShcImxheWVyc1wiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLmxheWVycyA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBia2dMID0gbmV3IExheWVyKHtcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzSUQ6IHRoaXMuY0lkLFxuICAgICAgICAgICAgICAgICAgICBjYW52YXNFbGVtZW50OiB0aGlzLmJrZ0NhbnZhcyxcbiAgICAgICAgICAgICAgICB9KTsgLy8gYmtnQ2FudmFzIGlzIGFsd2F5cyBsYXllclswXVxuICAgICAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLmxheWVyc1swXSA9IGJrZ0w7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuYmtnQ2FudmFzLmhhc093blByb3BlcnR5KFwidW5pcXVlXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMudW5pcXVlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVMYXllcihoZWlnaHQsIHdpZHRoLCBsYXllcklkKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNMYXllckV4aXN0KGxheWVySWQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdyA9IHdpZHRoICsgXCJweFwiLCBoID0gaGVpZ2h0ICsgXCJweFwiLCBuTHlycyA9IHRoaXMuYmtnQ2FudmFzLmxheWVycy5sZW5ndGg7IC8vIGJrZyBpcyBsYXllciAwIHNvIGF0IGxlYXN0IDFcbiAgICAgICAgICAgICAgICBpZiAoISh0aGlzLmJrZ0NhbnZhcyAmJiB0aGlzLmJrZ0NhbnZhcy5sYXllcnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmtnQ2FudmFzLmxheWVycy5sZW5ndGggPj0gdGhpcy5zdGFja0xpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW52YXNTdGFjazogdG9vIG1hbnkgbGF5ZXJzXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLnVuaXF1ZSArPSAxOyAvLyBhIHByaXZhdGUgc3RhdGljIHZhcmlhYmxlXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgdW5pcXVlVGFnID0gdGhpcy5ia2dDYW52YXMudW5pcXVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgb3ZsSWQgPSB0aGlzLmNJZCArIFwiX292bF9cIiArIHVuaXF1ZVRhZztcbiAgICAgICAgICAgICAgICBjb25zdCBvdmxJZCA9IGxheWVySWQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZsSFRNTCA9IFwiPGNhbnZhcyBpZD0nXCIgK1xuICAgICAgICAgICAgICAgICAgICBvdmxJZCArXG4gICAgICAgICAgICAgICAgICAgIFwiJyBzdHlsZT0ncG9zaXRpb246YWJzb2x1dGUnIHdpZHRoPSdcIiArXG4gICAgICAgICAgICAgICAgICAgIHcgK1xuICAgICAgICAgICAgICAgICAgICBcIicgaGVpZ2h0PSdcIiArXG4gICAgICAgICAgICAgICAgICAgIGggK1xuICAgICAgICAgICAgICAgICAgICBcIic+PC9jYW52YXM+XCI7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wQ3ZzID0gdGhpcy5ia2dDYW52YXMubGF5ZXJzW25MeXJzIC0gMV0uY0VsZW07XG4gICAgICAgICAgICAgICAgdG9wQ3ZzLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyZW5kXCIsIG92bEhUTUwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0N2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG92bElkKTtcbiAgICAgICAgICAgICAgICBuZXdDdnMuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgIG5ld0N2cy5zdHlsZS5sZWZ0ID0gXCI1MCVcIjtcbiAgICAgICAgICAgICAgICBuZXdDdnMuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTUwJSwgMCUpXCI7XG4gICAgICAgICAgICAgICAgbmV3Q3ZzLnN0eWxlLmhlaWdodCA9IGg7XG4gICAgICAgICAgICAgICAgbmV3Q3ZzLnN0eWxlLndpZHRoID0gdztcbiAgICAgICAgICAgICAgICBsZXQgbmV3TCA9IG5ldyBMYXllcih7IGNhbnZhc0lEOiBvdmxJZCwgY2FudmFzRWxlbWVudDogbmV3Q3ZzIH0pO1xuICAgICAgICAgICAgICAgIC8vIHNhdmUgdGhlIElEIGluIGFuIGFycmF5IHRvIGZhY2lsaXRhdGUgcmVtb3ZhbFxuICAgICAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLmxheWVycy5wdXNoKG5ld0wpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvdmxJZDsgLy8gcmV0dXJuIHRoZSBuZXcgY2FudmFzIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlTGF5ZXIob3ZseUlkKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBiYWNrZ3JvdW5kIGNhbnZhcyBpcyBzdGlsbCB0aGVyZVxuICAgICAgICAgICAgaWYgKCEodGhpcy5ia2dDYW52YXMgJiYgdGhpcy5ia2dDYW52YXMubGF5ZXJzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5ia2dDYW52YXMubGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmtnQ2FudmFzLmxheWVyc1tpXS5pZCA9PT0gb3ZseUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvdmxOb2RlID0gdGhpcy5ia2dDYW52YXMubGF5ZXJzW2ldLmNFbGVtO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3ZsTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZsTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG92bE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdyBkZWxldGUgbGF5ZXJzIGFycmF5IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ia2dDYW52YXMubGF5ZXJzLnNwbGljZShpLCAxKTsgLy8gZGVsZXRlIHRoZSBMYXllciBvYmplY3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlQWxsTGF5ZXJzKCkge1xuICAgICAgICAgICAgaWYgKCEodGhpcy5ia2dDYW52YXMgJiYgdGhpcy5ia2dDYW52YXMubGF5ZXJzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmJrZ0NhbnZhcy5sYXllcnMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGxldCBvdmxOb2RlID0gdGhpcy5ia2dDYW52YXMubGF5ZXJzW2ldLmNFbGVtO1xuICAgICAgICAgICAgICAgIGlmIChvdmxOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcnBoYW4gPSBvdmxOb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3ZsTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIG9ycGhhbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIG5vdyBkZWxldGUgbGF5ZXJzIGFycmF5IGVsZW1lbnRcbiAgICAgICAgICAgICAgICB0aGlzLmJrZ0NhbnZhcy5sYXllcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2xlYXIgYW55IHJlc2l6ZSBjYWxsYmFja3MsIHRoZSBsYXllcnMgYXJlIGdvbmVcbiAgICAgICAgICAgIHRoaXMuYmtnQ2FudmFzLnJlc2l6ZUZucy5sZW5ndGggPSAwOyAvLyByZW1vdmUgYW55IGFkZGVkIGhhbmRsZXJzLCBsZWF2ZSB0aGUgYmFzaWNcbiAgICAgICAgfVxuICAgICAgICBpc0xheWVyRXhpc3QobGF5ZXJJRCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmJrZ0NhbnZhcy5sYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ia2dDYW52YXMubGF5ZXJzW2ldLmlkID09PSBsYXllcklEKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59KSgpO1xuIiwidHJ5e3NlbGZbXCJ3b3JrYm94OndpbmRvdzo0LjMuMVwiXSYmXygpfWNhdGNoKG4pe312YXIgbj1mdW5jdGlvbihuLHQpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihpKXt2YXIgZT1uZXcgTWVzc2FnZUNoYW5uZWw7ZS5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24obil7cmV0dXJuIGkobi5kYXRhKX0sbi5wb3N0TWVzc2FnZSh0LFtlLnBvcnQyXSl9KX07ZnVuY3Rpb24gdChuLHQpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgZT10W2ldO2UuZW51bWVyYWJsZT1lLmVudW1lcmFibGV8fCExLGUuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIGUmJihlLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixlLmtleSxlKX19ZnVuY3Rpb24gaShuKXtpZih2b2lkIDA9PT1uKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gbn10cnl7c2VsZltcIndvcmtib3g6Y29yZTo0LjMuMVwiXSYmXygpfWNhdGNoKG4pe312YXIgZT1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5wcm9taXNlPW5ldyBQcm9taXNlKGZ1bmN0aW9uKHQsaSl7bi5yZXNvbHZlPXQsbi5yZWplY3Q9aX0pfSxyPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG5ldyBVUkwobixsb2NhdGlvbikuaHJlZj09PW5ldyBVUkwodCxsb2NhdGlvbikuaHJlZn0sbz1mdW5jdGlvbihuLHQpe09iamVjdC5hc3NpZ24odGhpcyx0LHt0eXBlOm59KX07ZnVuY3Rpb24gdShuKXtyZXR1cm4gZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10saT0wO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspdFtpXT1hcmd1bWVudHNbaV07dHJ5e3JldHVybiBQcm9taXNlLnJlc29sdmUobi5hcHBseSh0aGlzLHQpKX1jYXRjaChuKXtyZXR1cm4gUHJvbWlzZS5yZWplY3Qobil9fX1mdW5jdGlvbiBhKG4sdCxpKXtyZXR1cm4gaT90P3Qobik6bjoobiYmbi50aGVufHwobj1Qcm9taXNlLnJlc29sdmUobikpLHQ/bi50aGVuKHQpOm4pfWZ1bmN0aW9uIHMoKXt9dmFyIGM9ZnVuY3Rpb24oYyl7dmFyIGYsaDtmdW5jdGlvbiB2KG4sdCl7dmFyIHI7cmV0dXJuIHZvaWQgMD09PXQmJih0PXt9KSwocj1jLmNhbGwodGhpcyl8fHRoaXMpLnQ9bixyLmk9dCxyLm89MCxyLnU9bmV3IGUsci5zPW5ldyBlLHIuaD1uZXcgZSxyLnY9ci52LmJpbmQoaShpKHIpKSksci5sPXIubC5iaW5kKGkoaShyKSkpLHIuZz1yLmcuYmluZChpKGkocikpKSxyLm09ci5tLmJpbmQoaShpKHIpKSkscn1oPWMsKGY9dikucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoaC5wcm90b3R5cGUpLGYucHJvdG90eXBlLmNvbnN0cnVjdG9yPWYsZi5fX3Byb3RvX189aDt2YXIgbCx3LGcsZD12LnByb3RvdHlwZTtyZXR1cm4gZC5yZWdpc3Rlcj11KGZ1bmN0aW9uKG4pe3ZhciB0LGksZT10aGlzLHU9KHZvaWQgMD09PW4/e306bikuaW1tZWRpYXRlLGM9dm9pZCAwIT09dSYmdTtyZXR1cm4gdD1mdW5jdGlvbigpe3JldHVybiBlLnA9Qm9vbGVhbihuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSxlLlA9ZS5SKCksYShlLmsoKSxmdW5jdGlvbihuKXtlLkI9bixlLlAmJihlLk89ZS5QLGUucy5yZXNvbHZlKGUuUCksZS5oLnJlc29sdmUoZS5QKSxlLmooZS5QKSxlLlAuYWRkRXZlbnRMaXN0ZW5lcihcInN0YXRlY2hhbmdlXCIsZS5sLHtvbmNlOiEwfSkpO3ZhciB0PWUuQi53YWl0aW5nO3JldHVybiB0JiZyKHQuc2NyaXB0VVJMLGUudCkmJihlLk89dCxQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCl7ZS5kaXNwYXRjaEV2ZW50KG5ldyBvKFwid2FpdGluZ1wiLHtzdzp0LHdhc1dhaXRpbmdCZWZvcmVSZWdpc3RlcjohMH0pKX0pKSxlLk8mJmUudS5yZXNvbHZlKGUuTyksZS5CLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVmb3VuZFwiLGUuZyksbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRyb2xsZXJjaGFuZ2VcIixlLm0se29uY2U6ITB9KSxcIkJyb2FkY2FzdENoYW5uZWxcImluIHNlbGYmJihlLkM9bmV3IEJyb2FkY2FzdENoYW5uZWwoXCJ3b3JrYm94XCIpLGUuQy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGUudikpLG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZS52KSxlLkJ9KX0sKGk9ZnVuY3Rpb24oKXtpZighYyYmXCJjb21wbGV0ZVwiIT09ZG9jdW1lbnQucmVhZHlTdGF0ZSlyZXR1cm4gZnVuY3Rpb24obix0KXtpZighdClyZXR1cm4gbiYmbi50aGVuP24udGhlbihzKTpQcm9taXNlLnJlc29sdmUoKX0obmV3IFByb21pc2UoZnVuY3Rpb24obil7cmV0dXJuIGFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsbil9KSl9KCkpJiZpLnRoZW4/aS50aGVuKHQpOnQoaSl9KSxkLmdldFNXPXUoZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5PfHx0aGlzLnUucHJvbWlzZX0pLGQubWVzc2FnZVNXPXUoZnVuY3Rpb24odCl7cmV0dXJuIGEodGhpcy5nZXRTVygpLGZ1bmN0aW9uKGkpe3JldHVybiBuKGksdCl9KX0pLGQuUj1mdW5jdGlvbigpe3ZhciBuPW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXI7aWYobiYmcihuLnNjcmlwdFVSTCx0aGlzLnQpKXJldHVybiBufSxkLms9dShmdW5jdGlvbigpe3ZhciBuPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKG4sdCl7dHJ5e3ZhciBpPW4oKX1jYXRjaChuKXtyZXR1cm4gdChuKX1yZXR1cm4gaSYmaS50aGVuP2kudGhlbih2b2lkIDAsdCk6aX0oZnVuY3Rpb24oKXtyZXR1cm4gYShuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihuLnQsbi5pKSxmdW5jdGlvbih0KXtyZXR1cm4gbi5MPXBlcmZvcm1hbmNlLm5vdygpLHR9KX0sZnVuY3Rpb24obil7dGhyb3cgbn0pfSksZC5qPWZ1bmN0aW9uKHQpe24odCx7dHlwZTpcIldJTkRPV19SRUFEWVwiLG1ldGE6XCJ3b3JrYm94LXdpbmRvd1wifSl9LGQuZz1mdW5jdGlvbigpe3ZhciBuPXRoaXMuQi5pbnN0YWxsaW5nO3RoaXMubz4wfHwhcihuLnNjcmlwdFVSTCx0aGlzLnQpfHxwZXJmb3JtYW5jZS5ub3coKT50aGlzLkwrNmU0Pyh0aGlzLlc9bix0aGlzLkIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInVwZGF0ZWZvdW5kXCIsdGhpcy5nKSk6KHRoaXMuTz1uLHRoaXMudS5yZXNvbHZlKG4pKSwrK3RoaXMubyxuLmFkZEV2ZW50TGlzdGVuZXIoXCJzdGF0ZWNoYW5nZVwiLHRoaXMubCl9LGQubD1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGk9bi50YXJnZXQsZT1pLnN0YXRlLHI9aT09PXRoaXMuVyx1PXI/XCJleHRlcm5hbFwiOlwiXCIsYT17c3c6aSxvcmlnaW5hbEV2ZW50Om59OyFyJiZ0aGlzLnAmJihhLmlzVXBkYXRlPSEwKSx0aGlzLmRpc3BhdGNoRXZlbnQobmV3IG8odStlLGEpKSxcImluc3RhbGxlZFwiPT09ZT90aGlzLl89c2V0VGltZW91dChmdW5jdGlvbigpe1wiaW5zdGFsbGVkXCI9PT1lJiZ0LkIud2FpdGluZz09PWkmJnQuZGlzcGF0Y2hFdmVudChuZXcgbyh1K1wid2FpdGluZ1wiLGEpKX0sMjAwKTpcImFjdGl2YXRpbmdcIj09PWUmJihjbGVhclRpbWVvdXQodGhpcy5fKSxyfHx0aGlzLnMucmVzb2x2ZShpKSl9LGQubT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLk87dD09PW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXImJih0aGlzLmRpc3BhdGNoRXZlbnQobmV3IG8oXCJjb250cm9sbGluZ1wiLHtzdzp0LG9yaWdpbmFsRXZlbnQ6bn0pKSx0aGlzLmgucmVzb2x2ZSh0KSl9LGQudj1mdW5jdGlvbihuKXt2YXIgdD1uLmRhdGE7dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBvKFwibWVzc2FnZVwiLHtkYXRhOnQsb3JpZ2luYWxFdmVudDpufSkpfSxsPXYsKHc9W3trZXk6XCJhY3RpdmVcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zLnByb21pc2V9fSx7a2V5OlwiY29udHJvbGxpbmdcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oLnByb21pc2V9fV0pJiZ0KGwucHJvdG90eXBlLHcpLGcmJnQobCxnKSx2fShmdW5jdGlvbigpe2Z1bmN0aW9uIG4oKXt0aGlzLkQ9e319dmFyIHQ9bi5wcm90b3R5cGU7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihuLHQpe3RoaXMuVChuKS5hZGQodCl9LHQucmVtb3ZlRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihuLHQpe3RoaXMuVChuKS5kZWxldGUodCl9LHQuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihuKXtuLnRhcmdldD10aGlzLHRoaXMuVChuLnR5cGUpLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIHQobil9KX0sdC5UPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLkRbbl09dGhpcy5EW25dfHxuZXcgU2V0fSxufSgpKTtleHBvcnR7YyBhcyBXb3JrYm94LG4gYXMgbWVzc2FnZVNXfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdvcmtib3gtd2luZG93LnByb2QuZXM1Lm1qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuL3NyYy9kYXRhL2FwaS1kYXRhLmpzXCI7XG5pbXBvcnQgeyBEYXRhTW9kYWwgfSBmcm9tIFwiLi9zcmMvZGF0YS9kYXRhLW1vZGFsLmpzXCI7XG5pbXBvcnQgeyBTdGFydFNjZW5lIH0gZnJvbSBcIi4vc3JjL3NjZW5lcy9zdGFydC1zY2VuZS5qc1wiO1xuaW1wb3J0IHsgQ2FudmFzU3RhY2sgfSBmcm9tIFwiLi9zcmMvdXRpbGl0eS9jYW52YXMtc3RhY2suanNcIjtcbmltcG9ydCB7IGZpcmViYXNlQ29uZmlnIH0gZnJvbSBcIi4vc3JjL2ZpcmViYXNlL2ZpcmViYXNlX2NvbmZpZy5qc1wiO1xuaW1wb3J0IHsgQ2FjaGVkTGFuZ3VhZ2VzIH0gZnJvbSBcIi4vc3JjL2NvbW1vbi9jb21tb24uanNcIjtcbmltcG9ydCB7IFdvcmtib3ggfSBmcm9tIFwid29ya2JveC13aW5kb3dcIjtcbmltcG9ydCB7IGxhbmcgfSBmcm9tIFwiLi9nbG9iYWwtdmFyaWFibGVzLmpzXCI7XG5jb25zdCBjaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoXCJteS1jaGFubmVsXCIpO1xubGV0IGNhY2hlZF9sYW5ndWFnZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDYWNoZWRMYW5ndWFnZXMpXG4gICAgPyBuZXcgTWFwKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oQ2FjaGVkTGFuZ3VhZ2VzKSkpXG4gICAgOiBuZXcgTWFwKCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgICAgIGxldCB3YiA9IG5ldyBXb3JrYm94KFwiLi9zdy5qc1wiLCB7fSk7XG4gICAgICAgICAgICB3Yi5yZWdpc3RlcigpLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJSZWdpc3RyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGxhbmcsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2FjaGVkX2xhbmd1YWdlcy5oYXMobGFuZykpIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsLnBvc3RNZXNzYWdlKHsgY29tbWFuZDogXCJDYWNoZVwiLCBkYXRhOiBsYW5nIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEubXNnID09IFwiTG9hZGluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ19udW1iZXJcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICsgXCIgZG93bmxvYWRpbmcuLi4gXCIgKyBldmVudC5kYXRhLmRhdGEgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuZGF0YSA9PSAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlZF9sYW5ndWFnZXMuc2V0KGxhbmcsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENhY2hlZExhbmd1YWdlcywgSlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShjYWNoZWRfbGFuZ3VhZ2VzLmVudHJpZXMoKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5tc2cgPT0gXCJVcGRhdGUgRm91bmRcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IFwiVXBkYXRlIEZvdW5kXFxuUHJlc3Mgb2sgdG8gdXBkYXRlLlwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlybSh0ZXh0KSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShDYWNoZWRMYW5ndWFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiWW91IGNhbmNlbGVkIVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gICAgICAgICAgICB0aGlzLmFuYWx5dGljcyA9IGZpcmViYXNlLmFuYWx5dGljcyh0aGlzLmFwcCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGggPiA0MjAgPyA0MjAgOiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgbGV0IGRhdGEgPSB5aWVsZCBnZXREYXRhKCk7XG4gICAgICAgIGxldCBkID0gbmV3IERhdGFNb2RhbChkYXRhLk90aGVyQXVkaW9zLCBkYXRhLkxldmVscywgZGF0YS5GZWVkYmFja1RleHRzLCBkYXRhLlJpZ2h0VG9MZWZ0LCBkYXRhLkZlZWRiYWNrQXVkaW9zKTtcbiAgICAgICAgaWYgKHdpbmRvdy5BbmRyb2lkKSB7XG4gICAgICAgICAgICB3aW5kb3cuQW5kcm9pZC5yZWNlaXZlRGF0YShjYWNoZWRfbGFuZ3VhZ2VzLmhhcyhsYW5nKSA/IGNhY2hlZF9sYW5ndWFnZXMuZ2V0KGxhbmcpIDogbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsVGhpcy5hYm91dENvbXBhbnkgPSBkYXRhLmFib3V0Q29tcGFueTtcbiAgICAgICAgZ2xvYmFsVGhpcy5kZXNjcmlwdGlvblRleHQgPSBkYXRhLmRlc2NyaXB0aW9uVGV4dDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKGNhY2hlZF9sYW5ndWFnZXMuaGFzKGxhbmcpKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoID4gNDIwID8gNDIwIDogd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMubW9uc3RlcjtcbiAgICAgICAgICAgICAgICBuZXcgQ2FudmFzU3RhY2soXCJjYW52YXNcIikuZGVsZXRlQWxsTGF5ZXJzKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RhcnRTY2VuZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U2NlbmUgPSBuZXcgU3RhcnRTY2VuZShjYW52YXMsIGQsIHRoaXMuYW5hbHl0aWNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAoY2FjaGVkX2xhbmd1YWdlcy5oYXMobGFuZykpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTY2VuZSA9IG5ldyBTdGFydFNjZW5lKGNhbnZhcywgZCwgdGhpcy5hbmFseXRpY3MpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==