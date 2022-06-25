let presentacion = prompt(`Bienvenido a Cinex ¿deseas ver nuestra lista de peliculas?`);
let lista = 0;
while(lista <= 5){
    let lista = prompt("Opcion 1: Avengers\nOpcion 2: Halo\nOpcion 3 Tiburon\nOpcion 4: Coco\nOpcion 5: Mulan\n\n Nota: marque el numero de opcion de la pelicula que desea ver");

        if(lista >= 1 && lista < 1.5) {
            let cantidad = prompt("¿Cuantas entradas quieres")
            alert('Su solicitud por la pelicula Avengers ya fue procesada, dirijase a taquilla para realizar el pago de sus entradas, disfrute la pelicula');
        } 
        else if(lista >= 2 && lista < 2.5) {
            let cantidad = prompt("¿Cuantas entradas quieres")
            alert('Su solicitud por la pelicula Halo ya fue procesada, dirijase a taquilla para realizar el pago de sus entradas, disfrute la pelicula');
        } 
        else if(lista >= 3 && lista < 3.5) {
            let cantidad = prompt("¿Cuantas entradas quieres")
            alert('Su solicitud por la pelicula Tiburon ya fue procesada, dirijase a taquilla para realizar el pago de sus entradas, disfrute la pelicula');
        } 
        else if(lista >= 4 && lista < 4.5) {
            let cantidad = prompt("¿Cuantas entradas quieres")
            alert('Su solicitud por la pelicula Coco ya fue procesada, dirijase a taquilla para realizar el pago de sus entradas, disfrute la pelicula');
        } 
        else if(lista >= 5 && lista < 5.5) {
            let cantidad = prompt("¿Cuantas entradas quieres")
            alert('Su solicitud por la pelicula Mulan ya fue procesada, dirijase a taquilla para realizar el pago de sus entradas, disfrute la pelicula');
        } else {
            alert('La opcion que selecciono no se encuentra disponible actualmente');
        }
    }
