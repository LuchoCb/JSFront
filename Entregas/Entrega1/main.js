let BgBox
let MdBox
let SmBox 

let Bgart = 60
let Mdart = 40
let SmArt = 20

let Bubble = 0

alert ("A continuación debes agregar productos para mudanza, el sistema los irá agregando a cajas")

function addBgbox () {


    for (let BgBox = 1; BgBox <= 5;){

        const introbox = parseInt (prompt ("Coloque el tamaño del artículo: Grande 41 a 60 - Mediano 21 a 40 - Pequeño 20 o menos"));

        if (introbox <= Bgart && introbox > Mdart) {
            alert ("Artículo grande agregado a caja grande");
            console.log ("Artículos en caja Grande: " + BgBox)
            BgBox++
        }
        else if (introbox <= Mdart && introbox > SmArt) {
            alert ("Artículo mediano agregado a caja grande");
            console.log ("Artículos en caja Grande: " + BgBox)
            BgBox++
        }

        else if (introbox <= SmArt) {
            alert ("Artículo pequeño agregado a caja grande");
            console.log ("Artículos en caja Grande: " + BgBox)
            BgBox++
        }

        else if (introbox > Bgart) {
            alert ("El artículo es demasiado grande agregado a papel burbuja");
            Bubble++;
            console.log ("Artículos en papel burbuja: " + Bubble);
        }

        else {
            alert ("por favor introduzca un artículo válido");
        }

        
    }

    alert ("Caja grande llena")
}

addBgbox ();

