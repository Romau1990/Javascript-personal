// Ejercicio 1 – Sistema de Contactos

// Crea una clase Contacto con nombre, telefono y email.
// Crea una clase Agenda que tenga un array de contactos.
// Métodos requeridos:

// Agregar uno o varios contactos usando parámetros rest.

// Buscar un contacto por nombre (insensible a mayúsculas/minúsculas, usando métodos de string).

// Devolver un nuevo array de emails de todos los contactos.

// Usar spread para fusionar dos agendas en una nueva sin modificar las originales.


class Agenda {
    static listaContactos = [];
    static id = 1;
    constructor(nombre, telefono, mail) {
    }

    static borrarContacto(nombre) {
        nombre = nombre.toLowerCase();
        this.listaContactos.forEach((cont, i) => {
            console.log(cont.nombre)
            if (cont.nombre.toLowerCase() == nombre) {
                this.listaContactos.splice(i, 1)
            }
        })
    }
    static verContactos() {
        return this.listaContactos;
    }

    static buscarContacto(nombre) {
        this.listaContactos.filter(cont => cont.nombre.toLowerCase() == nombre.toLowerCase());
    }

    static añadirVariosContactos(...cont) {
        this.listaContactos.push(...cont)
    }
}

class Contacto extends Agenda {
    constructor(nombre, telefono, mail) {
        super(nombre, telefono, mail);
        this.nombre = nombre;
        this.telefono = telefono;
        this.mail = mail;
    }

    añadirContacto() {
        Agenda.listaContactos.push({
            nombre: this.nombre,
            telefono: this.telefono,
            mail: this.mail,
            id: Agenda.id,
        })
        Agenda.id++
    }
}


let cont0 = new Contacto('Rodrigo', '32344434', 'rodrigoalvarez123@gmail.com');
let cont1 = new Contacto("Juan", "098123456", "juan@mail.com");
let cont2 = new Contacto('Martin', '125346453', 'martincho@gmail.com');
let cont3 = new Contacto("Martin", "125346453", "martincho@gmail.com");
let cont4 = new Contacto("Sofía", "099654321", "sofi@mail.com");
let cont5 = new Contacto("Pedro", "091222333", "pedro@mail.com");
let cont6 = new Contacto("Lucía", "098777666", "lucia@mail.com");
let cont7 = new Contacto("Carla", "097888555", "carla@mail.com");
let cont8 = new Contacto("Andrés", "096999444", "andres@mail.com");
let cont9 = new Contacto("Valentina", "095333222", "valen@mail.com");

Agenda.añadirVariosContactos(cont0, cont1, cont2, cont3, cont4, cont5, cont6, cont7, cont8, cont9)

console.log(Agenda.verContactos());
Agenda.borrarContacto('juan');

console.log(Agenda.verContactos());





// Ejercicio 2 – Gestión de Vehículos

// Crea una clase Vehiculo con marca, modelo y año.
// Crea una subclase Auto que agregue puertas.
// Métodos requeridos:

// Mostrar descripción básica (marca, modelo, año).

// En Auto, sobrescribir el método para incluir cantidad de puertas.

// Crear un método estático que reciba un número variable de vehículos (rest) y devuelva un array con solo sus modelos.

// Usar spread para clonar un vehículo y modificar solo el año.


class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

class Car extends Vehicle {
    constructor(brand, model, year) {
        super(brand, model, year)

    }
    carInfo() {
        return {
            brand: this.brand,
            model: this.model,
            year: this.year,
        }
    }
}

let car1 = new Car('Toyota', 'Corola', 2015);

console.log(car1.carInfo())




// Ejercicio 3 – Plataforma de Cursos

// Crea una clase Curso con titulo, duracion y un array de alumnos.
// Crea una subclase CursoPremium con precio.
// Métodos requeridos:
// Inscribir uno o varios alumnos (rest) y almacenarlos en el array.
// Devolver la cantidad de alumnos inscritos.
// Generar un string con los nombres de todos los alumnos separados por comas.
// Clonar el array de alumnos con spread para trabajar con una copia.
// En CursoPremium, sobrescribir un método para incluir también el precio en la descripción.



class Course {
    static studentsList = []
    constructor(course, duration, students) {
        this.course = course;
        this.duration = duration;
        this.students = students;
    }
    static checkCourses() {
        return Course.studentsList;
    }
}

