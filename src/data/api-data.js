import { DataModal } from "./data-modal.js";

const URL = "../../lang/"+window.lang+"/ftm_"+window.lang+".json";

export function getFtmData() {
  return fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) =>
    res.json().then((data) => {
      return data;
    })
  );
}

export async function getData() {
  // let d = {
  //     "OtherAudios": null,
  //     "FeedbackTexts": null,
  //     "Levels": null,
  //     "FeedbackAudios": null,
  //     "RightToLeft": null
  // }
  return await getFtmData();
}
