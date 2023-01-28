/// EL ciclo DO/while no se utiliza mucho

/// BUCLE FOR

/*
ESTRUCTURA

for (desde (declarar la variable desde donde va a arrancar con let); hasta; actualización ===>> Qué va a ir haciendo en cada repetición){
    codigo a repetir
}
*/

for (let i = 0; i < 100; i++){
    console.log ("Hola");
}

// BAckticks====> let mensaje = `${} ${} tu edad es ${}` (esto llama directamente las variables para simplificar la escritura de código)


// HAciendo una tabla de multiplicar

let numero = parseInt (prompt ("Ingrese el número"));

for (let i= 1; i <= 10; i++) {
    let resultado = numero * i;
    let mensaje = `${numero} X ${i} = ${resultado}`;
    alert (mensaje);
}

/// EJEMPLO DE TURNERO

for ( let turno = 1; turno <= 7; turno++){
    let nombre = prompt ("Ingrese su nombre");
    let mensaje = `Turno # ${turno} + ${nombre}`
    alert (mensaje);
}

// % Residuo: Es lo que queda de una división ejemplo let residuo = 11 % 2 = 1 es decir que 11 se divide en 2 y da 5 pero queda de residuo 1 porque se divide en 10

// Estructura del WHILE <<<<<<<<<<<<<<<<

/*
while (condicion) {
    console.log ("Hola") (lo que va a pasar dentro del código)
}
*/

//>>>>>>> SWITCH <<<<<<<<<<<

/*
Estructura del Switch

switch (valor) {
    case valor1:
        codigo a ejecutar cuando el valor coincide con el valor2
        break;


        case valor2:
            codigo a ejecutar cuando el valor coincide con el valor2
            break;
            
    default:
        codigo a ejecutar cuando el valor no coincide con ninguno de los anteriores valores
        break; (SIEMPRE DEBE IR BREAK)
}
*/


