function getSortedArray(nums1, m, nums2, n) {
  let i = 0,
    j = 0;
  const newArray = [];

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      newArray.push(nums1[i++]);
    } else {
      newArray.push(nums2[j++]);
    }
  }

  while (i < m) {
    newArray.push(nums1[i++]);
  }

  while (j < n) {
    newArray.push(nums2[j++]);
  }

  console.log(newArray);
}

const tests = [
  { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3 },
  { nums1: [4, 5, 6, 0, 0, 0], m: 3, nums2: [1, 2, 3], n: 3 },
  { nums1: [1, 0], m: 1, nums2: [2], n: 1 },
  { nums1: [0], m: 0, nums2: [1], n: 1 },
  { nums1: [2, 0], m: 1, nums2: [1], n: 1 },
  { nums1: [1, 3, 5, 7, 0, 0, 0, 0], m: 4, nums2: [2, 4, 6, 8], n: 4 },
  { nums1: [1, 2, 4, 5, 6, 0, 0, 0], m: 5, nums2: [3, 7, 8], n: 3 },
  { nums1: [4, 0, 0, 0, 0, 0], m: 1, nums2: [1, 2, 3, 5, 6], n: 5 },
  { nums1: [0, 0, 0, 0, 0, 0], m: 0, nums2: [1, 2, 3, 4, 5, 6], n: 6 },
  { nums1: [1, 2, 3, 4, 5, 6], m: 6, nums2: [], n: 0 },
  { nums1: [], m: 0, nums2: [0], n: 1 },
];

tests.forEach(({ nums1, m, nums2, n }) => {
  getSortedArray(nums1, m, nums2, n);
});
