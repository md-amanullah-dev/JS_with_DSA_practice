// 1. reverse an array 
const arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.reverse()); // direct method use 
let arr2 = [];
let j = arr.length -1;
for (let i =arr.length -1; i>=0;i--){
    arr2.push(arr[i]) 
}

// 2. find mamimum an array
let i;
let max = arr[0]
for (let i=0;i<arr.length;i++){

    if(arr[i]>max){
        max = arr[i];
    }
}
console.log("maximum number",max)




// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

const arr = [2,7,11,15]
const target = 9

    for(let i = 0; i<arr.length;i++){
        for(let j = i+1; j<arr.length;j++){

        if(arr[i]+arr[j] === target){
            console.log(`[ ${i}, ${j} ]`)
            console.log(arr[i]+arr[j] === target)
            console.log(arr[i]+arr[j] , target)
        }
    }
}
    


