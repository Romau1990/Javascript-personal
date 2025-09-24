//CALLBACKS (LLAMADAS HACIA ATRÁS)
//usar una funcion como argumento para otra funcion


function datos(dato1, callback){
    
}

function sumar(a, b){
    return a + b
}

function datos(func, n1, n2){
    
    return func(n1, n2)
}

console.log(datos(sumar,12,5));


//FUNCIONES DE ORDEN SUPERIOR -Son aquellas que reciben otra funcion como argumento. 