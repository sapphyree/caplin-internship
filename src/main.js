import axios from "axios";

const main = async () => {
    // GET data as string.
    console.log('Getting data..');
    try {
        const response = await axios.get('https://www.gutenberg.org/cache/epub/29364/pg29364.txt');
        var page = response.data.toLowerCase();
        console.log('Processing data...');

        var words = splitString(page);

    }
    catch (error) {
        console.error(error);
    }

    // Construct dict
    var dictLetterCounts = {'a': 0,'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0};

    // Get first set of values
    for (const [key, value] of Object.entries(dictLetterCounts)) {
        let count = countLetters(key, words);
        dictLetterCounts[key] = count;
    }

    var largestVal = 0;
    var largestKey = '';

    // Handle double-hyphens
    var hyphenMatch = page.match(/-{2}\w*/g);
    var hyphenatedWords = hyphenMatch.map(s => s.slice(2));
    
    for (const [key, value] of Object.entries(dictLetterCounts)) {
        let count = countLetters(key, hyphenatedWords);
        dictLetterCounts[key] += count;
    }

    for (const [key, value] of Object.entries(dictLetterCounts)) {
            let sum = getSum(dictLetterCounts)
            console.log(`Words starting with '${key}': ${value} at ${((value/sum)*100).toPrecision(4)}% frequency.`);
            if (value > largestVal) {
                largestVal = value;
                largestKey = key;
            }
    }

    console.log(`Total word count: ${getSum(dictLetterCounts)}`);
    console.log(`Letter that starts most words: '${largestKey}' at ${largestVal} words.`);
}

const splitString = (str) => {
    let words = str.split(/(["'[(_ ])/g);
    return words
}

const getSum = (dict) => { 
    var sum = 0; 
    for(const v of Object.values(dict)){ 
      sum = sum + v; 
    } 
    return sum; 
} 

const countLetters = (letter, words) => {
    var count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(letter) || ((words[i].startsWith('(') || words[i].startsWith('_') || words[i].startsWith("'") || words[i].startsWith('"')) && words[i+1].startsWith(letter)))
            count++;
    }
    return count
}

main();