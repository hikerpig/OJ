// https://leetcode.com/problems/subsets-ii/
/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets.

Note:

    Elements in a subset must be in non-descending order.
    The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,2], a solution is:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  var out = [[]], len = nums.length, usedNums = [], dupStart = 1;
  nums.sort();
  for (var i=0; i < len; i++) {
    var num = nums[i];
    var mem = [], isDup = false, iteratee, iterLen;
    if (~usedNums.indexOf(num)) {
      isDup = true;
      var sliceStart = dupStart;
      iteratee = out.slice(sliceStart);
    }else {
      iteratee = out;
    }
    iterLen = iteratee.length;
    for (var j=0; j < iterLen; j++) {
      var newArr = iteratee[j].slice();
      addNum(newArr, num);
      mem.push(newArr);
    }
    dupStart = out.length;
    Array.prototype.push.apply(out, mem);
    if (!isDup) usedNums.push(num);
    //console.log('round sep ---------');
  }

  function addNum(arr, num) {
    var len = arr.length, i = len - 1, hasAdded = false;
    //console.log('arr is', arr, 'num is', num);
    if (!len) {
      arr.push(num);
    }else if (num >= arr[i]) {
      arr.push(num);
    }else if (num < arr[0]) {
      arr.unshift(num);
    }else {
      while (i >= 0) {
        var n = arr[i], prevN = arr[i - 1];
        if ((num < n) && ((prevN == void 0) || num > prevN)) {
          arr.splice(i, 0, num);
          hasAdded = true;
          break;
        }
        i--;
      }
    }
    return arr;
  }

  return out;
}


var nums = [1, 2, 2];
nums = [5,5,5,5];
//nums = [4,4,4,1,4]; // [[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]
var r = subsetsWithDup(nums);
console.log(r);
