//RECURSIVIDAD -Es la capacidad de una función de llamarse a si misma. 


function valor(){
    let contador = 1;

    return function recursion(times){
        if(contador == times){
            console.log('listooooooo');
        }
        else{
            console.log('ejecución numero ' + contador);
            contador++
            recursion(times) //la funcion recursión se vuelve a ejecutar cuando se ejecuta. Si no establecemos una condicion para que esta deje de ejecutarse entonces tendremos un bucle infinito
        }
    }
}

let i = valor();
i(15);


//calcular factorial


let factorial = function(n){
    let total = n;
    for(let i= n; i >0; i--){
        total *= i
    }
    return total
}

console.log(factorial(6))