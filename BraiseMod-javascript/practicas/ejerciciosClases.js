// // Ejercicio 1: Carrito de Compras

// // Descripción: Crea una clase Carrito que represente un carrito de compras.

// // Propiedades: productos (un array para almacenar los productos).

// // Métodos que debes crear:

// // agregarProducto(producto): Recibe un objeto producto y lo agrega al carrito.

// // eliminarProducto(nombreProducto): Recibe el nombre de un producto y lo elimina del carrito.

// // calcularTotal(): Calcula y devuelve el precio total de todos los productos en el carrito.

// // aplicarDescuento(porcentaje): Aplica un descuento al total de la compra.


// let gondola = [
//   {
//     producto: 'manteca',
//     precio: 32,
//   },
//   {
//     producto: 'Mayonesa',
//     precio: 120,
//   },
//   {
//     producto: 'pan',
//     precio: 60,
//   },
//   {
//     producto: 'huevos',
//     precio: 110,
//   },
//   {
//     producto: 'fideos',
//     precio: 130,
//   },
//   {
//     producto: 'fideos',
//     precio: 90,
//   }
// ]


// class Cart {
//   static products = [];
//   constructor() { }

//   addProducts(...products) {
//     return gondola.forEach(pr => {
//       if (products.includes(pr.producto)) {
//         Cart.products.push(pr);
//       }
//     })
//   }
//   removeProducts(...p) {
//     return Cart.products.filter(product => {
//       return !p.includes(product)
//     })
//   }
//   calcTotal() {
//     return Cart.products.reduce((a, b) => {
//       return a += b.precio
//     }, 0)
//   }
//   aplicarDescuento(desc) {
//     return Math.round(this.calcTotal() * (desc / 100));
//   }

// }
// let persona = new Cart();

// console.log(persona.addProducts('manteca', 'pan'))
// console.log(persona.calcTotal())
// console.log(Cart.products)
// console.log(persona.aplicarDescuento(10))




// // Ejercicio 2: Cuenta Bancaria

// // Descripción: Crea una clase CuentaBancaria para gestionar las operaciones de una cuenta.

// // Propiedades: saldo (inicializado en 0), movimientos (un array para registrar las transacciones).

// // Métodos que debes crear:

// // depositar(cantidad): Agrega una cantidad al saldo y registra el movimiento.

// // retirar(cantidad): Resta una cantidad del saldo si hay fondos suficientes y registra el movimiento.

// // consultarSaldo(): Devuelve el saldo actual.

// // historialMovimientos(): Devuelve el array de movimiento


// class BankAccount {
//   date = new Date().toUTCString();
//   #userName;
//   #password;
//   #id;
//   #historialPesos;
//   #historialDolares;
//   #saldoPesos;
//   #saldoDolares;
//   constructor() {
//     this.#historialPesos = [];
//     this.#historialDolares = [];
//     this.#userName = 'ro444';
//     this.#password = 'password1234';
//     this.#id = 21454654;
//     this.#saldoPesos = 0;
//     this.#saldoDolares = 0;
//   }

//   deposit(amount, term) {
//     if (term == 'pesos') {
//       this.#historialPesos.push({
//         deposit: amount,
//         date: this.date,
//         total: this.#saldoPesos += amount,
//       })
//     } else if (term == 'dolares') {
//       this.#historialDolares.push({
//         deposit: amount,
//         date: this.date,
//         total: this.#saldoDolares += amount
//       })
//     }

//   }
//   withdrawal(amount, term) {
//     if (term == "pesos") {
//       if (amount > this.#saldoPesos) {
//         throw new Error("you don't have enough money. Your current credit is " + this.#saldoPesos);
//       } else {
//         this.#historialPesos.push({
//           withdrawal: amount,
//           date: this.date,
//           total: this.#saldoPesos -= amount
//         })
//       }
//     } else if (term == "dolares") {
//       if (amount > this.#saldoDolares) {
//         throw new Error("you don't have enough money. Your current credit is " + this.#saldoDolares);
//       } else {
//         this.#historialDolares.push({
//           withdrawal: amount,
//           date: this.date,
//           total: this.#saldoDolares -= amount
//         })
//       }
//     }

//   }
//   showHistorial(term) {
//     if (term == "pesos") {
//       return this.#historialPesos;
//     } else if (term == "dolares") {
//       return this.#historialDolares;
//     }
//   }
//   showSaldo(term) {
//     if (term == "pesos") {
//       return '$' + this.#saldoPesos;
//     } else if (term == "dolares") {
//       return '$usd' + this.#saldoDolares;
//     }
//   }
// }

// let user = new BankAccount();
// user.deposit(200, 'pesos');
// user.deposit(120, 'pesos');
// user.deposit(412, 'pesos');
// user.withdrawal(200, 'pesos')
// console.log(user.showHistorial('pesos'))
// console.log(user.showSaldo('pesos'))


