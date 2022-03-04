// # Questão 02
// Given an array with distinct elements, the task is to find the number of pairs in the array such that a - b = x, where x is a given integer.

// solution

let pairNumber = 0 
function NumberOfPairs(arr, num) { 
    
    for (let i=0; i < arr.length; i++) {
        for (let j = i+1; j< arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) === num ) {
                pairNumber += 1
            } 
        }
    } return pairNumber
    
} 

// test

const arrTest = [1, 5, 3, 4, 2]
const numTest = 2
console.log(NumberOfPairs(arrTest, numTest))



