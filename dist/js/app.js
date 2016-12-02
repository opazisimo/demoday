var template= '<div class="card contiene col s12 m12">'+
					'<div class="col s5 m3">'+
					   	'<div class="image">'+
					   		'<img src="{{imagen}}">'+
				       	'</div>'+
				    '</div>'+
				    '<div class="col s5 m6">'+
					    '<p class="nomAlum"><span>{{nombre}}</span></p>'+
					    '<p class="nomEdad"><span>{{edad}}</span></p>'+
					    '<p class="nomSede"><span>{{sede}}</span></p>'+
					'</div>'+
					'<div class="col s2 m3">'+
						'<div class="vermas">'+
					    	'<a id="enlace"><i class="fa fa-plus-circle fa-3x ic-color" aria-hidden="true"></i></a>'+
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
  $("#contenedor").on("click", ".vermas", guardarDirigir);
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
