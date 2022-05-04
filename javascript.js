var sumar = document.getElementById("btn-sumar");
sumar.onclick = function() {
    var numero01 = document.getElementById("txt01").value * 1;
    var numero02 = document.getElementById("txt02").value * 1;

    var resultado = numero01 + numero02;

    alert(resultado);
}

var restar = document.getElementById("btn-restar");
restar.onclick = function() {
    var numero01 = document.getElementById("txt01").value * 1;
    var numero02 = document.getElementById("txt02").value * 1;

    var resultado = numero01 - numero02;

    alert(resultado);
}

var multiplicar = document.getElementById("btn-multiplicar");
multiplicar.onclick = function() {
    var numero01 = document.getElementById("txt01").value * 1;
    var numero02 = document.getElementById("txt02").value * 1;

    var resultado = numero01 * numero02;

    alert(resultado);
}

var dividir = document.getElementById("btn-dividir");
dividir.onclick = function() {
    var numero01 = document.getElementById("txt01").value * 1;
    var numero02 = document.getElementById("txt02").value * 1;

    var resultado = numero01 / numero02;

    alert(resultado);
}

var borrarTodo = document.getElementById("btn-limpiar");

borrarTodo.onclick = function() {
    document.getElementById("txt01").value = "";
    document.getElementById("txt02").value = "";
}

//Tabla Dinámica

function crearTabla() {
    var tabla = document.getElementById("tabla");
    var contenido = "";
    //cabecera
    contenido += "<table>";

    contenido += "<tr>";
    contenido += "<th>Nombre</th>";
    contenido += "<th>Apellido</th>";
    contenido += "<th>Edad</th>";
    contenido += "</tr>";
    //contenido
    contenido += "<tr>";
    contenido += "<td>Julieth</td>";
    contenido += "<td>Capuleto</td>";
    contenido += " <td>15</td>";
    contenido += "</tr>";

    contenido += "<tr>";
    contenido += "<td>Victor</td>";
    contenido += "<td>Frankestein</td>";
    contenido += "<td>30</td>";
    contenido += "</tr>";

    contenido += "<tr>";
    contenido += "<td>Jonathan</td>";
    contenido += "<td>Harker</td>";
    contenido += "<td>23</td>";
    contenido += "</tr>";

    contenido += "</table>";

    tabla.innerHTML = contenido;
}