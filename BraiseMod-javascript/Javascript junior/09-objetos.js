//OBJETOS


//SINTAXIS BASICA

let object = {
    name: 'Rodrigo', //par clave(key) - valor(value)
    surname: 'Alvarez', //key = surname - value = 'Alvarez'
    age: 32,
    gender: 'Male',
    'is married': true, //siempre separamos con , todos los pares incluso el ultimo
}


object.pets = true; 
console.log(object);
console.log('mi nombre es: ' + object.name)
delete object['is married']; //si la key es creada como string la forma de ingresar a ella es usando los [] aunque la notacion del punto es mas comun
console.log(object)


//RECORRIENDO EL OBJETO
//el for in es lo que el for of es para los arrays

for(let i in object){
    console.log(i + ' ' + object[i]) //con i accedo a las keys y con object[i] accedemos a los values
}



//METODOS
//los metodos no son otra cosa que funciones dentro de un objeto

let animal = {
    specie: 'cat',
    legs: 4, 
    sound: 'meow',
    jump: true, 
    giveOrder: (order)=>{
        return 'the cat ' + order; //funcion flecha
    },
    run: function(){
        return 'the cat is now running'; //funcion anonima
    }, //con coma luego de cada funcion

    ownerInfo: {
        name: 'Matin',
        age: 32, 
        nationality: 'Uruguayan',
        gender: 'Male',
    }, //también podemos crear objeto dentro de objetos. Ojo que no es ownerInfo = {} sino ownerInfo: {} ya que es una clave (key)
}

console.log(animal.ownerInfo.age);
console.log(animal.giveOrder('sits'));
console.log(animal.ownerInfo.nationality); //asi podemos ingresar a un objeto dentro de otro. Como si entraramos a un objeto normal, con el .


//crear un objeto desde otro tipo de dato

let animals = ['cat', 'dog', 'lizard', 'bird', 'parrot', 'snake'];


//convirtiendo desde un objeto vacío.
let newObj = {};
Object.assign(newObj, animals);
console.log(newObj)


//conviertiendo desde un objeto que aún no ha sido creado. 
let newObj2 = Object.assign({}, animals);
console.log(newObj2)

//en ambos casos el resultado será el mismo. 


//Por más que dos objetos tengan el mismo contenido y solo varíe su nombre, los objetos nunca seran iguales ya que apuntan a espacios de memoria completamente diferentes. 

let person1 = {
    name: 'Rodrigo',
    surname: 'Alvarez',
    age: 34,
}

let person2 = {
    name: 'Rodrigo',
    surname: 'Alvarez',
    age: 34,
}

console.log(person1 == person2); //false
console.log(person1 === person2); //false

//estos dos objetos apuntan a espacios de memoria diferentes. Ahora la historia es un poco diferente si comparamos las propiedades internas de cada uno de los objetos. 

console.log(person1.name == person2.name); //true


//USO DEL CONTEXTO THIS

let animal2 = {
    specie: 'cat',
    legs: 4, 
    sound: 'meow',
    jump: true, 
    giveOrder: (order)=>{
        return 'the cat ' + order; 
    },
    run: function(){
        return 'the cat is now running';
    }, 
    ownerInfo: {
        name: 'Matin',
        age: 32, 
        nationality: 'Uruguayan',
        gender: 'Male',
        legs: 2,
        hasLegs: function(){
            console.log('has ' + this.legs + ' legs'); //2 apunta a legs del objeto contenedor ownerInfo y NO al objeto padre superior. El this siempre busca el contexto de ejecución. En el bloque contenedor {}
        },
        hasLegs2: ()=>{
            console.log('has ' + this.legts + ' legs'); //undefined. Arrow functions no tienen this.
        }
    }, 
}

console.log(animal2.ownerInfo.hasLegs()); //legs is not defined
//Miremos ahora el método hasLegs(). Por que dice que legs no esta definido si de hecho lo esta y su valor es 4?
//Esto se debe a que no encuentra el contexto de ejecucion de dicha propiedad. Para ello debemos utilizar siempre el this. por delante para acceder a sus propias propiedades. En el contexto de arriba this.legs apunta a legs dentro del objeto ownerInfo y no al de animal2

//o sea: 

console.log(animal2.ownerInfo.hasLegs());

//cuidado! el contexto this. no existe en métodos creados a partir de funciones flecha ()=> si queremos que esto funcione deberemos usar function(){} la funcion anonima. 



//Objeto constructor

function Person(name, age){
    this.name = name;
    this.age = age;
    this.showData = function(){
        return `soy ${name} y tengo ${age} años`;
    }
}

let p1 = new Person('Rodrigo', 34); //instancias del objeto constructor con su this. propio 
let p2 = new Person('Mariana', 22);
let p3 = new Person('Sofia', 16);

console.log(p1.showData());
console.log(p2.showData());
console.log(p3.showData());