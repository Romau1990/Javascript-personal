


//  function CrearUsuario(nombre, apellido, edad, id){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.id = id
//     this.mostrarDatos = function(){
//         console.log("Nombre: " + this.nombre);
//         console.log("Apellido: " + this.apellido);
//         console.log("Edad: " + this.edad);
//     }
//  }


//  let user1 = new CrearUsuario("Rodrigo", "Alvarez", 34,12);
//  let user2 = new CrearUsuario("Mariana", "Martinez", 37,41);

// user1.constructor;
// console.log(user1.constructor)

// //constructorName.constructor allows me to access a bunch of properties I can use to modifiy or check Object info.
// console.log(user1.constructor.length); //number of properties
// console.log(user1.constructor.name); //name of the variable that contains the constructor


// let crear1 = CrearUsuario("Rodrigo", "Alvarez", 35, 20);
// let crear2 = CrearUsuario("Mariana", "Martinez", 37, 10);
// let crear3 = CrearUsuario("Jessica", "Perez", 20, 4);
// let crear4 = CrearUsuario("Juan", "Nuñez", 40, 16);

// console.log(CrearUsuario.length);
// console.log(CrearUsuario.prototype);



// function of(Fn, ...arg){
//     return new Fn(...arg)
// }


// function primera(name){
//     return function segunda(name){
//         return name;
//     }

// }

// let seg = primera();
// console.log(seg("Martin"));


function Datos(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.mostrar = function () {
        this.nombre;
        console.log(nombre);
        console.log(apellido);
        console.log(this.edad);
        console.log(this.mascotas);
        console.log(this.sexo);
    }
    this.hasThis = () => {
        console.log(this);
    }
    this.arrayDatos = function (arr) {
        return arr
    }
}

let datosExtra = {
    edad: 35,
    sexo: "Masculino",
    mascotas: true,
}

let otrosDatos = ["Edad: 31", "Sexo: Masculino", "Mascotas: true"];


let user1 = new Datos("Rodrigo", "Alvarez");
user1.mostrar.call(datosExtra);



//ex 1

function toArray(st) {
    return st.split(' ')
}

console.log(toArray('Hola soy Rodrigo'))


//ex2

function replaceVowels(st) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let emptySt = '';
    st = st.split('');
    for (let letter of st) {
        if (vowels.includes(letter)) {
            if (letter == 'o' || letter == 'a') {
                emptySt += letter.replace(letter, '@');
            }
            else if (letter == 'e') {
                emptySt += letter.replace(letter, '3');
            }
            else if (letter == 'i') {
                emptySt += letter.replace(letter, '1');
            }
            else {
                emptySt += letter.replace(letter, 'ü');
            }
        }
        else {
            emptySt += letter;
        }
    }
    return emptySt;
}

console.log(replaceVowels('Hola soy Rodrigo. Mucha suerte'));




//ex3


function invertSt(st) {
    return st = st.split('').reverse().join('');
}
console.log(invertSt('Rodrigo'))


//ex4

function lowerThanFour(arr) {
    return arr.filter(item => {
        return item.length <= 4;
    })
}
console.log(lowerThanFour(['cat', 'dog', 'bird', 'octupus', 'platypus', 'spider', 'dragon', 'dinosaur']));


//ex5

let arr = []
console.log(arr);
arr.push('Mastodonte');
arr.push('Dragon');
arr.push('loquita');
console.log(arr);
arr.pop();
console.log(arr)


function findItem(arr, word) {
    word = word.toLowerCase();
    let lowerArr = []
    for (let i of arr) {
        lowerArr.push(i.toLowerCase());
    }
    return `La palabra buscada se encuentra en la posicion ${lowerArr.indexOf(word)}`;

}

console.log(findItem(['HTML', 'CSS', 'JAVASCRIPT', 'SASS', 'GIT', 'PHP'], 'CSS'));


//ex 6

