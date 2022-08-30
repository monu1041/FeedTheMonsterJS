export class ProfileData {
  constructor(levelName, levelNumber, levelScore, levelStar) {
    (this.levelName = levelName),
      (this.levelNumber = levelNumber),
      (this.levelScore = levelScore),
      (this.levelStar = levelStar);
  }
}

export function setDataToStorage(profileData) {
  const existingData = getDatafromStorage()
    ? jsonToArray(getDatafromStorage())
    : [];
  profileData ? dataPushToArray(existingData, profileData) : null;

  const data = JSON.stringify(existingData);
  if (data) {
    localStorage.setItem("Profile", data);
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
    console.log(parseInt(data.levelNumber));
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
  const data = JSON.parse(localStorage.getItem("Profile"));
  return data;
}
