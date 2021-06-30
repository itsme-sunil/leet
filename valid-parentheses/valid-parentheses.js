
var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        let open = s[i];
        if (matchingParens[open] === s[i + 1]) {
            s = s.slice(0, i) + s.slice(i + 2);
            return isValid(s);
        }
    }
    
    return s.length < 1;
};

const matchingParens = {
    '(': ')',
    '[': ']',
    '{': '}'
}