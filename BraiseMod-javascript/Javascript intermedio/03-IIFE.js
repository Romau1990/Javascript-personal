/*

IIFE(Immediately invoke function expression)

*/


//IIFE CLASICO

(
    function(){
        console.log('hola');
    }
)()

//para usar IIFE primero debemos asegurarnos e que la linea de código anterior a esta ejecución termine en ; (punto y coma) de lo contrario no funcionara


//IIFE ARROW FUNCTION

(() =>{
    console.log('hola');
})()

//PROPOSITO - Es una buena forma de ejecutar algo rápido y que luego esas funciones desaparezcan y no queden dentro del entorno global. Hoy en día no es muy abitual verlas en el código ya que contamos con depuradores y recolectores de basura que se encargan de limpiar todo aquello que ya no se usa. 


