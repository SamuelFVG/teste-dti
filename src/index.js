// Function to get the result array by merging and sorting nums1 and nums2
function getSortedArray(nums1, m, nums2, n) {
  let i = 0,
    j = 0;
  const newArray = [];

  // Initial loop, compares both arrays and finishes when one of them is added
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      newArray.push(nums1[i++]);
    } else {
      newArray.push(nums2[j++]);
    }
  }

  // Loops that end the process by adding the remaining items
  while (i < m) {
    newArray.push(nums1[i++]);
  }
  while (j < n) {
    newArray.push(nums2[j++]);
  }
  return newArray;
}

module.exports = { getSortedArray };