class PremiumCourse extends Course {
    constructor(course, duration, students, price = 'free') {
        super(course, duration, students);
        this.price = price;
    }
    enroll() {
        Course.studentsList.push({
            course: this.course,
            duration: this.duration,
            students: this.students,
            precio: this.price,
        })
    }
}

let cat = new PremiumCourse('Javascript', '1 año', ['Virginia', 'Sofía', 'Martín', 'Mauro', 'Joaquin', 'Rodrigo', 'Juan']);
console.log(cat);

cat.enroll()
console.log(Course.checkCourses());








class Library {
    static bookList = [];
    static id = 1;
    constructor(title, author, year, stock) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.stock = stock;
        Library.bookList.push({
            title: this.title,
            author: this.author,
            year: this.year,
            stock: this.stock,
            id: Library.id,
        })
        Library.id++;
    }
    static getBookList() {
        return this.bookList;
    }
    static searchAuthor(author) {
        return this.bookList.filter(book => book.author.toLowerCase().includes(author.toLowerCase()))
    }
    static orderBy(term) {
        if (term.toLowerCase() == 'title') {
            return this.bookList.sort((a, b) => {
                return a.title > b.title ? 1 : -1;
            })
        }
        else if (term.toLowerCase() == 'author') {
            return this.bookList.sort((a, b) => {
                return a.author > b.author ? 1 : -1;
            })
        }
        else if (term.toLowerCase() == 'year') {
            return this.bookList.sort((a, b) => {
                return a.year - b.year;
            })
        }
        else if (term.toLowerCase() == 'id') {
            return this.bookList.sort((a, b) => {
                return a - b;
            })
        }
    }
    static sell(title, number) {
        title = title.toLowerCase();
        console.log(title);
        return this.bookList.map(book => {
            if (book.title.toLowerCase() == title) {
                if (book.stock < number) {
                    throw new Error('no hay suficiente stock')
                } else if (book.stock > 0 && book.stock < 10) {
                    console.warn('te quedan pocos ejemplares');
                    book.stock -= number;
                    return book
                }
                else {
                    book.stock -= number;
                    return book;
                }
            }

        })
    }

}


class Book extends Library {
    constructor(title, author, year, stock) {
        super(title, author, year, stock)
    }
}

let b1 = new Book("Cien años de soledad", "Gabriel García Márquez", 1967, 15);
let b2 = new Book("Rayuela", "Julio Cortázar", 1963, 8);
let b3 = new Book("El túnel", "Ernesto Sabato", 1948, 12);
let b4 = new Book("Don Quijote de la Mancha", "Miguel de Cervantes", 1605, 20);
let b5 = new Book("La ciudad y los perros", "Mario Vargas Llosa", 1963, 10);
let b6 = new Book("Pedro Páramo", "Juan Rulfo", 1955, 6);
let b7 = new Book("Ficciones", "Jorge Luis Borges", 1944, 9);
let b8 = new Book("El amor en los tiempos del cólera", "Gabriel García Márquez", 1985, 14);
let b9 = new Book("Sobre héroes y tumbas", "Ernesto Sabato", 1961, 7);
let b10 = new Book("Los detectives salvajes", "Roberto Bolaño", 1998, 11);
let b11 = new Book("2666", "Roberto Bolaño", 2004, 5);
let b12 = new Book("La tregua", "Mario Benedetti", 1960, 9);
let b13 = new Book("Crónica de una muerte anunciada", "Gabriel García Márquez", 1981, 13);
let b14 = new Book("Ensayo sobre la ceguera", "José Saramago", 1995, 10);
let b15 = new Book("La sombra del viento", "Carlos Ruiz Zafón", 2001, 18);
let b16 = new Book("El principito", "Antoine de Saint-Exupéry", 1943, 25);
let b17 = new Book("1984", "George Orwell", 1949, 22);
let b18 = new Book("Fahrenheit 451", "Ray Bradbury", 1953, 16);
let b19 = new Book("Moby Dick", "Herman Melville", 1851, 7);
let b20 = new Book("Orgullo y prejuicio", "Jane Austen", 1813, 12);

console.log(Library.getBookList())


console.log(Library.orderBy('id'))

console.log(Library.sell('el principito', 18));