//EJERCICIOS INTERMEDIOS


// Escribí una función factorial(n) que calcule el factorial usando un for.

let factorial = function (n) {
    let total = n;
    for (let i = n; i > 0; i--) {
        total *= i;
    }
    return total;
}
console.log(factorial(8))


// Hacé la misma función factorial(n) pero esta vez con recursión.


function recursion(n) {
    let total = n;
    let acc = 1;
    for (let i = n; i > 0; i--) {
        total *= i
    }
    if (acc < 3) {
        acc++
        recursion(n)
    }
    else {
        return total;
    }
}



// Suma recursiva
//Crea una función sumaHasta(n) que sume todos los números desde n hasta 1 usando recursión.


function sumarHasta() {
    let total = 0;
    return function calc(n) {
        if (n > 0) {
            total += n
            n--;
            calc(n)
        }
        else {
            console.log(total);
        }
    }
}

let to = sumarHasta();
console.log(to(10));

// Cuenta regresiva:
// Hacé una función cuentaAtras(n) que imprima desde n hasta 1 usando recursión.

function cuentaAtras(n) {
    if (n > 0) {
        console.log(n);
        n--;
        cuentaAtras(n)
    }
}
console.log(cuentaAtras(21))


// Suma de array:
// Crea una función sumaArray(arr) que devuelva la suma de todos los elementos de un array usando recursión.

let arr = [5, 12, 24, 44, 31, 22, 15]

function sumaArray(arr) {
    let total = 0;
    let length = arr.length;
    let num = arr[length];

    return function calc() {
        if (length > 0) {
            total += num
            length--
            sumaArray(arr)
        }
    }
}

let v = sumaArray(arr)
console.log(v());


function f1(a) {
    return function f2(a, b) {
        return function f3(a, b, c) {
            return a + b + c;
        }
    }
}

let f = f1(12)
let f2 = f(4, 12);
console.log(f2(2, 2, 4))



// 1) Arrays + Métodos de Arrays
// const numeros = [12, 5, 8, 130, 44, 130, 7, 42, 8];


// 👉 Tareas:

// Elimina los números repetidos.

// Devuelve un nuevo array solo con los mayores a 10.

// Ordena el resultado de menor a mayor.


const numeros = [12, 5, 8, 130, 44, 130, 7, 42, 8];


let set = new Set(numeros);
console.log(set);

let orderedArray = Array.from(set);
orderedArray = orderedArray.sort((a, b) => a < b);
console.log(orderedArray);

//multiplicar 3 valores usando funciones currificadas (CURRIFICACION)

function primera(a) {
    return function segunda(b) {
        return function tercera(c) {
            return a * b * c;
        }
    }
}
let p = primera(10);
let s = p(4);
let t = s(2);
console.log(t);

//RECURSIVIDAD

//realiza una funcion recursiva que calcule la potencia de un numero elevado a x numero;


//TODO MAL ❌
// function calcPow(num, pow) {
//     let acc = 1;
//     let arr = [];
//     let total = 1;
//     if(acc < pow){
//         arr.push(total *= num);
//         calcPow(num, pow)
//         acc++
//     }
//     return arr;
// }

// console.log(calcPow(2,5));





//CLOSURE

function potencia() {
    let acc = 0;
    return function (n, pow) {
        console.log(acc);
        acc += n ** pow
        return n ** pow
    }
}

let pow = potencia();
console.log(pow(2, 4));
console.log(pow(5, 3));
console.log(pow(3, 3));
console.log(pow());



//USO DE [] EN METODOS

// Crea una función que reciba un string (una palabra o frase) y devuelva un objeto que cuente cuántas veces aparece cada letra.

let st = 'Mi nombre es Rodrigo y me encante este mundo de Javascript'

let countLetters = function ([...st]) {
    let obj = {};
    st.forEach(letter => {
        !obj[letter] ? obj[letter] = 1 : obj[letter]++;
    })
    return Object.entries(obj).sort((a, b) => {
        return a[1] - b[1]
    })

}

console.log(countLetters(st))



// Ejercicio 2: Agrupar por categoría
// Tienes un array de productos, cada uno con un nombre y una categoría. Tu tarea es crear una función que los agrupe en un objeto donde las llaves (keys) sean las categorías.

