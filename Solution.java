
public class Solution {

    public boolean search(int[] nums, int target) {
        if (nums == null || nums.length == 0) {
            return false;
        }

        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {

            int pivot = left + (right - left) / 2;

            if (nums[pivot] == target) {
                return true;
            }

            if (isApplicableToBinarySearch(nums, left, nums[pivot]) == false) {
                left++;
                continue;
            }

            final boolean pivotIsInFirstHalf = isInFirstHalf(nums, left, nums[pivot]);
            final boolean targetIsInFirstHalf = isInFirstHalf(nums, left, target);

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

    private boolean isInFirstHalf(int[] nums, int left, int element) {
        return nums[left] <= element;
    }

    private boolean isApplicableToBinarySearch(int[] nums, int left, int element) {
        return nums[left] != element;
    }
}
