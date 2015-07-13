// https://leetcode.com/problems/subsets/
/**
Given a set of distinct integers, nums, return all possible subsets.
Note:

    Elements in a subset must be in non-descending order.
    The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var out = [[]], len = nums.length;
  for (var i=0; i < len; i++) {
    var num = nums[i];
    var outLen = out.length;
    for (var j=0; j < outLen; j++) {
      var newArr = out[j].slice();
      addNum(newArr, num);
      out.push(newArr);
    };
  };

  // recursive way
  //comp([], nums);
  //function comp(cur, arr) {
  //  if (!arr.length) return;
  //  arr.forEach(function(item, i) {
  //    var newArr = arr.slice(),
  //      n = newArr.splice(i, 1),
  //      newCur = cur.slice();
  //    addNum(newCur, item);
  //    out.push(newCur);
  //    comp(newCur, newArr);
  //  });
  //}

  function addNum(arr, num) {
    var len = arr.length, i = len - 1, hasAdded = false;
    console.log('arr is', arr, 'num is', num);
    if (!len) {
      arr.push(num);
    }else if (num > arr[i]) {
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
        };
        i--;
      }
    }
    return arr;
  }

  return out;
};

var nums = [1, 2, 3, 4];
nums = [1,2,3,4,5,6,7,8,10,0];
nums = [4,1,0]; // [[],[4],[1],[1,4],[0],[0,4],[0,1],[0,1,4]]
//nums = [1, 2]; // [[],[1],[2],[1,2]]
//nums = [1,2,3]; // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
nums = [1,9,8,3,-1,0];
// [[],[1],[9],[1,9],[8],[1,8],[8,9],[1,8,9],[3],[1,3],[3,9],[1,3,9],[3,8],[1,3,8],[3,8,9],[1,3,8,9],[-1],[-1,1],[-1,9],[-1,1,9],[-1,8],[-1,1,8],[-1,8,9],[-1,1,8,9],[-1,3],[-1,1,3],[-1,3,9],[-1,1,3,9],[-1,3,8],[-1,1,3,8],[-1,3,8,9],[-1,1,3,8,9],[0],[0,1],[0,9],[0,1,9],[0,8],[0,1,8],[0,8,9],[0,1,8,9],[0,3],[0,1,3],[0,3,9],[0,1,3,9],[0,3,8],[0,1,3,8],[0,3,8,9],[0,1,3,8,9],[-1,0],[-1,0,1],[-1,0,9],[-1,0,1,9],[-1,0,8],[-1,0,1,8],[-1,0,8,9],[-1,0,1,8,9],[-1,0,3],[-1,0,1,3],[-1,0,3,9],[-1,0,1,3,9],[-1,0,3,8],[-1,0,1,3,8],[-1,0,3,8,9],[-1,0,1,3,8,9]]
nums = [1,8,3,-1,0];
var r = subsets(nums);
console.log(r);
