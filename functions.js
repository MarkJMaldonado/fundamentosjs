/* repite sentencias
reutiliza codigo
 */
/*


//ejercicio 1
function greeting(greet) {

    return "Hola" + greet
}

var personaUno = greeting(" Matias")
var personaDos = greeting(" Rogelio")
var personaTres = greeting(" Mario")

console.log(personaUno)
console.log(personaDos)
console.log(personaTres) */


/*     ejercicio 2
function year(age) {
    var date = new Date().getFullYear();
    return "Tienes " + (date - age) + " años"
}
var edad = year(1992)
console.log(edad) */


/*     ejercicio 3

function maxnum(valueOne, valueTwo) {
    if (valueOne > valueTwo) {
        return "El valor mas grande es " + valueOne
    } else {
        return "El valor mas grande es " + valueTwo   
    }
}

var maxOne = maxnum(100, 101)
var maxTwo = maxnum(300, 101)
var maxThree = maxnum(-6, 0)
var maxFour = maxnum(-600, -765)
console.log(maxOne)
console.log(maxTwo)
console.log(maxThree)
console.log(maxoFour)*/

//    ES6    (EcmaScript 6)
//const
//let
//backtips



//arrow functions
//     ejercicio 4 
const greeting = (greet) => "Hola" + greet

var personaUno = greeting(" Matias")
var personaDos = greeting(" Rogelio")
var personaTres = greeting(" Mario")

console.log(personaUno)
console.log(personaDos)
console.log(personaTres)




const year = (age) => {
    var date = new Date().getFullYear()
    return "Tienes " + (date - age) + "años"

}

var edad = year(1992)

console.log(edad)




const maxnum = (valueOne, valueTwo) => valueOne > valueTwo ? "El valor mas grande es " + valueOne : "El valor mas grande es " + valueTwo

var maxOne = maxnum(100, 101)
var maxTwo = maxnum(300, 101)
var maxThree = maxnum(-6, 0)
var maxFour = maxnum(-600, -765)

console.log(maxOne)
console.log(maxTwo)
console.log(maxThree)
console.log(maxFour)