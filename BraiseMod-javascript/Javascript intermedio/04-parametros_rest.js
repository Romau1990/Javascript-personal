//PARAMETROS REST (...param)


//FUNCIONES PRINCIPALES: 

/*
    1-agrupar varios valores en un solo array de datos: Es decir, a,b,c = [a,b,c]
    2-hacer una copia llana de un array de datos. Esto ayuda a que ambos arrays NO apunten al mismo espacio de memoria ni tengan la misma referencia. 
    3-Excelente para usar como parametro en las funciones cuando no sabemos cuantos argumentos recibirá la función.
*/


function pairsVsOdds(...arr){
    let pairs = ['pairs '];
    let odd = ['odds '];

    arr.forEach(n =>{
        n % 2 == 0 ? pairs.push(n) : odd.push(n)
    })

    pairs = pairs.filter(item => typeof item == 'number');
    odd = odd.filter(item => typeof item == 'number');
    pairs = pairs.reduce((a, b) => a+=b);
    odd = odd.reduce((a,b) => a += b);
    console.log(pairs-odd)

    pairs > odd ? console.log('pairs win') : console.log('odds win');
}
pairsVsOdds(4,12,33,21,15,44,19,15,32,88,91,73,54,69,100)

//en el caso de arriba vemos como todos los números son almacenados en un simple ...arr como parametro. 