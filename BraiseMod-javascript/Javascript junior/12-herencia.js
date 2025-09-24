//Herencias de clases
//Para entender la herencia debemos entender que una clase hereda de la otra sus propiedades y métodos. Esto se hace para que no esa necesario tener que repetir el mismo metodo o propiedad en cada una de las clases ya que todas provienen de la misma. En el caso de abajo, la clase Padre o la clase super es la clase Animal.


//Animal tiene parametros cuyos argumentos seran entregados por las clases hija. Y un parametro que funcionara en todas las clases llamado getHbitat(). Por lo demás no hay diferencia. 

class Animal{
    constructor(specie, kind, habitat, lifeSpan){
        this.specie = specie; 
        this.kind = kind; 
        this.habitat = habitat;
        this.lifeSpan = lifeSpan; 
    }

    getHabitat(){
        console.log(this.habitat);
        return this.habitat;
    }

}


//Insectos es una clase hija y hereda o se extiende de la clase padre Animal usando la palabra extends y el nombre de la clase padre. El constructor debe tener los mismos parametros que la clase padre en el mismo orden, no necesariamente el mismo nombre pero es aconsejable por legibilidad. Luego de agregar los parametros que serviran como argumentos a la clase padre, agregamos los parametros especificos que querramos a la clase local.

//Dentro del constructor agregamos super() y pasamos como argumento los mismos parametros con el mismo nombre que la clase padre Animal, ya que estos recibiran los valores de los parametros que estan en el constructor() de la clase hija. 

//super() hace referencia a la super clase, es decir, al padre y lo llama para generar la conexion entre la clase hija y la clase padre. 

class Insects extends Animal{
    constructor(specie, kind, habitat, lifeSpan, sting = true, layEggs = true, breathe = 'Oxygen'){
        super(specie, kind, habitat)
        this.specie = specie; 
        this.kind = kind; 
        this.habitat = habitat;
        this.lifeSpan = lifeSpan; 
    }

}

//Siempre trabajamos con las clases hijas cuando tenemos herencia. Ya que las clases hijas tendran acceso a todas las propiedades y métodos de padre super() y a las propias (locales), mientras que padre no tiene acceso a las propiedades y métodos de la clase hija. 

//1- creamos instancia de Insect
//2- pasamos los argumentos a los parametros del constructor() de Insects
//3- Los valores de los parametros de Insects, entonces, son pasados como argumentos a super()
//4- Los argumentos de super(), entonces, son pasados a los parametros del constructor() de la clase padre Animal, cual si fuera un ping pong de parametros y argumentos

let spider = new Insects('spider', 'aracnid', ['forest', 'jungle', 'houses'], '2 años');

class Mammals extends Animal{
    constructor(specie, kind, lifeSpan, habitat, bite = true, breathe = 'Oxygen'){
        super(specie, kind, lifeSpan, habitat)
    }
}

//Con Koala hacemos lo mismo que con spider. 

let Koala = new Mammals('Koala', 'Marsupial', 'Sabanna','6 ayears')

//Notemos como con dos variables de clases completamente diferentes, podemos hacer uso del metodo getHabitat que esta en la clase padre Animals, ambas clases estan conectadas y heredan del mismo padre, ergo, eredan los mismos métoods aunque no existan en sus cuerpos locales. 

console.log(spider.getHabitat());
console.log(Koala.getHabitat());

//si la clase hija cuenta con un método con el mismo nombre que la clase Padre super, entonces la clase hija le dará prioridad al método local propio. De lo contrario buscará en método en la clase padre. 

//CONSEJO! 
//La mejor forma de determinar como construir la jerarquía de una clase padre y sus hijas es haciendonos una simple pregunta... ES UN o SON UN?

//Los insectos son animales?? - True. Entonces Animal es su clase padre
//Los mamiferos son animales? - True. Entonces Animal también es su clase padre. 




//ALTERNATIVAS PARA TRABAJAR CON HERENCIAS.

/*
Extend y super no es la unica forma de trabajar con herencias. Existen otras maneras. 
Otra forma es a través de los métodos STATIC

*/

class Calc{
    constructor(){

    }
    static sum(a, b){
        return a + b;
    }
    rest(a, b){
        return a -b;
    }
    mult(a, b){
        return a * b;
    }
    div(a, b){
        return a / b;
    }
}

const myCalc = new Calc();
myCalc.sum(); //MAL!
//el método sum es estatico (static). Esto quiere decir que no necesitamos crear instancias para poder usarlo, ya que trabajaremos directamente sobre la clase padre. 

Calc.sum(12,4); //BIEN

//Podemos establecer todas las propiedades y métodos estaticos que querramos, si no buscamos crear instancias de objetos innecesariamente. 