// Query Selector
const heading = document.querySelector('.header__texto h2'); // devuelve 0 o 1 elemento
console.log(heading);
heading.textContent = 'Nuevo Heading'; // Cambia el contenido de la etiqueta
heading.classList.add('nueva-clase'); // Añade una clase

// Query Selector all
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
enlaces[0].textContent = 'Nuevo Texto para Enalce';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');

// Get Element By ID
const heading2 = document.getElementById('heading');
console.log(heading2);


// Generar HTML
// Genearar un nuevo enlace
nuevoEnlace = document.createElement('H1');

// Agregamos el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregamos texto
nuevoEnlace.textContent = 'Nuevo enlace';

// Agregamos la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregar elemento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


//Eventos
window.addEventListener('load', function () { // Evento que se ejecuta cuando termine de cargar toda la pagina y su contenido

});

window.addEventListener('DOMContentLoaded', function () { // Funcion que se ejecuta cuando termina de cargar el contenido DOM osea el HTML

})

window.onload;  // La misma funcion que load del even listener
window.onscroll; // Funcion que se llama cada vez que se hace un scroll en la página


//Seleccionar elementos y asociar eventos

const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function (evento) {
    evento.preventDefault(); // Evita que realice las acciones por defecto para por ejemplo realizar validaciones previamente
});

//Eventos de los inputs y los textarea
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

nombre.addEventListener('change', function () { }); // Ejecuta el evento cuando valida el campo.
nombre.addEventListener('input', function (ev) {
    console.log(ev.target.value); // Recupera el valor del campo
}); // Ejecuta el evento cada vez que escribe algo.