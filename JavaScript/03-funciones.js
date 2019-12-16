function holaMundo(){
 console.log("Hola")
}


console.log(holaMundo)

function suma(numUno, numDos){
    return numUno + numDos;
}

console.log(suma(1,2))

function suma_2(numUno, numDos){
    var esNumUno = typeof numUno == "number";
    var esNumDos = typeof numDos == "number";

    if(esNumDos && esNumUno){
        return numUno + numUno;
    }else {
        console.error("Error")
    }
   
}

console.log(suma_2(2,4))


function sumarNumeroArreglos(numeros){
    var parametrosDistintosDeNumber = false;
    var resultado = 0;
    for( var i = 0; i < numeros.length; i ++){
        var esNumber = typeof numeros[i] === 'number';
        if(!esNumber){
            parametrosDistintosDeNumber = true;
        } else{
            resultado = resultado + numeros[i];
        }
    }

    var respuesta = {
        noEsNumber: parametrosDistintosDeNumber,
        resultado : resultado
    }
    return respuesta;

}

console.log(sumarNumeroArreglos([1,2,3,4,5]))

console.log(sumarNumeroArreglos([1,2,3,4,"5"]))


function sumarNumeros(...numeros){
    var respuesta = sumarNumeroArreglos(numeros);
    if(respuesta.noEsNumber){
        console.error("Error");
    }else{
        return respuesta.resultado;
    }
}

console.log(sumarNumeros(1,2,3,4))

console.log(sumarNumeros(1,"2",3,4))


function EnMayusculas(nombre, funcion){
    return `${funcion(nombre)}`;
}

console.log(EnMayusculas("Anderson",convertirMayusculas));

function convertirMayusculas(texto){
    return texto.toUpperCase();
}

function convertirMinusculas(texto){
    return texto.toLowerCase();
}

function agregarPunto(texto){
    return texto + '.';
}

function primeraLetraMayuscula(texto){
    var primeraLetraEnMayuscula = texto[0].toUpperCase();
    var restoPalabra = texto.slice(1,texto.length);
    return `${primeraLetraEnMayuscula}${restoPalabra}`

}

console.log(EnMayusculas("FAbiAn", convertirMinusculas));
console.log(EnMayusculas("Pongale puntico despues del texto", agregarPunto));
console.log(EnMayusculas("pongaleMayusculaLaPrimeraLetra",primeraLetraMayuscula));

