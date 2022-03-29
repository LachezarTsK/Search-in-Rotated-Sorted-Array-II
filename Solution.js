
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    if (nums === undefined || nums === null || nums.length === 0) {
        return false;
    }

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        let pivot = left + Math.floor((right - left) / 2);

        if (nums[pivot] === target) {
            return true;
        }

        if (isApplicableToBinarySearch(nums, left, nums[pivot]) === false) {
            left++;
            continue;
        }

        const pivotIsInFirstHalf = isInFirstHalf(nums, left, nums[pivot]);
        const targetIsInFirstHalf = isInFirstHalf(nums, left, target);

        if (pivotIsInFirstHalf === targetIsInFirstHalf) {
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
};

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} element
 * @return {boolean}
 */
function isInFirstHalf(nums, left, element) {
    return nums[left] <= element;
}

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} element
 * @return {boolean}
 */
function isApplicableToBinarySearch(nums, left, element) {
    return nums[left] !== element;
}
