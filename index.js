const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;

const nums2 = [2, 5, 6];
const n = 3;

const newArray = [];

for (let i = 0; i < m; i++) newArray.push(nums1[i]);
for (let i = 0; i < n; i++) newArray.push(nums2[i]);

for (let i = 0; i < m + n; i++) {
  for (let j = 1; j < m + n - i; i++) {
    if (newArray[i] > newArray[j]) {
      const previousValue = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = previousValue;
    }
  }
}

console.log(newArray);
