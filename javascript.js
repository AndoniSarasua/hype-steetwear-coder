const stock = [1,2,3,4,5,6];
var total;

for(let i=0; i<6; i++){
    const guardado = parseInt(localStorage.getItem([i]));
    stock[i] = parseInt(prompt ("Ingrese el stock del producto numero:",i));
    total = guardado + stock[i];
    console.log(total);
    const id = document.getElementById(i);
    if (stock[i] <= 0){
        console.log("NO HAY STOCK");
        id.remove();
    }
    localStorage.setItem([i], total);
}
