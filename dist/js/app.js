var template= '<div class="col s12 m12">'+
				   '<div class="card horizontal">'+
					   '<div class="card-image">'+
					   	'<img src="{{imagen}}">'+
				       '</div>'+
					    '<div class="card-stacked">'+
						    '<div class="card-content">'+
							    '<p><b>Nombre:</b> <span>{{nombre}}</span></p>'+
							    '<p><b>Edad:</b> <span>{{edad}}</span></p>'+
							    '<p><b>Nacionalidad:</b> <span>{{nacionalidad}}</span></p>'+
							    '<p><b>Sede:</b> <span>{{sede}}</span></p>'+
						    '</div>'+
						    '<div class="card-action">'+
						    	'<a href="perfil.html" id="enlace"><b>Calificar</b> <i class="tiny material-icons">star</i></a>'+
						    '</div>'+
					    '</div>'+
				    '</div>'+
			   '</div>';

var guardarDirigir= function(){
	var informacion= $(this).prev().html();
	var src= $(this).parent().prev().children().attr("src");
	localStorage.setItem("informacion", informacion);
	localStorage.setItem("src", src);
	window.location= "perfil.html";
}

var infoAlumna= localStorage.getItem("informacion");
var srcAlumna= localStorage.getItem("src");

$(document).ready(function(){
	$.get("/info.json", function(response){
		var templateEstud= "";
		$.each(response, function(i, estudiante){
			templateEstud += template
							.replace("{{nombre}}", estudiante.nombre)
							.replace("{{edad}}", estudiante.edad)
							.replace("{{nacionalidad}}", estudiante.nacionalidad)
							.replace("{{sede}}", estudiante.sede)
              .replace("{{imagen}}", estudiante.foto);
		});
		$("#contenedor").html(templateEstud);
	});

  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  $("#contenedor").on("click", ".card-action", guardarDirigir);
  $("#foto").attr("src", srcAlumna);
  $("#informacion").html(infoAlumna);
});

$(function() {
	$(".ratyli").ratyli();
	$("#demo5 .ratyli").ratyli({
		full:'<i class="small material-icons">star</i>',
		empty:'<i class="small material-icons">star</i>',

	});
});