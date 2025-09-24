//Las clases no son otra cosa que plantillas de trabajo para objetos que se basaran en dichas plantillas. 
//TOdo lo que sea creado a partir de ellas se llamaran instancias de clase. 
//Para crear una clase debemos usar la palabra reservada new y el nombre de la clase debe comenzar con mayuscula
//toda clase debe ser creada con la palabra reservada class


//SINTAXIS

class Car{
    constructor(brand, model, color, wheels){

    }


}

//dentro de la clase creamos usamos la palabra reservada constructor, ya que las clases son objetos constructores. 
//Dentro de los parentesis () de constructor escribiremos nuestros parametros de igual forma que haciamos con las funciones.
//Luego dentro de los {} colocaremos la siguiente estructura

/*
this.brand = brand; 
this.model = model; 
this.color = color; 
this.wheels = wheels; 

¿QUE ES THIS?

El entorno de ejecucion con el cual vamos a trabajar, y dado que este va a cambiar de instancia a instancia creada. Es necesario usar el this

¿Que quiere decir esto?

Que si creo una instancia de Car. Ej: 

let car1 = new Car('Toyota', 'Corolla', 'red', 4);
let car2 = new Car('Hyundai', 'Acent', 'grey', 4);

Ambas instancias si bien parten de la misma clase Car, son instancias diferentes como muestran los argumentos que luego son pasados a los parametros del constructor. 
Dado que car1 y car2 son diferentes, el this. establece una conexion con ellos de forma separada, en car1 this = car1 es decir, car1.brand, car1.model, car1.color, car1.wheels. Y lo mimo con el car2: car2.brand, car2.model, car2.color, car2.wheels. 

basicamente como no podemos estar cambiando manuamente esto instancia por instancia porque seria tedioso e ilogico, usamos this, y este se encarga automaticamente de reconocer el ambito de la instancia. 

Ahora lo que hacemos diciendo this.brand = brand es, del argumento pasado al parametro brand igualamelo con el valor de this.brand que hace referencia al entorno de esta instancia. De esta manera el valor de brand queda almacenado dentro de esa instancia en particular.

*/

//VEAMOS OTRO EJEMPLO DE CLASE: 

class Coche{
    constructor(brand, model, color, wheels){
        this.brand = brand;
        this.model = model; 
        this.color = color; 
        this.wheels = wheels;
    }
}

//Instancias de Coche. Todas usan el mismo constructor pero son diferentes en sus argumentos y estan guardadas en variables diferentes. 
let coche1 = new Coche('Hyundai', 'Picasso', 'blue', 4);
let coche2 = new Coche('Hyundai', 'Accent', 'rojo', 4);
let coche3 = new Coche('Toyota', 'Corolla', 'grey', 4);
let coche4 = new Coche('Wolkswagen', 'Gol', 'yellow', 4);

//Nombres por defecto

class Person {
    constructor(ojos = true, camina = true, nombre = "no agregado", edad = "no agregado"){
        this.ojos = ojos; 
        this.camina = camina; 
        this.nombre = nombre; 
        this.edad = edad; 
    }
}
let user1 = new Person(2,'Rodrigo',34);

//usando el = en los parametros podemos declarar el valor por defecto en caso de que este no sea agregado por el usuario.

//PROPIEDADES PRIVADAS

/*
Crear clases privadas te permite protegerlas de cambios accidentales o de que la gente pueda acceder a ella de forma sencilla, esto es bueno especialmente cuando queremos encapsular la información y hacerla más segura. 
Para ello colocamos el nombre de la clase que queremos en privado fuera del constructor y al parametro que querramos que sea privado le agregamos una # adelante
*/



class BankUser{
    #password //aqui avisamos que parametro queremos que sea privado
    #pin
    constructor(userName, password, date, age, pin){
        this.userName = userName; 
        this.#password = password;  //this.#password ahora tiene la almohadilla # luego del this. y antes de la palabra
        this.date = date; 
        this.age = age; 
        this.#pin = pin
    }
    getPassword(){ //metodo GET - obtengo un valor solicitado de una propiedad sin acceder a ella directamente. 
        return this.#password;
    }
    changeUserName(newUserName){ //Metodo SETTER. Modifico agrego o camibo un valor de las propiedades existentes sin acceder a ellas directamente
        this.userName = newUserName; 
    }
    getPinNumber(){
        return this.#pin; 
    }
    changePinNumber(){
        let newPin = prompt('Escribe tu nuevo pin, debe tener 4 digitos', "####");
        this.#pin = newPin; 
    }
}

//En este caso password debe ser private ya que si alguien viene y escribe BankUser.password = 'nueva contrasea' entonces el usuario legitimo ya no tendra acceso a su propia contraseña. Esto puede ser por malicia o simple error o negligencia. O que unda persona imprima el dato en pantalla y listo, contraseña robada. 


let bankUser1 = new BankUser('Rodrigo', '12345a', '01/11/1990', 34, 2347);


//Aquí veremos como password no aparece o si trato de ingresar directamente a su valor aparecerá undefined. Esto se debe a que ahora no es visible y esta privada. 
console.log(bankUser1.password);
console.log(bankUser1);


//Solo a través de un método getter podremos ver realmente lo que hay dentro. Es por eso que en general se traaja con métodos GETTERS Y SETTERS
console.log(bankUser1.getPassword());

//Que sucede si queremos reasignarle un valor a password? 

bankUser1.password = 'contraseña12345';
console.log(bankUser1);

//aqui podemos ver como crea una nueva propiedad llamada password, pero no toca ni modifica la existente, la cual sigue inaccesible y privada. O sea password no es #password





//GETTERS Y SETTES (Métodos para establecer y obtener)

//El método GETTER me permite mostrar en consola u obtener el valor de una propiedad sin acceder a ella directamente con la notacion del punto (Buena practica). Esto en general cobra sentido cuando nuestras propiedades son privadas #. 

//El método SETTER me permite establecer agregar o modificar un valor de una propiedad sin acceder a ella directamente a través de la notacion del punto. Esto es así y cobra sentido cuando no podemos acceder a ella directamente por ser privadas #. 

delete bankUser1.password; 
console.log(bankUser1.password);
console.log(bankUser1.pin);
console.log(bankUser1.getPassword());
console.log(bankUser1.userName);
bankUser1.changeUserName('Martin');
console.log(bankUser1.userName); 
console.log(bankUser1.getPinNumber());