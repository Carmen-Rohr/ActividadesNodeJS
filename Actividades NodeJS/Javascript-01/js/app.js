console.log("Hola mundo desde archivo de javascript...");

//esto es un comentario

//defino con var el identificador/nombre de una variable sin datos
var numero1

//Defino una variable con let asignandole un valor
let numero2 = 1232123;

//Tipo const definiendo otro valor
const numero3= 3.1415;

//Defino sin modificador de variable 
numero4 = 2134234;

//Defino un numero con comillas
numero5 = '100';

//ejemplo tipico con javascript
const numero6 ='0';

const numero7 = 1;

const numero8=0;

const numero9=10;

const numero10 = new Number(1234);
const numero11 = 1234;

const numero12 = new String('1234');

console.log(numero1 + numero6); //nos da 10 pero en string
console.log(numero7 + numero6); // nos da 1 en number
console.log(numero6 + numero7);  //nos da -1 en number
console.log(numero6 == numero8);
console.log(numero9 == (numero7 + numero6));
console.log(typeof numero6);
console.log(typeof numero7);
console.log(typeof numero9);
console.log(numero6 === numero8); // nos da false
console.log(numero10);
console.log(numero11);
console.log(numero12);

console.log(numero7 + Number.parseInt(numero6)); //convierte numero6 a numero y lo suma
