import { DataModal } from "./data-modal.js";

const URL = "./ftm_english.json";

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
