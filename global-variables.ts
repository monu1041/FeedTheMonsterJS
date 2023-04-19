const urlParams = new URLSearchParams(window.location.search);

import { DevelopmentServer } from "./src/common/common.js";

export var pseudoId = urlParams.get("cr_user_id");
export var lang = "english";
export const Debugger = {
  DevelopmentLink: window.location.href.includes(DevelopmentServer)
    ? true
    : false,
  DebugMode: false,
};
