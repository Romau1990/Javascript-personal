//CIUDADANOS DE PRIMERA CLASE



//Caracteristicas de las funciones: 

/*

1- pueden ser almacenadas en variables como si fueran valores
2- pueden ser pasadas como parametros o argumentos de otras funciones
3-pueden ser almacenadas en arrays y objetos cual si fueran valores

*/


function greet(name){
    console.log("hola " + name);
}

function showGreet(fn){
    return fn('Rodrigo')
}

showGreet(greet)


//Lo que hicimos arriba fue pasar una funcion sin ejecutar como argumento al parametro de showGreet. En showGreet finalmente ejecutamos la funcion con el argumento 'Rodrigo' este argumento satisface el parametro que pide la funcion que fue pasada greet. Y como greet ya venía con un console.log() no tuvimos que crear uno en showGreet(greet);

/*
Resumiendo una funcion fue pasada como argumento para el parametro de otra. 
Luego se ejecuto dentro de la otra. 

*/

//Veamos otro ejemplo parecido


function suma(a,b){
    console.log(a + b);
}

function calcularSuma(fn, num1, num2){
    return fn(num1, num2)
}
calcularSuma(suma, 2,2)

/*
El caso de arriba es similar al anterior, solo que acá los argumentos que satisfacen a suma() que es la funcion que realiza la suma dependen de dos argumentos de la funcion wrapper. Es decir la función que anida a suma() suma requiere de dos numeros, pero estos son pasados en el momento de retornar el valor de calcularSuma() con parametros propios. */