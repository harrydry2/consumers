// Helper Functions

// dump our data
exports.dump = obj => JSON.stringify(obj, null, 2);

//SVG Loader
const fs = require("fs");
exports.icon = name => fs.readFileSync(`./public/icons/${name}.svg`);

// Number to Dot Function
exports.numberToDollar = number => {
  const toSplit = number.length - 2;
  const splitted = number.split("");
  splitted.splice(toSplit, 0, ".");
  const harry = splitted.join("");
  return harry;
};
