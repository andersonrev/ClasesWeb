var ejemplo = function(){

};// funcion anonima.

console.log(ejemplo);

var ejemploDOs ={
    saludo: function(){
        return 'Hola'
    }
}

console.log(ejemploDOs);

console.log(ejemploDOs.saludo);
var arregloDeFunciones = [
    function(){

    },
];

console.log(arregloDeFunciones);
console.log(typeof ejemplo); // tipo de dato 
console.log(ejemplo);// llamando a la definicion de la funcion
console.log(ejemplo());// llamando a la ejecucion de la funcion


// diferencia entre var y let

var variable = 'luis';
variable = 'jose';
variable = 2;
console.log(variable);

let var2pro = 'Jose'
var2pro = 'JAJAJ'
var2pro= 34
console.log(var2pro);

// var y let permite mutar los datos.
// nunca usar var o let.
const var3 = 3.1416;
console.log(var3);


const edad = 26;
const soltero = false;
const nombre = "Fernando";
const hijos = null;

console.log(edad);
console.log(soltero);
console.log(nombre);
console.log(hijos);
console.log(nombre.toUpperCase());


const letras = ['a','b','c'];
letras.push('d');
console.log(letras);

letras[0]= 'ED';
console.log(letras);



const sumaDosParametros = (numUno, numDos)=>{
    return numUno + numDos;
}

console.log(sumaDosParametros(1,2));

const saludar = saludo => console.log(saludo);

console.log(saludar('Que mas ala'));

const arregloNumeros = [11,69,3,4,5,6,7,8,9,10];

const pares = arregloNumeros.filter(valor=>valor%2===0);
console.log(pares);

const resultadoEvery = arregloNumeros
.every(n=> n>=0);

console.log(resultadoEvery);

const respuestaSome = arregloNumeros.some(n=> n > 5);
console.log(respuestaSome);

const respuestaFindIndex = arregloNumeros.findIndex(n=>n===9);
console.log(respuestaFindIndex);
console.log(arregloNumeros.indexOf(9));

const resultadoSort = arregloNumeros.sort((a,b)=> {
    console.log('a: ',a);
    console.log('b: ',b);    
    b-a});
console.log(resultadoSort);
