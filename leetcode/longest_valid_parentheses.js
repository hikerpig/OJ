// https://leetcode.com/problems/longest-valid-parentheses/
/*
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
 */

// Notes: Add ')' as the bottom node to avoid empty stack

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  var slen = s.length, c, maxLen = 0, stack = [];
  function Node(c, i) {
    this.c = c;
    this.i = i;
  }
  stack.push(new Node(')', -1))
  for (var i=0; i < slen; i++) {
    c = s[i];
    if (c == '(') {
      stack.push(new Node(c, i));
    } else if (c === ')') {
      var prev = stack[stack.length - 1];
      //console.log('prev is', prev);
      if (!prev) {continue}
      if (prev.c === '(') {
        stack.pop();
        //console.log('got ()', stack, 'i is', i);
        maxLen = Math.max(maxLen, i - stack[stack.length - 1].i);
      } else {
        stack.push(new Node(c, i));
      }
    }
  }
  return maxLen;
};

var s = ')()())';
s = '(()';
s = '(()((())))';
//s = ')';
//s = ')(';
//s = '())';
//s = '()(()';
var r = longestValidParentheses(s);
console.log(r);

