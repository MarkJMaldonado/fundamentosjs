//  const numero = [1, 5, 6]

//  const multiplicacion = (numero) => {
//      for (var x = 0; x < numero.lenght; x++) {
//          numero1 = numero[x] * 2
//      }
//  }
//  multiplicacion(numero)
//  console.log(numero)
//  console.log(numero1)


// const multiply = (num) => {
//     // num = num * 2
//     return num += 2
// }

// console.log(multiply(2)) // 2
// console.log(multiply(2)) // 2
// console.log(multiply(2)) // 2



// const myObj = {
//     name: "Bryan"
// }

// console.log("Before setProp ===>", myObj)

// // Reference
// const setProp = (obj) => {
//     const myNewObj = obj

//     myNewObj.hobbies = ['Read', 'Walk']

//     return myNewObj
// }

// const myNewObj = setProp(myObj)


// console.log("After setProp ===>", myNewObj)
// console.log("After setProp ===>", myObj)



//Tarea

const array = [15, 500, 95, 87, 34, 76]


const arraysquare = array.map(arraysq => Math.pow(arraysq, 2));

console.log("Estos son los elementos al cuadrado: " + arraysquare);

const oddNumber = arraysquare.filter(number => number % 2 == 1)

console.log("Estos son los numeros impares: " + oddNumber)

const oddNumbersum = oddNumber.reduce((total, sum) => total + sum, 0)

console.log("Esta es la suma de los impares: " + oddNumbersum)

console.log("La Raiz cuadrada es: " + Math.sqrt(oddNumbersum))

// //  ejemplo prof


// /**
//  * Ejercicio Tarea
//  *  Ejemplo de arreglo: [15, 500, 95, 87, 34, 76]
//  * 1.- Crear una función que retorne un arreglo iterado por un map que devuelva el numero al cuadrado
//  * 2.- Crear una función que retorne los numeros impares de la respuesta de la función anterior
//  * 3.- Crear una función que sume los numeros impares y devuelva la raíz cuadrada del resultado
//  * IMPORTANTE: Tarea para el martes
//  */

// const originalArray = [15, 500, 95, 87, 34, 76]

// // Devuelve el arreglo original al cuadrado
// const getPow = (nums) => {
//     return nums.map((num) => {
//         return Math.pow(num, 2)
//     })
// }

// const powResult = getPow(originalArray)

// // Devuelve los impares
// const getImpairs = (nums) =>
//     nums.filter((num) => num % 2)

// const impairsResult = getImpairs(powResult)

// // Devuelve la raíz cuadrada de los numeros sumados
// const getSqrt = (nums) => {
//     const addition = nums.reduce((acumulator, current) => {
//         return acumulator += current
//     }, 0)

//     return Math.sqrt(addition)
// }

// const sqrtResult = getSqrt(impairsResult)

// // 129.6880
// console.log(sqrtResult)