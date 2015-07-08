// https://leetcode.com/problems/generate-parentheses/

//For example, given n = 3, a solution set is:

//    "((()))", "(()())", "(())()", "()(())", "()()()"

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var arr = [];
  genP(n, n, '');
  return arr;

  function genP(left, right, cur) {
    if (right == 0) {
      arr.push(cur);
      return
    };

    if (left == right) {
      genP(left - 1, right, cur + '(');
      return
    }

    if (left > 0) {
      genP(left - 1, right, cur + '(');
    };

    genP(left, right - 1, cur + ')');
  }
};

var n;
n = 3;
var result = generateParenthesis(n);
console.log('result', result);
