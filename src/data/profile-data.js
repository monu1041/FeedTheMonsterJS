export class ProfileData {
    constructor(levelName, levelNumber, levelScore, levelStar) {
        this.levelName = levelName,
        this.levelNumber = levelNumber,
        this.levelScore = levelScore,
        this.levelStar = levelStar
    }
}

export function setDataToStorage(profileData) {
    const data = JSON.stringify(profileData);
    if (data) {
        localStorage.setItem("Profile", data);
    }
}

export function getDatafromStorage() {
    const data = JSON.parse(localStorage.getItem("Profile"));
    return data;
}