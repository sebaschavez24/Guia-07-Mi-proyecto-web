function saludar() {
    let nombre = document.getElementById("nombre").value.trim();
    let resultado = document.getElementById("resultado");

    if (nombre === "") {
        resultado.innerText = "Por favor, ingresa tu nombre.";
        resultado.style.color = "red";
    } else if (nombre.length < 3) {
        resultado.innerText = "El nombre debe tener al menos 3 caracteres.";
        resultado.style.color = "red";
    } else {
        resultado.innerText = "Hola " + nombre + ", bienvenido al sistema.";
        resultado.style.color = "green";
    }
}

function validarCorreo() {
    let correo = document.getElementById("correo").value.trim();
    let mensajeCorreo = document.getElementById("mensajeCorreo");

    if (correo === "") {
        mensajeCorreo.innerText = "Debe ingresar un correo.";
        mensajeCorreo.style.color = "red";
    } else if (!correo.includes("@") || !correo.includes(".")) {
        mensajeCorreo.innerText = "Ingrese un correo electrónico válido.";
        mensajeCorreo.style.color = "red";
    } else {
        mensajeCorreo.innerText = "Correo registrado correctamente.";
        mensajeCorreo.style.color = "green";
    }
}