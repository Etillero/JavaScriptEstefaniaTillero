let respuesta = "ANAKIN";
let intento = 1;
alert("Tienes 3 intentos para responder bien la siguiente pregunta");

for (let i = 0 ; i < 4 ; i++) {
    let respUsuario = prompt("¿Quién es Darth Vader?").toUpperCase();

    if (respUsuario == respuesta){

        alert("Respuesta correcta! La fuerza te acompaña.");
        break;
    }

    else {
        intento = intento + 1;
        if(intento == 4){
            alert("Lo siento, superaste todos los intentos");
            break;
        }
        
    }

}