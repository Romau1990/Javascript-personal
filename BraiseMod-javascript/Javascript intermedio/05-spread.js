//SPREAD

//Similar a rest en el ejercicio 4 pero en este caso en lugar de empaquetar valores en un array lo desempaqutamos. Ej: 

let numbers = [12,44,35];

function sum(a, b, c){
    console.log(a + b+ c);
}

sum(...numbers); //basicamente pasamos de [12,44,35] a 12,44,35

//ahora que pasaría si yo tuviera solo tres parametros y un array de más de tres items? Pues, solamente pasaría los tres primeros elementos a los parametros y el resto los obviaría. 

//Y si tiene menos?
//En este caso si habrá un problema ya que en el caso de arriba me pide tres para metros para sumar, si solo paso 2 y el tercero queda en undefined la suma de todo me dará NaN.

//OTROS USOS

let val = [12,55,43,21,16,44,33];
let [a,b,c] = val; //creamos variables nuevas que toman como valores los elementos del array de forma ordenada. Puede haber menos variables que elementos ya que el resto de los elementos del array serán ignorados.  
console.log(a, b,c);

//OMITIR VALORES

let frutas = ['manzanas', 'naranjas','peras', 'bananas', 'paltas', 'melones', 'sandias'];
let [d, ,e, ,f, ,g] = frutas;
console.log(d,e,f,g); // de esta forma el elemento , ,es omitido y la variable toma el siguiente

//como veras no e podido repetir a ,b y c en este ultimo caso ya que estos nombres de variables ya estan tomados del caso anterior, ya que let [] = arr; es lo mismo que decir let a = 12, let b = 55, let c = 43;

//VALORES POR DEFECTO

//Los valores por defecto son aquellos que apareeran en caso de que el array no presente ningún valor, es decir, si colores estuviera vacío, entonces las variables mostrarian sin color en los tres casos. Una vez que se asignan valores, los valores por defecto no se muestran más. 

let colores = ['rojo', 'amarillo', 'azul'];

let [color1= 'sin color', color2 ='sin color', color3 = "sin color"] = colores; 
console.log(color1,color2,color3);
