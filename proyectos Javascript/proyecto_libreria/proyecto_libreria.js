// Ejercicio 6: Biblioteca Avanzada
// Clases: Biblioteca, Libro, Usuario, Prestamo.
// Métodos a implementar:
// agregar material a la biblioteca
// registrar usuario
// prestar material a un usuario
// devolver material
// mostrar historial de préstamos por usuario
// listar materiales disponibles



//En este caso Biblioteca puede centralizar todos los procedimientos. 
function date() {
    let date = new Date();
    return date.toDateString();
}

class Library {
    static books = [];
    static users = []

    static addBook(...book) {
        Library.books.push(new Book(...book))
    }

    static lendBook(userId, bookId) {
        let exists = Library.users.some(user => userId == user.id)
        console.log(exists)
        if(!exists){return 'no such user was found'}

        
        let filteredBook = Library.books.find(book => {
            if (book.id == bookId && exists && book.copies > 0) {
                book.copies--;
                return book;
            }
        })

        if(!filteredBook){return 'no such book was found'}

        Library.users.find(user => {
            if (user.id == userId) {
                user.lentBooks.push({
                    title: filteredBook.title,
                    id: filteredBook.id,
                    date: date()
                })
            }
        })
    }
    static registerUser(...user) {
        let newUser = new User(...user);
        Library.users.push(newUser);
    }
}


//Libro es una clase abstracta, por lo que no tiene dependencia. 
class Book {
    static id = 1;
    constructor(title, author, year, genre, copies) {
        this.id = Book.id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
        this.copies = copies;
        Book.id++;
    }
}


class User {
    static id = 1;
    constructor(name, surname, age, address) {
        this.lentBooks = []
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.id = User.id
        this.address = address;
        User.id++;
    }
}

class Loan {
    constructor(user, book) {
        this.user = user;
        this.book = book;
    }
}


Library.addBook("1984", "George Orwell", 1949, "Dystopian", 5);
Library.addBook("1984", "George Orwell", 1949, "Dystopian", 5);
Library.addBook("Brave New World", "Aldous Huxley", 1932, "Dystopian", 3);
Library.addBook("Fahrenheit 451", "Ray Bradbury", 1953, "Dystopian", 4);
Library.addBook("The Hobbit", "J.R.R. Tolkien", 1937, "Fantasy", 6);
Library.addBook("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997, "Fantasy", 8);
Library.addBook("The Name of the Wind", "Patrick Rothfuss", 2007, "Fantasy", 2);
Library.addBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction", 7);
Library.addBook("The Catcher in the Rye", "J.D. Salinger", 1951, "Fiction", 4);
Library.addBook("Of Mice and Men", "John Steinbeck", 1937, "Fiction", 5);
Library.addBook("Pride and Prejudice", "Jane Austen", 1813, "Romance", 6);
Library.addBook("Wuthering Heights", "Emily Brontë", 1847, "Romance", 3);
Library.addBook("Jane Eyre", "Charlotte Brontë", 1847, "Romance", 4);
Library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Tragedy", 5);
Library.addBook("Romeo and Juliet", "William Shakespeare", 1597, "Tragedy", 6);
Library.addBook("Hamlet", "William Shakespeare", 1603, "Tragedy", 4);
Library.addBook("Moby Dick", "Herman Melville", 1851, "Adventure", 3);
Library.addBook("Treasure Island", "Robert Louis Stevenson", 1883, "Adventure", 4);
Library.addBook("Journey to the Center of the Earth", "Jules Verne", 1864, "Adventure", 5);
Library.addBook("Crime and Punishment", "Fyodor Dostoevsky", 1866, "Psychological Fiction", 3);
Library.addBook("The Brothers Karamazov", "Fyodor Dostoevsky", 1880, "Psychological Fiction", 0);

Library.registerUser('Nicolas', 'Perez', 39, 'Santiago de Anca 4512');
Library.registerUser('Mariana', 'Vernisky', 26, 'Perulion 5312');
Library.registerUser('Juan', 'Gomez', 29, 'Sella Come 6645');
console.log(Library.books);
console.log(Library.users);



console.log(Library.lendBook(3, 21));
console.log(Library.books);
console.log(Library.users);