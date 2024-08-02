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

    informacion[0] = "Nombre: " + nombre.value;//pone el valor que se escribio en el input nombre en el primer elemento
    informacion[1] = "Apellido: " +  apellido.value;//pone el valor que se escribio en el input apellido en el segundo elemento
    informacion[2] = "Teléfono: " + tel.value; //pone el valor que se escribio en el input telefono en el tercero elemento
    informacion[3] = "Email: " + email.value; //pone el valor que se escribio en el input email en el cuarto elemento
    informacion[4] = "Mensaje: " + texto.value; //pone el valor que se escribio en el input mensaje en el quinto elemento
    let blob = new Blob([informacion], {type:"text/plain;charset=utf-8"});
    //blob es un objeto de tipo fichero de datos planos inmutables convierte lo que ingresamos en formato texto plano.
    //uso de libreria filesaver
    saveAs(blob, "formulario.txt")
})