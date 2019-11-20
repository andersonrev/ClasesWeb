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

