let contraseñaAlmacenada = 1456;
let claveCapturada = 0;
let lista = 0;
let retiro = 0;
let deposito = 0;
let dinero = 500;
const expresiones = {
    password: /^\d{4}$/
}
const validarContraseña = (e) => {
    switch(claveCapturada){
        case "pasword":
            validarContraseña(expresiones.password, claveCapturada,);
    break;
    }
}

while(contraseñaAlmacenada!=claveCapturada){
    claveCapturada = parseInt(prompt('Por favor ingrese su contraseña'));
    if(contraseñaAlmacenada == claveCapturada){
        alert('Clave correcta');
    } else{
        alert('Clave incorrecta')
    } 
}

while(lista <= 5){
    let lista = parseInt(prompt('seleccione la opcion de la operacion que desea realizar\nOpcion 1: Saldo Actual.\nOpcion 2: Retiro de Efectivo.\nOpcion 3: Deposito de Dinero.'));

        if(lista >= 1 && lista < 1.5) {
            alert('Su saldo actual es de: ' + (dinero));
        } 
        else if(lista >= 2 && lista < 2.5) {
            let retiro = parseInt(prompt("Ingrese el monto que desea retirar"));
            if (retiro > dinero){
                alert('Su saldo no es suficiente para realizar la trasaccion');
                break;
            }
            dinero -= retiro;
            alert('Su saldo actual es de: ' + (dinero));
        } 
        else if(lista >= 3 && lista < 3.5) {
            let deposito = parseInt(prompt('Ingrese el monto que desea depositar en su cuenta'));
            dinero += deposito;
            alert('Su saldo actual es de: ' + (dinero));
        }
    }



