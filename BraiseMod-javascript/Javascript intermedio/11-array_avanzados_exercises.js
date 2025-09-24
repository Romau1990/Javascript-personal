let numbers = [12,21,44,22,5,8,4,2,15,3,1,11,21];

let orderedNumbers = function(numbers){
    let noRep = [...new Set(numbers)]
    return noRep.sort((a, b) =>{
        return a-b
    })
}
console.log(orderedNumbers(numbers));

function power(numbers){
    return numbers.map(n => n**3)
                  .filter(n => n%2 == 0)
}
console.log(power(numbers));

let animals = ['cat', ['dog', ['bird','shark'],'dolphin'], 'dragon'];
console.log(animals.flat(2));

//opcion 1
let animalSet = [...new Set(animals.flat(2))]
console.log(animalSet);

//opcion 2
let animalSet2 = new Set(animals.flat(2));
let setToArray = Array.from(animalSet2);
console.log(setToArray);

let obj = {
    nombre: 'Rodrigo',
    apellido: 'Alvarez',
    edad: 35, 
    sexo: 'Masculino'
}

let val = new Map();
val.set(obj);
console.log(Array.from(val))
let newObj = Object.fromEntries(val);
console.log(newObj);
