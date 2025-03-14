let amigos = [];

// Agrega un evento al input para detectar cuando se presiona la tecla Enter
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

// Función para agregar amigos a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco

    if (nombre) {
        amigos.push(nombre); // Agregar el nombre a la lista de amigos
        actualizarLista(); // Actualizar la lista mostrada en la interfaz
        input.value = ""; // Limpiar el input
    } else {
        alert("Debes ingresar un nombre antes de añadir");
    }
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    
    amigos.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;

        // Botón para eliminar un amigo de la lista
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Eliminar el nombre del array
    actualizarLista(); // Actualizar la interfaz
}

// Función para sortear un amigo sin repetir
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Todos los amigos fueron sorteados");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos.splice(indiceAleatorio, 1)[0]; // Eliminar y obtener el nombre
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class="sorteado">Tu amigo secreto es ${amigoSeleccionado}</li>`;
}

// Función para limpiar solo el mensaje de resultado sin reiniciar el sorteo
function limpiar() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Eliminar el mensaje mostrado en resultado
}

// Función para reiniciar completamente la aplicación
function reiniciar() {
    amigos = []; // Vaciar la lista de amigos
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista en la interfaz
    document.getElementById("resultado").innerHTML = ""; // Limpiar el mensaje del sorteo
    document.getElementById("amigo").value = ""; // Limpiar el input
}


