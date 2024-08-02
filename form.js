let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let tel = document.getElementById("telefono");
let email = document.getElementById("email");
let texto = document.getElementById("mensaje");
let btnEnviar = document.getElementById("enviar");
let informacion = [];

btnEnviar.addEventListener("click", ()=>{
   // e.preventDefault(); // previene el comportamiento por defecto de la recarga del formulario.
    if (!format.reportValidity()){
        return; // esto lo vi en la clase de Mauricio, leer documentacion para entender su funcionamiento.
    }

    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = tel.value;
    informacion[3] = email.value;
    informacion[4] = texto.value;
    let blob = new Blob([informacion], {type:"text/plain;charset=utf-8"});
    //blob es un objeto de tipo fichero de datos planos inmutables convierte lo que ingresamos en formato texto plano.
    //uso de libreria filesaver
    saveAs(blob, "formulario.txt")
})