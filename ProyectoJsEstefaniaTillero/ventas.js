
function calcularPresupuesto ( servUsuario , dUsuario){
    let cotizar;
    if (servUsuario == "CARTAS"){
        cotizar = carta * dUsuario;
        return cotizar
    }
  
    else if (servUsuario == "HISTORIETAS"){
        cotizar = histo * dUsuario;
        return cotizar
    }
  
    else if (servUsuario == "DISFRACES"){
        cotizar = disfra * dUsuario;
        return cotizar
    }
  
    else if (servUsuario == "SOUVENIRS"){
        cotizar = sou * dUsuario;
        return cotizar
    }
  }
  
  function calcularcuotas ( presupuesto , pagocuotas ){
    let cuotas;
  
    const arrayCuotas = [6,3,12,18];
  
    if( pagocuotas == arrayCuotas[0]){
        cuotas = presupuesto / arrayCuotas[0];
        return cuotas
    }
  
    else if( pagocuotas == arrayCuotas[1]){
        cuotas = (presupuesto + (presupuesto * 0.10)) / arrayCuotas[1];
        return cuotas
    }
  
    else if (pagocuotas == arrayCuotas[2]){
        cuotas = (presupuesto + (presupuesto * 0.16)) / arrayCuotas[2];
        return cuotas
    }
  
    else if (pagocuotas == arrayCuotas[3]){
        cuotas = (presupuesto + (presupuesto * 0.21)) / arrayCuotas[3];
        return cuotas
    }
  
  }
  
  class servicios{ 
    constructor( nombre,costoproducto,cantidad) {
  
    this.nombre = nombre;
    this.costoproducto = costoproducto;
    this.cantidad = cantidad;
  }
    acomprar () {
        alert("El producto seleccionado a cotirzar es: " + this.nombre + ". " + "por: " + this.costoproducto + "regalos")
        
    }    
  
      }
  
      let cartas = new servicios ("Cartas",900,"30");
      let historietas = new servicios ("Historietas",2000,"50");
      let disfraces = new servicios ("Disfraces",8000,"40");
      let souvenirs = new servicios ("Souvenirs",1800,"30");
  
  
  alert("Cotiza tus regalos aqui");
  
  let carta = 900;
  let histo = 2000;
  let disfra = 8000;
  let sou = 1800;
  
  
  let servUsuario = prompt("Indique el servicio a cotizar (Cartas / Historietas / Disfraces/ Souvenirs)").toUpperCase();
  let dUsuario = parseInt(prompt("Indique el número de productos totales a requerir del servicio seleccionado (productos: 1, 2, 3)"));
  
  let serviciousuario = new servicios (servUsuario, dUsuario, "Star Wars");
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