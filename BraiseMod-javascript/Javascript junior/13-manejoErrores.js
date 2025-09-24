//La idea de controlar el flujo de errores es poder ver de donde proviene el problema, capturarlos y solucionarlos de manera eficiente.

//ERROR
let val;
// console.log(val.email); //esto dará error porque val no esta definido y no es un objeto. Necesitamos capturar ese error para poder controlarlo. 



//1- TRY CATCH

try{
    //aqui se coloca el código que queremos analizar para ver si funciona o no. 
    console.log(val.email);
} 
catch{
    //si ocurre un error lo controlaremos dentro de catch, pero de la forma que querramos
    console.log('aca tenes un erorr flaco');
}


//En el caso anterior caputramos el error en catch pero solo lo mostramos en pantalla, pero podemos hacer otras cosas. 


try{
    console.log(val.email);
}
catch(error){
    console.log('se ha producido este error: ' + error);
    console.log(error.message);
    console.log(error.name);

}

//con catch podemos usar un parametro y así capturar el error y luego invocarlo cual si fuera una variable dentro de catch. Además dicho parametro contará con propiedades que podremos acceder con la notación del punto. 


//TRY CATCH FINALLY

try{
    console.log(val.email);
}
catch(error){
    console.log('acá esta el error: ' + error.message);
}
finally{
    //este código siempre se ejecuta haya o no error. Necesita del bloque catch siempre. 

}


//THROW
//Permite crear nuestro propio error personalizado.

// throw new Error('Se produjo un error forro, gil, salame');

let sum = function(a,b){
    if(typeof a != 'number' || typeof b != 'number'){
        throw new Error('numeros salame, NUMEROS')
    }
    else{
        return a + b
    }
}

console.log(sum(3,2));


let v = 2; 

if(Number.isInteger(v)){
   console.log(v);
}
else{
    console.log('nada');
}


//CAPTURAR VARIOS TIPOS DE ERRORES

try{
    console.log(azteca);
    console.log(azteca.email);
}
catch(err){
    console.log('no hay una variable con ese nombre', err.name);
    if(err instanceof TypeError){
        console.log('error de tipado gil');
    }
    else if(err instanceof ReferenceError){
        console.log('error de referencia bro'); 
    }
}