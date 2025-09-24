//Metodos de consola

//mostrar mensaje en pantalla
console.log('hola');


//mostrar error en pantalla
console.error('error')

//mostrar advertencia en pantalla
console.warn('cuidadito con esto');

//mostrar mensaje de informacion adicional en pantalla
console.log('esto es un mensaje informativo');


//mostrar con formato tabla en pantalla

let userInfo = [
    ['Rodrigo', 34], 
    ['Mariana', 37],
    ['Sofia', 23],
]

let userInfo2 = [
    {nombre: 'Rodrigo', edad: 34},
    {nombre: 'Mariana', edad: 37},
    {nombre: 'Sofia', edad: 23},
]

console.table(userInfo)
console.table(userInfo2)


//agrupa datos en pantalla como si fuera un drop-down button

console.group('datos de usuario:') //se abre el drop-down
console.log('Rodrigo', 34);
console.log('Mariana', 37);
console.log('Sofia', 23);
console.groupEnd(); //se cierra al drop-down


//muestra el tiempo de demora de un elemento en pantalla 

console.time('esto demora...') //agrego un texto

for(let i = 0; i < 50; i++){
    console.log(i)
}

console.timeEnd('esto demora...') //termino con el mismo texto con el cual empece. OBLIGATORIO




//assert- muestra un mensjae si lo que evalua es falso

let age = 14; 

console.assert(age >= 18, 'el usuario debe tener 18 años o más');  


//count

console.count('click'); //1
console.count('click'); //2
console.count('click'); //3
console.count('click'); //4

console.countReset('click') //finaliza el conteo




//CLEAR- borra todo lo escrito en consola
console.clear();