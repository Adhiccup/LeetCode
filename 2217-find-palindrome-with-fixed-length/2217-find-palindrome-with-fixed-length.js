/**
 * @param {number[]} queries
 * @param {number} intLength
 * @return {number[]}
 */
var kthPalindrome = function(queries, intLength) {
 const k = (intLength - 1) / 2 ^ 0
    const maxQuery = 10**(k + 1) - 10**k
    
    const result = []
    for (const query of queries) {
        if (query <= maxQuery) {
            const firstHalf = String(query - 1 + 10**(k))
            let secondHalf = firstHalf.split('')
            if (intLength % 2 === 1) {
                secondHalf.pop()
            }
            result.push(Number(firstHalf + secondHalf.reverse().join('')))
        } else {
            result.push(-1)
        }
    }

    return result
};
