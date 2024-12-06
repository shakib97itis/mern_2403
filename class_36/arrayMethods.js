// 1
// Remove Duplicates
// Write a function that takes an array and returns a new array with all duplicates removed.
// Example:
removeDuplicates([1, 2, 3, 1, 4, 2]);
// Output: [1, 2, 3, 4]

/**
 * Removes duplicates value in an array
 * @param {Array} arr
 */

function removeDuplicates(arr) {
  const filteredArray = arr.filter(
    (item, index) => arr.indexOf(item) === index
  );
  console.log(filteredArray);
}

// 2
// Reverse an Array
// Create a function that reverses the elements of an array without using the reverse() method.
// Example:
reverseArray([1, 2, 3]);
// Output: [3, 2, 1]

/**
 * Reverse an array
 * @param {Array} arr
 */
function reverseArray(arr) {
  const reversedArray = arr.slice().reverse();
  console.log(reversedArray);
}

// 3
// Find the Index
// Write a function that returns the index of a specific value in an array using findIndex(). If not found, return -1.
// Example:
findIndex([10, 20, 30], 20);
// Output: 1

/**
 * Find the index of a given array.
 * @param {Array} arr
 * @param {Number} value
 */
function findIndex(arr, value) {
  const index = arr.indexOf(value);
  console.log("findIndex: ", index);
}

// 4
// Sum of Elements
// Write a function that calculates the sum of all elements in an array using reduce().
// Example:
sumArray([1, 2, 3, 4]); // Output: 10

/**
 * Sum of given array.
 * @param {Array} arr
 */
function sumArray(arr) {
  const sum = arr.reduce((acc, value, i, arr) => {
    return (acc += value);
  }, 0);
  console.log("sumArray: ", sum);
}

// 5
// Flatten a Nested Array
// Write a function that flattens a nested array into a single array.
// Example:
flattenArray([1, [2, [3, [4]]]]); // Output: [1, 2, 3, 4]

/**
 * Flatten a nested array
 * @param {Array} arr
 */

function flattenArray(arr) {
  console.log("flattenArray: ", arr.flat(Infinity));
}

// Problem 6
// Filter Even Numbers
// Create a function that filters out all the even numbers from an array using filter().
// Example:
filterEvens([1, 2, 3, 4, 5]); // Output: [2, 4]
/**
 * Filter even numbers of a given array
 * @param {Array} arr
 */

function filterEvens(arr) {
  const evenArray = arr.filter((item) => item % 2 === 0);
  console.log(evenArray);
}

// Problem 7
// Sort Alphabetically
// Write a function to sort an array of strings alphabetically using sort().
// Example:
sortStrings(["banana", "apple", "cherry"]);
// Output: ["apple", "banana", "cherry"]

/**
 * Sort Alphabetically
 * @param {[String]} arr
 */

function sortStrings(arr) {
  const sortedArray = [...arr].sort();
  console.log("sortStrings: ", sortedArray);
}

// Problem 8
// Find Duplicates
// Write a function that returns an array of all duplicate elements in the input array.
// Example:
findDuplicates([1, 2, 2, 3, 4, 4]); // Output: [2, 4]
/**
 * Find duplicates of a given array of numbers
 * @param {[Number]} arr
 */
function findDuplicates(arr) {
  const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
  console.log("Duplicates: ", duplicates);
}

// Problem 9 - Group by Property
// Write a function that groups an array of objects by a specified property.
// Example:
groupBy([{ age: 20 }, { age: 25 }, { age: 20 }], "age");
// Output: { 20: [{age: 20}, {age: 20}], 25: [{age: 25}] }

/**
 * Groups an array of objects by a specified property
 * @param {[Object]} arr
 */

function groupBy(arr, property) {
  const result = arr.reduce((acc, obj) => {
    const key = obj[property];

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(obj);
    return acc;
  }, {});

  console.log(result);
}

// Partition an Array
// Write a function that splits an array into two subarrays: one with elements that satisfy a condition, and another with elements that don’t.
// Example:
partitionArray([1, 2, 3, 4], (x) => x % 2 === 0);
// Output: [[2, 4], [1, 3]]

/**
 * Partition an array.
 * @param {[Number]} arr
 * @param {Function} condition
 *
 * Steps to solve:
 * - Initialize 2 empty array. [[array 1],[array 2]]
 * - Loop over the array argument.
 * - Check the condition.
 * -    if the condition true
 * -        Push the item to array 1
 * -    else
 * -        Push the item to array 2
 * - return the 2 nested array after loop ends.
 */

function partitionArray(arr, condition) {
  const result = arr.reduce(
    (prev, curr, index) => {
      const conditionResult = condition(curr);
      if (conditionResult) {
        prev[0].push(curr);
      } else {
        prev[1].push(curr);
      }
      return prev;
    },
    [[], []]
  );

  console.log(result);
}

// Count Occurrences
// Write a function that counts the occurrences of each element in an array.
// Example:
countOccurrences([1, 2, 2, 3, 1]);
// Output: { 1: 2, 2: 2, 3: 1 }

/**
 * Count Occurrence
 * @param {[Number]} arr
 *
 * Steps to solve -
 * - Create a result object.
 * - Loop over the argument array and take the value.
 * - Check if the value exist in result object as a key.
 * - if not then create a key with value with initial value 0f 0.
 * - then every iteration add on to the result object.
 */

function countOccurrences(arr) {
  const result = arr.reduce((prev, current, index) => {
    if (!prev[current]) {
      prev[current] = 0;
    }
    prev[current] += 1;
    return prev;
  }, {});

  console.log(result);
}

// Custom Map Implementation
// Create a function that replicates the behavior of map() using a for loop.
// Example:
customMap([1, 2, 3], (x) => x * 2);
// Output: [2, 4, 6]

/**
 * Custom Map function
 * @param {Array} Arr
 * @param {Function} callBack
 *
 * Steps to solve -
 * Create a variable name result which has an empty array.
 * Loop over the argument array. arr.
 * Run the callBack condition with every element of the array.
 * Store the return value of the callback function in the result array.
 * end of the loop return the result array.
 */

function customMap(arr, callBack) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callBack(arr[i]));
  }
  console.log("Custom Map", result);
}

// Chunk an Array
// Write a function that splits an array into chunks of a specified size.
// Example:
chunkArray([1, 2, 3, 4, 5], 2);
// Output: [[1, 2], [3, 4], [5]]

/**
 * Chunk an Array.
 * @param {Arr} arr
 * @param {Number} size
 */
function chunkArray(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  console.log("Chunk Array: ", result);
}

// Find Max and Min
// Write a function that returns the maximum and minimum values in an array.
// Example:
findMinMax([1, 2, 3, 4, 5]);
// Output: { max: 5, min: 1 }

/**
 * Find Max and Min
 * @param {[Number]} arr
 */

function findMinMax(arr) {
  let minValue = Infinity;
  let maxValue = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  console.log("Min Max: ", { min: minValue, max: maxValue });
}

// Intersection of Two Arrays
// Write a function that returns the common elements between two arrays.
// Example:
intersect([1, 2, 3], [2, 3, 4]);
// Output: [2, 3]

/**
 * Intersection of two arrays
 * @param {[Number]} arr1
 * @param {[Number]} arr2
 */
function intersect(arr1, arr2) {
  let set = new Set(arr1);
  let result = [];

  for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  console.log("Intersection: ", result);
}
