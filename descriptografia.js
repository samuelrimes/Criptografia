function descriptografa(){
	var texto = $("#texto2").val();
	var chave = $("#chave2").val();
	console.log(texto);
	texto = texto.split(" ");


	$("#descifrado").append($("<h3/>").text("descriptografia:  ")).append($("<p />").text(texto));
}