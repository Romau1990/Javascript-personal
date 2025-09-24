//Existen tres tipos de variables (var, let, const)

var numero= 2; 
let numero = 4; 
const pi = 3.14; 

// const es una constante cuyo valor no puede ser modificada una vez declarada. Es normalmente la variable más usada por su encapsulamiento. 
//const ayuda a evitar futuros errores de sobreescritura indeseada, por eso es la más usada. 
//const debe ser declarada y finalizada en la misma linea de lo contrario mostrará error. 
const valor = 12; 
valor = 43; //error el valor real es 12 y no puede ser cambiado más abajo.


//let y var si pueden ser redeclaradas más abajo. 
let testeo = "Hola";
testeo = "Chau"; //esta perfecto, no hay error y su valor a sido modificado. 



//declaracion de variable

let declarada; // DECLARACION -solo esta declarada pero no se le ha dado nu valor aún. Esto dará undefined.
declarada = "hola"; // INICIALIZACION -la variable ahora a sido inicializada. 

let todoEnLinea = "hola" //declaracion e inicialización todo en la misma linea. 



//DECLARACION MULTIPLE DE VARIABLES
let valor1, valor2, valor3;
valor1= 5;
valor2= 6;
valor3= 12; 
//o también
let valor4 = 6, valor5 = 14, valor6 = 22; 


if(valor == 4){
    console.log('sabelo');
}
else{
    console.log('ni puta idea')
}
