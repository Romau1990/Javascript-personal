// Tenés un objeto con productos y sus precios:
// Convertilo en un array de objetos { nombre, precio } y usá filter para obtener solo los que valen más de 100.

const productos = {
    manzana: 120,
    banana: 80,
    naranja: 100,
    pera: 90
};



function toArray(arr) {
    let frutas = [];
    for (let p in arr) {
        frutas.push({
            nombre: p,
            precio: arr[p]
        })
    }
    return frutas.filter(fruta => fruta.precio > 100)
}


console.log(toArray(productos));



// A partir del string:
// Convertilo en un array de palabras y usá map para crear un array con la longitud de cada palabra.

const frase = "JavaScript es divertido pero desafiante";

function wordLength(str) {
    str = str.split(' ')
    return str.map(word => word.length)
}

console.log(wordLength(frase))


// Dado un array de usuarios:
//Obtené un array con los nombres de los usuarios activos.

const usuarios = [
    { id: 1, nombre: "Ana", activo: true },
    { id: 2, nombre: "Luis", activo: false },
    { id: 3, nombre: "Carla", activo: true }
];

function activeUsers(users) {
    return users.filter(user => user.activo == true);
}

console.log(activeUsers(usuarios));


// Con el array:
// Usá sort para ordenarlas de mayor a menor.


const notas = [5, 8, 9, 4, 7, 10, 6];

function sortNumbers(numbers) {
    return numbers.sort((a, b) => b - a)
}

console.log(sortNumbers(notas));



// A partir del string:
// Convertilo en un array y usá find para ubicar el correo de "luis@mail.com".

const correos = "ana@mail.com,luis@mail.com,carla@mail.com";


function findPattern(str) {
    return str = str.split(',').find(st => st ? 'luis@mail.com' : 'no existe')
}
console.log(findPattern(correos));


// Dado el array:
// Verificá con some si hay alguna palabra con más de 6 letras.



const palabras = ["sol", "luna", "estrella", "cometa"];

function moreThanSix(words) {
    return words.filter(word => word.length > 5)
}

console.log(moreThanSix(palabras));

//otra forma

function moreSix(words) {
    return words.some(word => word.length > 5)
}

console.log(moreSix(palabras));


// Con el array:
// Usá forEach para mostrar el doble de cada número.

const numeros = [10, 20, 30, 40, 50];

function double(numbers) {
    numbers.forEach(n => { console.log(n * 2) })
}
console.log(double(numeros));


// Tenés un objeto de empleados:
// Convertilo en un array y usá sort para ordenarlos por salario.

const empleados = {
    e1: { nombre: "Marta", salario: 3000 },
    e2: { nombre: "Pedro", salario: 5000 },
    e3: { nombre: "Juan", salario: 4000 }
};


function sort_by_salary(emp) {
    return Object.values(emp).sort((a, b) => { return a.salario - b.salario });
}
console.log(sort_by_salary(empleados));


// A partir de:
// Usá findIndex para encontrar la posición de "Carla".

const nombres = ["Ana", "Luis", "Carla", "Pablo"];

function find(names) {
    return names.findIndex(el => el == 'Carla')
}
console.log(find(nombres));


// Dado un string:
// Pasalo a array y usá filter para obtener todas las apariciones de "azul".

const texto = "rojo azul verde amarillo azul negro azul";

let color = function (str) {
    return str = str.split(' ').filter(color => color == 'azul')
}
console.log(color(texto));



// Tenés este objeto con calificaciones:
// Obtené un array con los nombres de los alumnos que aprobaron (nota >= 6) y la palabra aprobado en mayusucula.

const calificaciones = {
    Ana: 8,
    Luis: 5,
    Carla: 9,
    Pedro: 4
};

function whoPassed(scores) {
    let passed = []
    for (let i in scores) {
        if (scores[i] >= 6) {
            passed.push(i + '(PASSED)');
        }
    }
    return passed
}
console.log(whoPassed(calificaciones));


// A partir del string:
// Transformalo en un array y quedate solo con los productos únicos (sin repetidos).

const compras = "arroz,pan,leche,huevos,carne,azucar,arroz";

function transform(compras) {
    compras = compras.split(',');
    let set = new Set(compras);
    return Array.from(set);
}
console.log(transform(compras));


// Con el array:
// Generá un array nuevo que tenga solo las edades

const empleados2 = [
    { nombre: "Marta", edad: 35 },
    { nombre: "Sofía", edad: 22 },
    { nombre: "Juan", edad: 28 }
];

let onlyAges = function (ages) {
    return ages.map(el => el.edad)
}
console.log(onlyAges(empleados2));


// Dado el objeto:
// Armá un programa que devuelva un array con los productos que no tienen stock.

const inventario = {
    teclado: { stock: 5, precio: 300 },
    mouse: { stock: 0, precio: 150 },
    monitor: { stock: 2, precio: 2000 }
};

