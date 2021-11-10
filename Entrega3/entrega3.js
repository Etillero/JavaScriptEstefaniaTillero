function calcularPresupuesto ( servUsuario , dUsuario){
    let cotizar;
    if (servUsuario == "CATA VINOS"){
        cotizar = catavinos * dUsuario;
        return cotizar
    }

    else if (servUsuario == "CELEBRACIONES"){
        cotizar = celebraciones * dUsuario;
        return cotizar
    }

    else if (servUsuario == "TOUR"){
        cotizar = tour * dUsuario;
        return cotizar
    }

    else if (servUsuario == "PAQUETES"){
        cotizar = paquetes * dUsuario;
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


alert("Cotiza tu presupuesto aquí");

let catavinos = 900;
let celebraciones = 8000;
let tour = 2500;
let paquetes = 15000;

let servUsuario = prompt("Indique el servicio a cotizar (Cata Vinos / Celebraciones / Tour / Paquetes)").toUpperCase();
let dUsuario = parseInt(prompt("Indique el número de días totales a requerir del servicio seleccionado (Días: 7, 15, 30)"));

alert("Usted selecciono cotizar sobre el servicio " + servUsuario + " por " + dUsuario + " días... Estamos armando su presupuesto...");

let presupuesto = calcularPresupuesto ( servUsuario , dUsuario);

alert("El costo total es de " + presupuesto + " pesos");
let respUsuario = prompt("Si desea avanzar calculando las cuotas disponibles con tarjeta VISA por favor indicar SI, caso contrario indicar ESC").toUpperCase();

if (respUsuario == "SI"){
    let pagocuotas = parseInt(prompt("Ingrese la cuota deseada (Sin interes: 6) (Con interes: 3, 12, 18)"));
    let cuotaspedidas = calcularcuotas ( presupuesto , pagocuotas );
    alert("Las cuotas te quedan en: " + cuotaspedidas);
    
}

else if(respUsuario == "ESC" || respUsuario != "SI"){
    alert("Hasta pronto")
}




/* function calcularInteres (monto,cuotas){ 
let intereses;
if (cuotas ==6){
    intereses = monto * 0.10
    return intereses
}
else if (cuotas ==9){
    intereses = monto * 0.30
    return intereses
}
else if (cuotas ==12){
    intereses = monto * 0.50
    return intereses
}
else if (cuotas ==24){
    intereses = monto * 0.70
    return intereses 
}
}

function iva (monto){
    return monto *0.21;

}

 let monto = parseInt(prompt( "ingrese monto"));
 let cuotas = prompt("Ingrese cuotas a pagar 6 /9 /12");
 let precioFinal = monto + calcularInteres( monto , cuotas + iva(monto) );

 alert (precioTotal);

 let producto = prompt( "Cuando quieres viajar?")
*/

