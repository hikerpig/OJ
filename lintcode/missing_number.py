#http://www.lintcode.com/zh-cn/problem/find-the-missing-number/

class Solution:
    tested_idxes = []
    list_len = 0
    # @param nums: a list of integers
    # @return: an integer
    def findMissing(self, nums):
        nums.sort()
        self.list_len = len(nums)
        if nums[self.list_len - 1] == self.list_len - 1:
            return self.list_len
        if nums[0] != 0:
            return 0
        n = self._findBetween(nums, 0, self.list_len - 1)
        self.tested_idxes = []
        return n

    def _findBetween(self, nums, start, end):
        c = int((start + end) / 2)
        if c in self.tested_idxes:
            c += 1
        self.tested_idxes.append(c)
        n = nums[c]
        #print 'c is', c, 'n is', n
        if c < n:
            if nums[c - 1] == (c - 1):
                return c
            return self._findBetween(nums, start, c)
        else:
            if c > n:
                if nums[c] == (c + 1):
                    return c
            return self._findBetween(nums, c, end)


s = Solution()
#n = s.findMissing([0, 2, 3,  4])
#n = s.findMissing([9,8,7,6,2,0,1,5,4])
#n = s.findMissing([0])
l = []
l = range(0, 900000)
l.remove( 0 )
n = s.findMissing(l)
print 'got', n

#0 1 2 3 4 5
#0 1 3 4 5


