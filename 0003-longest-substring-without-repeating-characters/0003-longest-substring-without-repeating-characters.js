/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    let longestLength = 0;
    let left = 0; // left pointer of the sliding window
    const visited = new Set();

    for (let i = 0; i < n; i++) {
        while (visited.has(s[i])) {
            visited.delete(s[left]);
            left++;
        }
        visited.add(s[i]);
        longestLength = Math.max(longestLength, i - left + 1);
    }

    return longestLength;
};