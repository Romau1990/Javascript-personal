//CLOSURES
//Las closures son basicamente funciones que se ejecutan dentro de otras funciones, esto es especialmente util para no tener el ambito global contaminado con variables externas que luego pueden perderse. Lo que hace es encapsular el código pero manteniendo el entorno de ejecucción intacto. Ej: En el caso que sigue yo podría tener mi counter = 0 fuera de la función, pero esto puede generar que otra variable en otra parte de nuestro codigo pueda manipular su valor de manera no intencionada. 

//miremos el siguiente contador. Lo que estamo haciendo es ejecutar la funcion e incrementar el contador en uno con el ++ que eta dentro de la funcion interna. Ahora si ejecutamos la funcion varias veces, notaremos que el valor siempre da 1 y counter no guarda el valor en memoria. Esto se debe a que una funcion esta pensada para ejecutarse una vez y listo. Luego, si la volvemos a ejecutar todas sus variables internas se reestean también. Esto implica que cada ejecución de funcion haga que counter se reinicie en 0. 

//Pero, si no queremos eso? Si queremos guardar o recordar el valor de la ejecución anterior sin tener que dejar el counter en el entorno global? 
//Fácil, ejecutamos la funcion padre y la almacenamos en una variable. Esta variable ahora llama solamente a la funcion interna usando los () pero no resetea a la funcion padre o wrapper haciendo que counter nunca vuelva a 0 sino que conserve su valor previo. En ese caso cada ejecución de la variable v() causará que la funcion valor() se ejecute pero que la funcion mostrarValor quede etatica y no se resetee. 

function mostrarValor(){
    let counter = 0;
    return function valor(){
        counter++
        console.log('el valor del contador es: ' + counter);
    }
}

let v = mostrarValor();
v()
v()


//Lo que permite esto es encapsular las variables y los resultados de ser alcanzados por accidente desde afuera. Protege el código y mantiene el ambito global intacto. 


function sumar(){
    let valor = 0; 
    return function(v){
        console.log(valor +=v);
    }
}


let s = sumar()
s(12)
s(12)
s(32)
s(55)