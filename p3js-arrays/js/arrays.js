// 1.- Registro de koders:
//     -Pedir al usuario la cantidad de koders a registrar
//     -Pedir al usuario los nombres de cada koder que desee registrar
//     -almacenar los nombres de los koders en una colección
//     -imprimir en consola únicamente las inciales de los koders registrados
//         input:  Israel Salinas Martínez
//         output: I. S. M.

// 2.- Usando la colección creada en el ejercicio anterior:
//     -Obener una nueva colección que contenga el nombre de cada koder registrado, y la cantidad de caracteres que contiene su nombre
//         input: Israel Salinas Martínez
//         output: Israel Salinas Martínez, 23 caracteres


// 3.- Usando la colección creada en el ejercicio 1:
//     -Obtener una nueva colección que contenga únicamente los nombres de los koders que tengan más de 30 caracteres
//     -imprimir en consola la colección filtrada

//     tareaKodemia();


// function tareaKodemia() {
//     let koderQty = prompt('¿Cuántos Koders vas a registrar?');
//     let kodersArray = [];
//     let i = 0;
//     console.log("---Ejercicio #1----");
//     for (i = 0; i < koderQty; i++) {
//         let koderName = prompt('Escribe el nombre completo del Koder');
//         kodersArray.push(koderName);

//         koderNameArray = koderName.split(' ');
//         koderInicials = [];
//         koderNameArray.forEach(element => koderInicials.push(`${element.toUpperCase().charAt(0)}.`));
//         console.log(koderInicials.join(''));
//     }

//     console.log("---Ejercicio #2----");
//     kodersArray.forEach(element => console.log(`${element}, ${element.length} carácteres`));

//     console.log("---Ejercicio #3----");
//     kodersArrayFiltered = kodersArray.filter(kodersArray => kodersArray.length > 30);
//     kodersArrayFiltered.forEach(element => console.log(element.toString()));
// }

/*
    teniendo el siguiente array:
    [
        Guadalajara,
        Monterrey,
        Nuevo León,
        Guanajuato,
        CDMX,
        Temascalapa,
        Toluca,
        Playa del Carmen,
        Chiapas,
        Michoacán
    ]
    1.- Por cada ciudad, imprimir el nombre de la ciudad y las 3 primeras letras del nombre en mayúscula
    input = Guadalajara
    output = Guadalajara, GUA
    2.- Crear un nuevo array que contenga los nombres de cada ciudad pero sin vocales
    input  = Guadalajara
    output = gdljr
    3.- Crear un nuevo array que contenga unicamente las ciudades que terminen en letra "n"
    */

// const citiesArray = [
//     "Guadalajara",
//     "Monterrey",
//     "Nuevo León",
//     "Guanajuato",
//     "CDMX",
//     "Temascalapa",
//     "Toluca",
//     "Playa del Carmen",
//     "Chiapas",
//     "Michoacán"
// ]

// console.log("ejercicio #1")
// citiesArray.forEach(element => console.log(element + ", " + element.slice(0,3).toUpperCase()));


// console.log("ejercicio #2")
// citiesArray.forEach(element => console.log(element.replace(/[aeiou]/ig,'')));

// console.log("ejercicio #3")
// let nCities = citiesArray.filter(nCities => nCities.endsWith("n"));
// console.log(nCities)




// /*Se cuenta esta colección de canciones. Los objetivos a cumplir son los siguientes:
// Mostrar una lista con únicamente las cancioens, sin el año de lanzamiento
// Mostrar una lista con aquellas canciones cuyo año de lanzamiento fue después de 1995
// Moostrar una lista en la que aparezcan sólo los últimos dos dígitos del año de lanzamiento y el nombre de la canción (P.E. '94 Blind)
// */

// // let ninetysBestSongs = [
// //     "1994 Blind",
// //     "1992 Walk",
// //     "1994 Davidian",
// //     "1991 Killig in the Name",
// //     "1996 Roots Bloody Roots",
// //     "1991 Sad But True",
// //     "1994 Closer",
// //     "1994 Black Hole Sun",
// //     "1999 Slipknot",
// //     "1991 Smeels Like Teen Spirit"
// // ]




// // newFunction()



// // function newFunction() {
// //     let onlySongs = ninetysBestSongs.map(item => item.slice(5))
// //     console.log(onlySongs)
// // }

// // newFunction_1()

// // function newFunction_1() {
// //     let onlyYears = ninetysBestSongs.map(item => item.slice(4))
// //     let only95Plus = onlyYears.filter(item => item.parseInt() > 1995)
// //     console.log(only95Plus)
// // }



// let animals = [
//     [
//         "Gato",
//         "Negro",
//         "Pequeño"
//     ],
//     [
//         "Perro",
//         "Blanco",
//         "Mediano"
//     ],
//     [
//         "Caballo",
//         "Bayo",
//         "Grande"
//     ]
// ]
// /*crear una función constructora para Animal, con las propiedades specie, color, size, y un método que imprima en consola 'Soy un {specie} de color {color} y de tamaño { size }
// crear un Animal con cada set de datos del array animals
// ejecutar el método de cada uno de los animales*/

