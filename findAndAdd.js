const fs = require('fs');
const file = process.argv[2]; //file name
const target = process.argv[3].toLowerCase(); // what to search for
const newFile = process.argv[4]; // name of new file

const listOfStrings = fs.readFileSync(file, 'utf-8').split('\n');
var newList = [];

for (var i = 0; i < listOfStrings.length; i++) {
  //check if string contains target
  if (listOfStrings[i].toLowerCase().includes(target)) {
    newList.push(listOfStrings[i] + '\n');
  }
}

newList = newList.join(""); // remove commas

/*=========   MAKE NEW FILE ====================*/
fs.writeFile(newFile, newList, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("New file saved successfully!");
});
