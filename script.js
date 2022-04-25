var texto=document.getElementById("texto");
var textoAlerta=document.getElementById("textoAlerta");

texto.addEventListener("keyup", function(evento){
	if(event.getModifierState("CapsLock")){
		textoAlerta.style.display="inline-block";
	}else textoAlerta.style.display="none";
})
