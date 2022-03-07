const removeFromArray = function(...remove) {
    let array = remove[0];
    let newArray = [];
    array.forEach((item) => {
        if (!remove.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

//Learn more about ! and forEach.

//Keep this for future learning.
// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }

// Do not edit below this line
module.exports = removeFromArray;