function concatArr(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(concatArr(['Martina', 'Jose'], ['Rodrigo', 'Mariana']))



//ex 7

function countLetters(st, letter) {
    let counter = 0;
    for (let i = 0; i < st.length; i++) {
        if (st[i] == letter) {
            counter++;
        }
        else {
            console.log('la palabra no contiene la letra ' + letter)
        }
    }
    return counter;
}

console.log(countLetters('Rodrigo', 'h'))


//ex 8

let empty = [];
console.log(empty)
empty.push('el1');
empty.push('el2');
empty.push('el3');
console.log(empty)
empty.shift();
console.log(empty)



function removeFirstAndLast(w) {
    w = w.split('')
    w.pop()
    w.shift();
    return w
}

console.log(removeFirstAndLast('Rodrigo'))



//EJERCICIO OBJETOS

let house = {
    walls: 4,
    ceiling: 'Gable roof',
    color: 'white',
    material: 'concrete',
    doors: 2,
    width: 30,
    length: 20,
    'is pretty': 'maybe',
    price: 240000,
    backyard: true,
    area: function () {
        console.log(`el area de la casa es de ${this.width * this.length} m3`)
        return this.width * this.length
    },
    costPerMeter() {
        console.log(`The price per square meter is usd${this.price / this.area()}`);
    },
    interior: {
        livingroom: 1,
        bathroom: 2,
        bedrooms: 3,
        atic: true,
        basement: true,
    }
}


house.hasWood = false;
delete house['is pretty'];
console.log(house);
console.log(house.area());
console.log(house.costPerMeter());
console.log(house.interior.atic);
console.log(`the house has ${house.interior.bedrooms} bedrooms in total`);
house.interior.bathrooms = 3;
console.log(house.interior)

for (let key in house) {
    console.log(`clave: ${key}____valor: ${house[key]}`);
}

let otherHouse = Object.assign({}, house);

console.log(otherHouse == house);
console.log(otherHouse === house);

console.log(otherHouse.interior.bedrooms == house.interior.bedrooms);



//EJERCICIOS DE CLASES Y HERENCIA


class Building {
    #location
    constructor(material, color, width, length, location) {
        this.metarial = material;
        this.color = color;
        this.width = width;
        this.length = length;
        this.#location = location;
    }
    getSize() {
        return `The house has ${this.width * this.length}m3`;
    }
    static hasRoof() {
        return true
    }
    changeMaterial(newMaterial) {
        this.material = newMaterial;
    }
    getLocation() {
        return this.#location;
    }
}

let myHouse = new Building('concrete', 'white', 15, 10, 'Belvedere');

console.log(myHouse.getSize());
console.log(Building.hasRoof());


class House extends Building {
    #location
    constructor(material, color, width, length, location, height, windows) {
        super(material, color, width, length, location);
        this.material = material;
        this.color = color;
        this.width = width;
        this.length = length;
        this.#location = location;
        this.height = height;
        this.windows = windows;
    }
    numberOfWindows() {
        return this.windows;
    }
    getCubicMeters() {
        return (this.width * this.length) * this.height + 'm4';
    }
}

let cabin = new House('wood', 'brownish', 15, 12, 'Los Bulevares', 2.5, 4);

console.log(cabin.getSize());
console.log(cabin.height);
console.log(Building.hasRoof());
console.log(cabin.numberOfWindows());
console.log(cabin.getCubicMeters());
console.log(cabin.material);
console.log(cabin.changeMaterial('bricks'));
console.log(cabin.material);
console.log(cabin.location);
console.log(myHouse.location);
console.log(cabin.getLocation());
console.log(myHouse.getLocation());





class Estructura {
    #material;
    constructor(width, length, height, location, purpose, color) {
        this.width = width;
        this.length = length;
        this.height = height;
        this.location = location;
        this.purpose = purpose;
        this.color = color;
        this.hasRoof = true;
        this.#material = 'concrete';
    }
    getMaterials() {
        return this.#material;
    }
    setColor(cl) {
        this.color = cl;
    }
    static hasWindows() {
        return true;
    }
    getSize() {
        return (this.width * this.length) * this.height;
    }

}

let st1 = new Estructura(12, 14, 3, 'Los Bulevares', 'living', 'white')

console.log(Estructura.hasWindows())
console.log(st1.material);
console.log(st1.getMaterials());
console.log(st1.color);
console.log(st1.setColor('blue'));
console.log(st1.color);



class Cabaña extends Estructura {
    constructor(width, length, height, location, purpose, color) {
        super(width, length, height, location, purpose, color);
        this.width = width;
        this.length = length;
        this.height = height;
        this.location = location;
        this.purpose = purpose;
        this.color = color;
    }
    planks(p) {
        if (!Number.isInteger(p)) {
            throw new Error('debes decir cuantas tablas usaste para construir la cabaña')
        }
        else if (p > 100) {
            return 'those are too many planks';
        }
        else {
            return 'not too many. Is it a small cabin?';
        }
    }
    getSize() {
        return 'no me rompas las pelotas'
    }

}


let myCabin = new Cabaña(8, 6, 2, 'countryside', 'vacations', 'yellow', 63);

console.log(myCabin.getSize());

console.log(myCabin.planks(101));



let arr10 = [1, 5, 4, 8, 6, 4, 1, 12];


let [first, , , , , , , last] = arr10;

console.log(first, last);

let n1 = 12;
let n2 = 17;

[n1, n2] = [n2, n1];
console.log(n1, n2);


let us = {
    name: 'Rodolfo',
    age: 40,
    job: {
        type: 'carpenter',
        hours: 8,
        homeOffice: false,
    }
}

let { name: nombre, job: { type: tipo } } = us;
console.log(nombre);
us.job.tipo = 'Sailor';

console.log(us.job.tipo);

let n = [...arr10];
let n3 = [arr10];
console.log(n);


//EJERCICIOS TRY CATCH

class MyError extends Error {
    constructor(name, message) {
        super(name, message)
        this.name = name;
        this.message = message;
    }
}


let err1 = new MyError('algo', 'ni putea idea pero algo paso seguro')

let value = 103;

try {
    // console.log(roberto);
    // console.log(roberto.email)
    // console.log(Numbre.isInteger(value));
}
catch (err) {
    console.log(err.name + '-----' + err.message)
    if (err instanceof TypeError) {
        throw new Error('Error de digitacion, ojito con eso');
    }
    else if (err instanceof ReferenceError) {
        console.log(err1.name, err1.message)
        throw new Error('Error de referencia, ojito con eso');
    }
}
finally {
    console.log('El error fue capturado correctamente')
}


//REPASO DE TODO LO DADO



// 🟦 OBJETOS (1 al 5)
// Crear un objeto persona con nombre, edad y país. Mostrar cada propiedad.

// Agregar una nueva propiedad al objeto anterior y luego eliminar otra.

// Crear una función que reciba un objeto y devuelva las claves en un array.

// Crear una función que verifique si una propiedad existe dentro de un objeto.

// Combinar dos objetos en uno nuevo usando spread.


//1
const person = {
    name: 'Rodrigo',
    age: 34,
    country: 'Uruguay'
}

//2
person.location = 'Montevideo, Uruguay';
delete person.country;

console.log(person);


//3
console.time('ejecutando primera')
let getObj = function (obj) {
    let keys = [];
    for (let i in obj) {
        keys.push(i)
    }
    return keys;
}

console.log(getObj(person))
console.timeEnd('ejecutando primera')

console.time('ejecutando segunda')
//3 alt
const getObj2 = function (obj) {
    let keys = Object.keys(obj)
    return keys
}

console.log(getObj2(person))
console.timeEnd('ejecutando segunda')



//4

console.time('time1')
let exists = function (obj, key) {
    for (let i in obj) {
        if (i === key) {
            return true;
        }
        else {
            return false;
        }
    }
}
console.log(exists(person, 'surname'))
console.timeEnd('time1')
//4 alt


console.time('time2')

let exists2 = function (obj, key) {
    let keys = Object.keys(obj);
    return keys.includes(i => { i == key })
}
console.log(exists2(person, 'surname'))

console.timeEnd('time2')


console.log(Object.values(person));


let user2 = {
    name: 'Rodrigo',
    surname: 'Alvarez',
    age: 34,
    country: 'Uruguay',
}


let user3 = {
    name: 'Mariana',
    surname: 'Martinez',
    age: 37,
    country: 'Uruguay',
}


//5 
let { ...allUsers } = [user2, user3];
console.log(allUsers)

//5 alt

let emptyObject = Object.assign({}, [user2, user3]);
console.log(emptyObject)




// 🟦 OBJETOS (6 al 15)
// 6. Crear un objeto auto con marca, modelo y año. Mostrar solo los valores.
// 7. Agregar un método presentarse al objeto persona que devuelva una frase con su nombre y país.
// 8. Crear una función que reciba un objeto y devuelva la cantidad de propiedades que tiene.
// 9. Dado un objeto con números, devolver la suma total de sus valores.
// 10. Crear una función que invierta las claves y valores de un objeto.


//ex6
let auto = {
    brand: 'Toyota',
    model: 'Corola',
    year: 2020,
}

//ex7
// const persona3 = {
//     nombre: 'Rodrigo',
//     apellido: 'Alvarez',
//     age: 34,
//     presentarse: function(){
//         return `Hola, soy ${nombre},${apellido} y tengo ${age}años`
//     }
// }

// console.log(persona3.presentarse());



//ex8
let ret = function (obj) {
    let keys = Object.keys(obj)
    return keys.length;
}

console.log(ret(auto))


//ex9
let objN = {
    n1: 12,
    n2: 15,
    n3: 21,
    n4: 8,
    n5: 26,
}

let objSum = function (obj) {
    let values = Object.values(obj);
    return values.reduce((acc, curr) => {
        return acc += curr
    })
}
console.log(objSum(objN));


//ex10
let invert = function (obj) {
    let newObj = {}
    for (let i in obj) {
        newObj[obj[i]] = i
    }
    return newObj
}

console.log(invert(auto));



// TÍTULO fue escrito por AUTOR en AÑO."

// 16. Crear un objeto libro con título, autor y año. Mostrar una frase como: "El libro TÍTULO fue escrito por AUTOR en AÑO."

// 17. Agregar una función al objeto libro que permita actualizar el año a uno nuevo pasado por parámetro.

// 18. Crear una función que reciba dos objetos y devuelva un nuevo objeto con todas las propiedades combinadas. Si hay repetidas, priorizar el segundo objeto.

// 19. Crear un objeto estudiante con nombre, notas (array de números) y un método que devuelva el promedio.

// 20. Escribir una función que tome un objeto y devuelva un nuevo objeto solo con las propiedades cuyo valor sea tipo string.

// 21. Crear un objeto carrito con una propiedad productos (array de strings). Agregar un método para agregar productos y otro para eliminarlos.

// 22. Dado un objeto con valores booleanos, crear una función que devuelva cuántos son true.

// 23. Crear un objeto usuario con nombre, email y activo. Escribir una función que lo desactive (activo = false).

// 24. Escribir una función que convierta un array de objetos en un solo objeto usando una propiedad como clave

// 25. Crear un objeto orden con propiedades anidadas (cliente, productos, total). Mostrar el nombre del cliente y cuántos productos hay en la orden.



//ex 16
let libro = {
    titulo: 'Harry Potter',
    autor: 'J.K.Rowling',
    año: 2004,

    info() {
        return `El libro ${this.titulo} fue escrito por ${this.autor} en el año ${this.año}`;
    },

    actualizarAño(año) {
        this.año = año;
    }
}

let libro2 = {
    titulo: 'Hijas del frío',
    autor: 'Camilla Lackberg',
    año: 2014,

    info() {
        return `El libro ${this.titulo} fue escrito por ${this.autor} en el año ${this.año}`;
    },

    actualizarAño(año) {
        this.año = año;
    }
}

console.log(libro.info());


//ex 17

libro.actualizarAño(2001);
console.log(libro.info());


//ex 18


let libro3 = {
    titulo: 'Harry Potter',
    autor: 'J.K.Rowling',
    año: 2004,
    'tipo de portada': 'tapa dura'
}

let libro4 = {
    titulo: 'Las hijas del frío',
    autor: 'Camila Lackerber',
    año: 2014,
}


let librosF = function (ob1, ob2) {
    let newObj = { ...ob1, ...ob2 };
    return newObj
}

console.log(librosF(libro3, libro4));



// 19. Crear un objeto estudiante con nombre, notas (array de números) y un método que devuelva el promedio.


let estudiante = {
    name: 'Robert',
    grades: [10, 5, 7, 4, 6, 6, 5, 10],

    calcAverage() {
        let sum = this.grades.reduce((acc, curr) => {
            return (acc += curr);
        })
        return Math.round(sum / this.grades.length);
    }
}


console.log(estudiante.calcAverage())


// 20. Escribir una función que tome un objeto y devuelva un nuevo objeto solo con las propiedades cuyo valor sea tipo string.

let mazoCartas = {
    cantidad: 60,
    tipoMazo: 'agua',
    cartasMagicas: 15,
    cartasTrampa: 10,
    estrategia: 'daño directo por turno',
    cartaEspecial: 'blue eyes white dragon',
}

let onlyStrings = function (obj) {
    let newObj = {}
    for (let i in obj) {
        if (typeof obj[i] == 'string') {
            newObj[i] = obj[i];
        }
    }
    return newObj
}

console.log(onlyStrings(mazoCartas))


// 21. Crear un objeto carrito con una propiedad productos (array de strings). Agregar un método para agregar productos y otro para eliminarlos.


let carrito = {
    productos: ['cerveza', 'leche', 'arroz', 'fideos', 'azucar', 'sal', 'queso', 'dulce de membrillo'],
    agregarProducto(...items) {
        this.productos.push(items)
        this.productos = this.productos.flat()
    },
    quitarProductos(item) {
        let index = this.productos.indexOf(item)
        console.log(index)
        this.productos.splice(index, 1);
    }
}

carrito.agregarProducto('manteca', 'carne', 'mayornesa', 'pan', 'agua', 'lionesa');

console.log(carrito.productos)
carrito.quitarProductos('leche')
console.log(carrito.productos)


// 22. Dado un objeto con valores booleanos, crear una función que devuelva cuántos son true.


let bool = {
    b1: false,
    b2: false,
    b3: true,
    b4: true,
    b5: false,
    b6: true,
}


const allTrue = function (obj) {
    let values = Object.values(obj);
    let counter = 0;
    values.forEach(value => {
        if (value == true) {
            counter++;
        }
    })
    return `Hay ${counter} valores verdaderos en el objeto`;
}

console.log(allTrue(bool))


// 24. Escribir una función que convierta un array de objetos en un solo objeto usando una propiedad como clave


const mergeObj = function (...arrObj) { //ya se que pedia array de objetos, pero me daba pereza crear un unico array con muchos objetos dentro así que hice trampita. 
    let newObj = Object.assign({}, ...arrObj)
    return newObj
}

console.log(mergeObj(mazoCartas, bool, estudiante))



// 25. Crear un objeto orden con propiedades anidadas (cliente, productos, total). Mostrar el nombre del cliente y cuántos productos hay en la orden.


let orden = {
    compra: {
        cliente: 'Rodrigo',
        productos: {
            manteca: 12.00,
            leche: 20.00,
            pan: 5.00,
        },
    },

    mostrarCliente() {
        let totalSum = Object.values(this.compra.productos).reduce((acc, curr) => acc += curr);
        return {
            cliente: this.cliente,
            productos: this.compra.productos,
            total: totalSum,
        }
    }
}

console.log(orden.mostrarCliente())

//ex 26

const info = {
    name: 'Rodrigo',
    age: 34,
    country: 'Uruguay'
}

//desestructure para guardar en variable
let { country: pais } = info
console.log(pais)
//o sino
let nuevaVariable = info.country;
console.log(nuevaVariable);

info.email = 'rodrigoa12343@gmail.com';
console.log(info)

//ex 27

let arrFrutas = ['manzana', 'banana', 'naranja'];
console.log(arrFrutas)
arrFrutas.push('pera')
console.log(arrFrutas)
arrFrutas.unshift('kiwi');
console.log(arrFrutas)
arrFrutas.pop();
console.log(arrFrutas)
arrFrutas.shift();
console.log(arrFrutas)


//ex 28

let frase = 'Javascript is great';

let toUpper = function (st) {
    return {
        frase: st.toUpperCase(),
        length: st.length,
    }

}
console.log(toUpper(frase))



//ex 29

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años. Mucho gusto`)
        // return `Hola soy ${this.nombre} y tengo ${this.edad} años. Mucho gusto`
    }
}



let persona1 = new Persona('Rodrigo', 34);
let persona2 = new Persona('Mariana', 38);

console.log(persona1.saludar())
console.log(persona2.saludar())




//ex 30

class Tienda {
    constructor() {
        this.productos = [];
    }

    agregarProducto(nombre, precio) {
        return this.productos.push({ nombre: nombre, precio: precio })
    }
    listaProductos() {
        return this.productos;
    }
    filterNames() {
        return this.productos.map(a => {
            return a.nombre
        })
    }
}

let store = new Tienda();
console.log(store.productos)
console.log(store.agregarProducto('pan', 10))
console.log(store.productos)
store.agregarProducto('azucar', 100);
store.agregarProducto('arroz', 86);
store.agregarProducto('sal', 32);
console.log(store.listaProductos())
console.log(store.filterNames())



//31

class Library {
    static id = 1;
    constructor() {
        this.books = [];
    }


    addBook(title, author, stock) {
        this.books.push(
            {
                id: Library.id++,
                title: title,
                author: author,
                stock: stock,
            }
        )
        Library.nextId++
    }

    getTitle() {
        return this.books.map(t => {
            return t.title
        })
    }
    getAuthor(chosenAuthor) {
        let filtered = this.books.filter(book => {
            return book.author == chosenAuthor;
        })
        return filtered.map(m => {
            return m.title;
        })
    }
    sellBook(id, number) {
        for (let i of this.books) {
            if (i.id == id) {
                if (number > i.stock) {
                    console.log('no hay sufciente stock solo quedan ' + i.stock + ' en stock');
                }
                else {
                    i.stock -= number
                    if (i.stock < 0 && i.stock < 5) {
                        console.warn('quedan pocos en stock')
                    }
                    else if (i.stock == 0) {
                        console.error('te quedaste sin stock');
                    }
                }
            }
        }
    }
}

let pocho = new Library();
pocho.addBook('El señor de los anillos', 'Tolkien', 20);
console.log(pocho.books)
pocho.addBook('Las niñas del frio', 'Camilla Lackberg', 20);
console.log(pocho.books)
pocho.addBook('Harry Potter', 'J.K. Rowlling', 20);
console.log(pocho.books)
pocho.addBook('La divina comedia', 'Dante Aliggieri', 20);
console.log(pocho.books)
console.log(pocho.getTitle())
console.log(pocho.getAuthor('Tolkien'))
console.log(pocho.sellBook(3, 20))
console.log(pocho.books)


// Ejercicio 1
// Crea una función llamada gestionarInventario que reciba como parámetro un array de objetos.
// Cada objeto representa un producto con las propiedades:

// nombre (string)

// precio (number)

// stock (number)

// Dentro de la función:

// Filtra los productos que tengan stock mayor a 0.

// Crea un nuevo array con solo los nombres de esos productos en mayúsculas.

// Devuelve un objeto con:

// productosDisponibles: el array filtrado original

// nombresEnMayusculas: el array de nombres en mayúsculas

// valorTotalStock: la suma de (precio × stock) de todos los productos disponibles

let product1 = {
    nombre: 'azucar',
    precio: 8,
    stock: 34,
}

let product2 = {
    nombre: 'sal',
    precio: 2,
    stock: 41,
}

let product3 = {
    nombre: 'arroz',
    precio: 6,
    stock: 0,
}

let product4 = {
    nombre: 'manteca',
    precio: 3,
    stock: 102,
}


// function manageInventory(arr){
//     let newArr = []
//     arr.forEach(a =>{
//         if(a.stock > 0){
//            newArr.push(a.nombre.toUpperCase());
//         }
//     })
//     return newArr;
// }



function manageInventory(arr) {
    let newArr = []
    let total = 0;
    let filtered = arr.map(a => {
        if (a.stock > 0) {
            newArr.push(a.nombre.toUpperCase());
            total += (a.precio * a.stock);
        }
    })

    console.log(newArr)

    return {
        'available products': filtered,
        'product to upper case': newArr,
        'total': total,
    }

}

let arrProducts = [product1, product2, product3, product4];

console.log(manageInventory(arrProducts))



function manageInventory2(arr) {
    let newArr = []
    let total = 0;
    let filtered = arr.filter(item => {
        if (item.stock > 0) {
            newArr.push(item.nombre.toUpperCase())
            total += (item.precio * item.stock);
            return item
        }
    })
    return {
        'available products': filtered,
        'product to upper case': newArr,
        'total': total,
    }
}

console.log(manageInventory2(arrProducts))




// Ejercicio 1
// Crea una función llamada gestionarInventario que reciba como parámetro un array de objetos.
// Cada objeto representa un producto con las propiedades:

// nombre (string)

// precio (number)

// stock (number)

// Dentro de la función:

// Filtra los productos que tengan stock mayor a 0.

// Crea un nuevo array con solo los nombres de esos productos en mayúsculas.

// Devuelve un objeto con:

// productosDisponibles: el array filtrado original

// nombresEnMayusculas: el array de nombres en mayúsculas

// valorTotalStock: la suma de (precio × stock) de todos los productos disponibles





function manageInventory3(arr) {
    let total = 0;
    let inStock = arr.filter(item => {
        return item.stock > 0
    })
    let toUpper = inStock.map(item => item.nombre.toUpperCase());

    inStock.forEach(item => {
        total += (item.precio * item.stock);
    })

    return {
        'avilable products': inStock,
        'products toUpperCase': toUpper,
        'total': total,
    }

}

console.log(manageInventory3(arrProducts))





// Ejercicio 2
// Vas a recibir un array de objetos.
// Cada objeto representa un jugador y tiene:
// nombre (string)
// ventas (array de objetos), donde cada venta tiene:
// producto (string)
// precio (number)
// cantidad (number)
// status (string)
// La función debe devolver un objeto con:
// ventasEntregadas → todas las ventas con status "on library" (array).
// productosUnicos → nombres de productos únicos de ventasEntregadas, ordenados alfabéticamente.
// totalIngresos → suma de (precio * cantidad) de ventasEntregadas.
// topJugador → nombre del jugador que más gastó en ventas "entregado".
// Restricciones:
// Usar métodos de array (filter, map, reduce, etc.).
// No modificar el array original.



let players = [
    {
        name: 'Rodrigo',
        purchases: [
            { product: 'Titan Quest 2', price: 15, quantity: 1, status: 'on library' },
            { product: 'Dying Light: The Beast', price: 26, quantity: 1, status: 'pending' },
            { product: 'Diablo 4', price: 19, quantity: 1, status: 'on library' }
        ]
    },
    {
        name: 'Lucía',
        purchases: [
            { product: 'The Witcher 3', price: 20, quantity: 1, status: 'on library' },
            { product: 'Cyberpunk 2077', price: 30, quantity: 1, status: 'pending' },
            { product: 'Resident Evil 4 Remake', price: 40, quantity: 1, status: 'on library' }
        ]
    },
    {
        name: 'Javier',
        purchases: [
            { product: 'Dark Souls 3', price: 35, quantity: 1, status: 'pending' },
            { product: 'Elden Ring', price: 50, quantity: 1, status: 'on library' },
            { product: 'Sekiro: Shadows Die Twice', price: 45, quantity: 1, status: 'on library' },
            { product: 'World of Warcraft', price: 45, quantity: 1, status: 'on library' }
        ]
    },
    {
        name: 'Marta',
        purchases: [
            { product: 'Hollow Knight', price: 10, quantity: 1, status: 'on library' },
            { product: 'Celeste', price: 12, quantity: 1, status: 'pending' },
            { product: 'Stardew Valley', price: 8, quantity: 1, status: 'on library' }
        ]
    }
];


// La función debe devolver un objeto con:
// ventasEntregadas → todas las ventas con status "on library" (array).
// productosUnicos → nombres de productos únicos de ventasEntregadas, ordenados alfabéticamente.
// totalIngresos → suma de (precio * cantidad) de ventasEntregadas.
// topJugador → nombre del jugador que más gastó en ventas "entregado".
// Restricciones:
// Usar métodos de array (filter, map, reduce, etc.).
// No modificar el array original.

function gameStore(arr) {
    let arrStatus = [];
    for (let i of arr) {
        let purchases = i.purchases;
        let status = purchases.forEach(item => {
            if(item.status == 'on library'){
                arrStatus.push(item)
            }
        });
    }
   let filtered = arrStatus.map(item =>{
        return item.product
   })
   console.log(filtered.sort())

}

console.log(gameStore(players))



// Ordenar y limitar
// Dado un array de números, devolver los 3 números más altos usando métodos de array.


const numeros = [
  42, 7, 93, 15, 88, 3, 57, 26, 71, 14,
  99, 5, 64, 38, 81, 2, 47, 19, 60, 33,
  12, 75, 28, 54, 8, 91, 36, 50, 22, 69,
  11, 96, 4, 85, 31, 17, 45, 9, 63, 24
];

function getHigher(arr){
    arr = arr.sort()
    let val = arr.slice(arr.length -3, arr.length);
    console.log(val)
}
console.log(getHigher(numeros))



// Validar email
// Escribir una función que reciba un string y verifique si es un email válido (puede ser una validación simple usando includes o match).

let email = 'rodrigoA_9@gmail.com'

function validate(str){
    if(!str.includes('@')){
        throw new Error('error con el email. No escribio el @')
    }
    else if(!str.includes('.com')){
        throw new Error('error con el email. No escribio el .com correctamente')
    }
    else{
        return 'Bienvenido user'
    }
}
console.log(validate(email))


// Agrupar por categoría
// Dado un array de objetos productos con propiedades nombre y categoria, devolver un objeto donde cada clave sea una categoría y su valor un array con los nombres de los productos de esa categoría.


const products = [
  { nombre: "Camiseta básica", categoria: "Ropa" },
  { nombre: "Pantalón vaquero", categoria: "Ropa" },
  { nombre: "Zapatillas deportivas", categoria: "Calzado" },
  { nombre: "Sandalias de cuero", categoria: "Calzado" },
  { nombre: "Mochila escolar", categoria: "Accesorios" },
  { nombre: "Gorra con visera", categoria: "Accesorios" },
  { nombre: "Smartphone X200", categoria: "Electrónica" },
  { nombre: "Auriculares inalámbricos", categoria: "Electrónica" },
  { nombre: "Cafetera automática", categoria: "Electrodomésticos" },
  { nombre: "Licuadora de vidrio", categoria: "Electrodomésticos" }
];


function orderByCategory(arr){
    
    let newArr = {}
    for(let i = 0; i < products.length; i++){
        let cat = products[i].categoria;
        let pr = products[i].nombre;

        if(!newArr[cat]){
            newArr[cat] = []
            newArr[cat].push(pr)
        }
        else{
            newArr[cat].push(pr)
        }
    }
    return newArr
}

console.log(orderByCategory(products))



//ejercicio

// Contar palabras por longitud
// Dado un string, devolvé un objeto donde cada clave sea la longitud de la palabra y el valor un array con las palabras de esa longitud.
// (Tip: split, forEach, length)



let extract = "Y, y y y y supercaligrafilisticoespidalidoso viéndole don Quijote Quijota quijoti quijoto de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro."



function lengthBy(arr){
    let newObj = {}
    arr = arr.split(' ')
    for(let i = 0; i< arr.length; i++){
        letters = arr[i].length;
        if(!newObj[letters]){
            newObj[letters] = [];
            newObj[letters].push(arr[i])
        }
        else{
            newObj[letters].push(arr[i])
        }
    }
    return newObj
}

console.log(lengthBy(extract))





// Agrupar productos por primera letra
// Dado un array de nombres de productos, devolvé un objeto donde las claves sean la primera letra (en minúscula) y los valores arrays con los productos que empiezan con esa letra.

const pr = [
  "Camiseta básica",
  "Pantalón vaquero",
  "Zapatillas deportivas",
  "Gorra de béisbol",
  "Campera de cuero",
  "Remera estampada",
  "Sudadera con capucha",
  "Shorts de algodón",
  "Sandalias de cuero",
  "Botas de montaña",
  "Chaleco acolchado",
  "Bufanda de lana",
  "Guantes térmicos",
  "Reloj analógico",
  "Mochila impermeable",
  "Bolso de mano",
  "Sombrero de paja",
  "Cinturón de cuero",
  "Lentes de sol polarizados",
  "Billetera de cuero"
];



function firstLetter(arr){
   let newObj = {}
   for(let i = 0; i < arr.length; i++){
    let firstLetter = arr[i][0].toLowerCase();
    if(!newObj[firstLetter]){
        newObj[firstLetter] = [];
        newObj[firstLetter].push(arr[i])
    }
    else{
        newObj[firstLetter].push(arr[i])
    }
   }
   return newObj;
}
console.log(firstLetter(pr))


// Filtrar palabras largas y agrupar por longitud
// Dado un párrafo, quedate solo con palabras de más de 5 letras, y devolvé un objeto agrupado por la cantidad de letras que tienen.
// (Tip: filter, split)


let extract2 = "Y, viéndole don Quijote de aquella manera, con muestras otorrinonaringologia de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro."


function group_by_length(str){
    let obj = {}
    str = str.split(' ')
    
    let filtered = str.filter(word => word.length > 5);
    let mapped = filtered.map(word =>{
        if(word.includes(',') || word.includes('.')){
            obj[word.length] = [];
            obj[word.length].push(word)
        }
        obj[word.lengt]
    })
    return obj
}

console.log(group_by_length(extract2))







// Ejercicio 3️⃣

// Tenés esta lista de alumnos:

// const students = [
//   { id: 1, name: "Juan", grade: 8 },
//   { id: 2, name: "Ana", grade: 5 },
//   { id: 3, name: "Pedro", grade: 9 },
//   { id: 4, name: "Lucía", grade: 6 },
//   { id: 5, name: "Sofía", grade: 4 }
// ];


// 👉 Devolvé un objeto con esta forma:

// {
//   aprobados: [ /* nombres de los alumnos con nota >= 6 */ ],
//   reprobados: [ /* nombres de los alumnos con nota < 6 */ ],
//   promedio: X /* promedio general de todas las notas */
// }


// 📌 Reglas:

// No mutar el array original.

// Nombres en minúsculas.

// El promedio debe ser un número (puede tener decimales).




const students = [
  { id: 1, name: "Juan", grade: 8 },
  { id: 2, name: "Ana", grade: 5 },
  { id: 3, name: "Pedro", grade: 9 },
  { id: 4, name: "Lucía", grade: 6 },
  { id: 5, name: "Sofía", grade: 4 }
];


let studentsDegrees = function(arr){
    let obj = {}
    obj.aprobados = [];
    obj.reprobados = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]['grade'] >= 6){
            obj.aprobados.push(arr[i]['name']);
        }
        else{
            obj.reprobados.push(arr[i]['name']); 
        }
    }
    return obj;
}

console.log(studentsDegrees(students))




// Escribe una función que compare dos objetos y devuelva si son iguales o no.

let obj = {
    nombre: 'Rodrigo',
    apellido: 'Alvarez',
    age: 34,
    occupation: 'carpenter',
}


let obj2 = {
    nombre: 'Rodrigo',
    apellido: 'Alvarez',
    age: 34,
    occupation: 'carpenter',
}



let compareObj = function(obj1, obj2){
    for(let i in obj1){
        if(obj1[i] == obj2[i]){ // obj es la key e [i] es el valor siempre usamos la notacion [] para trabajar de forma dinamica con los objetos. 
            return "tienen los mismos elementos dentro"
        }
        else{
            return 'no son iguales por dentro'
        }
    }
}

console.log(compareObj(obj,obj2))




//Crea un programa que convierta un array de strings en un solo string separado por comas.

let frases = [
  "El conocimiento es poder",
  "JavaScript me vuelve loco",
  "La práctica hace al maestro",
  "El que no arriesga no gana",
  "Programar es resolver problemas"
];


let stringify = function(arr){
    let newStr = '';
    for(let i of arr){
        newStr += `${i} , `
    }
    return newStr
}

console.log(stringify(frases))


//Diseña un objeto que guarde un inventario de productos con cantidades.

let inv = {
  manzanas: 10,
  naranjas: 5,
  peras: 8,
  sandia: 4,
  melon: 5,
  papaya: 3, 
  palta: 10,
};


let inventory = function(producto, cantidad){
    inv[producto] = cantidad;
    return inv
}
console.log(inventory('mandarina', 5))
console.log(inv)
console.log(inventory('pomelo',32))
console.log(inv)



//Crea una función que reciba una frase y devuelva cuántas veces aparece cada palabra.

let phrase = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


let checkRepetiton = function(phrase){
    let obj = {};
    phrase = phrase.split(' ');
    phrase.forEach(word =>{
        
        if(obj[word] != undefined){
            obj[word]++
        }
        else{
            obj[word] = 1;
        }
    })

    return obj;
}

console.log(checkRepetiton(phrase))




// Modela un sistema de cuentas bancarias con depósitos y retiros.

let date = new Date();


class Bank{
    static customers = [];
    #bankAccount;
    #accountInfo;
    constructor(name, age, birthDate, ID,){
        this.#accountInfo = [];
        this.name = name;
        this.age = age;
        this.birthDate = birthDate;
        this.ID = ID;

        this.#bankAccount = 50000;
        this.bankMovements = {
            'your account': this.#bankAccount,
            withdrawals: [],
            deposits: [],
            payments: [],
        }
    }
    withdrawal(m){
        this.bankMovements.withdrawals.push({amount: `USD$ ${m}`, 'date': date.toISOString()})
        return this.#bankAccount -= m;
    }
    deposit(m){
        this.bankMovements.deposits.push({amount: `USD$ ${m}`, 'date': date.toISOString()})
        return this.#bankAccount += m;
    }
    checkAccount(){
        return this.#bankAccount;
    }
    checkBankHistory(){
        return this.bankMovements;
    }
    toPay(){
        let money = +prompt("How much do you want to send? Don't use . or , to separate the cypher");
        if(money > this.#bankAccount){
            throw new Error("You don't have enough money")
        }
        let recepientBank = prompt("Digite el nombre del banco del destinatario");
        if(typeof recepientBank != 'number'){
            throw new Error('Use numbers only')
        }
        let recepientAccount = prompt("A quien desea abonarle el pago, digite la cuenta");
        this.bankMovements.payments.push({'recepient bank': recepientBank, 'recepient account': recepientAccount, 'date': date.toISOString()})
        let verification = confirm(`You are sending ${money} to ${recepientAccount} whose bank is ${recepientBank}. Are you sure you want to continue?`);
        if(verification == true){
            this.#bankAccount -= money;
            this.bankMovements.payments.push({amount: money, 'recepient bank': recepientBank, 'recepient account': recepientAccount, 'date': date.toISOString()});
            alert('Transaction processed successfully')
        }
    }

    getAccountInfo(){
        return this.#accountInfo;
    }

    register(userName, pwd){
        userName = userName.trim();
        console.log(userName)
        if(userName.includes(' ') || pwd.includes(' ')){
            throw new Error('neither the password nor the userName can have blank spaces')
        }
        else if(!/[A-Z]/.test(pwd) || !/[a-z]/.test(pwd) || !/[0-9]/.test(pwd) || pwd.length < 8){
            throw new Error("La contraseña debe contener mayusculas, minusculas, numeros y debe tener mas de 8 caracteres.")
        }
        else{
            this.#accountInfo.push({'User name': userName, 'Password': pwd})
        }
    }
}

let person1 = new Bank('Rodrigo', 34, '1/11/1990', 334523434)
console.log(person1.bankAccount)
console.log(person1.checkAccount())
console.log(person1.deposit(22310))
console.log(person1.withdrawal(65000))
console.log(person1.deposit(12350));
console.log(person1.deposit(29456));
console.log(person1.withdrawal(5320))
console.log(person1.checkBankHistory())
console.log(person1.register(' algo   ', 'aB123444'))

console.log(person1.getAccountInfo())