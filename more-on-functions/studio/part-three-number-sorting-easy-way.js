//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];



function numberIncreaseArray(nums) {
    nums.sort(function(a,b) {
        return a - b;
    });
    console.log(nums);
}

numberIncreaseArray(nums1);
numberIncreaseArray(nums2);
numberIncreaseArray(nums3);

//Sort each array in decending order.

function numberDecendingArray(nums) {
    nums.sort(function(b,a) {
        return a - b;
    });
    console.log(nums);
}

numberDecendingArray(nums1);
numberDecendingArray(nums2);
numberDecendingArray(nums3);