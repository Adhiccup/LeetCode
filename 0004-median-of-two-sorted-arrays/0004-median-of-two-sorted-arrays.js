function findMedianSortedArrays(nums1, nums2) {
  const merged = [];
  let i = 0;
  let j = 0;
  
  // merge the two arrays
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }
  
  // add any remaining elements from nums1
  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }
  
  // add any remaining elements from nums2
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }
  
  // find the median
  const n = merged.length;
  if (n % 2 === 0) {
    // even number of elements
    const mid = n / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    // odd number of elements
    const mid = Math.floor(n / 2);
    return merged[mid];
  }
}
