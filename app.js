/* 
    El principal objetivo de este desafío es fortalecer tus habilidades
    en lógica de programación. Aquí deberás desarrollar la lógica 
    para resolver el problema.
*/

const listaAmigosTitulo = document.querySelector(".lista-amigos-titulo");
const ulListaAmigos = document.querySelector("#listaAmigos");
const btnAgregar = document.querySelector(".button-add");
const btnSortear = document.querySelector(".button-draw");
const btnReiniciar = document.querySelector(".button-reload");
const inputTexto = document.querySelector("#amigo");
const ulResultado = document.querySelector("#resultado");
const arrayAmigos = [];

const hideTitleAndButtonReload = () => {
    listaAmigosTitulo.style.display = "none";
    btnReiniciar.style.display = "none";
    
}

const mostrarListaAmigos = (lista) => {
    if (lista && lista.length > 0){
        limpiarLista(ulListaAmigos);
        lista.forEach(amigo => {
            let li = document.createElement("li");
            li.textContent = amigo;
            ulListaAmigos.appendChild(li);
        });
    }
}

const limpiarLista = (contenedor) => {
    while (contenedor.hasChildNodes()){
        contenedor.removeChild(contenedor.firstElementChild);
    }
}

hideTitleAndButtonReload();

const randomAmigo = () => Math.floor(Math.random() * arrayAmigos.length);
const textoIncorrecto = document.querySelector(".input-incorrecto-text");
textoIncorrecto.style.display = "none";

const agregarAmigo = () => {
    if (inputTexto && inputTexto.value){
        const regexValidator = /^[a-zA-Z]+$/;
        if (!regexValidator.test(inputTexto.value)){
            inputTexto.classList.add("input-name-incorrecto");
            textoIncorrecto.style.display = "block";
        } else{
            // Agrega el string con el primer caracter en mayúsculas y lo demás en minúsculas
            if (inputTexto.classList.contains("input-name-incorrecto")) inputTexto.classList.remove("input-name-incorrecto");        
            textoIncorrecto.style.display = "none";
            arrayAmigos.push(inputTexto.value.toLowerCase()[0].toUpperCase() + inputTexto.value.slice(1).toLowerCase());
            listaAmigosTitulo.style.display = "block";
            mostrarListaAmigos(arrayAmigos);
            inputTexto.value = "";
        }
    }
}

const sortearAmigo = () => {
    if (arrayAmigos.length > 0){
        limpiarLista(ulResultado);
        const liResultado = document.createElement("li");
        liResultado.textContent = `Tu amigo secreto es: ¡${arrayAmigos[randomAmigo()]}!`;
        ulResultado.appendChild(liResultado);
        btnReiniciar.style.display = "flex";
    }
}

const reiniciarSorteo = () => {
    arrayAmigos.length = 0;
    hideTitleAndButtonReload();
    limpiarLista(ulListaAmigos);
    limpiarLista(ulResultado);
    inputTexto.value = "";
}

btnAgregar.addEventListener("click", agregarAmigo);
btnSortear.addEventListener("click", sortearAmigo);
btnReiniciar.addEventListener("click", reiniciarSorteo);