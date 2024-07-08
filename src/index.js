//função para determinar o array que deve ser utilizado
function getSortedArray(nums1, m, nums2, n) {
  let i = 0,
    j = 0;
  const newArray = [];

  // loop inicial, que compara os arrays até que um seja finalizado
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      newArray.push(nums1[i++]);
    } else {
      newArray.push(nums2[j++]);
    }
  }

  // loops que finalizam a cópia de arrays com o que estiver faltando
  while (i < m) {
    newArray.push(nums1[i++]);
  }
  while (j < n) {
    newArray.push(nums2[j++]);
  }
  return newArray;
}

module.exports = { getSortedArray };
