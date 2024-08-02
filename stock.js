/* Se declaran los arrays necesarios para comnformar las cards, y llevar adelante los procesos de validacion, control de stock y compra */
let cardprod = document.getElementById("container");
let compraTotal = document.getElementById("total")
let total = 0;
let productos = ["Cafe x500gr", "Cola Cola x2.5l", "Leche x1l", "Harina x1kg", "Detergente x550ml", "Lentejas", "Arvejas", "Banana x1Kg", "Manzana x1Kg", "Tomate x1Kg", "Aceite x500ml", "Escoba"]
let precios = [10000, 850, 500, 300, 850, 150, 400, 150, 180, 300, 600, 800]
let stock = [4,5,4,30,16,4,8,4,4,1,20,4]
let imagen = ["./Img/cafe.png", "./Img/cola.png", "./Img/leche.png", "./Img/harina.png", "./Img/detergente.png", "./Img/lentejas.png", "./Img/arvejas.png", "./Img/bananas.png", "./Img/manzana.png", "./Img/tomate.png", "./Img/oliva.png", "./Img/escoba.png"];

/*Cargamos las cards dentro del contenedor con un bucle for que recorre los arrays de Producto, Precio, Stock e imagenes */
for (let i = 0; i < productos.length; i++) {
    cardprod.innerHTML+=`
                <div class="card">
                    <img src="${imagen[i]}" alt="Producto">
                    <h2>${productos[i]}</h2>
                    <p>Precio: $${precios[i]}</p>
                    <p>Stock: <span id="stock${i}">${stock[i]}</span></p>
                    <input type="number" id="entrada${i}" value="0"  placeholder="Cantidad">
                    <button id="btn${i}">Comprar</button>
                </div>`
}

/* establecemos la funcion comprar para que se controle el stock y no se pueda comprar por debajo de 0 ni mayor al stock determinado, si la compra es valida, tambien se descuenta del stock que se muestra en la card y se suma al valor total de la compra */
function comprar(index) {
    const stockHTML = document.getElementById(`stock${index}`);
    const entradaHTML = document.getElementById(`entrada${index}`);
    const stockProd = parseInt(stockHTML.textContent);
    const cantidad = parseInt(entradaHTML.value);
        if (!isNaN(cantidad) && cantidad > 0 && cantidad <= stockProd && cantidad == entradaHTML.value) {
            stockHTML.textContent = stockProd-cantidad;
            entradaHTML.value= "";
            total += precios[index] * cantidad;
            compraTotal.textContent= total;
            alert("Compra realizada exitosamente");
        }else if (stockProd == 0){
            alert("No hay mas stock");
        }
        else{
            alert("Cantidad no valida. Debe ser mayor a 0 y menor o igual al stock")
        }
}

/* se crea un evento  de tipo de escuchar click para el boton de todas las cards, para que cuando se presione "comprar", se ejecute la funcion, se valide el numero ingresado y de ser correcto se realice la compra*/
    for (let i = 0; i < productos.length; i++) {
        document.getElementById(`btn${i}`).addEventListener("click", () =>{
        comprar(i)
    })
}