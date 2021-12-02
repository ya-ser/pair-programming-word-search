const wordSearch = (letters, word) => {
    if (letters.length < 1 || word.length < 1) return false;
    const horizontalJoin = letters.map(ls => ls.join(''))
    console.log("horizontal join", horizontalJoin)
    const vertialJoin = letters[0].map((col, index) =>
        letters.map((row) => row[index])
    );
    const verticalFlip = vertialJoin.map((ls) => ls.join(""));
    console.log(verticalFlip)
    vertialJoin.map((value) => console.log("value", value));
    for (l of horizontalJoin) {
    if (l.includes(word)) return true;
    else {
        for (l of verticalFlip) {
            if (l.includes(word)) return true;
            }
        }
    }
    return false;
};

module.exports = wordSearch