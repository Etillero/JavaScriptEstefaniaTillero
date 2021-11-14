function calcularPresupuesto ( servUsuario , dUsuario){
    let cotizar;
    if (servUsuario == "CATA VINOS"){
        cotizar = cata * dUsuario;
        return cotizar
    }

    else if (servUsuario == "CELEBRACIONES"){
        cotizar = cele * dUsuario;
        return cotizar
    }

    else if (servUsuario == "TOUR"){
        cotizar = tou * dUsuario;
        return cotizar
    }

    else if (servUsuario == "PAQUETES"){
        cotizar = paque * dUsuario;
        return cotizar
    }
}

function calcularcuotas ( presupuesto , pagocuotas ){
    let cuotas;

    if( pagocuotas == 6){
        cuotas = presupuesto / 6;
        return cuotas
    }

    else if( pagocuotas == 3){
        cuotas = (presupuesto + (presupuesto * 0.10)) / 3;
        return cuotas
    }

    else if (pagocuotas == 12){
        cuotas = (presupuesto + (presupuesto * 0.16)) / 12;
        return cuotas
    }

    else if (pagocuotas == 18){
        cuotas = (presupuesto + (presupuesto * 0.21)) / 18;
        return cuotas
    }

}

class servicios{ 
    constructor( nombre,preciopordia,ubicacion) {

    this.nombre = nombre;
    this.preciopordia = preciopordia;
    this.ubicacion = ubicacion;
}
    acomprar () {
        alert("El producto seleccionado a cotirzar es: " + this.nombre + ". " + "por: " + this.preciopordia + " días")
        
    }    

      }

      let catavinos = new servicios ("Cata de Vinos",900,"Ciudad Mendoza");
      let tour = new servicios ("Tour",2500,"Ciudad Mendoza");
      let celebraciones = new servicios ("Celebraciones",8000,"Ciudad Mendoza");
      let paquetes = new servicios ("Paquetes",15000,"Ciudad Mendoza");


alert("Cotiza tu presupuesto aquí");

let cata = 900;
let cele = 8000;
let tou = 2500;
let paque = 15000;


let servUsuario = prompt("Indique el servicio a cotizar (Cata Vinos / Celebraciones / Tour / Paquetes)").toUpperCase();
let dUsuario = parseInt(prompt("Indique el número de días totales a requerir del servicio seleccionado (Días: 7, 15, 30)"));

let serviciousuario = new servicios (servUsuario, dUsuario, "Ciudad Mendoza");
console.log(serviciousuario);
serviciousuario.acomprar();

let presupuesto = calcularPresupuesto ( servUsuario , dUsuario);

alert("El costo total es de " + presupuesto + " pesos");
let respUsuario = prompt("Si desea avanzar calculando las cuotas disponibles con tarjeta VISA por favor indicar SI, caso contrario indicar ESC").toUpperCase();

if (respUsuario == "SI"){
    let pagocuotas = parseInt(prompt("Ingrese la cuota deseada (Sin interes: 6) (Con interes: 3, 12, 18)"));
    let cuotaspedidas = calcularcuotas ( presupuesto , pagocuotas );
    alert("Las cuotas te quedan en: " + cuotaspedidas + " pesos");
    
}

else if(respUsuario == "ESC" || respUsuario != "SI"){
    alert("Hasta pronto")
}




