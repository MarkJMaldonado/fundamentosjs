//Ejercicio 2
const toDolist = [
    "Marcos", //
    27, //
    { clean: "laundry" }, //
    { clean: "mop" }, //
    { clean: "dishes" }, //
    "groceries", //
    undefined, //
    "Afternoon", //
    "Classes", //
    "Netflix" //
]


//acceder a un Array
// console.log(toDolist[0]) // Marcos
// console.log(toDolist[5]) // groceries
// console.log(toDolist[9]) //Netflix
// console.log(toDolist[7]) //Afternoon
// console.log(toDolist[4]) //{ clean: "dishes" }


// //ejercicio 3
// for (let x = toDolist.length; x > -1; x--) {
//     console.log(`Este momento el indice es: ${x} y el valor es`, toDolist[x])
// }

// console.log("se termino el loop")


//ejercicio 4
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let x = 0; x < array.length; x++) {
//     const element = array[x];
//     console.log(element * element)
// }

//Tarea
for (let x = 1; x <= array.length; x++) {
    console.log(" Table de multiplicar del " + x)
    for (let i = 1; i <= array.length; i++) {
        console.log(x + " * " + i + " = " + x * i)
    }
}