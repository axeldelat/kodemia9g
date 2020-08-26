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

    tareaKodemia();


function tareaKodemia() {
    let koderQty = prompt('¿Cuántos Koders vas a registrar?');
    let kodersArray = [];
    let i = 0;
    console.log("---Ejercicio #1----");
    for (i = 0; i < koderQty; i++) {
        let koderName = prompt('Escribe el nombre completo del Koder');
        kodersArray.push(koderName);

        koderNameArray = koderName.split(' ');
        koderInicials = [];
        koderNameArray.forEach(element => koderInicials.push(`${element.toUpperCase().charAt(0)}.`));
        console.log(koderInicials.join(''));
    }

    console.log("---Ejercicio #2----");
    kodersArray.forEach(element => console.log(`${element}, ${element.length} carácteres`));

    console.log("---Ejercicio #3----");
    kodersArrayFiltered = kodersArray.filter(kodersArray => kodersArray.length > 30);
    kodersArrayFiltered.forEach(element => console.log(element.toString()));
}

