

let Array = [1, 2, 3, 4, 5, 6, 10 ]

/**
 * Faça a função retornar um array somente com os números pares
 * @param numeros 
 */

const pares = (array) => {
    return array.filter(atual => atual % 2 == 0)
}

console.log(pares(Array))

console.log(`************************************`) 

/**
 * Complete a função para retornar a soma de todos os números do vetor
 * @param numeros 
*/

const soma = (array) => {
        let sum = 0;
        for (let i= 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum
}

console.log(`A soma de todos os itens desse vetor é: ${soma(Array)}.`); 

console.log(`************************************`) 

/**
 * Complete a função para retornar um vetor com o quadrado de cada valor
 * @param numeros 
*/

const square = (array) => {
    return array.map(atual => Math.pow(atual, 2))
}

console.log(square(Array))

console.log(`************************************`) 