// user.deposit(100, 'dolares');
// user.deposit(40, 'dolares');
// user.deposit(25, 'dolares');
// user.withdrawal(50, 'dolares')
// console.log(user.showHistorial('dolares'))
// console.log(user.showSaldo('dolares'))



// // Ejercicio 3: To-Do List

// // Descripción: Crea una clase TodoList para administrar una lista de tareas.

// // Propiedades: tareas (un array de objetos, donde cada objeto tiene descripcion y completada).

// // Métodos que debes crear:

// // agregarTarea(descripcion): Añade una nueva tarea a la lista (por defecto, no completada).

// // marcarCompletada(descripcion): Busca una tarea por su descripción y cambia su estado a completada.

// // eliminarTarea(descripcion): Elimina una tarea de la lista.

// // listarTareasPendientes(): Devuelve un array con las tareas que aún no han sido completadas.


// class Tasks {
//   static toDoList = [];
//   static count = 0;
//   constructor() { }


//   static addTask(task) {
//     Tasks.toDoList.push({
//       tarea: task,
//       estado: 'pendiente',
//     })
//     this.count++;
//   }

//   static removeTask(task) {
//     Tasks.toDoList.map(t => {
//       if (t.tarea.toLowerCase() == task.toLowerCase() && t.estado != 'completada') {
//         this.count--
//         return t.estado = 'completada';
//       }
//     })
//     if(this.count == 0){
//       Tasks.#noTasks();
//     }
//   }
//   static wipeTask(task){
//     let index = Tasks.toDoList.findIndex(el => el.tarea == task)
//     if(index == -1){
//       throw new Error("task not found");
//     }
//     else{
//       Tasks.toDoList.splice(index, 1)
//       if(!Tasks.toDoList){
//         this.#noTasks();
//       }
//     }
//   }

//   static wipeAllTasks(){
//     this.#noTasks()   
//     return Tasks.toDoList = [];
//   }

//   static #noTasks(){
//     console.log('No more tasks to do');
//   }

// }


// Tasks.addTask('lavar');
// Tasks.addTask('limpiar');
// Tasks.addTask('barrer');
// Tasks.addTask('lavar el auto');
// // Tasks.removeTask('limpiar');
// // Tasks.removeTask('lavar');
// // Tasks.removeTask('barrer');
// // Tasks.removeTask('lavar el auto');
// Tasks.wipeTask('lavar')
// Tasks.wipeTask('limpiar')
// Tasks.wipeTask('barrer')
// Tasks.wipeTask('lavar el auto')
// console.log(Tasks.count);


// console.log(Tasks.toDoList);

// // Ejercicio 4: Reproductor de Música
// // Descripción: Crea una clase Reproductor para simular un reproductor de música.
// // Propiedades: canciones (un array de strings), cancionActual (un string), estado ('reproduciendo' o 'pausado').
// // Métodos que debes crear:
// // agregarCanciones(arrayCanciones): Recibe un array de canciones y las añade a la lista.
// // reproducir(nombreCancion): Busca la canción y cambia el estado a 'reproduciendo'.
// // pausar(): Cambia el estado a 'pausado'.
// // siguienteCancion(): Pasa a la siguiente canción de la lista (si está al final, vuelve al principio).

// class DataBase {
//   constructor() {
//     this.songs = [
//       {
//         "id": 1,
//         "title": "Bohemian Rhapsody",
//         "artist": "Queen",
//         "album": "A Night at the Opera",
//         "genre": "Rock",
//         "songDuration": "05:55"
//       },
//       {
//         "id": 2,
//         "title": "Stairway to Heaven",
//         "artist": "Led Zeppelin",
//         "album": "Led Zeppelin IV",
//         "genre": "Hard Rock",
//         "songDuration": "08:02"
//       },
//       {
//         "id": 3,
//         "title": "Hotel California",
//         "artist": "Eagles",
//         "album": "Hotel California",
//         "genre": "Soft Rock",
//         "songDuration": "06:30"
//       },
//       {
//         "id": 4,
//         "title": "Thriller",
//         "artist": "Michael Jackson",
//         "album": "Thriller",
//         "genre": "Pop",
//         "songDuration": "05:57"
//       },
//       {
//         "id": 5,
//         "title": "Smells Like Teen Spirit",
//         "artist": "Nirvana",
//         "album": "Nevermind",
//         "genre": "Grunge",
//         "songDuration": "05:01"
//       },
//       {
//         "id": 6,
//         "title": "Billie Jean",
//         "artist": "Michael Jackson",
//         "album": "Thriller",
//         "genre": "Pop",
//         "songDuration": "04:54"
//       },
//       {
//         "id": 7,
//         "title": "Don't Stop Believin'",
//         "artist": "Journey",
//         "album": "Escape",
//         "genre": "Arena Rock",
//         "songDuration": "04:10"
//       },
//       {
//         "id": 8,
//         "title": "Sweet Child o' Mine",
//         "artist": "Guns N' Roses",
//         "album": "Appetite for Destruction",
//         "genre": "Hard Rock",
//         "songDuration": "05:56"
//       },
//       {
//         "id": 9,
//         "title": "Imagine",
//         "artist": "John Lennon",
//         "album": "Imagine",
//         "genre": "Pop",
//         "songDuration": "03:03"
//       },
//       {
//         "id": 10,
//         "title": "Livin' on a Prayer",
//         "artist": "Bon Jovi",
//         "album": "Slippery When Wet",
//         "genre": "Arena Rock",
//         "songDuration": "04:09"
//       },
//     ];
//   }
// }



