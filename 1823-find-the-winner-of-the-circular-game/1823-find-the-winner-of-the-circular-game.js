/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let circle = [];
  
    for (let i = 1; i <= n; i++) {
        circle.push(i);
    }
  
    let start = 0;
    while (circle.length > 1) {
        let count = (start + k - 1) % circle.length;
        circle.splice(count, 1);
        start = count % circle.length;
    }
  
    return circle[0];
};