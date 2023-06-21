/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
     
    const n = nums.length;
    if(n<=1) return 0;
    let arr = [];
    for(let i=0;i<n;i++) arr[i] = [nums[i],cost[i]];
    arr.sort((a,b)=>a[0]-b[0]);
    let psum = [arr[0][1]];
    for(let i=1;i<n;i++) psum.push(psum[i-1]+arr[i][1]);
    let sum = 0;
    for(let i=1;i<n;i++){
        sum+= (Math.abs(arr[i][0]-arr[0][0]))*arr[i][1];
    }
    let ans=Infinity;
    ans=Math.min(ans,sum);
    for(let i=1;i<n;i++){
        sum+=(psum[i-1])*(arr[i][0]-arr[i-1][0]);
        sum-=(psum[n-1]-psum[i-1])*(arr[i][0]-arr[i-1][0]);
        ans=Math.min(ans,sum);
    }
    return ans;
};