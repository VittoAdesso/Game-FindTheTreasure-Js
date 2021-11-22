// lo primero es crear las funciones para que me vayan dando resultados

//la primera funcion que vamos a crear es para que mede un numero ramdon, genere
// eso me permitirá que cada vez que se reinicie el juego me cree un tesoro nuevo

let getRandomNumber = size => // => es en el nuevo js para llamar a funciones 
    {
        // tengo, ya que quiero que me retorne datos, y el floor, es para que no sean decimales
        return Math.floor(Math.random() * size);

        // está el math random () para que me elija # aleatorios.  
        //LOS MULTIplica por size para que generen de acuerdo al tamaño de la foto, img
    }

// ahora debo crear la función que me dirá que tan cerca o que tan lejos estoy del tesoro

let getDistance = (e, target) => //creo función
    {
        // busco que se sepa las distancias de donde hago click, y donde está generado el tesoro
        // para ello se coloca e y tardet, que puedo llamar como yo quiera
        // Para que me haga los cálculos va a usar pitágoras, y el resulatado de la hipotenusa es el resultado
        // voy llamando a las variables , para que me calcule el punto del eje x y el eje y
        //puro pitágoras
        let diffX = e.offsetX - target.x; //longitudes
        let diffY = e.offsetY - target.y; //longitudes
        return Math.sqrt(diffX * diffX) + (diffY * diffY);
    }

//ahora vamos a crear la variable y funcion de distancias
// usando if, para que de acuerdo a lo lejos que pinche o lo cerca me vaya diciendo como voy
let getDistanceHint = distance => {
    if (distance < 30) {
        return "Boiling hot!";
    } else if (distance < 40) {
        return "Realy hot";
    } else if (distance < 60) {
        return "Hot";
    } else if (distance < 180) {
        return "Cold";
    } else if (distance < 300) {
        return "Realy cold";
    } else {
        return "Freezing";
    }
}