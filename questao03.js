// let str = 'The revolution'
// let str2 = str.split(' ').join('') // remove the space between characters
// let gridSize = Math.ceil(Math.sqrt(str2.length)) // define the grid size according to the number of characters in the string
// console.log(gridSize)

    const str = 'The revolution'
    const str2 = str.split(' ').join('')
    
    const gridSize = Math.ceil(Math.sqrt(str2.length))
    const myArray1 = str2.match(/.{1,4}/g) // [ 'Ther', 'evol', 'utio', 'n' ]
    let arrNew = []
    let subArray = []
    console.log(myArray1)

    // for (let i = 0; i < myArray1.length; i++) {
    //     subArray += myArray1[i]
    //     // console.log(subArray)
    //     for (let j = 0; i < myArray1[i].length; j++) {      
    //         arrNew = subArray[j]
    //     }
    // // } console.log(arrNew)
        
    // }

