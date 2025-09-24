//CLASES AVANZADAS





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
console.log("Probando nuevas cosas")


//SINGLETON -Patrón de diseño de claes que busca resolver un problema cuando se trabaja con varias clases. Esta propone que debe haber una clase que solo se instanciará una única vez y no más. Esta generalmente es la clase central que manejará el hilo del resto de las clases cual si fuera el eje de todo nuestro programa. 

class Session{
    constructor(name){
        if(Session.instance){
            return Session.instance
        }
        this.name = name;
        Session.instance = this; 
    }
}

const session1 = new Session('Rodrigo');
console.log(session1);

const session2 = new Session('José');
console.log(session2);

//En el caso de arriba lo que hicimos fue forzar a que solo pueda haber una única session valida. Una vez creo la primera no importa cuantas instancias cree luego, los valores que se mostrarán serán los de la primera instancia. A través del if vemos si existe una instancia creada, de no existir se crea una nueva a través de Session.instance = this. Eso une el this a la instancia actual
//Luego la segunda instancia cuando es creada pasa por el if() como ya existe una Session.instance simplemente la devuelve con el return. Es por eso que no importa cuantas instancias cree. Siempre se mostrará una sola. 


class Usuario{
    static name;
    static age; 
    static setName(name){
        Usuario.name = name;
    }
    static setAge(age){
        Usuario.age = age; 
    }
}

Usuario.setName('Rodrigo');
Usuario.setAge(34)
console.log(Usuario.name);
console.log(Usuario.age);


//SYMBOL -tipo de dato primivitvo que sirve para crear una variable inmutable. También sirve para crear una propiedad privada # en las clases. De hecho, Symbol era la forma previa a la actualización 6 de JS que existia para crear valores privados. Hoy en día es más común el uso del #. Siempre dentro de lo posible trabajar con # y no con Symbol. 
//Symbol permanece oculto para el for in sin embargo si puede ser accedido usando Object.getOwnPropertySymbols()


let inmutable = Symbol('valor cualquiera');
class Symb{
    constructor(){
        this[inmutable] = Math.random();
    }

    verSymbol(){
        return this[inmutable]
    }
}
let nuevaInstancia = new Symb();
console.log(nuevaInstancia); //No me dice el nombre de la variable symbol. Puedo ver el valor pero no puedo hacer nada con ella
console.log(nuevaInstancia.verSymbol());
let check = Object.getOwnPropertySymbols(nuevaInstancia);
console.log(check);




//INSTANCEOF -Comprobamos si una instancia es parte de una clase. Devuelve un valor Booleano. 
console.log(nuevaInstancia instanceof Symb);


//Object.create() -sirve para hacer una copia de un objeto pero en otro espacion en memoria. Esto permite modificar manipularlos de manera separada. El objeto copia solo puede agregar propiedades y métodos sin llamar al objeto literal. De lo contrario la copia se sobreescribe. 

let obj1 = {
    nombre: 'Rodrigo', 
    edad: 35,
    ocupacion: 'Carpintero'
}

let copia = Object.create(obj1);
console.log(copia == obj1);

copia.nombre = 'Juan';
copia.edad = 41; 
copia.ocupacion = 'Albañil';

console.log(obj1)
console.log(copia)



//PROXY (new Proxy()) -es básicamente un intermediario entre un punto y el otro. Entre un usuario y una página, por ejemplo. 


