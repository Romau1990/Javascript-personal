//DESESTRUCTURACION Y PROPAGACION (SPREAD)


function valor(n1, n2, ...st){ //... SPREAD-convierte los argumentos en un array con ellos dentro
    console.log(n1, n2);
    console.log(st);
}

valor(12,41, 'hola', 'chau', 'Rodrigo')


let numberSet = [4,13,17,21,44,32,15,7,3,1];

let newNumberSet = [...numberSet];
console.log(newNumberSet) //basicamente creo una copia de otro array usando la notacion de los tres puntos... 
//Esta copia no apunta al mismo espacio de memoria que numberSet ya que eta almacenado en otra variable. 
//Que sucede si hacer esto:

let newArr = [numberSet]
console.log(newArr)
//En este caso creamos un array bidimensional [[]] y no e lo que queremos, solo queremos que tenga un []
//Por otra parte podriamos igualar un array con el otro, pero en dicho caso ambos apuntarian al mismo espacio de memoria 

let newArr2 = numberSet
console.log(newArr2) //apunta al mismo espacio de memoria



//SPREAD MULTIPLE 

let spreadMultiple = [...numberSet, ...newNumberSet, ...newArr2];
console.log(spreadMultiple)
//basicamente podemos juntar varios ...arrays y estos quedaran todos juntos dentro de uno solo. Eso es el spreading de un array que contiene varios dentro solo quedaria un array unidimensional. 



//SPREAD CON OBJETOS

let car = {
    speed: 0,
    wheels: 4,
    doors: 4, 
    color: 'red',
    maxWeight: 300,
    price: 20000,
    brand: 'Hyundai',
    speedUp(km){
        console.log('the car started to speed up');
        console.log('its running at ' + km + 'kmph');
        km > 100 && km < 130 ? console.log('you\'re driving quite fast'):
        km >= 130 ? console.log("yor're driving quite fast, slow down"):
        km <= 100 && km >= 80 ? console.log("you're driving at a descent speed"):
        km < 80 ? console.log('too slow, get out of the way old man'):
        console.log('the car does not move');
    }
}

delete car.speed;
console.log(car.speedUp(150));
let newObj = {...car, isSportive: false}; //clono el obj y además agrego más propiedades
console.log(newObj);




//DESTRUCTURACION DE ARRAYS

let animals = ['cat', 'dog', 'parrot', 'lizard', 'spider', 'bear', 'dolphin', 'hypo'];

let [animal1, animal2] = animals; 
console.log(animal1, animal2)

//en este caso igualamos un array con dos valores a un array con más valores, lo que hace JS en este caso es tomar los dos primeros valores de indice 0 y 1 y asignarlos a las variables disponibles dentro del nuevo array, por ende terminaremos con animal1 = 'cat' y animal2 = 'dog'.. o sea... ['cat', 'dog']
//En este caso como quiero asignar 2 variables vacias que estan en un array de otros valores que tambien estan en un array, lo puedo hacer, pero si no son la misma cantidad cortara hasta donde llegue en base a los indices. 

let nuevoArrayAnimales = [animalIndice0, animalIndice1, animalIndice2] = animals; 
//esto claramente dara 'animalIndice 0 = 'cat', animalIndice1 = 'dog', animalIndice2 = 'parrot';
//a esto se le dice desestructurar porque tomamos un array asignado a una unica variable y creamos diversas variables para cada uno de los elementos del array. 

//DESESTRUCTURACION CON VALORES POR DEFECTO

let numeros = [4,3,5,7,2];
let [n1,n2,n3,n4,n5,n6 = 'null'] = numeros; 
console.log(n6)

//n1 = 4 , n2 = 3, n3 = 5, n4 = 7, n5 = 2, n6 = 'null' 
//n6 vale 'null' porque yo se lo establecí y como el array original no tiene 6 elementos tomará el que establecí por defecto. Esto puedo hacerlo con toods los elementos del array. 


//OMITIENDO VALORES
let [n7, , n9, , n11] = numeros; 
//esta sintaxis omitira los valores 3 y 7; pero guardará el resto en las respectivas variables
console.log(n7,n9,11); //4, 5, 11

