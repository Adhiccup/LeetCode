function sol(i, dif, arr, dp) {
  if (i >= arr.length) {
    if (dif===0) return 0; 
    else return -1e9;
  }
  if (dp[i][dif + 5000] !== -1) return dp[i][dif + 5000];
  return dp[i][dif + 5000] = Math.max(
    arr[i]+sol(i + 1, dif + arr[i] ,arr, dp),
    sol(i + 1, dif - arr[i], arr, dp),
    sol(i + 1, dif, arr, dp)
  );
}

var tallestBillboard = function(rods) {
  const n = rods.length;
  const sum = rods.reduce((acum, cur) => acum + cur, 0);
  let dp = Array(n + 1).fill(0).map(() => Array(10000 + 1).fill(-1));
  let ans = sol(0, 0 ,rods, dp);
  return ans;
};