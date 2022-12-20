import { lang } from "../../global-variables.js";

export class ProfileData {
  public levelName: string;
  public levelNumber: number;
  public levelScore: number;
  public levelStar: number;

  constructor(levelName, levelNumber, levelScore, levelStar) {
    (this.levelName = levelName),
      (this.levelNumber = levelNumber),
      (this.levelScore = levelScore),
      (this.levelStar = levelStar);
  }
}

export function setDataToStorage(profileData) {
  const existingData: [any] = getDatafromStorage()
    ? jsonToArray(getDatafromStorage())
    : [];
  profileData ? dataPushToArray(existingData, profileData) : null;
  existingData.sort((a, b) => {
    if (a.levelNumber > b.levelNumber) {
      return 1;
    } else {
      return -1;
    }
  });
  const data: any = JSON.stringify(existingData);
  if (data) {
    localStorage.setItem(lang+"Profile", data);
  }
}
function jsonToArray(json) {
  var data: any = [];
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
export function getDatafromStorage() {
  const data = JSON.parse(localStorage.getItem(lang+"Profile") || "{}");
  return data;
}