let arrN = [5,3,7,12,44,21,18,9,10];

let [v1, v2, v3] = arrN;




//DESESTRUCTURACION DE OBJETOS

let person = {
    name: 'Rodrigo',
    surname: 'Alvarez',
    age: 34,
}

//esto funciona muy parecido a la desestructuracion de un array solo que cambiamos los [] por {}

let {name, surname, edad} = person;

//en el caso de los objeteos cuando desestructuramos debemos usar los mismos nombres existentes dentro del objeto para poder encontrar sus valores. Si cambiara los nombre de las variables me daria undefined como en el caso de age
console.log(name)
console.log(surname);
console.log(edad);


//si queremos renombrar el nombre de las claves cuando desestructuramos lo que tenemos que hacer es lo siguiente: 

let {name: nombre, surname: apellido, age: nuevaEdad} = person; 

console.log(nombre)
console.log(apellido);
console.log(nuevaEdad);
//ahora si podemos usar los nuevos nombres de variables

//Usamos la desestructuracion cuando queremos crear varia variables a partir de un objeto o array





//EJERCICIOS


//EX1 

let nameSet = ['Carla', 'Mariana', 'Juan', 'Jessica', 'Patricia', 'Felipe', 'Rodrigo', 'Martin'];

let [firstPerson, secondPerson, thirdPerson] = nameSet; 

console.log(firstPerson);
console.log(secondPerson);
console.log(thirdPerson);

//EX2

let [v4, v5, v6, v7, v8, v9, v10, v11, v12 = 'no tiene nombre'] = nameSet;

console.log(v12);
console.log(v4);


//EX3

let obj2 = {
    name: 'Kevin',
    surname: 'Emilio',
    age: 21,
    hasPets: true,
    likes: null,
    otherData: {
        address: null,
        tel: 32434545,
        currentlyStudying: true,
        studies: 'Biology',
    }
}

let {name:n, surname:a, age:e} = obj2

console.log(n);
console.log(a);
console.log(e);


//EX5

let {otherData:personalData ={tel:cel, studies:degrees}} = obj2

console.log(personalData);
console.log(personalData.tel);
console.log(personalData.studies);


//EX6

let arr4 = [1,2,3,4,5];
let arr5 = [6,7,8,9,10];
let finalArr = [...arr4, ...arr5];
console.log(finalArr);


//EX7

let copy = [...arr4];
console.log(copy);

//EX8

let newObj1 = {...obj2, mother: true, father: true, cibilings: 2};
console.log(newObj1);


//EX9

let objCopy = {...obj2};
console.log(objCopy);



//EX10
let x = 5;
let y = 10;

[x, y] = [10,5]


//EX11
const user = {
    name: 'Rodrigo',
    age: 34,
    nationality: 'uruguayan'
}

let {name:nom, age, nationality: nat, gender = 'Male', knowEnglish = true} = user;
console.log(nom);


//EX12
let frontend = ['html', 'css'];
let backend = ['javascript','PHP', 'node.js']
let fullstack = [...frontend, ...backend];
console.log(fullstack);



//EX13
let car2 = {
    brand: 'Toyota', 
    model: 'Corola'
}

let {, , country = 'Japan', price = '500000'} = car2


















//Esto funciona como un if.. si el primer valor no es true, pasa al segundo, si el segundo no es true, pasa al tercero...
//basicamente los tipos de datos que podemos usar en este caso son undefined y null para que estos no sean reconocidos.


let obj = {
    nombre: null, //no encuentra el primero, muestra el segundo
    surname: null, //no encuentra el segundo, muestra el tecero
    age: 34,
    nickname: 'El sadico' //el tercero si tiene valor, o esa, true. Si es true entoces lo muestra. 
}

let arr = [null, 'dog', 'bird', 'turtle'];


console.log(obj.name ?? obj.surname ?? obj.nickname);
console.log(arr[0] ?? arr[1] ?? arr[2] ?? arr[3])