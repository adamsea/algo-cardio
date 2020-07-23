// --- Directions
// Given an integer, return an integer that is the reverse
// order of the number provided.
// --- Examples
//   reverseInt(17) === 71
//   reverseInt(981) === 189
//   reverseInt(100) === 1
//   reverseInt(-17) === -71
//   reverseInt(-20) === -2

function reverseInt(n) {
    return /(-?)(\d+)/.test(n) && +`${ RegExp.$1 }${ RegExp.$2.split('').reverse().join('') }`;
};

module.exports = reverseInt;
