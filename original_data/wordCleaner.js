let words12 = chapterTwelve.split(" ");

function wordCleaner(word) {
    let final = "";

    const punctuation = [".", "?", "!", ",", "“", ":", ";", "(", ")", "—", "”"];

    for (let i = 0; i < word.length; i++) {
        let char = word[i];

        if (!punctuation.includes(char)) {
            final += char.toLowerCase();
        }
    }
    return final;

};

function wordCounter(words) {

let uniq = {};

words.forEach(ele => {
    let cleaned = wordCleaner(ele);
    if (!uniq[cleaned]) uniq[cleaned] = 0;
    uniq[cleaned] += 1;
});

return uniq;
};

