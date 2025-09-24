// QUE ES? 

//la union de dos o más strings

let saludo = "hola";
let nombre = "Rodrigo, ";
let preguntar = "¿como estás?";

window.print(saludo + nombre + preguntar); //hola Rodrigo, ¿como estás?
console.log(saludo + nombre + preguntar);
alert(saludo + nombre + preguntar);

//Como todas las variables son strings si se pueden sumar. Y basicamente juntará los textos. 

//que sucede si tenemos dos numeros y un string?

let number1 = 12;
let number2 = 4;


console.log(number1 + number2 + ""); //124 
//si se detecta que hay un string en la expresión, automaticamente todo se convertirá en una expresion
// 12 pasara a "12" y 4 pasara a "4"

//Concatenación fuerza todo a ser un string. 



//CONCAT()
//Podemos también concatenar usando el método de string concat() el cual une dos variables si solo si una de ellas es un string
let numero= 44;
let cadena = "hola ";
cadena.concat(numero); //"hola 44"



//BACKTICKS -esta es otra forma de concatenar strings pero nos permite ejecutar expresiones en el mismo.
//atajo de teclado de los backticks es altGr + tecla a la izquierda del enter.
let fn = 4;
let sn = 6;

console.log(`la suma entre 4 y 6 es ${fn + sn} y si luego dividimos entre 2 queda ${fn + sn / 2}`);
//este tipo de expresion permite realizar calculos internos a las comillas usando ${} lo cual es muy util.




//ESCAPE COMILLAS DOBLES Y ESCAPE DE COMILLAS SIMPLES

let frase = "Hola, soy Rodrigo y me dicen el "crack" "; //esto esta mal ya que no puedo usar la misma comilla para encerrar texto que ya esta encerrado con comillas ""

//Para soluconar esto usamos las comillas dobles junto con la simples

frase = 'Hola, soy Rodrigo y me dicen el "crack" ';

//o también

frase = "Hola, soy Rodrigo y me dicen el 'crack' "; //funciona igual