// Ejemplo: El resultado debería ser un objeto como: { Frutas: [...], Verduras: [...] }.

const productos = [
    { nombre: 'Manzana', categoria: 'Frutas' },
    { nombre: 'Zanahoria', categoria: 'Verduras' },
    { nombre: 'Banana', categoria: 'Frutas' },
    { nombre: 'Lechuga', categoria: 'Verduras' },
    { nombre: 'Uva', categoria: 'Frutas' }
];

function agruparPorCategoria(listaDeProductos) {
    const productosAgrupados = {};
    listaDeProductos.forEach(item => {
        let categoria = item.categoria
        if (!productosAgrupados[categoria]) {
            productosAgrupados[categoria] = [];
        }
        productosAgrupados[categoria].push(item.nombre)

    })

    return productosAgrupados;
}

console.log(agruparPorCategoria(productos));





// Ejercicio 1: Actualizar configuración
// Crea una función actualizarConfig que recibe un objeto de configuración inicial y un array de cambios. Cada cambio es un array con dos elementos: la propiedad a cambiar y el nuevo valor. La función debe aplicar estos cambios al objeto original y devolverlo.

const configInicial = {
    tema: 'claro',
    idioma: 'es',
    notificaciones: true
};

const cambios = [
    ['idioma', 'en'],
    ['tema', 'oscuro']
];

function actualizarConfig(config, nuevosCambios) {
    nuevosCambios.forEach(change => {
        config[change[0]] = change[1]
    })

    return config;
}

console.log(actualizarConfig(configInicial, cambios));



// Ejercicio 2: Conteo de votos
// Escribe una función contarVotos que acepte un array de strings, donde cada string es el nombre de un candidato. La función debe devolver un objeto con el recuento de votos para cada candidato.


const votos = ['Estafadorinio', 'Cadorovich', 'Ladronovsky', 'Navoletti', 'Empobrecinsky'];
const arrVotos = [12, 55, 32, 16, 4]

function contarVotos(politico, votos) {
    const conteo = {};

    politico.forEach((candidato, i) => {
        conteo[candidato] = votos[i]
        conteo[candidato]
    })
    return conteo;
}

console.log(contarVotos(votos, arrVotos));


// Ejercicio 3: Crear un índice de libros
// Diseña una función crearIndice que reciba un array de objetos libros. Cada libro tiene un id y un titulo. La función debe devolver un nuevo objeto que funcione como un índice, donde las llaves sean los id de los libros y los valores sean los títulos.

const libros = [
    { id: 'b01', titulo: 'El Gran Gatsby' },
    { id: 'b02', titulo: 'Cien Años de Soledad' },
    { id: 'b03', titulo: '1984' }
];

function crearIndice(listaDeLibros) {
    const indice = {};
    libros.forEach(book => {
        console.log(book.id);
        console.log(book.titulo);
        indice[book.id] = book.titulo
    })

    return indice;
}

console.log(crearIndice(libros));



// Ejercicio 4: Mapear valores de propiedades
// Implementa una función mapearPropiedad que tome un array de objetos y el nombre de una propiedad. La función debe devolver un objeto donde las llaves sean los valores de la propiedad especificada y los valores sean un array de los objetos que tienen ese valor.

const personajes = [
    { nombre: 'Aragorn', raza: 'Humano' },
    { nombre: 'Legolas', raza: 'Elfo' },
    { nombre: 'Gimli', raza: 'Enano' },
    { nombre: 'Frodo', raza: 'Hobbit' },
    { nombre: 'Boromir', raza: 'Humano' }
];

function mapProperty(char, term) {
    let obj = {};
    char.forEach(ch => {
        if (!obj[term]) {
            obj[term] = [];
        }
        else {
            obj[term].push(ch.raza)
        }
    })
    return obj
}
console.log(mapProperty(personajes, 'raza'));


// Ejercicio 5: Parsear parámetros de URL
// Crea una función parsearQuery que reciba un string con formato de query de URL (ej: "nombre=juan&ciudad=montevideo"). La función debe procesar el string y devolver un objeto con los pares de clave-valor.


function parsearQuery(str) {

}
console.log(parsearQuery());





//CLASES Y MÉTODOS

