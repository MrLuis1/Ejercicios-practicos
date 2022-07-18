var arrays = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var TodosOcupados =true;

console.log("Opciones\n\nOpcion 1: seleccionar puestos\nOpcion 2: salir del sistema");
process.stdout.write("Ingrese su opcion:");
process.stdin.on('data',function(data){
    
    TodosOcupados=true;
    
    console.clear();
    
    var Respuesta = data.toString().trim();
    var opcion = parseInt(Respuesta);

    if(opcion == 1){
        
        //Bucle que recorre el primer array
        for(var i=0; i<1; i++) {
            //Bucle que recorre el array que está en la posición i
            for(var j=0; j<1; j++) {
                console.log("Fila 0[",arrays[0],"]\nFila 1[",arrays[1],"]\nFila 2[",arrays[2],"]");
            };
        };
 
        process.stdout.write("Que puesto desea seleccionar:");
        process.stdin.on('data',function(data){

        //Bucle para saber si todos los puestos estan ocupados
    
        TodosOcupados=true;
    
        console.clear();
    
        var Respuesta = data.toString().trim();
        var posicion1 = parseInt(Respuesta.charAt(0));
        var posicion2 = parseInt(Respuesta.charAt(1));

        if(arrays[posicion1][posicion2] == 0){
            arrays[posicion1][posicion2]=1;
        }else{
            console.log("Puesto ocupado");

        };

        //Bucle que recorre el primer array
        for(var i=0; i<1; i++) {
            //Bucle que recorre el array que está en la posición i
            for(var j=0; j<1; j++) {
                console.log("Fila 0[",arrays[0],"]\nFila 1[",arrays[1],"]\nFila 2[",arrays[2],"]");
            };
        };
        //ya el puesto se selecciono, se debe redireccionar al menu principal o finalizar programa

        console.log("La reservacion de su puesto fue realizada con exito, por favor leer con cuidado las siguientes opciones:\n\nOpcion 1: desea cambiar sus puestos.\nOpcion 2: salir del programa.")
        process.stdout.write("Ingrese su opcion:");
        process.stdin.on('data',function(data){

            var Respuesta = data.toString().trim();
            var opcion = parseInt(Respuesta);

            if(opcion == 1){
                console.clear();
                var Respuesta = data.toString().trim();
                var posicion1 = parseInt(Respuesta.charAt(0));
                var posicion2 = parseInt(Respuesta.charAt(1));

                if(arrays[posicion1][posicion2] == 1){
                    arrays[posicion1][posicion2] = 0;
                };
                //Bucle que recorre el primer array
                for(var i=0; i<1; i++) {
                    //Bucle que recorre el array que está en la posición i
                    for(var j=0; j<1; j++) {
                        console.log("Fila 0[",arrays[0],"]\nFila 1[",arrays[1],"]\nFila 2[",arrays[2],"]");
                    };
                };
                process.stdout.write("Que puesto desea cambiar:");

                for(var i=0; i<3; i++) {
            
                    for(var j=0; j<3; j++) {
                        if(arrays[i][j]==0){
                            TodosOcupados=false;
                        };
                    };
                };

            }else{
                console.clear();
                console.log("Saliste del sistema, ten buen dia.");
                process.exit();
            }

        });

    });
    }else{
   
    }
});






