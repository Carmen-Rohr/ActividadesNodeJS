//definir un codigo que realice la siguiente tarea
//pedirle al usuario  el precio de un producto 
//van a imprimir/escribir en pantalla  (don document.write)
//el valor de ese precio + IVA
// el valor con el iva es este...

let producto = prompt("Por favor, ingrese un producto", "");

let precio = prompt("Por favor, ingrese su precio", "");

document.write("<p> El precio del producto " + producto + " es: $" + precio + "</p>");

let iva = prompt("Por favor, ingrese el porcentaje de IVA: ");

let precioConIva = Number.parseFloat(precio) + Number.parseFloat(precio) * Number.parseInt(iva)/100;
document.write("<p> El valor de ese producto + IVA es: $" + precioConIva.toFixed(2) + "</p>");

//Parte 2, puede hacer la conversion a dolar u otra moneda extranjera y mostrarla en pantalla
let precioEuro = Number.parseFloat(precio) / 926.22;
document.write("<p>El precio del producto en Euros es: " + precioEuro.toFixed(2) + "€</p>");

let precioConIvaEuro = precioConIva / 926.22;
document.write("<p>El precio del producto mas IVA en Euros es: " + precioConIvaEuro.toFixed(2) + "€</p>");

// Parte 3 preguntarle al ususario cuantos productos (cantidad)
//expresarla en valor de precio + iva  y en moneda extranjera
let cantidad = prompt("Por favor, ingrese la cantidad del producto que desea: ");
let totalEuros = Number.parseInt(cantidad) * precioConIvaEuro;
let total = Number.parseInt(cantidad) * precioConIva;
document.write("<p>El total que deberá abonar por " + cantidad + " unidades del producto, con el IVA incluido es: " + totalEuros.toFixed(2) + "€ o $" + total.toFixed(2) + "</p>");
