// console.log("hola")

// Cambiar el titulo cuando se le presiona el boton
// function cambiarTexto(){
//     document.getElementById("titulo").innerHTML = "Hola gente que programa mucho";
// }



// Seleccionamos los elementos
const agregarBtn = document.getElementById('agregarBtn');
const Input = document.getElementById('Input');
const lista = document.getElementById('lista');

// Evento para el botón
agregarBtn.addEventListener('click', function() {
    const nuevaTareaTexto = Input.value.trim(); // quitamos espacios
    if (nuevaTareaTexto === '') return; // si está vacío, no hace nada

    // Crear el nuevo <li>
    const nuevaTareaLi = document.createElement('li');
    nuevaTareaLi.textContent = nuevaTareaTexto;

    // Agregar el <li> a la lista
    lista.appendChild(nuevaTareaLi);

    // Limpiar el input
    Input.value = '';
});
