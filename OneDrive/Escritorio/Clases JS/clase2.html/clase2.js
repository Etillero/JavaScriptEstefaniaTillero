
let numero1 = parseInt(prompt("Ingresa un numero menor o igual 50"));
if (numero1 > 50) {
    alert("El numero ingresado es mayor a 50. " + "Ingresaste: " + numero1);
}
else if (numero1< 50) {
    alert("El numero ingresado es menor a 50. " + "Ingresaste: " + numero1);
}
else {
    alert("El numero ingresado es igual a 50");
}

let paisIngresado = prompt("Ingresa tu pais de residencia");

if ((paisIngresado == "Venezuela") || (paisIngresado == "venezuela") || (paisIngresado == "VENEZUELA")){
    alert("Esta pagina no esta disponible para Venezuela");
}
else{
    alert("Bienvenido");
}