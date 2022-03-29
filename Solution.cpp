
#include <vector>
using namespace std;

class Solution {
    
public:

    bool search(vector<int>& nums, int target) {
        if (nums.size() == 0) {
            return false;
        }

        int left = 0;
        int right = nums.size() - 1;

        while (left <= right) {

            int pivot = left + (right - left) / 2;

            if (nums[pivot] == target) {
                return true;
            }

            if (isApplicableToBinarySearch(nums, left, nums[pivot]) == false) {
                left++;
                continue;
            }

            const bool pivotIsInFirstHalf = isInFirstHalf(nums, left, nums[pivot]);
            const bool targetIsInFirstHalf = isInFirstHalf(nums, left, target);

            if (pivotIsInFirstHalf == targetIsInFirstHalf) {
                if (nums[pivot] < target) {
                    left = pivot + 1;
                } else {
                    right = pivot - 1;
                }
                continue;
            }

            if (pivotIsInFirstHalf) {
                left = pivot + 1;
            } else {
                right = pivot - 1;
            }
        }
        return false;
    }

private:

    bool isInFirstHalf(const vector<int>& nums, int left, int element) const {
        return nums[left] <= element;
    }

    bool isApplicableToBinarySearch(const vector<int>& nums, int left, int element) const {
        return nums[left] != element;
    }
};
