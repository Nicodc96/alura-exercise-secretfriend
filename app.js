const listaAmigosTitulo = document.querySelector(".lista-amigos-titulo");
const ulListaAmigos = document.querySelector("#listaAmigos");
const btnAgregar = document.querySelector(".button-add");
const btnSortear = document.querySelector(".button-draw");
const btnReiniciar = document.querySelector(".button-reload");
const inputTexto = document.querySelector("#amigo");
const ulResultado = document.querySelector("#resultado");
const pTextIncorrecto = document.querySelector(".input-incorrecto-text");
const arrayAmigos = [];

// Oculta el texto de título de lista de amigos y el botón de reiniciar al comienzo de la app
const hideTitleAndButtonReload = () => {
    listaAmigosTitulo.style.display = "none";
    btnReiniciar.style.display = "none";
    if (btnAgregar.hasAttribute("disabled")) btnAgregar.removeAttribute("disabled");
    if (btnAgregar.classList.contains("btn-disabled")) btnAgregar.classList.remove("btn-disabled");
    pTextIncorrecto.textContent = "¡El valor ingresado debe tener sólo letras!";
}

// Genera elementos <li></li> por cada item del array de amigos
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

// Alternativa a innerHtml, elimina los nodos-hijos de un contenedor de manera segura.
const limpiarLista = (contenedor) => {
    while (contenedor.hasChildNodes()){
        contenedor.removeChild(contenedor.firstElementChild);
    }
}

const setIncorrectAdvice = (incorrectText) => {
    inputTexto.classList.add("input-name-incorrecto");
    textoIncorrecto.style.display = "block";
    pTextIncorrecto.textContent = incorrectText;
}

hideTitleAndButtonReload();

const randomAmigo = () => Math.floor(Math.random() * arrayAmigos.length);
const textoIncorrecto = document.querySelector(".input-incorrecto-text");
textoIncorrecto.style.display = "none";

const agregarAmigo = () => {
    if (inputTexto && inputTexto.value){
        const regexValidator = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
        let inputTextoValidated = inputTexto.value.toLowerCase()[0].toUpperCase() + inputTexto.value.slice(1).toLowerCase();
        inputTextoValidated = inputTextoValidated.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remueve acentos en el string
        if (!regexValidator.test(inputTexto.value)){
            // Si el texto del input es incorrecto, informo al usuario
            setIncorrectAdvice("¡El valor ingresado debe tener sólo letras!");
        } else if (arrayAmigos.includes(inputTextoValidated)){
            // Si el nombre ya se encuentra en la lista, lo indico con el mensaje adecuado
            setIncorrectAdvice("¡El nombre ya se encuentra en la lista!");
        } else{
            if (inputTexto.classList.contains("input-name-incorrecto")) inputTexto.classList.remove("input-name-incorrecto");        
            textoIncorrecto.style.display = "none";
            // Agrega al array el texto ingresado pero con el primer caracter en mayúsculas y lo demás en minúsculas
            arrayAmigos.push(inputTextoValidated);
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
        // Al sortear un amigo, muestro el botón de Reiniciar
        btnReiniciar.style.display = "flex";
        // Impido que vuelva a sortear otro amigo limpiando la lista original.
        btnAgregar.setAttribute("disabled", "");
        btnAgregar.classList.add("btn-disabled");
        arrayAmigos.length = 0;
    }
}

// Se limpia el array, los nodos hijos del <ul></ul>, se oculta <div class="container-lista"> y el botón de reinicio
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