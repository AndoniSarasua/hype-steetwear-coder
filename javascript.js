for(let i=1; i<5; i++){
let precio_cliente = prompt ("Ingrese el precio de su prenda que desea vender en USD:")
let cantidad_cliente = prompt ("Ingrese la cantidad que desea vender:")

function calcular_precio(precio, cantidad){
    precio_final= precio * cantidad - (precio*cantidad)*0.1
}

if((precio_cliente && cantidad_cliente)>0){
calcular_precio(precio_cliente, cantidad_cliente)
console.log ("Lo que usted obtendra al vender su prenda seran ",precio_final,"USD")
}
else{
console.log("Ingrese un precio y cantidad superior a 0")
}
}
//En el codigo la idea es lograr un algoritmo el cual calcule el precio final que le quedara al usuario al momento de vender en nuestra pagina y ser cobrada la comision de venta.
//Por el lado del ciclo no se me ocurrieron muchas ideas funcionales, pero use un for para que el ciclo se ejecute un numero especifico de veces.
