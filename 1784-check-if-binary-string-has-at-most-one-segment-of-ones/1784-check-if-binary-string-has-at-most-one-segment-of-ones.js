/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let firstOne = false;
    let firstZeroAfterFirstOne = false;
    
    for (let i = 0; i < s.length; i++) {
        if (firstOne && firstZeroAfterFirstOne) {
            if (s[i] === '1') return false;
        }
        
        if (firstOne && !firstZeroAfterFirstOne) {
            if (s[i] === '0') firstZeroAfterFirstOne = true;
        }
        
        if (!firstOne && !firstZeroAfterFirstOne) {
            if (s[i] === '1') firstOne = true;
        }
    }
    
    return true;
};