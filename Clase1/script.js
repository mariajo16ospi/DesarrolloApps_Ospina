// console.log("hola")

// Cambiar el titulo cuando se le presiona el boton
// function cambiarTexto(){
//     document.getElementById("titulo").innerHTML = "Hola gente que programa mucho";
// }



// Seleccionamos los elementos
const agregarBtn = document.getElementById('agregarBtn');
const Input = document.getElementById('Input');
const lista = document.getElementById('lista');

// Evento para el botón Agregar
agregarBtn.addEventListener('click', function() {
    const nuevaTareaTexto = Input.value.trim(); // quitamos espacios
    if (nuevaTareaTexto === '') return; // si está vacío, no hace nada

    // Crear el nuevo <li>
    const nuevaTareaLi = document.createElement('li');
    nuevaTareaLi.textContent = nuevaTareaTexto;

    // Crear botón de eliminar
    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.style.marginLeft = '10px';
    eliminarBtn.style.color = 'white';
    eliminarBtn.style.backgroundColor = 'red';
    eliminarBtn.style.border = 'none';
    eliminarBtn.style.cursor = 'pointer';

    // Evento para eliminar el elemento específico
    eliminarBtn.addEventListener('click', function() {
        lista.removeChild(nuevaTareaLi);
    });

    // Agregar el botón al <li>
    nuevaTareaLi.appendChild(eliminarBtn);

    // Agregar el <li> a la lista
    lista.appendChild(nuevaTareaLi);

    // Limpiar el input
    Input.value = '';
});


