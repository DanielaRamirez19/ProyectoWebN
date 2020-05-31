$(document).on('ready', function () {
    $.getJSON("catalogo.json", function (json) {
        $('#select').empty();
        $('#select').append($('<option>').text("Select"));
        $.each(json, function (i, obj) {
            $('#usuarios').append($('<option>').text(obj.Nombre).attr('value', obj.Sala));
        });
    });
});

window.onload = function traerDatos() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        let datos = JSON.parse(this.responseText);
        let res= document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
                res.innerHTML += `
                    <tr>
                        <td>${item.Nombre}</td>
                        <td>${item.Duracion}</td>
                        <td>${item.Director}</td>
                    </tr>
                `
            }
      }
    });
    
    xhr.open("GET", "https://localhost:44359/api/Cine");
    xhr.send();
}