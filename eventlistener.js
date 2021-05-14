// const Person = require('./poo')
// import Person from './poo'

// Event listeners
document.getElementById("my-title").addEventListener('click', () => {
    const nombre = prompt("Cual es tu nombre?")
    console.log("Nombre ===>", nombre)
})

/**
 * Ejercicio 1
 * 1.- Sobre el label de globo
 * 2.- usando event listeners, inflar el globo
 * Tiempo: 5min
 */

const labelGlobo = document.getElementById("globo")
let ballonSize = 10

labelGlobo.addEventListener('click', () => {

    // ballonSize = ballonSize + 5
    ballonSize += 5
    console.log("Llamando globo", ballonSize)
        // labelGlobo.style.fontSize = ballonSize + "px"
        // labelGlobo.style.fontSize = `${ballonSize}px`
    labelGlobo.style.cssText = `cursor: pointer; font-size: ${ballonSize}px;`

})



/**
 * Ejercicio 2
 * 1.- Sobre un nuevo event listener
 * 2.- escoger en un nuevo mouse event y decrementar el tamaño de mi globo
 * Tiempo: 8min
 */

// window.addEventListener('scroll', () => {
//   console.log("Scroll is happening", window.scrollY)
//   labelGlobo.style.cssText = `cursor: pointer; font-size: ${window.scrollY}px;`
// })

labelGlobo.addEventListener('mouseout', () => {
    // ballonSize = ballonSize + 5
    ballonSize -= 5
    console.log("Llamando globo", ballonSize)
        // labelGlobo.style.fontSize = ballonSize + "px"
        // labelGlobo.style.fontSize = `${ballonSize}px`
    labelGlobo.style.cssText = `cursor: pointer; font-size: ${ballonSize}px;`
})




/**
 * Como sacar valores de los inputs?
 */

// const altura = document.getElementById("height")
// const peso = document.getElementById("weight")
// const resultText = document.getElementById("result-addition")

// let valueAltura = 0
// let valuePeso = 0

// altura.addEventListener("input", (event) => {
//   // valueAltura = +event.target.value
//   valueAltura = Number(event.target.value)
//   console.log("Event ==>", valueAltura)
//   resultText.textContent = valueAltura + valuePeso

//   const Bryan = new Person("Bryan", "12/05/1993", 1.81, 80)
//   resultText.textContent = Bryan.calculateIMC()
// })

// peso.addEventListener("input", (event) => {
//   valuePeso = Number(event.target.value)
//   console.log("Event ==>", valuePeso)
//   resultText.textContent = valueAltura + valuePeso
// })

/**
 * Tarea
 * 1.- Usando la misma clase con el metodo de calcular IMC que se llevaron de tarea
 *    a.- Importar el archivo de POO para que no tengan que re-escribir codigo
 *
 * 2.- Agregar el resultado en una etiqueta H2
 *    a.- El resultado debe tener una etiqueta: "Estás en tu peso ideal", "E"
 *    c.- El resultado podría ser: "25.5 tienes sobre-peso" o "24 estás en tu peso ideal"... inventar los textos
 *
 * 3.- Cada que haya un cambio el valor y la etiqueta debe ser actualizada
 *
 * 4.- Dudas o preguntas ponerlas en el mismo thread que Jeniffer puso en slack
 *
 * 5.- Utilizar controles de flujo para mostrar las etiquetas (Ifs, if else, else if etc)
 */


const altura = document.getElementById("height")
const peso = document.getElementById("weight")
const resultText = document.getElementById("result-addition")

let valueAltura = 0
let valuePeso = 0

altura.addEventListener("input", (event) => {
    // valueAltura = +event.target.value
    valueAltura = Number(event.target.value)
    const Bryan = new Person("Bryan", "12/05/1993", valueAltura, valuePeso)
    resultText.textContent = Bryan.calculateIMC()
})

peso.addEventListener("input", (event) => {
    valuePeso = Number(event.target.value)
    const Bryan = new Person("Bryan", "12/05/1993", valueAltura, valuePeso)
    resultText.textContent = Bryan.calculateIMC()
})

// console.log( "getImpairs([1,2,3,4]) ===>", getImpairs([1,2,3,4]) )
// Tomamos los valores del input. Todos los valores de un input son de tipo texto.
const arrayInput = document.getElementById("array-input")
const arrayText = document.getElementById("result-array")
arrayInput.addEventListener("input", (event) => {
    // Convierte el event.targe.value a un arreglo cuando los valores estén separados por ,
    const myArray = event.target.value.split(",")

    // Shorcut para convertir strings a numeros usando map
    // const convertedArray = myArray.map(Number)
    const convertedArray = myArray.map((num) => Number(num))

    // Revisamos si no es array, mostramos un error en la etiqueta
    if (!Array.isArray(myArray) || myArray.length === 1) {
        arrayText.textContent = "No es un array"
    } else {
        // Si es array entonces regresamos el resultado de la función
        arrayText.textContent = getImpairs(convertedArray)
    }
})


/**
 * Actividad con localstorage
 * 1.- En el event listener de inflar globo, guardar en local storage si ya infló el globo.
 * 2.- Si al refrescar la pantalla el globo había sido inflado, mantener el tamaño en el que estaba.
 * https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
 * 
 */