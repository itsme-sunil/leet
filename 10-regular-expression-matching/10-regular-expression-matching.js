/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
    const regex = new RegExp(p);
    return s.match(regex)?.includes(s) ? true : false;
}