// Ejercicio 1: Analizador de Puntuaciones
// Crea una clase ScoreAnalyzer que se inicialice con un objeto de puntuaciones. La clase debe tener dos métodos:
// getTopScorer(): Debe devolver el nombre del jugador con la puntuación más alta.
// getScoresAsArray(): Debe devolver un array de arrays, donde cada subarray contiene [jugador, puntuacion], ordenado de mayor a menor puntuación.


const puntuaciones = { 'Ana': 200, 'Juan': 150, 'Carla': 250 };

class ScoreAnalizer {
    constructor(score) {
        this.score = score;
    }
    getTopScorer() {
        let maxValue = []
        Object.entries(this.score).forEach(score => {
            maxValue.push(score[1])
        })
        return Object.entries(this.score).filter(player => {
            return player[1] == Math.max(...maxValue);
        })
    }

    getScoresAsArray() {
        return Object.entries(this.score).sort((a, b) => {
            return b[1] - a[1]
        })
    }
}

let sc = new ScoreAnalizer(puntuaciones);
console.log(sc.getScoresAsArray());





// Ejercicio 2: Gestor de Inventario
// Desarrolla una clase InventoryManager que maneje un inventario.
// El constructor recibe el inventario inicial (un objeto).
// Debe tener un método getAvailableProducts() que devuelva un nuevo objeto solo con los productos cuyo stock sea mayor a cero.
// Debe tener un método addProduct(name, stock) para agregar un nuevo producto al inventario existente.

const inventarioInicial = { 'manzanas': 10, 'bananas': 0, 'naranjas': 5 };

class InventoryManager {
    constructor(inv) {
        this.inv = inv;
    }

    getAvailableProducts() {
        let availableP = {}
        Object.entries(this.inv).forEach(product => {
            if (product[1] > 0) { availableP[product[0]] = product[1] }
        })
        return availableP;
    }

    addProduct(name, stock) {
        this.inv[name] = stock;
    }
}

let inv = new InventoryManager(inventarioInicial)

console.log(inv.addProduct('frutillas', 20));
console.log(inv.addProduct('arroz', 5));
console.log(inv.addProduct('sal', 0));
console.log(inv.getAvailableProducts());




//MAL ORGANIZADO

// class Producto {
//   static stock = 0;
//   constructor(nombre, unidades) {
//     this.nombre = nombre;
//     this.unidades = unidades; 
//   }
//   agregar(unidades) {
//     Producto.stock += unidades;
//   }
//   total() {
//     return Producto.stock;
//   }
// }



// class Inventario extends Producto {
//   constructor(nombre, unidades) {
//     super(nombre, unidades); 
//     this.items = [];
//   }
//   agregarProducto(p) {
//     this.items.push(p);
//   }
// }


class Products {
    static productList = []
    constructor(product, stock, category, price) {
        this.product = product;
        this.stock = stock;
        this.category = category;
        this.price = price;
        Products.productList.push({
            product: this.product,
            stock: this.stock,
            category: this.category,
            price: this.price,
        })
    }

}

let product1 = new Products('strawberry', 120, 'fruits', 10)
let product2 = new Products('ham', 50, 'meat', 21)
let product3 = new Products('rice', 214, 'staple', 8)
let product4 = new Products('salt', 142, 'staple', 4)

console.log(Products.productList);





class Product {
    static productList = [];
    constructor() { }
    static addProduct(product, stock, category, price) {
        Product.productList.push({
            product: product,
            stock: stock,
            category: category,
            price: price,
        })
    }
}

Product.addProduct('Strawberry',120,'Fruits',10);
Product.addProduct('Ham',50,'Fruits',21);
Product.addProduct('Rice',214,'Fruits',8);
Product.addProduct('Salt',142,'Fruits',4);

console.log(Product.productList);


class Cuenta {
  constructor(saldo = 0) { this.saldo = saldo; }
  retirar (monto) {
    if (th) return false;
    return this.saldo -= monto; 
  }
  depositar(monto) {
    this.saldo += monto;
  }
}
class CajaAhorro extends Cuenta {
  aplicarInteres(porcentaje) {
    const inc = this.saldo * (porcentaje/100);
    this.saldo += inc;
    this.depositar(inc);
  }
}
