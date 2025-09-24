//Condicionales if(){}


//determina el flujo de ejecución de ciertas lineas de código ignorando otras en base a una condicion cumplida. 
//if(condicion == true){ TRUE: se ejecuta esto} else{ FALSE: se ejecuta lo otro}

let condicion = 12; 
let condicion2 = 4;

if(condicion < condicion2){
    console.log('si es menor');  
}
else{
    console.log('no es mayor');  //false condicion2 es menor, por ende se mostrará esta linea e ignorará la primera.
}


if(condicion == condicion2){
    console.log("si ambos son iguales");
}
else{
    console.log("no, las variables son diferentes"); //false, las variables no son iguales. Se ejecuta esta. 
}


if(condicion > 0 && condicion > condicion2){
    console.log("si, 12 es mayor a 0 y mayor a 4"); //TRUE: condicion cumple ambas condiciones
}
else{
    console.log("no esto es falso");
}



if(condicion < 0 && condicion > condicion2){
    console.log("si, 12 es menor a 0 y mayor a 4")
}
else{
    console.log("no, 12 no es menor a 0 aunque sea mayor a 4"); //12 es mayor a 4 pero no es menor a 0, o sea, false. Se ejecuta este. 
}

let n1= 3;
let n2= "3"; 

if(n1 == n2){
    console.log("si ambos valores son iguales"); //TRUE, ambos son iguales 3 == 3; 
}
else{
    console.log("no, no son iguales");
}


if(n1 === n2){
    console.log("si ambos son extrictamente iguales, sus valores y tipos de datos son iguales");
}
else{
    console.log("no, no son extrictamente iguales"); //FALSE, no, si bien ambos son 3, los tipos de datos son diferentes, uno es number y el otro es string. 
}


let = 4; 
let nombre = "Rodrigo";

//usar el ! delante de la variable implica que el valor será el opuesto al establecido, nombre = "Rodrigo" = true, por ende "false"

if(!nombre){
    console.log("no, se ingresó nombre");
}
else{
    console.log("si, se ingreso nombre"); //false, nombre esta inicializado con el valor "Rodrigo". Se ejecuta este codigo
}


let str1 = "";
let str2 = "algo";
//if(str1 || str2) quiere decir, si al menos una de las variables es true entonces true. str1 es false, pero str2 es true.
if(str1 || str2){
    console.log("si, al menos una de las variable es true"); //true, se ejecuta este. 
}
else{
    console.log("no, ambas variables estan vacias");
}


//else if concatena varias condiciones
let cantidadJuan = prompt("Cuanto dinero tiene Juan?");
let cantidadJose = prompt("Cuanto dinero tiene Jose?");
let cantidadRodrigo = prompt("Cuanto dinero tiene Rodrigo?");

if(cantidadRodrigo > cantidadJose && cantidadRodrigo > cantidadJuan){
    console.log("Rodrigo es el que tiene más dinero de todos");
}
else if(cantidadRodrigo < cantidadJose && cantidadRodrigo < cantidadJuan){
    console.log("Rodrigo es el que tiene menos dinero de todos");
}
else if((cantidadRodrigo < cantidadJose && cantidadRodrigo > cantidadJuan) || (cantidadRodrigo <cantidadJuan && cantidadRodrigo > cantidadJose)){
    console.log("Rodrigo no es el que tiene más pero tampoco el que tiene menos dinero");
}
else if(cantidadRodrigo == 0){
    console.log("Rodrigo no tiene un sope, esta pelado.");
}


let precioHamburguesa = prompt("Cuanto sale la hamburguesa?");

let miBilletera = prompt("Cuanto tengo yo?");

if(precioHamburguesa > miBilletera){
    window.write("no te alcanza el dinero");
}
else if(miBilletera > precioHamburguesa){
    let decision = confirm("Quieres comprar la hamburguesa?");
    //if anidado, si esta condicion se cumple se activará otro if con otras condiciones.
    if(decision){
        alert(`Has comprado la hamburguesa, ahora te queda ${miBilletera - precioHamburguesa} disponible`);
    }
    else{
        alert("Te retiras sin comprar nada");
    }
}
else if(miBilletera == 0){
    alert("raja de mi local pobre mugriento");
}


let valor = 12; 
console.log(valor);