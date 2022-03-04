// # Questão 01
// calculate the median of an unsorted array
// 1.sort the array
// 2.get median value

function median(arr) {
    const sortedArr = arr.sort((a,b) => a-b) // sort the array
    return sortedArr[Math.floor(sortedArr.length/2)] // get median value 
}

// test

const arrTest = [9, 2, 1, 4, 6]
console.log(median(arrTest))