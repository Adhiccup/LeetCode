var distributeCookies = function (cookies, k) {

  let memo = {}, end = cookies.length
  return knapSack(0, Array(k).fill(0))

  function knapSack(start, child) {

    let key = `${start}, ${child.sort((a, b) => a - b)}`
    if (key in memo) return memo[key]

    if (start == end) {
      let max = 0
      for (let i = 0; i < k; i++) {
        let bit = child[i], j = 8
        let sum = 0
        while (j--)
          if (bit & (1 << j))
            sum += cookies[j]

        max = Math.max(max, sum)
      }
      return max
    }
    let ans = 1e6
    for (let i = 0; i < k; i++) {
      let newChild = [...child]
      newChild[i] = (child[i] | (1 << start))
      ans = Math.min(ans, knapSack(start + 1, newChild))
    }
    return memo[key] = ans
  }
}