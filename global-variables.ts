//const urlParams = new URLSearchParams(window.location.search);

import { DevelopmentServer } from "./src/common/common.js";

//export var lang = urlParams.get("ftm_language");
export var lang = "english";
console.log("Url = ", window.location.href);

export const Debugger = {
  DevelopmentLink: window.location.href.includes(DevelopmentServer)
    ? true
    : false,
  DebugMode: false,
};
