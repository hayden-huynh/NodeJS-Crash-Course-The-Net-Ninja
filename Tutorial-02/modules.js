// const xyz = require('./people'); // Find the imported file and execute it. Whatever the imported file exports will also be returned here.

// Destructuring import
const {people, ages} = require('./people');

const os = require('os');

// console.log(xyz); // May be an empty object if imported file is not explicitly exporting anything.

// console.log(xyz.people, xyz.ages);

// console.log(people, ages);

console.log(os.platform(), os.homedir());