// function Animal(specie, color, size) {
//     this.specie = specie;
//     this.color = color;
//     this.size = size;

//     this.presentation = function() {
//         console.log(`Soy un ${specie} de color ${color} y de tamaño ${size}` )
//     }
// }

// let animalCollective = animals.map( data => {
//     let specie = data[0]
//     let color = data[1]
//     let size = data[2]

//     return new Animal(specie, color, size)
// })

// animalCollective.forEach(Animal => {
//     Animal.presentation()
// });

// let productionArray = [
//     [
//         "David Moranchel",
//         "Lunes: 100pz",
//         "Martes: 85pz",
//         "Miércoles: 70pz",
//         "Jueves: 96pz",
//         "Viernes: 120pz",
//     ],[
//         "Michael Villalba",
//         "Lunes: 123pz",
//         "Martes: 94pz",
//         "Miércoles: 100pz",
//         "Jueves: 74pz",
//         "Viernes: 81pz",
//     ],
//     [
//         "Charles Silva",
//         "Lunes: 120",
//         "Martes: 76pz",
//         "Miércoles: 86pz",
//         "Jueves: 95pz",
//         "Viernes: 100pz",
//     ],[
//         "Israel Salinas",
//         "Lunes: 90pz",
//         "Martes: 85pz",
//         "Miércoles: 93pz",
//         "Jueves: 121pz",
//         "Viernes: 72pz",
//     ],
// ]


function Worker( name, monday, tuesday, wednesday, thursday, friday ){
    this.name = name;
    this.dof = [ monday, tuesday, wednesday, thursday, friday]
    this.getAverage = function(){
        let average = this.dof.reduce( ( accum, current ) => {
            current.replace("pz", "");
            return accum + parseInt(current.split(": ")[1])
        },0) / this.dof.length
        console.log(`soy ${this.name} y mi promedio de productividad es de ${average}`)
    }
}
// let workersArray = productionArray.map( productivity => {
//     let [ name, monday, tuesday, wednesday, thursday, friday ] = productivity;
//     return new Worker( name, monday, tuesday, wednesday, thursday, friday)
// })
// console.log(workersArray)
// workersArray.forEach( person => {
//     person.getAverage()
// })




/*
* Solicitar al usuario cuantos koder desea registrar
 * solicitar el nombre de cada Koder
 * Generar un objeto de tipo Koder con las propiedades name y lastName
 * Generar un array y generar un lista ordenada con cada uno de los nombres Koder
*/
// let koderQty = parseInt(prompt('¿Cuantos Koder Ingresarás?'))

// function createKoderArray(koderQty) {
//     koderArray = []
//     for(i = 0; koderQty < i; i++) {
//         let koderName = prompt('Nombre del Koder')
//         let koderLastName = prompt('Apellido del Koder')
//         koderArray = push([])
//     }
// }
// let koderName = prompt('Nombre del Koder')
// let koderLastName = prompt('Apellido del Koder')

// function Koder(firstName, lastName) {
//     this.firstName = firstName,
//     this.lastName = lastName
// }


// let kodersArray = .map( productivity => {
// })

let productionArray = [
    [
        Nombre 'David Moranchel',
        productivity [
            Lunes: '100pz',
        Martes: '85pz',
        'Miércoles: 70pz',
        'Jueves: 96pz',
        'Viernes: 120pz',
    ],
    [
        'Michael Villalba',
        'Lunes: 123pz',
        'Martes: 94pz',
        'Miércoles: 100pz',
        'Jueves: 74pz',
        'Viernes: 81pz',
    ],
    [
        'Charles Silva',
        'Lunes: 120',
        'Martes: 76pz',
        'Miércoles: 86pz',
        'Jueves: 95pz',
        'Viernes: 100pz',
    ],
    [
        'Israel Salinas',
        'Lunes: 90pz',
        'Martes: 85pz',
        'Miércoles: 93pz',
        'Jueves: 121pz',
        'Viernes: 72pz',
    ]
]

productionArray.reduce(function(accum, current) => {
    current.replace("pz","")
},0)

array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


function Worker( name, monday, tuesday, wednesday, thursday, friday ){
    this.name = name;
    this.dof = [ monday, tuesday, wednesday, thursday, friday]
    this.getAverage = function(){
        let average = this.dof.reduce( ( accum, current ) => {
            current.replace("pz", "");
            return accum + parseInt(current.split(": ")[1])
        },0) / this.dof.length
        console.log(`soy ${this.name} y mi promedio de productividad es de ${average}`)
    }
}



// remover pz
// remover letras y espacio
// parseInt promediamos
// switch 
// red
// green



// hacer li
// hacer nodo texto
// li append nodo texto
