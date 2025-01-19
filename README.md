# Alura latam - ONE (Challenge de amigo secreto)

En este proyecto se desarrolló un pequeño ejercicio utilizando una plantilla HTML y CSS que he hido modificando a gusto.

El ejercicio consistió en que, <i>a partir de un input de texto, poder ingresar nombres de amigos tantos como el usuario quiera y luego con un botón elegir uno de esos nombres (que se muestra visualmente) de manera aleatoria para revelar así el amigo secreto.</i>

<div align='center'>
<img src='https://i.ibb.co/b24ghsK/alura-insignia.webp' width='350px'>
</div>

#### ¿Cómo lo desarrollé yo?

- En primer lugar, realicé algunos cambios visuales de colores y posicionado de elementos. Agregué algunos elementos como el título de la lista de amigos y un botón extra estilizado que permita reiniciar la aplicación.

#### ¿Qué lógica llevaste a cabo?

- En principio, delegué las tareas a distintas funciones que me permitiría reutilizar código en los lugares que sean necesarios. Utilicé funciones de JavaScript que manipulan el **DOM**, también modifiqué estilos con el propósito de mostrar elementos cuando yo consideré necesario y utilicé una pequeña expresión regex para validar texto del input.
- A continuación, elegí no utilizar `innerHtml` y preferí utilizar los objetos que manipulan el DOM que provee JavaScript. Así ingresé y eliminé elementos al DOM de manera dinámica.
- También hice uso de funciones (o métodos) de `string` para obtener el texto del input y normalizarlo con el siguiente formato:
```js
"MANOLO" -> "Manolo"
"josé" -> "José"
"rIcArDo" -> "Ricardo"
"MARÍA" -> "María"
```
- Finalmente, comenté algunas partes del código para indicar al programador de manera sencilla qué se está realizando en esas partes.