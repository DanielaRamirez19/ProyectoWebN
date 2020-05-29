//console.log("correcto");

$(document).on('ready', function () {
    $.getJSON("catalogo.json", function (json) {
        $('#select').empty();
        $('#select').append($('<option>').text("Select"));
        $.each(json, function (i, obj) {
            $('#usuarios').append($('<option>').text(obj.Nombre).attr('value', obj.Sala));
        });
    });
});


document.querySelector("#boton").addEventListener("click", traerDatos());

function traerDatos() {

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "catalogo.json", true);

    xhttp.send();

    xhttp.overrideMimeType('text/xml');

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res= document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
                //console.log(item.Sala);
                res.innerHTML += `
                    <tr>
                        <td>${item.Nombre}</td>
                        <td>${item.Sala}</td>
                        <td>${item.Dia}</td>
                        <td>${item.Hora}</td>
                    </tr>
                `
            }
        }
    }
}