//CURRYING - Es una forma de empaquetar funciones una dentro de la otra para que cada una se dedique a hacer algo en particular. Básicamente es una forma de descomponer una funcion más compleja
//Una forma de entender los currying es que son closures encadenados uno dentro de otro.
//EJ: 

function first(a){
    return function second(b){
        return function third(c){
            return a + b + c
        }
    }
}
console.log(first(1)(3)(5));



function siempreDos(n){
    let mult = 2; 
    return n * mult;
}
siempreDos(5)
siempreDos(7)
siempreDos(12)


//ejercicios de prueba


// Suma curryada
// Armá una función sumar(a)(b)(c) que devuelva la suma de los tres números.


function sumar(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}
let firstSum = sumar(5);
let secondSum = firstSum(10);
let thirdSum = secondSum(15);
console.log(thirdSum)

// Multiplicador curryado
// Hacé una función multiplicar(a)(b) que devuelva a * b.

function multiplicar(a){
    return function(b){
        return a * b; 
    }
}

let m1 = multiplicar(12);
console.log(m1(4));


// Saludo personalizado
// Creá saludar(saludo)(nombre) que devuelva "Hola Rodrigo", "Buenas Juan", etc.

// Potencia curryada

let greet = function(saludo){
    return function(name){
        return saludo + ' ' + name; 
    }
}

let n = greet('Que dice mi estimado');
console.log(n('Rodrigo'));


// Potencia curryada
// Hacé una función potencia(base)(exponente) que devuelva base^exponente (usá **).

let exponente = function(base){
    return function(exponente){
        return base**exponente; 
    }
}
let exp = exponente(5);
console.log(exp(3));


// Verificador curryado
// Hacé esMayorQue(limite)(numero) que diga true o false según si numero > limite.

function esMayorQue(limit){
    return function(n){
        return n > limit
    }
}
let m = esMayorQue(12);
console.log(m(13));


// Reemplazo curryado
// Crea reemplazar(buscar)(reemplazo)(texto) que reemplace todas las ocurrencias de buscar por reemplazo en texto.

let str = "Por que no te vas un poquito a la mierda, pedazo de sorete."

let replace = function(text){
    let swearing = ['cagar', 'mierda', 'sorete']
    return function(){
        return swearing.map((swear) => {
            if(text.includes(swear)){
                return text.replaceAll(swear, '******')
            }
        })
        
    }
}
let censure = replace(str);
console.log(censure());