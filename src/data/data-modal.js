export class DataModal {
    constructor(otherAudios, levels, feedbackTexts, rightToLeft, feedbackAudios) {
        this.otherAudios = new OtherAudios(otherAudios);
        this.levels = new Levels(levels);
        this.FeedbackTexts = new FeedbackTexts(feedbackTexts);
        this.FeedbackAudios = new FeedbackAudios(feedbackAudios);
        this.rightToLeft = rightToLeft;
    }
}

export class OtherAudios {
    constructor(otherAudios) {
        this.selctYourPlayer = otherAudios["Select your player"];
        this.watchMeGrow = otherAudios["Watch me grow"];
        this.areYouSure = otherAudios["Are you sure"];
    }
}

export class FeedbackTexts {
    constructor(feedbackTexts) {
        this.fantastic = feedbackTexts[0];
        this.great = feedbackTexts[1];
        this.amazing = feedbackTexts[2];
    }
}

export class FeedbackAudios {
    constructor(feedbackAudios) {
        this.fantastic = feedbackAudios[0];
        this.great = feedbackAudios[1];
        this.amazing = feedbackAudios[2];
    }
}

export class Levels {
    constructor(levels) {
        this.levels = levels;
    }

    // getAllPuzzle() {
    //     this.puzzleDataArray = []
    //     this.puzzles = []
    //     this.levelMeta = []
    //     this.levelNumber;
    //     this.levels.map((data, index)=> {
    //         data.Puzzles.map((pData, index) => {
    //             this.puzzles.push(new Puzzles(pData));
    //         })
    //         this.levelMeta.push(new LevelMeta(data.LevelMeta));
    //         this.puzzleDataArray.push(this.puzzles)
    //     });

    //     return this.puzzleDataArray;
    // }
}

export class Puzzles {
    constructor(puzzle) {
        this.segmentNumber = puzzle.SegmentNumber
        this.prompt = new Prompt(puzzle.prompt);
        this.foilStones = puzzle.foilstones;
        this.targetStones = puzzle.targetstones;
    }
}

export class FoilStone {
    constructor(stoneText) {
        this.stoneText = stoneText;
    }
}

export class TargetStone {
    constructor() {
        this.stoneText;
    }
}

export class Prompt {
    constructor(prompt) {
        this.promptText = prompt.PromptText;
        this.promptAudio = prompt.PromptAudio;
    }
}

export class LevelMeta {
    constructor(levelMeta) {
        this.promptFadeOut = levelMeta.PromptFadeout;
        this.letterGroup = levelMeta.LetterGroup;
        this.levelNumber = levelMeta.LevelNumber;
        this.protoType = levelMeta.PromptType;
        this.levelType = levelMeta.LevelType;
    }
}



