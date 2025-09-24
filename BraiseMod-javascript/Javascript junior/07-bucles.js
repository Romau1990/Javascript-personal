//bucle FOR BASICO

// for(let i= 0; i < 10; i++){
//     console.log(i);
// }

let val = 11; 


//BUCLE WHILE
//el interprete analiza la condicion y si se cumple ejecuta el codigo dentro de while, ponemos val++ para que cada iteracion su valor aumente y no se genere un bucle infinito.

// while(val <= 10){
//     console.log(val);
//     val++;
// }


//BUCLE DO WHILE
//El interprete ejecuta el bloque de codigo de do al menos una vez antes de analizar la condicion, incluso si esta no se cumple se ejecutará una vez. 
do{
    console.log(val);
    val++
}
while(val <= 10)


//FOR OF
//este tipo de bucle es especifico para los arrays y facilita mucho el acceso a ellos.

let animals = ['cat', 'dog', 'parrot', 'fish', 'spider', 'dolphin'];

// for(animal of animals){
//     console.log(animal);
// }
//basicamente esto hace que no debamos usar animal.length como en el caso del for clásico. Animal es la variable (i) de iterator y animals es el nombre de la variable del array. Y listo animal iterara sobre cada valor del array. 
//tambien podemos buclear con for clasico y for of los Sets
let newSet = new Set(animals);

// console.log(newSet.size);

for(s of newSet){
    console.log(s); 
}

for(let i = 0; i< newSet.size; i++){
    console.log('este numero es el: ' + animals[i]);
}

//a diferencia de set, map no funciona con for.
let obj = {
    name: 'Rodrigo',
    surname: 'Alvarez',
    age: 34, 
    gender: 'Male',
}

let map = new Map();
map.set('name', 'Rodrigo');
map.set('surname', 'Alvarez');
map.set('age', 34);
map.set('gender', 'male')


for(m of map){
    console.log(m[0]) //accedo a las claves 
    console.log(m[1]) //accedo a los valores 
}

//conclusion: con for podemos acceder tanto a map como set, como arrays u objetos. Pero, su uso principal se da con los arrays.



//BREAK Y CONTINUE EN BUCLES
animals = ['cat', 'dog', 'parrot', 'fish', 'spider', 'dolphin'];
let final = [];
console.log(animals);
for(let a of animals){
    if(a[0] == 'd'){ //se omiten todas las palabras que comienzan con d, o sea, dog y dolphin, las demas son almacenadas dentro del array 'final'
        continue; //nos sirve para omitir cualquier dato que cumpla la condicion
    }
    else{
        final.push(a)
    }

}

console.log(final)

for(let i of animals){
    if(i.length > 4){
        console.log(i)
    }
    else{
        continue; //si la palabra tiene menos de 4 letras las omitirá. 
    }
}


for(let i of animals){
    if(i[0]== 'd'){
        break; //el break sirve para manipular el control de flujos, una vez encuentro una palabra que inicia con 'd' ya no buscara más y se detendra allí. Excelente si queremos evitar exceso de iteraciones innecesarias y solo queremos encontrar un unico valor en nuestro array que cohincida con la condicion. 
    }
    else{
        console.log(i)
    }
}




//BUCLES EJERCICIOS


//EX 1


// for(let i = 1; i <= 20; i++ ){
//     console.log(i)
// }

//EX 2

// let acc = 0;

// for(let i = 0; i <= 100; i++){
//     console.log(acc+=i);
// }


//EX 3

for(let i = 0; i <= 50; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

let names = ['Rodrigo', 'Mariana', 'Sofia', 'Jesica', 'Jose', 'Martina', 'Raul', 'Evangelina'];

// for(let name of names){
//     console.log(name);
// }

let chain= 'Hola, soy Rodrigo Alvarez. Un gusto'

let counter = 0;
for(let i = 0; i < chain.length; i++){
    let letter = chain[i].toLocaleLowerCase();
    if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
        counter++
    }

}
console.log(counter)


//ex 6

let arrNumeros = [5,4,7,1,3,8,12,6];

let res = 1; 

for(mult of arrNumeros){
    res *= mult;
}
console.log(res);


//ex 7
let arrMult = []
for(let i = 1; i <= 10; i++){
    arrMult.push(i * 5);
}

console.log(arrMult);

let arrayMult = []
let i = 1;
while(i <= 10){
    arrayMult.push(i*=5);
    i++;
}

//ex 8

let chain2 = 'hola soy Rodrigo';

let inverted = []
for(let i = chain2.length; i >= 0; i--){
    inverted.push(chain2[i])
}

console.log(inverted.join(''))


let toSplit = chain2.split('');
let toInvert = toSplit.reverse();
let finished = toInvert.join('');
console.log(finished)


//ex 9

let biggerThanTen = [];

for(let i of arrNumeros){
    if(i >= 10){
        biggerThanTen.push(i)
    }
    else{
        continue;
    }
}

console.log(biggerThanTen);


//ex 10
let ini = 0;
while(ini <= 100){
    console.log(ini);
    ini++
}

//ex 11


let random = Math.round(Math.random()*10);
console.log(random);

//ex11

// let acc= 0;
// let init = 40;
// setTimeout(()=>{
//     do{
//         console.log('Ejecutando...')
//         acc += init;
//         init++;
//     }
//     while(init <= 50);
    
//     console.log(acc)
// },3000, ()=>{
// })



//EX 12 pedir un numero hasta que sea mayor a 10




// while(true){
//     let value = prompt('inserte un numero', 'del 11 en adelante');
//     if(value == null){
//         alert('elegi un numero')
//     }
//     else{
//         if(value <= 10){
//             alert('el numero debe ser mayor a 10');
//         }
//         else{
//             alert('elegiste el numero '+ value);
//             break;
//         }
//     }
// }

// do{
//     alert('Hola usuario');
//     let c = confirm('le gustaria recibir mas informacion?');
//     if(c == false){
//         break;
//     }
//     else{
//         let quary= prompt('Que le gustaria saber?', 'deje su consulta aqui o escribe salir para salir');
//         if(quary.toLowerCase() == 'salir'){
//             break;
//         }
//         else{
    //             alert('Gracias por dejarnos su consulta. Lo llamaremos a la brevedad posible');
    //             break;
    //         }
    //     }
    // }
    // while(true);
    
    // while(true){
// let tries = 3;
//     let userName = prompt('ingrese su nombre');
//     let pswd = prompt('ingrese su contraseña');
//     if(pswd != '12345' || userName != 'User12345'){
//         tries--
//         alert('contraseña incorrecta te quedan ' + tries + ' intentos');
//         if(tries == 0){
//             alert('Cuenta bloqueada temporalmente, intentelo más tarde');
//             break;
//         }
//     }
//     else{
//         alert('informacion ingresada correctamente. Bienvenido ' + userName);
//         break;
//     }
// }



//ex13


function invert(st){
    return st.split('').reverse().join('');
}


function reverse(st){
    let splitted = st.split('')
    let reversed = []
    for(let i = splitted.length; i > 0; i--){
        let el = splitted[i]
        reversed.push(el);
    }
    return reversed.join('');
}

console.log(reverse('hola soy Rodrigo Alvarez'));


//Ex14

function countLetters(st){
    let count = 0; 
    let words = st.split(' ');
    
    for(let word of words){
        console.log('la longitud de la palabra "' + word + '" es de ' + word.length+ ' caracteres');
    }
}

console.log(countLetters('hola soy Rodrigo Alvarez, mucho gusto en conocerte'));


//ex 15
