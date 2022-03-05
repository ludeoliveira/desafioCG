// # Questão 03

// Write an algorithm that, when receiving a string s, displays the message encrypted according to the rules described.

    function getEncriptedMessage(str) {

        const str2 = str.split(' ').join('')
        const gridSize = Math.ceil(Math.sqrt(str2.length))
        let newArr = []
        let newMessage = ''
        let a = 0
        let b = gridSize 

        for (let i = 0; i < gridSize; i++) {
            newArr.push(str2.slice(a,b))
            a += gridSize
            b += gridSize
        }
    
        for (let i = 0; i < gridSize; i++) { 
            for (let j = 0; j < gridSize; j++) {
                if (newArr[j][i]) {
                    newMessage += newArr[j][i]
                }
            } newMessage += ' '                       
        }  console.log(newMessage)    
    }


 // test
    let strTest = 'ola mundo'
    console.log(getEncriptedMessage(strTest))