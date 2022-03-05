# Desafio de programação CAPGEMINI 02

A linguagem escolhida para resolução do desafio foi JavaScript. Cada questão tem um arquivo `.js` e um `.html` correspondente. Para rodar o cógigo, abra o arquivo *html*  em seu navegador de preferência, clique com o botão direito em qualquer local da página, escolha *inspecionar* e acesse o console no painel recém aberto. Ao recarregar a página o resultado do teste aparecerá no console.

## Questão 01

### problem: calculate the median of an unsorted array
**solution code:** [questao01.js](https://github.com/ludeoliveira/desafioCapgemini02/blob/main/questao01.js)

**solution description:** I solved the problem by writing an function wich first sort the array then return the median value of this given array.

**1.** sort the array: 

`const sortedArr = arr.sort((a,b) => a-b)`

I used the method `.sort()` with the given function to sort the values of the array in ascending order.

**2.** get the median value:

`return sortedArr[Math.floor(sortedArr.length/2)]`

Return the median value of the sorted array by finding the middle index since the array has an uneven number of elements. we find this index by dividing the length of the array by two and then rounding the obtained number with the `Math.floor()` method.

### problema: calcular a mediana de um array não ordenado

**Codigo da solução:** [questao01.js](https://github.com/ludeoliveira/desafioCapgemini02/blob/main/questao01.js)

**descrição:** Resolvi o problema usando JavaScript escrevendo uma função que primeiro ordena o array e depois retorna o valor mediano desse determinado array.

**1.** ordenar o array: 

`const sortedArr = arr.sort((a,b) => a-b)`

Usei o método `.sort()` com a função dada para ordenar os valores do array em ordem crescente.

**2.** obter o valor mediano: 

`return sortedArr[Math.floor(sortedArr.length/2)]`

Retornamos o valor mediano do array ordenado encontrando o índice do meio, já que o array tem um número ímpar de elementos. encontramos esse índice dividindo o comprimento do array por dois e então arredondando o número obtido com o método `Math.floor()`.

## Questão 02 

### problem: Given an array with distinct elements, the task is to find the number of pairs in the array such that a - b = x, where x is a given integer.

**solution code:** [questao02.js](https://github.com/ludeoliveira/desafioCapgemini02/blob/main/questao02.js)

**solution description:** First I used two nested loops to check all possible pairs *(i,j)* in the array. Second, I tested if each pair match the given condition ( if the difference between *i* and *j* is equal to the given integer *(num)*). `Math.abs()` returns the absolute value of this difference. If the condition is true, 1 is added to the variable `pairNumber`, if it is false, nothing happens with the variable. When the loop ends, the updated `pairNumber` value is returned.

### problema: Dado um array com elementos distintos, a tarefa é encontrar o número de pares no array tal que a - b = x, onde x é um dado inteiro.

**Codigo da solução:** [questao02.js](https://github.com/ludeoliveira/desafioCapgemini02/blob/main/questao02.js)

**descrição:** Primeiro, usei dois loops aninhados para verificar todos os pares possíveis *(i,j)* no array. Em segundo lugar, testei se cada par corresponde à condição fornecida (se a diferença entre *i* e *j* for igual ao inteiro fornecido *(num)*). `Math.abs()` retorna o valor absoluto desta diferença. Se a condição for verdadeira, 1 é adicionado à variável `pairNumber`, se for falso, nada acontece com a variável. Quando o loop termina, o valor de `pairNumber` atualizado é retornado.

## Questão 03 

### problem: Write an algorithm that, when receiving a string s, displays the message encrypted according to the rules described.

**solution code:** [questao03.js](https://github.com/ludeoliveira/desafioCapgemini02/blob/main/questao03.js)

**solution description:**

`const str2 = str.split(' ').join('')` remove the space between characters

`const gridSize = Math.ceil(Math.sqrt(str2.length))` define the grid size according to the number of characters in the string

 The first loop inside the function creates a **two dimensional array** (as in an *array of arrays*) from the string parsed to the function argument. The subsequent nested for loop iterates trough the elements with the same index of the `newArray`.
