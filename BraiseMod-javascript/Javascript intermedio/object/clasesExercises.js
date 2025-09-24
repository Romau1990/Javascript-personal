//Agrega funcion al prototipo de un objeto

let user = {
    name: 'Rodrigo',
    surname: 'Alvarez',
    ocupation: 'carpenter',
    age: 35,
    pets: true,
}

user.saludar = function(){
   return`hola soy ${this.name} ${this.surname} y tengo ${this.age} años`;
}

let newUser = Object.create(user);

newUser.cambiarDato = function(propiedad,valor){
    newUser[propiedad] = valor;
}
console.log(newUser)
newUser.cambiarDato("name", 'Jose');
newUser.cambiarDato
console.log(newUser)

//Crea un objeto que herede de otro

let obj1 = {
    skills:['flamethrower', 'bubbles', 'water gun', 'blast', 'gigaimpact'],
}

let pokemon = {
    name: 'Charizard',
    type: 'fire',
    secondType: 'dragon',
    stages: ['charmander', 'charmileon', 'charizard'],
}

console.log(obj1)
Object.setPrototypeOf(obj1, pokemon) //modern way
console.log(obj1);
console.log(Object.getPrototypeOf(obj1));



let warrior = {
    name: 'Conan',
    dps: '55-73',
    race: 'Barbarian'
}

let equipment = {
    chest: 'ring mail',
    boots: 'iron boots',
    primaryWeapons: ['sword', 'shield'],
    __proto__: warrior, //old way
}

console.log(warrior);
console.log(equipment);


//Haz un get y set en un objeto


let proxy = {
    get(target, property){
        console.log(`Confirma que quiere acceder a balance`)
        return target[property]
    },
    set(target, property, value){
        console.log(target);
    }
}

class BankAccount {
    constructor(){
        this.balance = 100; 
    }

}

let acc = new Proxy(new BankAccount(), proxy);
console.log(acc)



//Utiliza la operacion assign en un objeto

let frutas = {
    productos:['peras', 'manzanas', 'melones', 'naranjas'],
}

let verduras = {
    productos: ['esparragos','acelgas','zanahorias','zapallos', 'lechugas']
}

Object.assign(frutas, verduras);

let tienda = Object.assign({}, frutas);
console.log(frutas);
console.log(tienda);



let final = Object.values(frutas).concat(Object.values(verduras));
console.log(final.flat());



//Desarrolla un singleton

class Singleton{
    constructor(name){
        this.name = name;
        if(Singleton.instance){
            return Singleton.instance;
        }
        else{
            Singleton.instance = this; 
        }
    }
}

let first = new Singleton('Rodrigo');
console.log(first.name);
let second = new Singleton('Manuel')
let third = new Singleton('Jessica');

console.log(first,second,third);