function hasTargetSum(array, target) {
 const wantedNumbers = {};

  
  for (let num of array) {
    
    const complement = target - num;

   
    if (wantedNumbers[complement]) {
      return true;
    }

    
    wantedNumbers[num] = true;
} 
return false;
}

console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); 
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));   
console.log(hasTargetSum([1, 2, 5], 4));             

/* 
  Big O time complexity of function here
  O(n) linear time complexity algorithm, because it iterates over the array once, with constant number of times making it linear gradually
*/

/* Pseudocode:
1. Create an empty object called `wantedNumbers` to keep track of numbers we've seen.
2. For each number `num` in the `array`:
   a. Calculate the `complement` as `target - num`.
   b. Check if `complement` exists in `wantedNumbers`.
   c. If found, return true (a pair with the sum `target` exists).
   d. Otherwise, mark `num` as "wanted" by adding it as a key in `wantedNumbers`.
3. If no pairs are found after iterating through the array, return false.

 
*/

/*
  initialized the wantedNumbers fnc to keep track of the wanted numbers
 iterate over the array for each number
 -calculate the complemenet ( num + num = wanted number)
 - if found return true
 - if not found after iteration return false 
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
