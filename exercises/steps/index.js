// --- Directions
// Write a function that accepts a positive integer N.
// The function should console log a step shape
// with N levels using the # character. Make sure the
// step has spaces on the right hand side.
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let i = 1; i <= n; i++) {
        console.log(`${ new Array(i + 1).join('#') }${ new Array(n - i + 1).join(' ') }`);
    }
}

module.exports = steps;