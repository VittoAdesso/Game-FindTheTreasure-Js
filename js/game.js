//creo variables de ancho y alto de la imagen que puse en html tb, los mismos 
//lamo variable const,. pero la puedo llamar como yo quiera 

const width = 400; // eje x
const height = 400; // eje y
//mismos valores porque es un CUADRADO  


//para saber donde esta el puntero en el mapa
let target = {
    // llamado a funciones ya creadas en funciones.js 
    //eje x y eje y, arriba llamados with , height 
    x: getRandomNumber(width), //hago llamado de variables de arriba com funciones creadas
    y: getRandomNumber(height)
};

//para saber donde me va a escribir, que es la referencia

let $map = document.getElementById("map");
//creo nueva variable, para que me esvriba en documenmto html
let $distance = document.getElementById("distance"); //llamo la p en html
// como quiero que cuente los click, debo crear una variable llamada click
let clicks = 0; // en cero para que comience siempre del principio

// con esta llamada a la segunda funcion creada me ayuda a saber a que distancia estoy del tesoro min 25
//voy a crear un evento en este caso un escuchador 
$map.addEventListener("click", function(e) { // le pongo la e que es un evnto que se ha llamado antes, e, target lo 
    clicks++; // cada vez que de un click, que sume uno

    //llamo como yo quiera
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance); //creo variable de distancia nueva que me dará añl clicar 
    
    //aquí creo lo que quiero que se sobreescriba en html
    $distance.innerHTML = distanceHint;
    
    //llamando al if cuando hago clic
    
    if (distance < 20) {
        //como quiero que me de, un alerta cuando este muy cerca del tesoro ...
        alert('¡CONGRATULATIONS! You found the tresuare in' + ' ' + clicks + ' ' + 'Clicks!' ) // hago llamada a la cantidad de clicks que hice
        location.reload(); // esto ya es para refrescar la pagina con js , reinicia 
    }
})