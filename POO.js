// // // // Ejercicio 1   POO
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

// // // const Marcos = new Person("Marcos")
// // // const Edad = new Person(1992)

// // // console.log(Marcos.saludo())
// // // console.log(Marcos.year())




// // // Ejercicio 2 getters
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
//     }
//     get showyCounter() {
//         return this.ycounter
//     }
// }

// // const Marcos = new Person("Marcos")
// // const Edad = new Person(1992)

// // Marcos.incrementa()
// // Marcos.incrementa()
// // Marcos.incrementa()
// // Marcos.incrementa()
// // Marcos.incrementa()

// // Edad.incrementa()
// // Edad.incrementa()

// // // console.log(Marcos.saludo())
// // // console.log(Edad.year())
// // console.log("Saludos Recibidos " + Marcos.showsCounter)
// // console.log("Se verifico el Año  " + Marcos.showyCounter + " veces")

// /**
//  * Tarea 
//  * Ejercicio 3
//  * 1.- Crear una clase padre
//  * 2.- Extenderla a la clase hijo
//  * 3.- Ejecutar un metodo de la clase padre en la clase hijo
//  * 4.- Calcular la masa corporal en la clase padre y retornar el resultado
//  */

// class Padre {
//     constructor(height, weight) {
//         this.height = height
//         this.weight = weight
//         this.mcp = 0
//     }
//     mcPadre() {
//         // let mcp = (this.weight / Math.pow(this.height, 2))
//         // this.mcp = (this.weight / Math.pow(this.height, 2))
//         // const w1 = this.weight
//         const h1 = Math.pow(this.height, 2)
//         this.mcp = (this.weight / h1)
//         return "Mi masa corporal es: " + this.mcp
//     }
// }
// class Hijo extends Padre {
//     constructor(name, height, weight) {
//         super(height, weight)
//         this.name = name
//         this.work = true
//     }
//     saludo() {
//         return "Hola, mi nombre es: " + this.name
//     }
//     get mc() {
//         return this.mcPadre()
//     }

// }

// const Marcos = new Hijo("Marcos ", 1.81, 75)

// console.log(Marcos.saludo())
// console.log(Marcos.mc)
//     //console.log(Marcos.mcPadre())













// Programación orientada a objetos
// Sesión 5
// Paradigma: Es un modelo a seguir para resolver una problematica.


// Modelos/Paradigmas 
// Programación imperativa. Programación orientada a objetos
// Describe paso a paso un conjunto de instrucciones para solucionar un problema.



// Clase padre
class LivingBeing {
    constructor(height, weight) {
        this.height = height
        this.weight = weight
        this.animalKingdom = 'mamiferos'
        this.temperatureUnit = 'C'
    }

    saludoPadre() {
        return "Hola, soy un ser vivo"
    }

    calculateIMC() {
        const IMC = this.weight / Math.pow(this.height, 2) // Float

        if (IMC < 20) {
            return `Estás muy debajo de tu IMC = ${IMC.toFixed(2)}`
        } else if (IMC > 20 && IMC < 24.9) {
            return `Estás sano. IMC = ${IMC.toFixed(2)}`
        } else if (IMC > 25) {
            return `Obesidad. IMC = ${IMC.toFixed(2)}`
        }
    }
}

// class define y crea una clase. (Clase hija)
// TODO: revisar porque el export marca un error de sintaxis
class Person extends LivingBeing {

    constructor(name, age, height, weight) {
        // Solo cuando se extiende de una clase debemos usar super
        super(height, weight)
        this.name = name
        this.isAlive = true
        this.age = age || 0
        this.counter = 0
        this.counterSaludo = 0
        this.counterEdad = 0
    }

    // Incrementar el valor cada vez que se llame
    incrementarCounter() {
        this.counter++
    }

    // los getters solamente deben retornar información no deben cambiar el estado de su clase.
    get obtenerCounter() {
        return this.counter
    }

    incrementarSaludo() {
        this.counterSaludo++
    }

    saludo() {
        this.incrementarSaludo()
            // return super.saludoPadre()
        return `Hola me llamo ${this.name}`
    }

    edad() {
        this.counterEdad++
            const actualYear = new Date().getFullYear()
        const birthYear = new Date(this.age).getFullYear()

        return `Tengo ${actualYear - birthYear} años de edad`
    }

    get obtenerSaludos() {
        return this.counterSaludo
    }

    get obtenerEdad() {
        return this.counterEdad
    }
}

// new crea una instancia de una clase
const Bryan = new Person("Bryan", "12/05/1993", 1.81, 80)

const Marcos = new Person("Marcos")

// console.log("Bryan ==>", Bryan.saludo())

// console.log("Bryan counter saludo ==>", Bryan.obtenerSaludos)
// console.log("Bryan ==>", Bryan.saludo())
// console.log("Bryan counter saludo ==>", Bryan.obtenerSaludos)


// console.log("Bryan counter edad ==>", Bryan.obtenerEdad)


// console.log("Bryan ==>", Bryan.saludoPadre())
// console.log("Bryan ==>", Bryan.saludo())

/**
 * Tarea 
 * Ejercicio 3
 * 1.- Crear una clase padre
 * 2.- Extenderla a la clase hijo
 * 3.- Ejecutar un metodo de la clase padre en la clase hijo
 * 4.- Calcular la masa corporal en la clase padre y retornar el resultado
 */




// console.log("Bryan ==>", Bryan.edad())

// console.log("Marcos ===>", Marcos.edad())
// console.log("Valor de logins de Marcos ===>", Marcos.obtenerCounter)

// Marcos.incrementarCounter()
// Marcos.incrementarCounter()
// console.log("Valor de logins de Marcos ===>", Marcos.obtenerCounter)

// Bryan.incrementarCounter()
// console.log("Valor de logins de Marcos ===>", Bryan.obtenerCounter)

// console.log([1,2,3].length)


// Programación declarativa. Programación funcional
// Está basado en funciones

/**
 * Ejercicio 1
 * 1.- Crear una clase personal
 * 2.- Vamos a crear un metodo que salude con nuestro nombre
 * 3.- Vamos a crear un metodo que diga que edad tenemos
 * Tiempo: 10min
 */

/**
 * Ejercicio 2
 * 1.- Sobre la misma clase que tienen
 * 2.- Crear un getter que devuelva la cantidad de veces que han mandado a ejecutar "saludar()"
 * 3.- Crear un getter que también devuelva la cantidad de veces que han mandado a ejecutar "edad()"
 * Tiempo: 10min
 */

// Sintaxis para exportar
// module.exports = Person