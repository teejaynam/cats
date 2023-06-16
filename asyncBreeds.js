// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackFunction) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) callbackFunction(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed); // => print out details correctly.
};

// we try to get the return value
const bombay = breedDetailsFromFile('Bombay', printOutCatBreed);
//console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!