// https://leetcode.com/problems/unique-binary-search-trees/


/*

Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

For example,
Given n = 3, there are a total of 5 unique BST's.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

*/

// Notes: numTreesSome = numTreesLeft * numTreesRight
// When n >=3
//   numTrees(n) = numTrees(i) + numTrees(n - i - 1)
//

/**
 * @param {number} n
 * @return {number}
 **/
var numTrees = function(n) {
  var arr = [1, 1, 2];
  if (n < 3) return arr[n];

  for (var i=3; i <= n; i++) {
    var sub = 0;
    for (var j=0; j < i; j++) {
      sub += arr[j] * arr[i - j - 1];
    };
    arr[i] = sub;
  };
  return arr[n];
};

var n = 3;
r = numTrees(n);
console.log('input', n, 'output:', r);
