// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

function search(arr, val) {
    if (arr[0] === val) return true;
    if (arr.length === 0) return false;
    return search(arr.slice(1), val);
}

console.log(search([1, 2, 3, 4, 5], 3)); // true


