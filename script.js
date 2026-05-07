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

function validarFormulario() {
    let correo = document.getElementById("correo").value.trim();
    let mensajeUsuario = document.getElementById("mensajeUsuario").value.trim();
    let mensajeCorreo = document.getElementById("mensajeCorreo");
    let resumenDatos = document.getElementById("resumenDatos");

    resumenDatos.style.display = "none";
    resumenDatos.innerHTML = "";

    if (correo === "" || mensajeUsuario === "") {
        mensajeCorreo.innerText = "Debe completar el correo y el mensaje.";
        mensajeCorreo.style.color = "red";
    } else if (!correo.includes("@") || !correo.includes(".")) {
        mensajeCorreo.innerText = "Ingrese un correo electrónico válido.";
        mensajeCorreo.style.color = "red";
    } else if (mensajeUsuario.length < 10) {
        mensajeCorreo.innerText = "El mensaje debe tener al menos 10 caracteres.";
        mensajeCorreo.style.color = "red";
    } else {
        mensajeCorreo.innerText = "Formulario enviado correctamente.";
        mensajeCorreo.style.color = "green";

        resumenDatos.style.display = "block";
        resumenDatos.innerHTML = `
            <h3>Resumen del formulario</h3>
            <p><strong>Correo:</strong> ${correo}</p>
            <p><strong>Mensaje:</strong> ${mensajeUsuario}</p>
        `;
    }
}