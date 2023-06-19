const fs = require("fs");
const axios = require("axios");
const readline = require("readline");

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for the language
rl.question("Which language do you want to check? ", (language) => {
  // Construct the JSON URL based on the selected language
  const jsonURL = `https://feedthemonster.curiouscontent.org/lang/${language}/ftm_${language}.json`;

  // Fetch the JSON file
  axios
    .get(jsonURL)
    .then((response) => {
      const json = response.data;

      function findMissingLetter(obj, path = "", paths = []) {
        if (typeof obj === "object" && obj !== null) {
          for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              const newPath = path ? `${path}.${key}` : key;
              if (
                (key === "StoneText" && obj[key] === "MagnetLetter") ||
                (key === "StoneText" && obj[key] === "null") ||
                (key === "StoneText" && obj[key] === "")
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

      fs.writeFile(
        outputFilePath,
        missingLetterPaths.join("\n"),
        "utf8",
        (err) => {
          if (err) {
            console.error(`Error writing to file: ${err.message}`);
          } else {
            console.log(`Missing Foilstone paths written to ${outputFilePath}`);
          }
        }
      );
    })
    .catch((error) => {
      console.error(`Error fetching JSON file: ${error.message}`);
    });

  // Close the readline interface
  rl.close();
});
