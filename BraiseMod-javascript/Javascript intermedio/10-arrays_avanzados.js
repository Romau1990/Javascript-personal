//Metodos de arrays 

//FOREACH() - Recorre el array y permite realizar modificaciones o corroborar datos pero no devuelve nada. Es muy parecido a un for of. Util para iterar y realizar acciones fuera del bucle como push() pop() shift(), counter++, etc.

let arrayPrueba = ['gato', 'perro', 'oso', 'leon', 'pez', 'tigre','huron','lince'];

arrayPrueba.forEach(animal =>{
    console.log(animal);
    console.log(animal + ' lindo');
    console.log(animal.toUpperCase());
    console.log(animal[0] == 'h');
    console.log(animal.length);
    console.log(animal.split('').reverse().join(''));
    return animal; //undefined porque no devuelve nada 
})





//MAP -sirve para retornar un nuevo array transformando cada elemento, pero no cambia el length del mismo. Si hay 10 elementos en el array original devolvera los 10 con las respectivas modificaciones que querramos. 

let firstUpperCase = arrayPrueba.map(animal =>{
    return animal.replace(animal[0], animal[0].toUpperCase());
})
console.log(firstUpperCase);


//Si forzamos un filtrado como en el caso de abajo el map nos devolverá los datos modificados pero el largo no cambiará ya que lo llenará con valores undefined si el resto de los valores no coinciden. 

let onlyP = arrayPrueba.map(animal =>{
    if(animal[0] == 'p'){
        return animal.replace(animal[0], animal[0].toUpperCase());
    }
})
console.log(onlyP);





//FILTER -Crea un nuevo array filtrando por la condicion estipulada. Filter evalua si la condicion es true or fale, de ser true la mete dentro del nuevo array, de lo contrario si es false simplemente la omite. 

//Solo los numeros pares seran filtrados a filtered. Nums tiene todos los numeros pero filtered solo los que cumplen con la condicion acordada. 

let nums = [];
for(let i = 0; i < 50; i++){
    nums.push(i)
}
let filtered = nums.filter(n =>{
    return n % 2 == 0; //filter() analiza si caa 
})
console.log(filtered)




//REDUCE -permite hacer un calculo tomando en cuenta un valor acc(total) y un curr(valor actual) con esos dos valores cada vez que itera hacer algo, puede ser sumar, restar, multiplicar, etc. Reduce retorna siempre un numero.

let valores = [12,15,21,44,6,4,16,33];

let reduced = valores.reduce((total, numeroActual) =>{
    return total += numeroActual // reduced comienza en 0 y toma el valor del numero actual o sea el del indice[0] y lo guarda en total, total ahora es 12 porque 0 + 12 = 12. Luego al total de 12 le suma el valor del numero actual, es decir indice[1] entonces total = 12 se suma a indice[1] que es 15 y así sucesivamente con todos los valores. El 0, luego del parentesis es opcional ya que comienza en 0 por defecto, pero podemos marcar otro punto de inicio que no sea 0. El valor 0 en este caso representa el valor de inicio de la variable total. 
},0)

console.log(reduced);




//FLAT() -aplana un array multidimensional [a,b [c,d [e,f ],g ],h ] generando un único array [a,b,c,d,e,f,g,h]. 

//FLAT() recibe un argumento por parametro que representa el numero de anidaciones que deseamos aplanar. Veamos: 


let arrMultiple = [1,2,[3,4,5,[6,7,8],9],10] //aqui tenemos tres niveles de array [ nivel1 [nivel2 [nivel 3 ] ] ] de profundidad. 

arrMultiple = arrMultiple.flat(1)
console.log(arrMultiple); //en este caso aplanamos un nivel, ahora tenemos solo 2 niveles


arrMultiple.flat(2);
console.log(arrMultiple.flat(2)); //aqui aplanamos dos niveles y solo nos quedamos con 1. Flat siempre nos dejará un minimo de 1 array.




//SORT -Devuelve el mismo array pero con los valores ordenados siguiendo un determinado criterio. Para ordenar números utilizamos el simbolo (-) param1 - param2 organiza de menor a mayor y param2 - param1 ordena de mayor a menor. También funciona con strings, de hecho sorted esta pensado más para strings que para numeros. 

valores = [12,15,21,44,6,4,16,33];
let sorted = valores.sort((a,b)=>{
    return a - b
});
console.log(sorted);



arrayPrueba = ['gato', 'perro', 'oso', 'leon', 'pez', 'tigre','huron','lince']
let animals = arrayPrueba.sort(); 
console.log(animals);

//REVERSE- Da vuelta el array

let arr = [1,2,3,4,5,6];
console.log(arr.reverse());
let ph =[ 'hola', 'mundo'];
console.log(ph.reverse());


//INCLUDES- busca una coincidencia dentro de un array. Recibe un dato como parametro. Devuelve true si existe o false si no existe en el array.
arrayPrueba
console.log(arrayPrueba.includes('gato'));
console.log(arrayPrueba.includes('faisan'));




//FIND- Busca la primer coincidencia dentro e un array y la devuelve. Si no hay coincidencia retorna undefined.

let res = arrayPrueba.find(animal =>{
    return animal[0] == 'l' //traeme el animal que empieza con la letra l.
})
console.log(res); //devuelve leon porque es la primera coincidencia ignore el resto de las coincidencias como lince.




//SOME -Devuelve la primera coincidencia tal cual find pero devuelve true or false en lugar del item. 

let res2 = arrayPrueba.some(animal =>{
    return animal[0] == 'l'; //Exite un animal que empiece con la letra l ??? 
})
console.log(res2);


//FINDINDEX- Me devuelve el indice de un elemento pasado por parametro. 

arrayPrueba

let index = arrayPrueba.findIndex(item =>{
    return item == 'perro'
})
console.log(index); //el indice de perro es el 5


//INDEXOF - Al contrario de findIndex este solo recibe el 

arrayPrueba
let index2 = arrayPrueba.indexOf('cat');
let index3 = arrayPrueba.indexOf('gato')
console.log(index2); //cat no existe en el array o sea -1
console.log(index3); //gato se encuentra en el indice 0


