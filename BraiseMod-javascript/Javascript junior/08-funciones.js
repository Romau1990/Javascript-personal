//FUNCIONES


//SINTAXIS BASICA
// function valores(param1, param2, param3){
//     //cuerpo de la funcion (bloque de ejecucion)
//     return;
// }
// valores(4, 'hola', f()) //ejecución de la funcin

//los params (param1, param2, param3) reciben los argumentos 4, 'hola', y f() respectivamente y en orden de escritura
/*
param1 = 4
param2 = 'hola'
param3 = f()
*/

//return es la forma de retornar un valor desde la funcion, si no hay un return el valor de devolucion sera undefined. Es una funcion void.


//FUNCIONES ANONIMAS
//son iguales a las comunes solo que etas no tiene un nombre propio como en el caso anterior con valores(). En este caso debemos asignar la funcion a una variable. 

//SINTAXIS BASICA

const assignedFunction = function(number){
    console.log('esta es una funcion anonima')
    return;
}

console.log(assignedFunction(4))

//FUNCIONES FLECHA (ARROW FUNCTIONS)

//mas simple que las anteriores pero carece de contexto de ejecucion propio. Ojo! Por otra parte, al igual que las funciones anonimas, debemos asignarlas a una variable o constante para poder ejecutarlas. No necesitamos usar la palabra reservada function para poder llamarla.   

//SINTAXIS BASICA

const arrowF = (param1) => {
    console.log('hola mundo')
}

// o podemos hacerlo en una sola linea


const oneLine = (num1) => console.log('el numero es: ' + num1); 

//esto remueve los {} por lo que no podremos hacer enter y tendremos que hacer todo el proceso en una sola linea de codigo. 

//VALORES POR DEFECTO

function sumar(a, b){
    return a + b;
}

sumar(3)

//en el caso de arriba vemos como el valor a = 3, pero que paso con el b? No hemos presentado un argumento valido por lo que sera undefined por defecto. La suma de 3 + undefined sera igual a NaN, es decir, (not a number). Pero.. podemos dar valores a los parametros por defecto en caso de que no se agregen argumentos validos. 


function sumar (a = 0, b= 0){
    return a + b;
}

sumar(3) //el resultado en lugar de NaN sera 3, porque a = 3, pero b por defecto es 0, o sea, 3+0 = 3

//RETURN 

//Todas las funciones por lo gneeral requieren de un RETURN para que una funcion devuelva un valor. 



//FUNCIONES ANIDADAS

function externa(){  
    function anidada(){
        console.log('soy la funcion anidada');
    }
    console.log('soy la externa')
}
externa() // esto no ejecutara la funcion 'anidada' porque esta fuera del scope de externa, ya que anidada no ha sido ejecutada y tiene un scope propio.


//SOLUCIONES


//En estos casos debemos ejecutar la funcion o retornar la funcion anidada en la funcion externa y hay más de una forma

//forma 1

function externa(){  
    function anidada(){
        console.log('soy la funcion anidada');
    }
    console.log('soy la externa')
    anidada()
}

externa()

//forma 2

// function externa(){  
//     function anidada(){
//         console.log('soy la funcion anidada');
//     }
//     console.log('soy la externa')
//     anidada;
// }

// externa()(); //el primer parentesis representa ala funcion externa() y el segundo a la anidada()



// Tanto la funcion anidada como la externa como la anidada pueden tener argumentos y parametros, e incluso la externa puede pasar sus parametros como argumentos de la anidada. 

function externa(param1, param2){  
    function anidada(param1, param2){
        console.log('soy la funcion anidada y la suma de mis numeros es ' + (param1 + param2));
    }
    console.log('soy la externa')
    anidada(param1, param2)
}
externa(4,4) //soy la funcion anidada y la suma de mis numeros es 8;



//FUNCIONES DE ORDEN SUPERIOR

//Son funciones que reciben otras funciones como argumentos

function sum(a, b){
    return a + b;
}


function getFunc(func){
    return func;
}
let result = getFunc(sum(4,4))
console.log(result); //8



//OTRA OPCION- pasamos la funcion como argumento pero la funcion pasada no tiene argumentos, estos pueden ser pasados luego a través del parametro de la funcion de orden superior. Es decir, los argumentos de la funcion pasada como argumentos seran colocados en el return o cuerpo de la funcion de orden superior.


function suma2(func){
    return func(4,4)
}
let result2 = suma2(sum)

console.log(result2)


//Otra opcion
//En este caso los argumentos de resta(a,b) son pasados recien dentro de la funcion de orden superior pero con argumentos propios pasados como argumentos propios, es decir, resta() no tiene sus propios argumentos pero los toma de los argumentos de la funcion resta2 en return. 

function resta(a,b){
    return a -b;
}

function resta2(func, n1, n2){
    return func(n1, n2)
}

let result3 = resta2(resta, 4, 4)
console.log(result3); // result 0


//forEach- funcion que sirve para ejecutar un bucle asociado a elementos iterables. 
//Funciona con los arrays

let arr = [12,44,21,14,7,29,3,104];
arr.forEach(value =>{
    console.log(value) //12, 44,21, 14,7,29,3,104
})

arr.forEach(function value(){
    console.log(value) //12, 44,21, 14,7,29,3,104
})

//en ambos casos pasa lo mismo solo que en un caso forEach usa una funcion flecha value => {} y en el otro una funcion explicita function value(){}

//usaremos muchos metodos con funciones mas adelantes, como, map, reduce, filter, forEach, etc. 


















