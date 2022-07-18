// VARIABLES
const palabra = 'paralelepipedo';
let palabraAcertada = [...palabra];
let palabraGuiones = palabra.toString().replace(/./g, "_");
palabraGuiones = [...palabraGuiones];
let letraUsuario = "";
let historialLetras =[];
let numIntentos = 3;
let auxiliar ="";

process.stdout.write("Ingrese Letra:");
process.stdin.on('data',function(data){

    auxiliar ="";
    console.clear(); // NOS PERMITE LIMPIAR LA CONSOLA
    letraUsuario = data.toString().trim(); // EL METODO (TRIM) DEVUELVE LA CADENA DE TEXTO DESPOJADA DE ESPACIOS EN BLANCO ES DECIR, ESTO "    HOLA    " PASARIA A 
    // ESTO "HOLA"


    /*  Iniciamos el juego*/

// VALIDACIONES
if (!isNaN(letraUsuario)){
    console.log('Introduce un caracter valido');
}else{

    for(let i=0; i < palabraAcertada.length; i ++){
            
            if(letraUsuario.charAt(0) == palabraAcertada[i]){
                palabraGuiones[i] = letraUsuario.charAt(0);
            }
            auxiliar+=palabraGuiones[i];
    }

    if(palabraAcertada.includes(letraUsuario)===false){
        numIntentos -= 1;
        console.log('Letra equivocada, intentos permitidos:',numIntentos);
    }



    console.log("Ahorcado");
    console.log(auxiliar);
    process.stdout.write("Ingrese Letra:");


    if(numIntentos==0){
        console.clear();
        console.log("Lo siento, perdiste el juego");
        process.exit();
    }

    
    if(palabraGuiones.includes("_")===true){
    }else{
        console.log("Felicidades, ganaste el juego");
        process.exit();
    }

}

});