let sinStock = function (inv) {
    return Object.values(inv).filter(el => el.stock != 0)
}
console.log(sinStock(inventario));



// Tenés:
// Transformalo en un array de palabras y obtené solo aquellas que tengan más de 7 letras.

const text = "La práctica hace al maestro y la constancia al campeón";

let filterLetters = function (text) {
    return text = text.split(' ').filter(word => word.length > 7)
}
console.log(filterLetters(text));



// Con el array:
// Obtené el jugador con mayor cantidad de puntos.

const jugadores = [
    { nombre: "Ana", puntos: 120 },
    { nombre: "Luis", puntos: 95 },
    { nombre: "Joaquina", puntos: 300 },
    { nombre: "Carla", puntos: 140 },
    { nombre: "Jose", puntos: 230 },
];

let highScore = function (players) {
    players = players.sort((a, b) => { return a.puntos - b.puntos })
    return players[players.length - 1];
}
console.log(highScore(jugadores));


// A partir del objeto:
// Mostrá los salarios ordenados de mayor a menor en un array de números.

const salarios = {
    Marta: 1000,
    Pedro: 1500,
    Carla: 1200,
    Juan: 2000
};


let orderSalaries = function (salaries) {
    return Object.values(salaries).sort();
}
console.log(orderSalaries(salarios));


// Armá un array con los nombres de los productos cuyo precio sea menor a 600.

const productos2 = [
    { nombre: "Celular", precio: 500 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Laptop", precio: 1000 }
];

let productNames = function (products) {
    return products.filter(product => product.precio < 600)
}
console.log(productNames(productos2));


// Dado el string:
// Pasalo a array de palabras y mostrá cuántas veces aparece "javascript".

const frase2 = "javascript es poderoso y javascript es flexible";

let wordFinding = function (phrase) {
    return phrase.split(' ').reduce((acc, word) => {
        if (word.toLowerCase() === 'javascript') {
            return acc + 1
        }
        return acc
    }, 0)
}


// Pasalo a array de palabras, convertí todas a minúsculas, eliminá repetidos y mostrá el resultado ordenado alfabéticamente.

const texto4 = "Los buenos programadores piensan en soluciones Los buenos programadores resuelven problemas";

function transform(str){
    str = str.toLowerCase()
    str = str.split(' ')
    let set  = new Set(str);
    let arr = Array.from(set);
    return arr.sort().join(' ')
    
}

console.log(transform(texto4));



// Obtené un array con los nombres de los productos que cuesten más de 300, transformalos a mayúsculas y ordenalos alfabéticamente.

const productos3 = [
  { nombre: "Teclado", precio: 500 },
  { nombre: "Mouse", precio: 200 },
  { nombre: "Monitor", precio: 1500 },
  { nombre: "Parlante", precio: 700 }
];


function getProducts(products){
    return products.filter(pr => pr.precio > 300).map(pr => pr.nombre.toUpperCase()).sort()

}
console.log(getProducts(productos3));


// Filtrá solo las notas aprobadas (>= 6), ordenalas de mayor a menor y devolvé un array
// con su promedio al final (ej: [10,9,8,7,6, "promedio: 8"]).
const notas2 = [5, 9, 7, 4, 10, 6, 8];

function average(avg){
    let filtered = avg.filter(score => score >= 6)
    let final = filtered.sort((a, b) =>b-a).reduce((acc, curr) => {
        return acc+=curr/filtered.length
    }, 0) 
    return {
        notas: filtered,
        promedio: final,
    }
}
console.log(average(notas2));


// Filtrá los libros con más de 200 páginas, ordenalos
// de menor a mayor cantidad de páginas y devolvé un array solo con los títulos.


const libros = [
  { titulo: "El Quijote", paginas: 500 },
  { titulo: "Cien Años de Soledad", paginas: 300 },
  { titulo: "Rayuela", paginas: 600 },
  { titulo: "El Principito", paginas: 100 }
];


function books(books){
    let filtered = books.filter(book => book.paginas > 200).sort((a,b) => a.paginas - b.paginas)
    let bookNames = filtered.map(name => name.titulo);
    return{
        books: bookNames,
        'books info': filtered,
    }
}
console.log(books(libros));



//Convertí todas las frases en arrays de palabras, aplaná el resultado en un solo array,
//filtrá palabras de más de 6 letras y mostralas ordenadas alfabéticamente.

const frases = [
  "El conocimiento es poder",
  "La práctica hace al maestro",
  "JavaScript es poderoso y divertido",
  "Aprender es crecer"
];

function toFlat(phrases){
    let arr = []
    phrases = phrases.join(' ').split(' ');
    phrases.forEach(word =>{arr.push([word])})
    return arr.flat().filter(item => item.length > 6).sort()
}

console.log(toFlat(frases));