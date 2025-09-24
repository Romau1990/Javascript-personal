//existen varios tipos de funciones

//La primera y más conocida es la funcion explicita. Donde la funcion tiene un nombre especifico al cual se le pueden pasar argumentos a sus parametros y devolverlos con return o a través de un console.log(). Si colocamos un console.log() dentro de la funcion no es necesario colocarlo fuera luego para ver el resultado de la ejecucíon. 

function saludar(nombre){
    console.log('hola ' + nombre)
}

saludar('Rodrigo'); 


//Función anónima - no requiere nombre de funcion sino que la guardamos dentro de una variable. 

let saludar2 = function(nombre){
    console.log(`Hola ${nombre}`);
}

saludar2('Rodrigo')


//Funciones flecha - es la más diferente de todas pero cumple con la misma finalidad. Solo que usamos la => y por eso su nombre

let sumar = (a, b) =>{
    return a + b
}
sumar(2, 5); //7

//La función flecha (arrow function) también cuenta con un retorno implicito por el cual podemos omitir los {} si todo se escribe en una sola linea

let sumar2 = (a, b) => a + b; 
sumar2(2,5) //7

//las arrow function o funcion flecha crea un entorno this propio es decir, tienen un scope propio. Esto quiere decir que si son usadas dentro de un objeto como en el caso de abajo por ejemplo, esto no funcionará como esperamos. Veamos: 

let name = 'Mariana'

let obj = {
    nombre:'Rodrigo',
    saludar: function(){
        console.log('hola ' + this.nombre) //hola Rodrigo
    },
    saludarSinThis: function(){
        console.log('hola ' + name) //ERROR: nombre is not defined(name aparece tachado como se puede notar advirtiendo del problema)
    },
    saludarArrowFunction:() =>{
        console.log('hola ' + this.name) //hola undefined aunque usemos this (no encuentra en entorno this)
    },
    saludarResumido(){
        console.log('hola ' + this.nombre) //hola Rodrigo (forma corta de escribir sin usar la palabra function)
    },
    ej:() =>{
        console.log('hola ' + name); //hola Mariana (en este caso no usamos this ya que this apunta a windows y no global. Usamos la variable sin this)
    }
}
console.log(obj.saludarArrowFunction())
console.log(obj.ej())

//cuando trabajamos con métodos, es decír, funciones dentro de los objetos, tenemos que tener en claro lo siguiente: 

/*
    1- Las funciones buscaran dentro de su propio entorno, si no encuentran la variable la buscaran en el entorno global
    2- todas las claves de un objeto no estan ni en el entorno de la funcion ni en el global, por ende el método no las ve. 
    3- Para lograr que una función vea loque hay dentro del entorno del objeto debemos usar this. delante del nombre de la variable ya que si no hacemos eso el resultado será undefined.
    4- Las funciones flecha no funcionan como métodos ya que generan un ambito propio que nada tiene que ver con el ambito desde donde se ejecutan. 

    CONCLUCIÓN:
    En los casos de arriba solo el primer y ultimo método son correctos ya que llevan this y no son arrow functions. Trabajar siempre con esas dos versiones. 


*/







//HOISTING DE LAS FUNCIONES 


//Estos son entidades que reciben prioridad a la hora de alzar nuestro código. Esto implica que independientemente de donde coloquemos dicha entidad esta tendrá prefernecia. Por ende, sera cargada en memoria antes que otras entidades del lenguaje.

//El caso más claro son las funciones ya que estas pueden ser ejecutadas antes de ser llamadas e igualmente funcionaran mientras que en otros casos esto generaría error. 


//es lo mismo esto:

function suma(a, b){
    return a + b
}
suma(2,2) //se ejecuta después

//que esto 

suma2(2,2) //se ejecuta primero

function suma2(a,b){
    return a + b;
}

//Las funciones son un claro caso de ciudadanos de primera clase, ya que reciben prioridad a la hora de alzar el código. function suma() siempre será cargado antes que su ejecución.
console.log(suma2(2,2))







