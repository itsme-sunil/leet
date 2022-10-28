/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = [];
    let groups = {};
    
    // loop
    // if a sorted word equals a key in the object,
    // push it to that key
    // otherwise
    // create the key and a ['word'] value
    strs.forEach(str => {
        sortedStr = str.split('').sort().join('');
        
        if (groups[sortedStr]) {
            groups[sortedStr].push(str)
        } else {
            groups[sortedStr] = [str];
        }
    });
    
    // loop through the object and push the contents of each key to result
    for (sortedStr in groups) {
        result.push(groups[sortedStr]);
    }
    // return result
    return result;
};