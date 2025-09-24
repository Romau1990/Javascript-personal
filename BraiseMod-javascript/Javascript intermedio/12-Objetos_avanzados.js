//PROTOTIPOS __proto__

//Concepto antiguo y ya no tan usado en el desarrollo ya que hoy en día el concepto que se usa es el de HERENCIA. Sin embargo, aún puede encontrarse en proyectos más antiguos. Es basicamente la capacidad de los objetos de heredar métodos y propiedades de otros. 

let persona = {
    nombre: 'Rodrigo',
    apellido: 'Alvarez',
    correr(){
        return this.nombre + ' esta corriendo';
    },
    edad(){
        return 'la edad de esta persona es de ' + this.edad;
    },
    sexo(){
        return 'Esta persona es ' + this.gender;
    }
}

let usuario1 = { 
    __proto__:persona, //__proto__ hace que usuario1 pueda usar métodos y propiedades de persona como se ve abajo con usuario1.correr()
    edad: 35,
    gender: 'Male',
}
console.log(usuario1.correr()); //Rodrigo esta corriendo


//Incluso si el método esta en persona y las propiedades en usuario1 esto funciona sin problema. Lo que hace __proto__ es ir al this desde donde es ejecutado el método.. es decír, desde usuario1, si la propiedad existe en this(usuario1) la toma y la usa para el método, de no encontrarla en this entonces la buscará en el __proto__ y eso es en :persona.
console.log(usuario1.sexo());
console.log(usuario1.edad);



let obj1 = {
    nombre: "Rodrigo",
    apellido: "Alvarez",

}

//this = raíz

let obj2 = {
    edad: 34,
    // __proto__: obj1, //no tan usado

    getInfo(){
        console.log(`${this.nombre} ${this.apellido} ${this.edad}`);
    }
}

//setPrototypeOf / getPrototypeOf

Object.setPrototypeOf(obj2, obj1); //obj2 ahora heredará propiedades y métodos de obj1. 
console.log(Object.getPrototypeOf(obj2)); //sirve para corroborar la herencia

//HEREDAR CON OBJECT.CREATE 
//Lo malo es que no se puede trabajar sobre un objeto literal {}

let nuevoObj = Object.create(obj1); //creamos un obj a partir de la herencia prototipica del obj1.

nuevoObj.edad = 34;
nuevoObj.verInfo = function(){
    return {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: 34,
    }
}

console.log(nuevoObj.verInfo());




//HERENCIA DE CLASES -concepto ampliamente utilizado hoy en día luego de la aparicion de las clases y a la relevancia que estas han dado a la POO (Programacion orientada a objetos). Expande y mejora el concepto de objetos permitiendo crear herencias directas a través de concepto (it is)

//IT IS -Básicamente es una métodología que permite saber cuando es realmente generar una herencia prototipica padre-hijo. Por ejemplo si hijo puede ser incluido dentro de padre entonces podemos decír que en ese caso vale la pena crear herencia. Ej: 

//Mueble (padre) -> Mesa (hijo) ✅ Esto es correcto ya que una mesa es un mueble, también es un mueble una cama, una mesa de luz, un placard, etc. Por ende todos estos elementos pueden ser considerados hijos y heredar de padre

//Empleado(padre) -> Administrador(hijo) ✅ un administrador trabaja como empleado, gana un sueldo ejerciendo una labor, también el jefe es un empleado porque trabaja en la empresa, o también lo es el empaquetador o armador de una empresa, etc. 

//Libreria(padre) -> Libro(hijo) ❌ aquí nos encontramos con el primer error. Y es cuando debemos realizar la pregunta IT IS (es un/una) Librería es un libro?? (NO), Libro es una libreria (NO), existe relacion pero no son lo mismo. Por ende no hay herencia prototipica padre-hijo. 


//La herencia cuando hablamos de clases se establece en base al uso de dos palabras clave. SUPER y EXTENDS. Veamos la estructura basica de una clase con herencias: 

class Empleado{                     //Nombre de las clases siempre en Mayuscula. 
    constructor(plus = 0){          //El constructor es lo que liga el ambito this. y crea las variables de instancia.
        this.sueldo =  40000;        //La variable creada en constructor va siempre con this. para no perder el this al crear instancia.
        this.plus = plus;
    }
    verSueldo(){                   //Método de la funcion. Creada fuera del constructor siempre.
        return this.sueldo + this.plus; 
    }
    verPlus(){
        return this.plus == 0 ? 'no cobras plus por tu trabajo' : this.plus;
    }
}