// class Reproductor extends DataBase {
//   constructor() {
//     super();
//     this.songsList = [];
//   }


//   addSong(title) {
//     let titleInfo = this.songs.filter(song => {
//       if (title.toLowerCase() == song.title.toLowerCase()) {
//         return this.songsList.push({
//           title: song.title,
//           artist: song.artist,
//           album: song.album,
//           genre: song.genre,
//           'song duration': song.songDuration,
//         })
//       }
//     });
//     if (titleInfo == false) console.log("The song wasn't found");
//   }

//   searchSong(term) {
//     term = term.toLowerCase();
//     return this.songs.filter(song =>{
//       return Object.values(song).some(val =>{
//         return typeof val === 'string' && val.toLowerCase().includes(term)
//       }) 
//     })
//   }

//   play(playSong){
//     playSong = playSong.toLowerCase();
//      return this.songs.filter(song =>{
//       return Object.values(song).some(s =>{
//         if(typeof s == 'string' && s.toLowerCase().includes(playSong)){  
//           for(let i = 0; i < parseInt(song.songDuration); i++){
//             setTimeout(()=>{
//               function rep(){
//                 console.log('reproduciendo ' + playSong + '...'); 
//               }
//             },1000)
//             return s;
//           }
//         }
//       })
//     })

//   }




// }

// let person = new Reproductor();
// // console.log(person.songs)
// // console.log(person.searchSong('under pressure'))
// // console.log(person.addSong("Don't stop me now"))
// // console.log(person.songsList)
// // console.log(person.play('we will rock you'))




// function countSeconds(time){
  
// }

// console.log(5000);


// function t(time){
//   let counter = time;
//   let total = 0; 
//   let inter = setInterval(()=>{
//     counter--;
//     total+= 1;
//     console.log(total)
//     console.log(counter)
//     if(counter == 0){
//       clearInterval(inter)
//     }
//   })
// }

// console.log(t(10000))



let string = new String('hola');

string.algo = function(){
  return this + ' algo loquitaaaaaaaa'
}

console.log(string.algo());


class Persona{
  constructor(name, surname, age){
    this.name = name; 
    this.surname = surname; 
    this.age = age; 
  }
  caminar(){
    return `${this.name} esta caminando`
  }
}


class Profesor extends Persona{
  static id = 1;
  constructor(name,surname, age, subject){
    super(name,surname,age);
    this.subject = subject; 
    this.id = Profesor.id;
    Profesor.id++;
  }
  showData(){
    return{
      id: this.id,
      name: this.name,
      surname: this.surname,
      age: this.age,
      subject: this.subject,
    }
  }
}


let Leticia = new Profesor('Leticia', 'Nuñez', 43, 'Math');
let Juan = new Profesor('Juan', 'Posso', 43, 'art');
let Martin = new Profesor('Martin', 'Marloni', 43, 'English');
let Javier = new Profesor('Javier', 'Irrechaga', 43, 'Literature');
console.log(Leticia.showData())
console.log(Juan.showData())
console.log(Martin.showData())
console.log(Javier.showData())
console.log(Javier.caminar());


class Producto{
  constructor(nombre, precio, cantidad, categoria){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.categoria = categoria; 
  }
}



class Carrito{
  constructor(){
    this.productList = [];
  }
  agregarProducto(nombre,precio, cantidad, categoria){
    let item = new Producto(nombre,precio, cantidad, categoria)
    this.productList.push(item)
  }
  quitarProducto(item){

  }

}


class Ticket{
  constructor(cantidad, total, totalIVA){
    this.total = total; 
    this.totalIVA = totalIVA;
  }

}

let carritoMarta = new Carrito()

carritoMarta.agregarProducto('manzanas', 60, 2, 'frutas');
carritoMarta.agregarProducto('peras', 92, 5, 'frutas');
carritoMarta.agregarProducto('Coca Cola', 120, 2, 'bebida');
carritoMarta.agregarProducto('paquete de esponjas', 80, 1, 'higiene');
carritoMarta.agregarProducto('picada especial', 104, 0.5, 'carnes');

console.log(carritoMarta.productList)

console.log(carritoMarta.generarTicket());
