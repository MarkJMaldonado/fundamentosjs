// // // Ejercicio 1   POO
// // class Person {

// //     constructor(name, age) {
// //         this.name = name
// //         this.age = age


// //     }


// //     saludo() {
// //             return ("Hola me llamo " + this.name)
// //         }
// //         // year() {
// //         //     const date = new Date().getFullYear()
// //         //     const edad = new Date(this.age).getFullYear()
// //         //     return "Tengo " + (date - edad) + " años"

// //     // }
// //     year() {
// //         const date = new Date().getFullYear()
// //         return "Tengo " + (date - this.age) + " años"

// //     }
// // }

// // const Marcos = new Person("Marcos")
// // const Edad = new Person(1992)

// // console.log(Marcos.saludo())
// // console.log(Marcos.year())




// // Ejercicio 2 getters
// class Person {

//     constructor(name, age, counter) {
//         this.name = name
//         this.age = age
//         this.scounter = 0
//         this.ycounter = 0
//     }


//     saludo() {
//         return ("Hola me llamo " + this.name)
//     }

//     year() {
//         const date = new Date().getFullYear()
//         return "Tengo " + (date - this.age) + " años"

//     }
//     incrementa() {
//         this.scounter++
//     }
//     incrementa() {
//         this.ycounter++
//     }
//     get showsCounter() {
//         return this.scounter
// }
// get showyCounter() {
//         return this.ycounter
//     }
// }

// const Marcos = new Person("Marcos")
// const Edad = new Person(1992)

// Marcos.incrementa()
// Marcos.incrementa()
// Marcos.incrementa()
// Marcos.incrementa()
// Marcos.incrementa()

// Edad.incrementa()
// Edad.incrementa()

// // console.log(Marcos.saludo())
// // console.log(Edad.year())
// console.log("Saludos Recibidos " + Marcos.showsCounter)
// console.log("Se verifico el Año  " + Marcos.showyCounter + " veces")

/**
 * Tarea 
 * Ejercicio 3
 * 1.- Crear una clase padre
 * 2.- Extenderla a la clase hijo
 * 3.- Ejecutar un metodo de la clase padre en la clase hijo
 * 4.- Calcular la masa corporal en la clase padre y retornar el resultado
 */

class Padre {
    constructor(height, weight) {
        this.height = height
        this.weight = weight
        this.mcp = 0
    }
    mcPadre() {
        // let mcp = (this.weight / Math.pow(this.height, 2))
        // this.mcp = (this.weight / Math.pow(this.height, 2))
        // const w1 = this.weight
        const h1 = Math.pow(this.height, 2)
        this.mcp = (this.weight / h1)
        return "Mi masa corporal es: " + this.mcp
    }
}
class Hijo extends Padre {
    constructor(name, height, weight) {
        super(height, weight)
        this.name = name
        this.work = true
    }
    saludo() {
        return "Hola, mi nombre es: " + this.name
    }
    get mc() {
        return this.mcPadre()
    }

}

const Marcos = new Hijo("Marcos ", 1.81, 75)

console.log(Marcos.saludo())
console.log(Marcos.mc)
    //console.log(Marcos.mcPadre())