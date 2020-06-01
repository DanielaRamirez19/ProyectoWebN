$(document).on('ready', function () {
    $.getJSON("https://localhost:44359/api/Cine?descri=", function (json) {
        $('#select').empty();
        $('#select').append($('<option>').text("Select"));
        $.each(json, function (i, obj) {
            $('#usuarios').append($('<option>').text(obj.Nombre).attr('value', obj.Descripcion));
        });
    });
});


function seleccionFecha() {  
    var e = document.getElementById("usuarios");
    var strUser = e.options[e.selectedIndex].text;
    var api = "https://localhost:44359/api/Cine?pelicula=" + strUser;
    $.getJSON(api, function (json) {
        $('#select').empty();
        $('#select').append($('<option>').text("Select"));
        $.each(json, function (i, obj) {
            $('#usuariosss').append($('<option>').text(obj.Dia).attr('value', obj.Pelicula));
        });
    });
}

function seleccionHora() {  
    var p = document.getElementById("usuarios");
    var pelicula = p.options[p.selectedIndex].text;
    var d = document.getElementById("usuarios");
    var dia = d.options[d.selectedIndex].text;
    var api = "https://localhost:44359/api/Cine?pelicula=" + pelicula + " &Dia=" + dia;
    console.log(api);
    $.getJSON(api, function (json) {
        $('#select').empty();
        $('#select').append($('<option>').text("Select"));
        $.each(json, function (i, obj) {
            $('#usuarioss').append($('<option>').text(obj.Dia).attr('value', obj.Pelicula));
        });
    });
}

window.onload = function traerDatos() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState == 4 && this.status == 200) {
        //console.log(this.responseText);
        let datos = JSON.parse(this.responseText);
        let res= document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
                res.innerHTML += `
                    <tr>
                        <td>${item.Pelicula}</td>
                        <td>${item.Sala}</td>
                        <td>${item.Dia}</td>
                        <td>${item.Hora}</td>
                    </tr>
                `
            }
      }
    });
    
    xhr.open("GET", "https://localhost:44359/api/Cine?progr=");
    xhr.send();
}