function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement)
        return true;
    }
  }
  return false;
}
/*
  Write the Big O time complexity of your function here
hasTargetSum = O(n^2)
n = length.array
 outer loop
 inner loop
 result
*/

/*
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  Outer loop:
   (for (let i = 0; i < array.length; i++)) - iterates over each element
   complement is calculated =  (const complement = target - array[i])
  Inner Loop:
     (for (let j = i + 1; j < array.length; j++))  - iterates over elements to the right of current element
     if (array[j] === complement) - checks if current element is equal to the complement
     returns true
  No pair after both loops , returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