class Jefe extends Empleado{  
    constructor(plus){       //En este simple caso podemos omitir constructor y super ya que se generará automatiamente gracias al extends
        super(plus);         //super se declara al inicio dentro del constructor. 
    }
}

class Reponedor extends Empleado{
    constructor(plus){
        super(plus)
    }
}

class Gerente extends Empleado{
    constructor(plus){
        super(plus)
    }
}


let mike = new Jefe(60000) //creamos la instancia de jefe. Mike es el jefe y pasamos al parametro plus el argumento 30.000 
console.log(mike.verSueldo())
console.log(mike.verPlus());
let jessie = new Reponedor(0);
console.log(jessie.verSueldo());
console.log(jessie.verPlus());
let robert = new Gerente(20000);
console.log(robert.verSueldo());
console.log(robert.verPlus());
//hablamos de que el jefe es un empleado. Por ende acá se cumple la condicion. Aquí el empleado cuenta con dos parametros (trabajo, sueldo) este será el sueldo base de todos los empleados

//new Jefe(30.000) pasa ese argumento al argumento de super (plus) a su vez (plus) es pasado como argumento hacia el plus del constructor padre Empleado. Si plus es undefined entonces el valor por default que se le dará es 0 por eso plus = 0 en Empleado. 
//verSueldo() es accesible desde Jefe por el super() que le da acceso a los métodos del padre. 
//verSueldo suma el sueldo base, es decir 50.000 que debe ser el sueldo base por default de todos los empleados y se le suma this.plus es decir 50.000 mas 30.000 de plus. 
//De no haber un plus porque el empleado solo cobra 50.000 entonces se sumara 50.000 += 0 en verSueldo() lo que mantendrá todo igual. 
//Cada persona tiene un metodo verPlus por separado que les muestra de forma individual cuanto gana extra cada uno




//METODOS ESTATICOS (static)
//Son métodos que se ejecutan directamente sobre la clase padre y no sobre las instancias creadas. Ej: 

class Calculadora{
    static result = 0;
    constructor(){}

    static sumar(a,b){
        return Calculadora.result += (a + b)
    }
    static restar(a,b){
        return Calculadora.result += (a - b)
    }
    static mult(a,b){
        return Calculadora.result += (a * b)
    }
    static div(a,b){
        return Calculadora.result += (a / b)
    }
    static reset(){
        return Calculadora.result = 0;
    }
}
let calc = new Calculadora(); //creamos instancia nueva. 
// console.log(calc.sumar(12,14)); //❌ calc.sumar is not a function.Básicamente dice que no existe el método en la instancia porque este es estático. 
console.log(Calculadora.sumar(12,15)); //✅
console.log(Calculadora.restar(12,20)); //✅
console.log(Calculadora.mult(4,5)); //✅
console.log(Calculadora.reset()); //✅


//En este caso vemos como si queremos instanciar Calculadora y usar sus métodos nos aparece un error. Esto se debe a que los métodos de Calculadora son estáticos y solo funcionarán sobre la clase padre y no sobre sus instancias.


console.log('hola soy Rodrigo');
console.log("Probando nuevas cosas");



//CLONACION A TRAVÉS DE OBJECT.ASSIGN
//Object.assign() nos permite realizar una copia de un objeto o agregar las propiedades y métodos de un objeto a otro. 

//forma 1
let newObj = Object.assign(persona);
console.log(newObj);

//forma 2
let ob = {}
Object.assign(ob, persona);
console.log(ob);

//forma 3
let obj = Object.assign({}, persona)
console.log(obj);



//juntamos las propiedades y los métodos en un objeto nuevo llamado objetosUnidos en este caso. 

let a = {
    nombre: 'Rodrigo',
    info(){
        return this.nombre + ' ' + this.apellido
    },
    age(){
        return this.age
    }
}


let b = {
    apellido: 'Alvarez',
    age: 34,
}

let objetosUnidos = Object.assign(a, b);
console.log(objetosUnidos);

//Object.assign() es bueno ya que de esta forma evitamos trabajar con __proto__ y herencias y creamos un objeto totalmente desde 0 con todas las propiedades ya incluidas. 



//Object.keys(), Object.values(), Object.entries()

//Object.keys() te devuelve todas las propiedades de un objeto dentro de un array
//Object.values() te devuelve todos los valores de un objeto dentro de un array.
//Object.entries() te devuelve todos los pares clave-valor dentro de arrays separados y los arrays los mete en otro array [ [clave, valor], [clave, valor], [clave, valor] ]