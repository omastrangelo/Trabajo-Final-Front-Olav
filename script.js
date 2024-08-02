//Envio de Formulario
//Declaro las variables que van a capturar la informacion 
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let telefono = document.getElementById("telefono");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");
let btnEnviar = document.getElementById("enviar");
let texto = []

//creo un evento que al hacer click se capture la informacion que se ingreso en los inputs 
btnEnviar.addEventListener("click", (e) => {
    // e.preventDefault(); // previene el comportamiento por defecto (de recarga) del formulario y permite capturar la informacion
    texto[0] = nombre.value; //pone el valor que se escribio en el input nombre en el primer elemento
    texto[1] = apellido.value; //pone el valor que se escribio en el input apellido en el primer elemento
    texto[2] = telefono.value; //pone el valor que se escribio en el input telefono en el primer elemento
    texto[3] = email.value; //pone el valor que se escribio en el input email en el segundo elemento
    texto[4] = mensaje.value; //pone el valor que se escribio en el input mensaje en el tercer elemento

    let blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
    //blob es un objeto de tipo fichero de datos planos inmutables que convierte lo que ingresamos en un formato de texto plano 

    saveAs(blob, "formulario.txt") //uso de la libreria filesaver
})

// Cards catálogo
