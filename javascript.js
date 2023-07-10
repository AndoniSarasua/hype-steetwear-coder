const stock = [1,2,3,4,5,6];

for(let i=0; i<6; i++){
stock[i]  = prompt ("Ingrese el stock del producto numero:",i)
console.log(stock[i])
const id = document.getElementById(i)
if (stock[i]<=0){
    console.log("NO HAY STOCK")
    id.remove()
}
}
//Algoritmo el cual elimina el producto que no tenga stock. Todo trabajado sobre los productos destacados del index.
