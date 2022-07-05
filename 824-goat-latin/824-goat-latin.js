/**
 * @param {string} sentence
 * @return {string}
 C: words that start with vowels all have 'ma' appended to the end. words that start with consonants get that consonant and 'ma' added to the end.
    we also add extra 'a's to each word
 
 Strategy:
 Split the sentence into an array. 
 Loop through the array. Conditional logic to add letters to the end, and then the extra 'a's at the end
 */
var toGoatLatin = function(sentence) {
    sentence = sentence.split(' ');
    const VOWELS = ['a','e','i','o','u'];
    
    for (let i = 0; i < sentence.length; i++) {
        let word = sentence[i];
        
        if (!VOWELS.includes(word[0].toLowerCase())) {
            word = word.split('');
            word.push(word[0]);
            word = word.slice(1).join('');
        }
        
        word += 'ma';
        
        let appendNumber = i + 1;
        while (appendNumber > 0) {
            word += 'a';
            appendNumber--;
        }
        
        sentence[i] = word;
    }
    
    return sentence.join(' ');
};