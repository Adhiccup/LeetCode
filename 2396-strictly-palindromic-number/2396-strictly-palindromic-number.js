/**
 * @param {number} n
 * @return {boolean}
 */

function isPalindrome(s) {
  return s === s.split("").reverse().join("");
}

var isStrictlyPalindromic = function(n) {
    for (let b = 2; b <= n - 2; b++) {
        // Convert n to a string in base b
        let digits = [];
        let t = n;
        while (t > 0) {
          digits.push(t % b);
          t = Math.floor(t / b);
        }
        let s = digits.reverse().join("");

        // Check if s is a palindrome
        if (!isPalindrome(s)) {
          return false;
        }
    }

    return true;
};