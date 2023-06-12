const fs = require("fs");

const json = require("../lang/arabic/ftm_arabic.json");

function findMissingLetter(obj, path = "", paths = []) {
  if (typeof obj === "object" && obj !== null) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newPath = path ? `${path}.${key}` : key;
        if (
          (key === "StoneText" && obj[key] === "MagnetLMagnetetter") ||
          (key === "StoneText" && obj[key] === "null")
        ) {
          paths.push(newPath);
        }
        findMissingLetter(obj[key], newPath, paths);
      }
    }
  }
  return paths;
}

const missingLetterPaths = findMissingLetter(json);
const outputFilePath = "missing_foilstones_paths.txt";

fs.writeFile(outputFilePath, missingLetterPaths.join("\n"), "utf8", (err) => {
  if (err) {
    console.error(`Error writing to file: ${err.message}`);
  } else {
    console.log(`Missing Foilstone paths written to ${outputFilePath}`);
  }
});
