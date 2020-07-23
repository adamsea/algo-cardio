// --- Directions
// Given a string, return the alphanumeric character
// that is most commonly used in the string.
// --- Examples
// maxChar("abcdddddddddd") === "d"
// maxChar("bacon 1234444") === "4"

function maxChar(str) {
    return str
        .split('')
        .reduce((acc, c) => {
            let counter = acc.find(elem => elem.char === c);
            if (counter) {
                counter.count++;
                return acc;
            }
            acc.push({ char: c, count: 1});
            return acc;
        }, [])
        .sort((a, b) => a.count < b.count ? 1 : -1)[0].char;
};

module.exports = maxChar;
