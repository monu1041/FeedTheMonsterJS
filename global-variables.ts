const urlParams = new URLSearchParams(window.location.search);

import { DevelopmentServer } from "./src/common/common.js";

export var pseudoId = urlParams.get("ftm_pseudoId");
export var lang = "hindi";
export const Debugger = {
  DevelopmentLink: window.location.href.includes(DevelopmentServer)
    ? true
    : false,
  DebugMode: false,
};
