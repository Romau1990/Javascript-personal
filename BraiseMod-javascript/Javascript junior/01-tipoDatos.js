//tipo de datos primitivos (no tienen métodos propios)

// alert("hola variables");

//Strings- cadenas de texto cuyos valores se definen entre "" o '' 
let cadenaTexto = "texto cualquiera"

//Number -valores numericos enteros, reales o decimales no llevan comillas de ningun tipo
let numeros = 12;
let decimal = 2.5;
let negativo = -4;

//Boolean -dos posibles valores true(1) o false(0). Tipo de dato lógico.
let verdadero = true;  //es verdadero
let esMayor = false; //no es mayor

//Undefined -el valor de una variable no ha sido definida aún. No es un error. 
let noDefinido; 
console.log(noDefinido) //undefined (no se ha inicializado ningun valor)

//Null -establecemos un valor de arranque null para dejar en claro de que una variable aún no tiene valor establecido intencionalmente. 
//null evita que un valor muestre undefined y a causa de esto generar alguna confusión en nuestro código. 
//basicamente el valor de null es que aún no tiene valor de manera intencional. 
let numeroSinValor; 
let numeroNoDefinido = null; 

//En el promer caso numeroSinValor mostrará undefined y quiere decir que la variable no fue inicializada
//En el segundo caso la variable fue inicializada con valor null intencionalmente. Esto ayuda a evitar errores. 

//Nan(not a number) -Avisa que el resultado no puede ser numerico. Es un error. 
let n1 = 12; 
let n2 = "Jose";
console.log(n1 + n2); //Nan. La expresion no puede ser sumada, porque numero + texto no se puede hacer.

//Symbol (usado para representar identificadores únicos)
let mySymbol = Symbol('idPersonalizada');
console.log(typeof mySymbol);