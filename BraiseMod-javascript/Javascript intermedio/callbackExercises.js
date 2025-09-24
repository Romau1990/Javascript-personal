//Cree una funcion que retorne otra funcion

function pasarValores(...valores){
    return valores.reduce((a, b) => a+= b);
}

function mostrarResultado(func, ...numeros){
    return 'el resultado final es: ' + func(...numeros)
}

console.log(mostrarResultado(pasarValores, 5,4,2,7,9,12,16,2,100));

