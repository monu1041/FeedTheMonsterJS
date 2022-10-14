import { firebaseConfig } from "./firebase_config.js";
export class FirebaseIntegration {
  constructor() {
    this.init();
  }
  init() {
    import(
      /*webpackIgnore: true*/ "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
    ).then((init) => {
      this.app = init.initializeApp(firebaseConfig);
    });
    import(
      /*webpackIgnore: true*/ "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js"
    ).then((analytics) => {
      this.analytics = analytics.getAnalytics(this.app);
    });
  }
}
